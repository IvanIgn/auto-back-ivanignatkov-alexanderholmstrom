const faker = require('faker')

//functions

function roomInfo() {
let roomData = {
    // 'id': lastID,
    //'created':'2020-01-03T12:00:00.000Z',
        'category': faker.random.arrayElement(["double","single","twin"]),
        'floor': faker.datatype.number({min: 1, max: 50}),  
        'number': faker.datatype.number({min: 1, max: 200}),
        'available':true,
        'price': faker.datatype.number({min: 1000, max: 10000}),
        'features': faker.random.arrayElement(["balcony","ensuite","sea_view","penthouse"])

    }
        return roomData   
    }

function getAllRooms () {
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
}

function createNewRoom () {
    // Authentication; Getting a valid token
  //  cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
   //     cy.request({
    //        method: 'GET', 
     //       url: 'http://localhost:3000/api/rooms', 
      //      headers: {
      //          'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
       //         'Content-Type': 'application/json'
       //     }
    //    }).then((response =>{
     //       cy.wait(200)
    //        expect(response.status).to.eq(200)
            //Save the id of the last client into a variable
     //       let lastID = response.body[response.body.length -1].id
     //       cy.log(lastID)

      //      cy.request({
     //           method: 'GET', 
     //           url: 'http://localhost:3000/api/room/'+lastID,  
      //          headers: {
      //              'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
      //              'Content-Type': 'application/json'
      //          }
      //      }).then((response => {
      //          cy.wait(200)
                //lastID = lastID + 1
     //           expect(response.status).to.eq(200)
     //           cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:3000/api/room/new', 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }, 
                    body: roomInfo() /*{
                       // 'id': lastID,
                       //'created':'2020-01-03T12:00:00.000Z',
                        'category':'single',
                        'floor':16,
                        'number':258,
                        'available':true,
                        'price':3500,
                        'features':['balcony','ensuite']
                      }*/            
                }).then((response => {
                    cy.wait(200)
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
        //    }))

   //     }))
 //   }))
   
}

function editLastRoom () {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/rooms', 
            headers: {
                'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                'Content-Type': 'application/json'
            }
        }).then((response =>{
            cy.wait(200)
            expect(response.status).to.eq(200)
            //Save the id of the last client into a variable
            let lastID = response.body[response.body.length -1].id
            cy.log(lastID)

            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/room/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
                cy.wait(200)
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:3000/api/room/'+lastID, 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }, 
                    body: roomInfo() /*{
                        'id': lastID,
                        'created':'2020-01-03T12:00:00.000Z',
                        'category':'single',
                        'floor':30,
                        'number':300,
                        'available':true,
                        'price':4000,
                        'features':['balcony','ensuite','sea_view']
                      } */                 
                }).then((response => {
                    cy.wait(200)
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
            }))

        }))
    }))
   
}


function deleteLastRoom () {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/rooms', 
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
                url: 'http://localhost:3000/api/room/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'DELETE',
                    url: 'http://localhost:3000/api/room/'+lastID, 
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
   
}




//exports

module.exports = {
    getAllRooms,
    createNewRoom,
    editLastRoom,
    deleteLastRoom

}