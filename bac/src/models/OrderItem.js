import { DataTypes } from "sequelize";
import { sequelize } from "../connections/sequelize.js";

export const OrderItem = sequelize.define("orderItem", {
	purchasePrice: { // розничная
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	wholesale: { // оптовая
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
});
