//declare our intention to use and Angular module app
var app = angular.module('myApp', []);

app.controller('GiphyActivity', GiphyActivity);


function GiphyActivity(GetService) {
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
  vm.displayRando = function() {
    vm.showRando = false;
    GetService.getRando().then(function(response) {
      console.log('back with: ', response);
      vm.searchResult = response;
      toggleShow();
    });
  };


  var toggleShow = function() {
    vm.showRando = !vm.showRando;
    console.log(vm.showRando);
  };

  vm.getGifs = function() {
    vm.showRando = false;
    var search = vm.search;
    console.log('other GET');
    GetService.searchGif(search).then(function(res) {
      console.log(res);
      vm.searchResult = res;

    });
    vm.removeRow = function(index) {
      vm.searchResult.splice(index, 1);
    };

  };
} //end controller function
