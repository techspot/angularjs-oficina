angular.module('oficina').service('financialAPIService', function($http){	
	this.listAll = function(){
		
		$financialCollection = [
			{ id: 1, title: "Conta de Água", maturity_date: "25/06/2016", total: "536.33", comments: "", type:"toPay", status: "paid"},
			{ id: 2, title: "Conta de Luz", maturity_date: "25/06/2016", total: "222.33", comments: "", type:"toPay", status: "paid"},
			{ id: 3, title: "Conta de Gás", maturity_date: "25/06/2016", total: "111.33", comments: "", type:"toPay", status: "paid"},
			{ id: 4, title: "Conta de Fornecedor", maturity_date: "25/06/2016", total: "444.33", comments: "", type:"toPay", status: "paid"},
			{ id: 5, title: "Conta de Internet", maturity_date: "25/06/2016", total: "666.33", comments: "", type:"toPay", status: "paid"}
		];
		
		return $financialCollection;
	}
	
});