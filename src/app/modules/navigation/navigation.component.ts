import { Component, OnInit } from '@angular/core'
import { SnippetsService } from '../../snippets.service'
import { Snippet } from '../../model'
import { Router } from '@angular/router'

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

  snippets: Snippet[] = []

  ngOnInit() {
    this.snippets = this.snippetsService.all()
  }

  navigateToSnippet(snippet: Snippet) {
    void this.router.navigate(['/snippet', snippet.id])
  }
}
