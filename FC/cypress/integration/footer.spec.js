/* eslint-disable */
// / <reference types="cypress" />

import FooterLinks from "../support/PageObjects/FooterLinks";

describe('firme cadastru', ()=>{
	const footer = new FooterLinks();
	beforeEach(() => {
		cy.visit('/');
	});

	it('should have links inside website & return home', function () {
		cy.viewport('macbook-16')
		footer.footerAction();
		cy.get('.cc-btn').click();
	});
})
