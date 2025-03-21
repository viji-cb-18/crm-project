const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); 

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/auth", require("./routes/auth"));
app.use("/customers", require("./routes/customer"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("/", (req, res) => res.send("CRM Backend Server Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
