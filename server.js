const express = require("express");
const app = express();



app.get('/',(req,res)=>res.send("Samyar Modabber"))

/**
 * @deprecated Define ports
 */
const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Server is running on port ${Port}`));
