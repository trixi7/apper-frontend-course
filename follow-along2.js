class Student {
  constructor(studentName, studentGrade) {
    this.name = studentName
    this.grade = studentGrade
  }
  changeGrade(newGrade) {
    this.grade = newGrade
  }
  checkGrade() {
    console.log('${this.name}: ${this.grade}')
  }
}
const student1 = new Student('Joseph', 10)
student1.checkGrade() // 10
student1.changeGrade(20)
student1.checkGrade() // 20