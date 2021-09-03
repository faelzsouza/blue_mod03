const bcrypt = require("bcrypt");
const User = require("../models/users.models");
const db = require("../models/database/conn");

const saltRounds = 10;
db('blue_aula12')
const userCreate = (user, password) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            await User.create({user: user, password: hash})
                .then(() => console.log('Salvo no DB!'))
                .catch(err => console.error(err))
        });
});
}

const checkPassword = async (user, password) => {
    await User.findOne({ user: user })
    .then((user) => {
        const checkResult = bcrypt.compare(
            password,
            user.password,
            (err, result) => {
                return result
            }
        );

        return checkResult
    })
}


(
   async () => await checkPassword('fael', 'FaelzinhoD@Blue').then((result) => console.log(result))
)();

module.exports = [
    userCreate,
    checkPassword
]