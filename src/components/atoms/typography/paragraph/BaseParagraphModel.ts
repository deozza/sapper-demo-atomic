export default class BaseParagraphModel {
    content: string
    style: string
    additionalClass: string

    constructor(content: string, style: string = 'light',additionalClass: string = '') {
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

        this.additionalClass = additionalClass
    }
}