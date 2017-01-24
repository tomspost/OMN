// OMN configuration - this will be replaced by a db with a web GUI 

var config = {
    OMNURL: "https://omn-tomspost.c9users.io/",  // this sites base url
    updateEvery: 10* 60 * 1000, //get new RSS items every 10 min  for testing in ms
    trusted: [
        //"http://www.greenpeace.org/international/Templates/Planet3/Handlers/RssHandler.ashx?type=videos&epslanguage=en-GB",
    ], 
    opmlfiles: [
        //"./feedly-fcfebec6-19a1-45ee-97cc-924dd1a532a9-2016-11-29.opml",
        "./feedly-126d9e42-a772-42f5-b7f6-bf3f94e8a21d-2016-12-02.opml",
    ],
    opmlURLs: [],
    untrusted: [],
    banned: [],
    truncateDiscriptions:250,
    stipHTMLtags: true,
    maxTagLength: 25,
    feedOptions: {
        title: 'title',
        description: 'description',
        feed_url: 'http://example.com/rss.xml',
        site_url: 'http://example.com',
        image_url: 'http://example.com/icon.png',
        docs: 'http://example.com/rss/docs.html',
        managingEditor: 'who?',
        webMaster: 'Who',
        copyright: 'What?',
        language: 'en',
        categories: ['Category 1', 'Category 2', 'Category 3'],
        pubDate: 'May 20, 2012 04:00:00 GMT',
        ttl: '60',
    }
};

module.exports = config;
 