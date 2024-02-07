import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  constructor() {}

  snippets = [
    {
      id: 1,
      title: '@Input',
      tags: ['input'],
      value: `@Input() foo: string`,
      description: 'input parameter for a component'
    },
    {
      id: 2,
      title: '@Output',
      tags: ['output'],
      value: `@Output() bar: EventEmitter<string>`,
      description: 'output parameter for a component'
    }
  ]

  all() {
    return this.snippets
  }

  find(tag: string) {
    return this.snippets.find((snippet) => snippet.tags.includes(tag))
  }

  byId(id: number) {
    return this.snippets.find((snippet) => snippet.id === id) ?? null
  }
}
