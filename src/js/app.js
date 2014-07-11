var _pl = {
  db : '/peoples-lib/'
};

var PeoplesLibApp = angular.module('PeoplesLibApp', []);

PeoplesLibApp.controller('ListingCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.DB = window._pl.db;

  function processDoc(row){
    var doc = row.doc;
    if(doc._attachments){
      angular.forEach(doc._attachments, function(attachInfo, attachName){
        if(/^cover\./.test(attachName)){
          doc.coverImg = _pl.db + doc._id + '/' + attachName;
        } else {
          doc.media     = attachInfo;
          doc.media.url = _pl.db + doc._id + '/' + attachName;
        }
      });
    }
    return doc;
  }

  $http.get($scope.DB + '_design/peoples-lib/_view/media?reduce=false&limit=10&include_docs=true')
  .success(function(resp){
    $scope.medias = resp.rows.map(processDoc);
    console.log($scope.medias);
  });
}]);