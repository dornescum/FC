/* eslint-disable */
// / <reference types="cypress" />


describe('search mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr');
        cy.visit('/');
    });
    it('should be visible search icon', function () {
        cy.viewport('iphone-xr');
        cy.get('.xs-padding-10px-top > a > .fas').should('be.visible');
    });
    it('should go to search page', function () {
        cy.viewport('iphone-xr');
        cy.get('.xs-padding-10px-top > a > .fas').click();
    });
    it('should go to search page and select PFA', function () {
        cy.viewport('iphone-xr');
        cy.get('.xs-padding-10px-top > a > .fas').click();
        cy.get(':nth-child(2) > .form-control').select(2);
    });
    it('should go to search page and select Company & click', function () {
        cy.viewport('iphone-xr');
        cy.get('.xs-padding-10px-top > a > .fas').click();
        cy.get(':nth-child(2) > .form-control').select(1);
        cy.get('.row > .butn').click();
    });
    it('should go to search page and select Company & click & select first company', function () {
        cy.viewport('iphone-xr');
        cy.get('.xs-padding-10px-top > a > .fas').click();
        cy.get(':nth-child(2) > .form-control').select(1);
        cy.get('.row > .butn').click();
        cy.get(':nth-child(1) > .card > .align-items-center > .col-md-5 > .card-list-img > a > .border-radius-5').click();
    });
    it.only('should complete form', function () {
        cy.viewport('iphone-xr');
        cy.get('.xs-padding-10px-top > a > .fas').click();
        cy.get(':nth-child(2) > .form-control').select(1);
        cy.get('.row > .butn').click();
        cy.get(':nth-child(1) > .card > .align-items-center > .col-md-5 > .card-list-img > a > .border-radius-5').click();
        cy.get('.controls > :nth-child(1) > :nth-child(1) > input').type(Cypress.env('name')).wait(1000);
        cy.get('.controls > :nth-child(1) > :nth-child(2) > input').type(Cypress.env('phone')).wait(1000);
        cy.get('.col-md-12 > input').type(Cypress.env('email')).wait(1000);
        cy.get('textarea').type(Cypress.env('message')).wait(1000);
    });

});
