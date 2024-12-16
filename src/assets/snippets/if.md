# if

```html
<div *ngIf="isVisible; else notVisibleTemplate">
  This content is visible when isVisible is true.
</div>
```

```html
<ng-template #notVisibleTemplate> else content </ng-template>
```
