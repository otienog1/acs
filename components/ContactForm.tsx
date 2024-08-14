"use client"

import { useState, useEffect, useCallback } from "react"

const ContactForm = (props: any) => {
    let { handler, isLoading, isSent, hasError, message } = props

    const [formState, setFormState] = useState({})

    const handleFieldChange = (field: any, e: any) => {
        setFormState({
            ...formState,
            [field]: e.target.value,
        })
    }

    const initFormState = useCallback(() => {
        setFormState({
            ...formState,
            ['your-subject']: "Contact Form",
        })
    }, [formState])

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        handler(e, formState)
    }

    useEffect(() => {
        initFormState()
    }, [])


    return (
        <div>
            <form onSubmit={e => handleFormSubmit(e)} encType="multipart/form-data">
                <div>
                    <label className="block text-base tracking-tight text-gray-600">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        onChange={e => handleFieldChange('your-name', e)}
                        className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                    />
                </div>
                <div className="mt-6">
                    <label className="block text-base tracking-tight text-gray-600">Email address</label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        onChange={e => handleFieldChange('your-email', e)}
                        className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                    />
                </div>
                <div className="mt-6">
                    <label className="block text-base tracking-tight text-gray-600">Message</label>
                    <textarea
                        placeholder="Your message"
                        required
                        onChange={e => handleFieldChange('your-message', e)}
                        className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700">
                    </textarea>
                </div>
                <div className="flex mt-6 content-center align-middle">
                    <button className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
                    >
                        Send message
                    </button>
                    <div className=" flex ml-4 text-sm content-center py-4">
                        {isLoading ? <p>Sending</p> : ""}
                        {isSent ? <p>Sent</p> : ""}
                        {hasError || ""}
                    </div>
                </div>
            </form >
        </div >
    )
}

export default ContactForm