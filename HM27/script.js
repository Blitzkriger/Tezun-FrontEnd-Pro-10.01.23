class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    return 2023 - this.birthYear;
  }

  getGrade(grade) {
    this.grades.push(grade)
  }

  getAverageGrade() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    const nullIndex = this.attendance.findIndex(elem => elem === null);
    if (nullIndex !== -1) {
      this.attendance[nullIndex] = true;
    }
  }

  absent() {
    const nullIndex = this.attendance.findIndex(elem => elem === null);
    if (nullIndex !== -1) {
      this.attendance[nullIndex] = false;
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceCount = this.attendance.filter(Boolean).length;
    const attendanceRate = attendanceCount / this.attendance.length;

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодец!";
    } else if (averageGrade < 90 || attendanceRate < 0.9) {
      return "Хорошо, но можно лучше!";
    } else if (averageGrade < 90 && attendanceRate < 0.9){
      return "Редиска!";
    }
  }
}


const student1 = new Student('Денис', 'Тезун', 1991);

student1.present();
student1.absent();
student1.present();
student1.absent();
student1.present();

student1.getGrade(100);
student1.getGrade(90);
student1.getGrade(50);
student1.getGrade(85);
student1.getGrade(90);

console.log(student1.attendance);

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary());

const student2 = new Student('Льюис', 'Хэмильтон', 1985);

student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();

student2.getGrade(100);
student2.getGrade(90);
student2.getGrade(90);
student2.getGrade(95);
student2.getGrade(80);

console.log(student2.attendance);

console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.summary()); 


