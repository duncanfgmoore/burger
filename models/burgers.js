var orm = require("../config/orm.js");


var burger = {
    selectAll: function() {
        orm.selectAll("burgers")
    },

    insertOne: function(userChoice) {
        orm.insertOne("burgers", "burger_name", userChoice);
    },

    updateOne: function(userChoice) {
        orm.updateOne("burgers", false, userChoice);
    }
}



module.exports = burger;