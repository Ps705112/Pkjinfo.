import { Article } from './types';

export const ARTICLES_DATA: Article[] = [
  // --- MOVIES ---
  {
    id: 'm1',
    title: 'Kalki 2898 AD Review: A Sci-Fi Milestone for Indian Cinema',
    category: 'Movies',
    isScheme: false,
    summary: 'A futuristic sci-fi spectacle blending mythology with technology, starring Prabhas and Amitabh Bachchan.',
    date: '2024-06-27',
    author: 'PKJ Entertainment',
    rating: '9.2/10',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000',
    content: `Nag Ashwin's magnum opus "Kalki 2898 AD" has taken the box office by storm, marking a significant milestone in Indian science fiction cinema. Set in a dystopian future in the city of Kashi, the film explores the prophecy of the tenth avatar of Vishnu, Kalki, who is destined to end the Kali Yuga.

    **Visuals and World Building**
    The visual effects are undoubtedly the star of the show. The depiction of a dried-up Ganga and the futuristic complex housing the elite is hauntingly beautiful. The VFX work rivals international standards, creating an immersive atmosphere that pulls the audience into its bleak world.

    **Performances**
    Amitabh Bachchan as Ashwatthama is the soul of the movie. His screen presence and action sequences at this age are nothing short of legendary. Prabhas plays Bhairava, a bounty hunter, bringing a mix of humor and intensity. Deepika Padukone delivers a subtle yet powerful performance as the carrier of the prophecy.

    **Verdict**
    While the first half takes its time to set up the world, the second half is a rollercoaster of action and emotion. The climax sets up a sequel perfectly. It is a must-watch for its ambition and execution.`
  },
  {
    id: 'm2',
    title: 'Munjya Review: Horror-Comedy Done Right',
    category: 'Movies',
    isScheme: false,
    summary: 'A surprise horror-comedy hit rooted in folklore that is scaring and entertaining audiences alike.',
    date: '2024-06-07',
    author: 'Movie Critic',
    rating: '8.5/10',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000',
    content: `Maddock Films continues its streak of successful horror comedies with "Munjya". Directed by Aditya Sarpotdar, the film introduces a new creature to their supernatural universe, based on the Konkan folklore of the Munjya spirit.

    **The Plot**
    The story follows Bittu, a young man who inadvertently releases the spirit of Munjya, a Brahmin boy who died before his thread ceremony. Munjya is obsessed with marrying the love of his life, Munni, and wreaks havoc in Bittu's life to achieve this goal.

    **CGI and Humor**
    The CGI character of Munjya is a technical marvel, especially considering the film's modest budget. The interaction between the CGI character and live actors is seamless. The humor is organic, arising from the chaotic situations rather than forced gags.

    **Verdict**
    "Munjya" is a refreshing addition to the genre. It manages to be genuinely scary and laugh-out-loud funny at the same time. A great theatrical experience.`
  },
  {
    id: 'm3',
    title: 'Inside Out 2: Pixar Returns to Form',
    category: 'Movies',
    isScheme: false,
    summary: 'Pixar returns with Riley entering puberty and facing new emotions like Anxiety and Envy.',
    date: '2024-06-14',
    author: 'Hollywood Desk',
    rating: '8.8/10',
    imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=1000',
    content: `Disney and Pixar's "Inside Out 2" returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear, and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.

    **The New Emotions**
    Maya Hawke shines as Anxiety, perfectly capturing the frantic energy of a teenager worrying about social status. Envy, Ennui, and Embarrassment round out the new cast, adding depth to the portrayal of puberty.

    **Themes**
    The movie tackles complex themes of self-identity and the pressure to fit in. It teaches valuable lessons about accepting all parts of oneself, even the messy ones. It resonates deeply with both children and adults.`
  },

  // --- SCHEMES ---
  {
    id: '1',
    title: 'Mukhyamantri Chiranjeevi Swasthya Bima Yojana: Full Details',
    hindiTitle: 'मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना',
    category: 'Health',
    isScheme: true,
    summary: 'A universal health insurance scheme providing cashless treatment up to ₹25 Lakh for registered families.',
    date: '2024-05-20',
    content: `The Mukhyamantri Chiranjeevi Swasthya Bima Yojana is a revolutionary health insurance scheme launched by the Government of Rajasthan. It is designed to provide financial protection to the citizens of the state against high medical expenses.

    **Key Features:**
    1. **Universal Coverage:** Unlike many other schemes restricted to BPL families, this scheme allows every family in Rajasthan to enroll.
    2. **High Coverage Amount:** The scheme provides health insurance coverage of up to ₹25 Lakh per family per year.
    3. **Cashless Treatment:** Beneficiaries can avail of cashless treatment in government and affiliated private hospitals.
    4. **Package Rates:** The government has defined package rates for various diseases and procedures to ensure transparency.

    **Importance:**
    Health emergencies can drain a family's savings. This scheme ensures that quality healthcare is accessible to the poorest of the poor without the fear of financial ruin. It covers a wide range of diseases, including COVID-19, Black Fungus, Cancer, and Heart ailments.`,
    eligibility: [
      'Permanent resident of Rajasthan',
      'Families covered under National Food Security Act (NFSA)',
      'Socio-Economic Caste Census (SECC) 2011 beneficiaries',
      'Small and marginal farmers',
      'Contractual employees of the state government',
      'Other families can join by paying a nominal premium of ₹850 per year'
    ],
    benefits: [
      'Cashless treatment up to ₹25 Lakh per year',
      'Coverage for pre-existing diseases',
      'No age limit for family members',
      'Includes 5 days pre-hospitalization and 15 days post-hospitalization expenses',
      'Accident insurance coverage up to ₹5 Lakh under a linked scheme'
    ],
    applicationProcess: 'Eligible families can register via E-Mitra kiosks. You will need your Jan Aadhar Card / Aadhar Card. For paid categories, the premium can be paid online through the SSO portal.',
    officialLink: 'https://chiranjeevi.rajasthan.gov.in/'
  },
  {
    id: '2',
    title: 'Indira Gandhi Shahari Rojgar Guarantee Yojana',
    hindiTitle: 'इंदिरा गांधी शहरी रोजगार गारंटी योजना',
    category: 'Employment',
    isScheme: true,
    summary: 'Provides 125 days of guaranteed employment to families living in urban areas of Rajasthan.',
    date: '2024-04-15',
    content: `Modeled after the successful MNREGA scheme for rural areas, the Rajasthan Government launched the Indira Gandhi Shahari Rojgar Guarantee Yojana to address urban unemployment. This scheme is particularly beneficial for street vendors, daily wage laborers, and those hit hard by economic slowdowns.

    **Scope of Work:**
    The work provided under this scheme primarily focuses on environmental conservation, water conservation, heritage conservation, and sanitation. This ensures that while people get employment, the city infrastructure also improves.

    **Wages:**
    The wages are determined by the state government and are revised periodically. The payment is made directly into the bank account of the beneficiary within 15 days of work completion.`,
    eligibility: [
      'Family must be residing in the urban limits (Municipal Corporation/Council/Municipality) of Rajasthan',
      'Member age must be between 18 to 60 years',
      'Must have a valid Jan Aadhar Card'
    ],
    benefits: [
      '125 days of guaranteed wage employment per family per year',
      'Timely payment directly to bank account',
      'Opportunity to contribute to city development',
      'No specific educational qualification required for unskilled labor'
    ],
    applicationProcess: 'Apply through the nearest Urban Local Body office or E-Mitra center. A Job Card will be issued to the family based on the Jan Aadhar card details.',
    officialLink: 'https://irgyurban.rajasthan.gov.in/'
  },
  {
    id: '4',
    title: 'Kali Bai Bhil Medhavi Chatra Scooty Yojana',
    hindiTitle: 'काली बाई भील मेधावी छात्रा स्कूटी योजना',
    category: 'Education',
    isScheme: true,
    summary: 'Free scooty distribution to meritorious girl students to encourage higher education.',
    date: '2023-12-01',
    content: `To promote girls' education and mobility, the Rajasthan Government integrated various scooty distribution schemes into the Kali Bai Bhil Medhavi Chatra Scooty Yojana. This scheme recognizes the academic excellence of girl students and empowers them to pursue higher studies without transportation hurdles.

    **Impact:**
    Distance from colleges is often a reason why girls drop out after school. By providing a free vehicle, the government aims to increase the Gross Enrollment Ratio (GER) of females in higher education.

    **Distribution:**
    Scooties are distributed based on a merit list prepared annually. The number of scooties depends on the budget allocation and the stream (Arts, Science, Commerce).`,
    eligibility: [
      'Girl student domiciled in Rajasthan',
      'Must have scored good marks (usually above 65% or 75%) in 12th Board (RBSE/CBSE)',
      'Must have taken admission in a college degree program (BA, BSc, BCom, etc.)',
      'Family income should be within the prescribed limits (usually under ₹2.5 Lakh)',
      'Should not have received a scooty under any other scheme'
    ],
    benefits: [
      'Free Scooty (Two-wheeler)',
      'Registration and insurance costs are covered by the government',
      'One-time fuel allowance',
      'Helmets are usually provided'
    ],
    applicationProcess: 'Online application is invited through the Higher Technical Education (HTE) portal on SSO ID. Students need to upload mark sheets, admission fee receipts, and income certificates.',
    officialLink: 'https://hte.rajasthan.gov.in/'
  },

  // --- TECH ---
  {
    id: 't1',
    title: 'Rajasthan iStart Program: Boosting the Startup Ecosystem',
    category: 'Technology',
    isScheme: false,
    summary: 'How Rajasthan is becoming a hub for tech startups with the iStart initiative.',
    date: '2024-06-10',
    author: 'Tech Desk',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    content: `The Rajasthan government's iStart program is revolutionizing the startup ecosystem in the state. Designed to foster innovation, create jobs, and facilitate investment, iStart provides a single-window for startups.

    **Key Highlights:**
    The Bhamashah Techno Hub in Jaipur is one of the largest incubators in the country, providing free space and infrastructure to budding entrepreneurs. The program doesn't just offer space; it offers an ecosystem.

    **Benefits for Startups:**
    1. **Q-Rate Ranking:** A unique mechanism to grade startups, which helps them attract investors.
    2. **Mentorship:** Access to industry leaders and successful founders for guidance.
    3. **Cloud Credits:** Partnerships with AWS, Google Cloud, and Microsoft to provide free server credits.
    4. **Funding:** The government provides subsistence allowance and seed funding to promising ideas.

    This initiative has successfully put cities like Jaipur, Jodhpur, and Udaipur on the map of the Indian startup ecosystem, moving beyond the traditional hubs of Bangalore and Gurgaon.`
  },
  {
    id: 't2',
    title: '5G Rollout Expansion in Rural Rajasthan',
    category: 'Technology',
    isScheme: false,
    summary: 'Major telecom operators announce plans to cover 90% of rural tehsils by year-end.',
    date: '2024-06-05',
    author: 'Digital India News',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    content: `Connectivity in rural Rajasthan is set to get a massive boost. Major telecom operators have announced an aggressive roadmap to expand 5G services to remote Tehsils and villages. 

    **The Digital Divide:**
    Historically, desert areas in Rajasthan suffered from poor connectivity. The 5G rollout promises to bridge this gap. High-speed internet is not just about entertainment; it is a necessity for modern agriculture and education.

    **Impact Areas:**
    - **E-Governance:** Better delivery of government services at the doorstep via E-Mitra.
    - **Education:** Online classes and resources for rural students, leveling the playing field.
    - **Tele-medicine:** Connecting village health centers to specialist doctors in city hospitals for real-time consultation.

    The Department of Telecommunications is working closely with the state government to expedite Right of Way (RoW) permissions for fiber laying, ensuring the infrastructure is ready for the digital leap.`
  },

  // --- CURRENT AFFAIRS ---
  {
    id: 'ca1',
    title: 'New Industrial Policy 2024: Focus on Green Energy',
    category: 'Current Affairs',
    isScheme: false,
    summary: 'State government unveils new policy to attract foreign investment in renewable energy.',
    date: '2024-06-12',
    author: 'Policy Bureau',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000',
    content: `To position Rajasthan as the renewable energy capital of India, the state cabinet has approved the New Industrial Policy 2024. The policy focuses heavily on Green Hydrogen and Solar Energy, leveraging the state's natural advantage of high solar irradiation.

    **Key Incentives:**
    - **Land Subsidies:** Special subsidies for land acquisition for setting up solar parks and wind farms.
    - **Tax Holidays:** 100% exemption on electricity duty for the first 10 years for green energy projects.
    - **Single Window Clearance:** Fast-track approval for foreign direct investment (FDI) proposals above ₹500 Crore.

    **Economic Impact:**
    Experts believe this will generate over 50,000 direct and indirect jobs in the western districts of Jaisalmer and Barmer, transforming the desert economy. Major conglomerates have already signed MOUs worth thousands of crores.`
  },

  // --- GOVT EXAMS ---
  {
    id: 'e1',
    title: 'RAS 2024 Notification Released: Strategy and Details',
    category: 'Govt Exams',
    isScheme: false,
    summary: 'RPSC has released the notification for 900+ administrative posts. Check syllabus and dates.',
    date: '2024-06-01',
    author: 'Exam Cell',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
    content: `The Rajasthan Public Service Commission (RPSC) has officially released the notification for the Rajasthan Administrative Services (RAS) Exam 2024. This is the most prestigious exam in the state.

    **Vacancy Details:**
    Total posts: 905.
    - State Services: 424 (Includes RAS, RPS, Accounts Service)
    - Subordinate Services: 481 (Includes Tehsildar, Commercial Tax, etc.)

    **Important Dates:**
    - Application Start: 15th June 2024
    - Last Date: 15th July 2024
    - Prelims Exam Date: Expected October 2024

    **Strategy for Aspirants:**
    Candidates are advised to focus on Rajasthan History, Geography, and Current Affairs as the weightage for these sections has been increased in the Prelims syllabus. Regular mock tests and answer writing practice for Mains are crucial for success.`
  },
  {
    id: 'e2',
    title: 'REET Mains Result Declared: Cutoff Analysis',
    category: 'Govt Exams',
    isScheme: false,
    summary: 'Check the cutoff marks and merit list for Level 1 and Level 2 teachers.',
    date: '2024-05-28',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000',
    content: `The wait is over for lakhs of aspirants. The Rajasthan Staff Selection Board has declared the final results for the REET Mains examination for the recruitment of primary and upper primary teachers.

    **Cutoff Trends:**
    Cutoff marks for the General category have seen a slight increase compared to the previous recruitment cycle, indicating higher competition.
    - Level 1 General Cutoff: 186 Marks
    - Level 2 (Science-Math) General Cutoff: 190 Marks

    **Next Steps:**
    Selected candidates will now proceed to document verification. Authorities have advised candidates to keep their academic and caste certificates ready. The joining process is expected to be completed before the new academic session begins.`
  }
];

export const APP_NAME = "PKJhub";
export const SYSTEM_INSTRUCTION = "PKJhub AI Assistant"; // Placeholder
