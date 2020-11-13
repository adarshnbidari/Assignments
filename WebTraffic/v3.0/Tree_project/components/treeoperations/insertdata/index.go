package insertdata

import (
	"fmt"

	"../../decodejson"
	"../../treestorage"
)

//InsertData for inserting data into the tree
func InsertData(data decodejson.WebTraffic) {

	iterateAndCheck(data)

}

func iterateAndCheck(data decodejson.WebTraffic) {

	m := treestorage.GetTree()

	isEmptyTree := len(m["Node"].([]treestorage.Node)) == 0

	if isEmptyTree {

		createNewNode(data, m)

	} else {

		addNewNode(data, m)

	}

}

func createNewNode(data decodejson.WebTraffic, m map[string]interface{}) {

	newNode := treestorage.Node{}

	newNode.Node = make([]treestorage.Node, 0)

	var currentWebReq = 0
	var currentTimeSpent = 0

	for _, v := range data.Dim {

		if v.Key == "country" {

			newNode.Country = v.Val.(string)

		}

	}

	for _, v := range data.Metrics {

		if v.Key == "webreq" {

			currentWebReq += int(v.Val.(float64))

			newNode.Webreq = int(v.Val.(float64))

		}

		if v.Key == "timespent" {

			currentTimeSpent += int(v.Val.(float64))

			newNode.Timespent = int(v.Val.(float64))

		}

	}

	m["Webreq"] = currentWebReq
	m["Timespent"] = currentTimeSpent

	m["Node"] = append(m["Node"].([]treestorage.Node), newNode)

	fmt.Println("Created new tree: \t", m)

}

func addNewNode(data decodejson.WebTraffic, m map[string]interface{}) {

	inputCurrentCountryName := ""
	inputCurrentDeviceName := ""

	currentWebreqcount := 0
	currentTimespentcount := 0

	//store the input country and device name from the input
	for _, v := range data.Dim {

		if v.Key == "country" {
			inputCurrentCountryName = v.Val.(string)
		}

		if v.Key == "device" {

			inputCurrentDeviceName = v.Val.(string)

		}

	}

	for _, v := range data.Metrics {

		if v.Key == "webreq" {

			m["Webreq"] = m["Webreq"].(int) + int(v.Val.(float64))
			currentWebreqcount += int(v.Val.(float64))

		}

		if v.Key == "timespent" {

			m["Timespent"] = m["Timespent"].(int) + int(v.Val.(float64))
			currentTimespentcount += int(v.Val.(float64))

		}

	}

	// if this is a first country to add
	if len(m["Node"].([]treestorage.Node)) == 0 {

		newCountry := treestorage.Node{

			Country:   inputCurrentCountryName,
			Webreq:    currentWebreqcount,
			Timespent: currentTimespentcount,
			Node:      make([]treestorage.Node, 0),
		}

		m["Node"] = append(m["Node"].([]treestorage.Node), newCountry)

	}

	//check if input device is added in the map

	for i, v := range m["Node"].([]treestorage.Node) {

		if v.Country == inputCurrentCountryName {

			m["Node"].([]treestorage.Node)[i].Webreq += currentWebreqcount
			m["Node"].([]treestorage.Node)[i].Timespent += currentTimespentcount

			deviceFound := false

			// samp := treestorage.Node{

			// 	Device:    "mobile",
			// 	Webreq:    2000,
			// 	Timespent: 1000,
			// }

			// m["Node"].([]treestorage.Node)[i].Node = append(m["Node"].([]treestorage.Node)[i].Node, samp)

			for deviceIndex, deviceName := range m["Node"].([]treestorage.Node)[i].Node {

				deviceFound = true

				if deviceName.Device == inputCurrentDeviceName {

					m["Node"].([]treestorage.Node)[i].Node[deviceIndex].Webreq += currentWebreqcount
					m["Node"].([]treestorage.Node)[i].Node[deviceIndex].Timespent += currentTimespentcount

				}

			}

			if !deviceFound {

				addNewDevice(m, inputCurrentCountryName, inputCurrentDeviceName, currentWebreqcount, currentTimespentcount)

			}

		} else { //adding to exiisting countries

			newCountry := treestorage.Node{

				Country:   inputCurrentCountryName,
				Webreq:    currentWebreqcount,
				Timespent: currentTimespentcount,
				Node:      make([]treestorage.Node, 0),
			}

			m["Node"] = append(m["Node"].([]treestorage.Node), newCountry)

			addNewDevice(m, inputCurrentCountryName, inputCurrentDeviceName, currentWebreqcount, currentTimespentcount)

		}

	}

	fmt.Println(m)

}

func addNewDevice(m map[string]interface{}, country string, device string, currentWebreqcount int, currentTimespentcount int) {

	newDevice := treestorage.Node{

		Device:    device,
		Webreq:    currentWebreqcount,
		Timespent: currentTimespentcount,
	}

	for i, v := range m["Node"].([]treestorage.Node) {

		if v.Country == country {

			m["Node"].([]treestorage.Node)[i].Node = append(m["Node"].([]treestorage.Node)[i].Node, newDevice)

		}

	}

}
