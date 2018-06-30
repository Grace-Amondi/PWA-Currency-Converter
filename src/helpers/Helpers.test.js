import * as helpers from './index';

describe('Helpers', () => {
    it ('should validate currency input correctly', () => {
        const currencyInput1 = '.4234';
        const currencyInput2 = '324';
        const currencyInput3 = '235.23';
        const currencyInput4 = '234.423.423';
        const currencyInput5 = '234wrong';

        expect(helpers.validateCurrencyInput(currencyInput1)).toEqual('4234');
        expect(helpers.validateCurrencyInput(currencyInput2)).toEqual('324');
        expect(helpers.validateCurrencyInput(currencyInput3)).toEqual('235.23');
        expect(helpers.validateCurrencyInput(currencyInput4)).toEqual('234.423');
        expect(helpers.validateCurrencyInput(currencyInput5)).toEqual('234');
    });

    it('should get yesterday date correctly', () => {
        const todayDate = '2017-04-28';
        const todayDate2 = '2017-05-01';

        expect(helpers.getYesterdayDate(todayDate)).toEqual('2017-04-27');
        expect(helpers.getYesterdayDate(todayDate2)).toEqual('2017-04-30');
    });

    it('should transform data correctly', () => {
        const rawData = {
            todayData: { base: 'EUR', date: '2017-04-28', rates: { USD: 1.1 } },
            yesterdayData: { base: 'EUR', date: '2017-04-27', rates: { USD: 1.2 } }
        };
        const normalizedData = {
            base: 'EUR',
            date: '2017-04-28',
            yesterdayDate: '2017-04-27',
            rates: [{ currency: 'USD', rate: 1.1, yesterdayRate: 1.2 }]
        };

        expect(helpers.transformData(rawData)).toEqual(normalizedData);
    });
});
