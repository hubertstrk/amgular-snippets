import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SnippetComponent } from './snippet.component'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [SnippetComponent],
  imports: [BrowserModule, MarkdownModule.forRoot()],
  exports: [SnippetComponent]
})
export class SnippetModule {}
