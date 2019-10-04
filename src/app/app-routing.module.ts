import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorsChoiceComponent } from './editors-choice/editors-choice.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MembershipComponent } from './membership/membership.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { GalleryviewComponent } from './galleryview/galleryview.component';


const routes: Routes = [{path: '', redirectTo: '/home', pathMatch: 'full', runGuardsAndResolvers: 'always'},
{ path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
{ path: 'editorsChoice', component: EditorsChoiceComponent, runGuardsAndResolvers: 'always' },
{ path: 'gallery', component: GalleryComponent, runGuardsAndResolvers: 'always'},
{ path: 'membership', component: MembershipComponent, runGuardsAndResolvers: 'always'},
{ path: 'galleryview', component: GalleryviewComponent, runGuardsAndResolvers: 'always'},
{ path: 'article', component: ArticleComponent, runGuardsAndResolvers: 'always'}];

// const routes: Routes = [];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
