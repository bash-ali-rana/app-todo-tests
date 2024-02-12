/// <reference types="cypress" />

// ***********************************************
// Custom commands are used to execute scripts
// ***********************************************

// The following custom command is declared to get all the todos from database

Cypress.Commands.add('getAllTodos', () => {
  let todos = []
  cy.request({
    method: 'GET',
    url: Cypress.config('apiUrl') + '/todos/'
  }).then(resp => {
    var responseBody = resp.body
    responseBody.forEach(todoValue => {
      todos.push(todoValue._id)
    })
    return todos
  })
})

// The following custom command is declared to delete all the todos from database if available

Cypress.Commands.add('deleteAllTodos', () => {
  let todos = []
  cy.getAllTodos().then((res) => {
    todos = res
    if (todos.length != 0) {
      for (let index = 0; index < todos.length; index++) {
        let todoID = todos[index]
        cy.request({
          method: 'DELETE',
          url: Cypress.config('apiUrl') + '/todos/delete/' + todoID
        }).then((resp) => {
          expect(resp.status).equal(
            200,
            'expecting status code should equal 200'
          )
          expect(resp.body).contains('Todo deleted')
        })
      }
    } else {
      cy.log('no todo found')
    }
  })
})
