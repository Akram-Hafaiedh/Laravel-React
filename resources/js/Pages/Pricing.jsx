import { Head } from "@inertiajs/inertia-react";
import React from "react";
import WelcomeLayout from '@/Layouts/WelcomeLayout';

export default function Pricing() {
    return (
        <WelcomeLayout

        >
            <Head title="prices" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Pricing Page</div>

                    </div>
                </div>
            </div>

            {/* <section className="relative px-6 xl:px-0">
                <div className="container py-12 mx-auto max-w-7xl">
                    <div className="flex flex-col items-center justify-center w-full">
                        <h1 className="text-4xl text-gray-800 font-base dark:text-white md:text-7xl">Pricing <span className='font-semibold'>Plans</span></h1>
                        <p className="mt-4 text-2xl text-gray-800 lg:w-1/2 lg:text-center dark:text-white">Choose the plan thats right for you and your business.</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <div className="pt-5">
                            <div className="container mx-auto">
                                <div className="w-11/12 mx-auto xl:w-4/5 mb-28">

                                    <div className="flex items-center justify-center" aria-label="toggle checkbox">
                                        <p className="mr-3 text-lg font-bold text-gray-800 uppercase dark:text-white">Monthly</p>
                                        <div className="relative w-12 h-6 rounded-full shadow-sm cursor-pointer">
                                            <input aria-label="subscribe" type="checkbox" name="toggle" id="toggle1" className="absolute w-4 h-4 m-1 bg-white rounded-full shadow-sm appearance-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 focus:outline-none checkbox" />
                                            <label htmlFor="toggle1" className="block w-12 h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"></label>
                                        </div>
                                        <p className="ml-3 text-lg font-normal text-gray-800 uppercase dark:text-white">Anually</p>
                                    </div>

                                </div>

                                <div className="items-stretch justify-between hidden mb-16 -mx-6 xl:flex xl:flex-nowrap gap-x-12">
                                    <div className="flex flex-col w-3/5 px-4 py-5 text-center bg-gray-100 rounded-lg shadow ">
                                        <h2 className="w-full font-bold tracking-[.35em] uppercase text-base text-violet-700">For individuals</h2>
                                    </div>
                                    <div className="flex flex-col w-2/5 px-4 py-5 text-center bg-indigo-200 rounded-lg">
                                        <h2 className="w-full font-bold tracking-[.35em] uppercase text-base text-violet-700">For Teams</h2>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-stretch justify-center mb-12 -mx-6 gap-y-10 xl:gap-y-0 xl:flex-nowrap sm:justify-start first-child:pl-0 last-child:pr-0">

                                    <div className="w-full px-6 mb-4 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:px-2 ">
                                        <div className="relative flex flex-col h-full px-4 py-5 text-left bg-gray-100 rounded-lg shadow stretch">
                                            <div className='absolute flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-inner drop-shadow-md -top-10'>
                                                <svg className="w-8 h-8 fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                                            </div>
                                            <h2 className="mt-12 font-bold tracking-[.35em] uppercase text-base text-violet-700 mb-3">Free</h2>
                                            <ul className="flex flex-col justify-around h-full mb-6">
                                                <li className='flex items-center mb-2 5'>
                                                    <p className="text-base text-gray-900">
                                                        <span className="text-3xl font-meidum">$</span>
                                                        <span className="text-3xl font-meidum">0</span>
                                                        <span className="text-2xl font-base">/ month</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-xs font-normal text-gray-500">No credit card required</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">

                                                    <p className="text-base font-normal text-gray-800 dark:text-white">Experience digital business cards for free, forever.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <button className="w-full px-8 py-4 mb-5 text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Sign up free</button>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="font-semibold text-violet-400">Available on iOS, Android, and web</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Create four digital business cards for yourself</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Share your card via QR code, email, text, or an NFC tag</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Address book with unlimited contacts</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Virtual backgrounds</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-800 hover:underline dark:text-white">Email signatures</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-800 dark:text-white">Import Google Contacts</p>
                                                </li>
                                            </ul>
                                            <button className="w-full px-8 py-4 mt-auto text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Sign up</button>
                                        </div>
                                    </div>

                                    <div className="w-full px-6 mb-4 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:px-2 ">
                                        <div className="relative flex flex-col h-full px-4 py-5 text-left bg-gray-100 rounded-lg shadow">
                                            <div className='absolute flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-inner drop-shadow-md -top-10'>
                                                <svg className="w-8 h-8 fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z" /></svg>
                                            </div>
                                            <h2 className="mt-12 font-bold tracking-[.35em] uppercase text-base text-violet-700 mb-3">Basic</h2>
                                            <ul className="flex flex-col justify-around h-full mb-6">
                                                <li className='flex items-center mb-2 5'>
                                                    <p className="text-base text-gray-900">
                                                        <span className="text-3xl font-meidum">$</span>
                                                        <span className="text-3xl font-meidum">3</span>
                                                        <span className="text-2xl font-base">/ month</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-xs font-normal text-gray-500">$36 billed anually</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">

                                                    <p className="text-base font-normal text-gray-800 dark:text-white">Bring your digital card to life with video.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <button className="w-full px-8 py-4 mb-5 text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Sign up</button>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="font-semibold text-violet-400">Includes everything in the Free plan, plus:</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Create unlimited digital business cards for yourself</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Include a profile video</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Media-rich cards</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Custom colors</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-800 dark:text-white">VCard messaging removed</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-800 dark:text-white">Email support</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">3 paper business card transcriptions/month</a>
                                                </li>


                                            </ul>
                                            <button className="w-full px-8 py-4 mt-auto text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Sign up</button>
                                            <p className="text-sm">Have a question ? <a className='text-violet-800' href='#'>Contact us</a></p>
                                        </div>
                                    </div>

                                    <div className="w-full px-6 mb-4 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:px-2 ">
                                        <div className="relative flex flex-col h-full px-4 py-5 text-left bg-gray-100 rounded-lg shadow dark:border-gray-700">
                                            <div className='absolute flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-inner drop-shadow-md -top-10'>
                                                <svg className="w-8 h-8 fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z" /></svg>
                                            </div>
                                            <h2 className="mt-12 font-bold tracking-[.35em] uppercase text-base text-violet-700 mb-3">Professional</h2>
                                            <ul className="flex flex-col justify-around h-full mb-6">
                                                <li className='flex items-center mb-2 5'>
                                                    <p className="text-base text-gray-900">
                                                        <span className="text-3xl font-meidum">$</span>
                                                        <span className="text-3xl font-meidum">6</span>
                                                        <span className="text-2xl font-base">/ month</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-xs font-normal text-gray-500">$72 billed anually</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">

                                                    <p className="text-base font-normal text-gray-800 dark:text-white">Packed with powerful features to grow your network.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <button className="w-full px-8 py-4 mb-5 text-base text-white uppercase transition duration-150 ease-in-out bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 hover:bg-indigo-800">Sign up</button>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="font-semibold text-violet-400">Includes everything in the Professional plan, plus:</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Additional card designs</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Personalized link</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Branded QR code</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Add badges</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Include PDFs</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Card analytics</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Send via VCard</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Add notes and tags to contacts</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Sync with Google Contacts and with Outlook/Exchange</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">CRM integration & workflow automation</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">10 paper business card transcriptions/month (option to upgrade to 30)</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-800 dark:text-white">Specialists appoinments</p>
                                                </li>
                                            </ul>
                                            <button className="w-full px-8 py-4 mt-auto text-base text-white uppercase transition duration-150 ease-in-out bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 hover:bg-indigo-800">Sign up</button>
                                            <p className="text-sm">Have a question ? <a className='text-violet-800' href='#'>Contact us</a></p>
                                        </div>
                                    </div>

                                    <div className="w-full px-6 mb-4 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:px-2 ">
                                        <div className="relative h-full px-4 py-5 text-left bg-indigo-200 rounded-lg shadow">
                                            <div className='absolute flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-inner drop-shadow-md -top-10'>
                                                <svg className="w-8 h-8 fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z" /></svg>
                                            </div>
                                            <h2 className="mt-12 font-bold tracking-[.35em] uppercase text-base text-violet-700 mb-3">Business</h2>
                                            <ul className="flex flex-col justify-around mb-6">
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-900">For medium to large organizations.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-xs font-normal text-gray-500">(minimum 5 users)</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-900">Create, manage, distribute digital cards for your company.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <button className="w-full px-8 py-4 mb-5 text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Contact Sales</button>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="font-semibold text-violet-400">Includes everything in the Professional plan, plus:</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Digital business cards for the entire team</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Volume pricing</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Multiple administrators</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Organization view & card control</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Add/remove employees and edit their permissions</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Card templates</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Corporate address book</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">CRM integrations with Salesforce and Hubspot</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Security/IT review</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Support for multiple divisions</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Dedicated account manager</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Enterprise onboarding assistance</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Priority email and Zoom support</p>
                                                </li>
                                            </ul>

                                            <button className="w-full px-8 py-4 mt-auto text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Contact Sales</button>
                                        </div>
                                    </div>
                                    <div className="w-full px-6 mb-4 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:px-2 ">
                                        <div className="relative flex flex-col h-full px-4 py-5 text-left bg-indigo-200 rounded-lg">
                                            <div className='absolute flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-inner drop-shadow-md -top-10'>
                                                <svg className="w-8 h-8 fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z" /></svg>
                                            </div>
                                            <h2 className="mt-12 font-bold tracking-[.35em] uppercase text-base text-violet-700 mb-3">Enterprise</h2>
                                            <ul className="flex flex-col justify-around h-full mb-6">
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-900">For medium to large organizations.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-xs font-normal text-gray-500">(minimum 100users)</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-gray-900">The most trusted and secure business card platform.</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <button className="w-full px-8 py-4 mb-5 text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Contact Sales</button>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="font-semibold text-violet-400">Includes everything in Business, plus:</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">Active Directory integration</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <a href="#" className="text-base font-normal text-gray-500 hover:underline">SOC 2 report</a>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Security/IT review</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Support for multiple divisions</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Dedicated account manager</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Enterprise onboarding assistance</p>
                                                </li>
                                                <li className="flex items-center mb-2.5">
                                                    <p className="text-base font-normal text-slate-500 opacity-90">Priority email and Zoom support</p>
                                                </li>
                                            </ul>
                                            <button className="w-full px-8 py-4 mt-auto text-base text-indigo-700 uppercase transition duration-150 ease-in-out bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-gray-100">Contact Sales</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className='absolute inset-x-0 bottom-0 w-full -z-10' stroke="none" fill="url(#grad1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor='#4338ca' stopOpacity='1' />
                        <stop offset="100%" stopColor='#14b8a6' stopOpacity='1' />
                    </linearGradient>
                    <path d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </section> */}



            {/* FAQ Section */}
            {/* <section className="relative min-h-screen text-gray-700 bg-gray-200">

                <div className="mx-auto">
                    <div className="w-full py-20 mx-auto mb-10 bg-cover md:py-36 bg-gradient-to-r from-indigo-700 to-teal-500">
                        <h1 role='heading' className="text-xl font-bold leading-10 tracking-tight text-center text-white xl:text-6xl md:text-5xl title-font">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className="container grid grid-cols-1 px-5 -mx-2 -translate-y-36 lg:grid-cols-2 lg:w-4/5 sm:mx-auto sm:mb-2">
                        <div className="w-full px-6 pb-8 text-gray-400">
                            <details className="mb-4 bg-white rounded-lg shadow-md">
                                <summary className="px-4 py-4 font-semibold text-gray-900 bg-white rounded-md cursor-pointer">
                                    How do i sign up for VCard?
                                </summary>

                                <p className="px-6 pb-8 text-gray-400">
                                    You can sign up for HiHello by creating an account on the web or downloading the HiHello mobile app on iOS or Android.
                                </p>
                            </details>
                            <details className="mb-4 bg-white rounded-lg shadow-md">
                                <summary className="px-4 py-4 font-semibold text-gray-900 bg-white rounded-md cursor-pointer">
                                    What are the premium plans?
                                </summary>

                                <p className="px-6 pb-8 text-gray-400">
                                    VCard offers four premium plans: Basic, Professional, Business, and Enterprise. HiHello Professional is the most popular plan for individuals looking to customize their digital business card. HiHello Business is available to companies with at least five people, and HiHello Enterprise is designed for organizations with at least 100 users.
                                </p>
                            </details>
                            <details className="mb-4 bg-white rounded-lg shadow-md">
                                <summary className="px-4 py-4 font-semibold text-gray-900 bg-white rounded-md cursor-pointer">
                                    Can i change the email address associated with my account
                                </summary>

                                <p className="px-6 pb-8 text-gray-400">
                                    Yes, you can change your email address at any time. Navigate to the app settings and select Change Account Email to update the email associated with your account.
                                </p>
                            </details>
                        </div>
                        <div className="w-full px-6 pb-8 text-gray-400">
                            <details className="mb-4 bg-white rounded-lg shadow-md">
                                <summary className="px-4 py-4 font-semibold text-gray-900 bg-white rounded-md cursor-pointer">
                                    Whats is the diffrence between Basic and Professoinal ?
                                </summary>

                                <p className="px-6 pb-8 text-gray-400">
                                    VCard Professional is our most popular plan. Packed with powerful networking features, VCard Professional is the best choice for people who want a fully customizable digital business card. VCard Basic is perfect for people who enjoy the free plan but want a bit more personalization.
                                </p>
                            </details>
                            <details className="mb-4 bg-white rounded-lg shadow-md">
                                <summary className="px-4 py-4 font-semibold text-gray-900 bg-white rounded-md cursor-pointer">
                                    Can i share my Professional accout with others
                                </summary>

                                <p className="px-6 pb-8 text-gray-400">
                                    VCard Basic and HiHello Professional are individual plans for personal use. To create cards for an entire team, we offer VCard Business (minimum five users) and VCard Enterprise (minimum 100 users).
                                </p>
                            </details>
                            <details className="mb-4 bg-white rounded-lg shadow-md">
                                <summary className="px-4 py-4 font-semibold text-gray-900 bg-white rounded-md cursor-pointer">
                                    How do i log into my account on a diffrent device ?
                                </summary>

                                <p className="px-6 pb-8 text-gray-400">
                                    VCard is available on iOS, Android, and the web. Make sure you use the same login method (for example, email and password vs. Gmail sign-in). To log in to your HiHello account on mobile from the web, <a href='#'> follow these steps </a>.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section> */}
        </WelcomeLayout>
    );
}
