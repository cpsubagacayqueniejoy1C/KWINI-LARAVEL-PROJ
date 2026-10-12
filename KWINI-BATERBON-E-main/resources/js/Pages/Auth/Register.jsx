import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 px-4 py-12">
            <Head title="CPSU Portal - Register" />

            {/* University Header / Branding */}
            <div className="text-center mb-8 max-w-md flex flex-col items-center">
                <img src="/cpsu-logo.png" alt="CPSU Seal Logo" className="w-20 h-20 object-contain mb-3" />
                <h1 className="text-2xl font-black text-emerald-900">Central Philippine State University</h1>
                <p className="text-xs text-slate-600 mt-1 uppercase tracking-wider font-semibold">Student & Staff Portal Registration</p>
            </div>

            {/* Registration Box */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <InputLabel htmlFor="name" value="Full Name" className="text-slate-700 font-bold" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700 shadow-sm"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email Address" className="text-slate-700 font-bold" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700 shadow-sm"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password" value="Password" className="text-slate-700 font-bold" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700 shadow-sm"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-slate-700 font-bold" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700 shadow-sm"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <Link
                            href={route('login')}
                            className="text-sm text-emerald-800 hover:text-emerald-950 font-bold underline"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton
                            className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition shadow-md"
                            disabled={processing}
                        >
                            Register Account
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                    <Link href="/" className="hover:text-emerald-800 underline font-semibold">
                        &larr; Back to CPSU Announcements
                    </Link>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-slate-500">
                &copy; 2026 Central Philippine State University. All rights reserved.
            </div>
        </div>
    );
}