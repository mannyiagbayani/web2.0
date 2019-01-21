const express = require("express");
const app = express();

app.get("/",(req,res) => {
    let email = req.body.email;
    let amount = req.body.amount;
    res.send({"email": email, "amount": amount});
});

app.listen(3000 , () => console.log("listening to port 3000"));
