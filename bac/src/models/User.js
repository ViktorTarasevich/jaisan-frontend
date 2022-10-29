import { DataTypes } from "sequelize";
import { sequelize } from "../connections/sequelize.js";
import { Order } from "./Order.js";

export const User = sequelize.define("user", {
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

User.hasMany(Order, {onDelete: "cascade"});
Order.belongsTo(User);