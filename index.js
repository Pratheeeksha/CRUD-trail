const express=require('express');
const app=express();
const path=require('path');
const usermodel=require('./model.js/user');


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
 app.use(express.static(path.join(__dirname,'public')));
 app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/create',async(req,res)=>{
let {name,mail,image}=req.body;

   let user = await usermodel.create({
    name:name,
    email:mail,
    url:image,
   })
   res.redirect('/read');

});

app.get('/edit/:id',async (req,res)=>{
    let user2 = await usermodel.findOne({_id:req.params.id});
    res.render('edit',{user2});
})

app.post('/edit/:id',async (req,res)=>{
    let {name,mail,image}=req.body;
     let user= await usermodel.findOneAndUpdate({_id:req.params.id},{name,mail,image},{new:true});
     res.redirect('/read');
    })
    




app.get('/del/:id',async(req,res)=>{
    let user=await usermodel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read');
})



app.get('/read',async (req,res)=>{
    let user1 = await usermodel.find();
    res.render('read',{user1:user1});
})


app.listen(8080,()=>{
    console.log("Running")
});



























// const express = require('express');
// const app=express();
// const path = require('path')
// const fs=require('fs')

// app.use(express.json());
// app.use(express.urlencoded({ extended:true }));
// app.use(express.static(path.join(__dirname,'public')));
// app.set('view engine','ejs');

// app.get('/',function(req,res){
//  fs.readdir('./files',function(err,files){
//     // fs.readFile('files','utf-8',function(err,filedata){
//         res.render('index',{files:files});   
//     })
//     // res.render('index',{files:files});

//  })
 
   
 
// app.post('/create',function(req,res){
//     fs.writeFile(`./files/${req.body.task.split(' ').join('')}.txt`,req.body.task,function(err){
        
//        res.redirect('/');
//     })
    

//     })



// app.listen(3000,()=>{
//     console.log("runing")
// })