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

const gem = // Contains gem names, colors, and types
{
    gray: {
        color: 'gray',
        name: 'hematite',
        type: 'dud',
    },
    red: {
        color: 'red',
        name: 'ruby',
        type: 'primary'
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

const IMG = // contains the string paths to the gem images
/**
 * @constant {object} IMG contains the string paths to the gem images
 */
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
    constructor(img=null)
    {
        this.img = img
        this.element = img.element
        this.selectListener()
    }

    static random(spot)
    {
        const i = Math.floor(Math.random() * 53)
        let gem

        if (i >=  0 && i <= 8){
            gem = new Red(spot)
        }
        else if (i >=  9 && i <=  16){
            gem = new Orange(spot)
        }
        else if (i >=  17 && i <= 24){ 
            gem = new Yellow(spot)
        }
        else if (i >= 25 && i <= 32){
            gem = new Green(spot)
        }
        else if (i >= 33 && i <= 40){
            gem = new Blue(spot)
        }
        else if (i >= 40 && i <= 48){
            gem = new Violet(spot)
        }
        else if(i >=  49 && i <=  53){ 
            gem = new Gray(spot)
        }
        else {
            throw new Error(`Gem.random() generated an out-of-bound integer: ${i}`)
        }

        gem.img.element.id = `spot-${spot}`
        return gem
    }

    selectListener()
    {
        this.img.element.addEventListener(event.element.click, () => {
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

    complements = 'Stub: Gem.cannotTouch() is not implemented for this gem'
}

class Gray extends Gem {
    type = gem.gray.type

    constructor(spot)
    {
        super(new Img(IMG.gray, 'gray gem', ['gem', kframe.fall, gem.gray.color], spot))
    }

    complements = [
        gem.white.color
    ]
}

class Red extends Gem {
    type = gem.red.type

    constructor(spot)
    {
        super(new Img(IMG.red, 'red gem', ['gem', kframe.fall, gem.red.color], spot))
    }

    complements = [
        gem.red.color,
        gem.violet.color,
        gem.orange.color,
        gem.white.color
    ]
}

class Orange extends Gem {
    type = gem.orange.type

    constructor(spot)
    {
        super(new Img(IMG.orange, 'orange gem', ['gem', kframe.fall, gem.orange.color], spot))
    }

    complements = [
        gem.orange.color,
        gem.red.color,
        gem.yellow.color,
        gem.white.color
    ]
}

class Yellow extends Gem {
    type = gem.yellow.type

    constructor(spot)
    {
        super(new Img(IMG.yellow, 'yellow gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }

    complements = [
        gem.yellow.color,
        gem.orange.color,
        gem.green.color,
        gem.white.color
    ]
}

class Green extends Gem {
    type = gem.green.type

    constructor(spot)
    {
        super(new Img(IMG.green, 'green gem', ['gem', kframe.fall, gem.green.color], spot))
    }

    complements = [
        gem.green.color,
        gem.yellow.color,
        gem.blue.color,
        gem.white.color
    ]
}

class Blue extends Gem {
    type = gem.blue.type

    constructor(spot)
    {
        super(new Img(IMG.blue, 'blue gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }

    complements = [
        gem.blue.color,
        gem.green.color,
        gem.violet.color,
        gem.white.color
    ]
}

class Violet extends Gem {
    type = gem.violet.type

    constructor(spot)
    {
        super(new Img(IMG.violet, 'violet gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }

    complements = [
        gem.violet.color,
        gem.blue.color,
        gem.red.color,
        gem.white.color
    ]
}

class White extends Gem {
    type = gem.white.type

    constructor(spot)
    {
        super(new Img(IMG.white, 'white gem', ['gem', kframe.fall, gem.yellow.color], spot))
    }

    complements = [
        gem.red.color,
        gem.orange.color,
        gem.yellow.color,
        gem.green.color,
        gem.blue.color,
        gem.violet.color,
        gem.gray.color,
        gem.white.color
    ]
}

export {
    Gem,
    Gray,
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Violet,
    White
}