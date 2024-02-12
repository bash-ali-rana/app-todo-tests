/// <reference types="Cypress" />

import { constants } from '../../fixtures/constants'

let todoID = []  //variable to hold i.d of todo

describe('Todo APIs', () => {

  // ------------------Description----------------
  // The following function will run at the beginning of all it blocks
  // It will delete all the existing todo records
  // ---------------------------------------------

  before(() => {
    cy.deleteAllTodos()
  })

  // ------------------Description----------------
  // The following code will validate CRUD operation of application using backend APIs
  // ---------------------------------------------

  context('API routes CRUD validation', function () {
    it('adds todo returns 200', () => {
      cy.request({
        method: 'POST',
        url: Cypress.config('apiUrl') + '/todos/add',
        body: {
          todo_description: constants['TODO_DESCRIPTION'],
          todo_responsible: constants['TODO_RESPONSIBLE'],
          todo_priority: constants['TODO_PRIORITY']
        }
      }).then(resp => {
        expect(resp.status).to.eq(200)
        expect(resp.body.todo).to.contains('todo added successfully')
      })
    })

    it('reads todo record returns 200', () => {
      cy.request({
        method: 'GET',
        url: Cypress.config('apiUrl') + '/todos/'
      }).then(resp => {
        let todos = []
        var responseBody = resp.body
        responseBody.forEach(todoValue => {
          todos.push(todoValue.todo_description)
          expect(todos).to.contains(constants['TODO_DESCRIPTION'])
          todoID = todoValue._id
        })
      })
    })

    it('updates todo record returns 200', () => {
      cy.request({
        method: 'POST',
        url: Cypress.config('apiUrl') + '/todos/update/' + todoID,
        body: {
          todo_description: constants['UPDATE_TODO_DESCRIPTION'],
          todo_responsible: constants['UPDATE_TODO_RESPONSIBLE'],
          todo_priority: constants['UPDATE_TODO_PRIORITY'],
          todo_completed: true
        }
      }).then(resp => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.contains('Todo updated')
      })
    })

    it('deletes todo record returns 200', () => {
      cy.request({
        method: 'DELETE',
        url: Cypress.config('apiUrl') + '/todos/delete/' + todoID
      }).then(resp => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.contains('Todo deleted')
      })
    })
  })
})
