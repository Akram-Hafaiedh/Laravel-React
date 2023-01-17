import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

export default function componentName({ auth }) {

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: '',
        password: '',
        email: '',
        image: '',
    });

    function createUser() {
        e.preventDefault();

        patch(route('users.store'), {
            preserveScroll: true,
        });
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create a new user</h2>}
        >
            <Head title="Users" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900">Create a new user</div> */}

                        <section className="p-6 max-w-xl">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update your account's profile information and email address.
                                </p>
                            </header>
                            <form onSubmit={createUser} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel for="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        // ref={currentPasswordInput}
                                        value={data.name}
                                        handleChange={(e) => setData('name', e.target.value)}
                                        type="name"
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        required
                                        isFocused
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel for="username" value="Username" />

                                    <TextInput
                                        id="username"
                                        className="mt-1 block w-full"
                                        // value={data.name}
                                        handleChange={(e) => setData('username', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="username"
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel for="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        className="mt-1 block w-full"
                                        // value={data.name}
                                        handleChange={(e) => setData('email', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel for="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        value={data.password_confirmation}
                                        handleChange={(e) => setData('password', e.target.value)}
                                        type="password"
                                        className="mt-1 block w-full"
                                        autoComplete="password"
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enterFrom="opacity-0"
                                        leaveTo="opacity-0"
                                        className="transition ease-in-out"
                                    >
                                        <p className="text-sm text-gray-600">Saved.</p>
                                    </Transition>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

