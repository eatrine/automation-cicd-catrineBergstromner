/// <reference types="cypress" />


// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const roomsOption = ':nth-child(1) > .btn'
const titleOfRoomsPage = 'Rooms'

// actions/functions
function checktitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click(cy)
    cy.wait(300)
    cy.contains(contentToConfirm)
}
function goToRoom(cy){
    cy.get(roomsOption).click(cy)
    cy.wait(300)
    cy.contains(titleOfRoomsPage)
}

// exports
module.exports = {
    checktitleOfDashboardPage,
    performLogout,
    goToRoom
}