const request = require("request");

// get some cat breeds
// can specify the breed in the command line
function breedFetcher(breed) {
  //note we need to modify this url 
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  let data = new Promise( (resolve, reject) => {

    request(url, (error, response, body) => {
        console.log("error:", error); // Print the error if one occurred
        //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
         resolve(body);

      });


  }
  
  ).then( (body) => {
    //lets use the CatAPI
    let data = JSON.parse(body)[0];
    return data;
  })
  return data;
  
};

module.exports = breedFetcher;
