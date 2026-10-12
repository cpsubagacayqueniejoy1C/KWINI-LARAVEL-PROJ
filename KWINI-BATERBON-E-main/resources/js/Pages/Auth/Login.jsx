import React from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 px-4 py-12">
            <Head title="CPSU Portal - Login" />

            {/* University Header / Branding */}
            <div className="text-center mb-8 max-w-md flex flex-col items-center">
                <img src="/cpsu-logo.png" alt="CPSU Seal Logo" className="w-20 h-20 object-contain mb-3" />
                <h1 className="text-2xl font-black text-emerald-900">Central Philippine State University</h1>
                <p className="text-xs text-slate-600 mt-1 uppercase tracking-wider font-semibold">Student & Staff Portal Login</p>
            </div>

            {/* Login Box */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
                {status && (
                    <div className="mb-4 text-sm font-medium text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="email" value="Email Address" className="text-slate-700 font-bold" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700 shadow-sm"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-slate-300 text-emerald-800 focus:ring-emerald-700"
                            />
                            <span className="ml-2 text-slate-600 font-medium">Remember me</span>
                        </label>

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-emerald-800 hover:text-emerald-950 font-semibold underline"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <div>
                        <PrimaryButton
                            className="w-full justify-center bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl transition shadow-md"
                            disabled={processing}
                        >
                            Log In to Portal
                        </PrimaryButton>
                    </div>
                </form>

                {/* Sign Up / Register Link */}
                <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?{' '}
                    <Link
                        href={route('register')}
                        className="text-emerald-800 hover:text-emerald-950 font-bold underline"
                    >
                        Register here
                    </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
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