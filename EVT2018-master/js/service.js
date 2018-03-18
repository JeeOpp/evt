angular.module('game')
	.service('imageService', function(){
		var images = [];
		
		return {
			getAll: getAllFunc,
			initFirstImages: initFirstImages,
			addImage:addImage,
			deleteImage:deleteImage,
			moveLeft:moveLeft,
			moveRight:moveRight
		};
		
		function addImage(url,name,title){
			images.push(createImage(url,name,title));
			return images;
		}
		
		function getAllFunc(){
			return images;	
		}
		
		function initFirstImages(){
			images.push(createImage('https://cdnb.artstation.com/p/assets/images/images/002/401/145/large/dave-greco-meifinal.jpg?1461291763','first','firstTitle'));
			images.push(createImage('https://mfiles.alphacoders.com/653/653165.jpg','second','secondTitle'));
			images.push(createImage('http://cdn3.twinfinite.net/wp-content/uploads/2017/08/meianimatedshort.jpg','third','thirdTitle'));
			
			return images;
		}
		
		
		function createImage(url,name,title){
			return {
				url:url,
				name:name,
				title:title,
				isActive: false
			};
		}
		function deleteImage(index){
			if (confirm("Вы подтверждаете удаление?")) {
				images.splice(index,1);
			} 
		}

		function moveLeft(index){
			if(index != 0){
				var temp = images[index];
				images[index] = images[index-1];
				images[index-1] = temp;
			}
		}
		
		function moveRight(index){
			if(index != images.length-1){
				var temp = images[index+1];
				images[index+1] = images[index];
				images[index] = temp;
			}
		}
	});