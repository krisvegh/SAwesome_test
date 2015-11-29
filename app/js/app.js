(function(){
	'use strict';
	
	angular
		.module('app', [])
		.controller('MainController', MainController);
		
	function MainController(dataservice) {
		var vm = this;
		vm.characters = dataservice.characters;
		vm.backgrounds = dataservice.backgrounds;
		vm.activeScene = 1;
		vm.sceneTexts = {
			1 : '',
			2 : '',
			3 : '',
			4 : ''
		};

		/**
		 * Slider 
		 */
		
		var bgThumbsPosition = 0;
		var bgThumbsLimit = -73;
		var charThumbsPosition = 0;
		var charThumbsLimit = -1900;
		
		
		vm.bgSlide = function(direction) {
			switch (direction) {
				case 'down':
					if (bgThumbsPosition > bgThumbsLimit) { bgThumbsPosition -= 73; }
					break;
				case 'up':
					if (bgThumbsPosition < 0) { bgThumbsPosition += 73; }
					break;
			}
			vm.bgThumbStyle = {
				'transform': 'translate3d(0px, ' + bgThumbsPosition + 'px, 0px)',
				'-webkit-transform': 'translate3d(0px, ' + bgThumbsPosition + 'px, 0px)'
				};
		};
		
		vm.charSlide  = function(direction) {
			switch (direction) {
				case 'right':
					if (charThumbsPosition > charThumbsLimit) { charThumbsPosition -= 200; }
					break;
				case 'left':
					if (charThumbsPosition < 0) { charThumbsPosition += 200; }
					break;
			}
			vm.charThumbStyle = {
				'transform': 'translate3d(' + charThumbsPosition + 'px, 0px, 0px)',
				'-webkit-transform': 'translate3d(' + charThumbsPosition + 'px, 0px, 0px)'
				};
		};
		
		/**
		 * Canvas
		 */
				
		var canvas1 = new fabric.Canvas('canvas1');
		var canvas2 = new fabric.Canvas('canvas2');
		var canvas3 = new fabric.Canvas('canvas3');
		var canvas4 = new fabric.Canvas('canvas4');

		vm.drawBackground = function(element) {
			var activeCanvas = eval('canvas' + vm.activeScene);
			activeCanvas.setBackgroundImage('/images/' + element + '.jpg', activeCanvas.renderAll.bind(activeCanvas), {
				originX: 'left',
				originY: 'top',
				width: 665,
				height: 310
			});
		};
		
		vm.drawCharacter = function(character) {
			var activeCanvas = eval('canvas' + vm.activeScene);
			fabric.Image.fromURL('/images/chars/' + character + '.png', function(img) {
				var oImg = img.set({ 
					left: 50, 
					top: 100, 
					angle: 5 
					}).scale(0.4);
				activeCanvas.add(oImg).renderAll();
			});
		};
	}
})();