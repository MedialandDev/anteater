// @flow
/* eslint no-useless-escape:off , max-len:off */

const MOBILE_PATTERN = /^\d{10}$/;
const EMAIL_PATTERN = /^([A-Za-z0-9_\-\.+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const TW_ID_PATTERN = /[A-Za-z]{1}(1|2)[0-9]{8}$/;
const TW_ID_MULTIPLY = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const TW_ID_MAP = {
  a: 10, b: 11, c: 12, d: 13, e: 14, f: 15, g: 16, h: 17, j: 18, k: 19, l: 20, m: 21, n: 22, p: 23, q: 24, r: 25, s: 26, t: 27, u: 28, v: 29, x: 30, y: 31, w: 32, z: 33, i: 34, o: 35,
};

/**
 * 是否為有效的 email 格式
 * @param {string} email
 * @return {boolean}
 */
export const isEmail = (email:string):boolean => (!email ? false : EMAIL_PATTERN.test(email));
/**
 * 是否為有效的手機/電話號碼
 * @param {string} mobileNumber
 * @return {boolean}
 */
export const isMobileNumber = (mobileNumber:string):boolean => (!mobileNumber ? false : MOBILE_PATTERN.test(mobileNumber.toString()));
/**
 * 是否為有效的台灣身份字號
 * @param {string} id
 */
export const isTWIDCard = (id:string):boolean => {
  if (!id || !TW_ID_PATTERN.test(id)) {
    return false;
  }
  const firstLetter = id.charAt(0).toLowerCase();
  const firstLetterToNumber = TW_ID_MAP[firstLetter];
  const lastNum = parseInt(id.charAt(9), 10);
  const nums = [
    Math.floor(firstLetterToNumber / 10),
    firstLetterToNumber % 10,
  ];
  let sum = 0;
  const { length } = TW_ID_MULTIPLY;
  for (let i = 0; i < length; i++) {
    let n;
    if (i < 2) {
      n = nums[i];
    } else {
      n = parseInt(id.charAt(i - 1), 10);
    }
    sum += n * TW_ID_MULTIPLY[i];
  }
  sum += lastNum;
  return sum % 10 === 0;
};
