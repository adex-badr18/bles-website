import Table from "../../components/Table";
import { appointments, appointmentsColumns } from "../data";

const AppointmentsTab = () => {
    return (
        <div>
            <Table
                data={appointments}
                columns={appointmentsColumns}
                entity="appointments"
                tableTitle="Scheduled Appointments"
                columnFilters={[]}
                isIncludePagination={true}
            />
        </div>
    );
};

export default AppointmentsTab;
