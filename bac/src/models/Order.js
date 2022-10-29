import { DataTypes } from "sequelize";
import { sequelize } from "../connections/sequelize.js";
import { Cart } from "./Cart.js";
import { OrderItem } from "./OrderItem.js";
import { User } from "./User.js";

export const Order = sequelize.define("order", {
	firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    provider: DataTypes.STRING,
	name: DataTypes.STRING,
	brand: DataTypes.STRING,
	in_stock: DataTypes.SMALLINT,
	price: {
		type: DataTypes.FLOAT,
	},
	additional_info: DataTypes.TEXT,
	articul: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
});

Order.hasOne(OrderItem, {onDelete: "cascade"});
OrderItem.belongsTo(Order);