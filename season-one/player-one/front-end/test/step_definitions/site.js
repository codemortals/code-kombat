import { When } from 'cypress-cucumber-preprocessor/steps';

When(/i open the blog/, () => {
    cy.visit('/');
});
