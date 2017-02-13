var HOST = 'http://192.168.1.5/Laboratorio/public';

app.factory('ServicioService', function($http) {
  var myService = {
    get: function() {
      var promise = $http.get(HOST + '/servicio').then(function(response){
        return response.data;
      },
      function(response){ return response.data;});
      return promise;
    }
  };
  return myService;
});

app.factory('UserService', function($http) {
  var myService = {
    register: function(User) {
      var promise = $http.post(HOST + '/register', User).then(function(response){
        return response.data;
      },
      function(response){ return response.data;});
      return promise;
    },
    login: function(User) {
      var promise = $http.post(HOST + '/login', User).then(function (response) {
        return response.data;
      },
      function(response){ return response.data;});
      return promise;
    }
  };
  return myService;
});
app.factory('sessionService',['$http',function($http){
return {
   set:function(key,value){
     var encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), "startapp");
      return window.localStorage.setItem(key,encrypted);
   },
   get:function(key){
     if(window.localStorage.getItem(key)){
        var decrypted = CryptoJS.AES.decrypt(window.localStorage.getItem(key), "startapp");
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
     }else{
       return null;
     }
     
   },
   destroy:function(key){
     return window.localStorage.removeItem(key);
   },
 };
}]);
