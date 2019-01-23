const db = require("../db.js");

save_user_information = (data) => new Promise((resolve,reject) => {
    db.query("INSERT INTO lottery_information set ?",data,(err, result,fields) => {
        if(err) {
            console.log("Save failed",err)
            reject("Save failed")
        } else {
            console.log("Save success")
            resolve("Save success")
        }
    })
});


get_total_information = () => new Promise((resolve,reject) => {
    db.query("SELECT SUM(amount) as Total from lottery_information",null,(err, result,fields) => {
        if(err) {
            console.log("get_total_information failed",err)
            reject(err)
        } else {
            console.log("get_total_information ok")
            resolve(result)
        }
    })
});

module.exports = {save_user_information, get_total_information}
