"use script"

class Student {
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
   }
   mark = [5, 4, 4, 5];
   bolean = false;
   get getInfo() {
      return `Студент ${this.course} курсу університету ${this.university},${this.fullName} `
   }
   get marks() {
      if (this.bolean) {
         return null
      } else
         return this.mark;
   }
   set marks(rating) {
      if (this.bolean) {
         null
      } else
         this.mark.push(rating)
   }
   getAverageMark() {
      return this.mark.reduce((acc, cur) => (acc + cur)) / this.mark.length;
   }
   dismiss() {
      this.bolean = true;
   }
   recover() {
      this.bolean = false;
   }
}

class BudgetStudent extends Student {
   constructor(university, course, fullName) {
      super(university, course, fullName)

      this.getScholarship = function getScholarship() {
         this.avarageMark = this.getAverageMark();
         this.bolean = this.bolean;
         setInterval(() => {
            if (this.avarageMark >= 4 && !this.bolean) {
               console.log('Ви отримали 1400 грн. стипендії');
            } else {
               console.log('Ви не отримали 1400 грн. стипендії');
            }

         }, 30_000)
      }
   }
}
const illia = new BudgetStudent('NLTUU', 1, "Illia Turovskyi")
console.log(illia.getInfo)
illia.marks = 5
console.log(illia.marks)
console.log(illia.getAverageMark())
illia.dismiss();
console.log(illia.marks)
illia.recover();
console.log(illia.marks)