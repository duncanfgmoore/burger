var connection = require("./connection.js");

var orm = {
    selectAll: function(selectTable, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [selectTable], function(err, result) {
          if (err) throw err;
          //console.log(result);
          callback(result);
        });
      },

    insertOne: function(table, column, burgerInput, callback){
        var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';
    
        connection.query(queryString, [burgerInput], function(err, result){
          if(err) throw err;
          //console.log(result);
          //callback(result);
        });
      },
   
      updateOne: function(selectedTable, ifEaten, idNumber) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        console.log(queryString);
        connection.query(queryString, [selectedTable, ifEaten, idNumber], function(err, result) {
          if (err) throw err;
          //console.log(result);
        });
      }
}


module.exports = orm;