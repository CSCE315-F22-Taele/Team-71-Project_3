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
const bodyParser = require('body-parser')
const cors = require('cors')

// Create express app
const app = express();
const port = 3001;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors());

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


app.post('/subtractIngredientAndAddToHistory', async(req, res) => {
    try{

        ingredient  = req.body.ingredient;
        salesInformation = req.body.salesInformation;

        //console.log("INSERT INTO saleshistory3 (item,cost,date) VALUES ('" + salesInformation[0] + "'," + salesInformation[1]+ ",'10/11/11')");
        //subtracts ingredient command
        for(let i = 0; i < ingredient.length; i++){
            const subtractIng = await pool.query(
                'UPDATE inventory SET inventory_count = inventory_count - 1 WHERE inventory_name = ($1)',[ingredient[i]]
            );
      
        }

        //Adds to sales history
        //get current date
        current = new Date();
        year = current.getFullYear();
        month = current.getMonth() + 1;
        day = current.getDate();
        
        if(day < 10){
            day = '0' + day;
        }
        if(month < 10){
            month = '0' + month;
        }
        const format = month + '/' + day + '/' + year;

        //sql command
        const queryString = "INSERT INTO saleshistory3 (item,cost,date) VALUES ('" + salesInformation[0] + "'," + salesInformation[1]+ ",'" + format + "')";
        const addToSalesHistory = await pool.query(queryString);
        //res.json();
    }catch(err){
        console.log(err);
    }
});

app.post('/addIngredient', async(req, res) => {
    try{

        ingredient  = req.body.ingredient;

        //sql command
        const queryString = "DELETE from inventory WHERE inventory_name = '" + ingredient[0] + "'";
        const deleteDuplicate = await pool.query(queryString);

        const queryString2 = "INSERT INTO inventory (inventory_name,inventory_count,inventory_original) VALUES ('" + ingredient[0] + "'," + ingredient[1]+ ",'" + 100 + "')";
        const addIngredient = await pool.query(queryString2);
        //res.json();
    }catch(err){
        console.log(err);
    }
});

app.get('/viewInventory', (req, res) => {
    inventory = []
    pool
        .query('SELECT * FROM inventory;')
        .then(query_res => {
            for (let i = 0; i < query_res.rowCount; i++){
                inventory.push(query_res.rows[i]);
            }
            const data = {inventory: inventory};
            //console.log(inventory)
            res.send(inventory)
        });

});

app.get('/viewSalesHistory', (req, res) => {
    sales = []
    pool
        .query('SELECT * FROM saleshistory3;')
        .then(query_res => {
            for (let i = 0; i < query_res.rowCount; i++){
                sales.push(query_res.rows[i]);
            }
            const data = {sales: sales};
            console.log(sales);
            res.send(sales)
            //res.render('inventory_name', data);
        });
        

});

app.listen(process.env.PORT  || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

