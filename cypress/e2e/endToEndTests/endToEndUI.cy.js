/// <reference types="Cypress" />

import { DashboardPage } from '../../pageLocators/dashboardPage'
import { CreateTodoPage } from '../../pageLocators/createTodoPage'
import { UpdateTodoPage } from '../../pageLocators/updateTodoPage'
import { constants } from '../../fixtures/constants'

describe('Todo Application', () => {

  // ------------------Description----------------
  // The following function will run at the beginning of all it blocks
  // It will delete all the existing todo records
  // ---------------------------------------------

  before(() => {
    cy.deleteAllTodos()
  })

  // ------------------Description----------------
  // The following function will run at the beginning of each it blocks
  // It will visit the home page cypress.json has the baseUrl
  // ---------------------------------------------

  beforeEach(() => {
    cy.visit('/')
  })
  
  // ------------------Description----------------
  // The following code will validate dahboard(home) page
  // ---------------------------------------------

  context('Dashboard Page', function () {
    it('validate header text', () => {
      DashboardPage.getHeader().should('have.text', constants['DASHBOARD_PAGE_HEADER_TEXT'])
    })

    it('should show header of table', () => {
      DashboardPage.getTableHeader().each((elem) => {
        expect(elem).to.be.visible
      })
    })

    it('should show empty table if no todo added', () => {
      DashboardPage.getTodoTableBody().should('be.empty')
    })
  })

  
  // ------------------Description----------------
  // The following code will validate CRUD operation of application
  // ---------------------------------------------

  context('CRUD Operations', function () {
    it('creates new todo', () => {
      DashboardPage.getAddTodoButton().should('exist').click()
      DashboardPage.getHeader().should(
        'have.text',
        constants['CREATE_TODO_PAGE_HEADER_TEXT']
      )
      CreateTodoPage.getInputDescriptionField().type(
        constants['TODO_DESCRIPTION']
      )
      CreateTodoPage.getInputResponsibleField().type(
        constants['TODO_RESPONSIBLE']
      )
      CreateTodoPage.getRadioBtnPriorityLow().check().should('be.checked')
      CreateTodoPage.getBtnCreateTodo()
        .should('have.value', 'Create Todo')
        .click()
      expect(DashboardPage.getTodoTableBody().should('have.length.gte', 1))
    })

    it('read todo table data', function () {
      DashboardPage.getDescritionColumn().each((data) => {
        expect(data.text()).to.contains(constants['TODO_DESCRIPTION'])
      })

      DashboardPage.getResponsibiltyColumn().each((data) => {
        expect(data.text()).to.contains(constants['TODO_RESPONSIBLE'])
      })

      DashboardPage.getPriorityColumn().each((data) => {
        expect(data.text()).to.contains(constants['TODO_PRIORITY'])
      })

      DashboardPage.getActionsColumn().each((data) => {
        expect(data.text()).to.contains('Edit')
      })
    })

    it('updates todo', function () {
      DashboardPage.getEditTodoButton().should('have.text', 'Edit').click()
      CreateTodoPage.getHeader().should('have.text', constants['UPDATE_TODO_PAGE_HEADER_TEXT'])
      CreateTodoPage.getInputDescriptionField()
        .clear()
        .type(constants['UPDATE_TODO_DESCRIPTION'])
      CreateTodoPage.getInputResponsibleField()
        .clear()
        .type(constants['UPDATE_TODO_RESPONSIBLE'])
      CreateTodoPage.getRadioBtnPriorityHigh().check().should('be.checked')
      UpdateTodoPage.getCheckBoxCompleted().click().should('be.checked')
      UpdateTodoPage.getBtnUpdateTodo()
        .should('have.value', 'Update Todo')
        .click()

      DashboardPage.getDescritionColumn().then((data) => {
        expect(data.first().text()).to.contains(constants['UPDATE_TODO_DESCRIPTION'])
        expect(data.first().hasClass('completed'))
      })

      DashboardPage.getResponsibiltyColumn().then((data) => {
        expect(data.first().text()).to.contains(
          constants['UPDATE_TODO_RESPONSIBLE']
        )
      })

      DashboardPage.getPriorityColumn().then((data) => {
        expect(data.first().text()).to.contains(constants['UPDATE_TODO_PRIORITY'])
      })

      DashboardPage.getActionsColumn().then((data) => {
        expect(data.first().text()).to.contains('Edit')
      })
    })

    it('deletes todo', function () {
      DashboardPage.getEditTodoButton().should('have.text', 'Edit').click()
      DashboardPage.getHeader().should('have.text', 'Update Todo')
      UpdateTodoPage.getBtnDeleteTodo().click()
      DashboardPage.getTodoTableBody().should('be.empty')
    })
  })
})
