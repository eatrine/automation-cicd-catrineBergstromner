/// <reference types="cypress" />

describe('Testcase 5', function (){
    //Testcase 5
    it('Login and create a new room, edit the room and delete it', function(){
        
        cy.visit('http://localhost:3000')

        //loginpage
        cy.contains('Login')
        cy.percySnapshot('login-page')

        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()

        //dashboardpage
        cy.contains('Tester Hotel Overview')
        cy.percySnapshot('dashboard-page')

        cy.get(':nth-child(1) > .btn').click()

        //roomspage
        cy.contains('Rooms')
        cy.percySnapshot('rooms-page')

        cy.get('h2 > .btn').click()

        //create room page
        cy.contains('New Room')
        cy.percySnapshot('create-room-page')

        cy.get(':nth-child(1) > select').select('Single')
        cy.get(':nth-child(2) > input').type('301')
        cy.get(':nth-child(3) > input').type('4')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get('[value="balcony"]').click()
        cy.get('.blue').click()
        cy.get(':last-child > :nth-child(2) > h3')

        //rooms page after creating new room
        cy.contains('Floor 4, Room 301')
        cy.percySnapshot('rooms-page-after-creating-new-room')

        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()

        //edit room page
        cy.contains('Room:')
        cy.percySnapshot('edit-room-page')
        cy.get(':nth-child(4) > input').clear()
        cy.get(':nth-child(4) > input').type('302')
        cy.get('.blue').click()
        cy.get(':last-child > :nth-child(2) > h3')

        //rooms page after editing
        cy.contains('Floor 4, Room 302')
        cy.percySnapshot('rooms-page-after-edit-room')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('.user > .btn').click()

        //logout
        cy.contains('Login')
        cy.percySnapshot('login-page-after-logout')

    })

})