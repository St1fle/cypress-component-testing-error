import { mountCallback } from '@cypress/vue';
import Button from './Button.vue';
import { ButtonProperties } from './ButtonProperties';

describe(Button.name, () => {
  const title = 'button title';
  const disabled = true;

  const properties: ButtonProperties = new ButtonProperties({
    title,
    disabled,
  });

  beforeEach(
    mountCallback(Button, {
      propsData: properties,
    }),
  );

  it('should have title, type and be disabled', () => {
    cy.get('.button__control').should('contain.text', title);

    cy.get('.button__control--disabled').should('be.visible');
    cy.get('.button').should('be.disabled');
  });
});
