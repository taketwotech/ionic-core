import { ROUTER_INTENT_FORWARD } from './constants';
// Join the non empty segments with "/".
export const generatePath = (segments) => {
  const path = segments
    .filter(s => s.length > 0)
    .join('/');
  return '/' + path;
};
const generateUrl = (segments, useHash, queryString) => {
  let url = generatePath(segments);
  if (useHash) {
    url = '#' + url;
  }
  if (queryString !== undefined) {
    url += '?' + queryString;
  }
  return url;
};
export const writePath = (history, root, useHash, path, direction, state, queryString) => {
  const url = generateUrl([...parsePath(root).segments, ...path], useHash, queryString);
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, '', url);
  }
  else {
    history.replaceState(state, '', url);
  }
};
export const chainToPath = (chain) => {
  const path = [];
  for (const route of chain) {
    for (const segment of route.path) {
      if (segment[0] === ':') {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        path.push(param);
      }
      else if (segment !== '') {
        path.push(segment);
      }
    }
  }
  return path;
};
// Remove the prefix segments from the path segments.
//
// Return:
// - null when the path segments do not start with the passed prefix,
// - the path segments after the prefix otherwise.
const removePrefix = (prefix, path) => {
  if (prefix.length > path.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === '') {
    return path;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== path[i]) {
      return null;
    }
  }
  if (path.length === prefix.length) {
    return [''];
  }
  return path.slice(prefix.length);
};
export const readPath = (loc, root, useHash) => {
  const prefix = parsePath(root).segments;
  const pathname = useHash ? loc.hash.slice(1) : loc.pathname;
  const path = parsePath(pathname).segments;
  return removePrefix(prefix, path);
};
// Parses the path to:
// - segments an array of '/' separated parts,
// - queryString (undefined when no query string).
export const parsePath = (path) => {
  let segments = [''];
  let queryString;
  if (path != null) {
    const qsStart = path.indexOf('?');
    if (qsStart > -1) {
      queryString = path.substr(qsStart + 1);
      path = path.substr(0, qsStart);
    }
    segments = path.split('/')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    if (segments.length === 0) {
      segments = [''];
    }
  }
  return { segments, queryString };
};
