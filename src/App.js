import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

import Header from './Reuseables/Header';
import Footer from './Reuseables/Footer';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Styles/theme';

function App() {
   return (
      <div className='App'>
         <ThemeProvider theme={theme}>
            {/* <Header /> */}
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/about' component={About} />
               <Route exact path='/work' component={Work} />
               <Route exact path='/contact' component={Contact} />
            </Switch>
            {/* <Footer /> */}
         </ThemeProvider>
      </div>
   );
}

export default App;
