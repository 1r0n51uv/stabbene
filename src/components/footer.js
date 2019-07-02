import React, {Component} from 'react';
import rdcstl from './../img/LOGO_PNG.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{position: 'fixed', bottom: 0, width: '100%'}}>
                <div className="overlayer">
                    <div className="container">
                        <div className="row">
                            <div className="credits">
                                &copy; Made with { ' ' }
                                <i className="fas fa-heart" alt="love"/> by <code>Red Castle</code> {' '}
                                <i className="fab fa-fort-awesome" style={{fontSize: '230%', color: '#d91e18'}} alt="love"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;