import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // CPSU Announcement data
    const announcements = [
        {
            id: 1,
            category: 'Enrollment',
            date: 'October 9, 2026',
            title: 'Enrollment for 1st Semester Academic Year 2026-2027',
            description: 'Online advising and subject enlisting for all regular and irregular students across all CPSU campuses will officially begin next Monday. Please check your student portal accounts for schedule slots and clearance requirements.',
            badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            borderLeft: 'border-emerald-600',
        },
        {
            id: 2,
            category: 'Academic',
            date: 'October 5, 2026',
            title: 'Midterm Examination Schedule and Room Assignments Released',
            description: 'The Office of the University Registrar has published the official midterm examination room assignments, schedules, and proctoring guidelines. Students are advised to download their official examination permits.',
            badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
            borderLeft: 'border-amber-500',
        },
        {
            id: 3,
            category: 'Events',
            date: 'October 1, 2026',
            title: 'CPSU University Intramurals & Cultural Showcase Kickoff',
            description: 'Join us at the main gymnasium for the grand opening ceremony of the annual inter-college sports tournament. All afternoon classes are officially suspended to support our student athletes and teams.',
            badgeColor: 'bg-green-100 text-green-800 border-green-300',
            borderLeft: 'border-green-700',
        },
        {
            id: 4,
            category: 'Academic',
            date: 'September 28, 2026',
            title: 'University Library Extended Hours for Thesis & Research Defenses',
            description: 'The CPSU main campus library will remain open until 9:00 PM from Monday through Thursday to accommodate graduating students working on their research papers, final prototypes, and technical documentation.',
            badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
            borderLeft: 'border-blue-600',
        },
    ];

    // Filter logic
    const filteredAnnouncements = announcements.filter(item => {
        const matchesCategory = filter === 'All' || item.category === filter;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Head title="CPSU - Central Philippine State University Announcements" />
            <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-600 selection:text-white">

                {/* Header / Navbar */}
                <header className="bg-emerald-900 text-white shadow-xl sticky top-0 z-50 border-b-4 border-emerald-600">
                    <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="flex items-center space-x-4 text-center sm:text-left">
                            <img src="/cpsu-logo.png" alt="CPSU Seal Logo" className="w-12 h-12 object-contain" />
                            <div>
                                <span className="text-lg font-extrabold tracking-wide block">Central Philippine State University</span>
                                <span className="text-xs text-emerald-200 tracking-wider uppercase">Official Student Bulletin Portal</span>
                            </div>
                        </div>
                        <div>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-sm font-semibold bg-emerald-700 hover:bg-emerald-600 px-5 py-2.5 rounded-xl transition shadow-md inline-block transform hover:scale-105"
                                >
                                    Go to Dashboard &rarr;
                                </Link>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="text-sm font-semibold bg-emerald-700 hover:bg-emerald-600 px-5 py-2.5 rounded-xl transition shadow-md inline-block transform hover:scale-105 border border-emerald-600"
                                >
                                    Student / Staff Login
                                </Link>
                            )}
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="max-w-5xl mx-auto px-6 py-10">

                    {/* Hero Banner with Zoom / Transition feel */}
                    <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white rounded-3xl shadow-xl p-8 mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none"></div>
                        <div className="relative z-10">
                            <span className="bg-emerald-700 text-emerald-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 border border-emerald-600 animate-pulse">
                                📢 CPSU Announcement Hub
                            </span>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Welcome to CPSU Updates</h1>
                            <p className="text-emerald-100 mt-2 text-sm max-w-xl leading-relaxed">
                                Your official source for real-time university news, enrollment guidelines, academic schedules, and campus events.
                            </p>
                        </div>
                        <div className="relative z-10 w-full md:w-auto">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-5 rounded-2xl text-center shadow-inner">
                                <span className="text-xs uppercase tracking-widest text-emerald-200 block font-semibold">Current Semester</span>
                                <span className="text-lg font-black mt-1 block">AY 2026-2027</span>
                                <span className="text-xs text-emerald-300 mt-0.5 block">1st Semester Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Filter & Search Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 w-full md:w-auto">
                            {['All', 'Enrollment', 'Academic', 'Events'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-sm ${filter === cat
                                        ? 'bg-emerald-900 text-white shadow-md ring-2 ring-emerald-700 ring-offset-2'
                                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-emerald-900'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="w-full md:w-80">
                            <input
                                type="text"
                                placeholder="🔍 Search announcements..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800 bg-white shadow-sm transition"
                            />
                        </div>
                    </div>

                    {/* Announcements Feed with Zoom Animation */}
                    <section className="space-y-6">
                        {filteredAnnouncements.length > 0 ? (
                            filteredAnnouncements.map((item) => (
                                <article
                                    key={item.id}
                                    className={`bg-white rounded-2xl shadow-md border border-slate-200 p-7 border-l-8 ${item.borderLeft} transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <div className="flex items-center space-x-3">
                                            <span className={`text-xs px-3.5 py-1 rounded-full font-extrabold border shadow-xs ${item.badgeColor}`}>
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-slate-500 font-semibold">🕒 {item.date}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors">
                                        {item.title}
                                    </h2>

                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                                        <span className="text-slate-500 font-medium">CPSU Information Office</span>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 shadow-sm">
                                <p className="text-xl font-bold text-slate-700">No announcements found</p>
                                <p className="text-sm mt-1">Try adjusting your search keywords or category filters.</p>
                            </div>
                        )}
                    </section>

                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-slate-200 mt-20 py-8 text-center text-xs text-slate-500 shadow-inner">
                    <p className="font-bold text-slate-700">&copy; 2026 Central Philippine State University (CPSU) Portal.</p>
                    <p className="mt-1 text-slate-500">All rights reserved. Empowering minds, shaping communities.</p>
                </footer>
            </div>
        </>
    );
}