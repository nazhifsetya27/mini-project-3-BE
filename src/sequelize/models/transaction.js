"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, { foreignKey: "id" });
      Transaction.belongsTo(models.Product, { foreignKey: "id" });
    }
  }
  Transaction.init(
    {
      cashier_id: DataTypes.INTEGER,
      customer_name: DataTypes.STRING,
      product_id: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      transaction_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};