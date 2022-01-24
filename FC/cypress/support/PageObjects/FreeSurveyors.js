/* eslint-disable */

/// <reference types= "cypress" />

class SearchFreeLinks {
	// todo forEach
	freeAction(num) {
		cy.get(`.row > :nth-child(${num}) > .font-size14`).wait(1000).click({force: true})
		cy.go('back');
	}
}

export default SearchFreeLinks;
