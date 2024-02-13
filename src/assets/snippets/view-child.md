# View Child

### Single template

```html
<!-- Define your template inside ng-template -->
<ng-template #myTemplate let-data>
  <div>{{ data.property }}</div>
</ng-template>

<!-- Use ng-container to render the template dynamically -->
<ng-container
  *ngTemplateOutlet="myTemplate; context: {$implicit: dynamicData}"></ng-container>
```

```ts
import { Component, ViewChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  @ViewChild('myTemplate') myTemplate!: TemplateRef<any>

  dynamicData = { property: 'Dynamic Content' }
}
```
