# Development

1. First, you'll need to install [couchapp](https://github.com/couchapp/couchapp) 
2. Create a [.couchapprc](http://guide.couchdb.org/draft/managing.html#configuring) file. It could look like this:

	{
	  "env" : {
	  	"default" : {
	        "db" : "http://localhost:5984/peoples-lib"
	  	}
	  }
	}

3. Fetch your dependencies
	
	npm install

	bower install

4. Develop using...

	gulp watch