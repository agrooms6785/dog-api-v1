//this is my local js file
'use strict'

let numSelected = $('select').val()

//this function handles the display of dog images in the DOM 
function displayResults(responseJson) {
  console.log(responseJson)
  //replace the existing image with the new one
  $('.results').append(`<img src="${responseJson.message}" class="img-results">` )
}

//this function gets the random dog image, then displays in the DOM
//it also handles the catch error
function getDogImage(i) {
  console.log('`getDogImage` ran')
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

//this function loops through the number of dog images selected in the form
//so the correct number of images are fetched and displayed
function dogsLoop (numSelected) {
  console.log('number of dogs selected is {numSelected[i]}')
  for (let i = 0; i < numSelected; i++) {
        getDogImage(i)
  }
}

//this function handles the submit
function submitForm() {
  $('.js-submit-button').on('click', function(event)  {
    console.log('`submitForm` ran')
    event.preventDefault()
    $('.results').empty()
    let numSelected = $('select').val()
    if (numSelected > 1) {
      $('.results').append(`<h2>Look at these ${numSelected} cute pictures of dogs!</h2><br>`)
    }
    else {
        $('.results').append(`<h2>Look at this cute dog picture!</h2><br>`)
    }
    dogsLoop(numSelected)
  })
}


// Shorthand for $( document ).ready()
$(function() {
    console.log( "your app has loaded!" )
    submitForm()
})
