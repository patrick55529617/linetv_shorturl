var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db');


module.exports = {
    'get_corresponding_url': (id) => {
        let full_url = [];
        let sql_stmt = "SELECT full_url FROM url_mapping " +
            `WHERE id = '${id}'`;
        return new Promise((res, rej) => {
            db.get(sql_stmt, full_url, (err, row) => {
                if (err) {
                    return console.error(err.message);
                }
                res(row.full_url);
            })
        })
    },
    'add_new_registered_url': (id, full_url) => {
        let sql_stmt = "INSERT INTO url_mapping " +
            `(id , full_url) VALUES ("${id}", "${full_url}")`;
        db.run(sql_stmt);
    },
    'create_db': () => {
        var sql_create_db = "CREATE TABLE url_mapping (" +
            "id TEXT PRIMARY KEY, " +
            "full_url TEXT NOT NULL" +
            ");";
        db.run(sql_create_db);
    }
}
