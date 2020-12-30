'use strict'

class LoginController {

    index({
        view
    }) {
        return view.render('auth.login')
    }

    async login({
        auth,
        request,
        response
    }) {
        const {
            email,
            password,
            remember
        } = request.all()

        await auth.remember(remember).attempt(email, password)

        return response.redirect('/dashboard')
    }

    async logout({
        auth,
        response
    }) {
        await auth.logout()

        return response.redirect('/login')
    }
}

module.exports = LoginController
