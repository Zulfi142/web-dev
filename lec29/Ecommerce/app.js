const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Products = require("./models/Products");
const methodOverride = require('method-override');
const path = require("path");
const passport=require("passport");
const LocalStartegy=require("passport-local");
const User=require("./models/user");
const session=require("express-session");
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

mongoose.connect('mongodb://localhost:27017/CBNDSSR')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected!')})

app.use(methodOverride('_method'));

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.use(passport.initialize());//ready krta h passport ko;
app.use(passport.session());//login maintain krta h session ke through;
passport.use(new LocalStartegy(User.authenticate()));//authentiacation startegy batata h;
passport.serializeUser(User.serializeUser());//session mein user ko store krta h;
passport.deserializeUser(User.deserializeUser());//session se user ko retrieve krta h;

app.use((req,res,next)=>{
    // console.log(req.user);
    res.locals.currUser=req.user;//isse saare views ki file ko curr ka access ho chuka h;
    next();
})

/////////////ROUTES////////////////
const productRoutes = require("./routes/productRoutes");
app.use(productRoutes);

const reviewRoutes = require("./routes/review");
app.use(reviewRoutes);

const authRoutes = require("./routes/auth");
app.use(authRoutes);


const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})