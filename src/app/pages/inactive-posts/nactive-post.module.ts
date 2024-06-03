import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { InacttiveRootingModule } from './inacttive-rooting.module';



@NgModule({
  declarations: [InactivePostsComponent],
  imports: [
    CommonModule,InacttiveRootingModule
  ]
})
export class NactivePostModule { }
