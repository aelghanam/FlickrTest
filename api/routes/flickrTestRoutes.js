'use strict';
module.exports = function (app) {
    var flickrList = require('../controllers/flickrTestController');

    app.route('/entries/:tag')
        .get(flickrList.list_entries_with_tag);

    // todoList Routes
    app.route('/entries')
        .get(flickrList.list_all_entries);

    
};