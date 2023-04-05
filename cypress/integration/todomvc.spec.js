/// <reference types="Cypress" />

it('should be able to add a new todo to list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type("clean room {enter}")
})