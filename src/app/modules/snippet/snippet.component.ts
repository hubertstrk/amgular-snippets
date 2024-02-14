import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SnippetsService } from '../../snippets.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-snippet',
  templateUrl: 'snippet.component.html'
})
export class SnippetComponent implements OnDestroy {
  markdown: string | null = null
  tags: string[] = []
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private snippetService: SnippetsService
  ) {
    this.subscription = this.route.params.subscribe((params) => {
      void this.snippetService
        .snippetById(params['id'] as string)
        .then(({ markdown, tags }) => {
          this.markdown = markdown
          this.tags = tags
        })
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
