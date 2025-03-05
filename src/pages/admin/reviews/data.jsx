import { FaStar } from "react-icons/fa6";

export const reviews = [
    {
        id: "1",
        name: "James",
        email: "username@gmail.com",
        rating: "5",
        status: "Published",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "2",
        name: "Adam",
        email: "username@gmail.com",
        rating: "5",
        status: "Draft",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "3",
        name: "Bukola",
        email: "username@gmail.com",
        rating: "4",
        status: "Draft",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "4",
        name: "Mushrif",
        email: "username@gmail.com",
        rating: "3",
        status: "Draft",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend! Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    {
        id: "5",
        name: "Isabella",
        email: "username@gmail.com",
        rating: "5",
        status: "Published",
        review: "Exceptional care and support! The team was compassionate, professional, and truly listened to my concerns. I feel heard and valued. Highly recommend!",
    },
    // Add more data here
];

export const ratingOptions = [
    {id: 1, text: "1 Star", value: "1"},
    {id: 2, text: "2 Stars", value: "2"},
    {id: 3, text: "3 Stars", value: "3"},
    {id: 4, text: "4 Stars", value: "4"},
    {id: 5, text: "5 Stars", value: "5"},
]

export const statusOptions = [
    {id: 1, text: "Published", value: "Published"},
    {id: 2, text: "Draft", value: "Draft"},
]

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
                    className={`p-1 w-[65px] block text-center rounded text-xs text-offWhite capitalize ${
                        value.toLowerCase() === "published"
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
