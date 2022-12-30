var pets = [];

function addPet() {
    event.preventDefault();
    let pet = {
        "petName": document.querySelector("#fname").value,
        "petBreed": document.querySelector("#fbreed").value,
        "petOwner": document.querySelector("#fowner").value,
        "phone": document.querySelector("#fphone").value
    }
    document.querySelector("#fname").value = ""; 
    document.querySelector("#fbreed").value = "";
    document.querySelector("#fowner").value = "";
    document.querySelector("#fphone").value = "";

    pets.push(pet);
    
    renderTable()
}

function renderTable() {
    let table = document.querySelector("#dataTable");
    table.innerHTML = ` <tr>
    <th>ID</th>
    <th>Nome do Pet</th>
    <th>Raça</th>
    <th>Dono do Pet</th>
    <th>Telefone</th>
    <th>Remover</th>
    </tr> `

    for(let i = 0; i < pets.length; i++){
        table.innerHTML += `<td>${i}</td>
        <td>${pets[i].petName}</td>
        <td>${pets[i].petBreed}</td>
        <td>${pets[i].petOwner}</td>
        <td>${pets[i].phone}</td>
        <td><img src="botaoRemover.png" width="25px" height="25px" onclick="removePet(${i})"> </td>`
    }
}

function removePet(index){
    pets.splice(index,1);
    renderTable();
}