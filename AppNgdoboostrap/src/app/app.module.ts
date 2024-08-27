import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApponeComponent } from './appone/appone.component';
import { ApptwoComponent } from './apptwo/apptwo.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApponeComponent,
    ApptwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [provideHttpClient()],
  //  senarios 1 bootstrap multiple Component at sametime 
  // bootstrap: [ApponeComponent,ApptwoComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private http:HttpClient){}
  ngDoBootstrap(appRef: ApplicationRef): void {
    //senarios 2 bootstrap Component use ngdoboostrap
    // appRef.bootstrap(ApponeComponent);

    // senarios 3 bootstrap dynamic or http call based Component use ngdoboostrap
    this.http.get<appboostrap>("http://localhost:5028/api/Json/apigetstatus")
    .subscribe({
      next:res=>{
        debugger
        appRef.bootstrap(res.appoone==true?ApponeComponent:ApptwoComponent,
          document.getElementById("display")
        )
      }
    })
   
  }


 }


 interface appboostrap{
  appoone:boolean
 }