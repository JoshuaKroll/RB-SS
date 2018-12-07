module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product', {
        nameOfProduct: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
        },
        typeOfProduct: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
        },
        companyName: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        },
        priceOfProduct: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        },
        quantity: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        }
    })
}