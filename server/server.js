/*
const express = require('express')
const app = express()

app.get("/api",(req,res) => {
    res.json({"users":["userOne","userTwo"]})
})

app.listen(5000, () => {console.log("server running on port 5000")})
*/


const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();

// Create express app
const app = express();
const port = 3000;

// Create pool
const pool = new Pool({
    user: 'csce331_906_shankar',
    host: 'csce-315-db.engr.tamu.edu',
    database:'csce331_906_71',
    password: '528003863',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

// Add process hook to shutdown pool
process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});
	 	 	 	
app.set("view engine", "ejs");

/*
app.get('/', (req, res) => {
    const data = {name: 'Mario'};
    res.render('index', data);
});
*/

app.get('/user', (req, res) => {
    teammembers = []
    pool
        .query('SELECT * FROM teammembers;')
        .then(query_res => {
            for (let i = 0; i < query_res.rowCount; i++){
                teammembers.push(query_res.rows[i]);
            }
            const data = {teammembers: teammembers};
            console.log(teammembers);
            res.render('user', data);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

