/*

Testes adoPET - Curso Cypress Alura
Data: 04/02/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


//Rotina de visualizar os animais para adoção.
describe('Validar acesso a página de animais para adoção', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
        cy.get('[data-test="login-button"]').click();
        cy.contains('p','Ainda não tem conta?').should('be.visible');

    }) 
    
        it('Login com Usuário e senha NULL', () => {
            cy.get('[data-test="input-loginEmail"]').type('claudioulisses@email.com');
            cy.get('[data-test="input-loginPassword"]').type('teste@T123');
            cy.get('[data-test="submit-button"]').click();
            cy.get('.error').should('have.text', 'Falha no login. Consulte suas credenciais.');
            
        })

        it('Retorno a página inicial do portal adoPet', () => {
            cy.get('.header__home').click();
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
            
                    
        })
                    
        
}) 