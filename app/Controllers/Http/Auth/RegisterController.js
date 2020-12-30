'use strict'

const User = use('App/Models/User')

class RegisterController {

    index({
        view
    }) {
        return view.render('auth.register')
    }

    async register({
        auth,
        request,
        response
    }) {
        const data = request.all()

        const user = new User()

        user.username = data.username
        user.email = data.email
        user.password = data.password

        await user.save()

        await auth.attempt(data.email, data.password)

        return response.redirect('/dashboard')
    }

}

module.exports = RegisterController
