let inputField = document.getElementById("inputField");

function Add() {

    if (inputField.value == "") {

        alert("Please Enter A Task")

    }

    else {

        const newAdd = document.createElement('li')

        const taskList = document.getElementById('task-List')

        taskList.appendChild(newAdd)

        newAdd.textContent = document.getElementById('inputField').value

        document.getElementById('inputField').value = ""

        deleteItem(newAdd)
    }

}

function deleteItem(newAdd) {

    const deletebtn = document.createElement('button')

    deletebtn.textContent = "Delete"

    newAdd.appendChild(deletebtn)

    deletebtn.onclick = function () {

        newAdd.remove()

    }
}