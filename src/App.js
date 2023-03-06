import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Route,Routes,Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Discussions from './components/Discussions';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      <Navbar/>
      <Route path='/'>
        <Dashboard/>
      </Route>
      <Route path='/courses'>
        <Courses/>
      </Route>
      <Route path='/discussions'>
        <Discussions/>
      </Route>

  
      
       <Footer/>
      </header>
    </div>
  );
}

export default App;
