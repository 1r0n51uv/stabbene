import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="overlayer">
                    <div className="container">
                        <div className="row">
                            <div className="credits pull-right">
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