app.controller('RegisterCtrl', function (UserService, $scope, $http, $ionicLoading, $ionicPopup,$state) {
    $scope.User = {
        name: null,
        email: null,
        password: null,
        rptpassword: null
    };
    
    $scope.rptpassword = '';
    $scope.GoLogin = function() {
        $state.go("login");
    };

    $scope.Registrar = function () {

        if ($scope.User.rptpassword == $scope.User.password) {

            $ionicLoading.show({
                template: 'Loading...',
            });
            UserService.register($scope.User).then(function (d) {
                console.log(d);
                $ionicLoading.hide();
                if (d.email) {
                    $ionicPopup.alert({
                        title: 'Error',
                        content: 'Ya existe este usuario!!'
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Registro exitoso',
                        content: "El Usuario ha sido registrado exitosamente."
                    });
                    $scope.User = {
                        name: null,
                        email: null,
                        password: null,
                        rptpassword: null
                    };
                }
            }, function (e) {
                $ionicPopup.alert({
                    title: 'Error!! :(',
                    content: e
                });
            });
        } else {
            $ionicPopup.alert({
                title: 'Error',
                content: 'Las contraseñas no son iguales'
            });
        }
    };

    function HandlerError(e) {
        console.log(e);
    }
});