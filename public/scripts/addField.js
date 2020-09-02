//Localizando o botão
document.querySelector("#add-time")
//adicionando um evento ao clicar no botão
.addEventListener('click', clonerField) //CloneField é o nome da minhna ação, não a ação 

//Estou pegando minhaa ação e dando vida para ela
function clonerField() {
  //  console.log("cheguei aqui")//Aqui é onde vai ser envido a ação para o navegador
    //duplicando os campos de horário
    //No JS a gente sempre vai usar NODE para se referir a elementos/tags HTML duplicando elas e passa o valor verdadeiro
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 

    //Limpando os campos clonados que estão com os valores preenchidos
    const fields = newFieldContainer.querySelectorAll('input')

    //para limpar cada campo
    fields.forEach(function(field){
        //pegar o field atual e limpar ele
        field.value = ""
    
    })


    //Aqui eu estou localizando onde que eu irei colocar as duplicações que estão sendo feita do horários
    document.querySelector('#schedule-items').appendChild(newFieldContainer) //que é na classe .schedule-item
    //.appendChild 
    
}
