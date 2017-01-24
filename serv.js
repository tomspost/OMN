console.log("STARTING OMN SRVER and LOADING CONFIG");
console.log("=====================================");
var config = require("./config");
console.log(config);
console.log("=====================================");

var rssServers = config.trusted; 
var rssItems = [];
var tags = [];
var getRSS = require("./getrss");

console.log("OMN is fetching feeds in local opml files")
require("./opml")(config.opmlfiles, rssServers); //load rss feeds from ompl files

//todo load rss feeds from ompl servers

setTimeout(function(){
getRSS(rssServers, rssItems,tags); //fetch the first batch of items after reading server lists
}, 3000);

console.log("OMN is fetching and deduping RSS items every ",config.updateEvery/1000/60," mins");
setInterval(function(){
    getRSS(rssServers, rssItems,tags);
}, config.updateEvery);

//todo get feed lists from other OMN servers

//todo descover omn servers

//start the api
require("./api")(rssItems,rssServers,tags);
console.log("OMN API started OMN is RUNNING!...");

