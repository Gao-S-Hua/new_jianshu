const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();

const getData = (fileName) =>{
    const contents = JSON.parse(    fs.readFileSync(path.join(__dirname,`./data/${fileName}.json`), 'utf8')   );
    if(contents){
        console.log(contents)
        return contents.data;
    }
    else
        return null;
}

// app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// APIs :
// Handle GET:
app.get('/api/*', 
    (req, res) => { 
        const requestFile = req.params[0];
        console.log('########### Handle Client GET #################');
        console.log(`Client request File : ${requestFile}.json`);
        console.log(' ');
        res.send(getData(requestFile)) 
    }
);

// Handle POST:
app.post('/api/user',function(req,res){
    console.log('########### Handle Client POST #################');
    console.log(`Server Received : ${JSON.stringify(req.body)} || from path :${req.path}`)
    console.log(' ');
    res.send("pass");
  });

app.listen(8000, () => console.log("Listening on port 8000!"))