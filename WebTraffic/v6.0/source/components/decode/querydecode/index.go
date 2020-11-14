package querydecode

import "encoding/json"

//WebTraffic for input structure
type WebTraffic struct {
	Dim []TrafficForm
}

//TrafficForm is
type TrafficForm struct {
	Key string
	Val interface{}
}

//DecodeJSON for decoding the json input data
func DecodeJSON(data string) WebTraffic {

	var resultData WebTraffic

	json.Unmarshal([]byte(data), &resultData)

	return resultData

}
