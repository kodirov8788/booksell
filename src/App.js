<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";
import Navbar from "./components/nav/Navbar";
=======
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Sidebar from './components/sidebar/Sidebar';

>>>>>>> 8c8b4f534909d62ca882fd8db489426dce65b0b6

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <MainPages />
          <Sidebar />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
