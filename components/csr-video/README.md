# Component csr-video

Use this component for displaying video content.

* This component requires to following javascript and is automatically loaded via the CsrComponentScriptLoaderService.
```html
<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script>
```

## Inputs
| Input | Description | Accepted Values | Required | Examples |
| ------ | ------ | ------ | ------ | ------ |
| type | The type of video player to render. Currently only supports Wistia. | "Wistia" | Yes | Wistia |
| media | The target media identifier | Any strings | Yes | Wistia: dcsyfd5ewi |
| placeholder-img-src | Placeholder image to display | Url to image resource | No | https://www.csrconnect.com.au/img/csr-connect.svg |
| tracking-email | Email address to be tracked as viewed this media content | Any strings | No | myemail@gmail.com |

## Examples

### Wistia
Passing all parameters as text:
```html
<csr-video type="Wistia" media="dcsyfd5ewi" tracking-email="myemail@gmail.com" placeholder-img-src="https://www.csrconnect.com.au/img/csr-connect.svg" />
```
Passing tracking-email parameter as object:
```html
<csr-video type="Wistia" media="dcsyfd5ewi" [tracking-email]="session.profile.email" />
```

