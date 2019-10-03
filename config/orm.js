var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, cb);
    },

    insertOne: function(tableName, col, name, cb) {
        var queryString = `INSERT INTO burgers (??) Values (?,0)`;
        connection.query(queryString, [col, name], cb);
    },

    updateOne: function(tableName, col, val, id, cb) {
        var queryString = `UPDATE ${tableName} SET ${col} = '${val}' WHERE id = '${id}'`;
        connection.query(queryString, cb);
    }
};

module.exports = orm;