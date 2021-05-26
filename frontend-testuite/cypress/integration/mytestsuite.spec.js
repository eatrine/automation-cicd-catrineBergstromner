/// <reference types="cypress" />
//Test suite
describe('Testcase 1', function (){
    //Testcase 1
    it('Valid login', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')



    })
})
describe('Testcase 2', function (){
    //Testcase 2
    it('Login with invalid username', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester02')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Bad username or password')
       
    })
})

describe('Testcase 3', function (){
    //Testcase 3
    it('Login with invalid password', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8')
        cy.get('.btn').click()
        cy.contains('Bad username or password')
    }) 
    
})
  
describe('Testcase 4', function (){
    //Testcase 4
    it('Login and create a new room and delete it', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('201')
        cy.get(':nth-child(3) > input').type('3')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('2500')
        cy.get('[value="sea_view"]').click()
        cy.get('.blue').click()
        cy.contains('Floor 3, Room 201')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('.user > .btn').click()
        cy.contains('Login')



    })
})

describe('Testcase 5', function (){
    //Testcase 5
    it('Login and create a new room, edit the room and delete it', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Single')
        cy.get(':nth-child(2) > input').type('301')
        cy.get(':nth-child(3) > input').type('4')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1500')
        cy.get('[value="balcony"]').click()
        cy.get('.blue').click()
        cy.get(':last-child > :nth-child(2) > h3')
        cy.contains('Floor 4, Room 301')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.contains('Room:')
        cy.get(':nth-child(4) > input').type('302')
        cy.get('.blue').click()
        cy.get(':last-child > :nth-child(2) > h3')
        cy.contains('Floor 4, Room 302')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get('.user > .btn').click()
        cy.contains('Login')

    })

})