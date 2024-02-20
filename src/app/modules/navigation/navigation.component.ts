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
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':leave', [
        animate(
          '300ms',
          keyframes([
            style({ fontSize: '*' }),
            style({ fontSize: '15px' }),
            style({ fontSize: '14px' }),
            style({ fontSize: '13px' }),
            style({ fontSize: '12px' }),
            style({ fontSize: '11px' }),
            style({ fontSize: '10px' }),
            style({ fontSize: '9px' }),
            style({ fontSize: '8px' }),
            style({ fontSize: '7px' }),
            style({ fontSize: '6px' }),
            style({ fontSize: '5px' }),
            style({ fontSize: '4px' }),
            style({ fontSize: '3px' }),
            style({ fontSize: '2px' }),
            style({ fontSize: '1px' }),
            style({ fontSize: '0px' })
          ])
        )
      ]),
      transition(':enter', [
        animate(
          '300ms',
          keyframes([
            style({ fontSize: '0px' }),
            style({ fontSize: '1px' }),
            style({ fontSize: '2px' }),
            style({ fontSize: '3px' }),
            style({ fontSize: '4px' }),
            style({ fontSize: '5px' }),
            style({ fontSize: '6px' }),
            style({ fontSize: '7px' }),
            style({ fontSize: '8px' }),
            style({ fontSize: '9px' }),
            style({ fontSize: '10px' }),
            style({ fontSize: '11px' }),
            style({ fontSize: '12px' }),
            style({ fontSize: '13px' }),
            style({ fontSize: '14px' }),
            style({ fontSize: '15px' }),
            style({ fontSize: '*' })
          ])
        )
      ])
    ])
  ]
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
