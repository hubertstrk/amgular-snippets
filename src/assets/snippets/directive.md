# directive

```html
<div appHighlight></div>
```

```ts
@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow'
  }
}
```

# user events

```html
<div appHighlight>Highlight me!</div>
```

```ts
@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = color = this.color || 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = color = null
  }
}
```

# dynamic props

```html
<div [appHighlight]="color">Highlight me!</div>
```

```ts
@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class CustomDirective {
  @Input() color: string

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = color = this.color || 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = color = null
  }
}
```
