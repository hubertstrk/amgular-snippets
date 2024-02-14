# View Child

### Single template

```html
<ng-template #foo let-data>
  <div>{{ data.property }}</div>
</ng-template>

<ng-container
  *ngTemplateOutlet="foo; context: {$implicit: dynamicData}"></ng-container>
```

```ts
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  @ViewChild('foo') foo!: TemplateRef<any>

  dynamicData = { property: 'some content' }
}
```
