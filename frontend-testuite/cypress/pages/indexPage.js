/// <reference types="cypress" />

// elements
const titleOfIndexPage = 'Testers Hotel'
const usernameField = ':nth-child(1) > input'
const passwordField = ':nth-child(2) > input'
const loginButton = '.btn'

// actions/functions
function checktitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}
function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
    cy.wait(300)
    cy.contains(contentToConfirm)
}
function performInvalidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
    cy.wait(300)
    cy.contains(contentToConfirm)
}


// exports
module.exports = {
    checktitleOfIndexPage,
    performValidLogin,
    performInvalidLogin
}


