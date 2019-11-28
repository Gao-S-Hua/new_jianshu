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
        console.log('########### Handle Client GET #################');
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
// Handle POST:
app.post('/api/user',function(req,res){
    console.log('########### Handle Client POST #################');
    console.log(`Server Received : ${JSON.stringify(req.body)} ||  path :${req.path}`)
    console.log(' ');
    if(req.body.userid === "huahua" && req.body.pswd === "3722")
        res.send({log : true, nickName : "绍华", error : false, id : "4520"});
    else
        res.send({log : false, nickName : "", error : true, id:"4520"})
  });


  // Handle session
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 10*1000
    }
  }))
  app.use(function (req, res, next) {
    if (!req.session.views) {
      req.session.views = 0
    }
    // count the views
    req.session.views = ((req.session.views || 0) + 1);
    next();
  })
  app.get('/foo', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views + ' times')
  })
app.listen(8000, () => console.log("Listening on port 8000!"))