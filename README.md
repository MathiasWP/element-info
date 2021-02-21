# element-info
_"Quickly obtain useful info about any element in the dom."_

## Usage

```html
<body>
    <div id="my-awesome-element">
        Wohoo!
    </div>
    <script src="index.js"></script> 
</body>
```

```js
import info from 'element-info';

const element = document.getElementById('my-awesome-element');
const elementInfo = info(element);

console.log(elementInfo);
// attributes: Array(0)
// bottom: 26
// children: Array(0)
// classes: Array(0)
// hasChildren: false
// height: 18
// id: "my-awesome-element"
// innerHTML: "↵  Wohoo!"
// left: 8
// mounted: true
// nextSibling: script
// nodeType: 1
// outerHTML: "<div id="my-awesome-element">↵  Woohoo!</div>"
// parent: body
// previousSibling: null
// right: 1432
// tag: "div"
// textContent: "↵  Wohoo!"
// top: 8
// width: 1424
```


## Installation

```js
npm install element-info
```

**OR**

```html
<script src="https://cdn.jsdelivr.net/npm/element-info@0.0.1"></script>
```