export interface InputAttributes {
    className: string
    id: string
    label: string
    placeholder: string
    type?: any
    name: string
    change: any
    blur: any
    value: string
    error: any
    touch: any
}
export interface submitBtn {
    content: string
    disable: any
}
export interface click {
    onClick: any
}

export interface recipes {
    bottle: string,
    fruit: string,
    title: string,
    paragraph: string,
    onClick: any;
}

export interface contentprops {
    heading: string,
    paragraph: string,
    button?: string
}

export interface postProps {
    title: string,
    paragraph: string,
    image: string,
    userImg: string,
    userName: string,
    time: string,
    backgroundColor: string,
    animation?: any
}