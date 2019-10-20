function calcImc(){
	peso = document.querySelectorAll(".info-peso")
	altura = document.querySelectorAll(".info-altura")
	imc = document.querySelectorAll(".info-imc")
	for (var i = 0; i < peso.length; i++){
		imc[i].textContent = parseFloat(peso[i].textContent / (altura[i].textContent * altura[i].textContent)).toFixed(2)
	}
}
calcImc()