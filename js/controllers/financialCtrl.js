angular.module('oficina').controller('financialCtrl', function($scope, financialAPIService){	
	
	$scope.financialCollection = financialAPIService.listAll();
});