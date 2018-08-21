


const uri = 'http://numbersapi.com/';

numberFact.addEventListener('input', fetchNumber);
mathFact.addEventListener('input', fetchMath);
dateFact.addEventListener('input', fetchDate);


function fetchNumber(){

	let numberFactInput = numberFact.value;

	let req = new Request(uri + numberFactInput, {
			method: 'GET'		
	});

	fetch(req)
		.then((response) => {
			if(response.ok){
				return response.text();
			}else{
				throw new Error('There was a problem');
			}
		})
		.then((data) => {
			if(numberFactInput != ''){
				outputFact.innerHTML = data;
			}else{
				throw new Error('There was a problem');
			}
		})
		.catch((err) => {
			console.log('Error: ', err.message);
		})
}


function fetchMath(){

	let mathFactInput = mathFact.value;

	let req = new Request(uri + mathFactInput + '/math', {
			method: 'GET'		
	});

	fetch(req)
		.then((response) => {
			if(response.ok){
				return response.text();
			}else{
				throw new Error('There was a problem');
			}
		})
		.then((data) => {
			if(mathFactInput != ''){
				outputMath.innerHTML = data;
			}else{
				throw new Error('There was a problem');
			}
		})
		.catch((err) => {
			console.log('Error: ', err.message);
		})
}


function fetchDate() {

	let fetchDateInput = dateFact.value;
	
	let req = new Request(uri + fetchDateInput + '/date' , {
			method: 'GET'		
	});

	fetch(req)
		.then((response) => {
			if(response.ok){
				return response.text();
			}else{
				throw new Error('There was a problem');
			}
		})
		.then((data) => {
			if(fetchDateInput != ''){
				outputDate.innerHTML = data;
			}else{
				throw new Error('There was a problem');
			}
		})
		.catch((err) => {
			console.log('Error: ', err.message);
		})

}



































