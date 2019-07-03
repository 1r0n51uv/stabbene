import React, {Component} from 'react';
import new_logo from "../img/new_logo.png";
import pills from "../img/pills.jpg";

class Navbar extends Component {
    render() {
        return (
            <div id="navbar-full">

                <div className="container">
                    <nav className="navbar navbar-ct-blue navbar-transparent navbar-fixed-top" role="navigation">

                        <div className="container">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <a href="#">
                                    <div className="logo-container">
                                        <div className="logo">
                                            <img src={pills} alt=""/>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#" style={{color: 'black'}}>Home</a></li>
                                </ul>

                            </div>

                        </div>

                    </nav>
                </div>

            </div>
        );
    }
}

export default Navbar;