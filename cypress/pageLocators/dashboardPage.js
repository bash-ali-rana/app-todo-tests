// ***********************************************************
// This file contains constructors of the locators of dashboard page.
// These functions are being exported to be used in tests scrips.
// ***********************************************************

import { dashboardPageElements } from '../pageElements/dashboardElements'

export class DashboardPage {
  // get header of page
  static getHeader () {
    return cy.get(dashboardPageElements.containerHeader)
  }

  // get table header
  static getTableHeader () {
    return cy.get(dashboardPageElements.todoTableHeader)
  }

  // get table body
  static getTodoTableBody () {
    return cy.get(dashboardPageElements.todoTableBody, {timeout: 3000})
  }

  // get todo button
  static getAddTodoButton () {
    return cy.get(dashboardPageElements.btnAddTodo)
  }

  // get table descrition column
  static getDescritionColumn () {
    return cy.get(dashboardPageElements.descritionColumn)
  }

  // get table responsibilty column
  static getResponsibiltyColumn () {
    return cy.get(dashboardPageElements.responsibiltyColumn)
  }

  // get table priority column
  static getPriorityColumn () {
    return cy.get(dashboardPageElements.priorityColumn)
  }

  // get table actions column
  static getActionsColumn () {
    return cy.get(dashboardPageElements.actionsColumn)
  }

  // get edit button
  static getEditTodoButton () {
    return cy.get(dashboardPageElements.btnEdit)
  }
  
}
