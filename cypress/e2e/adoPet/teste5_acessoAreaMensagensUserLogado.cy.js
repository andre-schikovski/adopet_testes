/*

Testes adoPET - Curso Cypress Alura
Data: 03/02/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


//Rotina de visualizar os animais para adoção.
describe('Validar acesso a página de animais para adoção', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
        cy.get('[data-test="login-button"]').click();
        cy.contains('p','Ainda não tem conta?').should('be.visible');
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    }) 
    
        it('Acesso a área de Envio de Mensagens com usuário logado', () => {
            cy.get('.header__message').click();
            cy.contains('p','Ainda não tem conta?').should('be.visible');
                    
        })

        it('Retorno a página inicial do portal adoPet', () => {
            cy.get('.header__home').click();
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
            
                    
        })
                    
        
}) 