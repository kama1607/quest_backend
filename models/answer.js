const db = require("../config/dbConnect")
const {Sequelize,DataTypes} = require("sequelize")


const Answer = db.define("answer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    text:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
},
    {
    timestamps: false,
    },
)

module.exports = Answer