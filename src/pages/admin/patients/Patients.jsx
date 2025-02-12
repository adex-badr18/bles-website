import React from "react";
import PageTitle from "../components/PageTitle";
import Table from "../components/Table";
import { patients, patientsColumns } from "./data";

const Patients = () => {
    return (
        <section className="py-8">
            <PageTitle title="Registered Patients"></PageTitle>

            <Table
                data={patients}
                columns={patientsColumns}
                entity="patients"
                isIncludePagination={true}
                isIncludeSearchBox={true}
                tableTitle="Patients"
                columnFilters={[]}
            />
        </section>
    );
};

export default Patients;
