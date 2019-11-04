import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/there should be (\d+) "(\S+)" (?:entry|entries)/, (count, element) => {
    cy.get(element).should('have.length', count);
});
