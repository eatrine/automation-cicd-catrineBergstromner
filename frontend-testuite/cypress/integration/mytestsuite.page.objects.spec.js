/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomFuncs from '../pages/roomPage'
import * as createRoomFuncs from '../pages/createRoomPage'
import * as editRoomFuncs from '../pages/editRoomPage'

//TestSuite

describe('My test suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checktitleOfIndexPage(cy)
    })

    //Testcase 1 
    it('Perform valid login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy, 'Login')

    })

    //Testcase 2
    it('Perform invalid login with wrong username', function(){
        indexFuncs.performInvalidLogin(cy, targets.wrongUsername, targets.password, 'Bad username or password')
        //dashboardFuncs.performLogout(cy, 'Login')

    })

    //Testcase 3
    it('Perform invalid login with wrong password', function(){
        indexFuncs.performInvalidLogin(cy, targets.username, targets.wrongPassword, 'Bad username or password')
        //dashboardFuncs.performLogout(cy, 'Login')

    })
    //Testcase 4
    it('Create a room', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.goToRoom(cy,'Rooms')
        roomFuncs.createRoom(cy, 'New Room')
        createRoomFuncs.enterCategoryRoom1(cy, 'Double') 
        createRoomFuncs.enterNumberRoom1(cy)
        createRoomFuncs.enterFloorRoom1(cy)
        createRoomFuncs.enterAvailabilityRoom1(cy)
        createRoomFuncs.enterPriceRoom1(cy)
        createRoomFuncs.enterFeatureRoom1(cy, 'Sea View')
        createRoomFuncs.clickSave(cy, 'Rooms')
        roomFuncs.checkNewRoom1(cy)
        roomFuncs.deleteRoom(cy)
        roomFuncs.checkAfterDelete(cy)


    })
    //Testcase 5
    it('Edit a room', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.goToRoom(cy,'Rooms')
        roomFuncs.createRoom(cy, 'New Room')
        createRoomFuncs.enterCategoryRoom2(cy, 'Single') 
        createRoomFuncs.enterNumberRoom2(cy)
        createRoomFuncs.enterFloorRoom2(cy)
        createRoomFuncs.enterAvailabilityRoom2(cy)
        createRoomFuncs.enterPriceRoom2(cy)
        createRoomFuncs.enterFeatureRoom2(cy, 'Balcony')
        createRoomFuncs.clickSave(cy, 'Rooms')
        roomFuncs.checkNewRoom2(cy)
        roomFuncs.editLastRoom(cy, 'Room: 3')
        editRoomFuncs.clearNumber(cy)
        editRoomFuncs.editNumber(cy)
        editRoomFuncs.clickSave(cy, 'Rooms')
        roomFuncs.checkUpdateRoom2(cy)
        roomFuncs.deleteRoom(cy)
        roomFuncs.checkAfterDelete(cy)


    })



})