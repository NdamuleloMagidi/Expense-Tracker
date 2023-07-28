import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Sidebar from './components/SideBar';
import TransactionList from './components/TransactionList';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import AboutPage from './pages/AboutUs';
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
            <Route path="/personal-details" component={PersonalDetailsPage} />
            <Route path="/aboutus" component={AboutPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

