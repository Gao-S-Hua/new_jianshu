import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './components/home';
import Details from './components/details';
import SignIn from './components/signIn';
import Regist from './components/regist';
import store from './store'
const App = () => {
    // const [ID, setID] = useState("null")
    // useEffect(() => {
    //     axios.get('/api/getID').then(res =>  {setID(res.data.ID); console.log(res)});
    // },[1])
    
return (
    <>
        <Provider store = {store}>
            <BrowserRouter>
                <Route path = '/' exact component = {Home} />
                <Route path = "/p/:id"  component = {Details} />
                <Route path = "/sign_in"  component = {SignIn} />
                <Route path = "/regist"  component = {Regist} />
            </BrowserRouter>
        </Provider>
    </>
)
}

export default App;