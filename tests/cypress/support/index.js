// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@percy/cypress'
import './clientCommands'
import './roomCommands'
import './billCommands'
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


  // Test cases for Rooms -  Create, Edit and Delete a Room
/*

 it('GET request towards /api/rooms', () => {
    cy.authenticate().then((response =>{
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/rooms', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        })
    })).then((response => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        cy.log(JSON.stringify(response.body[1]))
    }))
    cy.wait(300)
})


it('POST request towards /api/room/new', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/api/room/new',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }, 
            body:{
                'id':3,
                'created':'2020-01-03T12:00:00.000Z',
                'category':'single',
                'floor':16,
                'number':258,
                'available':true,
                'price':3500,
                'features':['balcony','ensuite','sea_view']
              }
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))    
    cy.wait(300)   
})   

it('PUT request towards /api/room/3', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'PUT',
            url:'http://localhost:3000/api/room/3',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }, 
            body:{
                "id":3,
                "created":"2020-01-03T12:00:00.000Z",
                "category":"twin",
                "floor":20,
                "number":359,
                "available":true,
                "price":4700,
                "features":["balcony"]
            }                
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))      
    cy.wait(300) 
})   

it('DELETE request towards /api/room/3', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'DELETE',
            url:'http://localhost:3000/api/room/3',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            },                              
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))       
    cy.wait(300)
}) 

*/

/*

   // Test cases for Clients -  Create, Edit and Delete a Client



it('GET request towards /api/clients', () => {
    cy.authenticate().then((response =>{
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/clients', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        })
    })).then((response => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        cy.log(JSON.stringify(response.body[1]))
    }))
    cy.wait(300)
})

it('POST request towards /api/client/new', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/api/client/new',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }, 
            body:{
                "id":3,
                "name":"Client03",
                "email":"client03@email.com",
                "telephone":"12312423423423"
            }
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))   
    cy.wait(300)    
})  

it('PUT request towards /api/client/3', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'PUT',
            url:'http://localhost:3000/api/client/3',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }, 
            body:{
                "id":3,
                "name":"Client03",
                "email":"client03@email.com",
                "telephone":"12312423423423"
            }                
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))    
    cy.wait(300)   
})   

it('DELETE request towards /api/client/3', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'DELETE',
            url:'http://localhost:3000/api/client/3',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            },                              
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))   
    
}) 

*/

   // Test cases for Bills -  Create, Edit and Delete a Bill 

/*
it('GET request towards /api/bills', () => {
    cy.authenticate().then((response =>{
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/bills', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        })
    })).then((response => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        cy.log(JSON.stringify(response.body[1]))
    }))
    cy.wait(300)
})

it('POST request towards /api/bill/new', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/api/bill/new',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }, 
            body:{
                "id":2,
                "value":"3000",
                "paid": true
            }
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))   
    cy.wait(300)    
})  

it('PUT request towards /api/bill/2', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'PUT',
            url:'http://localhost:3000/api/bill/2',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }, 
            body:{
                "id":2,
                "value":"3000",
                "paid": true
            }                
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))    
    cy.wait(300)   
})   

it('DELETE request towards /api/bill/2', () => {
    cy.authenticate().then((response => {
        cy.request({
            method: 'DELETE',
            url:'http://localhost:3000/api/bill/2',
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            },                              
        }).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        }))
    }))   
    
}) 
*/

    // Logout

/*
    it('POST request towards /api/logout', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/logout',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                },                              
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))    
    }) 

*/