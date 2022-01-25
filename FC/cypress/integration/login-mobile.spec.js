/* eslint-disable */
// / <reference types="cypress" />


describe('login mobile', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport('iphone-xr');
    });
    it('should be visible search icon', function () {
        cy.viewport('iphone-xr');
        cy.get('#loginBtn > .fas').should('be.visible');
    });
    it('should go to login page', function () {
        cy.viewport('iphone-xr');
        cy.get('#loginBtn > .fas').click();
    });
    it('should input text in form', function () {
        cy.viewport('iphone-xr');
        cy.get('#loginBtn > .fas').click();
        cy.get(':nth-child(1) > .form-group > .form-control').type(Cypress.env('name'));
        cy.get(':nth-child(2) > .form-group > .form-control').type(Cypress.env('password'));
    });
    it('should  acces button login & receives error message', function () {
        cy.viewport('iphone-xr');
        cy.get('#loginBtn > .fas').click();
        cy.get(':nth-child(1) > .form-group > .form-control').type(Cypress.env('name'));
        cy.get(':nth-child(2) > .form-group > .form-control').type(Cypress.env('password'));
        cy.get(':nth-child(5) > .butn').click();
    });
    it('should  acces forgot password', function () {
        cy.viewport('iphone-xr');
        cy.get('#loginBtn > .fas').click();
        cy.get('.text-left > a').click();
    });
    it.only('should  acces register', function () {
        cy.viewport('iphone-xr');
        cy.get('#loginBtn > .fas').click();
        cy.get('span > .text-theme-color').click();
    });


});
