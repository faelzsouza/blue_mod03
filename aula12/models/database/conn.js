const mongoose = require("mongoose");
const { user, password } = require("./settings");

const db = (dbName) => {
    mongoose
        .connect(
            `mongodb+srv://${user}:${password}@cluster0.a6lem.mongodb.net/${dbName}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("MongoDB connected!");
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = db