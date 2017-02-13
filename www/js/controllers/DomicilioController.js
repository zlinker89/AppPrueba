app.controller('DomicilioCtrl', function (sessionService, $scope, $state) {
    
        $scope.User = sessionService.get('Usuario');
        $scope.servicio = sessionService.get('Service');
});