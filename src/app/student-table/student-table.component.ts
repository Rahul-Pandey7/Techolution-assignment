import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
declare var $: any;

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  studentsResultList: any;

  constructor(public httpService: ApiServiceService) { }

  ngOnInit() {
    this.httpService.getStudentsList().subscribe(data => {
      console.log(data)
      this.studentsResultList = data
      this.getTotalMarks(this.studentsResultList);

      let maxValue = -Infinity
      var key;
      this.studentsResultList.forEach((element, index) => {
        if (maxValue < +element.totalMarks) {
          maxValue = element.totalMarks
          key = index;
        }
      });
      this.studentsResultList[key]['status'] = "Topper"
      this.studentsResultList.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) 
          return -1
        if (nameA > nameB)
          return 1
        return 0 
      });
    
    })
  }

  getTotalMarks(array) {
    let totalMarks;
    for (let i = 0; i < array.length; i++) {
      if (array[i].marks.Maths < 20 || array[i].marks.English < 20 || array[i].marks.Science < 20) {
        array[i]['status'] = "Fail"
      }
      else {
        array[i]['status'] = "Pass"
      }
      totalMarks = +array[i].marks.Maths + +array[i].marks.English + +array[i].marks.Science
      array[i]['totalMarks'] = totalMarks;
      totalMarks = 0;
    }
  }
}
