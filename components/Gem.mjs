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
    ListenerOnLoad,

    // Classables
    // // Containers
    Img,
    Div,
    DivBtn,
    FlexBox,
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

    constructor(img = null) {
        this.img = img
        this.element = img.element
        this.selectListener()
    }

    static random(spot) /**
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

    supplements = 'Stub: Gem.complements() is not implemented for this gem'
}

class Gray extends Gem {
    type = gem.gray.type

    constructor(spot) {
        super(
            new Img(
                IMG.gray,
                'gray gem',
                ['gem', kframe.fall, gem.gray.color],
                spot
            )
        )
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

    supplements = [gem.white.color]
}

class Red extends Gem {
    type = gem.red.type

    constructor(spot) {
        super(
            new Img(
                IMG.red,
                'red gem',
                ['gem', kframe.fall, gem.red.color],
                spot
            )
        )
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

    supplements = [
        gem.red.color,
        gem.violet.color,
        gem.orange.color,
        gem.white.color,
        gem.white.color,
    ]
}

class Orange extends Gem {
    type = gem.orange.type

    constructor(spot) {
        super(
            new Img(
                IMG.orange,
                'orange gem',
                ['gem', kframe.fall, gem.orange.color],
                spot
            )
        )
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

    supplements = [
        gem.orange.color,
        gem.red.color,
        gem.yellow.color,
        gem.white.color,
        gem.white.color,
    ]
}

class Yellow extends Gem {
    type = gem.yellow.type

    constructor(spot) {
        super(
            new Img(
                IMG.yellow,
                'yellow gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
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

    supplements = [
        gem.yellow.color,
        gem.orange.color,
        gem.green.color,
        gem.white.color,
        gem.white.color,
    ]
}

class Green extends Gem {
    type = gem.green.type

    constructor(spot) {
        super(
            new Img(
                IMG.green,
                'green gem',
                ['gem', kframe.fall, gem.green.color],
                spot
            )
        )
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

    supplements = [
        gem.green.color,
        gem.yellow.color,
        gem.blue.color,
        gem.white.color,
        gem.white.color,
    ]
}

class Blue extends Gem {
    type = gem.blue.type

    constructor(spot) {
        super(
            new Img(
                IMG.blue,
                'blue gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
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

    supplements = [
        gem.blue.color,
        gem.green.color,
        gem.violet.color,
        gem.white.color,
    ]
}

class Violet extends Gem {
    type = gem.violet.type

    constructor(spot) {
        super(
            new Img(
                IMG.violet,
                'violet gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
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

    supplements = [
        gem.violet.color,
        gem.blue.color,
        gem.red.color,
        gem.white.color,
        gem.white.color,
    ]
}

class White extends Gem {
    type = gem.white.type

    constructor(spot) {
        super(
            new Img(
                IMG.white,
                'white gem',
                ['gem', kframe.fall, gem.yellow.color],
                spot
            )
        )
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

    supplements = [
        gem.red.color,
        gem.orange.color,
        gem.yellow.color,
        gem.green.color,
        gem.blue.color,
        gem.violet.color,
        gem.gray.color,
        gem.white.color,
    ]
}

export { Gem, Gray, Red, Orange, Yellow, Green, Blue, Violet, White }

export { Gem, Gray, Red, Orange, Yellow, Green, Blue, Violet, White }
