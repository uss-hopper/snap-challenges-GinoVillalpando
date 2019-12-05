

function onPageLoad() {
	axios.get('https://dog.ceo/api/breeds/list/all')
		.then(({data}) => {
			let dogs = data.message;
			let list = '<ul> ';
			for (let breed in dogs) {
				list = list + '<li>' + breed + '</li>';
			}
			let html = document.getElementById("target");
			html.innerHTML = list;
		})
		.catch(err => console.error(err));
}

