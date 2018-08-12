var app = angular.module('adminHemlata',['ngRoute']);
var global = {
    url:'0.0.0.0'
};

app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'./html_components/login.html',
        controller:'loginController',
        title:'Login Admin',
    })
    .when('/yjg',{
        controller:'defaultController',
    })
    .when('/dashboard', {
        templateUrl:'./html_components/home.html',
        controller:'homeController',
        title:'Home | dashboard'
    })
})
app.controller('defaultController', function($location){
    $location.path('/login');
})
app.controller('loginController', function($scope, $rootScope, $route, $routeParams, $location){
    $scope.name='this';
    
    $scope.checkLogin = function(){
        console.warn($scope.username+' is the $scope')
        console.warn('pass is '+$scope.password)
        if($scope.password==='123')
         {
            $scope.wrongPass='';
             $location.path('/dashboard');
        }
        else
            $scope.wrongPass='Wrong password entered';
    }
})
app.controller('homeController', function($scope, $location){
    $scope.check = 'harkishen';
})