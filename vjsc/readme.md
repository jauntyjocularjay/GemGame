# VJSLibrary

Welcome to VJSLibrary. This is a library of VanillaJS intended to simplify the creation of HTML elements.

## Constants

- `display` holds valid values for display properties. These are used to hard-code display options.
- `event` holds valid values for events when creating event listeners
- `unit` holds valid values for units

## Arguments / Parameters

### Universal

All elements have the following arguments:
1. `classList`: an optional array of class strings
1. `id`: an optional ID string

### Specialized
1. `textContent`: an `array` of text format elements (`h1`, `p`, `span`, etc.) 
1. `forStr`: a `string` that corresponds to the name of the corresponding container element
1. `event`: an object of `string`s that represent valid values for event strings organized by type.
1. ` func`: an anonymous function passed as a variable to 

## Elements

### Format elements
- `Br`: Line Break

### Text Elements

All these elements take these arguments:
1. [`textContent`](###-Specialized)
1. [`classList`](###-Universal)
1. [`id`](###-Universal)

#### Headers

- `H1` 
- `H2` 
- `H3` 
- `H4`
- `H5`
- `H6`

#### Text Containers

- `P` Paragraph
- `Figcaption` Figure text Caption
- `Div`
- `FlexBox` a div with flexbox applied to it
    - default Flexbox Classes:
        - all values have `display: flex`
        - `flex-flow` values by class:
            - `flex-c`: `column nowrap`
            - `flex-cw`: `column wrap`
            - `flex-cwr`: `column wrap-reverse`
            - `flex-cr` : `column-reverse nowrap`
            - `flex-crw`: `column-reverse wrap`
            - `flex-crwr`: `column-reverse wrap-reverse`
            - `flex-r`: `row nowrap`
            - `flex-rw`: `row wrap`
            - `flex-rwr`: `row wrap-reverse`
            - `flex-rr`: `row-reverse nowrap`
            - `flex-rrw`: `row-reverse wrap`
            - `flex-rrwr`: `row-reverse wrap-reverse`
    - Content default:
        - `flex-content-default`: `flex: 1 1 auto`

#### Text Formatting
    
- `A` Anchor
- `Abbr` Abbreviation
- `Blockquote` Block Quote
- `Sub` Subscript
- `Sup` Superscript
- `Span` Span of text
- `Code` Code
- `Pre` Preformatted Text

## Containers
1. [`classList`](###-Universal)
1. [`id`](###-Universal)

- `Div`: A divider element
- `Flexbox`: A `div` with a flexbox class built in
- `form`: A Form container with additional parameter:
    1. `name`: name of the form
- `figure`: an image and caption container 

## Image Elements
- `Img`: an image container

## Container Sub elements
- `Label`: Form Label
1. [`forStr`](###-Specialized)
1. [`textContent`](###-Specialized)
1. [`classList`](###-Universal)
1. [`id`](###-Universal)

## Input
- `Button`: button 
- `DivButton`: a div formatted to look like a button
- `Select`: drop-down 
    - `Option`: elements for Select
- `text`: text-input box

## Event Listener

All `Classable` elements have
1. `addEventListener`:
    - `event`: a value from `event`
    - `func`: a function whose actions are called on the listener's `event`