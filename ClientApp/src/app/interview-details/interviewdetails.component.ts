import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidateService } from 'src/shared/service/candidate.service';
import { delay } from 'q';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
@Component({
  selector: 'app-interview-details',
  styleUrls: ['interviewdetails.component.css'],
  templateUrl: 'interviewdetails.component.html',

})

export class InterviewDetailsComponent implements OnInit {

  saveMessage: string;
  candidateId: number;
  file: File;
  details: applicantDetails;
  statuses: Status[] = [{ value: 1, viewName: 'New' }, { value: 2, viewName: 'In-Progress' },
  { value: 3, viewName: 'Reject' }, { value: 4, viewName: 'Select' }, { value: 4, viewName: 'Select' }];
  ngGroup: FormGroup = this.ngBuilder.group({
    candidateId: '',
    name: ['', Validators.required],
    experience: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}'), Validators.maxLength(10)]],
    nameOfL1: '',
    nameOfL2: '',
    previousCompany: ['', Validators.required],
    hr: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    skillSet: ['', Validators.required],
    status: ''
  });
  constructor(private ngBuilder: FormBuilder, private candidatService: CandidateService,private snackBar: MatSnackBar,private _route: ActivatedRoute) { }

  ngOnInit() {
this.candidateId= this._route.snapshot.params['id'];

if(this.isExisting()){
  this.candidatService.getCandidateDetailsById(this.candidateId).subscribe(data => {
    console.log(data);
    this.ngGroup.setValue(data);
  })
}
  }

isExisting(): boolean {
  console.log(+this.candidateId);
return !Number.isNaN(+this.candidateId)  && +this.candidateId !==0  ;
}

  onSubmit() {
    if (this.ngGroup.valid) {
      this.details = this.ngGroup.value;
      if(this.isExisting())
      {
        console.log(this.details);
        console.log(this.isExisting());
        this.candidatService.updateCandidateDetails(this.details).subscribe(data => {this.openPanel("Details have been updated successfully");
        this.ngGroup.reset();
        Object.keys(this.ngGroup.controls).forEach(key => {
         this.ngGroup.controls[key].setErrors(null)
       });
      }, error => { console.log(error);this.saveMessage = error; this.openPanel("Error! Kindly contact administrator")});
      }
      else{
      //  this.details.feedBack = this.file;
      console.log(this.details);
      this.details.candidateId = 0;
      this.candidatService.saveCandidateDetails(this.details).subscribe(data => {
        console.log(data);
      this.openPanel("Details have been created successfully");
       this.ngGroup.reset();
       Object.keys(this.ngGroup.controls).forEach(key => {
        this.ngGroup.controls[key].setErrors(null)
      });


       
      }, error => { console.log(error);this.saveMessage = error; this.openPanel("Error! Kindly contact administrator")})
    }
    } else{
     this.saveMessage =  this.ngGroup.validator.length.toString();
     
    }
  }

  onFileChange(event) {
    console.log(event.target.files);
    if (event.target.files.length > 0) {
      this.file = event.target.files;
      //this.details.feedBack = event.target.files;
    }

  }

  openPanel(message){
    this.snackBar.open(message, "Close",{duration: 5000,})
  }

}

export interface applicantDetails {

  candidateId: number;
  name: string;
  experience: number;
  phoneNumber: number;
  nameOfL1: string;
  nameOfL2: string;
  previousCompany: string;
  hr: string;
  skillSet: string;
  emailAddress: string;
  status: number;

}

export interface Status {
  value: number;
  viewName: string;
}
