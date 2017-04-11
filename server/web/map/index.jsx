'use strict';
const Layout = require('../layouts/map.jsx');
const React = require('react');


class MapPage extends React.Component {
    render() {

       /* const feet = <script src="/public/pages/map.min.js"></script>; */
       const feet = '';

        return (
            <Layout
                title="Map"
                feet={feet}
                activeTab="map">

                <div className="row">
                    
                    <div className="col-sm-12 text-center">
                        <a href="/">Home</a>
                        <h1 className="page-header">Map View Current</h1>
                        <div>
                            <div id="map"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = MapPage;
