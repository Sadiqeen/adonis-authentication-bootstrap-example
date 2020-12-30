'use strict'

class Register {
    get rules() {
        return {
            username: 'required|min:3|max:255|unique:users,username',
            email: 'required|min:3|max:255|email|unique:users,email',
            password: 'required|min:6|max:255|confirmed'
        }
    }

    get messages() {
        return {
            "username.required": "Username is required",
            "username.min": "Username must be at least 3",
            "username.max": "Username may not be greater than 255",
            "username.unique": "Username has already been taken",
            "email.required": "E-mail is required",
            "email.min": "E-mail must be at least 3",
            "email.max": "E-mail may not be greater than 255",
            "email.email": "E-mail must be a valid email address",
            "email.unique": "E-mail has already been taken",
            "password.required": "Password is required",
            "password.min": "Password must be at least 6",
            "password.max": "Password may not be greater than 255",
            "password.confirmed": "Password confirmation does not match",
        };
    }
}

module.exports = Register
