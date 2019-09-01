import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule {}
