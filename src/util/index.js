// @flow
/* eslint no-param-reassign:off , forInStatement:off */
let queryObject = null;
/**
 * queryString
 * @param  {string} name
 * @return {string}
 */
export function queryString(name:string, location = window.location):string {
  if (queryObject != null) {
    return queryObject[name];
  }
  const { search } = location;
  if (search === '') {
    queryObject = {};
    return null;
  }
  const params = {};
  const q = search.substr(1);
  const andArr = q.split('&');
  andArr.forEach((d) => {
    const [key, value] = d.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  });

  queryObject = params;
  return queryObject[name];
}

/**
 * @param  {HTMLElement} el
 * @param  {string} className
 */
export function hasClass(el:HTMLElement, className:string):boolean {
  if (el.classList) {
    return el.classList.contains(className);
  }
  return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
}
/**
 * @param  {HTMLElement} el
 * @param  {string} className
 */
export function addClass(el:HTMLElement, className:string):void {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += ` ${className}`;
  }
}
/**
 * @param  {HTMLElement} el
 * @param  {string} className
 */
export function removeClass(el:HTMLElement, className:string):void {
  if (el.classList) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
    el.className = el.className.replace(reg, ' ');
  }
}


/**
 * get element position relative to the document;
 * @param {HTMLElement} ele
 * @return {{top:number,left:number}}
 */
export function getElementPosition(ele:HTMLElement):{top:number, left:number} {
  if (!ele) {
    return null;
  }
  const { body } = document;
  const box = ele.getBoundingClientRect();

  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = (box.top + scrollTop) - clientTop;
  const left = (box.left + scrollLeft) - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}
