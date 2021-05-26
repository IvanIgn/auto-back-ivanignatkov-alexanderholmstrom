const faker = require('faker')

//functions

function billInfo() {
    let billData = {
       //"id":lastID,
       "value": faker.datatype.number({min: 1, max: 50}),
       "paid": true
    }
        return billData   
    }


function getAllBills () {
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
}

function createNewBill () {
    // Authentication; Getting a valid token
  //  cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
  //      cy.request({
  //          method: 'GET', 
   //         url: 'http://localhost:3000/api/bills', 
    //        headers: {
     //           'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
     //           'Content-Type': 'application/json'
      //      }
   //     }).then((response =>{
    //        expect(response.status).to.eq(200)
            //Save the id of the last client into a variable
      //      let lastID = response.body[response.body.length -1].id
      //      cy.log(lastID)

       //     cy.request({
         //       method: 'GET', 
         //       url: 'http://localhost:3000/api/bill/'+lastID,  
         //       headers: {
         //           'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
         //           'Content-Type': 'application/json'
          //      }
         //   }).then((response => {
         //       lastID = lastID + 1
         //       expect(response.status).to.eq(200)
         //       cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:3000/api/bill/new', 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }, 
                    body: billInfo() /*{
                        "id":lastID,
                        "value":"3000",
                        "paid": true
                    }*/            
                }).then((response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
       //     }))

       // }))
  //  }))
   
}

function editLastBill () {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/bills', 
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
                url: 'http://localhost:3000/api/bill/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:3000/api/bill/'+lastID, 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }, 
                    body: billInfo() /*{
                        "id":lastID,
                        "value":"5000",
                        "paid": true
                    }*/            
                }).then((response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))
            }))

        }))
    }))
   
}


function deleteLastBill () {
    // Authentication; Getting a valid token
    cy.authenticate().then((response => {
        // Get request to get all clients in order to extract the lastID
        cy.request({
            method: 'GET', 
            url: 'http://localhost:3000/api/bills', 
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
                url: 'http://localhost:3000/api/bill/'+lastID,  
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.request({
                    method: 'DELETE',
                    url: 'http://localhost:3000/api/bill/'+lastID, 
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


module.exports = {
    getAllBills,
    createNewBill,
    editLastBill,
    deleteLastBill

}