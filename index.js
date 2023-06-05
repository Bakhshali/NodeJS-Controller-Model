const express = require("express")
const app = express()
const { default: mongoose } = require("mongoose")

mongoose.connect("mongodb+srv://Bakshali01:eliko9999@cluster0.q0vnezp.mongodb.net/")

app.use(express.json())

const productRoute = require("./Routes/productRoute")
const webUserRoute = require("./Routes/webuserRoute")

app.use("/api/products", productRoute)
app.use("/api/users", webUserRoute)

app.listen(4040, () => {
    console.log("Server is running...");
})  