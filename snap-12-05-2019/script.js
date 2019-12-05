

function onPageLoad() {
	axios.get('https://dog.ceo/api/breeds/list/all')
		.then(({data}) => {
			let dogs = data.message;
			let list = ' ';
			for (let breed in dogs) {
				list = list + '<ul><li>' + breed + '</li></ul><hr/>';
			}
			let html = document.getElementById("target");
			html.innerHTML = list;
		})
		.catch(err => console.error(err));
}

