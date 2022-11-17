// 사용자 이름, 나이
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getname() {
    console.log(this.name);
  }

  getage() {
    console.log(this.age);
  }
}

// 자기소개
class Developer extends Human {
  constructor(name, age, stack) {
    super(name, age);
    this.stack = stack;
  }

  getintroduce() {
    this.getname();
    this.getage();
    console.log(this.stack);
  }
}
