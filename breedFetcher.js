const request = require("request");
const fs = require("fs");

// get some cat breeds
// can specify the breed in the command line
function breedFetcher() {
  const args = process.argv;
  const breed = args[2];
  //note we need to modify this url 
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  

  console.log(url);


  new Promise( (resolve, reject) => {

    request(url, (error, response, body) => {
        console.log("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
         resolve(JSON.parse(body));
      });


  }
  
  ).then( (body) => {
    //lets use the CatAPI
    data = body[0];
    console.log(data["description"]);
  })
};

breedFetcher();
