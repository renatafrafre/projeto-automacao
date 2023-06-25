describe('Adicionar produtos na solicitação de compra', () => {
  it('Adiciona três produtos na solicitação de compra', () => {
    cy.visit('http://localhost:5173/')

    cy.get("#name").type("Cabo de cobre")

    cy.get("#amount").type("{backspace}10")
    
    cy.contains("Add").click()

    cy.get("#name").type("Carregador usb-c")

    cy.get("#amount").type("{backspace}3")
    
    cy.contains("Add").click()

    cy.get("#name").type("Notebooks")

    cy.get("#amount").type("{backspace}25")
    
    cy.contains("Add").click()
  })
})

describe('Remover um produto na solicitação de compra', () => {
  it('Adiciona e remove um produto na solicitação de compra', () => {
    cy.visit('http://localhost:5173/')

    cy.get("#name").type("Caixa de som")

    cy.get("#amount").type("{backspace}2")
    
    cy.contains("Add").click()

    cy.get("#trash").click()
  })
})

describe('Realizar um pedido de compra', () => {
  it('Acessa, registra e envia um novo pedido de compra', () => {
    cy.visit('http://localhost:5173/')

    cy.contains("Pedido de compra").click()

    cy.get("#supplier").type("Useall")

    cy.get("#shipping").type("50")

    cy.get("#payMethod").type("À Vista")

    cy.get("#exitType").type("Matéria Prima")

    cy.contains("Enviar pedido").click()
  })
})

describe('Adicionar e remover itens antes do pedido de compra', () => {
  it('Cadastra um novo produto na solicitação de compra, deleta ele no pedido de compra e confirma o envio do pedido', () => {
    cy.visit('http://localhost:5173/')

    cy.contains("Pedido de compra").click()

    cy.get("#supplier").type("Useall")

    cy.get("#shipping").type("50")

    cy.get("#payMethod").type("À Vista")

    cy.get("#exitType").type("Matéria Prima")

    cy.contains("Enviar pedido").click()
  })
})

describe('Gera nota fiscal no fim de um pedido de compra', () => {
  it('Acessa, registra, envia um pedido de compra e gera a nota fiscal', () => {
    cy.visit('http://localhost:5173/')

    cy.contains("Pedido de compra").click()

    cy.get("#supplier").type("Useall")

    cy.get("#shipping").type("50")

    cy.get("#payMethod").type("À Vista")

    cy.get("#exitType").type("Matéria Prima")

    cy.contains("Enviar pedido").click()

    cy.contains("Gerar nota fiscal").click()
  })
})