# Web traffic tracking

## Contents

1. About
2. Prerequisites
4. Design
3. Usage


## About

Web traffic tracking across multiple paltforms

## Prerequisites

1. Operating System: Windows (amd64) or linux (amd64) or macOS(amd64)

## Design 

1. Nodes contain all metrics like key and values for devices and countries.
2. The parent node contains a sum or aggregation of the metrics from the child nodes.

## Usage

1. Go to bin folder and choose the main executable for your operating system.
2. Run the main executable and keep the terminal open.
3. Go to any api testing tools.
4. Send the POST request to the http://localhost/insert for inserting the data, and http://localhost/query for getting the data.
5. The response will be in the form of json.
6. To stop the server press Ctrl-c or close the terminal.

# Note

1. The request should be made in POST and with paramater named "data".
2. The content-type of the request should be "x-www-form-urlencoded".
3. source folder to view the source of this application.
4. ScreenShots are available at screen shots folder.
5. Sample format for inserting and querying data is provided in the sample folder.



# **Thank you** &nbsp; &nbsp; :heart:



            
