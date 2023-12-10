describe('ngx-admin', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/pages/dashboard');
    })

    it('should check if logo is present', () => {
        cy.get('a').contains('ngx-admin')
            .should('be.visible');
    })

    it('should change mode to dark', () => {
        cy.get('button.select-button').contains('Light')
            .click();
        cy.get('nb-option[ng-reflect-value="dark"]').click();
        cy.get('nb-layout-header').should('have.css', 'background-color').and('eq', 'rgb(34, 43, 69)');
    })

    it('should change to a page layout list', () => {
        cy.get('a[title="Layout"]').click();
        cy.get('a[title="List"]').should('be.visible').click();
        cy.get('nb-card nb-card-header').contains('Users').should('be.visible');
    })

    it('should change traffic to month', () => {
        cy.get('nb-select button').contains('week').click();
        cy.get('nb-option[ng-reflect-value="month"]').click();
        cy.get('nb-list-item span').contains('Jan').should('be.visible');
    })

    it('should turn the light off', () => {
        cy.get('a[title="IoT Dashboard"]').click();
        cy.get('ngx-status-card[ng-reflect-title="Light"] div.icon.status-primary').click();
        cy.get('div.status.paragraph-2').contains('OFF').should('be.visible');
        cy.get('.scrollable-container').scrollTo(0, 1500);
    })

    it('should scroll to Room Management', () => {
        cy.get('a[title="IoT Dashboard"]').click();
        cy.get('nb-card-header').contains('Room Management').scrollIntoView({ offset: { top: -76, left: 0 } })
            .should('be.visible');
    })

    it('should put nick and last name into input', () => {
        cy.get('a[title="Forms"]').click();
        cy.get('a[title="Form Inputs"]').click();
        cy.get('nb-icon[icon="menu-2-outline"]').click();
        cy.get('input[placeholder="Nick"]').type("TestNick");
        cy.get('input[placeholder="Last Name"]').type("TestLastName");
        cy.get('input[placeholder="Nick"]').should('have.value', 'TestNick');
        cy.get('input[placeholder="Last Name"]').should('have.value', 'TestLastName');
    })

    it('should check success checkbox', () => {
        cy.get('a[title="Forms"]').click();
        cy.get('a[title="Form Inputs"]').click();
        cy.get('nb-icon[icon="menu-2-outline"]').click();
        cy.get('nb-checkbox.status-success').scrollIntoView().click();
        cy.get('nb-checkbox.status-success [type="checkbox"]').should('be.checked');
    })
})
