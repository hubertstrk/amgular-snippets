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
    },
    {
      id: 3,
      title: 'ngOnInit',
      tags: ['ngoninit'],
      value: `ngOnInit() { }`,
      description: 'lifecycle hook called after constructor'
    },
    {
      id: 4,
      title: 'ngOnDestroy',
      tags: ['ngondestroy', 'hooks', 'lifecycle hooks'],
      value: `ngOnDestroy() { }`,
      description: 'lifecycle hook called before destruction'
    },
    {
      id: 5,
      title: 'ngAfterViewInit',
      tags: ['ngafterviewinit', 'hooks', 'lifecycle hooks'],
      value: `ngAfterViewInit() { }`,
      description: 'lifecycle hook called after view is initialized'
    },
    {
      id: 6,
      title: 'ngAfterViewChecked',
      tags: ['ngafterviewchecked', 'hooks', 'lifecycle hooks'],
      value: `ngAfterViewChecked() { }`,
      description: 'lifecycle hook called after view is checked'
    },
    {
      id: 7,
      title: 'ngAfterContentInit',
      tags: ['ngaftercontentinit', 'hooks', 'lifecycle hooks'],
      value: `ngAfterContentInit() { }`,
      description: 'lifecycle hook called after content is initialized'
    },
    {
      id: 8,
      title: 'ngAfterContentChecked',
      tags: ['ngaftercontentchecked', 'hooks', 'lifecycle hooks'],
      value: `ngAfterContentChecked() { }`,
      description: 'lifecycle hook called after content is checked'
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
