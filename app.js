var app = angular.module('adminHemlata',['ngRoute']);
var global = {
    url:'http://0.0.0.0:5000'
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
    .when('/patients', {
        templateUrl:'./html_components/patients.html',
        controller:'patientsController',
        title:'Patients'
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
app.controller('patientsController', function($scope,$location,$http) {

    $scope.patientsinit = function() {
        console.warn('patientsinit called')
        $http({
            url:global.url + '/getPatients',
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
            })
            .then(res=>{
                res = res.data;
                if(res['Success']=='Y'){
                    console.warn(res['value'][0]);
                    $scope.patients = res.value;
                }
                    
                else
                    console.error('some err while receiving patients info from server')
            })
    }

    
})