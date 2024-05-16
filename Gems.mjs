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
    white: './img/white.svg',
    gray: './img/gray.svg'
}

const css = {
    html: [
        'background-color: #333',
        'color: #fff'
    ]
}

class Gem {

    constructor(img=null)
    {
        this.img = img
    }

    static random(spot)
    {
        const i = Math.floor(Math.random() * 8)
        let gem
        if(i === 0){ 
            gem = new Gem(new Img(img.gray, 'gray', ['gem', 'dud', 'gray', flex.flow.default]))
        }
        else if (i === 1){
            gem = new Gem(new Img(img.red, 'red', ['gem', 'primary', 'red', flex.flow.default]))
        } 
        else if (i === 2){
            gem = new Gem(new Img(img.orange, 'orange', ['gem', 'secondary', 'orange', flex.flow.default]))
        }
        else if (i === 3){ 
            gem = new Gem(new Img(img.yellow, 'yellow', ['gem', 'primary', 'yellow', flex.flow.default]))
        }
        else if (i === 4){
            gem = new Gem(new Img(img.green, 'green', ['gem', 'secondary', 'green', flex.flow.default]))
        }
        else if (i === 5){
            gem = new Gem(new Img(img.blue, 'blue', ['gem', 'primary', 'blue', flex.flow.default]))
        }
        else if (i === 6){
            gem = new Gem(new Img(img.violet, 'violet', ['gem', 'secondary', 'violet', flex.flow.default]))
        }
        else if (i === 7){
            gem = new Gem(new Img(img.white, 'white', ['gem', 'wild', 'white', flex.flow.default]))
        }
        else {
            throw new Error('Gem.random() generated an out-of-bound integer')
        }

        gem.img.element.id = `spot-${spot}`
        return gem
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
            const gem = Gem.random(spot[i])
            this.flexBox.element.appendChild(gem.img.element)
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

const play = new PlayField(8)

document.body.appendChild(play.field.container.element)

addAdoptedStyleSheet( parseCSSObject(css) )
