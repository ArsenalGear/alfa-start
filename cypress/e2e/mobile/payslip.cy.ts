describe('Mobile', () => {
    beforeEach(() => {
        cy.mockRequests();
        cy.viewport('samsung-s10');
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
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.findByTestId('amount-plate-202303').should(
            'have.text',
            'Март 202330 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
        cy.findByTestId('amount-plate-202302').should(
            'have.text',
            'Февраль 202330 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
        cy.findByTestId('amount-details').should(
            'have.text',
            'Расчет за месяц15 007,85 ₽Март 2023Аванс15 181,15 ₽15.03.2023',
        );
        cy.findByTestId('amount-details-tabs').within(() => {
            cy.get('button').eq(1).click();
        });
        cy.findByTestId('amount-details').should(
            'have.text',
            'Оклад30 173,91 ₽Март 2023175,00 дней/часовРайонный коэффициент4 526,09 ₽Март 2023',
        );
        cy.findByTestId('amount-details-tabs').within(() => {
            cy.get('button').last().click();
        });
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
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.findByTestId('amount-plate-202303').should(
            'have.text',
            'Март 202330 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
        cy.findByTestId('amount-plate-202302').should(
            'have.text',
            'Февраль 202330 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
        cy.findByTestId('202302').scrollIntoView();
        cy.wait('@getPaidAmounts').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.wait('@getPaidAmountsDetails').then(({ request }) => {
            expect(request.query.periodId).equal('202302');
        });
        cy.wait('@getTotalAmount').then(({ request }) => {
            expect(request.query.periodId).equal('202301');
        });
        cy.findByTestId('amount-plate-202301').should(
            'have.text',
            'Январь 202330 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
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
        cy.findByTestId('amount-plate-202303').should(
            'have.text',
            'Март 202330 189,00 ₽Выплатили34 700,00 ₽Начислили4 511,00 ₽Удержали',
        );
        cy.findByTestId('amount-plate-202302').should('not.exist');
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
        cy.url().should('includes', '/calendar');
        cy.findByTestId('payment-calendar').should('be.visible');
    });

    it('Ошибка при загрузке данных', () => {
        cy.intercept('GET', '/api/v1/sap/payment-periods', {
            fixture: 'server-error',
            statusCode: 500,
        }).as('getPaymentPeriods');

        cy.visit('/');
        cy.wait('@getPaymentPeriods');
        cy.findByTestId('info-page-content').should(
            'to.have.text',
            'Не удалось загрузитьПопробуйте снова — должно сработать',
        );
        cy.findByTestId('retry-button').should('to.have.text', 'Попробовать ещё раз').click();
        cy.wait('@getPaymentPeriods');
    });
});
