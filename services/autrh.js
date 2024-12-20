// const { v4 : uuidv4 } = require ('uuid');
// const sessionIdToUserMap = new Map();

const jwt = require("jsonwebtoken");
const secret = "Ajit#khetal@123";

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    },
        secret);
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}




// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }

// function getUser(id){
//    return sessionIdToUserMap.get(id);
// }


module.exports = {
    setUser,
    getUser
};