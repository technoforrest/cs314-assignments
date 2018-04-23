$('#buttonClick').click (() => {
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/users",
        type: "USER",
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
            console.log(user);
            let userContainer = document.createElement('div');
            userContainer.id = user.id;
            let userTitle = document.createElement('h3');
            userTitle.className = 'user-title';
            let userBody = document.createElement('p');
            userBody.className= 'user-body';
            userBody.innerHTML= user.body;

            $('.user').append(userContainer);
            $(`#${user.id}`).append(userTitle);
            $(`#${user.id}`).append(userBody);
        }
    }
});