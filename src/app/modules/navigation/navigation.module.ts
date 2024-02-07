import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { ChipsModule } from 'primeng/chips'
import { CardModule } from 'primeng/card'
import { TagModule } from 'primeng/tag'

import { NavigationComponent } from './navigation.component'

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    MenubarModule,
    ChipsModule,
    CardModule,
    TagModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {}
