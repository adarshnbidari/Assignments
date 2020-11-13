package insertdata

import (
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

	if !isEmptyTree {

		createNewNode(data, m)

	} else {

		createNewNode(data, m)
		addNewNode(data, m)

	}

}

func createNewNode(data decodejson.WebTraffic, m map[string]interface{}) {

	newNode := treestorage.Node{}

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

	newNode.Node = make([]treestorage.Node, 0)

	m["Webreq"] = currentWebReq
	m["Timespent"] = currentWebReq

	m["Node"] = append(m["Node"].([]treestorage.Node), newNode)

	//fmt.Println("Updated tree: \t", m)

}

func addNewNode(data decodejson.WebTraffic, m map[string]interface{}) {

	for _, v := range data.Dim {

		for _, mapNode := range m["Node"].([]treestorage.Node) {

		}

	}

}
