import React, { Fragment, useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from "@inertiajs/inertia-react";
import UserRow from "./Partials/UserRow";
import PrimaryButton from "@/Components/PrimaryButton";


function Index({ auth, users }) {

    // let hasPrev =
    // let hasNext =
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}

        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                <a href="#">
                                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>All</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Active</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Inactive</p>
                                    </div>
                                </a>
                            </div>

                            {/* <PrimaryButton onClick="popuphandler(true)" className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"> */}
                            <PrimaryButton>
                                <Link href={route('users.create')} className="text-sm font-medium leading-none text-white">Add User</Link>
                            </PrimaryButton>
                        </div>
                        <div className="mt-5 overflow-x-auto">

                            <div className="p-2 flex items-center justify-between">

                                <label className="relative block">
                                    <span className="sr-only">Search</span>
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                                    </span>
                                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for users..." type="text" name="search" />
                                </label>
                                <div className=" flex items-center text-sm font-medium leading-none text-gray-600  rounded">
                                    <p>Sort By:</p>
                                    <select className="focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-white text-sm ml-1 rounded-md ">
                                        <option className="text-sm text-indigo-800">Latest</option>
                                        <option className="text-sm text-indigo-800">Oldest</option>
                                        <option className="text-sm text-indigo-800">Latest</option>
                                    </select>
                                </div>

                            </div>
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                        <th className="px-6 py-3 font-medium text-right" colSpan={2}>
                                            Id
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium">
                                            Joined
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium">
                                            Posts
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium">
                                            Modified
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium">
                                            Contacts
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left font-medium" colSpan={2}>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <>

                                        {users.data.map(user =>
                                            <UserRow key={user.id} user={user} />
                                        )}
                                    </>

                                </tbody>
                            </table>


                            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Next
                                    </a>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">{users.from}</span> to <span className="font-medium">{users.to}</span> of{' '}
                                            <span className="font-medium">{users.total}</span> results
                                        </p>
                                    </div>

                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">


                                        {users.links.map((link, index) => {
                                            return (
                                                <Fragment key={link.label}>
                                                    <Link
                                                        preserveScroll
                                                        as="button"

                                                        className={"relative hidden items-center border disabled:bg-slate-400/10  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex " +
                                                            (link.active == true ? 'z-10 border-indigo-500 bg-indigo-50' : 'border-gray-300 bg-white ') +
                                                            (index === 0 ? 'rounded-l-md' : index === users.links.length - 1 ? 'rounded-r-md' : '')
                                                        }

                                                        // className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                        href={link.url}
                                                        disabled={link.url === null}
                                                    />
                                                </Fragment>
                                            )
                                        }
                                        )}
                                    </nav>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}

export default Index;
