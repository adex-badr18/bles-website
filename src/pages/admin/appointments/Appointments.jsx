import Table from "../components/Table";
import PageTitle from "../components/PageTitle";
import { appointments, appointmentsColumns } from "./data";

const Appointments = () => {
    return (
        <section className="py-8">
            <PageTitle title="Scheduled Appointments" />

            <Table
                data={appointments}
                columns={appointmentsColumns}
                entity="appointments"
                isIncludePagination={true}
                isIncludeSearchBox={true}
                tableTitle="Appointments"
                columnFilters={[]}
            />
        </section>
    );
};

export default Appointments;
