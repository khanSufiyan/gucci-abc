# OMEGA-ABC


### Examples/Usage

###### Install Node and Grunt
First, make sure to have Node >= 0.8.0 [installed on your system](http://nodejs.org/). Also, make sure to have [grunt-cli](http://gruntjs.com) installed globally.
```
$ npm install -g grunt-cli
```

###### Clone Repo
```
$ git clone https://github.com/optcentral/omega-abc.git
```

###### Move to omega-abc
Now move to omega-abc from your terminal,
```
$ cd omega-abc
```

###### Start Server
Then, use grunt server to start up the web server. Grunt will recompile and restart the server when files change.
```
$ grunt server
```
###### Run App
Now, pull up the app in your web browser. It defaults to port 3030.

```
$ open http://localhost:3080/
```

You can choose a different port by passing the PORT environment variable:
```
$ PORT=80 grunt server
```