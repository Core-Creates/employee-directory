import React, {Component} from 'react';

class Navbar extends Component{
    render() {
        return (

            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Navbar
                    </Navbar.Brand>
                </Navbar>
            </>

        );
    }

}

export default Navbar;