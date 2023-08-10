import { FC } from "react";

const faq: Array<object> = [
    {
        question: "What is binge drinking?",
        answer: "Is beer or wine safer to drink than liquor?"
    },
    {
        question: "Is beer or wine safer to drink than liquor?",
        answer: "Is beer or wine safer to drink than liquor?"
    },
    {
        question: "What is binge drinking?",
        answer: "Why do some people react differently to alcohol than others?"
    },
    {
        question: "What is alcohol?",
        answer: "Is beer or wine safer to drink than liquor?"
    },
    {
        question: "What does moderate drinking mean?",
        answer: "Is beer or wine safer to drink than liquor?"
    },
]

export const Faq: FC = () => {
    return (
        <>
            <section className="components__faq">
                <h2>Frequently Asked Questions</h2>
                <div>
                    {faq.map((faqs: any, index: number) => {
                        return (
                            <details key={index}>
                                <summary>
                                    <p>{faqs.question}</p>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.9165 15.5837V9.08366H0.416504V6.91699H6.9165V0.416992H9.08317V6.91699H15.5832V9.08366H9.08317V15.5837H6.9165Z" fill="white" />
                                    </svg>
                                </summary>
                                <p>{faqs.answer}</p>
                            </details>
                        )
                    })}
                </div>
            </section>
        </>
    )
}