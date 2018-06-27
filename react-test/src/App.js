import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import Main from './components/Main';
import Navbar1 from './components/Navbar1';

const App = () => (
  <div>
    <Navbar1 />
    <div className="container">
      <Main />
    </div>

    <div className="fixed-action-btn">
    <Link to="/user/add" className="btn-floating btn-large red">
    <i className="fa fa-plus"></i> 
    </Link>
    </div>
  </div>
)


export default App;
