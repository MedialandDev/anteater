// @flow
export const share = (text:string) => window.open(`http://line.naver.jp/R/msg/text/?${encodeURIComponent(text)}`);
