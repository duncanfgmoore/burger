var connection = require("./connection.js");

var orm = {
    selectAll: function(selectTable) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [selectTable], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },

    insertOne: function(table, column, burgerInput, callback){
        var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';
    
        connection.query(queryString, [burgerInput], function(err, result){
          if(err) throw err;
          console.log(result);
        });
      },
   
      updateOne: function(selectedTable, ifEaten, burgerName) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?";
        console.log(queryString);
        connection.query(queryString, [selectedTable, ifEaten, burgerName], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      }
}


module.exports = orm;