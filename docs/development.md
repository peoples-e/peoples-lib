# Development

First, you'll need to install [couchapp](https://github.com/couchapp/couchapp) 

Create a [.couchapprc](http://guide.couchdb.org/draft/managing.html#configuring) file. It could look like this:

```javascript
{
  "env" : {
  	"default" : {
        "db" : "http://localhost:5984/peoples-lib"
  	}
  }
}
```

Fetch your dependencies
```	
npm install
```
```
bower install
```

Develop using...

```
gulp watch
```