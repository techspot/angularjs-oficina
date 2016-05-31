angular.module('oficina').controller('customersCtrl', function($scope, customersAPIService){	
	
	$scope.customersCollection = customersAPIService.listAll();
});