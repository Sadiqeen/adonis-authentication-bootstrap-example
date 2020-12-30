'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({
    response
}) => {
    return response.redirect('/login')
})

/* ---------------------------- Authentication --------------------------- */

Route
    .get('login', 'Auth/LoginController.index')
    .middleware('guest')
    .as('login.form')

Route
    .post('login', 'Auth/LoginController.login')
    .middleware('guest')
    .validator('Auth/Login')
    .as('login.attempt')

Route
    .post('logout', 'Auth/LoginController.logout')
    .as('logout')

/* -------------------------------- Register -------------------------------- */

Route
    .get('register', 'Auth/RegisterController.index')
    .middleware('guest')
    .as('register.form')

Route
    .post('register', 'Auth/RegisterController.register')
    .middleware('guest')
    .validator('Auth/Register')
    .as('register.attempt')

/* ------------------------------ Dashboard ------------------------------ */

Route
    .get('Dashboard', 'DashboardController.index')
    .middleware('auth')
    .as('dashboard')
