//this is my local js file
'use strict'

let numSelected = $('select').val()

function displayResults(responseJson) {
  console.log(responseJson)
  //replace the existing image with the new one
  $('.results').append(`<img src="${responseJson.message}" class="img-results">` )
}

function getDogImage(i) {
  console.log('`getDogImage` ran')
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

function dogsLoop (numSelected) {
  console.log('number of dogs selected is {numSelected[i]}')
  for (let i = 0; i < numSelected; i++) {
        getDogImage(i)
  }
}

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
