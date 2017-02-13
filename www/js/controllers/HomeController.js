app.controller('HomeCtrl', function (UserService, sessionService, $scope, $state) {
    _init();
    function _init() {
        if(sessionService.get('Usuario')){
            if(!sessionService.get('Usuario').UserId){
                sessionService.destroy('Usuario');
                sessionService.destroy('UsuarioId');
                //location.href = "/#/login";
                $state.go('login');
            }
        }
    }

    $scope.logout = function(){
        sessionService.destroy('Usuario');
        sessionService.destroy('UsuarioId');
        //location.href = "/#/login";
        $state.go('login');
    };

    $scope.GoHome = function(){
        $state.go('home');
    };
});