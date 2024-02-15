import { Component, OnInit } from '@angular/core'
import { Snippet } from './model'
import { SnippetsService } from './snippets.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private snippetsService: SnippetsService) {}

  snippets: Snippet[] = []
  search: string = ''

  ngOnInit() {
    void this.snippetsService.all().then((snippets) => {
      this.snippets = snippets
    })
  }
}
