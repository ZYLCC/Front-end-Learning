class Person {
  // 成员属性: 声明成员属性
  name!: string   // 断言，不用担心为空
  age: number

  constructor(name: string, age: number) {
    // this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating")
  }

  running() {
    console.log(this.name + " running")
  }
}

// 实例对象: instance
const p1 = new Person("why", 18)
const p2 = new Person("kobe", 30)

console.log(p1.name, p2.age)

export {}









