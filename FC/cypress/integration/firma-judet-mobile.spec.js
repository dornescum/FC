/* eslint-disable */
// / <reference types="cypress" />
import SearchDistrictLinks from "../support/PageObjects/SectorLinks";
import FreeSurveyors from "../support/PageObjects/FreeSurveyors";

describe('firme cadastru', () => {
	const district = new SearchDistrictLinks();
	const free = new FreeSurveyors();
	beforeEach(() => {
		cy.viewport('iphone-xr');
		cy.visit('/bucuresti');
	});
	it('should be visible', function () {
		cy.viewport('iphone-xr');
		cy.get('.margin-40px-bottom > .card > .align-items-center > .col-md-5').should('be.visible');
	});

	it('should have btn phone & click for info', function () {
		cy.viewport('iphone-xr');
		cy.get('.surveyorPhoneBtn').click({force: true});
	});
	it('should have btn mail & click for info', function () {
		cy.viewport('iphone-xr');
		cy.get('.surveyorEmailBtn').click({force: true});
	});
	it('should have btn info & go back', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(3) > .card > .align-items-center > .col-md-7 > .card-body > .row > .butn').click({force: true});
		cy.go('back');
	});
	it('should have btn info & go back', function () {
		cy.viewport('iphone-xr');
		cy.get('.row > :nth-child(1) > .font-size14').click({force: true});
		cy.go('back');
		cy.get('.cc-btn').click();
	});
	it('should action links & return', function () {
		cy.viewport('iphone-xr');
		district.districtAction(1);
		district.districtAction(2);
		district.districtAction(3);
		district.districtAction(4);
		district.districtAction(5);
		district.districtAction(6);
	});
	it('should check free for links & return', function () {
		cy.viewport('iphone-xr');
		free.freeAction(1);
		free.freeAction(5);
		free.freeAction(12);
		free.freeAction(15);
	});
	it('should have length & show phone', function () {
		cy.viewport('iphone-xr');
		cy.get(`:nth-child(${1}) > .card > .font-size14`).click({force: true});
		cy.get('.cc-btn').click();
		cy.get('.surveyorPhoneBtn').should('have.css', 'width', '325px');
		cy.get('.surveyorPhoneBtn').click();

	});
	it('should go to company info', function () {
		cy.viewport('iphone-xr');
		cy.get(`:nth-child(${1}) > .card > .font-size14`).click({force: true});
		cy.get('.cc-btn').click();
		cy.get('.margin-40px-bottom > .card > .align-items-center > .col-md-5 > .card-list-img').click();
	});
	it('should have length for iphone & show info', function () {
		cy.viewport('iphone-xr');
		cy.get(`:nth-child(${1}) > .card > .font-size14`).click({force: true});
		cy.get('.cc-btn').click();
		cy.get('.margin-40px-bottom > .card > .align-items-center > .col-md-5 > .card-list-img').click();
		cy.get('.surveyorPhoneBtn').should('have.css', 'width', '260px');
		cy.get('.surveyorPhoneBtn').click();
	});
	it('should input info in form', function () {
		cy.viewport('iphone-xr');
		cy.get(`:nth-child(${1}) > .card > .font-size14`).click({force: true});
		cy.get('.cc-btn').click();
		cy.get('.margin-40px-bottom > .card > .align-items-center > .col-md-5 > .card-list-img').click();
		cy.get('.controls > :nth-child(1) > :nth-child(1) > input').type(Cypress.env('name'));
		cy.get('.controls > :nth-child(1) > :nth-child(2) > input').type(Cypress.env('phone'));
		cy.get('.col-md-12 > input').type(Cypress.env('email'));
		cy.get('textarea').type(Cypress.env('message'));
	});

});
