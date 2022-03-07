const jwt = require("jsonwebtoken")
module.exports = function (req) {
    const Token = req.headers['authorization'].split(" ")[1]
    const {id} =  jwt.decode(Token)  
    return id
}
