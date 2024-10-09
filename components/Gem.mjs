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
    fall: 'fall',
    matched: 'matched',
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
}

const colorHex = {
    gray: '#444',
    red: '#d44',
    orange: '#f60',
    yellow: '#da4',
    green: '#4d4',
    blue: '#33a',
    violet: '#a4d',
    white: '#fff',
}

const gem =
    // Contains gem names, colors, and types
    {
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
    // contains the string paths to the gem images
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
        gray: './img/gray.svg',
    }

class Gem {
    static selected = 0
    static RandomBounds = {
        red: [0, 8],
        orange: [9, 16],
        yellow: [17, 24],
        green: [25, 32],
        blue: [33, 40],
        violet: [41, 48],
        gray: [49, 53],
    }
    static complements = null // complements = these gems, when matched with their supplements, turn into the color that remains.
    static supplements = null // supplements = these gems, when matched with their complements, disappear on match

    constructor(img = null) {
        this.img = img
        this.element = img.element
        this.selectListener()
    }

    static random(spot)
    /**
     * @static @method random(spot) generates a random gem at the given spot
     */
    {
        const i = Math.floor(Math.random() * 53)
        let gem

        if (i >= Gem.RandomBounds.red[0] && i <= Gem.RandomBounds.red[1]) {
            gem = new Red(spot)
        } else if (
            i >= Gem.RandomBounds.orange[0] &&
            i <= Gem.RandomBounds.orange[1]
        ) {
            gem = new Orange(spot)
        } else if (
            i >= Gem.RandomBounds.yellow[0] &&
            i <= Gem.RandomBounds.yellow[1]
        ) {
            gem = new Yellow(spot)
        } else if (
            i >= Gem.RandomBounds.green[0] &&
            i <= Gem.RandomBounds.green[1]
        ) {
            gem = new Green(spot)
        } else if (
            i >= Gem.RandomBounds.blue[0] &&
            i <= Gem.RandomBounds.blue[1]
        ) {
            gem = new Blue(spot)
        } else if (
            i >= Gem.RandomBounds.violet[0] &&
            i <= Gem.RandomBounds.violet[1]
        ) {
            gem = new Violet(spot)
        } else if (
            i >= Gem.RandomBounds.gray[0] &&
            i <= Gem.RandomBounds.gray[1]
        ) {
            gem = new Gray(spot)
        } else {
            throw new Error(
                `Gem.random() generated an out-of-bound integer: ${i}`
            )
        }

        gem.img.element.id = `spot-${spot}`
        return gem
    }

    selectListener() {
        this.img.element.addEventListener(event.element.click, () => {
            const summary = 'select a gem to move'
            if (this.element.classList.contains('selected')) {
                this.element.classList.remove('selected')
                Gem.selected--
            } else if (
                !this.element.classList.contains('selected') &&
                Gem.selected < 2
            ) {
                this.element.classList.add('selected')
                this.element.classList.add('matched')
                Gem.selected++
            }
        })
    }

    isMatch(targetGem = new Gem())
    {
        if(this.complements)
        {
            return this.complements.indexOf(targetGem.type.color) !== -1
        }
        else if (this.supplements)
        {
            return this.supplements.indexOf(targetGem.type.color) !== -1
        }
        else
        {
            throw new TypeError(`Gem does not have type. Check your subject gem.`);
        }
    }
}

class Gray extends Gem {
    static type = gem.gray
    static supplements = [gem.white.color]

    constructor(spot) {
        super(
            new Img(
                IMG.gray,
                'gray gem',
                ['gem', kframe.fall, gem.gray.color],
                spot
            )
        )
    }    
}

class Red extends Gem {
    static type = gem.red
    
    static supplements = [
        gem.red.color,
        gem.violet.color,
        gem.orange.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.red,
                'red gem',
                ['gem', kframe.fall, gem.red.color],
                spot
            )
        )
    }

}

class Orange extends Gem {
    static type = gem.orange
    static supplements = [
        gem.orange.color,
        gem.red.color,
        gem.yellow.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.orange,
                'orange gem',
                ['gem', kframe.fall, gem.orange.color],
                spot
            )
        )
    }
}

class Yellow extends Gem {
    static type = gem.yellow
    static supplements = [
        gem.yellow.color,
        gem.orange.color,
        gem.green.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.yellow,
                'yellow gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
    }

}

class Green extends Gem {
    static type = gem.green
    static supplements = [
        gem.green.color,
        gem.yellow.color,
        gem.blue.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.green,
                'green gem',
                ['gem', kframe.fall, gem.green.color],
                spot
            )
        )
    }

}

class Blue extends Gem {
    static type = gem.blue
    static supplements = [
        gem.blue.color,
        gem.green.color,
        gem.violet.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.blue,
                'blue gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
    }

}

class Violet extends Gem {
    static type = gem.violet
    static supplements = [
        gem.violet.color,
        gem.blue.color,
        gem.red.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.violet,
                'violet gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
    }
}

class White extends Gem {
    static type = gem.white
    static supplements = [
        gem.red.color,
        gem.orange.color,
        gem.yellow.color,
        gem.green.color,
        gem.blue.color,
        gem.violet.color,
        gem.gray.color,
        gem.white.color,
    ]

    constructor(spot) {
        super(
            new Img(
                IMG.white,
                'white gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
    }
}

export { Gem, Gray, Red, Orange, Yellow, Green, Blue, Violet, White }
