app.service('GetService', function($http) {
  this.getRando = function() {
    //make $http call to giphy
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(function(response) {
      return response.data.data;
    }); //end get
  }; //end getRando

  this.searchGif = function(url) {
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
    searchURL += url;
    searchURL += '&api_key=dc6zaTOxFJmzC';
    //make $http call to giphy with query
    return $http.get(searchURL).then(function(response) {
      console.log('back with: ', response);
      return response.data.data;
    }); //end get
  }; // end searchGif
}); // end service
