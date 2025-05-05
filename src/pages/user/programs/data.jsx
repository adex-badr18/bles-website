import iopImg from "../../../assets/iop2.jpeg";
import outpatientImg from "../../../assets/outpatient.jpg";
import phpImg from "../../../assets/php.jpg";
import residentialImg from "../../../assets/residential.jpeg";

import compMentalHealthImg from "../../../assets/programs/comprehensive-mental-health-evaluation.webp";
import medMgtImg from "../../../assets/programs/med-mgt.webp";
import psychotherapyImg from "../../../assets/programs/psychotherapy.webp";
import psychiatricRehabImg from "../../../assets/programs/psychiatric-rehab-program-adult.webp";
import medAssistedTreatmentImg from "../../../assets/programs/medication-assisted-treatment.webp";
import medAssistedWeightLossImg from "../../../assets/programs/medication-assisted-weightloss.webp";
import duiEduImg from "../../../assets/programs/dui-education.webp";
import earlyInterventionImg from "../../../assets/programs/early-intervention.webp";
import supportedEmploymentImg from "../../../assets/programs/supported-employment.webp";
import commHousingImg from "../../../assets/programs/low-intensity-community-housing.webp";
import iopPhpImg from "../../../assets/programs/iop-php.webp";

import {
    MdOutlineHealthAndSafety,
    MdOutlineScheduleSend,
    MdOutlineBedroomParent,
} from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";

export const programsDataOld = [
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

export const programsData = [
    {
        id: 1,
        name: "Comprehensive Mental Health Evaluation",
        image: compMentalHealthImg,
        descr1: "Our Comprehensive Mental Health Evaluation is a detailed and structured assessment designed to provide a clear understanding of your emotional, psychological, and behavioral health. Conducted by experienced clinicians, this evaluation includes in-depth clinical interviews, standardized screenings, and diagnostic tools to assess symptoms, identify potential mental health conditions, and determine the best course of treatment.",
        descr2: "We take a holistic approach, considering medical history, personal experiences, and environmental factors to develop a well-rounded picture of your mental well-being. This evaluation serves as the foundation for a personalized treatment plan, ensuring you receive the appropriate care, whether it be therapy, medication management, or other supportive interventions. Our goal is to provide you with the insights and guidance needed to navigate your mental health journey with confidence and clarity.",
    },
    {
        id: 2,
        name: "Medication Management",
        image: medMgtImg,
        descr1: "Our Psychiatric Medication Management services provide a structured, individualized approach to managing mental health conditions through the safe and effective use of psychiatric medications. Our experienced providers conduct thorough evaluations to assess your symptoms, medical history, and treatment goals before developing a personalized medication plan tailored to your unique needs.",
        descr2: "We prioritize collaboration, ensuring that you understand your treatment options, potential side effects, and expected outcomes. Through regular follow-ups, we monitor your response to medication, make necessary adjustments, and provide ongoing support to optimize effectiveness while minimizing side effects.",
        descr3: "Our goal is to enhance your mental health stability, improve daily functioning, and support long-term well-being. Whether you are starting medication for the first time, adjusting your current regimen, or seeking alternative options, we are here to provide expert guidance and compassionate care every step of the way.",
    },
    {
        id: 3,
        name: "Psychotherapy",
        image: psychotherapyImg,
        descr1: "Our Psychotherapy services at BrightLife are designed to provide a safe, supportive, and confidential space where individuals can explore their emotions, thoughts, and life experiences. We believe that healing happens through connection, self-awareness, and the development of effective coping strategies.",
        descr2: "Our licensed therapists utilize evidence-based approaches, such as Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and trauma-informed care, to address a wide range of mental health concerns, including anxiety, depression, trauma, relationship challenges, and life transitions. Therapy is tailored to each individual's unique needs, ensuring a personalized and effective treatment experience.",
        descr3: "We offer individual therapy for personal growth and healing, couples therapy to strengthen relationships, and group therapy to foster connection and shared experiences. Through psychotherapy, we empower individuals to manage stress, build resilience, improve emotional regulation, and cultivate a more fulfilling and balanced life. At BrightLife, we are dedicated to walking alongside you on your journey to mental wellness and long-term success.",
    },
    {
        id: 4,
        name: "Psychiatric Rehabilitation Program - Adults",
        image: psychiatricRehabImg,
        descr1: "Our Adult Psychiatric Rehabilitation Program (PRP) provides comprehensive, person-centered support designed to help individuals manage their mental health, enhance their daily living skills, and reach their full potential. We create individualized rehabilitation plans tailored to each client’s unique needs, focusing on skill-building, emotional wellness, and personal growth.",
        descr2: "Through life skills training, social and community integration activities, and access to essential resources, we empower clients to overcome challenges, build confidence, and work toward meaningful, long-term goals.",
        descr3: "Our dedicated team offers compassionate guidance and practical tools to support clients in achieving greater independence, improving their quality of life, and maintaining long-term wellness in a safe and nurturing environment.",
    },
    {
        id: 5,
        name: "Medication-Assisted Treatment",
        image: medAssistedTreatmentImg,
        descr1: "Our Medication-Assisted Treatment (MAT) program provides comprehensive support for individuals struggling with substance use disorders (SUDs) by combining FDA-approved medications with therapy and counseling.",
        descr2: "Our MAT program helps reduce cravings, manage withdrawal symptoms, and support long-term recovery while addressing the behavioral aspects of addiction for a holistic, lasting recovery journey.",
        availableTreatments: [
            {
                id: 1,
                title: "Opioid Use Disorder (OUD):",
                descr: "Buprenorphine (Suboxone, Sublocade), Naltrexone (Vivitrol)",
            },
            {
                id: 2,
                title: "Alcohol Use Disorder (AUD):",
                descr: "Naltrexone (Vivitrol), Acamprosate (Campral), Disulfiram (Antabuse)",
            },
            {
                id: 3,
                title: "Nicotine Use Disorder:",
                descr: "Nicotine replacement therapies, Varenicline (Chantix), Bupropion (Zyban)",
            },
        ],
    },
    {
        id: 6,
        name: "Medication Assisted Weight Loss",
        image: medAssistedWeightLossImg,
        descr1: "Our Medication-Assisted Weight Loss program provides a comprehensive, science-backed approach to achieving sustainable weight management. We utilize FDA-approved medications—including a range of oral and injectable options such as Tirzepatide (Mounjaro, Zepbound), Semaglutide (Wegovy, Ozempic), Phentermine, and others—tailored to each individual’s needs to optimize results.",
        descr2: "However, medication is just one piece of the puzzle. Our program integrates personalized lifestyle modifications, nutritional counseling, and behavioral health support to address the emotional and psychological factors that contribute to weight challenges. We focus on long-term success by helping individuals develop healthier eating habits, improve physical activity, and build a positive mindset around wellness.",
        descr3: "With expert medical guidance, regular monitoring, and a holistic approach, we empower clients to take control of their health, achieve sustainable weight loss, and improve their overall well-being for lasting change.",
    },
    {
        id: 7,
        name: "DUI/DWI Education",
        image: duiEduImg,
        descr1: "BrightLife’s DUI Education Program is designed to provide individuals with a deeper understanding of the risks and consequences of impaired driving. Vetted by the State of Maryland Department of Corrections, our program emphasizes awareness, responsibility, and decision-making strategies to promote safer choices.",
        descr2: "Through structured lessons, interactive discussions, and evidence-based education, participants learn about the effects of alcohol and drugs on driving, the impact on personal and public safety, and ways to prevent future impaired driving incidents. Our goal is to foster lasting behavioral change, encourage responsible decision-making, and contribute to safer roads and communities.",
    },
    {
        id: 8,
        name: "Early Intervention",
        image: earlyInterventionImg,
        descr1: "BrightLife’s Early Intervention program is designed to identify and address emerging mental health and substance use concerns before they develop into more significant challenges. By providing timely support, education, and counseling, we help individuals recognize warning signs, develop coping strategies, and make informed decisions about their well-being.",
        descr2: "Our program focuses on prevention and empowerment, offering behavioral health screenings, psychoeducation, and skill-building workshops tailored to individual needs. We work with clients to enhance emotional regulation, improve decision-making, and strengthen resilience, reducing the likelihood of future crises.",
        descr3: "Through a proactive, person-centered approach, BrightLife’s Early Intervention services help individuals build a strong foundation for long-term stability, improved mental health, and a healthier, more fulfilling life.",
    },
    {
        id: 9,
        name: "Supported Employment - Coming Soon",
        image: supportedEmploymentImg,
        descr1: "BrightLife’s Supported Employment program is designed to help individuals with mental health conditions or substance use challenges find, secure, and maintain meaningful employment. We provide personalized career support, including job readiness training, resume building, interview preparation, and workplace accommodations. Our team works closely with individuals to identify strengths, set employment goals, and develop skills needed for long-term career success.",
        descr2: "Through ongoing job coaching, employer collaboration, and real-world work experiences, we empower individuals to achieve financial independence, confidence, and stability in the workforce. BrightLife is committed to fostering an inclusive, supportive environment where every individual can reach their full potential in their chosen career path.",
    },
    {
        id: 10,
        name: "Low-Intensity Community Housing - Coming Soon",
        image: commHousingImg,
        descr1: "BrightLife’s Community Housing program provides a safe, structured, and supportive living environment for individuals transitioning toward independent living. Designed for those recovering from mental health challenges or substance use disorders, our housing program emphasizes stability, accountability, and personal growth.",
        descr2: "Residents benefit from a structured setting that fosters life skills development, peer support, and access to essential resources such as employment assistance, counseling, and recovery-focused services. Our goal is to empower individuals to regain independence, build a strong foundation for long-term stability, and successfully reintegrate into the community while maintaining their mental and emotional well-being.",
    },
    {
        id: 11,
        name: "IOP & PHP - Coming Soon",
        image: iopPhpImg,
        descr1: "BrightLife is expanding its services to include Intensive Outpatient (IOP) and Partial Hospitalization (PHP) programs, offering structured, comprehensive care for individuals who need more support than traditional outpatient therapy but do not require inpatient hospitalization.",
        descr2: "Our IOP and PHP programs will provide a multidisciplinary approach to mental health and substance use treatment, integrating individual and group therapy, psychiatric care, medication management, and life skills training. With a focus on stability, recovery, and personal growth, these programs will help individuals develop coping strategies, manage symptoms, and work toward long-term wellness—all while maintaining their daily responsibilities.",
        descr3: "Stay tuned for the launch of these vital programs, designed to provide flexible, high-quality care in a supportive and therapeutic environment.",
    },
];
