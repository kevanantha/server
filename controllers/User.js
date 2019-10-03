const User = require('../models/User');
const { createToken } = require('../helpers/jwt')
const { compare } = require('../helpers/bcryptjs')

class UserController {
    static create(req, res, next) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then((User) => {
                const token = createToken({ id: User._id })
                res.status(201).json({
                    username: User.username,
                    email: User.email,
                    token
                })
            })
            .catch(next);
    }

    static login(req, res, next) {
        const { identity, password } = req.body;
        User.findOne({ $or: [{ username: identity }, { email: identity }] })
            .then((User) => {
                if (User && compare(password, User.password)) {
                    const token = createToken({ id: User._id })
                    res.status(200).json({
                        username: User.username,
                        email: User.email,
                        token
                    })
                } else {
                    let err = new Error('Wrong Username / Email / Password')
                    err.name = 'AuthenticationError'
                    next(err)
                }
            })
            .catch(next);
    }

    static googleSignIn(req, res, next) {
        const { OAuth2Client } = require('google-auth-library')
        const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
        const client = new OAuth2Client(GOOGLE_CLIENT_ID)
        const { token } = req.body
        let data;
        client.verifyIdToken({ idToken: token, audience: GOOGLE_CLIENT_ID })
            .then((ticket) => {
                const data = ticket.getPayload()
                const { email } = data
                return User.findOne({ email })
            })
            .then(user => {
                if (user) return user
                else {
                    return User.create({
                        username: data.family_name,
                        email: data.email,
                        password: process.env.DEFAULT_PASSWORD
                    })
                }
            })
            .then(user => {
                let payload = { _id: user._id }
                let token = createToken(payload)
                res.status(200).json({ token, username: user.username, email: user.email })
            })
            .catch(next);
    };
}

module.exports = UserController
