import { BiChevronsRight } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";

const DocsSideNav = ({
    title,
    data,
    selectedDoc,
    setSelectedDoc,
    isSidebarOpen,
    setIsSidebarOpen
}) => {
    return (
        <aside
            className={`fixed lg:relative inset-y-0 left-0 z-50 w-full lg:max-w-72 2xl:max-w-80 shadow-lg transition-transform duration-300 ease-in-out transform lg:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } h-screen lg:h-auto overflow-y-auto bg-[#F4F9FC]`}
        >
            <div className="px-4 py-3 lg:px-6 bg-vividRed lg:rounded-t-md flex items-center justify-between">
                <h3 className="text-white text-lg md:text-2xl font-bold capitalize">
                    {title}
                </h3>

                <button onClick={() => setIsSidebarOpen(false)} className="text-offWhite text-xl lg:hidden"><CgCloseR /></button>
            </div>

            <ul className="flex flex-col gap-4 px-4 lg:px-6 py-5 md:py-10">
                {data.map((doc) => (
                    <li
                        key={doc.id}
                        className={`border border-[#dddddd8f] rounded-md p-4 font-rubik hover:bg-vividRed hover:text-white transition duration-300 hover:cursor-pointer ${
                            selectedDoc?.url === doc.url
                                ? "bg-vividRed text-white"
                                : "bg-white text-deepBlue"
                        }`}
                        onClick={() => {
                            setSelectedDoc(doc)
                            setIsSidebarOpen(false)
                        }}
                    >
                        <div className="flex gap-2 items-center">
                            <BiChevronsRight className="" />
                            <span className="font-medium">{doc.title}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default DocsSideNav;
