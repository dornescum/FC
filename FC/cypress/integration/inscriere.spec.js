/* eslint-disable */
// / <reference types="cypress" />


describe('register company mobile', () => {
	beforeEach(() => {
		cy.viewport('iphone-xr');
		cy.visit('/inscriere');
	});
	it('should complete form', function () {
		cy.viewport('iphone-xr');
		cy.get('.toggle-group > .btn-success').click();
	});
	it('company info', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(3) > :nth-child(1) > .form-control').type(Cypress.env('name'));
		cy.get(':nth-child(3) > :nth-child(2) > .form-control').type(Cypress.env('message'));
		cy.get(':nth-child(3) > :nth-child(3) > .form-control').type(Cypress.env('message'));
		cy.get(':nth-child(4) > .form-control').select(4);
		cy.get(':nth-child(5) > .form-control').type(Cypress.env('phone'));
		cy.get(':nth-child(6) > .form-control').type(Cypress.env('phone'));
		cy.get(':nth-child(7) > .form-control').type(Cypress.env('phone'));
	});
	it.only('company info emty show error', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(3) > :nth-child(1) > .form-control').click();
		cy.get(':nth-child(3) > :nth-child(2) > .form-control').click();
		cy.get(':nth-child(3) > :nth-child(3) > .form-control').click();
		cy.get(':nth-child(4) > .form-control').select(4);
		cy.get(':nth-child(5) > .form-control').click();
		cy.get(':nth-child(6) > .form-control').click();
		cy.get(':nth-child(7) > .form-control').click();
		cy.get('.btnM ').click();
	});

	it('ANCPI imput', function () {
		cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type(Cypress.env('name'));
		cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').type(Cypress.env('email'));
	});
	it('connect info', function () {
		cy.get(':nth-child(5) > .row > .col-md-12 > .form-control').type(Cypress.env('name'));
		cy.get(':nth-child(5) > .row > :nth-child(2) > .form-control').type(Cypress.env('email'));
		cy.get(':nth-child(5) > .row > :nth-child(3) > .form-control').type(Cypress.env('fax'));
	});
	it('should check box terms', function () {
		cy.get('#terms').click();
	});
	it('should show modal on click', function () {
		cy.get('#terms-and-conditions').click();
	});
	// fixme not closing modal
	it('should close modal after it opens it', function () {
		cy.get('.cc-btn').click();
		cy.get('#terms-and-conditions').click();
		cy.get('.close > span').click({force:true});
		// cy.get('.modal-footer > .btn').click({force:true});
	});

});
