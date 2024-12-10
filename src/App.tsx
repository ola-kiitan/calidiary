import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './state/store';
import Header from './components/Header';
import './index.css';
import './App.css';
import EntryList from './components/EntryList';
import MapPage from './MapPage';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' Component={EntryList} />
            <Route path='/map' Component={MapPage} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
