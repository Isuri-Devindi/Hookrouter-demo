import './App.css';
import {useRoutes} from 'hookrouter'
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const routes = {
    '/' :()=><Home/>,
    '/about' :()=> <About/>,
    '/shop' :()=> <Shop/>,
    '/shop/:id':({id})=><Details id={id}/>
  };
  const routeResults = useRoutes(routes);
  return (
    <div className="App">
        <Nav/>
        {routeResults}
    </div>
  );
}

export default App;
