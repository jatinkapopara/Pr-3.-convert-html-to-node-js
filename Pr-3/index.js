const express = require('express');

const port = 8888;
const path = require('path');

const app = express();

app.use(express.urlencoded());

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    return res.render('index');
});

app.get('/button',(req,res)=>{
    return res.render('button');
});

app.get('/typography',(req,res)=>{
    return res.render('typography');
});

app.get('/element',(req,res)=>{
    return res.render('element');
});

app.get('/widget',(req,res)=>{
    return res.render('widget');
});

app.get('/form',(req,res)=>{
    return res.render('form');
});

app.get('/table',(req,res)=>{
    return res.render('table');
});

app.get('/chart',(req,res)=>{
    return res.render('chart');
});

app.get('/signin',(req,res)=>{
    return res.render('signin');
});

app.get('/signup',(req,res)=>{
    return res.render('signup');
});

app.get('/404',(req,res)=>{
    return res.render('404');
});

app.get('/blank',(req,res)=>{
    return res.render('blank');
});


app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start on port = ${port}`);
})

