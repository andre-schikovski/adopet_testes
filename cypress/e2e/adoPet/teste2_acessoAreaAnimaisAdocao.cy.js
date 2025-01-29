/*

Testes adoPET - Curso Cypress Alura
Data: 29/01/2025
Autor: André Luiz Schikovski - andreluiz.schikovski@gmail.com

*/


//Rotina de visualizar os animais para adoção.
describe('Validar acesso a página de animais para adoção', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');

    }) 
    
        it('Acesso a área de adoção de pets', () => {
            cy.get('.button').click();
            cy.contains('p','Quem ama adota!').should('be.visible');
                    
        })

        it('Retorno a página inicial do portal adoPet', () => {
            cy.get('.header__home').click();
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
            
                    
        })
                    
        
}) 


