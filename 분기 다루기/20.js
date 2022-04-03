/**
 * ReactDOM.render는 메소드, 함수이며 () 를 통해 메소드를 호출한다는 것을 알 수 있다
 * ()안에는 매개변수를 받거나 인수를 전달해줘야 한다
 */
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);


/**
 * 위에서 작성한 JSX가 Babel을 통해 JS로 이렇게 변환된다
 */
ReactDOM.render(
  React.createElement('div', { id: 'msg' }, 'Hello World!'),
  mountNode
);

// -----------------------------------------------------------------

// JSX
<div id={if (condition) { 'msg'}}>Hello world!</div>