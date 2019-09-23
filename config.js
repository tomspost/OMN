// OMN configuration - this will be replaced by a db with a web GUI

var config = {
    OMNURL: "/",  // this sites base url
    updateEvery: 60 * 60 * 1000, //get new RSS items every 1 H  for production (in ms)
    trusted: [
        //"http://www.greenpeace.org/international/Templates/Planet3/Handlers/RssHandler.ashx?type=videos&epslanguage=en-GB",
    ],
    opmlfiles: [
        //"./feedly-fcfebec6-19a1-45ee-97cc-924dd1a532a9-2016-11-29.opml",
        //"./feedly-126d9e42-a772-42f5-b7f6-bf3f94e8a21d-2016-12-02.opml",
        "./OPL.txt"
    ],
    opmlURLs: [],
    untrusted: [],
    banned: [],
    truncateDiscriptions:250,
    stipHTMLtags: true,
    maxTagLength: 20,
    feedOptions: {
        title: 'OMN',
        description: 'The Open Media Network',
        feed_url: 'http://omn.openworlds.info:8080/rss',
        site_url: 'http://omn.openworlds.info:8080/',
        image_url: 'http://omn.openworlds.info:8080/omn.png',
        docs: 'https://github.com/tomspost/OMN',
        managingEditor: 'Hamish',
        webMaster: 'Tom',
        copyright: 'RSS items copyright is from multiple sources',
        language: 'en',
        categories: ['OMN', 'News', 'Video','Audio'],
        pubDate: 'May 20, 2012 04:00:00 GMT',
        ttl: '60',
    }
};

module.exports = config;
