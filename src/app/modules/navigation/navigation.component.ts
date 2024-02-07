import { Component, OnInit } from '@angular/core'
import { SnippetsService } from '../../snippets.service'
import { Snippet } from '../../model'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private snippetsService: SnippetsService) {}

  snippets: Snippet[] = []

  ngOnInit() {
    this.snippets = this.snippetsService.all()
  }
}
