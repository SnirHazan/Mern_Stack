import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import logo from './logo.svg';
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import HourLogger from './components/HourLogger';
import HoursReport from './components/HoursReport';
import NavBar from './components/NavBar';

const links = [
    { to: '/', text: 'Hour Logger'},
    { to: '/create', text: 'Create Employee'},
    { to: '/report', text: 'Hours Report'},
    { to: '/delete', text: 'Delete Employee'},
];

function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <NavBar
                    logo={logo}
                    mainLink={{ to: '/' ,text: "MERN App"}}
                    links={links}
                />

                <br />

                <Route path='/' exact component={HourLogger} />
                <Route path='/create' component={CreateEmployee} />
                <Route path='/report' component={HoursReport} />
                <Route path='/delete' component={DeleteEmployee} />
            </div>
        </BrowserRouter>
    );
}

export default App;
