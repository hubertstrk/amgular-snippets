import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  constructor() {}

  snippets = [
    {
      title: '@Input',
      tags: ['input'],
      value: `@Input() foo: string`,
      description: 'input parameter for a component'
    },
    {
      title: '@Output',
      tags: ['output'],
      value: `@Output() bar: EventEmitter<string>`,
      description: 'output parameter for a component'
    }
  ]

  all() {
    return this.snippets
  }

  find(key: string) {
    return this.snippets.find((snippet) => snippet.tags.includes(key))
  }
}
