import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import Header from './components/Header';
import './index.css';
import './App.css';
import EntryList from './components/EntryList';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <EntryList />
      </div>
    </Provider>
  );
};

export default App;
