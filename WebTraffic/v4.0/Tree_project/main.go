package main

import (
	"fmt"
	"net/http"

	"./components/decodejson"
	"./components/treeoperations/insertdata"
	"./components/treestorage"
	"github.com/gorilla/mux"
)

//RootTree for in memory
var RootTree map[string]interface{} = treestorage.GetTree()

func main() {

	r := mux.NewRouter()

	r.HandleFunc("/store", func(res http.ResponseWriter, req *http.Request) {

		req.ParseForm()

		decodedData := decodejson.DecodeJSON(req.FormValue("data"))

		insertdata.InsertData(RootTree, decodedData)

		fmt.Fprintln(res, RootTree)

	}).Methods("POST")

	fmt.Println("server is running at localhost")

	http.ListenAndServe(":80", r)

}
