# csr-connect-header-utility-button

Use this component to add a square utility button to the Connect header<br><br>

## Dependencies

None<br><br>

## Data source

None<br><br>

## Inputs

| Input     | Description                                      | Accepted Values                   | Required | Examples     |
| --------- | ------------------------------------------------ | --------------------------------- | -------- | ------------ |
| label     | The text displayed on the button                 | Any string                        | Yes      | Chat         |
| icon      | A Font Awesome icon                              | A valid Font Awesome class string | Yes      | fa-comments  |
| action    | Function to run when when the button is clicked  | A function                        | No       | someFunction |
| isLanding | Whether or not the button is on the landing page | Boolean                           | No       | true         |

<br>

## Example

Creating the live chat button on the Connect landing page header

```html
<csr-connect-header-utility-button
  label="Chat"
  icon="fa-comments"
  *onClick="showLiveChat"
  isLanding="true"
></csr-connect-header-utility-button>
```
