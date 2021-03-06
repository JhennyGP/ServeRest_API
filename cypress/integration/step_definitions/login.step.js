/// <reference types="cypress" />

import{When,Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'

When(`fazer login com um usuario do tipo {string}`, (login_type) => {
	ServeRest.post_login_by_type(login_type).then(login_post_response => {
        console.log(login_post_response)
        cy.wrap(login_post_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
    cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});