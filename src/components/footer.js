import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{position: 'fixed', bottom: 0, width: '100%'}}>
                <div className="overlayer">
                    <div className="container">
                        <div className="row">
                            <div className="credits">
                                &copy; 2016 Get Shit Done Kit, made with
                                <i className="fa fa-heart heart" alt="love"/> for a better web.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;