const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
var session = require('express-session')


const getData = (fileName) =>{
    const contents = JSON.parse(    fs.readFileSync(path.join(__dirname,`./data/${fileName}.json`), 'utf8')   );
    if(contents){
        console.log(contents)
        return contents.data;
    }
    else
        return null;
}

// app.use(express.static(__dirname +'./media'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// APIs :
// Handle GET:
app.get('/data/*', 
    (req, res) => { 
        const requestFile = req.params[0];
        console.log(`Client request File : ${requestFile}.json`);
        console.log(' ');
        res.send(getData(requestFile)) 
    }
);
app.get('/media/*', 
    (req, res) => { 
        res.sendFile(__dirname + '/media/'+req.params[0]);
    }
);
// Handle User log in / out:
// Handle session
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 10*60*1000
    }
  }));


app.get('/api/user', function(req,res){
    if(req.session.userinfo)
        res.send({log : true, nickName : "蝙蝠侠", error : false, id : "4520"});
    else
        res.send({log : false, nickName : "", error : false, id : ""});
});

app.post('/api/logout', function(req,res){
    req.session.destroy();
    console.log("User Log Out")
})

app.post('/api/user',function(req,res){
    console.log(`Server Received : ${JSON.stringify(req.body)} ||  path :${req.path}`)
    console.log(' ');
    if(req.body.userid === "admin" && req.body.pswd === "admin"){
        console.log("Set user info");
        if(req.body.remeberme)
            req.session.userinfo="4520";
        res.send({log : true, nickName : "蝙蝠侠", error : false, id : "4520"});
    }
    else
        res.send({log : false, nickName : "", error : true, id:""})
  });


app.listen(8000, () => console.log("Listening on port 8000!"))