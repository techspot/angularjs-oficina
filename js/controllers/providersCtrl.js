angular.module('oficina').controller('providersCtrl', function($scope, providersAPIService){	
	
	$scope.providersCollection = providersAPIService.listAll();
});