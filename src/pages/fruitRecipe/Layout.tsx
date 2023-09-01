import { Fragment, FC } from "react";

interface RecipeStep {
    heading: string;
    img: string;
    step?: string[];
}

interface steps {
    step: RecipeStep[]
}

export const BaseColumn: FC<steps> = ({ step }) => {

    return (
        <Fragment>
            <section className="fruit__recipe__steps reverse">
                <section>
                    {step.map((step1: any, index: number) => {
                        return (
                            <Fragment key={index}>
                                <h3 key={index}>
                                    {step1.heading}
                                </h3>
                            </Fragment>
                        )
                    })}
                    <Fragment>
                        {step.map((step: any, index: number) => {
                            return (
                                <ul key={index}>
                                    {step?.step?.map((step: any, index: number) => {
                                        return (
                                            <li key={index}>
                                                {step}
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        })}
                    </Fragment>
                </section>
                <figure>
                    {step.map((step: any, index: number) => {
                        return (
                            <Fragment key={index}>
                                <img src={step.img} alt={step?.title} />
                            </Fragment>
                        )
                    })}
                </figure>
            </section>
        </Fragment>
    )
}
export const ReverseColumn: FC<steps> = ({ step }) => {

    return (
        <Fragment>
            <section className="fruit__recipe__steps row">
                <figure>
                    {step.map((step: any, index: number) => {
                        return (
                            <Fragment key={index}>
                                <img src={step.img} alt={step?.title} />
                            </Fragment>
                        )
                    })}
                </figure>
                <section>
                    {step.map((step1: any, index: number) => {
                        return (
                            <Fragment key={index}>
                                <h3 key={index}>
                                    {step1.heading}
                                </h3>
                            </Fragment>
                        )
                    })}
                    <Fragment>
                        {step.map((step: any, index: number) => {
                            return (
                                <ul key={index}>
                                    {step?.step?.map((step: any, index: number) => {
                                        return (
                                            <li key={index}>
                                                {step}
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        })}
                    </Fragment>
                </section>
            </section>
        </Fragment>
    )
}