const express=require("express");
const bodyParser= require('body-parser');
const app=express();
app.use(express.static("public"));//to use css file in public folder
app.use(bodyParser.urlencoded({extended:true}));//it will contain the value like a pointer
app.get("/",function(req,res){//it will send the file to homepage
  res.sendFile(__dirname+"/mcq.html");
});
app.post("/",function(req,res){//response from server
  const first=req.body.a;
  const second=req.body.b;
  const third=req.body.c;
  const fourth=req.body.d;
  
  
  if(fourth||second||third){
      res.sendFile(__dirname+"/wrongans.html");
  }
  else{
    res.sendFile(__dirname+"/rightans.html");
  }
});

app.listen(3000,function(){
  console.log("you are connected on local host prst 3000");
});