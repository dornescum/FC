/* eslint-disable */
// / <reference types="cypress" />
import SearchDistrictLinks from "../support/PageObjects/SectorLinks";
import FreeSurveyors from "../support/PageObjects/FreeSurveyors";

describe('firme cadastru', () => {
	const district = new SearchDistrictLinks();
	const free =new FreeSurveyors();
	beforeEach(() => {
		cy.visit('/bucuresti');
		cy.viewport('macbook-16');
	});
	it('should have img width', function () {
		cy.viewport('macbook-16');
		cy.get('.margin-40px-bottom > .card > .align-items-center > .col-md-5').should('be.visible');
	});

	it('should have btn phone & click for info', function () {
		cy.viewport('macbook-16');
		cy.get('.surveyorPhoneBtn').click({force: true});
	});
	it('should have btn mail & click for info', function () {
		cy.viewport('macbook-16');
		cy.get('.surveyorEmailBtn').click({force: true});
	});
	it('should have btn info & go back', function () {
		cy.viewport('macbook-16');
		cy.get(':nth-child(3) > .card > .align-items-center > .col-md-7 > .card-body > .row > .butn').click({force: true});
		cy.go('back');
	});
	it('should have btn info & go back', function () {
		cy.viewport('macbook-16');
		cy.get('.row > :nth-child(1) > .font-size14').click({force: true});
		cy.go('back');
		cy.get('.cc-btn').click();
	});
	it('should action links & return', function () {
		district.districtAction(1);
		district.districtAction(2);
		district.districtAction(3);
		district.districtAction(4);
		district.districtAction(5);
		district.districtAction(6);
	});
	it('should check free for links & return', function () {
		free.freeAction(1);
		free.freeAction(5);
		free.freeAction(12);
		free.freeAction(15);
	});

});
