import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
{path:'',pathMatch:'full', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule)},

{path:'active-posts', loadChildren:() => import('./pages/active-posts/active-posts.module').then(m => m.ActivePostsModule)},

{path:'inactive-posts', loadChildren:() => import('./pages/inactive-posts/nactive-post.module').then(m => m.NactivePostModule)},


{path:'post-detail/:id',
  loadChildren:()=> import('./pages/post-detail/post-detail.module').then(m => m.PostDetailModule)
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
