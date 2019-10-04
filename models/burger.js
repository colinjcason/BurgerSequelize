module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: DataTypes.STRING,
        devoured: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
    return Burger;
};