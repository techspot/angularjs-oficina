angular.module('oficina').service('osAPIService', function($http){	
	this.listAll = function(){
		
		$osCollection = [
			{ id: 1, customer_name: "Rodrigo Alves", date: "2015-01-10", total: "250.00", status: "paid"},
			{ id: 1, customer_name: "Wesley Silva", date: "2015-01-10", total: "250.00", status: "paid"},
			{ id: 1, customer_name: "Tiao Almeida", date: "2015-01-10", total: "250.00", status: "paid"},
			{ id: 1, customer_name: "Tais Souza", date: "2015-01-10", total: "250.00"}
		];
		
		return $osCollection;
	}
	
	/*
	this.get(){}
	this.save(){}
	this.update(){}
	this.delete(){}
	*/
});