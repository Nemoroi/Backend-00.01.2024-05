module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: "pending" }
  });
  return Order;
};
