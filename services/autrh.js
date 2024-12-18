const { v4 : uuidv4 } = require ('uuid');
const sessionIdToUserMap = new Map();

function setUser(id, user){
    sessionIdToUserMap.set(id, user);
}

function getUser(id){
   return sessionIdToUserMap.get(id);
}


module.exports = {
    setUser,
    getUser
};