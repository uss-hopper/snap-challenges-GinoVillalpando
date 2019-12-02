let peopleNames = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];

let people = document.querySelector('#people');

people.innerHTML = '<ul>' +
	peopleNames.map(function(peopleNames) {
		return '<li>' + peopleNames + '</li>';
	}).join('') + '</ul>';