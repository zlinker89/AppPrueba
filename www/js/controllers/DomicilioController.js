app.controller('DomicilioCtrl', function (sessionService, $scope, $state, DomicilioService, $ionicLoading, $ionicPopup) {
    $scope.User = sessionService.get('Usuario');
    $scope.servicios = sessionService.get('Service');
    $scope.domicilios = [];
    
    Date.prototype.toYMD = Date_toYMD;
    $scope.Domicilio = {
        FormaPago: 'Efectivo',
        TipoResultados: 'Fisico',
        Fecha: new Date(),
        IdServicio: null,
        IdUsuario:null
    };
    
    $scope.Registrar = function(){
        if ($scope.servicios.length > 0) {
            $ionicLoading.show({
                template: 'Loading...',
            });
            $scope.Domicilio.Fecha = $scope.Domicilio.Fecha.toYMD();
            console.log($scope.Domicilio);
            $scope.Domicilio.IdUsuario = $scope.User.UserId;
            $scope.Domicilio.Serviciolst = $scope.servicios;
            DomicilioService.post($scope.Domicilio).then(function(d){
                console.log(d);
                $ionicLoading.hide();
                $ionicPopup.alert({
                        title: 'Datos guardados',
                        content: d
                    });
                    $scope.servicios = [];
                    sessionService.remove('Service');
                    $state.go('home');
            },function(e){console.log(e)});
        }
    };

    $scope.GetDomicilios = function(d){
        DomicilioService.getByUser($scope.User.UserId).then(function(d){
            $scope.domicilios = d;
        });
    };
    

    $scope.GetDomicilios();
    
    function Date_toYMD() {
        var year, month, day;
        year = String(this.getFullYear());
        month = String(this.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        day = String(this.getDate());
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    }
});