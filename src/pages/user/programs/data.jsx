import iopImg from "../../../assets/iop2.jpeg";
import outpatientImg from "../../../assets/outpatient.jpg";
import phpImg from "../../../assets/php.jpg";
import residentialImg from "../../../assets/residential.jpeg";

import {
    MdOutlineHealthAndSafety,
    MdOutlineScheduleSend,
    MdOutlineBedroomParent,
} from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";

export const programsData = [
    {
        id: 1,
        name: "Outpatient Program",
        shortName: "Outpatient Program",
        descr1: "Our Outpatient Program is designed for individuals seeking flexible, effective care while maintaining their daily responsibilities. This program provides a structured environment where patients can receive therapy, counseling, and support without needing to stay overnight. Our outpatient services are tailored to address various behavioral health challenges, ensuring personalized care that aligns with your unique needs and lifestyle.",
        descr2: "Through individual and group sessions led by experienced professionals, we focus on equipping patients with the tools they need to manage their mental health effectively. Whether you're dealing with anxiety, depression, or other challenges, our Outpatient Program emphasizes recovery through understanding, empathy, and evidence-based treatments.",
        advertText:
            "Flexible, expert care that fits smoothly into your daily routine.",
        benefitsIntro:
            "Our Outpatient Program empowers patients to achieve mental wellness while balancing work, family, and other obligations, making it an ideal choice for those seeking flexibility in their recovery journey.",
        benefits: [
            {
                id: 1,
                title: "Enhanced Support",
                descr: "Frequent therapy sessions for consistent progress.",
            },
            {
                id: 2,
                title: "Professional Support",
                descr: "Access to skilled therapists and counselors.",
            },
            {
                id: 3,
                title: "Tailored Treatment Plans",
                descr: "Programs designed to meet individual needs.",
            },
            {
                id: 4,
                title: "Convenient Scheduling",
                descr: "Sessions that fit into your lifestyle.",
            },
        ],
        services: [
            {
                id: 1,
                title: "Customized Treatment Plans",
                descr: "Tailored care designed to address your unique mental health needs.",
            },
            {
                id: 2,
                title: "Flexible Therapy Sessions",
                descr: "Access professional counseling that works around your busy schedule.",
            },
            {
                id: 3,
                title: "Medication Management",
                descr: "Expert monitoring to ensure safe and effective use of prescribed medications.",
            },
            {
                id: 4,
                title: "Skill-Building Workshops",
                descr: "Learn coping mechanisms and life skills to enhance resilience.",
            },
            {
                id: 5,
                title: "Ongoing Support",
                descr: "Continuous guidance to maintain progress and prevent setbacks.",
            },
        ],
        icon: (
            <MdOutlineHealthAndSafety className="text-vividRed text-5xl md:text-7xl" />
        ),
        image: outpatientImg,
    },
    {
        id: 2,
        name: "Intensive Outpatient Program (IOP)",
        shortName: "IOP",
        descr1: "Our Intensive Outpatient Program (IOP) bridges the gap between traditional outpatient care and more intensive treatment options. IOP is ideal for patients who require a higher level of support but do not need 24-hour care. This structured program provides a combination of group therapy, individual counseling, and skill-building sessions to address complex mental health challenges.",
        descr2: "Patients in IOP attend therapy several times a week, gaining valuable coping mechanisms and strategies to manage their conditions. With a compassionate and dedicated team, we focus on fostering resilience and promoting long-term recovery in a supportive, therapeutic environment.",
        advertText:
            "Structured support designed to help you recover while managing everyday life.",
        benefitsIntro:
            "The IOP offers structured, impactful care while allowing patients to remain connected to their everyday lives, ensuring continuity in recovery.",
        benefits: [
            {
                id: 1,
                title: "Enhanced Support",
                descr: "Frequent therapy sessions for consistent progress.",
            },
            {
                id: 2,
                title: "Community Connection",
                descr: "Join a supportive group of peers.",
            },
            {
                id: 3,
                title: "Comprehensive Care",
                descr: "Multidisciplinary approach to mental health.",
            },
            {
                id: 4,
                title: "Life Integration",
                descr: "Balance treatment with daily responsibilities.",
            },
        ],
        services: [
            {
                id: 1,
                title: "Structured Counseling Sessions",
                descr: "Regular therapy to provide consistent support for recovery.",
            },
            {
                id: 2,
                title: "Peer Group Therapy",
                descr: "Connect with others who share similar experiences in a supportive environment.",
            },
            {
                id: 3,
                title: "Crisis Intervention Support",
                descr: "Immediate assistance to help you navigate challenges effectively.",
            },
            {
                id: 4,
                title: "Holistic Recovery Techniques",
                descr: "Incorporating mindfulness, stress management, and emotional regulation.",
            },
            {
                id: 5,
                title: "Family Integration",
                descr: "Sessions to help loved ones understand and support your recovery journey.",
            },
        ],
        icon: <PiHeartbeat className="text-vividRed text-5xl md:text-7xl" />,
        image: iopImg,
    },
    {
        id: 3,
        name: "Partial Hospitalization Program (PHP)",
        shortName: "PHP",
        descr1: "The Partial Hospitalization Program (PHP) provides intensive, day-long treatment for individuals needing a higher level of care without full-time hospitalization. PHP is ideal for patients transitioning from inpatient care or those requiring structured treatment for severe behavioral health issues.",
        descr2: "Our PHP offers a robust schedule of therapy sessions, psychiatric consultations, and skill-building activities in a safe and nurturing environment. This program focuses on stabilizing patients, addressing acute symptoms, and empowering them to regain control of their lives with the support of a compassionate team.",
        advertText:
            "Comprehensive, day-long care for meaningful and lasting progress.",
        benefitsIntro:
            "We deliver intensive care in a day-treatment format, enabling patients to receive comprehensive support while gradually reintegrating into their daily lives.",
        benefits: [
            {
                id: 1,
                title: "Intensive Treatment",
                descr: "Focused care for significant progress.",
            },
            {
                id: 2,
                title: "Safe Environment",
                descr: "Supportive and therapeutic setting.",
            },
            {
                id: 3,
                title: "Holistic Approach",
                descr: "Address emotional, psychological, and social needs.",
            },
            {
                id: 4,
                title: "Smooth Transitions",
                descr: "Ideal for stepping down from inpatient care.",
            },
        ],
        services: [
            {
                id: 1,
                title: "Intensive Therapy",
                descr: "In-depth, day-long sessions to address complex mental health concerns.",
            },
            {
                id: 2,
                title: "Multi-Disciplinary Care",
                descr: "Access to a team of specialists, including therapists, doctors, and counselors.",
            },
            {
                id: 3,
                title: "Daily Wellness Activities",
                descr: "Incorporate meditation, exercise, and stress-relief techniques into treatment.",
            },
            {
                id: 4,
                title: "Nutrition Guidance",
                descr: "Expert advice to improve overall health and support mental wellness.",
            },
            {
                id: 5,
                title: "Safe Daytime Environment",
                descr: "A nurturing space to heal and grow during the day while returning home at night.",
            },
        ],
        icon: (
            <MdOutlineScheduleSend className="text-vividRed text-5xl md:text-7xl" />
        ),
        image: phpImg,
    },
    {
        id: 4,
        name: "Residential Program",
        shortName: "Residential Program",
        descr1: "Our Residential Program offers a 24-hour, immersive treatment experience in a secure and supportive environment. This program is tailored for individuals facing severe behavioral health challenges who need a break from their usual surroundings to focus on recovery.",
        descr2: "Residents receive comprehensive care, including therapy, psychiatric services, and skill-building activities, all designed to promote healing and long-term wellness. Our serene facilities provide the perfect setting for reflection and growth, ensuring patients feel safe, understood, and empowered every step of the way.",
        advertText:
            "Round-the-clock care in a safe and supportive environment for total healing.",
        benefitsIntro:
            "The Residential Program provides a transformative, round-the-clock care experience that promotes deep healing and sustainable recovery.",
        benefits: [
            {
                id: 1,
                title: "Continuous Care",
                descr: "24/7 support from dedicated professionals.",
            },
            {
                id: 2,
                title: "Structured Environment",
                descr: "Focus on recovery without external distractions.",
            },
            {
                id: 3,
                title: "Personalized Treatment",
                descr: "Individualized plans for effective outcomes.",
            },
            {
                id: 4,
                title: "Holistic Healing",
                descr: "Combines therapy, skills training, and wellness activities.",
            },
        ],
        services: [
            {
                id: 1,
                title: "24/7 Care and Monitoring",
                descr: "Around-the-clock professional support for uninterrupted healing.",
            },
            {
                id: 2,
                title: "Therapeutic Living Environment",
                descr: "A calm, structured setting to focus entirely on recovery.",
            },
            {
                id: 3,
                title: "Personalized Recovery Plans",
                descr: "Comprehensive, goal-oriented programs tailored to your specific needs.",
            },
            {
                id: 4,
                title: "Life Skills Training",
                descr: "Practical tools to build confidence and prepare for a healthier future.",
            },
            {
                id: 5,
                title: "Community Connection",
                descr: "Opportunities to bond with peers in recovery for mutual support and encouragement.",
            },
        ],
        icon: (
            <MdOutlineBedroomParent className="text-vividRed text-5xl md:text-7xl" />
        ),
        image: residentialImg,
    },
];
