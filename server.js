const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { save_user_information } = require("./Models/db_server.js");

app.use(bodyparser.json());

app.post("/",async (req,res) => {
    var email = req.body.email;
    var amount = req.body.amount;

    //validation 
    if(amount <= 1) {
        res.send({"error": "true", "message" : "Amount should be greater than 1"});
    }
    let result = await save_user_information({"email": email, "amount": amount})
    res.send(result);
});

app.listen(3000 , () => console.log("listening to port http://localhost:3000"));
