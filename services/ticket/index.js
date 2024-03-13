const fs = require('fs')
// access global mock db file
const tickets = require(global.cw_db)

// write service method implementations
const ticket_service = {
    getAll() {
        return tickets
    }
}

module.exports = ticket_service
