import Nav from './Nav';
function Header() {
    return (
        <header className='header'>
            <div className='container flex' >
                <img
                    src={require("../assets/avatar.png")}
                    alt="LOGO" width={60} height={60} />
                <Nav />
            </div>
        </header>
     );
};

//export default Header;