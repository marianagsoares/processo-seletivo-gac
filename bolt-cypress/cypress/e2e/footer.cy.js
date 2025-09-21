describe('Rodapé', () => {
  const footerTestData = {
    crossOriginLinks: [
      {
        id: "CT002",
        description: "Deve redirecionar para 'Grupo Adriano Cobuccio' quando clicar no link da seção Institucional",
        linkText: "Grupo Adriano Cobuccio",
        urlPath: "grupoadrianocobuccio",
        expectedText: "Grupo Adriano Cobuccio"
      },
      {
        id: "CT003",
        description: "Verificar o início do atendimento do usuário com o suporte 'Bolt'",
        linkText: "Atendimento online",
        urlPath: "chatbrasilcard.grupoadrianocobuccio",
        expectedText: "Seja bem vindo(a) ao atendimento Bolt!"
      },
    ],
    sameOriginLinks: [
      {
        id: "CT001",
        description: "Deve redirecionar para o informativo 'Sobre a Bolt' na seção 'Institucional' do rodapé",
        linkText: "Sobre a Bolt",
        urlPath: "#about",
        expectedText: "Sobre a Bolt"
      },
      {
        id: "CT004",
        description: "Deve redirecionar para a guia 'Fale conosco' quando clicar no link 'Ouvidoria'",
        linkText: "Ouvidoria",
        urlPath: "publico/faleConosco",
        expectedText: "Fale Conosco"
      },
      {
        id: "CT006",
        description: "Deve redirecionar para a guia 'Fale conosco' quando clicar no link 'Contato'",
        linkText: "Contato",
        urlPath: "publico/faleConosco",
        expectedText: "Fale Conosco"
      },
      {
        id: "CT007",
        description: "Deve redirecionar para a página 'Política de Segurança Cibernética' quando clicar no link 'Política de Segurança Cibernética'",
        linkText: "Política de Segurança Cibernética",
        urlPath: "politica_seguranca",
        expectedText: "Política de Segurança Cibernética"
      },
      {
        id: "CT009",
        description: "Deve redirecionar para a página 'Política e Normas Internas de PLD' quando clicar no lin 'Política e Normas Internas de PLD'",
        linkText: "Política e Normas Internas de PLD",
        urlPath: "politicas_internas",
        expectedText: "Política e Normas Internas de PLD"
      }
    ],
    pdfDocuments: [
      {
        id: "CT008",
        description: "Verificar se o PDF 'Política de Segurança Cibernética' está disponível na página",
        linkText: "Política de Segurança Cibernética",
        urlPath: "politica_seguranca",
        expectedText: "Política de Segurança Cibernética"
      },
      {
        id: "CT010",
        description: "Verificar se o PDF 'Política e Normas Internas de PLD' está disponível na página",
        linkText: "Política e Normas Internas de PLD",
        urlPath: "politicas_internas",
        expectedText: "Política e Normas Internas de PLD"
      }
    ]
  };

  beforeEach(() => {
    cy.visit('/');
    cy.get('body').should('be.visible');
    cy.goToFooter();
  });
  
  describe('Seção Institucional', () => {
    it('CT005 - Verificar se todos os meios de contato na guia "Fale conosco" iniciam o atendimento ao cliente', () => {
      const targetPage = 'publico/faleConosco';
      const expectedContent = "Fale Conosco";

      cy.visit(`/${targetPage}`);
      cy.contains(expectedContent).should('be.visible');
    });

    describe('Links Internos (Same-Origin)', () => {
      footerTestData.sameOriginLinks.forEach(testCase => {
        it(`${testCase.id} - ${testCase.description}`, () => {
          cy.clickFooterLinkSameOrigin(testCase.linkText);
          cy.validateSameOriginNavigation(testCase.urlPath, testCase.expectedText);
        });
      });
    });

    describe('Documentos PDF', () => {
      footerTestData.pdfDocuments.forEach(testCase => {
        it(`${testCase.id} - ${testCase.description}`, () => {
          cy.clickFooterLinkSameOrigin(testCase.linkText);
          cy.validateSameOriginNavigation(testCase.urlPath, testCase.expectedText);
          
          cy.get('embed[type="application/pdf"]').should('be.visible');
        });
      });
    });

    describe('Links Externos (Cross-Origin)', () => {
      footerTestData.crossOriginLinks.forEach(testCase => {
        it(`${testCase.id} - ${testCase.description}`, () => {
          cy.clickFooterLinkCrossOrigin(testCase.linkText);
          cy.validateCrossOriginNavigation(testCase.urlPath, testCase.expectedText);
        });
      });
    });
  });
});