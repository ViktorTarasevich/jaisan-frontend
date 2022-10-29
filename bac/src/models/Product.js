import { DataTypes } from "sequelize";
import { sequelize } from "../connections/sequelize.js";
import { Cart } from "./Cart.js";
import { User } from "./User.js";

export const Product = sequelize.define("product", {
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

Product.hasOne(Cart, {onDelete: "cascade"});
Cart.belongsTo(Product);

// Cart.hasMany(Product, {
// 	onDelete: "cascade",
// 	foreignKey: "articul",
// 	sourceKey: "articul_product",
// 	as: "product",
// });