myApp.controller('myController', function($scope, $http, myFactory){
	
	myFactory.getItems().then(function(items){
		$scope.items = items.data;
		console.log($scope.items);
	});
});