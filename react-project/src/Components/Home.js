import React, {Component} from "react";
import {Link} from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div className="Home">
                <p>React.js project</p>
                <Link to="/lazy-load">
                    <button>Lazy Load</button>
                </Link>
                <Link to="/bulk-data">
                    <button>Bulk Data</button>
                </Link>
                <Link to="/request">
                    <button>Request</button>
                </Link>
            </div>
        );
    }
};

export default Home;
