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
    red = new Img(gem.red, 'red', ['gem', 'primary'])
    orange = new Img(gem.orange, 'orange', ['gem', 'secondary'])
    yellow = new Img(gem.yellow, 'yellow', ['gem', 'primary'])
    green = new Img(gem.green, 'green', ['gem', 'secondary'])
    blue = new Img(gem.blue, 'blue', ['gem', 'primary'])
    violet = new Img(gem.violet, 'violet', ['gem', 'secondary'])
    white = new Img(gem.white, 'white', ['gem'])
    gray = new Img(gem.gray, 'gray', ['gem'])

    constructor(color=Gem.gray)
    {
        this.color = color
    }

    static random()
    {
        const i = Math.floor(Math.random() * 8)

        if(i === 0){ return Gem.gray }
        else if (i === 1){ return Gem.red } 
        else if (i === 2){ return Gem.orange }
        else if (i === 3){ return Gem.yellow }
        else if (i === 4){ return Gem.green }
        else if (i === 5){ return Gem.blue }
        else if (i === 6){ return Gem.violet }
        else if (i === 7){ return Gem.white }
        else { throw new Error('Gem.random() generated an out-of-bound integer') }
    }
}

class Line
{
    constructor(int)
    {
        this.element = new FlexBox(flex.r,['line'], `line${int}`)
        const spot = ['a','b','c','d','e','f','g','h']
        for( let i = 0; i < 8; i++)
        {
            const gem = new Div(['spot','flex-content-default'], `spot-${spot[i]}`)
            this.element.appendChild(gem)
        }
    }

    getSpot(char)
    {
        if('abcdefgh'.includes(char) === false){ 
            throw new Error('Line.getSpot() received an invalid character')
        }
        else {
            return this.element.querySelector(`#spot-${char}`)
        }
    }

    insertGem(char, gem)
    {
        this.getSpot(char).appendChild(gem)
    }

    removeGem(char)
    {
        this.getSpot(char).removeChild()
    }

}

class PlayField {
    constructor()
    {
        const field = {
            data: new Grid(8,8),
            container: new Div(['field'], 'field'),
            lines: []
        }

        field.lines
    }
}

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


