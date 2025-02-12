import React, { useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { MdFilterListAlt } from "react-icons/md";
import SearchBox from "./SearchBox";

const Table = ({
    data,
    columns,
    tableTitle,
    columnFilters,
    isIncludePagination,
    entity,
    isIncludeSearchBox,
}) => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [rowSelection, setRowSelection] = useState({});
    const navigate = useNavigate();
    const rootPath = `/admin/${entity}`;

    // Define the table instance
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            rowSelection,
        },
        onGlobalFilterChange: setGlobalFilter,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handleRowClick = (id) => {
        navigate(`${rootPath}/${id}`);
    };

    return (
        <div className="px-4 py-6 bg-offWhite rounded-lg space-y-6 w-full">
            {/* Title Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-lg text-darkBlue font-bold">
                    {tableTitle}
                </h2>

                {isIncludeSearchBox && (
                    <div className="flex items-center gap-3">
                        {/* Global Filter */}
                        <SearchBox
                            inputName="globalFilter"
                            searchText={globalFilter}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            placeholderText={`Search...`}
                        />
                    </div>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border-spacing-0 table-auto">
                    <thead>
                        <tr className="bg-lightGray px-3 text-deepGrey font-bold">
                            {table.getHeaderGroups().map((headerGroup) =>
                                headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="p-4 text-left"
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#959595]">
                        {data.length < 1 ? (
                            <tr className="h-36">
                                <td
                                    className="p-4 text-center min-h-36"
                                    colSpan={
                                        table.getVisibleLeafColumns().length
                                    }
                                >
                                    No record found!
                                </td>
                            </tr>
                        ) : (
                            table.getRowModel().rows.map((row) => {
                                const id = row.original.id;

                                return (
                                    <tr
                                        key={row.id}
                                        className="cursor-pointer"
                                        onClick={() => handleRowClick(id)}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="p-4">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {isIncludePagination && (
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Previous
                    </button>
                    <span>
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </span>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Table;
