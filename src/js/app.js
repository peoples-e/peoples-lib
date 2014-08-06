var _pl = {
  db : 'peoples-lib',
  design : 'peoples-lib'
};

var PeoplesLibApp = angular.module('PeoplesLibApp', ['CornerCouch']);

PeoplesLibApp.controller('ListingCtrl', ['$scope', '$http', 'cornercouch', function ($scope, $http, cornercouch) {
  var config = window._pl;
  $scope.db      = cornercouch().getDB(config.db);
  $scope.localDb = new PouchDB(config.db);

  function showLocalMedia(){
    $scope.localDb.query(config.design + '/media', { reduce : false, limit : 10, include_docs : true }, function(err, resp){
      $scope.$apply(function(){
        $scope.localMedias = resp.rows.map(processDoc);
      })
    });
  }

  $scope.localDb.get('_design/peoples-lib', function(err, res){
    if(res){
      showLocalMedia();
    } else {
      $scope.localDb.replicate.from(window.location.origin + '/' + config.db, { doc_ids : '_design/' + config.design } ,showLocalMedia);

    }
  });
 
  $scope.sync = function(doc){
      doc.__syncing = true;
      $scope.localDb.replicate.from(window.location.origin + '/' + config.db, { doc_ids : [doc._id] } ,function(err, res){
        showLocalMedia();
        doc.__syncing = false;
      });
  }

  $scope.remove = function(doc){
    // pouchDB does not currently support _purge (http://wiki.apache.org/couchdb/Purge_Documents)
    // so we have to create a new db wo/ the doc 
    // cuz otherwise, once we deleted a doc, we'd never be able to get it again
    $scope.localDb.allDocs(function(err, res){
      var remainingDocs = res.rows.map(function(d){ return d.id; }).filter(function(d){ return d !== doc._id });
      var tmpDB         = new PouchDB('tmp');
      tmpDB.replicate.from($scope.localDb, { doc_ids : remainingDocs }, function(err, res){
        $scope.localDb.destroy(function(){
          $scope.localDb = new PouchDB(config.db);
          $scope.localDb.replicate.from(tmpDB, function(){
            tmpDB.destroy();
            showLocalMedia();
          });
        });
      });
    }); 
  }

  $scope.upload = function(elem){
    var files = [];
    for (var i = 0, f; f = elem.files[i]; i++) {
      files.push(f);
    }
    files.forEach(function(f){
      var doc = $scope.db.newDoc({
        name : f.name,
        content_type : f.type
      })
      doc.save()
      .success(function(){
        doc.attach(f, f.name); 
      });
    })
  }

  // get listing
  $scope.db.query(config.design, 'media', { reduce : false, limit : 10, include_docs : true })
  .success(function(resp){
    $scope.medias = resp.rows.map(processDoc);
  });

  function processDoc(row){
    var doc = row.doc;
    if(doc._attachments){
      angular.forEach(doc._attachments, function(attachInfo, attachName){
        if(/^cover\./.test(attachName)){
          doc.coverImg = '/' + config.db + '/' + doc._id + '/' + attachName;
        } else {
          doc.media     = attachInfo;
          doc.media.url = '/' + config.db + '/' + doc._id + '/' + attachName;
        }
      });
    }
    return doc; 
  }

  // $http.get($scope.DB + '_design/peoples-lib/_view/media?reduce=false&limit=10&include_docs=true')
}]);