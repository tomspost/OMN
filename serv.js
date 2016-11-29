
var config = require("./config");

console.log("OMN SRVER CONFIG",config);

var rssServers = config.trusted;
var rssItems = [{link:"dogs"}];

var getRSS = require("./getrss");

// get the inital set of RSS items
getRSS(rssServers, rssItems);

// update the RSS items 
setInterval(function(){
    getRSS(rssServers, rssItems);
}, config.updateEvery);




