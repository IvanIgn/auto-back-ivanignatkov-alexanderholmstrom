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

    it('getAllClients', () => {
        client.getAllClients()
    })

    it('createNewClient', () => { 
        client.createNewClient()
    })

    it('editLastClient', () => {
        client.editLastClient()
    })
    
    it('deleteLastClient', () => {
        client.deleteLastClient()  
    })
    
    
    /// Rooms
    
    it('getAllRooms', () => {
        room.getAllRooms()
    })

    it('createNewRoom', () => {
        room.createNewRoom()
    })

    it('editLastRoom', () => {
        room.editLastRoom()
    })
    
    it('deleteLastRoom', () => {
        room.deleteLastRoom()
    })
    
    

    /// Bills
    
    it('getAllBills', () => {
        bill.getAllBills()
    })

    it('createNewBill', () => {
        bill.createNewBill()
    })

    it('editLastBill', () => {
        bill.editLastBill()
    })
    
    it('deleteLastBill', () => {
        bill.deleteLastBill()
    })
    
    /// Logout
    
    it('POST request towards /api/logout', () => {
        cy.logout()
    }) 


})

