import React from "react";
import { Sidebar } from "../components";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300">
            <div className="flex relative w-screen">

                <Sidebar />

                <div className="p-2 w-full text-slate-900">
                    { children }
                </div>

            </div>
        </div>
    );
}