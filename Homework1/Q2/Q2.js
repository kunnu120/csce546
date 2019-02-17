var student = /** @class */ (function () {
    function student(fName, lName, year) {
        this.firstname = fName;
        this.lastname = lName;
        this.admissionYear = year;
    }
    return student;
}());
var studentList = [];
studentList.push(new student("Maheedhar", "Mandapati", 2016));
studentList.push(new student("Taehyung", "Kim", 2019));
studentList.push(new student("Seojoon", "Park", 2016));
studentList.push(new student("BoYoung", "Park", 2017));
studentList.push(new student("Suengkwan", "Lee", 2018));
for (var i = 0; i < 5; i++) {
    var yr = studentList[i].admissionYear;
    yr = yr - 2019 + 4;
    console.log(studentList[i].firstname + " " + studentList[i].lastname + " will graduate in " + yr + " years");
}
