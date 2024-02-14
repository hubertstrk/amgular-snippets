import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SnippetComponent } from './snippet.component'
import { MarkdownModule } from 'ngx-markdown'
import { TagModule } from 'primeng/tag'

@NgModule({
  declarations: [SnippetComponent],
  imports: [BrowserModule, MarkdownModule.forRoot(), TagModule],
  exports: [SnippetComponent]
})
export class SnippetModule {}
