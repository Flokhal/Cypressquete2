beforeEach(() => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa="accept-cta"]').click()
})

describe('Authentification', () => {
    
        it('should succeed', () => {
            
            cy.get('#signin-email').type("julesvernier@yopmail.com")
            cy.get('#signin-password').type("Sousmar1")
            cy.get('[data-qa=signin-submit-button]').click()
            cy.url().should('contain', 'orders')
            
        });
        it('should not succeed', () => {
           
            cy.get('#signin-email').type("wrongguy@yolo.com")
            cy.get('#signin-password').type("wrongpassword")
            cy.get('[data-qa=signin-submit-button]').click()
            cy.get('p').should('have.class', 'text-red-700 mt-4 font-body text-2 leading-2 font-light').should('contain', "Informations d'identification erronées")
            cy.url().should('contain', 'register')
            
        })
        
    })
    