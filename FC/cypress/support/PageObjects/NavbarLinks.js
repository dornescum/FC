/* eslint-disable */

/// <reference types= "cypress" />

class NavbarLinks {
	navbarAction() {
		// get the first element
		// cypress !== hover
		cy.get(':nth-child(1) > [href="javascript:void(0)"]').trigger('mouseover').wait(1000);
		cy.get(':nth-child(1) > [href="javascript:void(0)"]').should('be.visible');
		// localizare
		cy.get('#nav > :nth-child(2) > a').click();
		cy.go('back');
		// cy.visit('/');
		// info
		cy.get(':nth-child(3) > [href="javascript:void(0)"]').should('be.visible');
		// fixme link
		// cy.get(':nth-child(3) > [href="javascript:void(0)"]').children('a');
		// despre
		cy.get(':nth-child(4) > [href="javascript:void(0)"]').should('be.visible');
		// contact
		cy.get('#nav > :nth-child(5) > a').click();
		cy.go('back');
		// search icon
		cy.get('.xs-padding-10px-top > a > .fas').click();
		cy.go('back');
		// login btn
		cy.get('#loginBtn').click();
		cy.go('back');
	}
}

export default NavbarLinks;
