# csr-connect-nav-bar-button

Use this component to add a single item/button to the navbar<br><br>

## Dependencies

None<br><br>

## Data source

None<br><br>

## Inputs

| Input      | Description                                                | Accepted Values                   | Required    | Examples |
| ---------- | ---------------------------------------------------------- | --------------------------------- | ----------- | -------- |
| label      | The text displayed on the button                           | Any string                        | If no icon  | Products |
| icon       | A Font Awesome icon                                        | A valid Font Awesome class string | If no label | fa-home  |
| href       | Link to navigate to                                        | A url or relative path string     | No          | #/dash   |
| showNewTag | Whether or not to display the "NEW" tag (for new features) | Boolean                           | No          | false    |
| target     | Where the link should load ("\_blank" to load in new tab)  | string                            | No          | \_blank  |

<br>

## Examples

Adding a text button to the navbar

```html
<csr-connect-nav-bar-button
  label="Products"
  href="#/products"
></csr-connect-nav-bar-button>
```

Adding an icon button to the navbar

```html
<csr-connect-nav-bar-button
  icon="fa-home"
  href="#/dash"
></csr-connect-nav-bar-button>
```
