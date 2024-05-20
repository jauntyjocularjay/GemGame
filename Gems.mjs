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
} from './vjsc/vanilla.mjs'
import { Grid } from './grid/Grid.mjs'

const kframe = {
    fall: 'fall'
}

const colorHex = {
    gray: '#444',
    red: '#d44',
    orange: '#f60',
    yellow: '#da4',
    green: '#4d4',
    blue: '#33a',
    violet: '#a4d',
    white: '#fff'
}

const gem = {
    gray: {
        color: 'gray',
        name: 'hematite',
        type: 'dud',
    },
    red: {
        color: 'red',
        name: 'ruby',
        type: 'primary',
    },
    orange: {
        color: 'orange',
        name: 'citrine',
        type: 'secondary',
    },
    yellow: {
        color: 'yellow',
        name: 'topaz',
        type: 'primary',
    },
    green: {
        color: 'green',
        name: 'emerald',
        type: 'secondary',
    },
    blue: {
        color: 'blue',
        name: 'sapphire',
        type: 'primary',
    },
    violet: {
        color: 'violet',
        name: 'amethyst',
        type: 'secondary',
    },
    white: {
        color: 'white',
        name: 'diamond',
        type: 'wild',
    },
}

const IMG =
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

class Gem {
    type = ''

    constructor(img=null)
    {
        this.img = img
        this.element = img.element
        this.selectListener()
    }

    static random(spot)
    {
        const i = Math.floor(Math.random() * 19)
        let gem

        if(i >=  0 && i <=  1){ 
            gem = new Gray(spot)
        }
        else if (i >=  2 && i <=  4){
            gem = new Red(spot)
        }
        else if (i >=  5 && i <=  6){
            gem = new Orange(spot)
        }
        else if (i >=  7 && i <= 10){ 
            gem = new Yellow(spot)
        }
        else if (i >= 11 && i <= 12){
            gem = new Green(spot)
        }
        else if (i >= 13 && i <= 15){
            gem = new Blue(spot)
        }
        else if (i >= 16 && i <= 17){
            gem = new Violet(spot)
        }
        else if (i >= 18 && i <= 18){
            gem = new White(spot)
        }
        else {
            throw new Error(`Gem.random() generated an out-of-bound integer: ${i}`)
        }

        gem.img.element.id = `spot-${spot}`
        return gem
    }

    selectListener()
    {
        this.img.addEventListener(event.element.click, () => {
            const summary = 'select a gem to move'
            if(this.element.classList.contains('selected')){
                this.element.classList.remove('selected')
                selected--
            } else if(!this.element.classList.contains('selected') && selected < 2) {
                this.element.classList.add('selected')
                this.element.classList.add('matched')
                selected++
            }
        })
    }
}

class Gray extends Gem {
    type = gem.gray.type

    constructor(spot)
    {
        super(new Img(IMG.gray, 'gray gem', ['gem', kframe.fall, gem.gray.color], spot))
    }
}

class Red extends Gem {
    type = gem.red.type

    constructor(spot)
    {
        super(new Img(IMG.red, 'red gem', ['gem', kframe.fall, gem.red.color], spot))
    }
}

class Orange extends Gem {
    type = gem.orange.type

    constructor(spot)
    {
        super(new Img(IMG.orange, 'orange gem', ['gem', kframe.fall, gem.orange.color], spot))
    }
}

class Yellow extends Gem {
    type = gem.yellow.type

    constructor(spot)
    {
        super(new Img(IMG.yellow, 'yellow gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }
}

class Green extends Gem {
    type = gem.yellow.type

    constructor(spot)
    {
        super(new Img(IMG.green, 'green gem', ['gem', kframe.fall, gem.green.color], spot))
    }
}

class Blue extends Gem {
    type = gem.blue.type

    constructor(spot)
    {
        super(new Img(IMG.blue, 'blue gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }
}

class Violet extends Gem {
    type = gem.violet.type

    constructor(spot)
    {
        super(new Img(IMG.violet, 'violet gem', ['gem', kframe.fall, gem.yellow.color], spot))
        
    }
}

class White extends Gem {
    type = gem.white.type

    constructor(spot)
    {
        super(new Img(IMG.white, 'white gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }
}

class Line
{
    constructor(int)
    {
        this.flexBox = new FlexBox(flex.c, ['line', flex.flow.default], `line${int}`)
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
            data: new Grid(height, 8),
            container: new FlexBox(flex.r,['field'], 'field'),
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
let selected = 0

document.body.appendChild(play.field.container.element)


