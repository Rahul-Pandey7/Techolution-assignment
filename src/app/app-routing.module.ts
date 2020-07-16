import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';


const routes: Routes = [
  
  {
    path: 'admission',
    component: AdmissionFormComponent
  },
  {
    path: '', 
    component: StudentTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
