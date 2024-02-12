// ***********************************************************
// This file contains constructors of the locators of update todo page.
// These functions are being exported to be used in tests scrips.
// ***********************************************************

import { updateTodoElements } from '../pageElements/updateTodoElements'
export class UpdateTodoPage {

  // get header of page
  static getHeader () {
    return cy.get(updateTodoElements.containerHeader)
  }

  // get update todo button
  static getBtnUpdateTodo () {
    return cy.get(updateTodoElements.btnUpdateTodo)
  }

  // get delete todo button
  static getBtnDeleteTodo () {
    return cy.get(updateTodoElements.btnDeleteTodo)
  }

  // get completed checkbox
  static getCheckBoxCompleted () {
    return cy.get(updateTodoElements.checkBoxCompleted)
  }
}
