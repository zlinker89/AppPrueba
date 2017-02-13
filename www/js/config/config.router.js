app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login',{
        url: '/login',
        templateUrl: 'templates/login.html'
    });
    $stateProvider.state('register',{
        url: '/register',
        templateUrl: 'templates/register.html'
    });
    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'templates/home.html'
    });
    $stateProvider.state('AddDomicilio',{
        url: '/domicilio',
        templateUrl: 'templates/domicilio.html'
    });
    $urlRouterProvider.otherwise('/login');
});