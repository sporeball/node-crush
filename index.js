/*
  node-crush
  copyright (c) 2022 sporeball
  original algorithm copyright (c) 2013 Aivo Paas
  MIT license
*/

/**
 * crush the JavaScript code given as input
 * @param {string} input
 * @returns {string}
 */
export default function crush(input) {
  let c, e, i, j, m, o, t, x;
  let B, M, N, O, Q, R, S, X;
  let res;

  // TODO: how on earth does all this actually work?
  Q = [];
  for (i = 1000; --i; i - 10 && i - 13 && i - 34 && i - 39 && i - 92 && Q.push(String.fromCharCode(i)));

  input = input.replace(/([\r\n]|^)\s*\/\/.*|[\r\n]+\s*/g, '').replace(/\\/g, '\\\\'),
    X = B = input.length / 2,
    O = m = '';

  for (S = encodeURI(input).replace(/%../g, 'i').length;; m = c + m) {
    for (M = N = e = c = 0, i = Q.length; !c && --i; !~input.indexOf(Q[i]) && (c = Q[i]));
    if (!c) break;
    if (O) {
      o = {};
      for (x in O)
        for (j = input.indexOf(x), o[x] = 0; ~j; o[x]++)
          j = input.indexOf(x, j + x.length);
      O = o;
    } else
      for (O = o = {}, t = 1; X; t++)
        for (X = i = 0; ++i < input.length - t;)
          if (!o[x = input.substr(j = i, t)])
            if (~(j = input.indexOf(x, j + t)))
              for (X = t, o[x] = 1; ~j; o[x]++) j = input.indexOf(x, j + t);
      for (x in O) {
        j = encodeURI(x).replace(/%../g, 'i').length;
        if (j = (R = O[x]) * j - j - (R + 1) * encodeURI(c).replace(/%../g, 'i').length)
          (j > M || j == M && R > N) && (M = j, N = R, e = x);
        if (j < 1) delete O[x]
      }
      o = {};
      for (x in O)
        o[x.split(e).join(c)] = 1;
      O = o;
      if (!e) break;
      input = input.split(e).join(c) + c + e
  }
  c = input.split('"').length < input.split("'").length ? (B = '"', /"/g) : (B = "'", /'/g);
  res = 'let _=' + B + input.replace(c, '\\' + B) + B + ';for(let Y of ' + B + m + B + ')with(_.split(Y))_=join(pop());eval(_)';

  return res;
}
