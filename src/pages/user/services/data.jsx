import {
    SubstanceUseIcon,
    BipolarIcon,
    SchizophreniaIcon,
    DepressionIcon,
    DelusionalIcon,
    AnxietyIcon,
    AutismIcon,
    AdhdIcon,
    USchizophreniaIcon,
    BorderlineIcon,
    PersonalityIcon,
    PtsdIcon,
    AdjustmentIcon,
    CoOccurringIcon,
    MajorDepressiveIcon,
    ObsessiveCompulsiveIcon,
    InsomniaIcon,
} from "./components/icons";

import substanceImg from "../../../assets/substance-use.webp";
import bipolarImg from "../../../assets/bipolar.webp";
import anxietyImg from "../../../assets/anxiety.jpg";
import depressionImg from "../../../assets/depression.jpg";
import anxietyBleso from "../../../assets/anxiety-bleso.webp";
import depressionBleso from "../../../assets/depression-bleso.webp";
import schizoImg from "../../../assets/schizo.jpg";
import delusionImg from "../../../assets/delusion.webp";
import autismImg from "../../../assets/autism.jpg";
import adhdImg from "../../../assets/adhd.jpg";
import uschizoImg from "../../../assets/uschizo.jpg";
import personalityImg from "../../../assets/personality.webp";
import bpdImg from "../../../assets/bpd.jpg";
import ptsdImg from "../../../assets/ptsd.jpg";
import adjustmentImg from "../../../assets/adjustment.jpg";
import coOccurImg from "../../../assets/co-occur.png";
import majorDepressionImg from "../../../assets/major-depression.jpg";
import ocdImg from "../../../assets/ocd.jpg";
import insomniaImg from "../../../assets/insomnia.webp";

import { MdGroup, MdGroups2, MdOutlineFamilyRestroom } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";

export const servicesData = [
    {
        id: 1,
        name: "Substance Use Disorder",
        shortName: "Substance Abuse",
        descr1: "Substance Use Disorder is a complex condition that affects not only the individual but also their loved ones. It often begins with occasional use, which can develop into dependency, impacting relationships, careers, and overall health. We understand how overwhelming this journey can feel, but recovery is possible with the right support and care.",
        descr2: "we understand the journey to recovery can be daunting. That’s why we provide personalized care, offering proven treatments and unwavering support to help you regain control and rediscover joy in life. Recovery isn’t just possible—it’s within your reach.",
        summary: "Difficulty controlling substance use despite harm.",
        advertText:
            "Break free from addiction and embrace a healthier tomorrow.",
        symptoms: [
            "Cravings for substances",
            "Loss of self-control",
            "Risky behaviors",
            "Neglecting responsibilities",
            "Increasing tolerance",
            "Withdrawal symptoms",
        ],
        diagnosis:
            "Our team of specialists provides comprehensive assessments to understand your unique challenges. Through evidence-based therapies, medical care, and supportive guidance, we create a customized path to recovery, equipping you with the tools to sustain a substance-free life.",
        icon: <SubstanceUseIcon className="text-deepGreen w-12 md:w-16" />,
        image: substanceImg,
    },
    {
        id: 2,
        name: "Bipolar Disorder",
        shortName: "Bipolar",
        descr1: "Bipolar Disorder is a mental health condition characterized by extreme mood swings, ranging from emotional highs (mania or hypomania) to intense lows (depression). These shifts can disrupt daily life, relationships, and productivity, making it difficult to maintain a sense of stability. It’s not a sign of weakness but a condition that requires expert care and understanding.",
        descr2: "we focus on helping individuals find balance and resilience. With the right treatment plan and compassionate support, managing bipolar disorder is possible, allowing individuals to live fulfilling and stable lives.",
        summary: "Mood swings between depression and mania.",
        advertText:
            "Find stability and hope through personalized treatment plans.",
        symptoms: [
            "Extreme mood swings",
            "Periods of high energy",
            "Difficulty sleeping",
            "Intense feelings of sadness",
            "Risky decision-making",
            "Trouble concentrating",
        ],
        diagnosis:
            "Our specialists provide a comprehensive evaluation to identify patterns and triggers, followed by a tailored treatment plan involving therapy, medication, and support systems to achieve emotional balance and long-term stability.",
        icon: <BipolarIcon className="text-deepGreen w-12 md:w-16" />,
        image: bipolarImg,
    },
    {
        id: 3,
        name: "Depression and Treatment-Resistant Depression",
        shortName: "Depression/TRD",
        descr1: "Depression can feel like an unending shadow, draining joy and motivation from daily life. For some, traditional treatments may not provide relief, leading to Treatment-Resistant Depression (TRD). This condition requires specialized care to break through the barriers to healing and restore hope.",
        descr2: "we take a personalized approach to treating depression, offering innovative therapies and compassionate guidance. Whether it’s addressing standard depression or TRD, we’re here to help you rediscover purpose and happiness in life.",
        summary: "Persistent sadness that resists treatment.",
        symptoms: [
            "Persistent sadness",
            "Loss of interest",
            "Fatigue and low energy",
            "Sleep disturbances",
            "Feelings of hopelessness",
            "Difficulty concentrating",
        ],
        diagnosis:
            "Our experts provide a thorough diagnosis and use advanced therapies, including medication adjustments and innovative techniques, to treat both common and treatment-resistant depression. We’re dedicated to finding what works for you.",
        icon: <DepressionIcon className="text-deepGreen w-12 md:w-16" />,
        image: depressionImg,
    },
    {
        id: 4,
        name: "Schizophrenia Disorders",
        shortName: "Schizophrenia",
        descr1: "Schizophrenia is a complex mental health condition that affects how individuals think, feel, and perceive reality. It may involve hallucinations, delusions, and disorganized thinking, making daily life challenging. However, with the right care, individuals with schizophrenia can lead fulfilling lives.",
        descr2: "We believe that no one should face this condition alone. we provide specialized care designed to improve understanding, reduce symptoms, and empower individuals to reclaim control over their lives.",
        summary: "Disrupted emotions, often with delusions.",
        symptoms: [
            "Hallucinations",
            "Delusions",
            "Disorganized speech",
            "Emotional withdrawal",
            "Cognitive difficulties",
            "Impaired functioning",
        ],
        diagnosis:
            "Through expert evaluations, tailored therapies, and medication management, our specialists provide comprehensive care to manage symptoms and support long-term recovery.",
        icon: <SchizophreniaIcon className="text-deepGreen w-12 md:w-16" />,
        image: schizoImg,
    },
    {
        id: 5,
        name: "Delusional Disorder",
        shortName: "Delusional Disorder",
        descr1: "Delusional Disorder involves persistent beliefs in things that aren’t true, despite clear evidence to the contrary. These beliefs can strain relationships, disrupt daily life, and cause significant distress. However, with proper treatment, individuals can regain clarity and confidence.",
        descr2: "we focus on understanding each individual’s experience and providing personalized care to address the underlying causes and impacts of delusions. With our support, recovery is achievable.",
        summary: "Strong false beliefs disconnected from reality",
        symptoms: [
            "Fixed false beliefs",
            "Emotional isolation",
            "Anxiety or irritability",
            "Impaired judgment",
            "Paranoia",
            "Difficulty distinguishing reality",
        ],
        diagnosis:
            "Our specialists use targeted therapy and medication to help individuals reframe beliefs and regain emotional well-being. Compassionate care is at the heart of our approach.",
        icon: <DelusionalIcon className="text-deepGreen w-12 md:w-16" />,
        image: delusionImg,
    },
    {
        id: 6,
        name: "Anxiety Disorder",
        shortName: "Anxiety Disorder",
        descr1: "Anxiety Disorder is more than just occasional worry or stress—it’s a persistent feeling of fear and unease that can interfere with daily life. It often manifests as physical symptoms like a racing heart, restlessness, or difficulty sleeping, making it hard to focus or feel at ease.",
        descr2: "we offer compassionate and effective treatments to help you regain control over anxiety. Through personalized care and proven techniques, we guide you toward a calmer and more fulfilling life.",
        summary: "Excessive worry and fear affecting daily life.",
        advertText:
            "Overcome the weight of worry with our compassionate anxiety care.",
        symptoms: [
            "Persistent worry",
            "Restlessness",
            "Muscle tension",
            "Sleep difficulties",
            "Fatigue",
            "Irritability",
        ],
        diagnosis:
            "Our specialists use a combination of therapy, relaxation techniques, and, when necessary, medication to help you overcome anxiety and regain confidence in your daily life.",
        icon: <AnxietyIcon className="text-deepGreen w-12 md:w-16" />,
        image: anxietyImg,
    },
    {
        id: 7,
        name: "Autism Spectrum Disorder",
        shortName: "Autism/ASD",
        descr1: "Autism, or Autism Spectrum Disorder (ASD), is a developmental condition that affects communication, behavior, and social interaction. Each individual with autism experiences the world differently, with unique strengths and challenges.",
        descr2: "we celebrate diversity and provide tailored support to help individuals with autism thrive. Through specialized therapies, we aim to empower individuals and their families to build meaningful connections and reach their fullest potential.",
        summary: "Disorder that impacts communication & behavior.",
        symptoms: [
            "Social communication difficulties",
            "Repetitive behaviors",
            "Sensory sensitivities",
            "Intense interests",
            "Struggles with change",
            "Nonverbal cues challenges",
        ],
        diagnosis:
            "Our experts offer comprehensive assessments and therapies, focusing on improving communication, social skills, and coping mechanisms, while celebrating each individual’s strengths.",
        icon: <AutismIcon className="text-deepGreen w-12 md:w-16" />,
        image: autismImg,
    },
    {
        id: 8,
        name: "Attention-Deficit / Hyperactivity Disorder",
        shortName: "ADHD",
        descr1: "ADHD is a condition that impacts attention, impulsivity, and activity levels, often making everyday tasks feel overwhelming. It’s not just a childhood condition—it affects adults too, challenging productivity and relationships.",
        descr2: "we understand the frustrations ADHD can bring, and we are here to help. With evidence-based treatments and ongoing support, we can guide you toward better focus, organization, and balance in life.",
        summary: "Inattention and hyperactivity affecting daily tasks.",
        symptoms: [
            "Difficulty focusing",
            "Impulsivity",
            "Restlessness",
            "Forgetfulness",
            "Disorganization",
            "Trouble completing tasks",
        ],
        diagnosis:
            "Our specialists provide accurate diagnoses and personalized strategies, combining therapy, skill-building, and medication management to empower individuals with ADHD.",
        icon: <AdhdIcon className="text-deepGreen w-12 md:w-16" />,
        image: adhdImg,
    },
    {
        id: 9,
        name: "Unspecified Schizophrenia Spectrum",
        shortName: "Schizophrenia II",
        descr1: "This condition includes a range of symptoms related to schizophrenia that do not fit into a specific category. It can cause challenges in thinking, perception, and emotional expression, disrupting daily life and relationships.",
        descr2: "we offer understanding and comprehensive care to help individuals manage symptoms and improve their quality of life. Through tailored treatments, we aim to empower you to navigate challenges with confidence.",
        summary: "Thought and perception disruptions",
        symptoms: [
            "Disorganized thoughts",
            "Emotional flatness",
            "Hallucinations",
            "Impaired judgment",
            "Cognitive challenges",
            "Withdrawal from others",
        ],
        diagnosis:
            "Our specialists provide a thorough evaluation and use evidence-based therapies to address symptoms, improve functioning, and foster emotional well-being.",
        icon: <USchizophreniaIcon className="text-deepGreen w-12 md:w-16" />,
        image: uschizoImg,
    },
    {
        id: 10,
        name: "Borderline Personality Disorder (BPD)",
        shortName: "BPD",
        descr1: "BPD is a complex condition marked by intense emotions, unstable relationships, and a fluctuating sense of self. It can feel overwhelming to navigate the highs and lows, but recovery is achievable with the right support.",
        descr2: "we specialize in helping individuals with BPD find balance and build healthier connections. With understanding and effective treatment, a fulfilling and stable life is within reach.",
        summary: "Intense emotions and unstable relationships.",
        symptoms: [
            "Emotional instability",
            "Fear of abandonment",
            "Impulsive behaviors",
            "Unstable relationships",
            "Self-image struggles",
            "Intense mood swings",
        ],
        diagnosis:
            "Our team uses therapies like Dialectical Behavior Therapy (DBT) and personalized strategies to help individuals develop emotional regulation and healthy relationship skills.",
        icon: <BorderlineIcon className="text-deepGreen w-12 md:w-16" />,
        image: bpdImg,
    },
    {
        id: 16,
        name: "Obsessive-Compulsive Disorder (OCD)",
        shortName: "OCD",
        descr1: "Obsessive-Compulsive Disorder (OCD) involves persistent, unwanted thoughts (obsessions) and repetitive behaviors (compulsions) that individuals feel compelled to perform to reduce anxiety or prevent harm. These actions can be time-consuming and interfere with daily life, making it challenging to manage relationships, work, and other activities. Individuals with OCD often experience significant distress, believing their compulsions are necessary to avoid negative outcomes, even though they may know their actions are excessive.",
        descr2: "we understand how OCD can affect your well-being. Our dedicated team offers compassionate, personalized treatment plans that address both the obsessive thoughts and compulsive behaviors. With the right support, we can help you regain control of your life and work toward lasting recovery.",
        summary: "Unwanted thoughts and repetitive behaviors.",
        symptoms: [
            "Intrusive unwanted thoughts",
            "Repetitive compulsive behaviors",
            "Fear of contamination",
            "Need for symmetry or order",
            "Anxiety",
            "Difficulty concentrating",
        ],
        diagnosis:
            "Our specialists offer personalized care, using cognitive-behavioral therapy (CBT) with Exposure and Response Prevention (ERP) to help you manage obsessive thoughts and compulsive actions. We also explore medication options to help reduce anxiety and support your healing process. Let us help you regain control and lead a fulfilling life.",
        icon: (
            <ObsessiveCompulsiveIcon className="text-deepGreen w-12 md:w-16" />
        ),
        image: ocdImg,
    },
    {
        id: 12,
        name: "PTSD (Post-Traumatic Stress Disorder)",
        shortName: "PTSD",
        descr1: "PTSD is a condition triggered by experiencing or witnessing a traumatic event. It can manifest as flashbacks, nightmares, and emotional distress, often impacting daily life and relationships.",
        descr2: "we offer a safe and understanding environment to help individuals process trauma and regain control of their lives. With the right support, healing is possible.",
        summary: "Anxiety and flashbacks caused by past trauma.",
        symptoms: [
            "Intrusive memories",
            "Nightmares",
            "Emotional numbness",
            "Avoidance behaviors",
            "Irritability",
            "Hypervigilance",
        ],
        diagnosis:
            "Our experts use evidence-based therapies, such as trauma-focused CBT and EMDR, to help individuals process traumatic experiences and rebuild a sense of safety.",
        icon: <PtsdIcon className="text-deepGreen w-12 md:w-16" />,
        image: ptsdImg,
    },
    {
        id: 13,
        name: "Adjustment Disorder",
        shortName: "Adjustment Disorder",
        descr1: "Adjustment Disorders occur when individuals struggle to cope with significant life changes or stressors. It may result in emotional and behavioral symptoms that disrupt daily functioning.",
        descr2: "we understand that change can be challenging, and we are here to guide you through it. With personalized care, we help you adapt and thrive in the face of life’s transitions.",
        summary: "Emotional responses to life changes or stress.",
        symptoms: [
            "Sadness or hopelessness",
            "Difficulty concentrating",
            "Withdrawal from activities",
            "Physical complaints",
            "Irritability",
            "Anxiety",
        ],
        diagnosis:
            "Our specialists offer therapy focused on building resilience and coping strategies, helping individuals navigate life’s changes with confidence.",
        icon: <AdjustmentIcon className="text-deepGreen w-12 md:w-16" />,
        image: adjustmentImg,
    },
    {
        id: 14,
        name: "Co-occurring Disorder",
        shortName: "Co-occurring Disorder",
        descr1: "Co-occurring Disorders involve the presence of both a mental health condition and substance use disorder, creating complex challenges for individuals. These conditions are interconnected and require a holistic approach to treatment.",
        descr2: "we specialize in integrated care to address both conditions simultaneously. By treating the whole person, we aim to empower individuals to achieve long-term recovery and emotional well-being.",
        summary: "Simultaneous mental health and addiction overlap.",
        symptoms: [
            "Substance dependence",
            "Emotional instability",
            "Withdrawal from support",
            "Impaired judgment",
            "Physical health issues",
            "Risky behaviors",
        ],
        diagnosis:
            "Our specialists use an integrated treatment model combining therapy, medical care, and support groups to address both mental health and substance use challenges.",
        icon: <CoOccurringIcon className="text-deepGreen w-12 md:w-16" />,
        image: coOccurImg,
    },
    {
        id: 15,
        name: "Major Depressive Disorder",
        shortName: "Major Depressive Disorder",
        descr1: "Major Depressive Disorder (MDD) goes beyond temporary sadness, affecting mood, energy levels, and daily activities. It can make even the simplest tasks feel overwhelming and impact relationships and self-worth.",
        descr2: "we provide compassionate care to help individuals navigate the darkness of depression. With personalized treatment plans, we strive to guide you toward healing and renewed hope.",
        summary: "Persistent sadness and lack of interest affecting life.",
        symptoms: [
            "Persistent sadness",
            "Loss of interest",
            "Fatigue",
            "Sleep disturbances",
            "Physical health issues",
            "Difficulty concentrating",
        ],
        diagnosis:
            "Our team provides evidence-based therapies and medication management to address depression, focusing on restoring emotional balance and improving quality of life.",
        icon: <MajorDepressiveIcon className="text-deepGreen w-12 md:w-16" />,
        image: majorDepressionImg,
    },
    {
        id: 11,
        name: "Personality Disorders",
        shortName: "Personality Disorders",
        descr1: "Personality Disorders affect how individuals think, feel, and behave, often leading to difficulties in relationships and daily life. These patterns are deeply rooted and can cause distress for both the individual and those around them.",
        descr2: "we provide tailored support to help individuals better understand and manage their behaviors. Our approach is compassionate, fostering growth and resilience in the face of challenges.",
        summary: "Patterns of unhealthy thinking and behavior.",
        symptoms: [
            "Rigid thinking patterns",
            "Relationship challenges",
            "Emotional instability",
            "Difficulty adapting",
            "Impulsive actions",
            "Struggles with self-image",
        ],
        diagnosis:
            "Our specialists use psychotherapy to explore underlying causes and guide individuals toward healthier patterns of thinking and behavior.",
        icon: <PersonalityIcon className="text-deepGreen w-12 md:w-16" />,
        image: personalityImg,
    },
];

export const conditionsData = [
    {
        id: 3,
        name: "ADHD & ADD Testing",
        shortName: "ADHD & ADD",
        descr1: "ADHD is a condition that impacts attention, impulsivity, and activity levels, often making everyday tasks feel overwhelming. It’s not just a childhood condition—it affects adults too, challenging productivity and relationships.",
        descr2: "we understand the frustrations ADHD can bring, and we are here to help. With evidence-based treatments and ongoing support, we can guide you toward better focus, organization, and balance in life.",
        summary: "Inattention and hyperactivity affecting daily tasks.",
        symptoms: [
            "Difficulty focusing",
            "Impulsivity",
            "Restlessness",
            "Forgetfulness",
            "Disorganization",
            "Trouble completing tasks",
        ],
        diagnosis:
            "Our specialists provide accurate diagnoses and personalized strategies, combining therapy, skill-building, and medication management to empower individuals with ADHD.",
        icon: <AdhdIcon className="text-deepGreen w-12 md:w-16" />,
        image: adhdImg,
    },
    {
        id: 5,
        name: "Substance Use Disorder",
        shortName: "SUD",
        descr1: "Substance Use Disorder is a complex condition that affects not only the individual but also their loved ones. It often begins with occasional use, which can develop into dependency, impacting relationships, careers, and overall health. We understand how overwhelming this journey can feel, but recovery is possible with the right support and care.",
        descr2: "we understand the journey to recovery can be daunting. That’s why we provide personalized care, offering proven treatments and unwavering support to help you regain control and rediscover joy in life. Recovery isn’t just possible—it’s within your reach.",
        summary: "Difficulty controlling substance use despite harm.",
        advertText:
            "Break free from addiction and embrace a healthier tomorrow.",
        symptoms: [
            "Cravings for substances",
            "Loss of self-control",
            "Risky behaviors",
            "Neglecting responsibilities",
            "Increasing tolerance",
            "Withdrawal symptoms",
        ],
        diagnosis:
            "Our team of specialists provides comprehensive assessments to understand your unique challenges. Through evidence-based therapies, medical care, and supportive guidance, we create a customized path to recovery, equipping you with the tools to sustain a substance-free life.",
        icon: <SubstanceUseIcon className="text-deepGreen w-12 md:w-16" />,
        image: substanceImg,
    },
    {
        id: 6,
        name: "Schizophrenia",
        shortName: "Schizophrenia",
        descr1: "Schizophrenia is a complex mental health condition that affects how individuals think, feel, and perceive reality. It may involve hallucinations, delusions, and disorganized thinking, making daily life challenging. However, with the right care, individuals with schizophrenia can lead fulfilling lives.",
        descr2: "We believe that no one should face this condition alone. we provide specialized care designed to improve understanding, reduce symptoms, and empower individuals to reclaim control over their lives.",
        summary: "Disrupted emotions, often with delusions.",
        symptoms: [
            "Hallucinations",
            "Delusions",
            "Disorganized speech",
            "Emotional withdrawal",
            "Cognitive difficulties",
            "Impaired functioning",
        ],
        diagnosis:
            "Through expert evaluations, tailored therapies, and medication management, our specialists provide comprehensive care to manage symptoms and support long-term recovery.",
        icon: <SchizophreniaIcon className="text-deepGreen w-12 md:w-16" />,
        image: schizoImg,
    },
    {
        id: 7,
        name: "Insomnia",
        shortName: "Insomnia",
        descr1: "Insomnia is a common sleep disorder that makes it difficult to fall asleep, stay asleep, or wake up feeling rested. People experiencing insomnia often struggle with persistent fatigue, irritability, poor concentration, and a decreased quality of life. It can be short-term (acute) due to stress or lifestyle changes, or long-term (chronic), often linked with mental health conditions such as anxiety, depression, or trauma. Left untreated, insomnia can affect every aspect of a person's emotional and physical well-being.",
        descr2: "we understand that sleep is essential for overall mental and emotional balance. Our holistic approach to treating insomnia integrates behavioral health care, personalized therapy, and wellness strategies that target the root causes of sleep disruption. Whether your insomnia stems from anxiety, life transitions, or an underlying mental health condition, our licensed professionals are here to guide you. We offer evidence-based treatments such as Cognitive Behavioral Therapy for Insomnia (CBT-I), stress management techniques, lifestyle coaching, and, when needed, coordination with medical professionals for medication management. Our warm and supportive environment helps you feel safe, heard, and empowered to reclaim your rest and your peace of mind.",
        summary: "Strong false beliefs disconnected from reality",
        symptoms: [
            "Trouble falling asleep",
            "Frequent night awakenings",
            "Feeling tired after sleep",
            "Poor focus or memory",
            "Irritability or mood changes",
            "Bedtime anxiety",
        ],
        diagnosis:
            "At BrightLife, we believe quality sleep is not a luxury—it’s a necessity. When you reach out to us, we start by understanding your unique experience with insomnia through an initial consultation. From there, we build a personalized treatment plan tailored to your needs, preferences, and health goals. Our compassionate clinicians walk with you every step of the way—from identifying triggers and reshaping sleep habits to helping you establish a healthier, more restorative nighttime routine. With consistent care and the right tools, you can overcome insomnia and wake up to a brighter, more energized life.",
        icon: <InsomniaIcon className="text-deepGreen text-5xl md:text-6xl" />,
        image: insomniaImg,
    },
    {
        id: 2,
        name: "Anxiety & Related Disorders",
        shortName: "Anxiety Disorder",
        descr1: "Anxiety is a natural response to stress, but when it becomes persistent, overwhelming, or interferes with daily life, it may indicate an anxiety disorder. Millions of individuals struggle with anxiety and related disorders, which can manifest in various ways, from excessive worry and panic attacks to social withdrawal and physical symptoms like rapid heartbeat, muscle tension, and restlessness.",
        descr2: "we understand that anxiety is more than just feeling nervous—it can be debilitating, affecting work, relationships, and overall well-being. That’s why we offer compassionate, evidence-based treatment to help individuals regain control and improve their quality of life.",
        summary: "Excessive worry and fear affecting daily life.",
        advertText:
            "Overcome the weight of worry with our compassionate anxiety care.",
        symptoms: [
            "Persistent worry or fear",
            "Difficulty concentrating",
            "Shortness of breath",
            "Sleep disturbances",
            "Sweating or trembling",
            "Gastrointestinal issues",
        ],
        personalizedTherapy: [
            {
                id: 1,
                title: "Psychotherapy:",
                descr: "Evidence-based approaches such as Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and Exposure Therapy help individuals reframe anxious thoughts, develop coping skills, and regain control over their emotions.",
            },
            {
                id: 2,
                title: "Medication Management:",
                descr: "For those who may benefit, our psychiatric providers carefully assess and prescribe medications such as SSRIs, SNRIs, and anti-anxiety medications to help manage symptoms effectively.",
            },
            {
                id: 3,
                title: "Holistic & Lifestyle Approaches:",
                descr: "We emphasize mindfulness, relaxation techniques, lifestyle adjustments, and self-care strategies to reduce anxiety naturally.",
            },
            {
                id: 4,
                title: "Intensive Outpatient & Partial Hospitalization Programs (Coming Soon):",
                descr: "For individuals needing a higher level of care, our IOP and PHP programs will offer structured, therapeutic support while allowing clients to maintain their daily responsibilities.",
            },
        ],
        diagnosis:
            "If anxiety is interfering with your life, know that you don’t have to face it alone. At BrightLife, we are committed to helping individuals find relief and regain control. Contact us today to learn more about our anxiety treatment options and take the first step toward a calmer, more fulfilling life.",
        icon: <AnxietyIcon className="text-deepGreen w-12 md:w-16" />,
        image: anxietyBleso,
    },
    {
        id: 4,
        name: "Bipolar & Related Disorders",
        shortName: "Bipolar",
        descr1: "Bipolar Disorder is a mental health condition characterized by extreme mood swings, ranging from emotional highs (mania or hypomania) to intense lows (depression). These shifts can disrupt daily life, relationships, and productivity, making it difficult to maintain a sense of stability. It’s not a sign of weakness but a condition that requires expert care and understanding.",
        descr2: "we focus on helping individuals find balance and resilience. With the right treatment plan and compassionate support, managing bipolar disorder is possible, allowing individuals to live fulfilling and stable lives.",
        summary: "Mood swings between depression and mania.",
        advertText:
            "Find stability and hope through personalized treatment plans.",
        symptoms: [
            "Extreme mood swings",
            "Periods of high energy",
            "Difficulty sleeping",
            "Intense feelings of sadness",
            "Risky decision-making",
            "Trouble concentrating",
        ],
        diagnosis:
            "Our specialists provide a comprehensive evaluation to identify patterns and triggers, followed by a tailored treatment plan involving therapy, medication, and support systems to achieve emotional balance and long-term stability.",
        icon: <BipolarIcon className="text-deepGreen w-12 md:w-16" />,
        image: bipolarImg,
    },
    {
        id: 1,
        name: "Depression & Related Disorders",
        shortName: "Depression",
        descr1: "Depression is more than just occasional sadness; it is a serious mental health condition characterized by persistent feelings of sadness, loss of interest, fatigue, and other emotional and physical symptoms that interfere with daily life.",
        descr2: "We offer a holistic approach to managing depression and related disorders. Our experienced mental health professionals will work closely with you to create an individualized treatment plan tailored to your specific needs and circumstances.",
        summary: "Persistent sadness that resists treatment.",
        symptoms: [
            "Persistent sadness",
            "Loss of interest",
            "Fatigue and low energy",
            "Sleep disturbances",
            "Feelings of hopelessness",
            "Difficulty concentrating",
        ],
        personalizedTherapy: [
            {
                id: 1,
                title: "Cognitive Behavioral Therapy (CBT):",
                descr: "Helps identify and modify negative thought patterns.",
            },
            {
                id: 2,
                title: "Dialectical Behavior Therapy (DBT):",
                descr: "Equips you with skills to manage emotional instability and distress.",
            },
            {
                id: 3,
                title: "Interpersonal Therapy:",
                descr: "Focuses on improving personal relationships and social functioning.",
            },
            { id: 4, title: "Medication Management", descr: "" },
        ],
        diagnosis:
            "Recovery from depression is possible. Let BrightLife Enhancement Services guide you toward a brighter, healthier future. Contact us today to begin your healing journey.",
        icon: <DepressionIcon className="text-deepGreen w-12 md:w-16" />,
        image: depressionBleso,
    },
];

export const supportiveServicesData = [
    {
        id: 1,
        name: "Individual/Couples Therapy",
        descr: "Offers compassionate support to help you navigate personal challenges & strengthen your relationships.",
        icon: <MdGroup className="text-deepGreen text-5xl md:text-7xl" />,
    },
    {
        id: 2,
        name: "Lifestyle Coaching",
        descr: "Encourages healthy lifestyle (nutrition, exercise, & sleep hygiene) to improve mood and energy levels.",
        icon: <GiLifeBar className="text-deepGreen text-5xl md:text-7xl" />,
    },
    {
        id: 3,
        name: "Family Counselling",
        descr: "Engages family members in the treatment process, promoting understanding and support.",
        icon: <MdOutlineFamilyRestroom className="text-deepGreen text-5xl md:text-7xl" />,
    },
    {
        id: 4,
        name: "Group Therapy",
        descr: "Offers peer support and connection, reinforcing that you are not alone in your journey.",
        icon: <MdGroups2 className="text-deepGreen text-5xl md:text-7xl" />,
    },
];

export const conditionsFastLinks = [
    {
        id: 1,
        name: "Depression & Related Disorders",
    },
    { id: 2, name: "Anxiety & Related Disorders" },
    {
        id: 3,
        name: "ADHD & ADD Testing",
    },
    {
        id: 4,
        name: "Bipolar & Related Disorders",
    },
    {
        id: 5,
        name: "Substance Use Disorder",
    },
    {
        id: 6,
        name: "Schizophrenia",
    },
    {
        id: 7,
        name: "Insomnia",
    },
];

export const servicesFastLinks = [
    { id: 6, name: "Anxiety Disorder" },
    {
        name: "Substance Use Disorder",
        id: 1,
    },
    {
        name: "ADHD",
        id: 8,
    },
    {
        name: "Depression",
        id: 3,
    },
    {
        name: "PTSD",
        i: 12,
    },
    {
        name: "Bipolar",
        id: 2,
    },
];
