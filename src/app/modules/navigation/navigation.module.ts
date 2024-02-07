import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { ChipsModule } from 'primeng/chips'
import { CardModule } from 'primeng/card'
import { TagModule } from 'primeng/tag'
import { InputTextModule } from 'primeng/inputtext'

import { NavigationComponent } from './navigation.component'

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    ChipsModule,
    CardModule,
    TagModule,
    InputTextModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {}
