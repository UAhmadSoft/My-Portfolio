import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
   return (
      <div className='App'>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/contact' component={Contact} />
         </Switch>
      </div>
   );
}

export default App;
