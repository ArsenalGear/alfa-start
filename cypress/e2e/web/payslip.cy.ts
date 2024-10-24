describe('Web', () => {
    beforeEach(() => {
        cy.mockRequests();
    });

    it('Детальная информация о выплатах за период', () => {
        cy.visit('/');
        cy.wait('@getPaymentPeriods');
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });

        cy.findByTestId('payment-periods-value').should('to.have.text', 'Март 2023');
        cy.findByTestId('payment-periods-forward-button').should('be.disabled');
        cy.findByTestId('payment-periods-back-button').should('be.enabled');

        cy.findByTestId('amount-plate').should(
            'have.text',
            '30 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
        cy.findByTestId('amount-details').should(
            'have.text',
            'Расчет за месяц15 007,85 ₽Март 2023Аванс15 181,15 ₽15.03.2023',
        );
        cy.get('#accrued').click();
        cy.findByTestId('amount-details').should(
            'have.text',
            'Оклад30 173,91 ₽Март 2023175,00 дней/часовРайонный коэффициент4 526,09 ₽Март 2023',
        );
        cy.get('#withHeld').click();
        cy.findByTestId('amount-details').should('have.text', 'НДФЛ 13%4 511,00 ₽Март 2023');
    });

    it('Можно переключать периоды', () => {
        cy.visit('/');
        cy.wait('@getPaymentPeriods');
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.findByTestId('payment-periods-value').should('to.have.text', 'Март 2023');
        cy.findByTestId('payment-periods-forward-button').should('be.disabled');
        cy.findByTestId('payment-periods-back-button').click();
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.findByTestId('payment-periods-value').should('to.have.text', 'Февраль 2023');
        cy.findByTestId('payment-periods-forward-button').should('be.enabled');
        cy.findByTestId('payment-periods-back-button').click();
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202301');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202301');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202301');
        });
        cy.findByTestId('payment-periods-value').should('to.have.text', 'Январь 2023');
        cy.findByTestId('payment-periods-back-button').click();
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202212');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202212');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202212');
        });
        cy.findByTestId('payment-periods-value').should('to.have.text', 'Декабрь 2022');
        cy.findByTestId('payment-periods-back-button').should('be.disabled');
        cy.findByTestId('payment-periods-forward-button')
            .click()
            .click()
            .click()
            .and('be.disabled');
        cy.findByTestId('payment-periods-value').should('to.have.text', 'Март 2023');
    });

    it('Есть данные только за один период выплат', () => {
        cy.intercept('GET', '/api/v1/sap/payment-periods', {
            paymentPeriods: [{ periodId: '202303', periodName: 'Март 2023' }],
        }).as('getPaymentPeriods');

        cy.visit('/');
        cy.wait('@getPaymentPeriods');
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202303');
        });

        cy.findByTestId('payment-periods-value').should('to.have.text', 'Март 2023');
        cy.findByTestId('payment-periods-back-button').should('be.disabled');
        cy.findByTestId('payment-periods-forward-button').should('be.disabled');
    });

    it('Нет данных по выплатам', () => {
        cy.intercept('GET', '/api/v1/sap/payment-periods', {
            paymentPeriods: [],
        }).as('getPaymentPeriods');

        cy.visit('/');
        cy.wait('@getPaymentPeriods');
        cy.findByTestId('info-page-content').should(
            'to.have.text',
            'Пока нет выплатПосмотрите календарь и узнаете, когда придёт зарплата',
        );
        cy.findByTestId('calendar-button').should('to.have.text', 'В календарь выплат').click();
        cy.get('@sp').should(
            'be.calledWithExactly',
            'trackStructEvent',
            'link',
            'click',
            'payment-calendar',
            null,
            null,
        );
        cy.findByTestId('calendar-side-panel').should('be.visible');
    });

    it('Ошибка при загрузке данных', () => {
        cy.intercept('GET', '/api/v1/sap/payment-periods', {
            fixture: 'server-error',
            statusCode: 500,
        }).as('getPaymentPeriods');

        cy.visit('/');
        cy.wait('@getPaymentPeriods');
        cy.findByTestId('payment-periods-back-button').should('be.disabled');
        cy.findByTestId('payment-periods-forward-button').should('be.disabled');
        cy.findByTestId('info-page-content').should(
            'to.have.text',
            'Не удалось загрузитьПопробуйте снова — должно сработать',
        );
        cy.findByTestId('retry-button').should('to.have.text', 'Попробовать ещё раз').click();
        cy.wait('@getPaymentPeriods');
    });
});
