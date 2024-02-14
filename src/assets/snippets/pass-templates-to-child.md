# Pass templates to child

## parent

**component**

```ts

person: = {
  name: 'John Doe',
  age: 25
};


```

**template**

```html
<app-details [person]="person" [templates]="[foo, bar]"></app-details>

<ng-template #foo let-language="language">
  <div>{{language}}</div>
</ng-template>

<ng-template #bar let-status="status">
  <div>{{status}}</div>
</ng-template>
```

## child

**component**

```ts
@Input() person: Person;
@Input() templates: TemplateRef<any>[];

context: {
  language: 'en',
  status: 'senior'
}
```

**child**

```html
<h1>{{person.name}}</h1>

<div *ngFor="let template of templates">
  <ng-container
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="context"></ng-container>
</div>
```
