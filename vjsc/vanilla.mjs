import { EasyAccessor } from './mod/ea/EasyAccessor.mjs'



class Selection {
    constructor(value = 'prompt', textContent = 'Make a selection') {
        this.value = value
        this.textContent = textContent
    }

}

class StyleSheet extends EasyAccessor {
    constructor(rules = []) {
        super()
        const sheet = new CSSStyleSheet()
        this.element = sheet
        // sheet.ownerRule = ''
        // sheet.disabled = false
        // sheet.href = ''
        // sheet.media = MediaList
        // sheet.ownerNode = Node
        // sheet.parentStyleSheet = StyleSheet
        // sheet.title = 'title'
        // sheet.type = 'text/css'
        // @note Why did I have this reversed? rules.reverse().forEach
        rules.forEach(rule => sheet.insertRule(rule))
    }

    properties() {
        return [
            'list : cssRules',
            'string : ownerRule',
            'boolean : disabled',
            'string : href',
            'MediaList : media',
            'Node : ownerNode',
            'StyleSheet : parentStyleSheet',
            'string : title',
            'string : type'
        ]
    }
}

class Listener {
    constructor(event, func) {
        this.event = event
        this.func = func
    }
}

class ListenerOnLoad extends Listener {
    constructor(func) {
        super(event.page.load, func)
    }
}

class Classable extends EasyAccessor {
    constructor(element, classList = [], id = null) {
        super()
        this.element = element
        this.listeners = []
        this.addToClassList(classList)
        this.addID(id)
    }

    addToClassList(classList) {
        classList.forEach(clss => this.element.classList.add(clss))
    }

    removeFromClassList(classList) {
        classList.forEach(clss => this.element.classList.remove(clss))
    }

    addID(id) {
        if (id) this.element.id = id
    }

    addEventListener(event = event.element.click, func = () => { }) {
        this.listeners.push(this.element.addEventListener(event, func))
    }

    /**
     * @todo debug this method
     * @param {Listener} listener 
     */
    addEventListner(listener = { event: null, func: () => { } }) {
        this.listeners.push(this.element.addEventListener(listener.event, listener.func))
    }

    innerHTML(innerHTML) {
        this.element.innerHTML += innerHTML
    }
}

class Img extends Classable {
    constructor(imgPath, alt = 'image', classList = [], id = null) {
        super(document.createElement('img'), classList, id)
        this.element.src = imgPath
        this.element.alt = alt
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Div extends Classable {
    constructor(classList = [], id = null) {
        super(document.createElement('div'), classList, id)
        this.addToClassList(classList)
        this.addID(id)
    }
}

class DivBtn extends Div {
    constructor(textContent = "Button", classList = ['btn'], id = null) {
        super(classList, id)
        const DivBtn = this.element
        this.element.appendChild(new Span(textContent, ['btn-text']))
    }
}

class FlexBox extends Div {
    constructor(clss = flex.c, classList = [], id = null) {
        const flexClasses = [clss]
        classList.forEach(clss => flexClasses.push(clss))
        super(flexClasses, id)
    }
}

class Figure extends Classable {
    constructor(imgPath, captionTextContent = 'str', classList = [], id = null) {
        super(document.createElement('figure'), classList, id)
        const imgClasses = ['img']
        classList.forEach(clss => imgClasses.push(clss))
        this.img = new Img(imgPath, captionTextContent, classList, id + '-fig-img')

        const captionClasses = ['caption']
        classList.forEach(clss => captionClasses.push(clss))
        this.figcapture = new Figcaption(captionTextContent, classList, id + '-fig-caption')

        this.addToClassList(classList)
        this.addID(id)
        this.element.appendChild(this.img.get('element'))
        this.element.appendChild(this.figcapture.get('element'))

    }
}

class Form extends Classable {
    constructor(nameStr = 'form', classList = [], id = null) {
        super(document.createElement('form', classList, id))
        const label = new Label(nameStr)
        this.addToClassList(classList)
        this.addID(id)
        this.element.name = nameStr
        this.element.appendChild(label.element)

    }
}

class Button extends Classable {
    constructor(textContent = "click me", formName = null, classList = [], id = null) {
        super(document.createElement('button'), classList, id)
        const button = this.element
        this.addToClassList(classList)
        this.addID(id)
        button.for = formName
        button.textContent = textContent
    }
}

class TextArea extends Classable {
    constructor(textContent = "text area", classList = [], id = null) {
        super(document.createElement('textarea'), classList, id)
        this.element.textContent = textContent
        this.addToClassList(classList)
        this.addID(id)

    }

}

class Input extends Classable {
    constructor(typeStr, placeholder, textContent = null, forStr = null, classList = [], id = null) {
        super(document.createElement('input'), classList, id)
        const input = this.element
        this.addToClassList(classList)
        this.addID(id)
        input.type = typeStr
        input.placeholder = placeholder
        input.textContent = textContent

    }
}

class Select extends Classable {
    constructor(forStr = 'a form', selectionArray = [], classList = [], id = null) {
        super(document.createElement('select'), classList, id)
        const select = this.element
        const selections = [new Selection()].concat(selectionArray)
        this.addToClassList(classList)
        this.addID(id)
        selections.forEach(selection => {
            const option = new Option(selection.value, selection.textContent)
            select.appendChild(option.element)
        })

    }
}

class Link extends Classable {
    constructor(href, rel, classList = [], id = null) {
        super(classList, id)
        const link = document.createElement('link')
        this.element = link
        this.addToClassList(classList)
        this.addID(id)
        link.href = href
        link.rel = rel

    }
}

class Style extends Classable {
    constructor(cssRules = [], classList = [], id = null) {
        super(document.createElement('style'), classList, id)
        {
            const style = this.element
            addCSSRules(style, cssRules)
        }
    }
}

class Br extends Classable {
    /**
     * @class Br
     *     a line break element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(classList = [], id = null) {
        super(document.createElement('br'), classList, id)

    }
}

class TextElement extends Classable {
    constructor(element, classList = [], id = null) {
        super(element, classList, id)
    }

    addContent(content) {
        if (typeof content === 'string') {
            throw new InvalidContentArrayError()
        }
        else if (Array.isArray(content)) {
            content.forEach(item => {
                if (typeof item === 'string') {
                    throw new InvalidContentArrayError()
                }
                else {
                    this.element.appendChild(item.element)
                }
            })
        }
    }

    textContent(textContent) {
        this.element.textContent = textContent
    }
}

class H1 extends TextElement {
    constructor(textContent, classList = [], id = null) {
        super(document.createElement('h1'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class H2 extends TextElement {
    constructor(textContent, classList = [], id = null) {
        super(document.createElement('h2'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class H3 extends TextElement {
    constructor(textContent, classList = [], id = null) {
        super(document.createElement('h3'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class H4 extends TextElement {
    constructor(textContent, classList = [], id = null) {
        super(document.createElement('h4'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class H5 extends TextElement {
    constructor(textContent, classList = [], id = null) {
        super(document.createElement('h5'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class H6 extends TextElement {
    constructor(textContent, classList = [], id = null) {
        super(document.createElement('h6'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class P extends TextElement {
    constructor(content = null, classList = [], id = null) {
        super(document.createElement('p'), classList, id)
        this.addToClassList(classList)
        this.addID(id)
        this.addContent(content)

    }
}

class Figcaption extends TextElement {
    constructor(textContent = null, classList = [], id = null) {
        super(document.createElement('figcaption'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Label extends TextElement {
    constructor(forStr, textContent = null, classList = [], id = null) {
        super(document.createElement('label'), classList, id)
        const br = new Br()
        this.textContent(textContent)
        this.element.appendChild(br.element)
        this.addToClassList(classList)
        this.addID(id)
        this.element.for = forStr

    }
}

class A extends TextElement {
    constructor(textContent = 'str', href = '#', classList = [], id = null) {
        super(document.createElement('a'), classList, id)
        this.textContent(textContent)
        this.element.href = href

    }
}

class Abbr extends TextElement {
    constructor(textContent = 'str', title = null, classList = [], id = null) {
        super(document.createElement('abbr'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        this.element.title = title

    }
}

class Blockquote extends TextElement {
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('blockquote'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Strong extends TextElement {
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('strong'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Sub extends TextElement {
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('sub'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Sup extends TextElement {
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('sup'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Span extends TextElement {
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('span'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Text extends Span {
    constructor(textContent = 'str', classList = [], id = null) {
        const textClassList = ['plain-text'].concat(classList)
        super(textContent, textClassList, id)
    }

}

class Pre extends TextElement {
    /**
     * @class Pre
     *    a preformatted text element
     * @param {string} textContent
     *     textContent is the text to be displayed in the preformatted text element
     * @param {[string]} classList 
     * @param {string} id 
     * @returns 
     *    returns the preformatted text element
     */
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Code extends TextElement {
    constructor(textContent = 'str', classList = [], id = null) {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Option extends TextElement {
    constructor(value, textContent, classList = [], id = null) {
        super(document.createElement('option'), classList, id)
        const option = this.element
        option.value = value
        option.textContent = textContent

    }
}

class InvalidContentArrayError extends TypeError {
    constructor() {
        super('content must be an array of NodeElements, not a string or an array containing strings')
        this.name = 'InvalidContentArray'
    }

}

const display = {
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
    grid: 'grid',
}

const event = {
    page: {
        load: 'load',
        resize: 'resize',
        refresh: 'refresh',
        scroll: 'scroll',
    },
    element: {
        change: 'change',
        click: 'click',
        input: 'input',
        submit: 'submit',
        update: 'update',
    },
    mouse: {
        click: 'click',
    }
}

const unit = {
    /* No units */
    none: '',

    /* absolute length units */
    cm: 'cm',
    mm: 'mm',
    Q: 'Q',
    in: 'in',
    pc: 'pc',
    pt: 'pt',
    px: 'px',

    /* relative length units */
    em: 'em',
    rem: 'rem',
    vw: 'vw',
    vh: 'vh',
    lh: 'lh',
    rlh: 'rlh',
    percent: '%',
}

const flex = {
    /*  standard flexbox classes for flexboxes  */
    c: 'flex-c',
    cw: 'flex-cw',
    cwr: 'flex-cwr',
    cr: 'flex-cr',
    crw: 'flex-crw',
    crwr: 'flex-crwr',
    r: 'flex-r',
    rw: 'flex-rw',
    rwr: 'flex-rwr',
    rr: 'flex-rr',
    rrw: 'flex-rrw',
    rrwr: 'flex-rrwr',

    /*  flex-direction  */
    column: 'column',
    colReverse: 'column-reverse',
    row: 'row',
    rowReverse: 'row-reverse',

    /*  wrap  */
    nowrap: 'nowrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse',

    /*  basis  */
    auto: 'auto',

    /*  default flow  */
    flow: {
        default: 'flex-content-default'
    }
}

const cssRules =
    [
        // Flexbox Classes
        '.flex-c { display: flex; flex-flow: column nowrap; flex: 1 1 auto; }',
        '.flex-cw { display: flex; flex-flow: column wrap; flex: 1 1 auto; }',
        '.flex-cwr { display: flex; flex-flow: column wrap-reverse; flex: 1 1 auto; }',
        '.flex-cr { display: flex; flex-flow: column-reverse nowrap; flex: 1 1 auto; }',
        '.flex-crw { display: flex; flex-flow: column-reverse wrap; flex: 1 1 auto; }',
        '.flex-crwr { display: flex; flex-flow: column-reverse wrap-reverse; flex: 1 1 auto; }',
        '.flex-r { display: flex; flex-flow: row nowrap; flex: 1 1 auto; }',
        '.flex-rw { display: flex; flex-flow: row wrap; flex: 1 1 auto; }',
        '.flex-rwr { display: flex; flex-flow: row wrap-reverse; flex: 1 1 auto; }',
        '.flex-rr { display: flex; flex-flow: row-reverse nowrap; flex: 1 1 auto; }',
        '.flex-rrw { display: flex; flex-flow: row-reverse wrap; flex: 1 1 auto; }',
        '.flex-rrwr { display: flex; flex-flow: row-reverse wrap-reverse; flex: 1 1 auto; }',
        '.flex-content-default { flex: 1 1 auto; }'
]

const cssRulesObj = {
    html: [
        'background-color: #333',
        'text: #fff'
    ]
}

function parseCSSObject(cssRulesObj) {
    const rules = []
    for (var [tag, properties] in Object.entries(cssRulesObj)) {
        const result = `${tag} {`
        if (Array.isArray(properties)) {
            properties.forEach(property)
            {
                result += ` ${property};`
            }
        }
        else if (typeof properties === 'string') {
            result += ` ${properties};`
        }
        result += ' }'
        rules.push(result)
    }
    return rules
}

function getStylesheetByFileName(filename) {
    const stylesheets = Object.values(document.styleSheets)
    let result

    stylesheets.forEach(sheet => {
        if (sheet.href.indexOf(filename) !== -1) {
            result = sheet
        }
    })

    return result
}

function addAdoptedStyleSheet(rules) {
    const stylesheet = new StyleSheet(rules)
    document.adoptedStyleSheets.push(stylesheet.get('element'))
}

cssRules.concat(parseCSSObject(cssRulesObj))

addAdoptedStyleSheet(cssRules)


console.log(cssRules)

export {
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
}