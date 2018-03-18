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
				.when('/add', {
                    templateUrl: '/add.html',
                    controller: 'GalleryController'
                })
                .otherwise({
                    redirectTo: '/add'
                });
        }
    ])

	.controller('GalleryController', ['$scope','imageService', function($scope, imageService){
		$scope.images = imageService.initFirstImages();
		$scope.spoiler = false;

		
		function createImage(url,name,title){
			imageService.createImage(url,name,title);
		}
		
		
		
		$scope.addImage = function(){
			imageService.addImage($scope.newImageUrl, $scope.newImageName, $scope.newImageTitle);
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
	}]);;

	
	
	
	
	
	
	
	
	