import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

import input from '../assets/file/input'
import output from '../assets/file/output'
import viewChild from '../assets/file/view-child'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  constructor(private http: HttpClient) {}

  files = [input, output, viewChild]

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

    return snippets
  }

  markdownById(id: string) {
    const file = this.files.find((snippet) => snippet.title === id)
    if (!file) {
      throw new Error('Snippet not found')
    }

    const markdown = this.http.get(`/assets/snippets/${file.snippet}.md`, {
      responseType: 'text'
    })

    return firstValueFrom(markdown)
  }
}
