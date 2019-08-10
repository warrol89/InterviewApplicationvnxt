import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicantDetails } from 'src/app/interview-details/interviewdetails.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private _http: HttpClient) { }

  ngOninit() {

  }

  saveCandidateDetails(details: applicantDetails) {

this._http.post(environment.baseUrl, details );
  }
}
