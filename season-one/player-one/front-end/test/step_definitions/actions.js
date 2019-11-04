import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^i click the "(.*)" button on the first "(\S+)" entry$/, (text, element) => {
    cy.get(element)
        .eq(0)
        .find('a')
        .click();
});
