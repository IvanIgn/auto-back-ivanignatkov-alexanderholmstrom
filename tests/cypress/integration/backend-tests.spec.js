/// <reference types="cypress" />

import * as client from "../helpers/client-helpers"
import * as room from "../helpers/room-helpers"
import * as bill from "../helpers/bill-helpers"



describe('Test suite', () => {

    /// Login

    it('POST request towards /api/login', () => {
        cy.authenticate()
    })

    /// Clients

    it.only('getAllClients', () => {
       // cy.getAllClients()
        client.getAllClients()
    })

    it.only('createNewClient', () => {
        cy.authenticate().then((response => { 
        client.createNewClient()
       // cy.createNewClient()
     }))
    })

    it.only('editLastClient', () => {
      //  cy.authenticate().then((response => { 
        client.editLastClient()
  //   }))
        //cy.editLastClient()
    })

    it.only('deleteLastClient', () => {
        client.deleteLastClient()
        //cy.deleteLastClient()
    })
    
    /// Rooms
    
    it('getAllRooms', () => {
        room.getAllRooms()
       // cy.getAllRooms()
    })

    it('createNewRoom', () => {
        room.createNewRoom()
       // cy.createNewRoom()
    })

    it('editLastRoom', () => {
        room.editLastRoom()
       //cy.editLastRoom()
    })
    
    it('deleteLastRoom', () => {
        room.deleteLastRoom()
       //cy.deleteLastRoom()
    })
    

    /// Bills
    
    it('getAllBills', () => {
        bill.getAllBills()
       // cy.getAllBills()
    })

    it('createNewBill', () => {
        bill.createNewBill()
       // cy.createNewBill()
    })

    it('editLastBill', () => {
        bill.editLastBill()
       // cy.editLastBill()
    })
    
  it('deleteLastBill', () => {
        bill.deleteLastBill()
       // cy.deleteLastBill()
   })
    
    /// Logout
    
    it('POST request towards /api/logout', () => {
        cy.logout()
    }) 


})

