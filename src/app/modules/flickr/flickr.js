(function() {
  'use strict';

  angular.module('app.flickr')
    .controller('flickrController', flickrController);

  flickrController.$inject = ['$scope', '$http'];
  function flickrController($scope, $http) {
    $scope.items = []

    window.jsonFlickrFeed = function(data) {
        $scope.title = data.title;
        $scope.link = data.link;
        $scope.items = data.items
    };

    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
    }

})();
