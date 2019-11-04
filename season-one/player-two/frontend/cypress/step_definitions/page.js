import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(/^I go to the "([^"]*)" page$/, (uri) => {
  cy.visit(uri);
})

Then(/^I should see "([^"]*)" on the page$/, (text) => {
  cy.get('body').should('contain', text);
})

Then(/^I should see ([^"]*) items on the page$/, (total) => {
  cy.get('body mat-card').should('be.visible');
  cy.get('body mat-card').should('have.length', total);
})
