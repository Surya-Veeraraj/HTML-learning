document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('myForm');
	const output = document.getElementById('output');
	
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		
		if (!validateEmail(email)) {
			alert("Please enter a valid email address.");
			return;
		}
		
		output.textContent = `Name: ${name}, Email: ${email}`;
	});
	
	function validateEmail(email) {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	}
});