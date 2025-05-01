import Table from "../../components/Table"
import { patientReviewsColumns, reviews } from "../../reviews/data"

const ReviewsTab = ({reviews: rev}) => {
  return (
    <div>
            <Table
                data={reviews}
                columns={patientReviewsColumns}
                entity="reviews"
                tableTitle="Submitted Reviews"
                columnFilters={[]}
                isIncludePagination={true}
            />
        </div>
  )
}

export default ReviewsTab