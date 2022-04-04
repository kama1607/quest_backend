const db = require("../config/dbConnect")
const {DataTypes} = require("sequelize")

const User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    login:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    }
},
{
    timestamps: false
},
{
    freezeTableName: true
})

module.exports = User