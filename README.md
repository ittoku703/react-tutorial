# React Tutorial

client-side: `yarn start:client`
server-side:  `yarn start:server`

## MDN

URL: https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

### Javascript framework "big four"

- Ember
  - 2011 December released
  - 安定性、コミュニティサポート、およびいくつかの巧妙なコーディング原則により、依然としてかなりの人気を誇っています。
- Angular
  - 2016 september released (google)
  - 宣言型HTMLテンプレートを使用するコンポーネントベースのフレームワークです。ビルド時に、開発者に対して透過的に、フレームワークのコンパイラーはテンプレートを最適化されたJavaScript命令に変換します。
- Vue
  - 2014 released
  - AngularJSと同様に、独自のコードの一部でHTMLを拡張します。
- React
  - 2013 released (facebook)
  - React自体は技術的にはフレームワークではなく、UIコンポーネントをレンダリングするためのライブラリである。
  - ReactとReact Nativeを使えばモバイルアプリケーションを、ReactとReactDOMを使えばWebアプリケーションを作ることができます。

> [diagram of a React component's lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

> ReactではHelloWorldのようにパスカルケースを使う（javascriptでは キャメルケース: helloWorld）

### Handling events

- JavaScript

```javascript
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  alert("hi!");
});
```

- React

```react
<button
  type="button"
  onClick={() => alert("hi!")}
>
  Say hi!
</button>
```

**Handling form submission**

- React

```javascript
function handleSubmit(e) {
  e.preventDefault();
  alert('Hello, world!');
}
...
<form onSubmit={handleSubmit}>
```

**Handling form submission via callbacks**

- React

```react
function addTask(name) {
  alert(name);
}

<Form addTask={addTask} />
/* ----------------------------------- */

function handleSubmit(e) {
  e.preventDefault();
  props.addTask("Say Hello!");
}
```

- React.useState

```react
import React, {useState} from 'react';

const [names, setNames] = useState(null);

setNames('hoge');
console.log(names);  // hoge

setNames(...names, 'bar');
console.log(names);  // [hoge, bar]
```

- React.useEffect, React.useRef

```react
import React, {useEffect, useRef} from 'react';

const elementRef = useRef(null);

useEffect(() => {
  elementRef.current.focus();
}, Deps)

<ele ref={elementRef} />
```



