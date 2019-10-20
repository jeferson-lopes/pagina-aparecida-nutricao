var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes11")
	
	xhr.addEventListener("load", function(){
		
		if (xhr.status == 200){
		resposta = xhr.responseText;
		var pacientes = JSON.parse(resposta)
		for(var i = 0; i < pacientes.length; i++){
			addPacientes(pacientes[i])
		}
		}else{
			var erroAjax = document.querySelector("#erro-ajax")
			erroAjax.classList.remove("some")
		}
	});
	
	xhr.send()
})

function addPacientes(paciente){
	
	var tabelaPacientes = document.querySelector("#tabela-pacientes")//Pegando a tabela
	var pacienteTr = document.createElement("tr");//Criando uma linha
	
	//Criando as colunas
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	
	//Inserino valores nas colunas
	nomeTd.textContent = paciente.nome
	pesoTd.textContent = paciente.peso
	alturaTd.textContent = paciente.altura
	gorduraTd.textContent = paciente.gordura
	imcTd.textContent = paciente.imc
	
	//Inserino linhas na coluna
	pacienteTr.appendChild(nomeTd)
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)
	pacienteTr.appendChild(imcTd)
	
	//Inserino colunas na tablea
	tabelaPacientes.appendChild(pacienteTr);
}