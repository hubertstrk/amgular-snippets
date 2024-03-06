import { Component, Input, OnInit } from '@angular/core'
import { SnippetsService } from '../../snippets.service'
import { Snippet } from '../../model'
import { Router } from '@angular/router'
import Fuse from 'fuse.js'
import { sortBy } from 'lodash'

import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations'

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

  @Input() search: string = ''

  availableSnippets: Snippet[] = []

  ngOnInit() {
    void this.snippetsService.all().then((snippets) => {
      this.availableSnippets = snippets
    })
  }

  navigateToSnippet(snippet: Snippet) {
    void this.router.navigate(['/snippet', snippet.title])
  }

  get filteredSnippets() {
    const fuse = new Fuse(this.availableSnippets, {
      includeScore: false,
      keys: ['tags'],
      shouldSort: true,
      threshold: 0.4
    })

    const fused =
      this.search && this.search.length > 0
        ? fuse.search(this.search.toLowerCase()).map((r) => r.item)
        : this.availableSnippets

    return sortBy(fused, 'title')
  }
}
