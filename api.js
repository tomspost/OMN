var express = require('express');
var app = express();
var cors = require('cors');  // alow broswers to access from all sites

app.use(cors());  
app.use(express.static('public'))

function api(rssItems,rssServers,tags){

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

app.get('/everything', function(req, res) {
  
  var jsonItems = [];
  
  rssItems.forEach(function(item,i){
    jsonItems.push({
      title: item.title,
      description: item.description,
      link: item.link,
      categories: item.categories,
      guid: item.guid,
    })
  });
  
  res.json({
    rssServers:rssServers,
    rssItems:jsonItems,
    rssTags:tags
  });
}); 
  


app.listen(process.env.PORT, function () {
  console.log('OMN is listening on port ',process.env.PORT);
})
}

module.exports = api;