# csr-connect-nav-bar-dropdown

Use this component to add a dropdown menu in the navbar<br><br>

## Dependencies

None<br><br>

## Data source

None<br><br>

## Inputs

| Input      | Description                                                | Accepted Values                   | Required    | Examples |
| ---------- | ---------------------------------------------------------- | --------------------------------- | ----------- | -------- |
| label      | The text displayed on the button                           | Any string                        | If no icon  | Products |
| icon       | A Font Awesome icon                                        | A valid Font Awesome class string | If no label | fa-home  |
| showNewTag | Whether or not to display the "NEW" tag (for new features) | Boolean                           | No          | false    |

<br>

## Example

Creating a dropdown menu on the navbar

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
