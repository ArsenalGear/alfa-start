describe('Remove me', () => {
    beforeEach(() => {
        cy.mockRequests();
        cy.viewport('samsung-s10');
    });

    it('Должна открыться главная страница', () => {
        cy.visit('/');
    });
});
