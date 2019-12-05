

function onPageLoad() {
	axios.get('https://dog.ceo/api/breeds/list/all')
		.then(res => showOutput(res))
		.catch(err => console.error(err));
}

function showOutput(res) {
	document.getElementById('target').innerHTML =  "<div>" + JSON.stringify(res.data) + "</div>"
}