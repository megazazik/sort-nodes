# sort-nodes

The packege to sort arrays of DOM nodes according to the HTML tree order. Based on [this code](https://gist.github.com/Justineo/ec7275cda82e986fc47b).

## Installation

```javascript
npm i sort-nodes
```

## sortNodes

The `sortNodes` function returns a new array sorted according to the HTML tree order. This function does not change an original array. You can pass `true` as the second argument if you need a reverse order.

```javascript
import { sortNodes } from "sort-nodes";

const sortedNodes = sortNodes(nodes);

// reverse order
const reversed = sortNodes(nodes, true);
```

## compareOrder

The `compareOrder` function compares order of nodes in the HTML tree. It can be used in the `sort` method of arrays.

```javascript
import { compareOrder } from "sort-nodes";

nodes.sort(compareOrder);
```

## reverseCompareOrder

This function is similar to `compareOrder` but it compares nodes in reverse order.

```javascript
import { reverseCompareOrder } from "sort-nodes";

nodes.sort(reverseCompareOrder);
```
