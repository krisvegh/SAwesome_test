(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('dataservice', dataService);
		
		function dataService() {
			var data = {
				characters: [
					'Barbosa',
					'Bob_Flying',
					'Buzz',
					'CaptainJack',
					'Dash',
					'DavyJones',
					'Edna',
					'Francesco',
					'Gibbs',
					'Helen',
					'Holly',
					'JackSkellington',
					'Jessie',
					'LoneRanger',
					'Mater',
					'McQueen',
					'Mike',
					'Perry',
					'Phineas',
					'Ralph',
					'Sully',
					'Syndrome',
					'Tonto',
					'Violet_2',
					'Woody',
				],
				backgrounds: [
					'blue',
					'green',
					'orange',
					'purple'
				]
			};
			
			return data;
		}
		
})();