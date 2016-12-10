// OMN configuration - this will be replaced by a db with a web GUI

var config = {
    updateEvery:60*1000, //get new RSS items every 1 min  for testing in ms
    trusted:[
        //"http://www.greenpeace.org/international/Templates/Planet3/Handlers/RssHandler.ashx?type=videos&epslanguage=en-GB",
        ],
        opmlfiles:[
        //"./feedly-fcfebec6-19a1-45ee-97cc-924dd1a532a9-2016-11-29.opml",
        "feedly-126d9e42-a772-42f5-b7f6-bf3f94e8a21d-2016-12-02.opml",
        ],
        opmlURLs:[],
    untrusted:[],
    banned:[],
};

module.exports = config;