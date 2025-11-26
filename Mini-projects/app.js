const express= require("express")
const app= express()
const port = process.env.port || 3000
const hbs=require("hbs")

const path=require("path")
const body_parser= require('express/lib/express');
const view_path=path.join(_dirname,"../template/views")

app.listen(port,()=>{
    console.log("Listening on port: " + port)
})
hbs.registerpartials(path.join(_dirname,"../template/partials"))
app.set("view engine","hbs")
app.set("views",views_path)

