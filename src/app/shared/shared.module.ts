import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileComponent } from '../user/components/profile/profile.component';

// The SharedModule should not have providers. Since lazy loaded modules use a different injector from the rest of the application.
// Then we could end up with 2 different instances of the same Service.
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule,
    // Forms.
    FormsModule,
    ReactiveFormsModule,
    // Angular material exports.
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
