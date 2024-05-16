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




const img =
{
    red: './img/red.svg',
    orange: './img/orange.svg',
    yellow: './img/yellow.svg',
    green: './img/green.svg',
    blue: './img/blue.svg',
    violet: './img/violet.svg',
}

const red = new Img(img.red, 'red', ['gem', 'primary', 'red'])
const orange = new Img(img.orange, 'orange', ['gem', 'secondary', 'orange'])
const yellow = new Img(img.yellow, 'yellow', ['gem', 'primary', 'yellow'])
const green = new Img(img.green, 'green', ['gem', 'secondary', 'green'])
const blue = new Img(img.blue, 'blue', ['gem', 'primary', 'blue'])
const violet = new Img(img.violet, 'violet', ['gem', 'secondary', 'violet'])
const white = new Img(img.white, 'white', ['gem', 'wild', 'white'])
const gray = new Img(img.gray, 'gray', ['gem', 'dud', 'gray'])

class Gem {

    constructor(color=Gem.gray)
    {
        this.color = color
    }

    static random()
    {
        const i = Math.floor(Math.random() * 8)

        console.log('i', i)

        if(i === 0){ return new Gem(gray) }
        else if (i === 1){ return new Gem(red) } 
        else if (i === 2){ return new Gem(orange) }
        else if (i === 3){ return new Gem(yellow) }
        else if (i === 4){ return new Gem(green) }
        else if (i === 5){ return new Gem(blue) }
        else if (i === 6){ return new Gem(violet) }
        else if (i === 7){ return new Gem(white) }
        else { throw new Error('Gem.random() generated an out-of-bound integer') }
    }
}

class Line
{
    constructor(int)
    {
        this.flexBox = new FlexBox(flex.r,['line'], `line${int}`)
        const spot = ['a','b','c','d','e','f','g','h']
        for( let i = 0; i < 8; i++)
        {
            const gem = new Gem.random()
            console.log('gem', gem)
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
    constructor(height)
    {
        this.field = {
            data: new Grid(8,height),
            container: new Div(['field'], 'field'),
            lines: []
        }

        for(let i = 0; i < height; i++)
        {
            this.field.lines.push(new Line(i))
            this.field.container.element.appendChild(this.field.lines[i].flexBox.element)
        }
        console.log('this.field.lines', this.field.lines)
    }

    getLine(int)
    {
        return this.field.lines[int]
    }

    getSpot(int, char)
    {
        return this.field.lines[int].getSpot(char)
    }
}

const css = {
    html: [
        'background-color: #333',
        'color: #fff'
    ]
}

const play = new PlayField(8)

document.body.appendChild(play.field.container.element)

addAdoptedStyleSheet( parseCSSObject(css) )


