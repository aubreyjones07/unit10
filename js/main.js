/*jslint node:true*/
"use strict";

/*global alert*/




function duplicateMenu() {
// get all of the anchor elements from the top menu
let topList = document.querySelectorAll('ul#primaryNavigation li a')


// create the new list items for the bottom of the page

let newList = document.createElement('ul')



topList.forEach(menuItem => {
    let newLI = document.createElement('li')
    let newLink = document.createElement('a')
    newLink.setAttribute('href', menuItem.getAttribute('href'))
    newLink.textContent = menuItem.textContent
    newLI.appendChild(newLink)
    newList.append(newLI)
    document.querySelector('#smallNavArea').append(newList)


    // 'copy' the textContent from upper menu to new menu
    // append children to make them appear in the DOM
})

// newList = document.querySelectorAll('#smallNavArea', 'smallMenuLink')
console.log(newList)



}

duplicateMenu()

















