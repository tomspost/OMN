#OMN

Let's break out of the straightjacket of the dotcons algoritms and get web2.0 links connecting again. OMN (Open Media Network) is a simple distributed RSS aggregation server and web client.

Your blog or websites stories will be promoted on thousands of other sites and blogs.

#To install

npm install OMN

optionaly edit the config.js file

Add the sample serv.js file and run using node serv.js

#API

GET / - a test HTML page that shows all ONS items, tags, and servers this uses the /everything/ API to navigae the ONM items, tags, and network

GET /servers/ - gets a JSON list of servers. Every ONS server fetches lists of servers from other ONS servers every 10 mins removing any duplicates

GET /everything/ - gets a JSON object with lists of servers, tags, and all RSS items including untrusted - used to brows the ONS content, tags, and server network

GET /allrss/ - gets all RSS items as an RSS XML document including from untrusted feeds. 

GET /rss/ - gets all trusted RSS items from trusted feeds - USE TO GET THE ONS FEED!

GET /tags/ - get a JSON list of tags in the currrent RSS items

# Simple ONM server configuration (hopefully somone will write an API and web GUI for this..)

Edit the config.js file and add feeds to either the trusted, untrusted, or banned JSON adding any defult tags that will be added to the feeds RSS items. Update the only_serve_tags JSON to enable this server to be a subject matter specialits

All servers in the trusted list will be polled every 10 mins fetching all RSS items. Each item will be added to the outgoing feed. Any duplication of items will update the existing item.

# How to add ONS feed list to any web site

Use any opensorce RSS javascript plugin to your website ort blog. TODO add a list of tested plugins here

Configure the RSS URL of the plugin to point to any ONS server adress. (all ONS servers list the addreses of all other ONS servers if you access them with a web browser)

Edit the whoami JSON to let the world know who is running this ONM server 

The defult CORS headers allow any site to access the API from most modern browser - All HTML items and scripts are removed from all feed items

RSSURL: //anyonsservername.org/trustedrss/

#Optional RSS URL peramiters

Optionaly add any of the following paramiters to the RSS URL

my_server="http://myrssserver.org/rss.xml" - include my RSS server in the global ONS network - it will be initaly untrusted until a trusted ONS server adds it to its trusted list

my_servers_tags="tag1/tag2" - a list of tags that are added to all items from your RSS server

Filter your incoming feed using rsstagson and rsstagsoff

e.g. rsstagson="green/eco"  & rsstagsoff="cats/dogs"  only shows item that have a tag green or eco not including any items that also have tags cats or dogs

#How to get your RSS feed into the ONS network

Simply add an ONS RSS feed to your website and include your RSS url as the my_server peramiter. Then ask that servers owner to trust your feed.

Run an OMN server and add your RSS to the trusted RSS list (unforturnatly your RSS feeds will not be trusted until another OMN server lists yours in their trusted OMN list)

#How ONM does "TRUST" and the prevention of SPAMY RSS items 

We use a very simple trust structure. By running an OMN server or adding any RSS feeds you will not be trusted by defulat. You gain trust by  being listed in the config of another OMN server as trusted.

Trust means that any RSS feeds you list as trusted will be trusted by any other servers that connects to you via a chain of other trusted servers.

If an RSS feed starts serving SPAMY RSS items it can be removed by its OMN server from their trusted list

If a server starts serving SPAMY RSS items it can be isolated from the ONM network by removing it from other servers trusted list. 

A server that trusts other SPAMY OMN servers can be removed from the network in the same way thus remmoving all of its SPAMY OMN servers and feeds from the ONM network.

So if you start seeing any SPAM in your feed then connect your site to a diffrent ONM server the old ONM server will see that you have moved your RSS feed  and  hopefully get thge message that they need to be more choosey about the feeds and ONM servers they trust


# TO DO

* Write and test the v1.0 ONM software
* run it on some cloud servers
* include usefull feeds
* get sites to start using its feeds adding their own feeds
* get people to run their own OMN servers
* Use a database to store everything
* Design a web gui for managment of servers, feeds, and trust with a secure OAuth login


#Name ideas for your OMN servers

180Degrees

Diameticaly opersit

from the other side of the room FTOSOTR.com

from where I am standing FWIAS.com
abc

