let peopleNames = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];

let people = document.querySelector('#people');

people.innerHTML = '<ul class="p-0 my-5 text-center">' +
	peopleNames.map(function(peopleNames) {
		return '<li class="btn btn-dark btn-lg col-6 m-1 p-5">' + peopleNames + '</li>';
	}).join('') + '</ul>';