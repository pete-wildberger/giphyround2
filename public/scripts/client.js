//declare our intention to use and Angular module app
var app = angular.module('myApp', []);

app.controller('GiphyActivity', GiphyActivity);


function GiphyActivity($http) {
  var vm = this;
  console.log('controller is loaded');
  vm.showRando = false;
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
  vm.getRando = function() {
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(function(response) {
      console.log('back with: ', response);
      vm.searchResult = response.data.data;
      toggleShow();
    }); //end get
  }; //end getRando

  var toggleShow = function() {
    vm.showRando = !vm.showRando;
    console.log(vm.showRando);
  };

  vm.getGifs = function() {
    vm.showRando = false;
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
    searchURL += vm.search;
    searchURL += '&api_key=dc6zaTOxFJmzC';
    console.log('other GET');

    $http.get(searchURL).then(function(response) {
      console.log('back with: ', response);

      vm.searchResult = response.data.data;

      // toggleShow();
      console.log(vm.showRando);

    });
  };
  vm.removeRow = function(index) {
    vm.searchResult.splice(index, 1);
  };

} //end controller function
