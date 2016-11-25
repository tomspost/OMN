
var config = {
    fetchAllRSSEveryMins: 1,
};


// list of RSS feeds

var RSSListGood = [
  "http://lorem-rss.herokuapp.com/feed",
  "http://lorem-rss.herokuapp.com/feed?unit=second&interval=30",
  "http://www.tbray.org/ongoing/ongoing.atom",
   ];
var RSSListBad = [
   ];
var RSSListUnknown = [
   ];



// list of servers

// list of our RSS feeds


// update all  items





 
var FeedParser = require('feedparser')
  , request = require('request');
 
var req = request('http://lorem-rss.herokuapp.com/feed')
  , feedparser = new FeedParser([]); //options needed
 
req.on('error', function (error) {
  // handle any request errors 
});
req.on('response', function (res) {
  var stream = this;
 
  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
 
  stream.pipe(feedparser);
});
 
 
feedparser.on('error', function(error) {
  // always handle errors 
});
feedparser.on('readable', function() {
  // This is where the action is! 
  var stream = this
    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance 
    , item;
 
  while (item = stream.read()) {
    console.log(item);
  }
});




/*


var RSSitems = []; //arrary of agrigated rss items


var 

// start a timer to featch the data

// loop through the list

    //get next rss
    
        //loop trough the items
            var RSSitem = 'yyy';
        
            // check the item
            
            // the hash based on the name to use as an index
            // add a letter to the hash to make it a valid ID???
            
            
            var RSSitemHash = 'xxx';
            RSSitems [RSSitemHash] = item;
        

// update all OMN servers

// loop through OMN servers

    // get the server list from each server passing your own server URL
    
    // loop through OMN each server list
    
        //update our server list
        var OMNserver = 'zzz';
        var OMNserverHash = hash(OMNserver.url);
        OMNserverlist[OMNserverHash] = OMNserver;
        


// get all the RSS URLSfeeds from each server

//loop through RSSServers

    //get RSS feed list from each
    
        //for each item
        
            //check the item
            
            // hash its URL
            
            // update the feed list if needed
            
// GET /rss


// GET /atom


// GET /OMNServers


// GET /RSSservers


*/