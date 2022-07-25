import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // this function will valid the form
  login() {

    let isValid = false;

    if (this.fname() && this.lname() && this.email() && this.city() && this.zip() && this.terms_conditions()) {
      isValid = true;
    }

    return isValid;
  }


  // validate the first name
  fname() {
    let fname = $('#validationCustom01').val();
    if (fname == '') {
      $('#validationCustom01').addClass('is-invalid')
      return false;
    } else {
      $('#validationCustom01').removeClass('is-invalid')
      $('#validationCustom01').addClass('is-valid')
      return true;
    }
  }

  // validate the last name
  lname() {
    let lname = $('#validationCustom02').val();
    if (lname == '') {
      $('#validationCustom02').addClass('is-invalid')
      return false;
    } else {
      $('#validationCustom02').removeClass('is-invalid')
      $('#validationCustom02').addClass('is-valid')
      return true;
    }
  }

  // validate the email
  email() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = $('#validationCustomUsername').val();
    // if (!email.match(mailformat)) {
    if (!mailformat.test(email.toString())) {
      $('#validationCustomUsername').addClass('is-invalid');
      return false;
    } else {
      $('#validationCustomUsername').removeClass('is-invalid');
      $('#validationCustomUsername').addClass('is-valid');
      return true;
    }

    //     Uppercase (A-Z) and lowercase (a-z) English letters.
    // Digits (0-9).
    // Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    // Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
  }

  // validate the city
  city() {
    let city = $('#validationCustom03').val();
    if (city == '') {
      $('#validationCustom03').addClass('is-invalid')
      return false;
    } else {
      $('#validationCustom03').removeClass('is-invalid')
      $('#validationCustom03').addClass('is-valid')
      return true;
    }
  }

  // validate the zip code
  zip() {
    let zipformat = /^\d{5}(?:[-\s]\d{4})?$/;
    let zip = $('#validationCustom05').val();
    // if (!zip.match(zipformat)) {
    if (!zipformat.test(zip.toString())) {
      $('#validationCustom05').addClass('is-invalid')
      return false;
    } else {
      $('#validationCustom05').removeClass('is-invalid')
      $('#validationCustom05').addClass('is-valid')
      return true;
    }

    //     ^ = Start of the string.
    // \d{5} = Match 5 digits (for condition 1, 2, 3)
    // (?:…) = Grouping
    // [-\s] = Match a space (for condition 3) or a hyphen (for condition 2)
    // \d{4} = Match 4 digits (for condition 2, 3)
    // …? = The pattern before it is optional (for condition 1)
    // $ = End of the string.
  }

  // validate terms & conditions agree or not
  terms_conditions() {
    if ($("#invalidCheck").prop('checked') == true) {
      $('#invalidCheck').removeClass('is-invalid')
      $('#invalidCheck').addClass('is-valid')
      return true;
    } else {
      $('#invalidCheck').addClass('is-invalid')
      return false;
    }
  }

}
