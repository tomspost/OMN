// OMN configuration - this will be replaced by a db with a web GUI

var config = {
    updateEvery:1*10*1000, //get new RSS items every 1 min seconds for testing
    trusted:["http://www.greenpeace.org/international/Templates/Planet3/Handlers/RssHandler.ashx?type=videos&epslanguage=en-GB"],
        opmlfiles:["./feedly-fcfebec6-19a1-45ee-97cc-924dd1a532a9-2016-11-29.opml"],
        opmlURLs:[],
    untrusted:[],
    banned:[],
};

module.exports = config;