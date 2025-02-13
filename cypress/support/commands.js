import produtosPage from "./page_objects/produtos.page";
import lojaPage from "./page_objects/loja.page";

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add("addProduto", (nomeProduto) => {
    produtosPage.visitarProduto(nomeProduto)
    produtosPage.addProdutoCarrinho('XS', 'Blue')
});

