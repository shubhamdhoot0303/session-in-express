import express from 'express';
import web from './routes/web.js' ;
import session from 'express-session';
const app=express();
//app.use(cookieParser());
app.use(session({
    secret:'iamkey',
    resave:false,
    saveUninitialized:true,
    cookie:{path:'/',maxAge:5000,"username":"shubhamdhoot"}
}))
app.use('/',web)

const PORT = 8003;

app.listen(PORT,()=>{console.log('port listner at 8003') })