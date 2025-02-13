/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
import lojaPage from "../support/page_objects/loja.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  before(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
    cy.login('Testudo.Test@teste.com', 'Teste@123')

  });

  it('Buscar os produto, preencher as opções e adicionar ao carrinho', () => {
   cy.addProduto('Atlas Fitness Tank')
   cy.addProduto('Helena Hooded Fleece')
   cy.addProduto('Eos V-Neck Hoodie')
   cy.addProduto('Atomic Endurance Running Tee (V-neck)')
   cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
   cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
  lojaPage.preencherCheckout()
  
  });
})