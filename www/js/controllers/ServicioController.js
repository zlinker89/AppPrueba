app.controller('ServiciosCtrl', function (ServicioService, sessionService, $scope,$state) {
    _init();
    $scope.servicios = [];
    $scope.Carrito = [];

    function _init() {
        ServicioService.get().then(function(d){
            $scope.servicios = d;
        },function(e){ console.log(e)});
    }

    $scope.AddCart = function(obj){
        var i = 0;
        for (var key in $scope.Carrito) {
            if ($scope.Carrito[key].id == obj.id) {
                i = key;
            }
        }
        if ($scope.Carrito.length > 0) {
            if(!i){
                obj.prevBG = window.document.getElementById("id" + obj.id).style.background;
                $scope.Carrito.push(obj);
                window.document.getElementById("id" + obj.id).style.background = "#ff0";
                window.document.getElementById("boton" + obj.id).innerHTML = "<i class='icon ion-android-remove'></i>";
            }else{
                window.document.getElementById("id" + obj.id).style.background = $scope.Carrito[i].prevBG;
                window.document.getElementById("boton" + obj.id).innerHTML = "<i class='icon ion-android-add'></i>";
                $scope.Carrito.splice(i,1);
            }
        }else{
                obj.prevBG = window.document.getElementById("id" + obj.id).style.background;
                $scope.Carrito.push(obj);
                window.document.getElementById("id" + obj.id).style.background = "#ff0";
                window.document.getElementById("boton" + obj.id).innerHTML = "<i class='icon ion-android-remove'></i>";
        }
    };

    $scope.GetFormDomicilio = function() {
        sessionService.set('Service',$scope.Carrito);
        $state.go('AddDomicilio');
    };
});