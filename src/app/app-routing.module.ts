import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ListsComponent } from './lists/lists.component';
import { ElementsComponent } from './elements/elements.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'lists/:id',
    component: ElementsComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'lists',
    component: ListsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }