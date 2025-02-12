import Table from "../components/Table";
import PageTitle from "../components/PageTitle";
import { reviews, reviewsColumns } from "./data";

const Reviews = () => {
    return (
        <section className="py-8">
            <PageTitle title="Submitted Feedbacks" />

            <Table
                data={reviews}
                columns={reviewsColumns}
                entity="reviews"
                isIncludePagination={true}
                isIncludeSearchBox={true}
                tableTitle="Reviews"
                columnFilters={[]}
            />
        </section>
    );
};

export default Reviews;
