import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  it('invalidNumber',  () => {
    const result = service.testCreditCard('4578234517851245', 'visa');
    const expectedResult = {
      isValid: false,
      message: 'Credit card number is invalid'
    };

    expect(result).toEqual(expectedResult);
  });

  it('validFormat',  () => {
    const result = service.testCreditCard('5500 0000 0000 0004', 'MasterCard');
    const expectedResult = {
      isValid: true,
      message: 'Credit card has a valid format'
    };

    expect(result).toEqual(expectedResult);
  });

  it('unknownType',  () => {
    const result = service.testCreditCard('4903 0100 0000 0009', 'JSB');
    const expectedResult = {
      isValid: false,
      message: 'Unknown card type'
    };

    expect(result).toEqual(expectedResult);
  });

  it('invalidFormat',  () => {
    const result = service.testCreditCard('3852/0000/0232/3787', 'DinersClub');
    const expectedResult = {
      isValid: false,
      message: 'Credit card number is in invalid format'
    };

    expect(result).toEqual(expectedResult);
  });

  it('inappropriateNumberOfDigits',  () => {
    const result = service.testCreditCard('3400 0000 0000 00', 'AmEx');
    const expectedResult = {
      isValid: false,
      message: 'Credit card number has an inappropriate number of digits'
    };

    expect(result).toEqual(expectedResult);
  });

  it('scamAttempt',  () => {
    const result = service.testCreditCard('5490 9977 7109 2064', 'MasterCard');
    const expectedResult = {
      isValid: false,
      message: 'Warning! This credit card number is associated with a scam attempt'
    };

    expect(result).toEqual(expectedResult);
  });

  it('invalidNumber',  () => {
    const result = service.testCreditCard('3030 1111 1111 1111', 'Visa');
    const expectedResult = {
      isValid: false,
      message: 'Credit card number is invalid'
    };

    expect(result).toEqual(expectedResult);
  });

});
