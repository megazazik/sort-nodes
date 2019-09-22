/**
 * Sort nodes according to the HTML tree order
 *
 * @param nodes Array of nodes
 * @param [reverse=false] Need reverse order
 */
export function sortNodes(nodes: Element[], reverse = false) {
  return [...nodes].sort(reverse ? reverseCompareOrder : compareOrder);
}

export function reverseCompareOrder(a: Element, b: Element) {
  return compareOrder(a, b) * -1;
}

export function compareOrder(a: Element, b: Element) {
  const posCompare = a.compareDocumentPosition(b);

  if (posCompare & 4 || posCompare & 16) {
    // a < b
    return -1;
  } else if (posCompare & 2 || posCompare & 8) {
    // a > b
    return 1;
  } else if (posCompare & 1 || posCompare & 32) {
    throw "Cannot sort the given nodes.";
  } else {
    return 0;
  }
}
