/**
 * Created by ZZF on 2017/4/18.
 */
var app = angular.module('app',['ngRoute']);
app.run(function($rootScope){
    $rootScope.num = 0;
    $rootScope.move = function(ind){
        $rootScope.num = ind;
    }
});


//app.run(function($rootScope,$http){
//    $http.get("data/music_wrap.json")
//        .success(function(data){
//            console.log(data.plist.list.info);
//            //$rootScope.data = data.data;
//        });
//
//});

//app.run(function($rootScope,$http){
//    $http.get("data/music_wrap2.json")
//        .success(function(data){
//            $rootScope.data = data.data;
//        });
//
//});
app.config(function($routeProvider){
    $routeProvider
        .when('/song',{
            templateUrl:"html/song.html",
            controller:function($scope,$http){
                $http.get("data/music_list.json")
                    .success(function(data){
                        $scope.data = data.data;
                    });
            }
        })
        .when('/rank',{
                templateUrl:"html/rank.html"
        })
        .when('/menu',{
            templateUrl:"html/menu.html"
        })
        .when('/singer',{
            templateUrl:"html/singer.html"
        })
        .otherwise("/song");
});


setTimeout(function(){
    var swiper = new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        speed:1000
    });
},100);



