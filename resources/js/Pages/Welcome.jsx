import WelcomeLayout from '@/Layouts/WelcomeLayout';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <WelcomeLayout
                // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome</h2>}
                // auth={props.auth}
                errors={props.errors}

            >
                <Head title="Welcome" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">Welcome Page</div>

                        </div>
                    </div>
                </div>
            </WelcomeLayout>
        </>
    );
}
