const path = require('path');
const express = require('express');

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

// APIs :
app.get('/api/*', 
    (req, res) => { 
        const requestFile = req.params[0];
        console.log(`Client request File : ${requestFile}.json`);
        res.send(getData(requestFile)) 
    }
);

app.listen(8000, () => console.log("Listening on port 8000!"))