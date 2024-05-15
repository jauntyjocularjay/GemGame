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
} from './vjsc/vanilla.mjs'

const gem =
{
    red: './img/red.svg',
    orange: './img/orange.png',
    yellow: './img/yellow.png',
    green: './img/green.png',
    blue: './img/blue.png',
    violet: './img/violet.svg',
}

const red = new Img(gem.red, 'red', ['gem'])
const orange = new Img(gem.orange, 'orange', ['gem'])
const yellow = new Img(gem.yellow, 'yellow', ['gem'])
const green = new Img(gem.green, 'green', ['gem'])
const blue = new Img(gem.blue, 'blue', ['gem'])
const violet = new Img(gem.violet, 'violet', ['gem'])

class Gem {
    constructor(color,)
    {
        this.color = color
        
    }
}




const grid = {
    height: 8,
    width: 8
}