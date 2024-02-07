import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NavigationModule } from './modules/navigation/navigation.module'
import { SnippetModule } from './modules/snippet/snippet.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule
  ],
  exports: [NavigationModule, SnippetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
