/* eslint-disable */
/// <reference types= "cypress" />

class SearchDistrictLinks {
	districtAction(num) {
		cy.get(`:nth-child(${num}) > .card > .font-size14`).click({force:true});
		cy.go('back');
	}
}

export default SearchDistrictLinks;
