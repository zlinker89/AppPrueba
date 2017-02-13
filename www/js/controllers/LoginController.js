app.controller('LoginCtrl', function (UserService, sessionService, $scope, $ionicPopup,$state) {
    _init();
    function _init() {
        if (sessionService.get('Usuario')) {
            if (sessionService.get('Usuario').UserId) {
                //location.href = "/#/home";
                $state.go('home');
            }
        }
    }
    $scope.User = {
        email: null,
        password: null,
        Recuerdame: false
    };

    $scope.GoRegister = function(){
        $state.go('register');
    };
    $scope.Ingresar = function () {
        UserService.login($scope.User).then(function (d) {
            if (d.email == "auth.failed") {
                $ionicPopup.alert({
                    title: 'Error',
                    content: 'El usuario y/o la contraseña no son validos!!'
                });
            } else {
                if ($scope.User.Recuerdame) {
                    $scope.User.UserId = d.id;
                    $scope.User.password = null; // removemos el password
                    sessionService.set('Usuario', $scope.User);
                }
                sessionService.set('UsuarioId', d.id);
                $scope.User = {
                    email: null,
                    password: null
                };
                //location.href = "/#/home";
                $state.go("home");
            }
        }, function (e) {
            $ionicPopup.alert({
                title: 'Error!! :(',
                content: e
            });
        });
    }
});