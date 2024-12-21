import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ obj }) => {
    const { pathname } = useLocation();

    const breadcrumbList = pathname.split("/").map((path, index) => {
        if (path === "") {
            return { id: index + 1, name: "Home", link: "/" };
        }

        if (!isNaN(path)) {
            return { id: index + 1, name: obj.shortName, link: "" };
        }

        return {
            id: index + 1,
            name: `${path.slice(0, 1).toUpperCase()}${path.slice(1)}`,
            link: `/${path}`,
        };
    });

    return (
        <div className="flex flex-col items-center justify-center gap-[10px] px-3 font-poppins h-[350px] bg-breadcrumb-bg bg-no-repeat bg-cover bg-center">
            <h1 className="text-white text-center text-[40px] font-bold">{obj.name}</h1>

            <div className="flex items-center justify-center flex-wrap gap-3 divide-x-2 divide-white">
                {breadcrumbList.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            to={item.link}
                            className={`pl-4 text-lg font-semibold ${
                                item.link ? "text-white" : "text-lightGreen"
                            }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
