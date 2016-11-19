# OMN
Let's break out of the straightjacket of the dotcons and get web2.0 links connecting again.  OMN (Open Media Network) is a simple distributed RSS aggregation server and web client. 


# To install and run

npm install OMN

cd OMN

node serv.js

https://localhost:8080


#API

GET /servers/

PUT /servers/

GET /rss/

GET /rss/tags

GET /atom/

GET /atom/tags

GET /links/

PUT /links/

PUT /link/

GET /tags/

All put request require Oauth2 authentication
