import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicantDetails } from 'src/app/interview-details/interviewdetails.component';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private _http: HttpClient) { }

  ngOninit() {

  }

  saveCandidateDetails(details: applicantDetails) {

return this._http.post(environment.baseUrl+'api/candidates', details );
  }

  getCandidateDetails(): Observable<applicantDetails>{
    return this._http.get<applicantDetails>(environment.baseUrl+'api/candidates');
  }

  getCandidateDetailsById(Id): Observable<applicantDetails>{
    return this._http.get<applicantDetails>(environment.baseUrl+'api/candidates/'+Id);
  }

  updateCandidateDetails(details: applicantDetails) {
    return this._http.put(environment.baseUrl+'api/candidates', details);
  }
}
