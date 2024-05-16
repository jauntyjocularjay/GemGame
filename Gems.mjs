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
    parseCSSObject
} from './vjsc/vanilla.mjs'
import { Grid } from './grid/Grid.mjs'



class Gem {
    red = new Img(gem.red, 'red', ['gem'])
    orange = new Img(gem.orange, 'orange', ['gem'])
    yellow = new Img(gem.yellow, 'yellow', ['gem'])
    green = new Img(gem.green, 'green', ['gem'])
    blue = new Img(gem.blue, 'blue', ['gem'])
    violet = new Img(gem.violet, 'violet', ['gem'])

    constructor(color=null)
    {
        this.color = color
    }

    random()
    {
        const i = Math.floor(Math.random() * 6)

        if(i === 0){ return Gem.red }
        else if (i === 1){ return Gem.orange }
        else if (i === 2){ return Gem.yellow }
        else if (i === 3){ return Gem.green }
        else if (i === 4){ return Gem.blue }
        else if (i === 5){ return Gem.violet }
        else { throw new Error('Gem.random() generated an out-of-bound integer') }
    }
}

const grid = new Grid(8,8)

const gem =
{
    red: './img/red.svg',
    orange: './img/orange.png',
    yellow: './img/yellow.png',
    green: './img/green.png',
    blue: './img/blue.png',
    violet: './img/violet.svg',
}

const css = {
    html: [
        'background-color: #333',
        'color: #fff'
    ]
}

addAdoptedStyleSheet( parseCSSObject(css) )


