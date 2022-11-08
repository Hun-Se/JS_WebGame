# JS_WebGame

## 1. 끝말잇기 게임

- 과제: 쿵쿵따 게임

## 2. 계산기 만들기

## 3. 숫자 야구 게임

### 배운점

- 무작위 숫자를 뽑는 방법

  1. Math.random(): 0이상 1미만의 수를 무작위로 생성한다.

  2. 1~9까지 무작위 숫자 뽑는 방법

  ```JavaScript
  Math.random() * 9 + 1
  ```

  3. 자연수로 출력하기 위하여 내림, 올림, 반올림을 해준다.

  - 내림: Math.floor()
  - 올림: Math.ceil()
  - 반올림: Math.round()

  4. **Math.random은 암호학적으로 완전한 무작위가 아니기 때문에 비밀번호를 생성하는것과 같은 보안과 관련된 작업에는 위험 할 수 있다.** 보안적인 것에 랜덤한 수를 출력하고 싶다면 `window.crypto.getRandomValues()`를 사용하면 된다.

- 배열과 객체
  단순한 숫자를 나열 할 때에는 배열을 사용하면 되고 값에 이름이 붙는다면 객체를 사용하면 된다. 배열과 객체 중 사용하는 것에 따라 프로그래밍 구조가 바뀌고 성능 또한 달라 질 수 있기 때문에 고려하면서 쓸것.

- 입력하는 input창이 있다면 click 이벤트말고 form 태그의 submit 이벤트리스너를 달아서 사용하면 enter를 누를 때에도 값을 제출 할 수 있다.

- event.preventDefault() : 태그의 기본 동작을 취소하는 코드. 해당 예제에서는 form이 기본적으로 submit 이벤트가 발생하면 브라우져가 새로고침되면서 초기화상태가 된다. 그래서 event.preventDefault를 사용하여 submit의 기본동작을 취소했다.

- alert 함수는 undefined를 반환한다. undefined은 조건문에서 false로 처리한다.

- includes(): 배열 안에 해당 값이 존재하는지 알려주는 함수이다. true / false

- new Set(): Set은 중복을 허용하지 않는 특수한 배열이다. 예를 들어 `new Set("1234")`를 입력하면 Set 배열에는 1,2,3만 입력된다. 따라서 배열 입력 시 중복되는 값이 있다면 배열의 길이가 줄어들기 때문에 중복값이 있는지 없는지를 확인 할 수 있다. Set 요소 개수를 구할 때에는 .size를 사용한다는 특징이 있다(new Set().size)

- HTML으로도 태그 속성 값으로 입력값 검사를 할 수 있다.
  ```
  <input required type = "text" minlength = "4" maxlength = "4" pattern = "^(?!.*(.).*\1)\d{4}$" />
  ```

## 4. 로또추첨기

### 배운점

- 피셔-예이츠 알고리즘: 숫자를 무작위로 섞어서 무작귀 인덱스를 하나 뽑은 후, 그에 해당되는 요소를 새로움 배열로 옮기고 이는 무작위인 새배열이 만들어진다.

- 정렬 알고리즘:

  1. 선택정렬(Section sort)

  - 전체 숫자를 흝어보면서 가장 작은 숫자를 하나 가져오고, 다시 전체를 흝고 그 다음 작은 숫자를 가져오는 정렬 방식
  - 직관적인 방법이지만 효율적이지 못하다(sort 메서드에 비해)

  2. sort() : 오름차순, 내림차순을 할 수 있는 메서드

  - 오름차순: sort((a,b) => a-b); a-b의 값이 0보다 크므로 오름차순 으로 정렬되고
  - 내림차순: sort((a,b) => b-a);, b-a의 값이 0보다 크면 내림차순 으로 정렬된다.

  3. setTimeout

  - 일정시간 이후 setTimeout 함수안의 함수 또는 메서드를 실행 할 수 있게 해주는 비동기식 call back 함수

  ```JavaScript
  // 3초 있다가 hello 콘솔에 출력
  setTimeout(() => {
    console.log("hello");
  }, 3000)
  ```

  - 만약 setTimeout 내부의 함수가 하나이고 인수가 없는 경우에는 다음과 같이 줄여 쓸 수 있다.

  ```JavaScript
  // 3초 있다가 sayHello 함수 실행
  setTimeout(sayHello(),3000);
  ```

  5. 가위바위보게임

  - setInterval: 특정 주기마다 반복되는 함수를 실행

  ```JavaScript
  setInterval(() => {
    원하는함수
  }, 1000)
  ```

  - clearInterval : setInterval로 실행시켰던 함수를 취소

  - removeEventListener: addEventListener로 연결한 함수를 제거
