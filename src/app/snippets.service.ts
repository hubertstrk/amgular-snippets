import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { Snippet } from './model'
import { sortBy } from 'lodash'

import input from '../assets/file/input'
import output from '../assets/file/output'
import viewChild from '../assets/file/view-child'
import passTemplatesToChild from '../assets/file/pass-template-to-child'
import service from '../assets/file/service'
import component from '../assets/file/component'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  constructor(private http: HttpClient) {}

  files = [input, output, viewChild, service, component, passTemplatesToChild]

  async all() {
    const files = this.files.map((file) => {
      return firstValueFrom(
        this.http.get(`/assets/snippets/${file.snippet}.md`, {
          responseType: 'text'
        })
      )
    })

    const all = await Promise.all(files)

    const snippets = this.files.map((file, index) => {
      return {
        title: file.title,
        tags: file.tags,
        markdown: all[index]
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const foo = sortBy(snippets, ['title']) as Snippet[]

    return foo
  }

  async snippetById(id: string) {
    const file = this.files.find((snippet) => snippet.title === id)
    if (!file) {
      throw new Error('Snippet not found')
    }

    const markdown = await firstValueFrom(
      this.http.get(`/assets/snippets/${file.snippet}.md`, {
        responseType: 'text'
      })
    )

    return { markdown, tags: file.tags }
  }
}
