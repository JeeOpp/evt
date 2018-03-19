angular.module('game', ['tooltips','ngRoute'])
	.config([
        '$routeProvider',
        function ($routeProvider) {
            // Routes configuration
            $routeProvider
                .when('/', {
                    templateUrl: '/gallery.html',
                    controller: 'GalleryController'
                })
				.when('/add/:index?', {
                    templateUrl: '/add.html',
                    controller: 'AddImageController'
                })
                .otherwise({
                    redirectTo: '/add'
                });
        }
    ])

	.controller('GalleryController', ['$scope', '$location','imageService', function($scope, $location, imageService){
		$scope.images = imageService.init();
		$scope.spoiler = false;

		
		function createImage(url,name,title){
			imageService.createImage(url,name,title);
		}
		
		$scope.deleteImage = function(index){
			imageService.deleteImage(index);
		}
		
		$scope.moveLeft = function(index){
			imageService.moveLeft(index);
		}
		
		$scope.moveRight = function(index){
			imageService.moveRight(index);
		}
		$scope.updateImage = function(index){

		}
		$scope.sendImage = function(index){
			$location.path("/add/"+index);		
		}
	}])
	
	
	.controller('AddImageController', ['$scope', '$location','imageService','$routeParams', function($scope, $location, imageService, $routeParams){	
		$scope.images = [];
		$scope.img = {};
		$scope.newImage = {};
		
		init();
		
		$scope.addImage = function(){
			if ($routeParams.index){
				if (confirm("Вы подтверждаете изменение?")) {
					imageService.changeImage($scope.img, $scope.newImage);
					$location.path("/");	
				}	
			}else{
				imageService.addImage($scope.newImage.url, $scope.newImage.name, $scope.newImage.title);
				$location.path("/");	
			}			
		}
		
		function init(){
			$scope.images = imageService.init();
			if ($routeParams.index){
				$scope.img = imageService.getImage($routeParams.index);
				imageService.changeImage($scope.newImage, $scope.img);
			}
		}
	}]);

	
	
	
	
	
	
	
	
	