//오브젝트(객체) 생성
const person = {
  firstName: "성우",
  lastName: "우",
  age: 30,
};

//오브젝트(객체) 속성 접근

console.log(person.firstName);
console.log(person["lastName"]);

//오브젝트(객체) 추가 속성 정의
person.age = 31;
person.email = "swpheus1@gmail.com";
//오브젝트(객체) 변경
person["lastName"] = "Smith";

console.log(person);

//오브젝트(객체) 삭제
delete person.age;
console.log(person);

//오브젝트(객체) 안에 속성이 있는지 조회하기
if ("email" in person) {
  console.log("객체안에서 Email 속성 조회");
} else {
  console.log("객체안에서 Email 속성 없음");
}

//객체 안에서 메소드 정의

const car = {
  make: "bents",
  model: "BMW",
  start: function () {
    console.log("엔진 시작");
  },
  stop() {
    console.log("엔진 스탑");
  },
};

car.start();
car.stop();

//반목문을 이용한 오브젝트(객체)속성
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys 사용
const keys = Object.keys(person);
for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}

//객체 비구조화 할당

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// 클래스 선언
class Animal {
  // 생성자(constructor) 메서드
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  // 메서드
  makeSound() {
    return `${this.name} 가 ${this.sound} 울어요.`;
  }
}

const cat = new Animal("고양이", "야옹");
const dog = new Animal("강아지", "멍멍");

console.log(cat.makeSound());
console.log(dog.makeSound());

// 상속을 위한 클래스 선언
class Bird extends Animal {
  // Dog 클래스의 생성자
  constructor(name, sound, breed) {
    // 부모 클래스의 생성자 호출
    super(name, sound);
    // Dog 클래스의 속성
    this.breed = breed;
  }

  // Dog 클래스의 메서드
  tweet() {
    console.log(`${this.name}가 노래를 불러요`);
  }
}

// Dog 클래스의 인스턴스 생성
const parrot = new Bird("앵무", "tweet", "parrot");

// Dog 클래스의 메서드 호출
console.log(parrot.makeSound()); // 상속된 메서드 호출: 앵무가 tweet 울어요
parrot.tweet(); // Dog 클래스의 메서드 호출: 앵무가 노래를 불러요
