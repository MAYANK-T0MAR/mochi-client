import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeInSection } from "./FadeInSection";


export default function FaqSection() {

    const faqs = [
        {
            question: "Can I use my own custom alias for a shortened URL?",
            answer: "Yes! When creating a shortened URL, you can specify your own custom alias instead of a random one. This alias will be appended to the shortened link, making it easier to remember or share."
        },
        {
            question: "How long will my shortened URL remain active?",
            answer: "It never expires by default and you can also choose the expiry time when creating the link — options include 1 hour, 1 day, 1 week, 1 month, or never expire. After the chosen duration, the shortened link will stop working automatically."
        },
        {
            question: "Does the URL shortener provide analytics?",
            answer: "Yes! You can view detailed analytics for your shortened links, including total clicks, unique visits, and click-time history."
        },
        {
            question: "Is the redirection fast?",
            answer: "Absolutely, when someone clicks your shortened link, they're instantly redirected to the original destination."
        },
        {
            question: "Do I need to create an account to use the service?",
            answer: "No registration or login is required. You can start shortening URLs immediately without any authentication."
        },
        {
            question: "Is there an API available for developers?",
            answer: <span>Yep! We've got a RESTful API ready to roll. All the details are in our GitHub repo — examples, docs, and everything you need to integrate. Check it out here: <a href="https://github.com/synbhwl/mochi" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">github.com/synbhwl/mochi</a></span>
        },
        {
            question: "Is there a limit to how many URLs I can shorten?",
            answer: "No, you can shorten as many URLs as you want without any restrictions."
        },
        {
            question: "Will my shortened URL work internationally?",
            answer: "Yes. As long as the original website is accessible in the user’s country, your shortened link will work globally."
        },
    ];

    return (
        <div className="w-full flex flex-col gap-9">
            <FadeInSection>
                <div className="w-full flex flex-col items-center">
                    <span className="hidden sm:block text-5xl tracking-[-0.05em]">Frequently Asked Questions</span>
                    <span className="block sm:hidden text-5xl tracking-[-0.05em]">FAQs</span>
                    <div className="mt-4 max-w-150 text-center text-muted-foreground">
                        It's a simple project. Honestly, we shouldn't be doing FAQ for this. Still, here are some answers in case you feel like reading them.
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="w-full flex flex-col gap-5">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-background border border-border rounded-lg px-6 py-2"
                            >
                                <AccordionTrigger className="text-lef text-base cursor-pointer hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-text-secondary leading-relaxed pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </FadeInSection>
        </div>
    )
}