const express = require("express")
const app = express()
const path = require("path")
const pool = require("./db")

app.use(express.json())

app.set('views', path.join(__dirname, 'templates')); // The templates folder is where our "views" will be located. 
app.set('view engine', 'ejs'); // the engine we set up on line 15 will be used here. 




//ROUTES//

// get equipment for energy dashboard

// app.get("/dashboard", async (req, res) => {
//     try {
//         const allEquip = await pool.query("SELECT * FROM equipment")
//         res.json(allEquip.rows)
//     } catch (err) {
//         console.error(err.message)
//     }
// })

app.get("/dashboard", async (req, res) => {
    try {
        const allEquip = await pool.query("SELECT * FROM equipment")
        res.render('pages/index', { equipment: allEquip.rows })
    } catch (err) {
        console.error(err.message)
    }
})

//create equipment and sensors

app.post("/equipment", async (req, res) => {
    try {
        const { equip_type } = req.body;
        const newEquip = await pool.query(
            "INSERT INTO equipment (equip_type) VALUES ($1) RETURNING * ",
            [equip_type]
        )

        res.json(newEquip)
        
    }catch(err) {
        console.error(err.message)
    }
})

//get a sensor point

//

app.listen(3000, () => {
    console.log("server is listen on port 3000")
})