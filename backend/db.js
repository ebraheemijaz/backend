const mongo = require('mongoose');
const URI = "mongodb://localhost:27017/portal?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connecttoDB = () => {
    mongo.connect(URI, (err, db) => {
        if (err) {
            console.log("Database not Connected")
            return;
        }
        console.log(`Connected to database ${db.name}`)
    });
}
module.exports = connecttoDB


