const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const app_host = process.env.APP_HOST;
const fileUpload = require("express-fileupload");
const path = require("path");
const methodOverride = require("method-override");
const indexRouter = require("./api/v1/routes/index");
const session = require("express-session");

// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const db = require("./api/v1/models/index");

// const sessionStore = new SequelizeStore({
//   db: db.sequelize,
//   expiration: 24 * 60 * 60 * 1000, // Session expiration time in milliseconds (optional)
// });

// app.use(
//   session({
//     secret: "qwertyuiop",
//     resave: false,
//     saveUninitialized: false,
//     store: sessionStore,
//   })
// );
// sessionStore.sync();

app.use(express.json({ limit: "500mb" })); //parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());


app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", (req,res)=>{
    res.send("hello brother");
})

// app.use("/", indexRouter);

app.listen(port, app_host, () => {
  console.log(`Server is running on port ${port}`);
});