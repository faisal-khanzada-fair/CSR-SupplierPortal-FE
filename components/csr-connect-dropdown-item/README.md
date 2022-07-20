# csr-connect-dropdown-item

Use this component to add a button to a dropdown menu<br><br>

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

## Example

Creating a dropdown menu on the navbar and adding two dropdown items

```html
<csr-connect-nav-bardropdown label="Work">
  <csr-connect-dropdown-item
    label="Jobs"
    href="#/jobs"
  ></csr-connect-dropdown-item>
  <csr-connect-dropdown-item
    label="Leads"
    href="#/leads"
  ></csr-connect-dropdown-item>
</csr-connect-nav-bar-dropdown>
```
