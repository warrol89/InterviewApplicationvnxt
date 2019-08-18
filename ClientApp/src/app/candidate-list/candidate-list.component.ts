import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/shared/service/candidate.service';
import { applicantDetails } from '../interview-details/interviewdetails.component';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidateDetails: applicantDetails;
  
  displayedColumns: string[];
  constructor(private _candidateService: CandidateService) { }

  ngOnInit() {
this._candidateService.getCandidateDetails().subscribe(data => {
  this.candidateDetails = data;
  console.log(this.candidateDetails)


})
  }

}
