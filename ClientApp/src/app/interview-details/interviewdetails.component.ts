import { Component, OnInit, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidateService } from 'src/shared/service/candidate.service';
@Component({
    selector: 'app-interview-details',
    styleUrls: ['interviewdetails.component.css'],
    templateUrl: 'interviewdetails.component.html',

  })

  export class InterviewDetailsComponent implements OnInit  {

    file: File;
    details: applicantDetails;
  statuses: Status[] = [{ value: 1, viewName: 'New' }, { value: 2, viewName: 'In-Progress' },
    { value: 3, viewName: 'Reject' }, { value: 4, viewName: 'Select' }, { value: 4, viewName: 'Select' } ];
  ngGroup: FormGroup = this.ngBuilder.group({
    name: ['', Validators.required] ,
    experience: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    nameOfL1: '',
    nameOfL2: '',
    previousCompany: ['', Validators.required],
    hr: ['', Validators.required],
    emailAddress: ['', Validators.required],
    skillSet: ['', Validators.required],
    status: ''
  });
  constructor(private ngBuilder: FormBuilder, private candidatService: CandidateService) { }

  ngOnInit() {


    }

    onSubmit(){
      if(this.ngGroup.valid)
      {
        this.details = this.ngGroup.value;
        this.details.feedBack = this.file;
        console.log(this.details);
        this.candidatService.saveCandidateDetails(this.details).subscribe(data => {console.log(data)}, error => {console.log(error)})
      }
    }

    onFileChange(event) {
      console.log(event.target.files);
      if(event.target.files.length > 0)
      {
      this.file = event.target.files;
      //this.details.feedBack = event.target.files;
      }
      
    }

  }

  export interface applicantDetails{
    
name: string;
experience: number;
phoneNumber: number;
nameOfL1: string;
nameOfL2: string;
previousCompany: string;
hr: string;
skillSet: string;
emailAddress: string;
feedBack: File ;
  }

  export interface Status {
    value: number;
    viewName: string;
  }
