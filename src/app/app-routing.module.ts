import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SnippetComponent } from './modules/snippet/snippet.component'

const routes: Routes = [{ path: 'snippet/:id', component: SnippetComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
