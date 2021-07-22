/// <reference types="cypress" />

import{When,Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'

// GET
When(`fazer uma requisição dos /usuarios cadastrados`, () => {
	ServeRest.get_all_users().then( get_users_response => {
        cy.wrap(get_users_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
	cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});

// POST
When(`fazer o cadastro do usuário do tipo {string}`, (user_type) => {
	ServeRest.post_user_by_type(user_type).then(post_user_response => {
        cy.wrap(post_user_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
	cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});

// PUT

When(`editar o usuário de id {string} do tipo {string}`, (_id, user_type) => {
	ServeRest.put_user_by_type(_id, user_type).then(put_user_response => {
        cy.wrap(put_user_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
	cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});

// DELETE
Given(`que o usuário não tenha um carrinho cadastrado`, () => {
	cy.StepNotImplemented()
});

When(`deletar o usuário de id {string}`, (_id) => {
	ServeRest.del_user(_id).then( del_user_response => {
        cy.wrap(del_user_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
    cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});