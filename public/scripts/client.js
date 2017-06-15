//declare our intention to use and Angular module app
var app = angular.module('myApp', []);

app.controller('GiphyActivity', GiphyActivity);


function GiphyActivity(GetService) {
  var vm = this;
  console.log('controller is loaded');
  vm.showRando = false;
  vm.searchResult = [];

  vm.displayRando = function() {
    vm.showRando = true;
      vm.searchResult = [];
    GetService.getRando().then(function(response) {
      console.log('back with: ', response);
      vm.searchResult.push(response);

    });
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
