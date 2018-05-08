'use strict'
$('document').ready(function () {
    $.ajax({
        url: "https://api.punkapi.com/v2/beers",
        type: "GET",
        datatype: "json",
    })
        .done(function (response) {
            displayBeers(response);
        })
        .fail(function (status, errorThrown) {
            console.log("Error", errorThrown);
            console.log("Status", status);
        })
        .always(function (status) {
            console.log("The request is complete.");
        });



function displayBeers(data) {
    for (let beer of data) {
        let beerContainer = document.createElement('div');
        beerContainer.id = beer.id;
        beerContainer.className = 'beer-container';

        let beerName = document.createElement('h4');
        beerName.className = 'name';
        beerName.innerHTML = beer.name;

        // let beerImage = document.createElement('img');
        // beerImage.className = 'image';
        // // beerImage.innerHTML = beer.image;
        // beerImage.innerHTML += "<img class='image' src='" + data.items[beer].volumeInfo.imageLinks + "'"

        // let beerTagline = document.createElement('p');
        // beerTagline.className= 'beer-tagline';
        // beerTagline.innerHTML= beer.tagline;

        // let beerBrewed = document.createElement('p');
        // beerBrewed.className= 'first_brewed';
        // beerBrewed.innerHTML= beer.first_brewed;

        let beerDescription = document.createElement('button');
        beerDescription.id = `beer-description-${beer.id}`;
        beerDescription.innerHTML= 'BEER DESCRIPTION';





        $('.beer').append(beerContainer);
        $(`#${beer.id}`).append(beerName);
        // $(`#${beer.id}`).append(beerImage);
        // $(`#${beer.id}`).append(beerTagline);
        // $(`#${beer.id}`).append(beerBrewed);
        $(`#${beer.id}`).append(beerDescription);
      

        $(`#beer-description-${beer.id}`).click((event) => {
           
            descriptionClick(event, beer.id);
            

        })


    }
}

// });
function descriptionClick( event, beerId){
    if(event.target.dataset.loaded)
    {
        $('.beer-container').toggle();
    }
    else {
        $.ajax({
            url:"https://api.punkapi.com/v2/beers?description",
            type: "GET",
            datatype: "json",
        })
        .done(function(response){
            displayDescription(response);
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
function displayDescription(data){
    for(let descriptionText of data)
    {   // be sure you append your outer container to the id, so you will need to add a # in your jQuery selector
        let outerContainer = document.createElement('div');
        outerContainer.id = descriptionText.id;
        outerContainer.className= 'outer-container'

        let descriptionContainer = document.createElement('div');
        descriptionContainer.id = 'description-container-' + descriptionText.id;
        descriptionContainer.className = 'description-container';

        let descriptionBlock = document.createElement('h5');
        descriptionBlock.className = 'description';
        descriptionBlock.innerHTML = descriptionText.description;
       

        $(`#${descriptionText.id}`).append(descriptionContainer);
 
        $(`#${descriptionText.id}`).append(descriptionBlock);
    }
}
});