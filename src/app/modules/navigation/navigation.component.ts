import { Component, OnInit } from '@angular/core'
import { SnippetsService } from '../../snippets.service'
import { Snippet } from '../../model'
import { Router } from '@angular/router'
import Fuse from 'fuse.js'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(
    private snippetsService: SnippetsService,
    private router: Router
  ) {}

  search = ''
  availableSnippets: Snippet[] = []

  ngOnInit() {
    this.availableSnippets = this.snippetsService.all()
  }

  navigateToSnippet(snippet: Snippet) {
    void this.router.navigate(['/snippet', snippet.id])
  }

  get filteredSnippets() {
    const fuse = new Fuse(this.availableSnippets, {
      includeScore: false,
      keys: ['tags', 'title']
    })

    return this.search && this.search.length > 0
      ? fuse.search(this.search.toLowerCase()).map((r) => r.item)
      : this.availableSnippets
  }
}
