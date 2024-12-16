import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { sortBy } from 'lodash'
import { firstValueFrom } from 'rxjs'
import { Snippet } from './model'

import classBinding from '../assets/file/class-binding'
import component from '../assets/file/component'
import devTools from '../assets/file/dev-tools'
import directive from '../assets/file/directive'
import angularFor from '../assets/file/for'
import angularIf from '../assets/file/if'
import input from '../assets/file/input'
import output from '../assets/file/output'
import passTemplatesToChild from '../assets/file/pass-template-to-child'
import pipes from '../assets/file/pipes'
import service from '../assets/file/service'
import styleBinding from '../assets/file/style-binding'
import angularSwitch from '../assets/file/switch'
import viewChild from '../assets/file/view-child'

import primeButton from '../assets/file/prime-button'
import primeIcon from '../assets/file/prime-icon'
import primeOverlay from '../assets/file/prime-overlay'

import primeflexFontSize from '../assets/file/primeflex-font-size'
import primeflexGrid from '../assets/file/primeflex-grid'
import primeflexPointer from '../assets/file/primeflex-pointer'
import primeflexResponsive from '../assets/file/primeflex-responsive'

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  constructor(private http: HttpClient) {}

  files = [
    input,
    output,
    viewChild,
    service,
    component,
    directive,
    styleBinding,
    classBinding,
    angularFor,
    pipes,
    angularSwitch,
    devTools,
    passTemplatesToChild,
    primeIcon,
    primeButton,
    primeOverlay,
    primeflexFontSize,
    primeflexResponsive,
    primeflexGrid,
    primeflexPointer,
    angularIf
  ]

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
    return sortBy(snippets, ['title']) as Snippet[]
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
