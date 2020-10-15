# Medium Crawler

## Contents

1. About
2. Installation
3. Usage

## About

Recursively crawl popular blogging website https://medium.com using Node.js and harvest all
possible hyperlinks that belong to medium.com and store them in a database of your choice.

## Installation


**Step 1:** 
            
&nbsp; &nbsp; &nbsp; Install local version of DynamoDB on your local machine

&nbsp; &nbsp; &nbsp; DynamoDB - **https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html**

&nbsp; &nbsp; &nbsp; After installation start the dynamodb as guided in the above link.


**Step 2:** 

&nbsp; &nbsp; &nbsp; &nbsp; After downloading this repository , open then backend folder and update the file with **.env** extension.

&nbsp; &nbsp; &nbsp; &nbsp; Change the dummy_access_key and dummy_secret_key to your keys.


```
NODE_ENV=development

SERVER_PORT=80

DYNAMODB_ENDPOINT=http://localhost:8000


AWS_ACCESS_KEY_ID=dummy_access_key

AWS_SECRET_ACCESS_KEY=dummy_secret_key

```


## Usage 

**Step 1:** 

We recommend using PostMan(recommended) or any API development tools for testing this application.

**Step 2:** 

 Go to the downloaded backend folder and enter the bellow code.

```
npm install --save
node index.js 
```
**Step 3:** 

Open PostMan go to http://localhost and choose a GET request.
You can optinally pass urlencoded **post** parameter to crawl any medium article.
If the **post** parameter is not passed or it is null then the root page will be crawled.
Every response received will include a message property indicating the information about the response.



# **Thank you** &nbsp; &nbsp; :heart:



            
