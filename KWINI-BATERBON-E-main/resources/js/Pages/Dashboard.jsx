import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-black text-emerald-900 leading-tight">
                    CPSU Student Portal Dashboard
                </h2>
            }
        >
            <Head title="CPSU Portal - Dashboard" />

            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    
                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-emerald-900 to-green-800 text-white overflow-hidden shadow-xl sm:rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <span className="bg-emerald-700 text-emerald-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 border border-emerald-600">
                                🎓 Authenticated Session
                            </span>
                            <h1 className="text-2xl md:text-3xl font-black">Welcome back, {auth?.user?.name || 'Student'}!</h1>
                            <p className="text-emerald-100 text-sm mt-2">
                                You are successfully logged into the Central Philippine State University student portal system.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl transition shadow-md inline-block text-sm"
                            >
                                &larr; Go to Announcement Board
                            </Link>
                        </div>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <span className="text-2xl">📚</span>
                            <h3 className="font-bold text-slate-800 mt-3 text-lg">Enrolled Status</h3>
                            <p className="text-xs text-slate-500 mt-1">1st Semester, Academic Year 2026-2027. Regular student standing.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <span className="text-2xl">🔐</span>
                            <h3 className="font-bold text-slate-800 mt-3 text-lg">Account Security</h3>
                            <p className="text-xs text-slate-500 mt-1">Logged in via secure institutional credentials.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <span className="text-2xl">📢</span>
                            <h3 className="font-bold text-slate-800 mt-3 text-lg">Campus Feed</h3>
                            <p className="text-xs text-slate-500 mt-1">Check the bulletin board for the latest announcements and exam schedules.</p>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}