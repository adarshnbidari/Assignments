package insertdecode

import "encoding/json"

//WebTraffic for input structure
type WebTraffic struct {
	Dim     []trafficForm
	Metrics []trafficForm
}

type trafficForm struct {
	Key string
	Val interface{}
}

//DecodeJSON for decoding the json input data
func DecodeJSON(data string) WebTraffic {

	var resultData WebTraffic

	json.Unmarshal([]byte(data), &resultData)

	return resultData

}
