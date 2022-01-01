const express = require("express");
const connectDB = require("./Config/Connect");
const Router = require("./Routes/ContactRoute");
const app = express();
app.use(express.json());
app.use("/api/contacts", Router);
connectDB();
const PORT = 5000;
app.listen(PORT, console.log(`server is running ${PORT}`));
