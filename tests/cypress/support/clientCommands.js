// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*

Cypress.Commands.add('getAllClients', () => {
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

Cypress.Commands.add('createNewClient', () => {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/clients', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        }).then((response =>{
            expect(response.status).to.eq(200)
            //Save the id of the last client into a variable
            let lastID = response.body[response.body.length -1].id
            cy.log(lastID)

            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/client/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
               // lastID = lastID + 1
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:3000/api/client/new', 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }, 
                    body:{
                       // "id": lastID,
                        "name":"Client" + lastID,
                        "email":"client"+"/"+lastID+"/"+"@email.com",
                        "telephone":"12312423423423"
                    }                  
                }).then((response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
            }))

        }))
    }))
   
})

Cypress.Commands.add('editLastClient', () => {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/clients', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        }).then((response =>{
            expect(response.status).to.eq(200)
            //Save the id of the last client into a variable
            let lastID = response.body[response.body.length -1].id
            cy.log(lastID)

            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/client/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:3000/api/client/'+lastID, 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }, 
                    body:{
                        "id":lastID,
                        "name":"Client" +  lastID,
                        "email":"client" + lastID + "@email.com",
                        "telephone":"12312423423423"
                    }                  
                }).then((response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
            }))

        }))
    }))
   
})


Cypress.Commands.add('deleteLastClient', () => {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/clients', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        }).then((response =>{
            expect(response.status).to.eq(200)
            //Save the id of the last client into a variable
            let lastID = response.body[response.body.length - 1].id
            cy.log(lastID)

            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/client/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'DELETE',
                    url: 'http://localhost:3000/api/client/'+lastID, 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }          
                }).then((response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
            }))

        }))
    }))
   
})

*/

