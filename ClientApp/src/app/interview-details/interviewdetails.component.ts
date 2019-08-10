import { Component, OnInit, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-interview-details',
    styleUrls: ['interviewdetails.component.css'],
    templateUrl: 'interviewdetails.component.html',

  })

  export class InterviewDetailsComponent implements OnInit  {

    file: File;
  statuses: Status[] = [{ value: 1, viewName: 'New' }, { value: 2, viewName: 'In-Progress' },
    { value: 3, viewName: 'Reject' }, { value: 4, viewName: 'Select' }, { value: 4, viewName: 'Select' } ];
  ngGroup: FormGroup = this.ngBuilder.group({
    name: ['', Validators.required] ,
    experience: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    nameOfL1: '',
    nameOfL2: '',
    previousCompanies: ['', Validators.required],
    hr: ['', Validators.required],
    emailAddress: ['', Validators.required],
    skillSet: ['', Validators.required],
    status: ''
  });
  constructor(private host: ElementRef<HTMLInputElement>, private ngBuilder: FormBuilder) { }

  ngOnInit() {

console.log(this.statuses)
    }

    onFileChange(event) {
      console.log(event.target.files);
      this.file = event.target.files;
    }

  }

  export interface applicantDetails{
name: string;
experience: number;
phoneNumber: number;
nameOfL1: string;
nameOfL2: string;
previousCompanies: string;
hr: string;
skillSet: string;

  }

  export interface Status {
    value: number;
    viewName: string;
  }
