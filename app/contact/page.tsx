import ContactForm from "@/components/ContactForm"
import Cf7FormWrapper from "@/components/Cf7FormWrapper"

const Contact = () => {
    return (
        <>
            <div className="text-center py-12 px-6 mt-12">
                <h1 className="font-display font-bold text-5xl mb-6">Get in touch</h1>
                <p className="max-w-lg mx-auto"></p>
            </div>
            <div className="container mx-auto px-4 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div>
                        <div className="flex items-center my-2">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <a href="tel:01632 960192">+254 82625 955</a>
                            &nbsp;|&nbsp;
                            <a href="tel:01632 960192">+254 719 394 795</a>
                        </div>
                        <a href="mailto:2321 Wildwood Street, OH, 44503" className="flex items-center my-2">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            starlynadventures@gmail.com
                        </a>
                        <div className="flex items-center my-2">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg> MON-SAT, 9-5 | SUN, 10-4
                        </div>
                        {/* <a href="https://www.google.com/maps/place/2321 Wildwood Street, OH, 44503" target="_blank" className="flex items-center my-2">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg> 2321 Wildwood Street, OH, 44503
                        </a> */}
                    </div>
                    <div>
                        <Cf7FormWrapper siteUrl={''} formId={213} url={'https://api.starlynthrillingadventures.com/wp-json/contact-form-7/v1/contact-forms/213/feedback/'}>
                            <ContactForm />
                        </Cf7FormWrapper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact