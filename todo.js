var TodoArr = [];

function addtodo() {
    if (enterTodo.value != "" && timeTodo.value != "" && timeClose.value != "" ) {
        var itemObj = {
            myTodo: enterTodo.value,
            myTime: timeTodo.value,
            myClose: timeClose.value
        }
        TodoArr.push(itemObj)
        console.log(TodoArr);
        enterTodo.value = ""
        timeTodo.value = ""
        timeTodo.value = ""
        displayItem();
        console.log(itemObj);
    }
    else {
        display.innerHTML = `<h2 style= "margin-left: 50px; color: red"> Please Fill in all spaces</h2>`;
        console.log("Space cannot be Empty");
    }
}

function displayItem() {
    document.getElementById("itemTable").style.display = "table"
    itemTable.innerHTML = ""
    itemTable.innerHTML = `
        <tr>
            <th>S/N</th>
            <th>To-do</th>
            <th>Time From</th> 
            <th>Time To</th> 
            <th>Actions</th>
        </tr>
    `
    for (i = 0; i < TodoArr.length; i++) {
        itemTable.innerHTML +=  `
        <tr>
            <td>${i+1}</td>
            <td>${TodoArr[i].myTodo}</td>
            <td>${TodoArr[i].myTime}</td>
            <td>${TodoArr[i].myClose}</td>
            <td>
                <button class= "btn btn-warning" onclick= "editOne()">Edit</button>
                <button class= "btn btn-danger" onclick= "deleteOne(${i})">Delete</button>
            </td>
        </tr>
    `
    }
}

function deleteOne(index) {
    console.log(`${index}`);
    budgetArr.splice(index,1)
    displayItem()
}