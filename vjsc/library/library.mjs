import {
    // Constants
    display,
    flex,
    event,
    unit,

    // Base Classes
    Selection,
    StyleSheet,
    Listener,
        ListenerOnLoad,
    // FlexBoxClass,

    // Classables
    // // Containers
    Img,
    Div,
        DivBtn,
        FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    TextArea,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,

    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
        Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,
} from '../vanilla.mjs'

class ClassableForm
{
    constructor(alias='classable', classList=['form'], id='classable-form')
    {
        this.element = new Form(alias, classList, id)
        ['alias', 'classList', 'id'].forEach(item => {
            new Input('text', [`${item}-input`], `${item}-input`).appendTo(this.element)
        })
    }
}

const cssRules = [
    'html { background-color: #333; }'
]

addAdoptedStyleSheet(cssRules)


