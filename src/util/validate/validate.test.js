
import { isIdentityInTaiwan, isEmail, isMobileNumber } from './';

describe('validate', () => {
  test('isIdentityInTaiwan', () => {
    expect(isIdentityInTaiwan('a123456789')).toBeTruthy();
    expect(isIdentityInTaiwan('A102795683')).toBeTruthy();
    expect(isIdentityInTaiwan('A189062449')).toBeTruthy();
    expect(isIdentityInTaiwan('a123456789')).toBeTruthy();
    expect(isIdentityInTaiwan('A163470343')).toBeTruthy();
    expect(isIdentityInTaiwan('K141374967')).toBeTruthy();
    expect(isIdentityInTaiwan('F125251223')).toBeTruthy();
    expect(isIdentityInTaiwan('U120175800')).toBeTruthy();
    expect(isIdentityInTaiwan('R223167630')).toBeTruthy();
    expect(isIdentityInTaiwan('N279184664')).toBeTruthy();
    expect(isIdentityInTaiwan('N294257793')).toBeTruthy();
    expect(isIdentityInTaiwan('F284390945')).toBeTruthy();
    expect(isIdentityInTaiwan('Z269128930')).toBeTruthy();
    expect(isIdentityInTaiwan('N224511193')).toBeTruthy();

    expect(isIdentityInTaiwan('D120891731')).toBeFalsy();
    expect(isIdentityInTaiwan('a123456780')).toBeFalsy();
    expect(isIdentityInTaiwan('F125251229')).toBeFalsy();
    expect(isIdentityInTaiwan('N224511191')).toBeFalsy();
    expect(isIdentityInTaiwan('N224511192')).toBeFalsy();
    expect(isIdentityInTaiwan('')).toBeFalsy();
    expect(isIdentityInTaiwan('1234567')).toBeFalsy();
    expect(isIdentityInTaiwan('o123456789')).toBeFalsy();
    expect(isIdentityInTaiwan()).toBeFalsy();
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
