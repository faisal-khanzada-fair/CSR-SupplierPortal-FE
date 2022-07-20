# Component csr-connect-nav-bar
:warning: **This Component is intended to be CSR Connect specific.**
> 
Use this component for wrapping other HTML elements or components which belong in the navbar.


> 🎨
> In the template, there are set classes and ids on elements which are used by 
> the CSR Connect Application for Bootstrap styling.

## Inputs
*No inputs required for this component*

## Examples

### Wrapping other Components/Elements

Passing other HTML elements / Components as content:
  

```html
<csr-connect-nav-bar>

<csr-connect-nav-bar-button  icon="fa-home"  href="#/dash"></csr-connect-nav-bar-button>

<csr-connect-nav-bar-button  label="Products"  href="#/products"></csr-connect-nav-bar-button>

</csr-connect-nav-bar>
```
### Screenshots

#### Empty
![Empty wrapper](./example-images/csrconnectnavbar_empty.png?raw=true "Empty")

#### Populated
![Elements in wrapper](./example-images/csrconnectnavbar_notEmpty.png?raw=true "Full")
