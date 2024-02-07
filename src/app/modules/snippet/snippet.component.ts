import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Snippet } from '../../model'
import { SnippetsService } from '../../snippets.service'

@Component({
  selector: 'app-snippet',
  templateUrl: 'snippet.component.html'
})
export class SnippetComponent {
  snippet: Snippet | null = null

  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetsService
  ) {
    this.route.params.subscribe((params) => {
      this.snippet = this.snippetService.byId(+params['id'])
    })
  }
}
