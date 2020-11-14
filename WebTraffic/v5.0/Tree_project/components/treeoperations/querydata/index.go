package querydata

import (
	"encoding/json"

	"../../decode/querydecode"
	"../../treestorage"
)

type outputForm struct {
	Dim     []querydecode.TrafficForm
	Metrics []querydecode.TrafficForm
}

//QueryData for getting data from the map
func QueryData(tree map[string]interface{}, data querydecode.WebTraffic) string {

	dimData := make([]querydecode.TrafficForm, 0)

	metricData := make([]querydecode.TrafficForm, 0)

	for _, v := range data.Dim {

		if v.Key == "country" {

			metricStruct := querydecode.TrafficForm{

				Key: v.Key,
				Val: v.Val,
			}

			dimData = append(dimData, metricStruct)

			for _, checkMap := range tree["Node"].([]treestorage.Node) {

				if checkMap.Country == v.Val {

					// fmt.Println(checkMap.Country, "===", checkMap.Webreq, "===", checkMap.Timespent)

					metricWebreq := querydecode.TrafficForm{

						Key: "webreq",
						Val: checkMap.Webreq,
					}

					metricTimespent := querydecode.TrafficForm{

						Key: "timespent",
						Val: checkMap.Timespent,
					}

					metricData = append(metricData, metricWebreq)

					metricData = append(metricData, metricTimespent)

				}

			}

		}

	}

	fetchedData := outputForm{

		Dim:     dimData,
		Metrics: metricData,
	}

	encodedData, _ := json.Marshal(fetchedData)

	return string(encodedData)

}
