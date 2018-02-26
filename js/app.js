angular.module('LocatorApp', ['ui.router','LocatorApp.controllers','LocatorApp.services','LocatorApp.directive'])
.config(function($stateProvider, $urlRouterProvider){
	   $urlRouterProvider.otherwise('login');	
	
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl : 'pages/login.html',
			controller : 'loginController'
		})
		.state('homepage',{
			url: '/home',
			templateUrl : 'pages/home.html'/*,
			controller : 'homeController'*/
		})
		.state('enquiry',{
			url: '/enquiry',
			templateUrl : 'pages/enquiry.html',
			params: {
				inst_id: null
			},
			controller : 'enquiryController'
		})
		.state('needuserdetails',{
			url: '/needuserdetails',
			params: {
				obj: null
			},
			templateUrl : 'pages/userDetails.html',
			controller : 'detailController'
		})
		.state('searchResult',{
			url: '/searchResult',
			templateUrl : 'pages/search.html',
			controller : 'searchController'
		})
		.state('selectLocations',{
			url: '/selectLocations',
			templateUrl : 'pages/selectLocations.html',
			controller : 'selectLocationsController'
		})
});
