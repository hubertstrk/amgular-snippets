import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SnippetComponent } from './snippet.component'

@NgModule({
  declarations: [SnippetComponent],
  imports: [BrowserModule],
  exports: [SnippetComponent]
})
export class SnippetModule {}
