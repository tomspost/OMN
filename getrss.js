//get RSS items from all OMN servers

var FeedParser = require('feedparser'),
    request = require('request'),
    strip = require('striptags'),
    truncate = require('truncate'),
    config = require("./config");


function errors(rssFeed, j) {
    // remove feeds that are erroring. add them back every day!
}

function gertAllRSS(rssServers, rssItems, tags) {
    rssServers.forEach(function(rssFeed, j) {
        /////////console.log("Fetching RSS from: ", rssFeed);
        getARSS(rssFeed, rssItems, rssServers, tags, j);
    });
}

function getARSS(rssFeed, rssItems, rsssServers, tags, j) {



    var req = request(rssFeed),
        feedparser = new FeedParser([]); //options needed

    var limit = 50000;
    var count = 0;

    req.on('error', function(error) {
        // handle any request errors 
        console.log("req ERROR ", error);
    });

    req.on('response', function(res) {
        var stream = this;

        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

        stream.pipe(feedparser);
    });


    feedparser.on('error', function(error) {
        // handle any request errors 
        /////////////console.log("feedparser ERROR ", error);
    });

    feedparser.on('readable', function() {
        // This is where the action is! 
        var stream = this,
            meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance 
            ,
            item;

        while (item = stream.read()) {

            var newTags = ["all"];
            // TODO Add site name as tag
            if (item.link.indexOf("feedproxy") != -1) {
                newTags.push("@"+item.link.split("/")[4].toLowerCase());
            }
            else {
                newTags.push("@"+item.link.split("/")[2].replace("www.", "").toLowerCase().split(".")[0]);
            }
            // check tag quality
            item.categories.forEach(function(tag, i) {
                newTags.push(tag.toLowerCase());
            });

            item.categories = newTags;

            // TODO convert tags to lower case

            // TODO Remove long tags

            // strip all HTML from the disctription

            if (config.stipHTMLtags) {
                item.description = strip(item.description);
            }

            // shorten the discription

            item.description = truncate(item.description, config.truncateDiscriptions);

            //check if the item already exists via brutforce check of all current items!
            var replace = -1;
            //console.log(item);
            count = count + 1;
            if (limit > count) {


                var replace = -1;
                rssItems.forEach(function(checkIt, i) {
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
                    //console.log(tags.length);
                    //console.log(rssItems.length);
                }

                //pars tags
                item.categories.forEach(function(tag, i) {
                    //console.log(tag);
                    var use = true;
                    tags.forEach(function(check) {
                        if (check.tag == tag) {
                            use = false;
                            if (replace === -1) {  //check if the tag is in an updated item
                                check.c++;
                            }
                        }
                    });
                    if (use == true) {
                        if (tag.length < 30) {
                            tags.push({
                                tag: tag,
                                c: 1
                            });
                        }
                    }
                });


            }
        }
    });
}

module.exports = gertAllRSS;
