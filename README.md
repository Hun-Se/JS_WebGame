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

### 텍스트 RPG

- 깊은복사: JSON.parse(JSON.stringify(list[])) 메서드를 사용하여 깊은복사를 할 수 있다.

```JavaScript
monster = JSON.parse(
      JSON.stringify(
        monsterList[0]
      )
    );

```

- 깊은복사를한 변수는 새로 객체를 만든다. 따라서 깊은 복사한 객체를 변경하더라도 기존의 객체는 변하지 않는다.

- 일반적인 변수 대입은 기존 객체를 참조한다. 따라서 대입한 변수의 객체를 변경하면 기존 객체도 변경이된다.

- 객체를 변경시키지 않고 재사용 하기 위해선 깊은 복사를 이용해보자. 다만 성능이 느리고 함수나 Math, Data와 같은 객체는 복사 할 수 없다. 따라서 간단한 객체에는 사용해도 상관 없지만 실무에서는 lodash와 같은 라이브러리를 사용한다.

- 문자열, boolean, 숫자 같은 자료형은 변수에 대입하는 것으로도 복사 할 수 있다.

- 내부에 객체가 들어있지 않은 배열은 slice 메서드를 통해 복사 할 수 있다.

```JavaScript
// lodash 설치
npm install lodash

import _ from 'lodash'

monster = _.cloneDeep(monsterList[0]);
```

- 얕은복사: 얕은 복사는 중첩된 객체가 있을 때 가장 바깥쪽의 객체만 복사되고, 내부 객체는 참조 관계를 유지하는 복사를 의미한다.

```JavaScript
const 얕은배열복사 = [...array];
const 얕은객체복사 = {...obj};
```

- window : 브라우져를 가르키는 객체이다. document 객체나 console 객체도 실제로는 window.document, window.console 인데 평소에는 window를 생략하고 document와 console만 사용한다.

- this: 상황에 따라 다른 값을 가진다. 기본적으로는 window를 가르킨다.
  1. 객체를 통해 this를 사용하면 this가 해당 객체를 가르킨다.
  2. 특정 메서드는 콜백 함수의 this를 바꾼다. ex) addEventListener
  3. this가 바뀌는 것을 원치 않는다면 함수 선언문 대신 화살표 함수를 사용하자.
