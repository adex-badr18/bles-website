import Table from "../components/Table";
import StatCard from "./components/StatCard";
import { statsData, recentPatients, recentPatientsColumns, recentAppointments, recentAppointmentsColumns, recentReviews, recentReviewsColumns } from "./data";

const Dashboard = () => {
    const formatDate = () => {
        const options = {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
        };
        const today = new Date();
        return new Intl.DateTimeFormat("en-US", options).format(today);
    };

    return (
        <section className="space-y-4 md:space-y-8">
            <div className="flex justify-between items-center bg-offWhite p-4 rounded-lg">
                <div>
                    <h1 className="text-lightGreen text-2xl font-medium">
                        Welcome, {`Adetayo`}!
                    </h1>
                    <span className="text-sm text-grey">{formatDate()}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                {statsData.map((stat) => (
                    <StatCard
                        key={stat.id}
                        title={stat.title}
                        entity={stat.entity}
                        value={stat.value}
                        numOfNew={stat.numOfNew}
                    />
                ))}
            </div>

            <Table
                data={recentPatients}
                columns={recentPatientsColumns}
                tableTitle="Recent Patients"
                columnFilters={[]}
                entity="patients"
                isSnapshot={true}
            />

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Table
                    data={recentAppointments}
                    columns={recentAppointmentsColumns}
                    tableTitle="Upcoming Appointments"
                    columnFilters={[]}
                    entity="appointments"
                    isSnapshot={true}
                />

                <Table
                    data={recentReviews}
                    columns={recentReviewsColumns}
                    tableTitle="Recent Reviews"
                    columnFilters={[]}
                    entity="reviews"
                    isSnapshot={true}
                />
            </div>
        </section>
    );
};

export default Dashboard;
