'use strict';

var Request = require("request");

exports.list_all_entries = function(req, res) {
  Request.get("https://api.flickr.com/services/feeds/photos_public.gne", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      var convert = require('xml-js');
      var result1 = convert.xml2json(body, {compact: true, spaces: 4,ignoreText:true});
      let entries=JSON.parse(result1).feed.entry;
      let images=[];
      entries.forEach(entry => {
          images.push(entry.link[1]._attributes.href);
      });
      res.send(images);
  });
};

exports.list_entries_with_tag = function(req, res) {
  Request.get("https://api.flickr.com/services/feeds/photos_public.gne?tags="+req.params.tag , (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
      var convert = require('xml-js');
      var result1 = convert.xml2json(body, {compact: true, spaces: 4,ignoreText:true});
      let entries=JSON.parse(result1).feed.entry;
      let images=[];
      entries.forEach(entry => {
          images.push(entry.link[1]._attributes.href);
      });
      res.send(images);
  });
};