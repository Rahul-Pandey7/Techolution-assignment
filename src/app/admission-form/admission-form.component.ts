import { Component, OnInit } from '@angular/core';

declare var $: any;

let initialValue = {
  fname: { value: "", invalid: true },
  lname: { value: "", invalid: true },
  yop: { value: "", invalid: true },
  class: { value: "", invalid: true },
  percentage: { value: "", invalid: true }
};

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent implements OnInit {

  validateForm = initialValue;

  constructor() { }

  ngOnInit() {

  }

  validation() {

    var letters = /^[A-Za-z]+$/;
    //first Name
    if (this.validateForm.fname.value.match(letters)) {
      this.validateForm.fname.invalid = true;
    }
    else {
      this.validateForm.fname.invalid = false;
    }

    //last name
    if (this.validateForm.lname.value.match(letters)) {
      this.validateForm.lname.invalid = true;
    }
    else {
      this.validateForm.lname.invalid = false;
    }

    //class
    if (this.validateForm.class.value != '') {
      this.validateForm.class.invalid = true;
    }
    else {
      this.validateForm.class.invalid = false;
    }

    //percentage
    if (this.validateForm.percentage.value != '') {
      this.validateForm.percentage.invalid = true;
    }
    else {
      this.validateForm.percentage.invalid = false;
    }

    if (this.isFormValid() == true) {
      $("#successModal").modal("show");
      setTimeout(() => {
        $("#successModal").modal("hide");
      }, 2000);
      this.validateForm.fname.value = '';
      this.validateForm.lname.value = '';
      this.validateForm.class.value = '';
      this.validateForm.percentage.value = '';
      this.validateForm.yop.value = '';
    }

  }

  numberOnly(e) {

    if (e < 2017) {
      this.validateForm.yop.invalid = false
    }
    else {
      this.validateForm.yop.invalid = true;
    }
  }

  isFormValid(): boolean {
    if (this.validateForm.fname.value != '' && this.validateForm.fname.invalid) {
      if (this.validateForm.lname.value != '' && this.validateForm.lname.invalid) {
        if (this.validateForm.class.value != '' && this.validateForm.class.invalid) {
          if (this.validateForm.yop.value != '' && this.validateForm.yop.invalid) {
            if (this.validateForm.percentage.value != '' && this.validateForm.percentage.invalid) {
              return true;
            } else {
              this.validateForm.percentage.invalid = false;
            }
          } else {
            this.validateForm.yop.invalid = false;
          }
        } else {
          this.validateForm.class.invalid = false;
        }
      } else {
        this.validateForm.lname.invalid = false;
      }
    } else {
      this.validateForm.fname.invalid = false;
    }
    return false;
  }
}
