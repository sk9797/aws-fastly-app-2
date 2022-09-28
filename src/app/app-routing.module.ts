import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutCompComponent } from './checkout-comp/checkout-comp.component';

const routes: Routes = [
  {
    path: '', component: CheckoutCompComponent
  },
  {
    path: 'checkout', component: CheckoutCompComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
