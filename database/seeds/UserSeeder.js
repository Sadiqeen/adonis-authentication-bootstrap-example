'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class UserSeeder {
    async run() {
        const user = new User()
        user.username = "Administrator"
        user.email = 'admin@admin.com'
        user.password = 'password'
        user.save()
    }
}

module.exports = UserSeeder
