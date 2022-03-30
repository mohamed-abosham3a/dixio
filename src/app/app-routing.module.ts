import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'messages', component: MessageComponent },
  { path: 'users', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
