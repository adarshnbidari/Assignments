package main

import (
	"fmt"
	"net/http"

	"./components/decode/insertdecode"
	"./components/decode/querydecode"
	"./components/treeoperations/insertdata"
	"./components/treeoperations/querydata"
	"./components/treestorage"
	"github.com/gorilla/mux"
)

//RootTree for in memory
var RootTree map[string]interface{} = treestorage.GetTree()

func main() {

	r := mux.NewRouter()

	r.HandleFunc("/insert", func(res http.ResponseWriter, req *http.Request) {

		res.Header().Add("Content-Type", "application/json")

		req.ParseForm()

		decodedData := insertdecode.DecodeJSON(req.FormValue("data"))

		insertdata.InsertData(RootTree, decodedData)

		fmt.Fprintln(res, RootTree)

	}).Methods("POST")

	r.HandleFunc("/query", func(res http.ResponseWriter, req *http.Request) {

		res.Header().Add("Content-Type", "application/json")

		req.ParseForm()

		decodedData := querydecode.DecodeJSON(req.FormValue("data"))

		fetchedData := querydata.QueryData(RootTree, decodedData)

		fmt.Fprintln(res, fetchedData)

	}).Methods("POST")

	http.ListenAndServe(":80", r)

}
