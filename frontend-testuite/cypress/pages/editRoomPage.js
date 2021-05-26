/// <reference types="cypress" />


// elements
const categoryField = ':nth-child(3) > select'
const numberField = ':nth-child(4) > input'
const floorField = ':nth-child(5) > input'
const availableBox = '.checkbox'
const priceField = ':nth-child(7) > input'
const featureOption = ':nth-child(8) > select'
const saveButton = '.blue'
const backButton = '[href="/rooms"]'
const deleteButton = 'h2 > .btn'
const logoutButton = '.user > .btn'



// action/function
//RoomCategory
function editCategory(cy, contentToConfirm){
    cy.get(categoryField).select('Double')
    cy.wait(300)
    cy.contains(contentToConfirm)
}
//Roomnumber
function editNumber(cy){
    cy.get(numberField).type('302')
    cy.wait(300)
    cy.get(numberField).should('have.value', '302')

}
function clearNumber(cy){
    cy.get(numberField).clear()
    

}
//Floornumber
function editFloor(cy){
    cy.get(floorField).type('3')
    cy.wait(300)
    cy.get(floorField).should('have.value', '3')

}
//Availability
function editAvailability(cy){
    cy.get(availableBox).click()
    //cy.wait(300)
    //cy.get(availableBox).should('be.checked')

}
//Price
function editPrice(cy){
    cy.get(priceField).type('2500')
    cy.wait(300)
    cy.get(priceField).should('have.value', '2500')
    

}
//Feature
function editFeature(cy, contentToConfirm){
    cy.get(featureOption).select('sea_view')
    cy.wait(300)
    cy.contains(contentToConfirm)

}
//general
function clickSave(cy, contentToConfirm){
    cy.get(saveButton).click(cy)
    cy.wait(300)
    cy.contains(contentToConfirm)
    
    
    

}


// exports
module.exports = {
    editCategory,
    editNumber,
    clearNumber,
    editFloor,
    editAvailability,
    editPrice,
    editFeature,
    clickSave
}
