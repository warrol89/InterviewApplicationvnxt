import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { InterviewDetailsComponent } from './interview-details/interviewdetails.component';
import { MaterialmoduleModule } from 'src/shared/materialmodule.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@NgModule({
  declarations: [
    InterviewDetailsComponent,
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    CandidateListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialmoduleModule,
    RouterModule.forRoot([
      { path: '', component: InterviewDetailsComponent, pathMatch: 'full' },
      {path: 'home', redirectTo: ''},
      {path: 'home/:id', component: InterviewDetailsComponent},
      { path: 'counter', component: CounterComponent },
      {path: 'list', component: CandidateListComponent}
    ])
  ],
  exports: [MaterialmoduleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
