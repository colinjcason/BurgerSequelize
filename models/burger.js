var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableName, cb) {
        orm.selectAll(tableName, cb);
    },

    insertOne: function(name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], name, cb);
    },

    updateOne: function(col, val, id, cb) {
        orm.updateOne("burgers", col, val, id, function(res) {
            cb(res);
        });
    }
};



module.exports = burger;