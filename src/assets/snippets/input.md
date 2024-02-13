# Input

```js
@Input() foo: string
```

**setter/getter**

```js
_value: string
@Input() set foo(value: string) {
    this._value = value;
} get foo() {
    return this._value;
}
```
