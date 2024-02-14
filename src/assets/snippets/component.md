# Component

**Single file**

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <h1>Hello, World!</h1>
      <p>This is a sample template defined inside the component file.</p>
    </div>
  `
})
export class MyComponent {
  constructor() {}
}
```
