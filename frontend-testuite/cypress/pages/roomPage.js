/// <reference types="cypress" />


//elements
const titleOfRoomPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const createRoomButton = 'h2 > .btn'
const backButton = ':nth-child(3) > .btn'
const moreMenu = ':nth-child(3) > .action > img'
const moreMenuLastChild = ':last-child > .action > img'
const editOption = '.menu > :nth-child(1)'
const deleteOption = '.menu > :nth-child(2)'
const checkLastChild = ':last-child > :nth-child(2) > h3'
const checkTitleNewRoom1 = 'Floor 3, Room 201'
const checkTitleNewRoom2 = 'Floor 4, Room 301'
const checkTitleUpdateRoom2 = 'Floor 4, Room 302'
const checkTitleOfRoom = 'Floor 1, Room 102'


//actions/functions
function checktitleOfRoomPage(cy){
    cy.title().should('eq', titleOfRoomPage)


}
//Room1
function checkNewRoom1(cy){
    cy.get(checkLastChild).should('contain',checkTitleNewRoom1)
        

}
//Room2
function checkNewRoom2(cy){
    cy.get(checkLastChild).should('contain',checkTitleNewRoom2)
        

}
function checkUpdateRoom2(cy){
    cy.get(checkLastChild).should('contain',checkTitleUpdateRoom2)
        

}
//general
function createRoom(cy, contentToConfirm){
    cy.get(createRoomButton).click(cy)
    cy.wait(300)
    cy.contains(contentToConfirm)

}
function deleteRoom(cy){
    cy.get(moreMenuLastChild).click(cy)
    cy.get(deleteOption).click(cy)
  
}
function checkAfterDelete(cy){
    cy.get(checkLastChild).should('contain',checkTitleOfRoom)
    

}
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click(cy)
    cy.wait(300)
    cy.contains(contentToConfirm)

}
function performBack(cy, contentToConfirm){
    cy.get(backButton).click(cy)
    cy.wait(300)
    cy.contains(contentToConfirm)

}
function editLastRoom(cy, contentToConfirm){
    cy.get(moreMenuLastChild).click(cy)
    cy.get(editOption).click(cy)
    cy.wait(300)
    cy.contains(contentToConfirm)
     
}


//exports

module.exports = {
    checktitleOfRoomPage,
    createRoom,
    editLastRoom,
    deleteRoom,
    performLogout,
    performBack,
    checkNewRoom1,
    checkNewRoom2,
    checkUpdateRoom2,
    checkAfterDelete
}
    