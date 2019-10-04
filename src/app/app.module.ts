import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainImgSilderComponent } from './main-img-silder/main-img-silder.component';
import { EditorsChoiceComponent } from './editors-choice/editors-choice.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MembershipComponent } from './membership/membership.component';
import { HomeComponent } from './home/home.component';
import { EditorChoicePanelComponent } from './editor-choice-panel/editor-choice-panel.component';
import { ArticleComponent } from './article/article.component';
import { GalleryPanelComponent } from './gallery-panel/gallery-panel.component';
import { GalleryviewComponent } from './galleryview/galleryview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainImgSilderComponent,
    EditorsChoiceComponent,
    GalleryComponent,
    MembershipComponent,
    HomeComponent,
    EditorChoicePanelComponent,
    ArticleComponent,
    GalleryPanelComponent,
    GalleryviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
