myApp.factory('myFactory', function($http){

	function getItems(){
		return $http.get('data/items.json');
	}

	return{
		getItems: getItems
	}
});