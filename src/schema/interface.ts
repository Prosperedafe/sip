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

export interface RecipeStep {
    heading: string;
    img: string;
    step?: string[];
}

export interface recipeID {
    id: number,
    title: string,
    paragraph: string,
    background: string,
    fruit: any,
    bottle: any,
    route: string
    steps1?: RecipeStep[]
    steps2?: RecipeStep[]
    steps3?: RecipeStep[]
    steps4?: RecipeStep[]
    steps5?: RecipeStep[]
    steps6?: RecipeStep[]
}