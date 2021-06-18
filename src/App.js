import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
const App = () => {

  // const estado= useSelector(state =>state)
  // // {console.log("estado global store",estado)}
  // const dispatch=useDispatch()
  // // const arrai=['pikachu', 'balbasaur']
  return(
    <div>
     <Header/>
     <Router>
       <Switch>
         <Route exact path="/" component={ProductListing} />
         <Route exact path="/product/:productId" component={ProductDetail} />
         <Route>404 NOT FOUND </Route>
       </Switch>
     </Router>
        </div>
  )

  
};

export default App;
