import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { PostDetailRootingModule } from './post-detail-rooting.module';



@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,PostDetailRootingModule
  ]
})
export class PostDetailModule { }
