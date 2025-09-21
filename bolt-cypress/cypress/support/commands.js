Cypress.Commands.add('goToFooter', () => {
  cy.scrollTo('bottom');
  cy.get('#footer').should('be.visible');
});

Cypress.Commands.add('clickFooterLinkSameOrigin', (linkText) => {
  cy.get('#footer')
    .contains('a', linkText)
    .should('be.visible')
    .click();
});

Cypress.Commands.add('validateSameOriginNavigation', (urlPath, expectedText) => {
  cy.url().should('include', urlPath);
  cy.contains(expectedText).should('be.visible');
});

Cypress.Commands.add('clickFooterLinkCrossOrigin', (linkText) => {
  cy.get('#footer')
    .contains('a', linkText)
    .should('be.visible')
    .then(($link) => {
      const originalHref = $link.attr('href');
      const secureHref = originalHref.replace('http://', 'https://');
      
      $link.attr('href', secureHref);
      $link.removeAttr('target');
      
      cy.wrap(secureHref).as('targetUrl');
      cy.wrap($link).click();
    });
});

Cypress.Commands.add('validateCrossOriginNavigation', (urlPath, expectedText) => {
  cy.url().should('include', urlPath);

  cy.get('@targetUrl').then((targetUrl) => {
    cy.origin(targetUrl, { args: { expectedText } }, ({ expectedText }) => {
      cy.contains(expectedText).should('be.visible');
    });
  });
});