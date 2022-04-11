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

/**
 * 값이 들어와야 하는 곳에 if 문을 할당할 수 없다
 * (표현)식이란 연산의 결과가 값이 되는 것
 *
 * JSX는 Babel로 트랜스컴파일이 되면 어트리뷰트값이 객체로 변하기 때문에
 * 문을 넣을 수 없다, 값만 들어가야 한다
 * 따라서 React를 JSX로 작성할 때 for문이나 if문을 사용할 수 없다
 * 고차 함수, 논리 연산자를 사용해야 하는 이유
 */
