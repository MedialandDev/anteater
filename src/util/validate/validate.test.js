
import { isTWIDCard, isEmail, isMobileNumber } from '.';

describe('validate', () => {
  test('isTWIDCard', () => {
    expect(isTWIDCard('a123456789')).toBeTruthy();
    expect(isTWIDCard('A102795683')).toBeTruthy();
    expect(isTWIDCard('A189062449')).toBeTruthy();
    expect(isTWIDCard('a123456789')).toBeTruthy();
    expect(isTWIDCard('A163470343')).toBeTruthy();
    expect(isTWIDCard('K141374967')).toBeTruthy();
    expect(isTWIDCard('F125251223')).toBeTruthy();
    expect(isTWIDCard('U120175800')).toBeTruthy();
    expect(isTWIDCard('R223167630')).toBeTruthy();
    expect(isTWIDCard('N279184664')).toBeTruthy();
    expect(isTWIDCard('N294257793')).toBeTruthy();
    expect(isTWIDCard('F284390945')).toBeTruthy();
    expect(isTWIDCard('Z269128930')).toBeTruthy();
    expect(isTWIDCard('N224511193')).toBeTruthy();

    expect(isTWIDCard('a1234567890000')).toBeFalsy();
    expect(isTWIDCard('D120891731')).toBeFalsy();
    expect(isTWIDCard('D120891731sdsfsdf')).toBeFalsy();
    expect(isTWIDCard('a123456780')).toBeFalsy();
    expect(isTWIDCard('F125251229')).toBeFalsy();
    expect(isTWIDCard('N224511191')).toBeFalsy();
    expect(isTWIDCard('N224511192')).toBeFalsy();
    expect(isTWIDCard('')).toBeFalsy();
    expect(isTWIDCard('1234567')).toBeFalsy();
    expect(isTWIDCard('o123456789')).toBeFalsy();
    expect(isTWIDCard()).toBeFalsy();
  });

  test('isEmail', () => {
    expect(isEmail('milkmidi@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi.test@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi+jp@gmail.com')).toBeTruthy();

    expect(isEmail('milkmidigmail.com')).toBeFalsy();
    expect(isEmail('milkmidigmail')).toBeFalsy();
    expect(isEmail()).toBeFalsy();
  });

  test('isMobileNumber', () => {
    expect(isMobileNumber('0912345678')).toBeTruthy();
    expect(isMobileNumber('0987654321')).toBeTruthy();
    expect(isMobileNumber('0945798438')).toBeTruthy();

    expect(isMobileNumber('987878777')).toBeFalsy();
    expect(isMobileNumber('milkmidi')).toBeFalsy();
    expect(isMobileNumber()).toBeFalsy();
  });
});
