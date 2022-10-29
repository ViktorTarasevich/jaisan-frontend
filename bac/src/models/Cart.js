import { DataTypes } from "sequelize";
import { sequelize } from "../connections/sequelize.js";

export const Cart = sequelize.define("cart", {
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});