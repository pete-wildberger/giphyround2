//declare our intention to use and Angular module app
var app = angular.module('myApp', []);

app.controller('GiphyActivity', GiphyActivity);


function GiphyActivity($http) {
  var vm = this;
  console.log('controller is loaded');

  vm.onReady = function() {

    //   console.log('startup');
    //   //get call to '/songs/'
    //   $http({
    //     method: 'GET',
    //     url: '/songs'
    //   }).then(function(response) {
    //     console.log('back with', response);
    //   });//end http
  }; // startup

  vm.getGifs = function() {
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
    searchURL += vm.search;
    searchURL += '&api_key=dc6zaTOxFJmzC';
    console.log('other GET');

    $http.get(searchURL).then(function(response) {
      console.log('back with: ', response);
      vm.searchResult = response.data.data;

    });
  };

} //end controller function
