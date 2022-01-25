/* eslint-disable */
/// <reference types= "cypress" />

class footerLinks {
	footerAction(){
		cy.get('.col-center > :nth-child(1) > a').click();
		cy.visit('/');
		cy.get('.col-center > :nth-child(2) > a').click();
		cy.visit('/');
		cy.get('.col-center > :nth-child(3) > a').click();
		cy.visit('/');
		cy.get('.col-center > :nth-child(4) > a').click();
		cy.visit('/');
		cy.get('.col-center > :nth-child(5) > a').click();
		cy.visit('/');
// =========
		cy.get(':nth-child(2) > .col-list > :nth-child(1) > a').click();
		cy.visit('/');
		cy.get(':nth-child(2) > .col-list > :nth-child(2) > a').click();
		cy.visit('/');
		cy.get(':nth-child(2) > .col-list > :nth-child(3) > a').click();
		cy.visit('/');
		cy.get(':nth-child(2) > .col-list > :nth-child(4) > a').click();
		cy.visit('/');
		cy.get(':nth-child(2) > .col-list > :nth-child(5) > a').click();
		cy.visit('/');
		// =========
		// ancpi
		cy.get(':nth-child(3) > .col-list > :nth-child(1) > a').click();
		cy.visit('/');
		// ancpi harta
		cy.get(':nth-child(3) > .col-list > :nth-child(2) > a').click();
		cy.visit('/');
		// extras carte funciara
		cy.get(':nth-child(3) > .col-list > :nth-child(3) > a').click();
		cy.visit('/');
		// topo online
		cy.get(':nth-child(3) > .col-list > :nth-child(4) > a').click({force:true});
		cy.visit('/');
		// statii permanente gps
		cy.get(':nth-child(3) > .col-list > :nth-child(5) > a').click();
		cy.visit('/');

	}
}
export default footerLinks;
