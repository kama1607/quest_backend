const db = require("../config/dbConnect")
const {DataTypes, DATE} = require("sequelize")

const Quest = require("./quest")
const Answer = require("./answer")


const Task = db.define("task", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: true
        }
    },

    quest_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Quest,
            key: "id"
        },
    },

    correct_answer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Answer,
            key: "id"
        },
        allowNull: false,
        validate:{
            notNull: true
        }
    },

    question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },

    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },

    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },

    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true
        }
    },

    priority: {
        type: DataTypes.INTEGER
    }
}, 
{
    timestamps: false
    }
)

//Relationship between Task w/ Quest
Task.belongsTo(Quest, {
    foreignKey: "quest_id"
})

Quest.hasMany(Task, {
    foreignKey: "quest_id"
})

//Relationship between Task w/ Answer
Task.belongsTo(Answer, {
    foreignKey: "correct_answer_id"
})

Answer.hasMany(Task, {
    foreignKey: "correct_answer_id"
})

module.exports = Task