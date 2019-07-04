import React, {Component} from 'react';
import Interval from 'react-interval-rerender'
import 'video-react/dist/video-react.css';
import gif from './../img/ezgif.com-gif-maker.gif'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class Home extends Component {
    render() {
        return (
            <div>

                <div className="social-line" style={{height: '150px'}}/>

                <div className='container tim-container' >

                    <div className="row center-block">

                        <div className="col-md-12" >


                            <img src={gif}
                                 className="img-responsive center-block "
                                 alt=""/>

                            <div className="card">


                            </div>


                        </div>
                        <div className="col-md-12 text-center"  style={{marginBottom: '5%', marginTop: '2%'}}>

                            <h2>L'agenzia creativa per la tua IPOCONDRIA</h2>


                            <AwesomeButton type="secondary" size="auto" href="mailto:stabbenecomunicazione@gmail.com">
                                CONTACT US!
                            </AwesomeButton>
                        </div>


                    </div>


                    {
                        //<div className="img-src" style={{backgroundImage: 'url(' + imgUrl + ')'}}/>
                        //<div className="img-src blur" style={{backgroundImage: 'url(' + imgUrl + ')'}}/>
                    }

                </div>
            </div>


        );
    }
}

export default Home;