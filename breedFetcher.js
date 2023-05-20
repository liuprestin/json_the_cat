const request = require("request");
const fs = require("fs");

//get some cat breeds
function breedFetcher() {

  //note we need to modify this url 
  const url = "https://api.thecatapi.com/v1/images/";

  console.log(url);


  new Promise( (resolve, reject) => {

    request(url, (error, response, body) => {
        console.log("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        console.log("body:", body); // Print the HTML for the Google homepage.
    
        
         resolve(body);
      });


  }
  
  ).then( (body) => {
    //lets use the CatAPI
  })
};

breedFetcher();
