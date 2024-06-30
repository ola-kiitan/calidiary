import React from 'react'
import { Provider } from 'react-redux'
import store from './store' // Import store
import Header from './components/Header'
import './App.css'

// Import components
import EntryList from './components/EntryList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <EntryList />
      </div>
    </Provider>
  )
}

export default App
