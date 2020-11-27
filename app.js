function onFormSubmit(){
    var formData = readFromData();
    insertNewRecord(formData);
    resetForm();
}

function readFromData(){
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    formData["timeline"] = document.getElementById("timeline").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("todo_list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.timeline;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a>Del</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("timeline").value = "";

}

