export default class BaseParagraphModel {
    content: string
    style: string
    linkTo: string
    isInteral: boolean
    hasUnderline: boolean

    constructor(content: string, style: string = 'light',linkTo: string = '/', isInternal: boolean = true, hasUnderline: boolean = true) {
        this.content = content

        const EXPECTED_STYLES: Array<string> = [
            'light',
            'dark',
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info'
        ]

        if(EXPECTED_STYLES.includes(style) === false){
            throw Error("Style '"+style+"' is not a valid style for BaseParagraphModel")
        }
        this.style = style

        this.linkTo = linkTo

        this.isInteral = isInternal

        this.hasUnderline = hasUnderline
    }
}