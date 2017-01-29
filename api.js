var config = require("./config");
var express = require('express');
var app = express();
var cors = require('cors'); // alow broswers to access from all sites
var RSS = require('rss');

app.use(cors());
app.use(express.static('public'));

function api(rssItems, rssServers, tags) {
  
  app.get('/test', function(req, res) {
    res.send('OMN server is up and running!!! <br/> with ' + rssItems.length + ' RSS Items <br/> from '+ rssServers.length+' Servers');
  });

  app.get('/rss', function(req, res) {
    //////config.feedOptions.pubDate = new Date();
    var feed = new RSS(config.feedOptions);


    //rssItems.forEach(function(item, i) {
    var item = "";

    var step = 0;
    for (step = rssItems.length -1; (rssItems.length - 200) < step; step--) {
      
      //if ((Math.random()*100) < 20) {continue;}
      if (step <0) {break;}
      item = rssItems[step];
      var or = false;
      var and = false;

      // find ORed tag items and add to the feed
      if (req.query.tagsOr) {
        item.categories.forEach(function(tag, j) {
          req.query.tagsOr.split('/').forEach(function(check, k) {
            if (check == tag) {
              or = true;
            }
          });
        })
      }
      else {
        or = true;
      }


      // add found items to requested feed
      if ((or === true) || (and === true)) {
        feed.item(item);
      }

    }
    //});
    
    var xml = feed.xml({indent:true});

    res.type('application/rss+xml');
    res.send(feed.xml({
      indent: false
    }));

  });





  app.get('/everything', function(req, res) {

    var jsonItems = [];

    rssItems.forEach(function(item, i) {
      if(item.enclosures) {console.log(JSON.stringify(item.enclosures));}
      jsonItems.push({
        title: item.title,
        description: item.description,
        link: item.link,
        categories: item.categories,
        guid: item.guid,
        image: item.image.url,
        enclosures:item.enclosures
      })
    });

    res.json({
      rssServers: rssServers,
      rssItems: jsonItems,
      rssTags: tags,
      baseURL: config.OMNURL,
    });
  });



  app.listen(process.env.PORT || 8080, function() {
    console.log('OMN is listening on port ', process.env.PORT);
  })
}

module.exports = api;
