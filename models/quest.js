const db = require("../config/dbConnect")
const {DataTypes, Sequelize, DATE} = require("sequelize")

const Quest = db.define("quest", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, 
   {
     timestamps: false
   })

module.exports = Quest