

function onPageLoad() {
	axios({
		method: 'get',
		url: 'https://dog.ceo/api/breeds/list/all',
		params: {
			_limit:5
		}
	})
		.then(res => showOutput(res))
		.catch(err => console.error(err));
}

function showOutput(res) {
	document.getElementById('target').innerHTML =  "<div>" + JSON.stringify(res.data) + "</div>"
}