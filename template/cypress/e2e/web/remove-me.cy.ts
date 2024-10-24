describe('Remove me', () => {
    beforeEach(() => {
        cy.mockRequests();
    });

    it('Должна открыться главная страница', () => {
        cy.visit('/');
    });
});
