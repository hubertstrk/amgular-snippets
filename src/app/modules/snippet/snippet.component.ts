import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Snippet } from '../../model'
import { SnippetsService } from '../../snippets.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-snippet',
  templateUrl: 'snippet.component.html'
})
export class SnippetComponent implements OnDestroy {
  snippet: Snippet | null = null
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetsService
  ) {
    this.subscription = this.route.params.subscribe((params) => {
      this.snippet = this.snippetService.byId(+params['id'])
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
