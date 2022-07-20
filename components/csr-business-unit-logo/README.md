# Component csr-video

Use this component for displaying a SBU logo.

## Inputs
| Input | Description | Accepted Values | Required | Examples | Default |
| ------ | ------ | ------ | ------ | ------ |
| sbuCode | The target business unit logo to display | One of ["4100","4110","4200","4210","4220","4300","4310","4315","4400","4410","4500","4510","4800","4900"] | Yes | "4100" | N/A
| size | Preconfigured sizes of the logo to display | One of ["small", "medium", "large", "xlarge"] | No | "small" | "small"

## Examples

### Wistia
Passing all parameters as string:
```html
<csr-business-unit-logo sbuCode="4315" size="xlarge"></csr-business-unit-logo>
```

Passing all parameters as objects:
```html
<csr-business-unit-logo [sbuCode]="mySbuCode" [size]="mySize"></csr-business-unit-logo>
```
