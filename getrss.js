//get RSS items from all OMN servers

var FeedParser = require('feedparser'),
    request = require('request');

function errors(rssFeed,j) {
    // remove feeds that are erroring. add them back every day!
}

function gertAllRSS(rssServers, rssItems) {
    rssServers.forEach(function (rssFeed, j) {
        /////////console.log("Fetching RSS from: ", rssFeed);
        getARSS(rssFeed, rssItems, rssServers,j);
    });
}

function getARSS(rssFeed, rssItems, rsssServers, j) {

    var req = request(rssFeed),
        feedparser = new FeedParser([]); //options needed

    req.on('error', function (error) {
        // handle any request errors 
       //////////// console.log("req ERROR ", error);
    });

    req.on('response', function (res) {
        var stream = this;

        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

        stream.pipe(feedparser);
    });



    feedparser.on('error', function (error) {
        // always handle errors 
    });

    feedparser.on('error', function (error) {
        // handle any request errors 
        /////////////console.log("feedparser ERROR ", error);
    });

    feedparser.on('readable', function () {
        // This is where the action is! 
        var stream = this,
            meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance 
            ,
            item;

        while (item = stream.read()) {
            //check if the item already exists via brutforce check of all current items!
            var replace = -1;
            //console.log(item);
            ///var tags = item.categories;
            //console.log(tags);
            rssItems.forEach(function (checkIt, i) {
                if (item.guid === checkIt.guid) {
                    replace = i;
                }
            });
            if (replace > -1) {
                rssItems[replace] = item; //update current
                //console.log("UPDATE ", item.title, " FROM ", item.link.split("/")[2]);
            }
            else {
                rssItems.push(item); //add new
                console.log("NEW  ", item.title, " FROM ", item.link.split("/")[2]);
            }
        }
    });
}

module.exports = gertAllRSS;
