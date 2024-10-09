import { Grid } from '../module/grid/Grid.mjs'
import {
    Gem,
    Gray,
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Violet,
    White
} from './Gem.mjs'
import {
    // Constants
    display,
    flex,
    event,
    unit,

    // Base Classes
    OptionSelection,
    StyleSheet,
    Listener,
        ListenerOnLoad, 

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
    JSONCSS,
} from '../module/vjsc/vanilla.mjs'

class Line
/**
 * @class Line represents a column on the play field
 */
{
    static spot = ['a','b','c','d','e','f','g','h']
    constructor(index=0)
    {
        this.flexBox = new FlexBox(flex.c, ['line', flex.flow.default], `line-${index}`)
        for( let i = 0; i < 8; i++)
        {
            const gem = Gem.random(Line.spot[i])
            this.flexBox.element.appendChild(gem.img.element)            
        }
    }

    getSpot(char)
    {
        if(Line.spot.includes(char) === false){ 
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
        this.data = new Grid(height, 8)
        this.container = new FlexBox(flex.r,['field'], 'field'),
        this.lines = []

        for(let i = 0; i < height; i++)
        {
            this.lines.push(new Line(i))
            this.container.element.appendChild(this.lines[i].flexBox.element)
        }
    }

    getLine(index)
    {
        return this.lines[index]
    }

    getSpot(lineNumber, columnChar)
    {
        return this.lines[lineNumber].getSpot(columnChar)
    }

    compareGems(locationA={lineNumber: 0, spotNumber: 0}, locationB={lineNumber: 0, spotNumber: 0})
    /**
     * @todo Determine match
     */
    {
        let gemA = this.data.getNode(locationA.lineNumber, locationA.spotNumber)
        let gemB = this.data.getNode(locationB.lineNumber, locationB.spotNumber)

        


        return ''
    }

    swapGems(spotA=null, spotB=null)
    /**
     * @todo Swap animation
     */
    {


    }
}

export {
    PlayField,
    Line
}