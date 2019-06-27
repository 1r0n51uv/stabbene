import React, {Component} from 'react';
import imgUrl from "../img/cover_4.jpg";
import 'video-react/dist/video-react.css';
import gif from './../img/ezgif.com-gif-maker.gif'
class Home extends Component {
    render() {
        return (
            <div>
                <div className='blurred-container' >

                    <div className="row center-block">

                        <div className="col-md-12">

                            <div className="motto" style={{width: '100%'}}>

                                <img src={gif}
                                     className="img-responsive center-block "
                                     alt=""/>

                            </div>

                        </div>


                    </div>







                    <div className="img-src" style={{backgroundImage: 'url(' + imgUrl + ')'}}/>
                    <div className="img-src blur" style={{backgroundImage: 'url(' + imgUrl + ')'}}/>
                </div>
            </div>


        );
    }
}

export default Home;