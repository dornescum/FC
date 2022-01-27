/* eslint-disable */
// / <reference types="cypress" />


describe('forgot password mobile', () => {
	beforeEach(() => {
		cy.viewport('iphone-xr');
		cy.visit('/reset_password');
	});
	it.only('toggle btn firma /pfa', function () {
		cy.viewport('iphone-xr');
		cy.get('.form-group > input').type(Cypress.env('email')).wait(1000);
	});

});
