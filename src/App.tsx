import React, {useState} from 'react';
import './App.css';
import ClientsPage from "./pages/clients-page/ClientsPage";
import {store} from "./store/data";
import AddClient from "./components/add-client/AddClient";

function App() {

    return (
        <div className="App">

            <ClientsPage clients={store.clients} />
<AddClient />
        </div>
    );
}

export default App;
