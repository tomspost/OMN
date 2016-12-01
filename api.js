var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(express.static('public'))

function api(rssItems,rssServers,tags){
app.get('/dog', function (req, res) {
  res.send('Hello World!');
});
app.get('/cat', function(req, res) {
  
  res.jsonp({
    rssServers:rssServers,
    rssItems:rssItems,
    rssTags:tags
  });
}); 
  


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ',process.env.PORT);
})
}

module.exports = api;