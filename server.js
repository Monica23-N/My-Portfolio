
//const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
//mongoose.connect("mongodb+srv://monica20062309_db_user:01WTSeNKIkYdfl3k@cluster0.bxht8xp.mongodb.net/myDatabase?ssl=true&replicaSet=atlas-xyz-shard-0&authSource=admin&retryWrites=true&w=majority")
//.then(() => console.log("DB Connected ✅"))
//.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Backend is working 🚀");
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.json({ message: "Form received successfully ✅" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});