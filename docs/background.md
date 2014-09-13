# Thoughts on The People's Library

The People's Library is a decentralized, sharable, syncable media library and web app. Any device with a web browser becomes a library that allows its owner to collect, consume and share all it contains.
It's a web app inside a media library and a media library inside a web app (i.e. it's a [CouchDB](http://couchdb.apache.org/) [CouchApp](http://couchdb.readthedocs.org/en/latest/couchapp/) containing [pouchdb](http://pouchdb.com/)).  

The People's Library is like iTunes, only it's built on HTML5 and other open technologies, _and_ it can connect to everyone else's libraries. 


## Use Cases

##### Cloud Syncing

![cloud-sync](/docs/assets/cloud-sync.jpg "Cloud Sync")

A desktop PC user navigates to a remote peoples-lib via URL.  The visitor is able to view, search, consume and sync any files in the remote library.  Synced files are stored in the browser for offline use. They can also be downloaded to the PC file system.  The visitor is able to see other visitors currently in the library and sync with them peer-to-peer using webRTC.

##### Guerilla Public Libraries

![public-library](/docs/assets/public-library.jpg "Guerilla Public Library")

A raspberry pi or openWRT router running The People's Library is plugged into an out-of-the-way outlet inside a physical public library (or cafe, supermarket, park...).  The device appears as an open wireless access point that allows all connected to view, search, consume and sync (in either direction, creating a free & local space for public exchange).

##### Seamless Sharing

![protest](/docs/assets/protest.jpg "Seamless Sharing")

Two devices containing The People's Library could locate each other and sync automatically.  A Protest organizer might create a library with relevant literature & propaganda allowing protestors to set their libraries to openly sync.

##### Private Collections

By collecting and enjoying our material culture, we also become its steward. An anecdote: While waiting for his date to come downstairs from preparing for the evening's events, a young suitor uses his smart phone to peruse his date's father's audio collection.  Discovering one of his favorite [obscure bands](http://open.spotify.com/artist/5awyxT5dfxGoIIG6zuvxLv) in the father's collection emboldens him to strike up a conversation.  Improbably, the band is also one of the father's all-time favorites too!  Hearts are warmed and a father's mild approval is won.

##### Lending Libraries

_"It is all well and good to copy and share works that fall outside copyright. But what about stealing?!"_

Should it be the case that you hold yourself to a particularly severe intelectual property regime you might consider a lending library.  As it stand now, it is not easy (if it is even possible) to lend a digital book to someone.  However, configuring your library as a lending library would facilitate this.  Your lending library would behave like so:  You would make a selection of works available to browse via a web URL or wireless access point.  If a visitor to your library decides they would like to consume a work you own, they "check it out" for an agreed upon period of time. During that time the work is no longer accessible to you or anyone other than the person who checked it out.  When the time period passes, the work is instantly available to you again and vainishes from their collection.

### Fun Thoughts

* Closed devices such as Kindles can access People's Libraries via an e-book with a link in it. The built-in browser would load the People's Library e-reader
* Appliances that serve their own manuals & tutorial videos
* Browser-based artworks can be archived, collected and shared as easily as more traditional media types (epubs, mp3s, mp4...)
* Offering the library owner a choice to offer their files for download via copying, lending or _moving_ (i.e. someone else downloading it removes it from the original 
owner's collection)

## Benefits:

* HTML5 & javascript are open, widely suported and widely accessible. No apps to install. If you have a web browser you have a library.
* Decentralized - media files (as well as the app itself) are stored locally and can sync peer-to-peer or via internet
* 100% free & open
* Less Complex - built only on [CouchDB](http://couchdb.apache.org/) allows it to be run on low level devices
* Compiling all of the world's content in a giant decentralized database

![mid-century](/docs/assets/mid-century.jpg "Arts & Architecture")

[Mid-century Modern Design](http://midcenturymoderndesign.tumblr.com/) is an in-depth visual catalogue of the Mid-Century Modern graphic aesthetic. Right now it is hosted for free by Tumblr, a for-profit company owned by Yahoo.  But [as we know](http://contemporary-home-computing.org/1tb/about) free website services (owned by Yahoo) don't always stand the test of time.  So, what if we [made this tumblr into an epub](http://streambooks.thepeoplesebook.net) ([which someone did](http://beta.thepeoplesebook.net/b/streambooks/3eceb1ee7e1f8b99b9c4d13cacee895c) (300+MB)) and added it to our library. Then we could enjoy [Theo Inglis's](http://theoinglis.tumblr.com/) efforts off-line while sharing and conserving it outside the demands of a for-profit environment.  Sounds pretty ok.

You could use other programs to package up the Tumblr and then share it via bit torrent.  That would work too.  However, you wouldn't be able to enjoy the images in the meantime.  It wouldn't be _useful_ in the interim.  So it'd be less likely to last.

# Inspiration

* [Radical Tactics of the Offline Library (pdf)](http://issuu.com/instituteofnetworkcultures/docs/nn07_complete) [(video intro)](http://vimeo.com/95351775)
* [Public Library](http://www.memoryoftheworld.org/public-library/)
* [Pirate Box](http://piratebox.cc/)
