'use strict';
const React = require('react');


const propTypes = {
    children: React.PropTypes.node,
    feet: React.PropTypes.node,
    neck: React.PropTypes.node,
    title: React.PropTypes.string
};

class MapLayout extends React.Component {
    render() {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <link rel="stylesheet" href="/public/core.min.css" />
                    <link rel="stylesheet" href="/public/track/custom.css" />
                    <link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.css' rel='stylesheet' />
                    <link rel="shortcut icon" href="/public/media/favicon.ico" />
                    {this.props.neck}
                </head>
                <body>
                    {this.props.children}
                    
                    {this.props.feet}
                    <script src="https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.js"></script>
                    <script src="https://cdn.firebase.com/js/client/2.2.3/firebase.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.7.0/lodash.min.js"></script>
                    <script src="/public/track/config.js"></script>
                    <script src="/public/track/app.js"></script>
                </body>
            </html>
        );
    }
}

MapLayout.propTypes = propTypes;


module.exports = MapLayout;
