package main

import (
	"./components/decodejson"
	"./components/treeoperations/insertdata"
)

func main() {

	inputData := `{ "dim": [ { "key": "device", "val": "mobile" }, { "key": "country", "val": "US" } ], "metrics": [ { "key": "webreq", "val": 70 }, { "key": "timespent", "val": 30 } ] }`

	res := decodejson.DecodeJSON(inputData)

	insertdata.InsertData(res)

}
