import Table from "../components/Table";
import StatCard from "./components/StatCard";
import {
    statsData,
    recentPatients,
    recentPatientsColumns,
    recentAppointments,
    recentAppointmentsColumns,
    recentReviews,
    recentReviewsColumns,
} from "./data";
import { useGetDashboardData } from "../../../hooks/useGeneral";
import Spinner from "../../../components/Spinner";
import { useToast } from "../../../components/ToastContext";
import { useEffect, useMemo } from "react";

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
    const { showToast } = useToast();
    const { data, isLoading, isSuccess, isError, error } =
        useGetDashboardData();

        console.log(data)

    const { statsData } = useMemo(() => {
        return {
            statsData: [
                {
                    id: 1,
                    title: "Patients",
                    entity: "Registered Patients",
                    value: data?.patientCount,
                    // numOfNew: 5,
                },
                {
                    id: 2,
                    title: "Appointments",
                    entity: "Scheduled Appointments",
                    value: data?.appointmentCount,
                    // numOfNew: 3,
                },
                {
                    id: 3,
                    title: "Reviews",
                    entity: "Client Feebacks",
                    value: data?.reviewCount,
                    // numOfNew: 5,
                },
            ],
        };
    });

    useEffect(() => {
        if (isError) {
            showToast({
                message:
                    `${error?.message}` ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        }
    }, [isError]);

    if (isLoading) {
        return (
            <Spinner
                secondaryText="Loading..."
                spinnerSize="w-10 h-10"
                borderClass="border-lightGreen"
            />
        );
    }

    return (
        <section className="space-y-4 md:space-y-8">
            <div className="flex justify-between items-center bg-offWhite p-4 rounded-lg">
                <div>
                    <h1 className="text-lightGreen text-2xl font-medium">
                        Welcome, {`Admin`}!
                    </h1>
                    <span className="text-sm text-grey">{formatDate()}</span>
                </div>
            </div>

            {isSuccess && (
                <>
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
                        data={data?.recentPatients}
                        columns={recentPatientsColumns}
                        tableTitle="Recent Patients"
                        columnFilters={[]}
                        entity="patients"
                        isSnapshot={true}
                    />

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <Table
                            data={data?.upcomingAppointments}
                            columns={recentAppointmentsColumns}
                            tableTitle="Upcoming Appointments"
                            columnFilters={[]}
                            entity="appointments"
                            isSnapshot={true}
                        />

                        <Table
                            data={data?.recentReviews}
                            columns={recentReviewsColumns}
                            tableTitle="Recent Reviews"
                            columnFilters={[]}
                            entity="reviews"
                            isSnapshot={true}
                        />
                    </div>
                </>
            )}

            {isError && (
                <div className="text-vividRed text-center">
                    {error?.message}
                </div>
            )}
        </section>
    );
};

export default Dashboard;
