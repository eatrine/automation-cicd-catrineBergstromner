/// <reference types="cypress" />


// elements
const categoryField = ':nth-child(1) > select'
const numberField = ':nth-child(2) > input'
const floorField = ':nth-child(3) > input'
const availableBox = '.checkbox'
const priceField = ':nth-child(5) > input'
const featureOption = ':nth-child(6) > select'
const saveButton = '.blue'





// action/functions
//Settings for Room1
function enterCategoryRoom1(cy, contentToConfirm){
    cy.get(categoryField).select('Double')
    cy.wait(300)
    cy.contains(contentToConfirm)
}
function enterNumberRoom1(cy){
    cy.get(numberField).type('201')
    cy.wait(300)
    cy.get(numberField).should('have.value', '201')

}
function enterFloorRoom1(cy){
    cy.get(floorField).type('3')
    cy.wait(300)
    cy.get(floorField).should('have.value', '3')

}
function enterAvailabilityRoom1(cy){
    cy.get(availableBox).click()
    //cy.wait(300)
    //cy.get(availableBox).should('be.checked')

}
function enterPriceRoom1(cy){
    cy.get(priceField).type('2500')
    cy.wait(300)
    cy.get(priceField).should('have.value', '2500')
    

}
function enterFeatureRoom1(cy, contentToConfirm){
    cy.get(featureOption).select('sea_view')
    cy.wait(300)
    cy.contains(contentToConfirm)

}
//Settings for Room2
function enterCategoryRoom2(cy, contentToConfirm){
    cy.get(categoryField).select('Single')
    cy.wait(300)
    cy.contains(contentToConfirm)
}
function enterNumberRoom2(cy){
    cy.get(numberField).type('301')
    cy.wait(300)
    cy.get(numberField).should('have.value', '301')

}
function enterFloorRoom2(cy){
    cy.get(floorField).type('4')
    cy.wait(300)
    cy.get(floorField).should('have.value', '4')

}
function enterAvailabilityRoom2(cy){
    cy.get(availableBox).click()
    //cy.wait(300)
    //cy.get(availableBox).should('be.checked')

}
function enterPriceRoom2(cy){
    cy.get(priceField).type('1500')
    cy.wait(300)
    cy.get(priceField).should('have.value', '1500')
    

}
function enterFeatureRoom2(cy, contentToConfirm){
    cy.get(featureOption).select('balcony')
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
    enterCategoryRoom1,
    enterNumberRoom1,
    enterFloorRoom1,
    enterAvailabilityRoom1,
    enterPriceRoom1,
    enterFeatureRoom1,
    enterCategoryRoom2,
    enterNumberRoom2,
    enterFloorRoom2,
    enterAvailabilityRoom2,
    enterPriceRoom2,
    enterFeatureRoom2,
    clickSave

}

