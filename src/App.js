import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <AppHeader />
                <Switch>
                    <Route component={CartPage} path='/cart' />
                    <Route component={ProductPage} path='/product' />
                    <Route component={HomePage} path='/' />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
