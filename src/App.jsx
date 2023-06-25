import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideBar from './components/SideBar';
import TransactionList from './components/TransactionList';
import MyPersonalDetailsPage from './pages/MyPersonalDetailsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={TransactionList} />
            <Route path="/my-personal-details" component={MyPersonalDetailsPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
