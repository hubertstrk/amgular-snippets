# Overlay

```html
<p-overlayPanel #foo>
  <ng-template pTemplate="content">
    <div>bar</div>
  </ng-template>
</p-overlayPanel>
<p-button (click)="foo.toggle($event)" label="Show"></p-button>
```
