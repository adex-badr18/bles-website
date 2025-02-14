import { useState, useEffect, useMemo } from "react";
import { formDocs } from "../data";
import DocsSideNav from "./DocsSideNav";
import { RiMenuUnfoldLine, RiMenuUnfold2Line } from "react-icons/ri";

const FormsTab = () => {
    const [documents, setDocuments] = useState(formDocs || []);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [isDocsSidebarOpen, setIsDocsSidebarOpen] = useState(false);

    const toggleDocSidebar = () => {
        setIsDocsSidebarOpen(!isDocsSidebarOpen);
    };

    return (
        <div className="relative flex flex-col sm:flex-row gap-4 md:gap-6 h-screen">
            <button
                className="lg:hidden self-start p-2 rounded bg-offWhite text-darkBlue border shadow"
                onClick={() => setIsDocsSidebarOpen(!isDocsSidebarOpen)}
            >
                {isDocsSidebarOpen ? (
                    <RiMenuUnfold2Line />
                ) : (
                    <RiMenuUnfoldLine />
                )}
            </button>

            <DocsSideNav
                title="Forms"
                data={formDocs}
                selectedDoc={selectedDoc}
                setSelectedDoc={setSelectedDoc}
                isSidebarOpen={isDocsSidebarOpen}
                setIsSidebarOpen={setIsDocsSidebarOpen}
            />

            {/* PDF Preview */}
            <div className="flex-1 flex items-center justify-center p-4 bg-offWhite shadow-lg rounded-lg">
                {selectedDoc ? (
                    <iframe
                        src={selectedDoc.url}
                        frameborder="0"
                        loading="lazy"
                        title={selectedDoc.title}
                        className="w-full h-full border-none"
                    ></iframe>
                ) : (
                    <p className="text-deepGrey">
                        Select a document to preview
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormsTab;
