import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{position: 'fixed', bottom: 0, width: '100%'}}>
                <div className="overlayer">
                    <div className="container">
                        <div className="row">
                            <div className="credits">
                                &copy; Made with
                                <i className="fa fa-heart heart" alt="love"/> by 1r0n51uv
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;