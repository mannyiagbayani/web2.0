const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.post("/",(req,res) => {
    var email = req.body.email;
    var amount = req.body.amount;

    //validation 
    if(amount <= 1) {
        res.send({"error": "true", "message" : "Amount should be greater than 1"});
    }
    
    res.send({"email": email, "amount": amount});
});

app.listen(3000 , () => console.log("listening to port http://localhost:3000"));
