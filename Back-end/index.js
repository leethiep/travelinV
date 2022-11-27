import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "TravelinV"
})
app.use(express.json())
app.use(cors())
app.get("/",(req, res)=>{
    res.json("Hello")
})
app.get("/account", (req, res)=>{
    const q = "SELECT * FROM account"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/account",(req,res)=>{
    const q = "INSERT INTO account (`userName`, `password`, `accountType`) VALUES (?)"
    const values = [
        req.body.userName,
        req.body.password,
        req.body.accountType
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Account has been created successfully")
    })
})
app.get("/account/:userName",(req,res)=>{
    const userNameId = req.params.userName
    const q = "SELECT * FROM account WHERE userName = ?"
    db.query(q,[userNameId],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.listen(8800,()=>{
    console.log("Connected ...")
})
