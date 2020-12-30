'use strict'

class DashboardController {

    index({
        view
    }) {
        return view.render('dashboard')
    }

}

module.exports = DashboardController
