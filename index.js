'use strict'
$('document').ready(function() {
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        displayUsers(response);
    })
    .fail(function(status, errorThrown){
        console.log("Error", errorThrown);
        console.log("Status", status);
    })
    .always(function(status){
        console.log("The request is complete.");
    });



    function displayUsers(data){
        for(let user of data){
            let userContainer = document.createElement('div');
            userContainer.id = user.id;
            userContainer.className = 'user-container';
            
            let userName = document.createElement('h4');
            userName.className = 'user-name';
            userName.innerHTML= user.name;

            let userEmail = document.createElement('p');
            userEmail.className= 'user-email';
            userEmail.innerHTML= user.email;

            let userCompany = document.createElement('p');
            userCompany.className= 'user-company';
            userCompany.innerHTML= user.company.name;

            let userToDo = document.createElement('button');
           userToDo.id = `user-todo-${user.id}`;
           userToDo.innerHTML = 'TO DO';

        //    let userAlbum = document.createElement('button');
        //    userAlbum.id = `user-albums-${user.id}`;
        //    userToDo.innerHTML = 'ALBUM';

            $('.users').append(userContainer);
            $(`#${user.id}`).append(userName);
            $(`#${user.id}`).append(userEmail);
            $(`#${user.id}`).append(userCompany);
            $(`#${user.id}`).append(userToDo);
            //$(`#${user.id}`).append(userAlbum);

            $(`#user-todo-${user.id}`).click((event) => {
               
                toDoClick(event, user.id);
    
            })
            // $(`#user-albums-${user.id}`).click((event) => {
            //     albumClick(event, user.id);
            // })
        
        }
    }
    
});
function toDoClick(){
    if(event.target.dataset.loaded)
    {
        $('.todo-container').toggle();
    }
    else {
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos",
            type: "GET",
            datatype: "json",
        })
        .done(function(response){
            displayToDos(response);
        })
        .fail(function(status, errorThrown){
            console.log("Error", errorThrown);
            console.log("Status", status);
        })
        .always(function(status){
            console.log("The request is complete.");
        });
    }
}
function displayToDos(data){
       
    for(let todo of data){
        let toDoId = document.createElement('div');
        toDoId.id = todo.id;
        toDoId.className = 'todo-container';

        let title = document.createElement('p');
        title.className= 'todo-title';
        title.innerHTML= toDoClick.title;

        let completed = document.createElement('p');
        completed.className= 'todo-completed';
        completed.innerHTML= todo.completed;

        $('.todo').append(toDoId);
        $(`#${todo.id}`).append(title);
        $(`#${todo.id}`).append(completed);
    }
}

function albumClick(){
    if(event.target.dataset.loaded)
    {
        $('.album-container').toggle();
    }
    else {
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/albums",
            type: "GET",
            datatype: "json",
        })
        .done(function(response){
            displayUsers(response);
        })
        .fail(function(status, errorThrown){
            console.log("Error", errorThrown);
            console.log("Status", status);
        })
        .always(function(status){
            console.log("The request is complete.");
        });
    }
}
