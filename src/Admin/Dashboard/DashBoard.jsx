import React from 'react'
import SideBar from './SideBar'
import Layout from './DashBoardLayout';

export default function DashBoard() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Welcome Back, User!</h1>
        <p className="text-slate-500">Here is what's happening with your projects today.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-400 text-sm font-medium">Total Projects</h3>
          <p className="text-3xl font-bold text-slate-800">12</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-400 text-sm font-medium">Active Tasks</h3>
          <p className="text-3xl font-bold text-slate-800">48</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-slate-400 text-sm font-medium">Messages</h3>
          <p className="text-3xl font-bold text-slate-800">5</p>
        </div>
      </div>
    </div>
  );
}