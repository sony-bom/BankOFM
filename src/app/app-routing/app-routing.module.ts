import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';



const routes: Routes = [
  
    {
        path: 'index',
        component: DashboardComponent,
    },
    
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: '**', redirectTo: 'index' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }