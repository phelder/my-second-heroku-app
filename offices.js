const connection = require('./conn')

const offices = {}

offices.findAll = function() {

    return new Promise(function(resolve, reject) {

        const sql = `SELECT * FROM offices`

        connection.query(sql, function(error, result) {
            if (error) {
                console.log(error)
                reject()
            }
            resolve(result)
        })

    })
}

offices.findById = function(id) {

    return new Promise(function(resolve, reject) {
        
        const sql = `SELECT * FROM offices WHERE officeCode = ?`
        const sqlParams = [id]

        connection.query(sql, sqlParams, function(error, result) {
            if (error) {
                console.log(error)
                reject()
            }
            resolve(result)
        })
        
    })
}

offices.insert = function(office) {
    
    console.log(office)

    return new Promise(function(resolve, reject) {
    
        const sql = `INSERT INTO offices (officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const sqlParams = [office.officeCode, office.city, office.phone, office.addressLine1, office.addressLine2, office.state, office.country, office.postalCode, office.territory]

        connection.query(sql, sqlParams, function(error, result) {
            if (error) {
                console.log(error)
                reject()
            }
            resolve(result)
        })
        
    })

}

offices.update = function(office) {
    
    return new Promise(function(resolve, reject) {
    
        const sql = `UPDATE offices SET city = ?, phone = ?, addressLine1 = ?, addressLine2 = ?, state = ?, country = ?, postalCode = ?, territory = ? WHERE officeCode = ?`
        const sqlParams = [office.city, office.phone, office.addressLine1, office.addressLine2, office.state, office.country, office.postalCode, office.territory, office.officeCode]

        connection.query(sql, sqlParams, function(error, result) {
            if (error) {
                console.log(error)
                reject()
            }
            resolve(result)
        })
        
    })

}

offices.delete = function(id) {
    
    return new Promise(function(resolve, reject) {
    
        const sql = `DELETE FROM offices WHERE officeCode = ?`
        const sqlParams = [id]

        connection.query(sql, sqlParams, function(error, result) {
            console.log('op')
            if (error) {
                console.log(error)
                reject()
            }
            resolve(result)
        })
        
    })

}

module.exports = offices