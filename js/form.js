
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
	event.preventDefault();
	var form = document.querySelector("#form-adiciona")
	
	var tabelaPacientes = document.querySelector("#tabela-pacientes")
	
	var nome    = form.nome.value
	var peso    = form.peso.value
	var altura  = form.altura.value
	var gordura = form.gordura.value
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.setAttribute("class", "paciente")
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	pesoTd.setAttribute("class", "info-peso")
	var alturaTd = document.createElement("td");
	alturaTd.setAttribute("class", "info-altura")
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	imcTd.setAttribute("class", "info-imc")
	
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = "";
	
	pacienteTr.appendChild(nomeTd)
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)
	pacienteTr.appendChild(imcTd)
	
	tabelaPacientes.appendChild(pacienteTr);
	
	calcImc();
});