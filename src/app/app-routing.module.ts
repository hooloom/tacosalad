import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { CanReadGuard } from './guards/can-read.guard';
import { AuthGuard } from './guards/auth.guard';
import { lostviewComponent } from './views/lost-view/lost-view.component';
import { setviewComponent } from './views/set-view/set-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
	  path: 'admin', 
	  component: setviewComponent, canActivate: [AdminGuard]
  },
  { 
	  path: 'dashboard', 
	  component: setviewComponent, canActivate: [AuthGuard]
  },
  { 
	  path: ':parent', 
	  component: setviewComponent
  },
  { 
	  path: ':parent/:child', 
	  component: setviewComponent
  },
  { 
	  path: ':parent/:child/:grandchild', 
	  component: setviewComponent
  },
  { 
	  path: '**', 
	  component: lostviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
