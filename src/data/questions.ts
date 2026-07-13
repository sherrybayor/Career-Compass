import { AssessmentQuestion } from '../types';

// ==========================================
// GRADE 9 QUESTIONS (36 High-Quality Scenarios)
// ==========================================
export const grade9Questions: AssessmentQuestion[] = [
  // Interest & Academic Curiosity (1-12)
  {
    id: 'g9_1',
    text: 'You are asked to plan a school biology project. You would prefer to design a miniature organic vegetable garden to study soil health rather than write an essay.',
    category: 'ScienceCuriosity',
    type: 'likert'
  },
  {
    id: 'g9_2',
    text: 'When visiting a local market, you are fascinated by how traders set prices, negotiate with suppliers, and manage their daily sales profits.',
    category: 'BusinessInsight',
    type: 'likert'
  },
  {
    id: 'g9_3',
    text: 'In your spare time, you love writing creative short stories, drafting poems, or scripting school drama playlets.',
    category: 'CreativeExpression',
    type: 'likert'
  },
  {
    id: 'g9_4',
    text: 'You enjoy assisting younger classmates in understanding difficult assignments or explaining school rules patiently.',
    category: 'CommunityLeadership',
    type: 'likert'
  },
  {
    id: 'g9_5',
    text: 'You find it easy to spot hidden patterns in number sequences or solve mathematical brain-teasers during class.',
    category: 'AnalyticalAptitude',
    type: 'likert'
  },
  {
    id: 'g9_6',
    text: 'When a piece of class equipment like a pencil sharpener or desk hinge is broken, you want to take it apart to figure out how to fix it.',
    category: 'ScienceCuriosity',
    type: 'likert'
  },
  {
    id: 'g9_7',
    text: 'You would love to lead a school club, organize weekly meetings, and assign responsibilities to different members.',
    category: 'CommunityLeadership',
    type: 'likert'
  },
  {
    id: 'g9_8',
    text: 'If you had to choose a school department, you would prefer Business Studies and Commerce over Literature or Basic Science.',
    category: 'BusinessInsight',
    type: 'likert'
  },
  {
    id: 'g9_9',
    text: 'You are highly motivated to design posters, arrange classroom decorations, or sketch visual illustrations for school events.',
    category: 'CreativeExpression',
    type: 'likert'
  },
  {
    id: 'g9_10',
    text: 'You are deeply curious about how natural systems work, such as why rainfall occurs or how the human digestive tract functions.',
    category: 'ScienceCuriosity',
    type: 'likert'
  },
  {
    id: 'g9_11',
    text: 'You keep a systematic record of your pocket money and enjoy planning a personal budget for snacks and books each term.',
    category: 'BusinessInsight',
    type: 'likert'
  },
  {
    id: 'g9_12',
    text: 'You would enjoy learning a foreign language, reciting speeches, or participating in the school literary and debating society.',
    category: 'CreativeExpression',
    type: 'likert'
  },

  // Balanced Situational Judgment Scenarios (13-24)
  {
    id: 'g9_13',
    text: 'Scenario: Your class is organizing a cultural exhibition. Which role appeals to you the most?',
    category: 'CreativeExpression',
    type: 'situational',
    options: [
      { value: 5, label: 'Designing the stage decorations, costumes, and artistic banners.' },
      { value: 3, label: 'Managing the event budget, ticketing, and coordinating snack sales.' },
      { value: 2, label: 'Welcoming guests, coordinating volunteer duties, and keeping people organized.' },
      { value: 1, label: 'Setting up the sound system, electrical wiring, and lights.' }
    ]
  },
  {
    id: 'g9_14',
    text: 'Scenario: A conflict arises between two of your friends during a group assignment. What is your natural reaction?',
    category: 'CommunityLeadership',
    type: 'situational',
    options: [
      { value: 5, label: 'Listen to both sides and patiently find a compromise that benefits everyone.' },
      { value: 3, label: 'Focus strictly on the task rules and urge them to settle it quickly so work does not stop.' },
      { value: 2, label: 'Suggest a creative alternative topic that satisfies both parties.' },
      { value: 1, label: 'Recommend looking up the project guidelines to see who is technically right.' }
    ]
  },
  {
    id: 'g9_15',
    text: 'Scenario: You are given ₦5,000 to improve your school community. How would you prefer to use it?',
    category: 'BusinessInsight',
    type: 'situational',
    options: [
      { value: 5, label: 'Buy raw materials to make customized school notebooks and sell them to create a continuous club fund.' },
      { value: 3, label: 'Sponsor a clean water or environmental awareness project for the student health center.' },
      { value: 2, label: 'Buy books for a community storytelling club that helps younger children read.' },
      { value: 1, label: 'Invest in a basic laboratory chemistry set or weather station for classroom experiments.' }
    ]
  },
  {
    id: 'g9_16',
    text: 'Scenario: When facing a highly challenging math or science riddle, you usually:',
    category: 'AnalyticalAptitude',
    type: 'situational',
    options: [
      { value: 5, label: 'Pencil down different formulas step-by-step until the solution makes logical sense.' },
      { value: 3, label: 'Discuss the riddle with friends to brainstorm alternative, unconventional angles.' },
      { value: 2, label: 'Look for practical, real-world examples of how this math applies to life.' },
      { value: 1, label: 'Read a textbook explanation or historical story about how the math rule was created.' }
    ]
  },
  {
    id: 'g9_17',
    text: 'Scenario: You want to participate in a school competition. You would naturally choose:',
    category: 'CreativeExpression',
    type: 'situational',
    options: [
      { value: 5, label: 'The School Poetry, Essay Writing, or Public Speaking Contest.' },
      { value: 3, label: 'The Junior Achievement Young Entrepreneurs Pitch Contest.' },
      { value: 2, label: 'The National Science and Technologists Exhibition.' },
      { value: 1, label: 'A community service or environmental cleanup design award.' }
    ]
  },
  {
    id: 'g9_18',
    text: 'Scenario: If you were invited to volunteer for a local neighborhood project, you would choose to:',
    category: 'CommunityLeadership',
    type: 'situational',
    options: [
      { value: 5, label: 'Coordinate a volunteer team to clean and upgrade local shared amenities.' },
      { value: 3, label: 'Draft a promotional social awareness poster or write articles for local boards.' },
      { value: 2, label: 'Raise funds from local businesses to purchase plants, paints, or tools.' },
      { value: 1, label: 'Maintain the equipment, solar power chargers, or clean machinery used.' }
    ]
  },
  {
    id: 'g9_19',
    text: 'Scenario: In a group project, you are most comfortable when you are:',
    category: 'CommunityLeadership',
    type: 'situational',
    options: [
      { value: 5, label: 'Elected as the coordinator to lead, divide tasks, and keep team morale high.' },
      { value: 4, label: 'Managing the timeline, resources, and checking that all rules are followed.' },
      { value: 3, label: 'Drafting the creative presentation slides, writing scripts, or designing logos.' },
      { value: 2, label: 'Handling the technical setup, writing code, or assembling materials.' },
      { value: 1, label: 'Taking notes, summarizing discussions, and helping members with background research.' }
    ]
  },
  {
    id: 'g9_20',
    text: 'You prefer school tasks where you can physically touch materials, model structures, or perform field studies.',
    category: 'ScienceCuriosity',
    type: 'likert'
  },
  {
    id: 'g9_21',
    text: 'You easily notice when a business website or social media poster looks messy, and you immediately think of ways to design it better.',
    category: 'CreativeExpression',
    type: 'likert'
  },
  {
    id: 'g9_22',
    text: 'You are highly motivated when learning about corporate operations, trade policies, or financial markets.',
    category: 'BusinessInsight',
    type: 'likert'
  },
  {
    id: 'g9_23',
    text: 'You feel a strong sense of achievement when resolving disputes or keeping team members happy and aligned.',
    category: 'CommunityLeadership',
    type: 'likert'
  },
  {
    id: 'g9_24',
    text: 'You prefer using a rigorous, systematic, step-by-step approach to complete difficult school experiments.',
    category: 'AnalyticalAptitude',
    type: 'likert'
  },

  // Values, Motivations & Work Style (25-36)
  {
    id: 'g9_25',
    text: 'It is highly important to you that your future career directly results in improving human health or local health facilities.',
    category: 'ValuesEnvironment',
    type: 'likert'
  },
  {
    id: 'g9_26',
    text: 'You aspire to build your own private enterprise or brand, managing your own rules and employing other people.',
    category: 'ValuesEnvironment',
    type: 'likert'
  },
  {
    id: 'g9_27',
    text: 'You prefer a career that gives you the creative freedom to express your unique ideas without strict rules.',
    category: 'ValuesEnvironment',
    type: 'likert'
  },
  {
    id: 'g9_28',
    text: 'A highly structured, stable job with steady hours and predictable responsibilities is very attractive to you.',
    category: 'ValuesEnvironment',
    type: 'likert'
  },
  {
    id: 'g9_29',
    text: 'You are excited to choose your upcoming senior secondary school department (Science, Arts, or Commercial).',
    category: 'ValuesEnvironment',
    type: 'likert'
  },
  {
    id: 'g9_30',
    text: 'You believe analyzing scientific evidence and logic is always more reliable than relying on feelings or social opinions.',
    category: 'AnalyticalAptitude',
    type: 'likert'
  },
  {
    id: 'g9_31',
    text: 'You prefer working in quiet settings doing deep research over working in crowded places coordinating teams.',
    category: 'AnalyticalAptitude',
    type: 'likert'
  },
  {
    id: 'g9_32',
    text: 'You are motivated by financial prosperity and managing large corporate funds or investments in the future.',
    category: 'BusinessInsight',
    type: 'likert'
  },
  {
    id: 'g9_33',
    text: 'You enjoy researching historical events, biographies of great leaders, and foreign cultures.',
    category: 'CreativeExpression',
    type: 'likert'
  },
  {
    id: 'g9_34',
    text: 'You would love to write articles or shoot video reviews for a school blog or local newsletter.',
    category: 'CreativeExpression',
    type: 'likert'
  },
  {
    id: 'g9_35',
    text: 'You enjoy community-based teamwork, such as arranging youth activities, local cleanups, or faith-group gatherings.',
    category: 'CommunityLeadership',
    type: 'likert'
  },
  {
    id: 'g9_36',
    text: 'You prefer learning by conducting practical, hands-on experiments rather than listening to standard lectures.',
    category: 'ScienceCuriosity',
    type: 'likert'
  }
];

// ==========================================
// GRADE 12 QUESTIONS (36 High-Quality Scenarios)
// ==========================================
export const grade12Questions: AssessmentQuestion[] = [
  // RIASEC-inspired & Analytical Scenarios (1-12)
  {
    id: 'g12_1',
    text: 'You would enjoy analyzing scientific research data, interpreting laboratory test results, or researching historical events to understand social trends.',
    category: 'RealisticInvestigative',
    type: 'likert'
  },
  {
    id: 'g12_2',
    text: 'You feel motivated when writing analytical articles, reviewing literature, or drafting legal arguments for debate sessions.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_3',
    text: 'You enjoy discussing business plans, negotiating transaction costs with local suppliers, or analyzing bookkeeping ledger sheets.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_4',
    text: 'In school team assignments, you are the person who keeps track of deadlines, structures files, and audits the spelling/grammar of reports.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_5',
    text: 'You appreciate creative visual layouts and enjoy customizing websites, designing pamphlets, or modeling physical structures.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_6',
    text: 'You are highly interested in mechanics, electrical circuit designs, agricultural tools, or conducting laboratory testing.',
    category: 'RealisticInvestigative',
    type: 'likert'
  },
  {
    id: 'g12_7',
    text: 'You are motivated to organize community welfare projects, counseling support groups, or tutoring junior students.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_8',
    text: 'You enjoy persuading classmates to support a campaign, pitch a business idea, or invest in school project materials.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_9',
    text: 'You prefer using mathematical equations, statistical charts, or objective reasoning to solve problems instead of social consensus.',
    category: 'RealisticInvestigative',
    type: 'likert'
  },
  {
    id: 'g12_10',
    text: 'You are excited about writing video scripts, developing advertising taglines, or curating artistic collections.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_11',
    text: 'You easily understand bank interest calculations, market supply-and-demand charts, and commercial trade policies.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_12',
    text: 'You are interested in studying ecological sustainability, energy conservation, or public health epidemiologies.',
    category: 'RealisticInvestigative',
    type: 'likert'
  },

  // Forced-Choice & Situational Judgement Scenarios (13-24)
  {
    id: 'g12_13',
    text: 'Scenario: You are leading a school club that needs to attract new members. Which strategy would you prefer to execute?',
    category: 'EnterprisingConventional',
    type: 'situational',
    options: [
      { value: 5, label: 'Run a structured social media and pricing campaign to invite participants and offer club benefits.' },
      { value: 3, label: 'Organize an interactive debate, artistic performance, or write articles on the club\'s core mission.' },
      { value: 2, label: 'Host a physical exhibition displaying lab models, structures, or technical tools designed by members.' },
      { value: 1, label: 'Design a systematic recruitment register and create structured member guidelines.' }
    ]
  },
  {
    id: 'g12_14',
    text: 'Scenario: A company offers you an internship. Which department matches your primary strengths?',
    category: 'RealisticInvestigative',
    type: 'situational',
    options: [
      { value: 5, label: 'The Research, Quality Control, or Technical Testing Department.' },
      { value: 3, label: 'The Creative Design, Copywriting, or Mass Media Outreach Department.' },
      { value: 2, label: 'The Business Development, Marketing, or Financial Audit Department.' },
      { value: 1, label: 'The Human Resources, Customer Relations, or Community Support Department.' }
    ]
  },
  {
    id: 'g12_15',
    text: 'Scenario: If you had to organize a public health awareness campaign in your community, you would prioritize:',
    category: 'ArtisticSocial',
    type: 'situational',
    options: [
      { value: 5, label: 'Counseling families face-to-face and leading volunteer community support groups.' },
      { value: 3, label: 'Writing articles, scripting radio announcements, and creating high-impact visual banners.' },
      { value: 2, label: 'Analyzing regional health statistics and compiling scientific research papers on the disease.' },
      { value: 1, label: 'Securing project sponsors, managing the operations budget, and coordinating logistics.' }
    ]
  },
  {
    id: 'g12_16',
    text: 'Scenario: Your team is designing a new mobile application for school students. You choose to:',
    category: 'RealisticInvestigative',
    type: 'situational',
    options: [
      { value: 5, label: 'Oversee the software logic, write backend instructions, or model the database.' },
      { value: 3, label: 'Draft the user experience strategy, outline the visual layout, and write standard menus.' },
      { value: 2, label: 'Pitch the app to school heads, design pricing models, and handle marketing plans.' },
      { value: 1, label: 'Gather student user reviews, resolve user complaints, and manage the feedback pipeline.' }
    ]
  },
  {
    id: 'g12_17',
    text: 'Scenario: If you could establish a small business in your town, you would open:',
    category: 'EnterprisingConventional',
    type: 'situational',
    options: [
      { value: 5, label: 'An investment, retail trade, or financial advisory firm.' },
      { value: 3, label: 'A digital media agency, graphic studio, or copywriting service.' },
      { value: 2, label: 'A modern greenhouse farm, organic product store, or technical repair workshop.' },
      { value: 1, label: 'An educational center, childcare service, or community wellness clinic.' }
    ]
  },
  {
    id: 'g12_18',
    text: 'Scenario: You are reviewing your academic career. Which achievement would make you proudest?',
    category: 'ProblemSolving',
    type: 'situational',
    options: [
      { value: 5, label: 'Publishing an investigative article or winning a prestigious debate/artistic award.' },
      { value: 3, label: 'Winning a Junior Achievement business plan or entrepreneurship pitch award.' },
      { value: 2, label: 'Developing a functional scientific prototype or scoring top marks in a physics/math olympiad.' },
      { value: 1, label: 'Successfully leading a community service campaign that helped hundreds of families.' }
    ]
  },
  {
    id: 'g12_19',
    text: 'You are highly motivated to understand the legal terms and structures that govern businesses and individuals.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_20',
    text: 'You prefer work environments where you can operate independently, managing your own project milestones and schedule.',
    category: 'ValuesPreferences',
    type: 'likert'
  },
  {
    id: 'g12_21',
    text: 'You believe and act on the principle that structured checklists, spreadsheets, and neat schedules are vital to any team success.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_22',
    text: 'You find joy in learning about human behaviors, cultural histories, global languages, and mental counseling systems.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_23',
    text: 'You enjoy exploring practical environmental projects, such as analyzing agricultural yields, green energy setups, or soil minerals.',
    category: 'RealisticInvestigative',
    type: 'likert'
  },
  {
    id: 'g12_24',
    text: 'You have a high preference for working in collaborative teams where consensus, empathy, and morale are highly prioritized.',
    category: 'ValuesPreferences',
    type: 'likert'
  },

  // Future Skills & Decision Style (25-36)
  {
    id: 'g12_25',
    text: 'You are curious about learning carbon accounting, sustainable farming, or eco-friendly building designs.',
    category: 'FutureSkills',
    type: 'likert'
  },
  {
    id: 'g12_26',
    text: 'You actively read newspapers, financial blogs, or business bulletins to understand local economic developments.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_27',
    text: 'You enjoy reading about courtroom arguments, constitutional law disputes, and international diplomatic relations.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_28',
    text: 'You are highly comfortable using technology tools, formatting spreadsheets (like Excel), and configuring computer setups.',
    category: 'FutureSkills',
    type: 'likert'
  },
  {
    id: 'g12_29',
    text: 'A high starting salary is a priority for your career choices, even if the role involves high-pressure deadlines.',
    category: 'ValuesPreferences',
    type: 'likert'
  },
  {
    id: 'g12_30',
    text: 'You are interested in mastering public policy, public relations, and mass communication systems.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_31',
    text: 'You prefer using empirical data, laboratory testing, and scientific observations to verify claims rather than personal reviews.',
    category: 'RealisticInvestigative',
    type: 'likert'
  },
  {
    id: 'g12_32',
    text: 'You look forward to writing marketing copy, organizing sales pitches, or directing brand advertising.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_33',
    text: 'You enjoy explaining complex scientific, technical, or historical principles to others in simple, narrative terms.',
    category: 'ArtisticSocial',
    type: 'likert'
  },
  {
    id: 'g12_34',
    text: 'You find it easy to manage group logistics, budget expenses, and allocate duties to ensure tasks finish on schedule.',
    category: 'EnterprisingConventional',
    type: 'likert'
  },
  {
    id: 'g12_35',
    text: 'You are eager to learn how to edit videos, manage online campaigns, or coordinate digital broadcasts.',
    category: 'FutureSkills',
    type: 'likert'
  },
  {
    id: 'g12_36',
    text: 'You would enjoy working in an office with a predictable, orderly routine and precise performance standards.',
    category: 'ValuesPreferences',
    type: 'likert'
  }
];

// ==========================================
// UNDERGRADUATE QUESTIONS (36 High-Quality Scenarios)
// ==========================================
export const undergraduateQuestions: AssessmentQuestion[] = [
  // Employability & Career Competencies (1-12)
  {
    id: 'ug_1',
    text: 'You can comfortably synthesize long academic papers, policy guidelines, or market reports into high-level executive summaries under tight deadlines.',
    category: 'CreativeCommunicative',
    type: 'likert'
  },
  {
    id: 'ug_2',
    text: 'You are proficient at using spreadsheets (such as Excel or Google Sheets) for business modeling, data filtering, and accounting analysis.',
    category: 'AnalyticalCritical',
    type: 'likert'
  },
  {
    id: 'ug_3',
    text: 'You are confident in your ability to present highly technical research or commercial sales pitches to large corporate audiences.',
    category: 'CreativeCommunicative',
    type: 'likert'
  },
  {
    id: 'ug_4',
    text: 'You have experience leading a multi-person project, managing resources, timelines, and delivering outcomes on schedule.',
    category: 'ManagerialSocial',
    type: 'likert'
  },
  {
    id: 'ug_5',
    text: 'You actively seek internships, professional mentors, and network with practitioners in your chosen sector.',
    category: 'AutonomyGrowth',
    type: 'likert'
  },
  {
    id: 'ug_6',
    text: 'You enjoy configuring advanced software, writing programming scripts, or maintaining cloud server routes.',
    category: 'TechnicalPractical',
    type: 'likert'
  },
  {
    id: 'ug_7',
    text: 'You are skilled at reading group dynamics, empathizing with colleagues under stress, and keeping team morale high.',
    category: 'CollaborationValues',
    type: 'likert'
  },
  {
    id: 'ug_8',
    text: 'You regularly refine your curriculum vitae (CV), portfolio website, and professional LinkedIn profile with key skillsets.',
    category: 'AutonomyGrowth',
    type: 'likert'
  },
  {
    id: 'ug_9',
    text: 'When receiving critical, strict feedback or job reviews, you remain calm, collected, and immediately design a plan to improve.',
    category: 'AutonomyGrowth',
    type: 'likert'
  },
  {
    id: 'ug_10',
    text: 'You prefer using objective, empirical data and automated diagnostics to troubleshoot mechanical, scientific, or electrical errors.',
    category: 'TechnicalPractical',
    type: 'likert'
  },
  {
    id: 'ug_11',
    text: 'You enjoy managing corporate budgets, calculating return on investments, and analyzing customer acquisition costs.',
    category: 'AnalyticalCritical',
    type: 'likert'
  },
  {
    id: 'ug_12',
    text: 'You find it easy to mediate disagreements between coworkers and naturally steer groups toward collaborative compromise.',
    category: 'CollaborationValues',
    type: 'likert'
  },

  // Practical Situational Judgment Scenarios (13-24)
  {
    id: 'ug_13',
    text: 'Scenario: Your organization faces an unexpected operations crisis (e.g. a key vendor defaults). What is your immediate response?',
    category: 'ManagerialSocial',
    type: 'situational',
    options: [
      { value: 5, label: 'Gather your team, resolve conflict, reallocate emergency roles, and manage client communications directly.' },
      { value: 3, label: 'Formulate an analytical spreadsheet to evaluate cost alternatives and write a risk assessment memo.' },
      { value: 2, label: 'Investigate alternative suppliers, review engineering specifications, or deploy backup systems.' },
      { value: 1, label: 'Draft a quick external PR response and outline a creative strategy to retain brand trust.' }
    ]
  },
  {
    id: 'ug_14',
    text: 'Scenario: You are assigned to design the main quarterly presentation for a corporate client. You focus on:',
    category: 'CreativeCommunicative',
    type: 'situational',
    options: [
      { value: 5, label: 'Developing a compelling visual narrative, scripting the presentation, and crafting clear benefits.' },
      { value: 3, label: 'Ensuring absolute accuracy in financial tables, spreadsheets, and business audit metrics.' },
      { value: 2, label: 'Compiling solid scientific facts, laboratory testing figures, or technical system schematics.' },
      { value: 1, label: 'Including team welfare details, client reviews, and community-level feedback.' }
    ]
  },
  {
    id: 'ug_15',
    text: 'Scenario: You want to enroll in a postgraduate or certification program. You would naturally select:',
    category: 'AutonomyGrowth',
    type: 'situational',
    options: [
      { value: 5, label: 'Chartered Institute of Personnel Management (CIPM), ICAN, CFA, or Project Management (PMP).' },
      { value: 3, label: 'Barrister-at-Law, Creative Arts, Digital Communications, or Public Relations.' },
      { value: 2, label: 'Advanced Software Engineering, Cisco Network Professional, or Clinical Medicine fellowships.' },
      { value: 1, label: 'Venture Incubation Program, Social Impact Development, or Green Energy Leadership.' }
    ]
  },
  {
    id: 'ug_16',
    text: 'Scenario: If you were invited to launch a professional portfolio project, you would prefer to build:',
    category: 'TechnicalPractical',
    type: 'situational',
    options: [
      { value: 5, label: 'A functional software/hardware prototype, data dashboard, or a clean renewable energy design.' },
      { value: 3, label: 'A comprehensive legal policy audit, media campaign script, or clinical counseling guidebook.' },
      { value: 2, label: 'A detailed commercial audit, business plan, or investment portfolio prospectus.' },
      { value: 1, label: 'An active nonprofit initiative, community welfare team, or cooperative market garden.' }
    ]
  },
  {
    id: 'ug_17',
    text: 'Scenario: In a professional work environment, you are most motivated by:',
    category: 'AutonomyGrowth',
    type: 'situational',
    options: [
      { value: 5, label: 'High career autonomy, starting a brand-new business, and leading venture expansion.' },
      { value: 3, label: 'Solving highly complex, technical, or scientific puzzles that push engineering boundaries.' },
      { value: 2, label: 'Improving public policies, legal advocacy, mass communications, or emotional welfare.' },
      { value: 1, label: 'Managing corporate budgets, auditing financial integrity, and streamlining business practices.' }
    ]
  },
  {
    id: 'ug_18',
    text: 'Scenario: A team project you worked on fails to meet expectations. You typically:',
    category: 'CollaborationValues',
    type: 'situational',
    options: [
      { value: 5, label: 'Convene a transparent review, listen to everyone\'s feedback, and plan improvements collectively.' },
      { value: 3, label: 'Analyze the performance metrics individually to find the exact point of error or variance.' },
      { value: 2, label: 'Draft a brand-new creative strategy or rewrite the presentation pitch entirely.' },
      { value: 1, label: 'Accept accountability, check guidelines, and execute a structured correction schedule.' }
    ]
  },
  {
    id: 'ug_19',
    text: 'You are highly motivated to design green solutions, sustainability campaigns, or circular resources systems.',
    category: 'CollaborationValues',
    type: 'likert'
  },
  {
    id: 'ug_20',
    text: 'You prefer working in high-growth startup environments where responsibilities change rapidly and risk-taking is encouraged.',
    category: 'AutonomyGrowth',
    type: 'likert'
  },
  {
    id: 'ug_21',
    text: 'You enjoy researching corporate labor laws, contract frameworks, or international trade regulations.',
    category: 'AnalyticalCritical',
    type: 'likert'
  },
  {
    id: 'ug_22',
    text: 'You are interested in building advanced custom tools, operating smart agronomy equipment, or pilot testing drones.',
    category: 'TechnicalPractical',
    type: 'likert'
  },
  {
    id: 'ug_23',
    text: 'You possess strong self-motivation and can maintain consistent progress on complex research without close supervision.',
    category: 'AutonomyGrowth',
    type: 'likert'
  },
  {
    id: 'ug_24',
    text: 'You are passionate about mass communication, digital storytelling, video editing, or content design.',
    category: 'CreativeCommunicative',
    type: 'likert'
  },

  // Practical Employability & Sector Fit (25-36)
  {
    id: 'ug_25',
    text: 'You feel a strong calling to improve community health, public hospital services, or clinical therapies.',
    category: 'CollaborationValues',
    type: 'likert'
  },
  {
    id: 'ug_26',
    text: 'You enjoy compiling financial audits, analyzing ledger sheets, or managing client investment folders.',
    category: 'AnalyticalCritical',
    type: 'likert'
  },
  {
    id: 'ug_27',
    text: 'You enjoy legal advocacy, drafting high-impact constitutional arguments, or teaching in humanities classrooms.',
    category: 'CreativeCommunicative',
    type: 'likert'
  },
  {
    id: 'ug_28',
    text: 'You are highly interested in studying mechatronics, network protocols, or cybersecurity architectures.',
    category: 'TechnicalPractical',
    type: 'likert'
  },
  {
    id: 'ug_29',
    text: 'You aspire to launch a commercial franchise, manage retail supplies, or head an e-commerce operations floor.',
    category: 'ManagerialSocial',
    type: 'likert'
  },
  {
    id: 'ug_30',
    text: 'You easily write engaging public relations copy, draft blog articles, or design brand newsletters.',
    category: 'CreativeCommunicative',
    type: 'likert'
  },
  {
    id: 'ug_31',
    text: 'You find deep satisfaction in coordinating large volunteer networks to implement local social development goals.',
    category: 'CollaborationValues',
    type: 'likert'
  },
  {
    id: 'ug_32',
    text: 'You are comfortable designing pricing algorithms, analyzing investment rates, and advising corporations on tax laws.',
    category: 'AnalyticalCritical',
    type: 'likert'
  },
  {
    id: 'ug_33',
    text: 'You prefer using rigorous laboratory analysis, material testing, or mathematical statistics to solve industrial problems.',
    category: 'TechnicalPractical',
    type: 'likert'
  },
  {
    id: 'ug_34',
    text: 'You are eager to learn how to prompt generative models efficiently while reviewing AI tools for ethics and fairness.',
    category: 'TechnicalPractical',
    type: 'likert'
  },
  {
    id: 'ug_35',
    text: 'You would love to lead an agency of creative designers, photographers, and writers, managing client pitches and studio spaces.',
    category: 'ManagerialSocial',
    type: 'likert'
  },
  {
    id: 'ug_36',
    text: 'You prefer a highly secure, stable corporate job with predictable guidelines and standard hours over high-risk startups.',
    category: 'AutonomyGrowth',
    type: 'likert'
  }
];
