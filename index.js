const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));


app.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/bmi.html");
    // console.log(__dirname);
})

// app.get("/control", function(request, response) {
//     response.json({msg: "No control"});
//     // console.log(__dirname);
// })

app.post("/", function(request, response) {
    let {height, weight} = request.body;

    console.log("height: ", height);
    console.log("weight: ", weight);

    const meters = height / 100;
    const bmi = weight / (meters * meters);


   response.json({msg: bmi});
})

app.listen(3000, function() {
    console.log("server up");
})