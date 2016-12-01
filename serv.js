
console.log("STARTING OMN SRVER and LOADING CONFIG");
console.log("=====================================");
var config = require("./config");
console.log(config);
console.log("=====================================");


var rssServers = config.trusted;
var rssItems = [];
var getRSS = require("./getrss");

require("./opml")(config.opmlfiles, rssServers); //load rss feeds from ompl files
//todo load rss feeds from mpl servers

// get the inital set of RSS items
getRSS(rssServers, rssItems);

// update the RSS items 
setInterval(function(){
    getRSS(rssServers, rssItems);
}, config.updateEvery);


//todo get feed lists from other OMN servers

//todo descover omn servers

//start the api
require("./api")(rssItems,rssServers,["tags go here"]);

