// ***********************************************************
// This file contains constructors of the locators of create todo page.
// These functions are being exported to be used in tests scrips.
// ***********************************************************

import { createTodoElements } from '../pageElements/createTodoElements'

export class CreateTodoPage {

  // get header of page
  static getHeader () {
    return cy.get(createTodoElements.containerHeader)
  }

  // get description field
  static getInputDescriptionField () {
    return cy.get(createTodoElements.inputDescription)
  }

  // get responsible field
  static getInputResponsibleField () {
    return cy.get(createTodoElements.inputResponsible)
  }

  // get low priority radio button
  static getRadioBtnPriorityLow () {
    return cy.get(createTodoElements.radioBtnPriorityLow)
  }

  // get medium priority radio button
  static getRadioBtnPriorityMedium () {
    return cy.get(createTodoElements.radioBtnPriorityMedium)
  }

  // get high priority radio button
  static getRadioBtnPriorityHigh () {
    return cy.get(createTodoElements.radioBtnPriorityHigh)
  }

  // get create todo button
  static getBtnCreateTodo () {
    return cy.get(createTodoElements.btnCreateTodo)
  }
  
  

}
