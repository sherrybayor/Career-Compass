import { CareerProfile } from '../types';

export const careersDb: CareerProfile[] = [
  // ========================================================
  // SCIENCE & TECHNOLOGY
  // ========================================================
  {
    id: 'software-engineer',
    name: 'Software Engineer & Cloud Architect',
    description: 'Design, build, deploy, and maintain software systems, cloud infrastructure, and mobile applications to solve complex business and societal challenges.',
    sector: 'Technology',
    stream: 'Science & Technology',
    salaryNigeria: '₦350,000 - ₦1,800,000 / month',
    salaryGlobal: '$70,000 - $160,000 / year',
    skillsRequired: ['TypeScript & Python', 'Cloud Architecture (GCP/AWS)', 'Algorithms & Data Structures', 'Problem Solving', 'API Integration', 'DevOps & CI/CD'],
    universityCourses: ['B.Sc. Computer Science', 'B.Eng. Software Engineering', 'B.Sc. Information Technology'],
    polytechnicCourses: ['HND Computer Science', 'ND Computer Engineering'],
    professionalCertifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional Cloud Architect', 'Microsoft Certified: Azure Developer'],
    futureDemand: 'High',
    aiRisk: 'Medium',
    automationRisk: 'Low',
    dayInTheLife: 'Collaborating with product designers, writing clean, modular code, setting up CI/CD pipelines, debugging production issues on Kubernetes, and reviewing code written by colleagues.',
    recommendedBooks: ['Clean Code by Robert C. Martin', 'Designing Data-Intensive Applications by Martin Kleppmann'],
    recommendedYouTubeChannels: ['TechLead', 'freeCodeCamp.org', 'The Tech Brothers', 'Academind'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'One other Science subject'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Chemistry']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'Federal University of Technology, Akure (FUTA)', 'Covenant University', 'University of Lagos (UNILAG)']
  },
  {
    id: 'data-scientist-ai',
    name: 'Data Scientist & AI Specialist',
    description: 'Leverage machine learning, statistics, and advanced data pipelines to analyze complex datasets, build predictive models, and drive business decision-making.',
    sector: 'Technology & Finance',
    stream: 'Science & Technology',
    salaryNigeria: '₦400,000 - ₦2,000,000 / month',
    salaryGlobal: '$85,000 - $180,000 / year',
    skillsRequired: ['Python / R', 'SQL & NoSQL Datastores', 'Machine Learning Algorithms', 'Data Visualization (PowerBI/Tableau)', 'Statistical Analysis', 'Big Data Engineering'],
    universityCourses: ['B.Sc. Data Science', 'B.Sc. Statistics', 'B.Sc. Computer Science', 'B.Sc. Mathematics'],
    polytechnicCourses: ['HND Statistics', 'ND Computer Science'],
    professionalCertifications: ['Google Professional Data Engineer', 'Microsoft Certified: Azure Data Scientist Associate', 'TensorFlow Developer Certificate'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Writing Jupyter Notebooks to clean transaction data, training deep learning neural networks, presenting statistical findings to management, and deploying real-time anomaly detection endpoints.',
    recommendedBooks: ['An Introduction to Statistical Learning by Gareth James', 'Hands-On Machine Learning with Scikit-Learn and TensorFlow by Aurélien Géron'],
    recommendedYouTubeChannels: ['StatQuest with Josh Starmer', 'Ken Jee', 'DataCamp'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Further Mathematics or Biology'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Chemistry or Biology']
    },
    universitiesOffering: ['University of Lagos (UNILAG)', 'Covenant University', 'Federal University of Technology, Minna (FUTMINNA)', 'University of Nigeria, Nsukka (UNN)']
  },
  {
    id: 'cybersecurity-analyst',
    name: 'Cybersecurity Analyst & Incident Responder',
    description: 'Protect organizations from cyber threats, secure communication networks, monitor cloud environments for vulnerabilities, and perform ethical hacking audits.',
    sector: 'Technology & Cybersecurity',
    stream: 'Science & Technology',
    salaryNigeria: '₦300,000 - ₦1,500,000 / month',
    salaryGlobal: '$80,000 - $150,000 / year',
    skillsRequired: ['Network Protocols & Security', 'Ethical Hacking & Penetration Testing', 'Incident Response', 'Python Scripting', 'Identity Access Management', 'Linux Admin'],
    universityCourses: ['B.Sc. Cybersecurity', 'B.Sc. Computer Science', 'B.Sc. Information Security'],
    polytechnicCourses: ['HND Computer Science', 'ND Cybersecurity Technology'],
    professionalCertifications: ['CompTIA Security+', 'Certified Information Systems Security Professional (CISSP)', 'Certified Ethical Hacker (CEH)'],
    futureDemand: 'High',
    aiRisk: 'Medium',
    automationRisk: 'Low',
    dayInTheLife: 'Analyzing security logs from network firewalls, simulating an intrusion attempt to test local bank databases, writing vulnerability reports, and configuring multi-factor policies for enterprise cloud deployments.',
    recommendedBooks: ['The Web Application Hacker\'s Handbook by Dafydd Stuttard', 'Hacking: The Art of Exploitation by Jon Erickson'],
    recommendedYouTubeChannels: ['NetworkChuck', 'John Hammond', 'The Cyber Mentor', 'LiveOverflow'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'One other Science or Tech subject'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Chemistry']
    },
    universitiesOffering: ['Federal University of Technology, Minna (FUTMINNA)', 'Covenant University', 'Federal University of Technology, Akure (FUTA)', 'University of Ibadan (UI)']
  },
  {
    id: 'clinical-nurse',
    name: 'Clinical Nurse Specialist & Public Health Practitioner',
    description: 'Deliver acute patient care, operate diagnostic systems, and design public health campaigns to support wellness and disease prevention in local communities.',
    sector: 'Healthcare',
    stream: 'Science & Technology',
    salaryNigeria: '₦120,000 - ₦550,000 / month',
    salaryGlobal: '$65,000 - $110,000 / year',
    skillsRequired: ['Patient Diagnostics', 'Emergency Care', 'Pharmacology Knowledge', 'Empathy & Communication', 'Epidemiology', 'Record Keeping'],
    universityCourses: ['Bachelor of Nursing Science (B.N.Sc.)', 'B.Sc. Public Health'],
    polytechnicCourses: ['HND Nursing', 'ND General Nursing'],
    professionalCertifications: ['Registered Nurse (RN) Nigeria', 'Registered Midwife (RM)', 'Certified Public Health (CPH)'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Conducting ward rounds, administering intravenous medications, educating expecting mothers on infant healthcare practices, managing electronic health records, and responding to medical emergencies in an intensive care unit.',
    recommendedBooks: ['Fundamentals of Nursing by Taylor & Lillis', 'An Introduction to Community Health by McKenzie'],
    recommendedYouTubeChannels: ['RegisteredNurseRN', 'Simple Nursing', 'The Nurse Break'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics'],
      jamb: ['Use of English', 'Biology', 'Chemistry', 'Physics']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'University of Nigeria, Nsukka (UNN)', 'Obafemi Awolowo University (OAU)', 'Bayero University Kano (BUK)']
  },
  {
    id: 'renewable-energy-engineer',
    name: 'Renewable Energy & Power Systems Engineer',
    description: 'Design, test, and install clean energy solutions like solar grids, wind systems, and battery storage infrastructures to address electricity gaps.',
    sector: 'Energy & Infrastructure',
    stream: 'Science & Technology',
    salaryNigeria: '₦200,000 - ₦1,100,000 / month',
    salaryGlobal: '$60,000 - $130,000 / year',
    skillsRequired: ['Solar PV Design', 'Electrical Grid Modeling', 'Power Systems Analysis', 'Project Management', 'CAD Software', 'Energy Storage'],
    universityCourses: ['B.Eng. Electrical & Electronics Engineering', 'B.Eng. Mechanical Engineering', 'B.Tech. Renewable Energy Engineering'],
    polytechnicCourses: ['HND Electrical Engineering', 'ND Electrical Technology'],
    professionalCertifications: ['COREN Registration (Council for the Regulation of Engineering in Nigeria)', 'Certified Energy Manager (CEM)', 'NABCEP Solar PV Professional'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Sizing a solar mini-grid system for a remote healthcare facility, evaluating battery storage lifecycle requirements, conducting on-site engineering checks, and drafting technical proposals for international development agencies.',
    recommendedBooks: ['Renewable Energy Engineering by Nick Jenkins', 'Solar Electricity Handbook by Michael Boxwell'],
    recommendedYouTubeChannels: ['Engineering Mindset', 'Undecided with Matt Ferrell', 'Solar Energy International'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Further Mathematics or Technical Drawing'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Chemistry']
    },
    universitiesOffering: ['Federal University of Technology, Akure (FUTA)', 'Federal University of Technology, Owerri (FUTO)', 'University of Benin (UNIBEN)', 'University of Lagos (UNILAG)']
  },
  {
    id: 'mechatronics-robotics',
    name: 'Robotics & Automation Systems Engineer',
    description: 'Design and build mechatronic machinery, industrial automated systems, and agricultural robotics that drive modern manufacturing and farming.',
    sector: 'Engineering & Automation',
    stream: 'Science & Technology',
    salaryNigeria: '₦220,000 - ₦1,200,000 / month',
    salaryGlobal: '$75,000 - $145,000 / year',
    skillsRequired: ['CAD Modeling', 'Microcontrollers & PLCs', 'Robotics Kinematics', 'C++ and Python', 'Sensor Integration', 'Pneumatics'],
    universityCourses: ['B.Eng. Mechatronics Engineering', 'B.Eng. Systems Engineering', 'B.Eng. Mechanical Engineering'],
    polytechnicCourses: ['HND Mechatronics Engineering Technology', 'ND Electrical Engineering'],
    professionalCertifications: ['COREN Registration', 'Certified Automation Professional (CAP)'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Designing custom mechanical arms for a food processing facility, programming PLC controllers, running physical stress simulation tests on automated components, and coordinating system rollouts.',
    recommendedBooks: ['Robotics and Automation Handbook by Thomas R. Kurfess', 'Introduction to Mechatronics by Alciatore'],
    recommendedYouTubeChannels: ['Learn Engineering', 'Real Engineering', 'Robotics Today'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Technical Drawing or Further Mathematics'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Chemistry']
    },
    universitiesOffering: ['Federal University of Technology, Akure (FUTA)', 'University of Lagos (UNILAG)', 'Federal University of Technology, Owerri (FUTO)', 'Ahmadu Bello University (ABU)']
  },
  {
    id: 'civil-infrastructure',
    name: 'Civil Infrastructure & Structural Engineer',
    description: 'Plan, design, and manage construction of critical civil infrastructure like roads, bridges, water treatment plants, and sustainable buildings.',
    sector: 'Construction & Environment',
    stream: 'Science & Technology',
    salaryNigeria: '₦180,000 - ₦900,000 / month',
    salaryGlobal: '$65,000 - $125,000 / year',
    skillsRequired: ['Structural Calculation', 'Concrete Technology', 'Geotechnical Mechanics', 'CAD Draftsmanship', 'Cost Estimation', 'Construction Supervision'],
    universityCourses: ['B.Eng. Civil Engineering', 'B.Eng. Structural Engineering'],
    polytechnicCourses: ['HND Civil Engineering', 'ND Building Technology'],
    professionalCertifications: ['COREN Registration', 'NSE Certification (Nigerian Society of Engineers)'],
    futureDemand: 'Medium',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Inspecting reinforcement bars on a bridge construction site, reviewing soil laboratory test reports, modeling concrete load-bearing behaviors, and meeting with local regulatory bodies.',
    recommendedBooks: ['Structural Analysis by R.C. Hibbeler', 'Civil Engineering Handbook by W.F. Chen'],
    recommendedYouTubeChannels: ['Practical Engineering', 'Civil Mentors', 'The B1M'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Geography or Technical Drawing'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Chemistry']
    },
    universitiesOffering: ['University of Nigeria, Nsukka (UNN)', 'Ahmadu Bello University (ABU)', 'Obafemi Awolowo University (OAU)', 'University of Ibadan (UI)']
  },
  {
    id: 'medical-practitioner',
    name: 'Medical Doctor & Healthcare Consultant',
    description: 'Diagnose illnesses, prescribe therapies, perform life-saving surgeries, and advise public health bodies on managing disease epidemics.',
    sector: 'Healthcare & Medicine',
    stream: 'Science & Technology',
    salaryNigeria: '₦250,000 - ₦1,500,000 / month',
    salaryGlobal: '$110,000 - $280,000 / year',
    skillsRequired: ['Clinical Diagnosis', 'Patient Management', 'Internal Medicine', 'Emergency Surgery', 'Medical Ethics', 'Empathy & Decision Making'],
    universityCourses: ['Bachelor of Medicine and Bachelor of Surgery (MBBS)', 'B.Sc. Human Anatomy'],
    polytechnicCourses: [],
    professionalCertifications: ['MDCN License (Medical and Dental Council of Nigeria)', 'MRCP / FRCS fellowship'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Conducting intensive outpatient clinics, performing diagnostic consultations, coordinating with surgical theater nurses, reviewing patient labs, and prescribing advanced therapy programs.',
    recommendedBooks: ['Gray\'s Anatomy for Students', 'Harrison\'s Principles of Internal Medicine'],
    recommendedYouTubeChannels: ['Osmosis from Elsevier', 'Doctor Mike', 'MedCram'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics'],
      jamb: ['Use of English', 'Biology', 'Chemistry', 'Physics']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Ahmadu Bello University (ABU)', 'University of Nigeria, Nsukka (UNN)']
  },

  // ========================================================
  // ARTS & HUMANITIES
  // ========================================================
  {
    id: 'legal-advocate',
    name: 'Corporate Lawyer & Human Rights Advocate',
    description: 'Provide sound legal representation, draft critical commercial contracts, defend human rights, and advise policy makers on constitutional law.',
    sector: 'Law & Public Advocacy',
    stream: 'Arts & Humanities',
    salaryNigeria: '₦150,000 - ₦1,200,000 / month',
    salaryGlobal: '$60,000 - $145,000 / year',
    skillsRequired: ['Litigation & Advocacy', 'Legal Research', 'Contract Drafting', 'Analytical Reasoning', 'Public Speaking', 'Conflict Mediation'],
    universityCourses: ['Bachelor of Laws (LL.B)', 'B.A. Criminology', 'B.A. History & Diplomatic Studies'],
    polytechnicCourses: [],
    professionalCertifications: ['Barrister-at-Law (B.L) - Nigerian Law School', 'Chartered Arbitrator (CIArb)'],
    futureDemand: 'High',
    aiRisk: 'Medium',
    automationRisk: 'Low',
    dayInTheLife: 'Researching legal precedents, filing legal briefs at the high court, defending client rights in complex business negotiations, and rendering mediation advice to families or organizations.',
    recommendedBooks: ['The Concept of Law by H.L.A. Hart', 'Learning the Law by Glanville Williams'],
    recommendedYouTubeChannels: ['The Law Simplified', 'LegalEagle', 'The Nigerian Bar Association Channel'],
    requiredSubjects: {
      waec: ['English Language', 'Literature in English', 'Government', 'Christian Religious Studies / Islamic Studies', 'Mathematics'],
      jamb: ['Use of English', 'Literature in English', 'Government', 'CRS or IRS']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Obafemi Awolowo University (OAU)', 'University of Benin (UNIBEN)']
  },
  {
    id: 'journalist-masscomm',
    name: 'Journalist & Media Communications Specialist',
    description: 'Investigate news stories, publish high-impact public interest columns, present broadcast media programs, and manage communications for institutions.',
    sector: 'Media & Broadcasting',
    stream: 'Arts & Humanities',
    salaryNigeria: '₦100,000 - ₦600,000 / month',
    salaryGlobal: '$40,000 - $90,000 / year',
    skillsRequired: ['Investigative Journalism', 'Copy Editing', 'Public Speaking', 'Interviewing Techniques', 'Digital Broadcasting', 'Social Media Management'],
    universityCourses: ['B.Sc. Mass Communication', 'B.A. English & Literary Studies', 'B.A. Communication Arts'],
    polytechnicCourses: ['HND Mass Communication', 'ND Mass Communication'],
    professionalCertifications: ['NIPR Certification (Nigerian Institute of Public Relations)', 'NUJ Member (Nigeria Union of Journalists)'],
    futureDemand: 'Medium',
    aiRisk: 'Medium',
    automationRisk: 'Low',
    dayInTheLife: 'Conducting on-the-scene interviews on community development projects, writing editorial pieces for print and digital news websites, hosting weekly current affairs programs, and editing media scripts.',
    recommendedBooks: ['The Elements of Journalism by Bill Kovach', 'On Writing Well by William Zinsser'],
    recommendedYouTubeChannels: ['BBC Academy', 'Al Jazeera English', 'Channels Television'],
    requiredSubjects: {
      waec: ['English Language', 'Literature in English', 'Government', 'Mathematics', 'Any other Arts or Social Science subject'],
      jamb: ['Use of English', 'Literature in English', 'Government', 'Commerce or CRS/IRS']
    },
    universitiesOffering: ['University of Lagos (UNILAG)', 'University of Nigeria, Nsukka (UNN)', 'Ahmadu Bello University (ABU)', 'Pan-Atlantic University']
  },
  {
    id: 'clinical-psychologist',
    name: 'Clinical Psychologist & Family Counselor',
    description: 'Evaluate mental health patterns, offer cognitive behavioral therapies, assist individuals in overcoming educational or social traumas, and direct wellness programs.',
    sector: 'Healthcare & Counseling',
    stream: 'Arts & Humanities',
    salaryNigeria: '₦120,000 - ₦650,000 / month',
    salaryGlobal: '$50,000 - $115,000 / year',
    skillsRequired: ['Cognitive Assessment', 'Psychotherapy Techniques', 'Empathy & Human Psychology', 'Active Listening', 'Crisis Intervention', 'Case Management'],
    universityCourses: ['B.Sc. Psychology', 'B.Ed. Guidance & Counseling', 'B.Sc. Behavioral Science'],
    polytechnicCourses: [],
    professionalCertifications: ['NPA Professional Member (Nigerian Psychological Association)', 'Licensed Counselor'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Conducting private therapy assessments, drafting custom emotional rehab programs, speaking on community mental health awareness, and counseling adolescents on career and emotional developments.',
    recommendedBooks: ['Man\'s Search for Meaning by Viktor Frankl', 'The Gift of Therapy by Irvin D. Yalom'],
    recommendedYouTubeChannels: ['Psych2Go', 'The School of Life', 'Kati Morton'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Biology', 'Economics', 'Government or Literature'],
      jamb: ['Use of English', 'Biology', 'Economics', 'Government or Literature']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'University of Nigeria, Nsukka (UNN)', 'Nnamdi Azikiwe University (UNIZIK)']
  },
  {
    id: 'digital-storyteller',
    name: 'Digital Storyteller & Content Strategist',
    description: 'Craft high-impact brand narratives, produce multi-channel creative campaigns, and write digital content that inspires public action and engagement.',
    sector: 'Creative Industries',
    stream: 'Arts & Humanities',
    salaryNigeria: '₦120,000 - ₦700,000 / month',
    salaryGlobal: '$45,000 - $95,000 / year',
    skillsRequired: ['Creative Writing', 'Content Strategy', 'SEO Optimization', 'Video Scripting', 'Brand Management', 'Copywriting'],
    universityCourses: ['B.A. English & Literary Studies', 'B.Sc. Mass Communication', 'B.A. Theater Arts'],
    polytechnicCourses: ['HND Mass Communication'],
    professionalCertifications: ['HubSpot Content Marketing', 'Google Digital Marketing'],
    futureDemand: 'High',
    aiRisk: 'High',
    automationRisk: 'Medium',
    dayInTheLife: 'Drafting brand storytelling strategies, scripting short educational documentaries, monitoring campaign analytics, and collaborating with visual designers.',
    recommendedBooks: ['Story by Robert McKee', 'Contagious: Why Things Catch On by Jonah Berger'],
    recommendedYouTubeChannels: ['Storytelling with Data', 'The Futur', 'Neil Patel'],
    requiredSubjects: {
      waec: ['English Language', 'Literature in English', 'Government or History', 'Mathematics', 'Any Arts subject'],
      jamb: ['Use of English', 'Literature in English', 'Government', 'CRS/IRS or Commerce']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'Covenant University', 'University of Lagos (UNILAG)', 'Pan-Atlantic University']
  },

  // ========================================================
  // COMMERCIAL & BUSINESS
  // ========================================================
  {
    id: 'chartered-accountant',
    name: 'Chartered Accountant & Financial Auditor',
    description: 'Provide financial reporting, corporate auditing, tax consulting, and strategic investment analysis to organizations, businesses, and government institutions.',
    sector: 'Finance & Consulting',
    stream: 'Commercial & Business',
    salaryNigeria: '₦150,000 - ₦900,000 / month',
    salaryGlobal: '$55,000 - $120,000 / year',
    skillsRequired: ['Financial Reporting', 'Taxation Regulations', 'Auditing Standards', 'Data Analysis (Excel)', 'Business Integrity', 'IFRS Standards'],
    universityCourses: ['B.Sc. Accounting', 'B.Sc. Banking & Finance', 'B.Sc. Economics'],
    polytechnicCourses: ['HND Accountancy', 'ND Banking & Finance'],
    professionalCertifications: ['ICAN (Institute of Chartered Accountants of Nigeria)', 'ACCA (Association of Chartered Certified Accountants)', 'CFA (Chartered Financial Analyst)'],
    futureDemand: 'Medium',
    aiRisk: 'Medium',
    automationRisk: 'High',
    dayInTheLife: 'Auditing corporate ledgers, preparing quarterly corporate tax calculations, managing client audits, and advising a business on cash flow optimization strategies.',
    recommendedBooks: ['Financial Accounting and Reporting by Barry Elliott', 'The Intelligent Investor by Benjamin Graham'],
    recommendedYouTubeChannels: ['Edspira', 'Farhat\'s Accounting Lectures', 'The Financial Diet'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Economics', 'Financial Accounting', 'Government or Commerce'],
      jamb: ['Use of English', 'Mathematics', 'Economics', 'Commerce or Financial Accounting']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Ahmadu Bello University (ABU)', 'University of Benin (UNIBEN)']
  },
  {
    id: 'management-consultant',
    name: 'Management Consultant & Operations Strategist',
    description: 'Help corporations and government ministries streamline their work structures, optimize resource spending, and scale operational productivity.',
    sector: 'Corporate Consulting',
    stream: 'Commercial & Business',
    salaryNigeria: '₦200,000 - ₦1,400,000 / month',
    salaryGlobal: '$65,000 - $155,000 / year',
    skillsRequired: ['Business Analysis', 'Strategic Planning', 'Process Optimization', 'Project Management', 'Data Presentation', 'Change Management'],
    universityCourses: ['B.Sc. Business Administration', 'B.Sc. Economics', 'B.Sc. Industrial Relations'],
    polytechnicCourses: ['HND Business Administration'],
    professionalCertifications: ['PMP (Project Management Professional)', 'CMC (Certified Management Consultant)'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Interviewing department heads to identify supply chain delays, calculating cost-saving ratios, delivering progress presentations to executive teams, and drafting training frameworks.',
    recommendedBooks: ['The McKinsey Way by Ethan Rasiel', 'Case In Point by Marc Cosentino'],
    recommendedYouTubeChannels: ['Firm Learning', 'Crafting Cases', 'TED Business'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Economics', 'Commerce', 'Government'],
      jamb: ['Use of English', 'Mathematics', 'Economics', 'Commerce or Government']
    },
    universitiesOffering: ['University of Lagos (UNILAG)', 'Ahmadu Bello University (ABU)', 'University of Nigeria, Nsukka (UNN)', 'Covenant University']
  },
  {
    id: 'product-manager',
    name: 'Digital Product Manager',
    description: 'Lead cross-functional teams of software engineers, designers, and marketers to build and scale digital products that meet user needs and business goals.',
    sector: 'Technology & Corporate',
    stream: 'Commercial & Business',
    salaryNigeria: '₦250,000 - ₦1,300,000 / month',
    salaryGlobal: '$75,000 - $150,000 / year',
    skillsRequired: ['Agile Methodologies', 'User Research', 'Product Roadmap Design', 'Data Analytics', 'Stakeholder Communication', 'UX Principles'],
    universityCourses: ['B.Sc. Business Administration', 'B.Sc. Information Technology', 'B.Sc. Economics'],
    polytechnicCourses: ['HND Business Administration', 'HND Computer Science'],
    professionalCertifications: ['Certified Product Manager (CPM)', 'Professional Scrum Product Owner (PSPO)'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Defining feature requirements for a mobile banking update, leading daily standups with developers, synthesizing user feedback, and analyzing key product performance metrics.',
    recommendedBooks: ['Inspired: How to Create Tech Products Customers Love by Marty Cagan', 'Escaping the Build Trap by Melissa Perri'],
    recommendedYouTubeChannels: ['Product School', 'Dan Olsen', 'PM School'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Economics', 'Commerce or Government', 'One Science subject'],
      jamb: ['Use of English', 'Mathematics', 'Economics', 'Commerce or Government']
    },
    universitiesOffering: ['Covenant University', 'University of Lagos (UNILAG)', 'Pan-Atlantic University', 'Federal University of Technology, Akure (FUTA)']
  },
  {
    id: 'hr-specialist',
    name: 'HR & Talent Development Specialist',
    description: 'Coordinate employee recruitment, oversee workforce welfare, manage professional training programs, and align corporate cultures with institutional goals.',
    sector: 'Corporate Operations',
    stream: 'Commercial & Business',
    salaryNigeria: '₦120,000 - ₦750,000 / month',
    salaryGlobal: '$45,000 - $100,000 / year',
    skillsRequired: ['Recruiting Systems', 'Conflict Resolution', 'Labor Law Knowledge', 'Performance Appraisal', 'Active Listening', 'Strategic HR planning'],
    universityCourses: ['B.Sc. Human Resource Management', 'B.Sc. Industrial Relations', 'B.Sc. Business Administration'],
    polytechnicCourses: ['HND Business Administration'],
    professionalCertifications: ['CIPM (Chartered Institute of Personnel Management Nigeria)', 'SHRM-CP'],
    futureDemand: 'Medium',
    aiRisk: 'Low',
    automationRisk: 'Medium',
    dayInTheLife: 'Reviewing job applicant portfolios, facilitating organizational resolution meetings, leading interactive employee onboarding sessions, and refining workplace welfare policies.',
    recommendedBooks: ['Human Resource Management by Gary Dessler', 'Work Rules! by Laszlo Bock'],
    recommendedYouTubeChannels: ['HR Morning', 'AIHR - Academy to Innovate HR', 'TEDx Talks'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Economics', 'Government', 'Commerce or Financial Accounting'],
      jamb: ['Use of English', 'Economics', 'Government', 'Commerce or Mathematics']
    },
    universitiesOffering: ['University of Lagos (UNILAG)', 'University of Benin (UNIBEN)', 'Ahmadu Bello University (ABU)', 'Nnamdi Azikiwe University (UNIZIK)']
  },

  // ========================================================
  // EMERGING CAREERS
  // ========================================================
  {
    id: 'ai-prompt-ethicist',
    name: 'AI Prompt Specialist & AI Ethicist',
    description: 'Engineer high-fidelity system prompts to optimize generative model outputs, while auditing AI models for algorithmic bias, data safety, and ethical standard compliance.',
    sector: 'Technology & Research',
    stream: 'Emerging',
    salaryNigeria: '₦250,000 - ₦1,200,000 / month',
    salaryGlobal: '$80,000 - $160,000 / year',
    skillsRequired: ['Natural Language Processing', 'AI Prompt Engineering', 'Bias Auditing & Metrics', 'Ethical Analysis', 'Python Scripting', 'API testing'],
    universityCourses: ['B.Sc. Computer Science', 'B.A. Philosophy & Digital Ethics', 'B.Sc. Cognitive Science'],
    polytechnicCourses: [],
    professionalCertifications: ['AI Ethics Certification (Google/IBM)', 'Advanced Prompt Engineering Cert'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Designing system instructions for enterprise client chatbots, analyzing generative outputs for toxicity and factual errors, advising engineering teams on compliance, and publishing guidelines.',
    recommendedBooks: ['Co-Intelligence by Ethan Mollick', 'Weapons of Math Destruction by Cathy O\'Neil'],
    recommendedYouTubeChannels: ['Prompt Engineering with LLaMA', 'Sentdex', 'AI Ethics Lab'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Government or Philosophy', 'Physics', 'Any other subject'],
      jamb: ['Use of English', 'Mathematics', 'Physics', 'Government or Literature']
    },
    universitiesOffering: ['Covenant University', 'University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Ahmadu Bello University (ABU)']
  },
  {
    id: 'sustainability-consultant',
    name: 'Environmental Sustainability Consultant',
    description: 'Advise manufacturing, energy, and real estate corporations on reducing carbon footprints, securing green building ratings, and recycling resources.',
    sector: 'Environmental Management',
    stream: 'Emerging',
    salaryNigeria: '₦150,000 - ₦900,000 / month',
    salaryGlobal: '$55,000 - $115,000 / year',
    skillsRequired: ['Carbon Accounting', 'Environmental Law', 'Waste Management Systems', 'Green Building Rating (LEED)', 'ESG Reporting', 'Life Cycle Assessment'],
    universityCourses: ['B.Sc. Environmental Science', 'B.Tech. Urban & Regional Planning', 'B.Sc. Ecology'],
    polytechnicCourses: ['HND Environmental Science'],
    professionalCertifications: ['LEED Green Associate', 'Associate Environmental Professional (AEP)'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Conducting environmental impact audits for an agro-allied factory, calculating carbon emissions offsets, presenting corporate sustainability guidelines, and reviewing green building material choices.',
    recommendedBooks: ['The Green to Gold Business Playbook by Daniel Esty', 'Sustainability: A History by Jeremy L. Caradonna'],
    recommendedYouTubeChannels: ['Sustainability Illustrated', 'Our Changing Climate', 'GreenBiz'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Geography or Agricultural Science'],
      jamb: ['Use of English', 'Biology', 'Chemistry', 'Geography or Agricultural Science']
    },
    universitiesOffering: ['Federal University of Technology, Akure (FUTA)', 'University of Ibadan (UI)', 'Federal University of Technology, Owerri (FUTO)', 'University of Benin (UNIBEN)']
  },
  {
    id: 'drone-gis-operator',
    name: 'Drone Pilot & GIS Spatial Analyst',
    description: 'Operate unmanned aerial systems (drones) to capture high-definition topographic imagery, while compiling Geographic Information System (GIS) models for farming, urban planning, and environmental studies.',
    sector: 'Geospatial Technology',
    stream: 'Emerging',
    salaryNigeria: '₦120,000 - ₦750,000 / month',
    salaryGlobal: '$50,000 - $110,000 / year',
    skillsRequired: ['Drone Flight Navigation', 'Geographical Information Systems (QGIS/ArcGIS)', 'Cartographic Design', 'Remote Sensing Data Interpretation', 'Safety Protocols'],
    universityCourses: ['B.Sc. Geography', 'B.Tech. Surveying & Geoinformatics', 'B.Sc. Urban Planning'],
    polytechnicCourses: ['HND Surveying and Geoinformatics'],
    professionalCertifications: ['NCAA Drone Pilot License (Nigeria)', 'GIS Professional (GISP)'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Medium',
    dayInTheLife: 'Navigating professional drone surveys over agricultural acreage in Kaduna, compiling geospatial maps to trace erosion pathways, running data through ArcGIS programs, and advising road engineers.',
    recommendedBooks: ['GIS Tutorial for ArcGIS Pro by Wilpen Gorr', 'Drone Remote Sensing by Charles Waldemer'],
    recommendedYouTubeChannels: ['GIS Simplified', 'Mr. Mapping', 'Drone Pilot Tech'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Geography', 'Physics', 'Any other Science or Social Science'],
      jamb: ['Use of English', 'Geography', 'Mathematics', 'Physics or Chemistry']
    },
    universitiesOffering: ['Federal University of Technology, Minna (FUTMINNA)', 'University of Ibadan (UI)', 'Obafemi Awolowo University (OAU)', 'University of Nigeria, Nsukka (UNN)']
  },

  // ========================================================
  // ENTREPRENEURIAL PATHWAYS
  // ========================================================
  {
    id: 'venture-founder',
    name: 'Technology & Business Founder',
    description: 'Establish high-growth startups, raise institutional venture investments, recruit technical talents, and design scalable services to solve key market inefficiencies in Africa.',
    sector: 'Entrepreneurship & Tech',
    stream: 'Entrepreneurial',
    salaryNigeria: '₦200,000 - ₦2,500,000 / month (Founder salary/equity)',
    salaryGlobal: '$50,000 - $200,000 / year',
    skillsRequired: ['Business Modeling (Lean Canvas)', 'Pitch Deck Presentation', 'Product Strategy', 'Venture Capital Fundraising', 'Team Leadership', 'Financial Management'],
    universityCourses: ['B.Sc. Entrepreneurship', 'B.Sc. Business Administration', 'B.Sc. Economics', 'B.Sc. Computer Science'],
    polytechnicCourses: ['HND Business Administration'],
    professionalCertifications: ['Stanford Seed Transformation Program', 'Y Combinator Startup School Certificate'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Pitching business ideas to angel investors, conducting target consumer interviews, defining minimum viable product (MVP) specifications, and managing company capital allocations.',
    recommendedBooks: ['The Lean Startup by Eric Ries', 'Zero to One by Peter Thiel', 'Startup Playbook by Sam Altman'],
    recommendedYouTubeChannels: ['Y Combinator', 'Slidebean', 'Techstars'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Economics', 'Commerce or Government', 'Any other subject'],
      jamb: ['Use of English', 'Mathematics', 'Economics', 'Commerce or Government']
    },
    universitiesOffering: ['Pan-Atlantic University', 'Covenant University', 'University of Lagos (UNILAG)', 'Federal University of Technology, Akure (FUTA)']
  },
  {
    id: 'creative-agency-director',
    name: 'Creative Studio & Multimedia Agency Director',
    description: 'Establish and scale a creative studio providing premium services in video production, animation, UI/UX designs, content strategies, and commercial photography.',
    sector: 'Creative Economy',
    stream: 'Entrepreneurial',
    salaryNigeria: '₦150,000 - ₦1,500,000 / month',
    salaryGlobal: '$55,000 - $130,000 / year',
    skillsRequired: ['Creative Direction', 'Business Development & Sales', 'Client Relations', 'Multimedia Production', 'Team Leadership', 'Brand Positioning'],
    universityCourses: ['B.A. Creative Arts', 'B.A. Fine & Applied Arts', 'B.Sc. Mass Communication'],
    polytechnicCourses: ['HND Graphic Design', 'ND Mass Communication'],
    professionalCertifications: ['Project Management Professional (PMP)', 'Advanced Creative Direction Cert'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Consulting with international corporate clients to pitch multimedia branding services, directing studio photographers and motion editors, managing project timelines, and curating the agency\'s creative portfolio.',
    recommendedBooks: ['Creative Strategy and the Business of Design by Douglas Davis', 'The Win Without Pitching Manifesto by Blair Enns'],
    recommendedYouTubeChannels: ['The Futur', 'Philip VanDusen', 'Creative Boom'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Creative Arts or Fine Arts', 'Literature in English', 'Government'],
      jamb: ['Use of English', 'Literature in English', 'Government', 'Fine Arts or CRS/IRS']
    },
    universitiesOffering: ['University of Lagos (UNILAG)', 'University of Benin (UNIBEN)', 'University of Ibadan (UI)', 'Nnamdi Azikiwe University (UNIZIK)']
  },
  {
    id: 'agritech-venture-owner',
    name: 'Agritech Venture Owner & Food Innovator',
    description: 'Establish and scale modern, technology-enabled farming businesses, processing organic foodstuffs and deploying local supply chain networks to ensure food security.',
    sector: 'Agriculture & Business',
    stream: 'Entrepreneurial',
    salaryNigeria: '₦120,000 - ₦1,000,000 / month',
    salaryGlobal: '$45,000 - $120,000 / year',
    skillsRequired: ['Smart Farm Sizing', 'Supply Chain Management', 'Agribusiness Financing', 'Food Processing Quality Checks', 'B2B Sales', 'Team Management'],
    universityCourses: ['B.Agric. Agricultural Economics & Extension', 'B.Sc. Food Science & Technology', 'B.Sc. Business Administration'],
    polytechnicCourses: ['HND Agricultural Technology'],
    professionalCertifications: ['Agribusiness Entrepreneurship Program Cert', 'ISO Food Safety Certified'],
    futureDemand: 'High',
    aiRisk: 'Low',
    automationRisk: 'Low',
    dayInTheLife: 'Overseeing smart greenhouse setups, organizing wholesale agreements with e-commerce distributors, reviewing agribank credit positions, and training operations personnel on bio-safe handling.',
    recommendedBooks: ['Agribusiness Management by Freddie Barnard', 'The Market Gardener by Jean-Martin Fortier'],
    recommendedYouTubeChannels: ['Smart Farm Tech', 'The Urban Farmer', 'African Agriculture Innovation'],
    requiredSubjects: {
      waec: ['English Language', 'Mathematics', 'Agricultural Science or Biology', 'Chemistry', 'Economics or Geography'],
      jamb: ['Use of English', 'Biology or Agricultural Science', 'Chemistry', 'Mathematics or Economics']
    },
    universitiesOffering: ['University of Ibadan (UI)', 'Federal University of Agriculture, Abeokuta (FUNAAB)', 'Federal University of Technology, Akure (FUTA)', 'Obafemi Awolowo University (OAU)']
  }
];
