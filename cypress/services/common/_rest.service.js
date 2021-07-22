export default class Rest{
    static httpRequestWithBody(methodd, endpoint, body, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: methodd,
            url: endpoint,
            body: body,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })

    }    
    static httpRequestWithoutBody(methodd, endpoint, failOnStatusCode = false, timeout = Cypress.env('global_timeout')){
        return cy.request({
            method: methodd,
            url: endpoint,
            failOnStatusCode: failOnStatusCode,
            timeout: timeout
        })    

    }    

}


