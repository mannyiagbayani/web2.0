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


module.exports = {save_user_information}
