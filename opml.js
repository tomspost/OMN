//read opml files and urls and add their feeds to OMN

var OpmlParser = require('opmlparser'),
    request = require('request'),
    fs = require("fs");

var options = {};


function gertAllomplfiles(omplList, rssServers) {
    omplList.forEach(function (ompl) {
        console.log("Fetching RSS feeds from ompl: ", ompl);
        getAomplFile(ompl, rssServers, true);
    });
}

function getAomplFile(ompl, rssServers, file) {

    //var req = request(ompl);
    var readStream = fs.createReadStream(ompl);
    var opmlparser = new OpmlParser([options]);

    readStream.on('error', function (error) {
        // handle any request errors
        console.log('oml file read ERROR ', error)
    });

    readStream.on('open', function () {
        var stream = this;
        stream.pipe(opmlparser);
    });


    opmlparser.on('error', function (error) {
        // always handle errors
    });



    opmlparser.on('readable', function () {
        var stream = this,
            meta = this.meta // **NOTE** the "meta" is always available in the context of the opmlparser instance
            ,
            item;

        while (item = stream.read()) {
            //check if the item already exists via brutforce check of all current items!
            var replace = -1;
            if (item.xmlurl != undefined) {
                rssServers.forEach(function (checkIt, i) {
                    if (item.xmlurl == checkIt) {
                        replace = i;
                    }
                });
                if (replace > -1) {
                    rssServers[replace] = item.xmlurl; //update current
                    console.log("UPDATED FEED ", item.xmlurl);
                }
                else {
                    rssServers.push(item.xmlurl); //add new
                    console.log("NEW FEED ", item.xmlurl);
                }
            }
        }
    });

}

module.exports = gertAllomplfiles;
