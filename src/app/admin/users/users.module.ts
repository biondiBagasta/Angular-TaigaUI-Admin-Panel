import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiFieldErrorModule, TuiAvatarModule, TuiLazyLoadingModule, TuiInputFileModule, TuiPaginationModule, TuiInputModule } from '@taiga-ui/kit';
import { TuiNotificationModule, TuiButtonModule, TuiLoaderModule, TuiTextfieldControllerModule } from '@taiga-ui/core';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    TuiLoaderModule,
    TuiAvatarModule,
    TuiNotificationModule,
    TuiLazyLoadingModule,
    TuiInputFileModule,
    TuiPaginationModule,
    TuiTextfieldControllerModule,
    TuiInputModule
  ]
})
export class UsersModule { }
