import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function FaqSection() {

    const faqs = [
        {
            question: "Is Mochi URL Shortener free to use?",
            answer: "Yes! Mochi offers a generous free tier that includes up to 1,000 shortened URLs per month with basic analytics. For advanced features and higher limits, we offer affordable premium plans."
        },
        {
            question: "How reliable are the shortened URLs?",
            answer: "Our URLs are backed by a 99.9% uptime guarantee with global CDN infrastructure. We also provide automatic failover and redundancy to ensure your links are always accessible."
        },
        {
            question: "Can I customize my shortened URLs?",
            answer: "Absolutely! You can create custom aliases, use your own domain, and even add branded elements to your shortened URLs. This is perfect for maintaining brand consistency across your campaigns."
        },
        {
            question: "What kind of analytics do you provide?",
            answer: "We provide comprehensive analytics including click counts, geographic data, referrer information, device types, browser statistics, and time-based analytics to help you understand your audience better."
        },
        {
            question: "Is there an API available for developers?",
            answer: "Yes! We offer a fully-featured RESTful API with comprehensive documentation. You can integrate URL shortening directly into your applications, automate bulk operations, and access all analytics data programmatically."
        },
        {
            question: "How do you ensure the security of shortened URLs?",
            answer: "We implement multiple security measures including malware scanning, phishing detection, spam filtering, and SSL encryption. We also provide click fraud protection and suspicious activity monitoring."
        },
        {
            question: "Can I track campaign performance?",
            answer: "Yes! You can organize your links into campaigns, track performance metrics, compare different campaigns, and generate detailed reports. This makes it easy to measure ROI and optimize your marketing efforts."
        },
        {
            question: "What happens if I exceed my plan limits?",
            answer: "We'll notify you when you're approaching your limits. You can upgrade your plan at any time, or if you exceed limits, additional usage is billed at reasonable overage rates. We never shut down your existing links."
        },
        {
            question: "Can I export my data?",
            answer: "Absolutely! You can export all your URLs, analytics data, and reports in various formats including CSV, JSON, and PDF. We believe in data portability and transparency."
        },
        {
            question: "Do shortened URLs expire?",
            answer: "Free tier URLs never expire, but inactive URLs (no clicks for 2+ years) may be archived. Premium users get permanent links with guaranteed availability. You can also set custom expiration dates if needed."
        }
    ];

    return (
        <div className="w-full flex flex-col gap-9">
            <div className="w-full flex flex-col items-center">
                <span className="hidden sm:block text-5xl tracking-[-0.05em]">Frequently Asked Questions</span>
                <span className="block sm:hidden text-5xl tracking-[-0.05em]">FAQs</span>
                <div className="mt-4 max-w-150 text-center text-muted-foreground">
                    It's a simple project. Honestly, we shouldn't be doing FAQ for this. Still, here are some answers in case you feel like reading them.
                </div>
            </div>
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
        </div>
    )
}