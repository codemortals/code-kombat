import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^there is a "(\S+)" endpoint called "(\S+)" that will return "(\S+)"$/, (verb, endpoint, mockFile) => {

    cy.server();
    cy.fixture(`${ mockFile }.json`).as('responseJSON');

    cy.route({
        method: verb,
        url: endpoint,
        response: '@responseJSON',
        status: 200
    }).as('response');

});
