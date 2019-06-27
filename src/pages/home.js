import React, {Component} from 'react';
import imgUrl from "../img/cover_4.jpg";
import ReactPlayer from "react-player";
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import gif from './../img/ezgif.com-gif-maker.gif'
class Home extends Component {
    render() {
        return (
            <div>
                <div className='blurred-container' >

                    <div className="row center-block">

                        <div className="col-md-12">
                            <div className="motto">

                                <img src={gif}  className="img-responsive" alt=""/>

                                {/*<ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/stabbene-26dc4.appspot.com/o/Stabbene_Home.mp4?alt=media&token=a63d4279-544b-4055-86ca-f3b405795ea8"
                                             playing="true"
                                             loop="true"
                                             width='100%'

                                />*/}


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