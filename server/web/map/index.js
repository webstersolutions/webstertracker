'use strict';


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/map',
        handler: function (request, reply) {

            reply.view('map/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/map'
};
