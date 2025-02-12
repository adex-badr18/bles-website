import { FaStar } from "react-icons/fa6";

export const reviews = [
    {
        id: "1",
        name: "James",
        email: "username@gmail.com",
        rating: "5",
        status: "active",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "2",
        name: "Adam",
        email: "username@gmail.com",
        rating: "5",
        status: "Inactive",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "3",
        name: "Bukola",
        email: "username@gmail.com",
        rating: "4",
        status: "Inactive",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "4",
        name: "Mushrif",
        email: "username@gmail.com",
        rating: "3",
        status: "Inactive",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "5",
        name: "Isabella",
        email: "username@gmail.com",
        rating: "5",
        status: "active",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    // Add more data here
];

export const reviewsColumns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "rating",
        header: "Rating",
        cell: (prop) => {
            const value = Number(prop.getValue());

            return (
                <div className="flex items-center gap-1">
                    {Array.from({ length: value }, (_, index) => (
                        <FaStar
                            key={index}
                            className={`text-yellow-600 text-s`}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (prop) => {
            const value = prop.getValue();

            return (
                <span
                    className={`p-1 w-16 block text-center rounded text-xs text-offWhite ${
                        value.toLowerCase() === "active"
                            ? "bg-lightGreen"
                            : "bg-vividRed"
                    }`}
                >
                    {value}
                </span>
            );
        },
    },
];
