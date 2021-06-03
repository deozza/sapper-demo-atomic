export default class BaseParagraphModel {
    content: string
    style: string

    constructor(content: string, style: string = 'light') {
        this.content = content

        const EXPECTED_STYLES: Array<string> = [
            'light',
            'dark',
            'success',
            'danger',
            'warning',
            'info'
        ]

        if(EXPECTED_STYLES.includes(style) === false){
            throw Error("Style '"+style+"' is not a valid style for BaseParagraphModel")
        }
        this.style = style
    }
}