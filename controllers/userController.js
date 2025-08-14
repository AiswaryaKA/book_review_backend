const users = require('../models/userModel')
const jwt = require('jsonwebtoken')


//register
exports.registerController = async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password);

    try {
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            res.status(409).json('Already user Exist')
        } else {
            const newUser = new users({
                username,
                email,
                password,
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//login
exports.loginController = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            if (existingUser.password == password) {
                const token = jwt.sign({ userMail: existingUser.email }, process.env.SECRETKEY)
            } else {
                res.status(401).json('incorrect email or password')
            }
        } else {
            res.status(404).json('incorrect email or password')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}