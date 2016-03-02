var myApp = angular
	.module('myApp', ['ngMaterial'])
	.config(function($mdThemingProvider){

		$mdThemingProvider.theme('default')
			.primaryPalette('red')
			.accentPalette('orange');
	});