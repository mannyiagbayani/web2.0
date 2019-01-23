const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { save_user_information, get_total_information } = require("./Models/db_server.js");
const path = require("path");

const publicPath = path.join(__dirname, "/public");

app.use(bodyparser.json());
app.use(express.static(publicPath));

app.post("/",async (request,response) => {
    var email = request.body.email;
    var amount = request.body.amount;

    //validation 
    if(amount <= 1) {
        response.send({"error": "true", "message" : "Amount should be greater than 1"});
    }
    let result = await save_user_information({"email": email, "amount": amount})
    response.send(result);
});

app.get("/get_totalAmount", async (request, response) => {
    let result = await get_total_information();
    response.send(result);
})

app.listen(3000 , () => console.log("listening to port http://localhost:3000"));
