# csr-connect-header-button

Use this component to add a single item/button to homepage header bar<br><br>

## Dependencies

None<br><br>

## Data source

None<br><br>

## Inputs

| Input      | Description                                                | Accepted Values                   | Required    | Examples |
| ---------- | ---------------------------------------------------------- | --------------------------------- | ----------- | -------- |
| label      | The text displayed on the button                           | Any string                        | If no icon  | Products |
| href       | Link to navigate to                                        | A url or relative path string     | No          | #/dash   |
| showNewTag | Whether or not to display the "NEW" tag (for new features) | Boolean                           | No          | false    |
| target     | Where the link should load ("\_blank" to load in new tab)  | string                            | No          | \_blank  |

<br>

## Examples

Adding a new button to the homepage header

```html
<csr-connect-header-button
  label="Features"
  href="#/home/features"
></csr-connect-header-button>
```
