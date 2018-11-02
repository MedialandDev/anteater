/**
 * url only
 * @param {string} url
 */
export const share = (url:string) => {
  window.open(`https://lineit.line.me/share/ui?url=${encodeURIComponent(url)}`);
};

export const shareMobile = (url:string) => {
  window.open(`line://msg/text/${encodeURIComponent(url)}`, '_blank');
};

/**
 * mobile only
 * 桌機會產生兩次網址和 meta
 * line 修好了，所以可以用這個了
 */
export const shareText = (text:string) => {
  window.open(`http://line.naver.jp/R/msg/text/?${encodeURIComponent(text)}`);
};

