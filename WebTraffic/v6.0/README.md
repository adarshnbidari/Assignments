# Post App

## Contents

1. About
2. Prerequisites
4. Design
3. Usage


## About

Web traffic tracking across multiple paltforms

## Prerequisites

1. PC with latest OS

## Design 

1. Nodes contain all metrics like key and values for devices and countries.
2. The parent node contains a sum or aggregation of the metrics from the child nodes.

## Usage

1. Run the main.exe and keep the terminal open.
2. Go to any api testing tools.
3. Send the POST request to the http://localhost/insert for inserting the data, and http://localhost/query for getting the data.
4. The response will be in the form of json.
5. To stop the server press Ctrl-c or close the terminal.

# Note

1. main.exe to start the server.
2. The request should be made in POST and with paramater named "data".
4. The content-type of the request should be "x-www-form-urlencoded".
5. source folder to view the source of this application.
6. ScreenShots are available at screen shots folder.
7. Sample format for inserting and querying data is provided in the sample folder.



# **Thank you** &nbsp; &nbsp; :heart:



            
