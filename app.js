require('dotenv').config();
const request = require("request")

const forecast = require ("./data/forecast")

const geocode = require("./data/geocode")

 const countryAddress = process.argv[2]
// console.log(response.body)
if (!countryAddress) {
    return console.log("Please provide a country name first")
}
 geocode(countryAddress , (error , data) =>{
    console.log("Error Message: " , error)
    console.log("My requested Data: " , data)
    if (error) return
    forecast(data.latitude , data.longtitude , (error , data) =>{
        console.log("Error Message: " , error)
        console.log("My requested Data: " , data)
    })
})