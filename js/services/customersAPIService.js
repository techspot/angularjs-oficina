angular.module('oficina').service('customersAPIService', function($http){	
	this.listAll = function(){
		
		console.log('Access Customers API Service');
	
		$customersCollection = [
			{ 
				id: 1, 
				customer_name: "Rodrigo Alves", 
				birthday: "25/05", 
				address_street: "Rua Cabiuna", 
				address_neighborhood: "Vl. Sta. Catarina", 
				address_city: "São Paulo", 
				address_state: "SP", 
				cpf_cnpj: "001.588.541-01", 
				rg: "2.113.032", 
				email: "bruno@techspot.com.br", 
				phone1: "(11) 2769 7509", 
				cellphone: "(11) 957752619",
				created_at: "2015-01-10", 
				updated_at: "2016-05-01", 
				status: "active"
			},
			{ 
				id: 1, 
				customer_name: "Wesley Silva",  
				birthday: "23/03", 
				address_street: "Rua Monte Alegre", 
				address_neighborhood: "Brookling", 
				address_city: "São Paulo", 
				address_state: "SP", 
				cpf_cnpj: "223.588.541-01", 
				rg: "2.454.032", 
				email: "wesley@techspot.com.br", 
				phone1: "(11) 2769 7509", 
				cellphone: "(11) 957752619",
				created_at: "2015-01-10", 
				updated_at: "2016-05-01", 
				status: "active"
			},
			{ 
				id: 1, 
				customer_name: "Tiao Almeida",
				birthday: "25/01", 
				address_street: "Rua Saraifa, 455", 
				address_neighborhood: "Vl. Nova Conceição", 
				address_city: "São Paulo", 
				address_state: "SP", 
				cpf_cnpj: "554.787.541-22", 
				rg: "2.113.032", 
				email: "tiao@techspot.com.br", 
				phone1: "(11) 2769 7509", 
				cellphone: "(11) 957752619",
				created_at: "2015-01-10", 
				updated_at: "2016-05-01", 
				status: "active"
			},
			{ 
				id: 1, 
				customer_name: "Tais Souza",
				birthday: "10/05", 
				address_street: "Rua Cordoba, 1666", 
				address_neighborhood: "Vl. Sta. Catarina", 
				address_city: "São Paulo", 
				address_state: "SP", 
				cpf_cnpj: "001.588.477-04", 
				rg: "2.113.032", 
				email: "tais@techspot.com.br", 
				phone1: "(11) 2769 7509", 
				cellphone: "(11) 957752619",
				created_at: "2015-01-10", 
				updated_at: "2016-05-01", 
				status: "active"
			}
		];
		
		return $customersCollection;
	}
	
	/*
	
	this.get(){}
	this.save(){}
	this.update(){}
	this.delete(){}
	*/
});