/* eslint-disable */
// / <reference types="cypress" />

import NavbarLinks from "../support/PageObjects/NavbarLinks";

describe('firme cadastru', () => {
	const navbar = new NavbarLinks();
	beforeEach(() => {
		cy.visit('/');
	});
	it('should have logo width iphone', function () {
		cy.viewport('iphone-xr');
		cy.get('#logo').should('have.css', 'width', '150px');
	});
	it('should go to search', function () {
		cy.viewport('iphone-xr');
		cy.get('.xs-padding-10px-top > a > .fas').click();
		cy.go('back');
		cy.get('.cc-btn').click();
	});
	it('should go to login', function () {
		cy.viewport('iphone-xr');
		cy.get('#loginBtn').click();
		cy.go('back');
		cy.get('.cc-btn').click();
	});
	it('should open menu', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click();
	});
	it('should open & select firme', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click();
		cy.get(':nth-child(1) > [href="javascript:void(0)"]').click({force: true});
	});
	it('should open & select firme & select Alba', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click();
		cy.get(':nth-child(1) > [href="javascript:void(0)"]').click({force: true});
		cy.get('.d-lg-none > :nth-child(1) > a').click({force: true});
		cy.go('back');
		cy.get('.cc-btn').click();
	});
	it('should open Localizare & return', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click().wait(3000);
		cy.get('#nav > :nth-child(2) > a').click({force: true}).wait(3000);
		cy.go('back').wait(3000);
		cy.get('.cc-btn').click();
	});
	// fixme nu activeaza clasa
	it.skip('should open Info & return', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click().wait(1000);
		cy.get(':nth-child(3) > [href="javascript:void(0)"]').should('be.visible');
		cy.get('#nav > :nth-child(3) > a').click({force:true});
		// cy.get(':nth-child(3) > [href="javascript:void(0)"] > .active').should('be.visible');

		// cy.get('.active > .open > :nth-child(1) > a').click({force: true}).wait(3000);
		// cy.get('.active > .open > :nth-child(2) > a').click({force: true});
		// cy.go('back').wait(3000);
		// cy.get('.cc-btn').click();
	});
	// fixme nu activeaza clasa
	it.skip('should open Despre & return', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click();
		cy.get(':nth-child(4)> .has-sub').click({force:true}).wait(1000);

	});
	it('should open & select Contact & return "/"', function () {
		cy.viewport('iphone-xr');
		cy.get('.navbar-toggler').click();
		cy.get('#nav > :nth-child(5) > a').click().wait(2000);
		cy.go('back');
		cy.get('.cc-btn').click();
	});

	it('should have logo width macbook', function () {
		cy.viewport('macbook-16');
		cy.get('#logo').should('have.css', 'width', '200px');
	});

	it('should have links inside website & return home', function () {
		navbar.navbarAction();
		cy.get('.cc-btn').click();
	});
});
