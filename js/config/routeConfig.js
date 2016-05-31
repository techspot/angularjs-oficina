angular.module('oficina').config(function ($routeProvider){
	
	$routeProvider.when("/customers", {
		templateUrl: "view/customers.html",
		controller: "customersCtrl"
	});
	$routeProvider.when("/os", {
		templateUrl: "view/os.html",
		controller: "osCtrl"
	});
	$routeProvider.when("/providers", {
		templateUrl: "view/providers.html",
		controller: "providersCtrl"
	});
	$routeProvider.when("/financial/topay", {
		templateUrl: "view/financial_toPay.html",
		controller: "financialCtrl"
	});	
	$routeProvider.when("/financial/toreceive", {
		templateUrl: "view/financial_toReceive.html",
		controller: "financialCtrl"
	});	
	$routeProvider.when("/customer/new", {
		templateUrl: "view/customerNew.html",
		controller: "osCtrl"
	});
	
	$routeProvider.when("/os/new", {
		templateUrl: "view/osNew.html",
		controller: "osCtrl"
	});
});