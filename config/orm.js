var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
      arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
          }
          
          arr.push(key + "=" + value);
      }
  }
  return arr.toString();
}

var orm = {
  selectAll: function (table, callback) {
    connection.query("SELECT * FROM ??;", [table], function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        callback(result);
        //result.render("index", { plans: data });
    });
},

  insertOne: function (table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table;
    queryString += "(";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function (err, result) {
        if (err) throw err;
        callback(result);
    });
  },

  updateOne: function (table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
  }
};

module.exports = orm;