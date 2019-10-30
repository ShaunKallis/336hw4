//1st git clone ... , 2nd npm init, 3rd npm install express ejs, 4 create .gitignore file , 5 create this app.js file
//test in console with "node app.js"  then click on preview
//create views folder and index.ejs file inside it.
// npm install request


const express = require("express");
const app = express();
const faker = require('faker');
// var randomName = faker.name.findName();
// app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.use(express.static("public")); // to access img, css, js

//app.get("/welcome", function(req, res){ //to open in preview type /welcome at end of address




app.get("/", function(req, res){
    //res.send("<h1>hello!</h1>");
    var randomName = faker.name.findName();
    res.render("index", {
        robby: "ROBOTS WILL REPLACE US ALL!!!",
        name: randomName
    });
});

app.get("/mercury", function(req, res){ //to open in preview type /bye at end of address
    //res.send("<h1>Mercury Planet</h1>");
    //console.log("mercury.ejs");
    res.render("mercury.ejs");
});

app.get("/nurse", function(req, res){ //to open in preview type /bye at end of address
    //res.send("<h1>Venus Planet</h1>");
    res.render("nurse.ejs");
});

app.get("/sitter", function(req, res){ //to open in preview type /bye at end of address
    res.render("sitter.ejs");
});

app.get("/sexbot", function(req, res){ //to open in preview type /bye at end of address
    res.render("sexbot.ejs");
});





//server listener
//app.listen("8080", "127.0.0.1", function (){
//    console.log("Express Server is Running...")
//});


//server listener
app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Express Server is Running...")
});












// app.set("view engine", "ejs");

// //routes
// app.get("/", async function(req, res){ 
    
//     let parsedData = await getImages("otters");
//     //console.dir("parsedData: " + parsedData); //displays content of the object
//     res.render("index", {"image":parsedData.hits[0].largeImageURL});
    
// });//root route


// app.get("/results", async function(req, res){
    
//     //console.dir(req);
//     let keyword = req.query.keyword; //gets teh value that the user typed in the form
//     let parsedData = await getImages(keyword);
//     res.render("results", {"images":parsedData});
    
// }); //results route


// //Returns all data from the Pixabay API as JSON format
// function getImages(keyword){
    
//     return new Promise( function(resolve, reject){
        
//         //request is run and other code after this block is run while waiting for a response
//         request('https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q='+keyword,
//             function (error, response, body) {
//             //console.log('error:', error); // Print the error if one occurred
//             // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//             // console.log('body:', body); // Print the HTML for the Google homepage.
//             //console.log(response.statusCode); //should be 200
//             if (!error && response.statusCode == 200){ //no errors in the request
//                 //res.send("it works");
//                 let parsedData = JSON.parse(body); //converts plain text to json
//                 //return parsedData;
//                 resolve(parsedData);
//             } else {
//                 reject(error);
//                 console.log(response.statusCode); //should be 200
//                 console.log(error); 
//             }
//         });//request
//     });
// }
