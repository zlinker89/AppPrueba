app.controller('ServiciosCtrl', function (ServicioService, sessionService, $scope,$state) {
    _init();
    $scope.servicios = [];
    function _init() {
        ServicioService.get().then(function(d){
            $scope.servicios = d;
        },function(e){ console.log(e)});
    }

    $scope.AddView = function(obj) {
        sessionService.set('Service',obj);
        $state.go('AddDomicilio');
    };
});