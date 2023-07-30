import { BrowserRouter, Link } from 'react-router-dom';
function Nav(){
    return(
        <BrowserRouter>
        <nav className='nav'> <ul className='navbar'>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/"> About </Link> </li>
            <li> <Link to="/"> Menu </Link> </li>
            <li> <Link to="/"> Reservations </Link> </li>
            <li> <Link to="/"> Order online </Link> </li>
            <li> <Link to="/"> Login </Link> </li>
            </ul> </nav>
        </BrowserRouter>
    );
};

export default Nav;