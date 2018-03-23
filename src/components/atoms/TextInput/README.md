# TextInput
Basic text input styles. This atom supports basic visual styles for input fields that do not take additional controls.

## TextInput Props
Allowed properties and values.

Property | Values | Default | Description
-------- | ------ | ------- | -----------
`type` | `text`, `search`, `url`, `tel`, `email` | `text` | Desired `input[type]` of the TextInput.
`width` | `short`, `medium`, `wide`, `fill` | `fill` | If needed, set an arbitrary width on an input; in most applications (form field) its width should simply comply with the width of the parent container.
`display` | `block` | null | By default inputs are `display: inline-block`; this can be used to apply other display styles if needed.
`extraClasses` | Array of class names | `[]` | Additional classes to concatenate to the wrapping tag's `className` property.
