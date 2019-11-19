import React, {useEffect, useState} from 'react';
import axios from 'axios';
const App = () => {
    const [ID, setID] = useState("null")
    useEffect(() => {
        axios.get('/api/getID').then(res =>  {setID(res.data.ID); console.log(res)});
    },[1])
    
return <div>Hello World, your ID is {ID}</div>
}

export default App;