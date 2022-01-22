/* eslint-disable */
/// <reference types= "cypress" />

class FiscalHomePage {
	mainForm(name, email, phone, fax){
		// cy.get('[data-testid=company-input]').type(name);
		cy.get(':nth-child(1) > .form-control').select('Alba').click({force:true})
		cy.get('.col-md-2 > .butn').click({force:true})
	}
}
export default FiscalHomePage;
