/* eslint-disable */
// / <reference types="cypress" />
import FiscalHomePage from "../support/PageObjects/fiscalHomePage";
import FooterLinks from "../support/PageObjects/FooterLinks";

describe('firme cadastru', ()=>{
	const mainPage = new FiscalHomePage();
	const footer = new FooterLinks();
	beforeEach(() => {
		cy.visit('/');
	});
	it('should contain #logo', function () {
		cy.get('#logo')
	});
	// fixme nu vede form
	it.skip('should contain form', function () {
		// cy.get('select[name=judet_id]').should('exist');
		cy.get('[name=judet_id]').select('Alba');
		// cy.get(':nth-child(1) > .form-control').select("Bucuresti").click({force: true});
		// mainPage.mainForm();
		// cy.get(':nth-child(2) > .form-control')
	});
	it('should start search', function () {
		// cy.get('.col-md-2 > .butn').click({force: true});
		// mainPage.mainForm();
		cy.visit('/');
		// cy.go('back');
		cy.reload();
	});

	it('should have a contact button with link', function () {
		cy.get('.page-title-section').should('be.visible')
		cy.get('.container > .butn').should('be.visible');
		// fixme nu vede butonul
		cy.get('.container .butn')[2].click({force:true});
		cy.go('back');
	});

	it('should have a link to the team', function () {
		cy.get(':nth-child(1) > a > .text-center').click();
		cy.go('back');
	});
	it('should have a link to location', function () {
		cy.get(':nth-child(2) > a > .text-center').click();
		cy.go('back');
	});
	it('should have a link to the search company', function () {
		cy.get(':nth-child(3) > a > .text-center').click();
		cy.go('back');
	});
	it('should contain cookie modal && close it', function () {
		cy.get('.cc-btn').click();
	});

})
