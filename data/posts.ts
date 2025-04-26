import { Post } from "@/types/posts";


const posts: Post[] = [
  {
    id: '1',
    title: 'The Rise of Artificial Intelligence',
    body: 'Artificial Intelligence (AI) is revolutionizing various industries...',
    author: 'John Doe',
    date: '2024-05-01',
    comments: [
      { id: '1', text: 'Great introduction!', username: 'Jane' },
      {
        id: '2',
        text: 'Looking forward to more posts on this topic.',
        username: 'Alex',
      },
    ],
  },
  {
    id: '2',
    title: 'Quantum Computing: A New Era of Computing',
    body: 'Quantum computing holds the potential to solve problems...',
    author: 'Emily Smith',
    date: '2024-04-28',
    comments: [
      { id: '1', text: 'Fascinating read!', username: 'Mark' },
      {
        id: '2',
        text: 'I have some questions about quantum algorithms.',
        username: 'Sarah',
      },
    ],
  },
  {
    id: '3',
    title: 'Blockchain: Transforming Industries',
    body: 'Blockchain technology is disrupting traditional industries...',
    author: 'David Johnson',
    date: '2024-05-03',
    comments: [
      { id: '1', text: 'Blockchain has immense potential!', username: 'Lucy' },
      {
        id: '2',
        text: "I'm curious about its scalability.",
        username: 'Michael',
      },
    ],
  },
  {
    id: '4',
    title: 'The Future of Augmented Reality',
    body: 'Augmented Reality (AR) is changing the way we interact...',
    author: 'Sophia Williams',
    date: '2024-05-05',
    comments: [
      { id: '1', text: 'AR applications are amazing!', username: 'Grace' },
      {
        id: '2',
        text: "Can't wait to see AR integrated into everyday life.",
        username: 'Jack',
      },
    ],
  },
  {
    id: '5',
    title: 'The Internet of Things (IoT): Connecting Everything',
    body: 'The Internet of Things (IoT) is creating interconnected...',
    author: 'Andrew Brown',
    date: '2024-05-08',
    comments: [
      {
        id: '1',
        text: 'IoT has huge potential for smart homes.',
        username: 'Olivia',
      },
      {
        id: '2',
        text: 'Security concerns need to be addressed.',
        username: 'William',
      },
    ],
  },
  {
    id: '6',
    title: '5G Technology: The Next Generation of Connectivity',
    body: '5G technology promises faster speeds and lower latency...',
    author: 'Emma Davis',
    date: '2024-05-10',
    comments: [
      {
        id: '1',
        text: 'Excited for the possibilities with 5G.',
        username: 'Sophie',
      },
      {
        id: '2',
        text: 'Hope it improves rural connectivity too.',
        username: 'Ethan',
      },
    ],
  },
  {
    id: '7',
    title: 'Cybersecurity in the Digital Age',
    body: 'As technology advances, cybersecurity becomes...',
    author: 'Michael Johnson',
    date: '2024-05-12',
    comments: [
      {
        id: '1',
        text: 'Cybersecurity is crucial for protecting data.',
        username: 'Ava',
      },
      { id: '2', text: 'Continuous monitoring is key.', username: 'Noah' },
    ],
  },
  {
    id: '8',
    title: 'Artificial Neural Networks: Mimicking the Brain',
    body: 'Artificial Neural Networks (ANNs) are inspired by the...',
    author: 'Isabella White',
    date: '2024-05-15',
    comments: [
      {
        id: '1',
        text: 'ANNs have applications in various fields.',
        username: 'Liam',
      },
      {
        id: '2',
        text: 'Training them requires a lot of data.',
        username: 'Mia',
      },
    ],
  },
  {
    id: '9',
    title: 'Cloud Computing: Enabling Scalable Solutions',
    body: 'Cloud computing provides on-demand access to computing...',
    author: 'James Taylor',
    date: '2024-05-18',
    comments: [
      {
        id: '1',
        text: 'Cloud computing has transformed IT.',
        username: 'Harper',
      },
      {
        id: '2',
        text: 'Concerned about data privacy in the cloud.',
        username: 'Logan',
      },
    ],
  },
  {
    id: '10',
    title: 'Machine Learning: Powering Intelligent Systems',
    body: 'Machine Learning (ML) algorithms enable computers...',
    author: 'Ava Johnson',
    date: '2024-05-20',
    comments: [
      { id: '1', text: 'ML is reshaping industries.', username: 'Emma' },
      {
        id: '2',
        text: "I'm interested in reinforcement learning.",
        username: 'Daniel',
      },
    ],
  },
  {
    id: "11",
    title: "AI in Healthcare: Trends and Innovations",
    body: "Artificial intelligence is transforming healthcare by improving diagnosis and treatment.",
    author: "Liam Brown",
    date: "2024-06-01",
    comments: [
      { id: "1", "text": "AI-assisted surgeries are the future.", username: "Sophia" },
      { id: "2", "text": "How does AI help in disease prediction?", username: "Oliver" }
    ]
  },
  {
    id: "12",
    title: "Cybersecurity: Protecting Digital Assets",
    body: "Cybersecurity measures are crucial for safeguarding sensitive data.",
    author: "Ethan Lee",
    date: "2024-06-10",
    comments: [
      { id: "1", "text": "Firewalls are essential for network security.", username: "Ava" },
      { id: "2", "text": "What about encryption methods?", username: "Jackson" }
    ]
  },
  {
    id: "13",
    title: "Sustainable Energy: The Future of Power",
    body: "Renewable energy sources are becoming increasingly important.",
    author: "Mia Davis",
    date: "2024-06-15",
    comments: [
      { id: "1", "text": "Solar energy is a promising option.", username: "Isabella" },
      { id: "2", "text": "Wind power is also gaining traction.", username: "Noah" }
    ]
  },
  {
    id: "14",
    title: "Quantum Computing: The Next Revolution",
    body: "Quantum computing has the potential to solve complex problems.",
    author: "Alexander White",
    date: "2024-06-20",
    comments: [
      { id: "1", "text": "Quantum encryption will be unbeatable.", username: "Evelyn" },
      { id: "2", "text": "How does it compare to classical computing?", username: "Benjamin" }
    ]
  },
  {
    id: "15",
    title: "Data Science: Unlocking Insights",
    body: "Data science helps organizations make informed decisions.",
    author: "Charlotte Hall",
    date: "2024-06-25",
    comments: [
      { id: "1", "text": "Data visualization is key to understanding data.", username: "Abigail" },
      { id: "2", "text": "Machine learning models are widely used.", username: "Caleb" }
    ]
  },
  {
    id: "16",
    title: "Blockchain Technology: Secure Transactions",
    body: "Blockchain ensures secure and transparent transactions.",
    author: "Julian Sanchez",
    date: "2024-07-01",
    comments: [
      { id: "1", "text": "Blockchain is not just for cryptocurrency.", username: "Hannah" },
      { id: "2", "text": "It has applications in supply chain management.", username: "Gabriel" }
    ]
  },
  {
    id: "17",
    title: "Internet of Things (IoT): Connecting Devices",
    body: "IoT devices are transforming how we interact with technology.",
    author: "Samantha Taylor",
    date: "2024-07-05",
    comments: [
      { id: "1", "text": "Smart homes are becoming more common.", username: "Emily" },
      { id: "2", "text": "IoT security is a growing concern.", username: "Michael" }
    ]
  },
  {
    id: "18",
    title: "Virtual Reality (VR): Immersive Experiences",
    body: "VR technology offers immersive experiences in gaming and education.",
    author: "William Martin",
    date: "2024-07-10",
    comments: [
      { id: "1", "text": "VR is changing the gaming industry.", username: "Harper" },
      { id: "2", "text": "It also has therapeutic applications.", username: "Logan" }
    ]
  },
  {
    id: "19",
    title: "5G Networks: Faster Connectivity",
    body: "5G networks provide faster data speeds and lower latency.",
    author: "Olivia Patel",
    date: "2024-07-15",
    comments: [
      { id: "1", "text": "5G will enable widespread IoT adoption.", username: "Aiden" },
      { id: "2", "text": "It will improve remote work capabilities.", username: "Eleanor" }
    ]
  },
  {
    id: "20",
    title: "Biotechnology: Advancements in Medicine",
    body: "Biotechnology is leading to breakthroughs in medical treatments.",
    author: "Ethan Kim",
    date: "2024-07-20",
    comments: [
      { id: "1", "text": "Gene editing technologies are promising.", username: "Lila" },
      { id: "2", "text": "Biotech has applications in agriculture too.", username: "Julian" }
    ]
  },
  {
    id: "21",
    title: "Cloud Computing: Scalable Infrastructure",
    body: "Cloud computing offers flexible and scalable infrastructure solutions.",
    author: "Sophia Rodriguez",
    date: "2024-07-25",
    comments: [
      { id: "1", "text": "Cloud storage is convenient and secure.", username: "Alexander" },
      { id: "2", "text": "It reduces the need for physical servers.", username: "Savannah" }
    ]
  },
  {
    id: "22",
    title: "Robotics: Automating Tasks",
    body: "Robots are increasingly used to automate repetitive tasks.",
    author: "Mason Lee",
    date: "2024-08-01",
    comments: [
      { id: "1", "text": "Robots improve efficiency in manufacturing.", username: "Paisley" },
      { id: "2", "text": "They also assist in search and rescue missions.", username: "Cameron" }
    ]
  },
  {
    id: "23",
    title: "Artificial Intelligence in Education",
    body: "AI can enhance learning experiences by personalizing education.",
    author: "Ava Chen",
    date: "2024-08-05",
    comments: [
      { id: "1", "text": "AI-powered tools help with grading.", username: "Cooper" },
      { id: "2", "text": "They also provide real-time feedback.", username: "Remi" }
    ]
  },
  {
    id: "24",
    title: "Environmental Conservation: Preserving Nature",
    body: "Conservation efforts are crucial for preserving biodiversity.",
    author: "Liam Nguyen",
    date: "2024-08-10",
    comments: [
      { id: "1", "text": "Reducing plastic waste is essential.", username: "Ruby" },
      { id: "2", "text": "Sustainable practices can mitigate climate change.", username: "Austin" }
    ]
  },
  {
    id: "25",
    title: "Space Exploration: The Next Frontier",
    body: "Space exploration continues to push human knowledge boundaries.",
    author: "Ethan Brooks",
    date: "2024-08-15",
    comments: [
      { id: "1", "text": "Private companies are leading space innovation.", username: "Penelope" },
      { id: "2", "text": "Mars colonization is a future goal.", username: "Jasper" }
    ]
  },
  {
    id: "26",
    title: "Digital Marketing: Reaching Audiences",
    body: "Digital marketing strategies help businesses connect with customers.",
    author: "Mia Garcia",
    date: "2024-08-20",
    comments: [
      { id: "1", "text": "Social media is a key marketing channel.", username: "Sage" },
      { id: "2", "text": "SEO improves website visibility.", username: "Rowan" }
    ]
  },
  {
    id: "27",
    title: "E-commerce: The Rise of Online Shopping",
    body: "E-commerce platforms have transformed the retail landscape.",
    author: "Alexander Patel",
    date: "2024-08-25",
    comments: [
      { id: "1", "text": "Convenience is a major factor in e-commerce growth.", username: "River" },
      { id: "2", "text": "Mobile shopping apps are increasingly popular.", username: "August" }
    ]
  },
  {
    id: "28",
    title: "Geographic Information Systems (GIS): Mapping Data",
    body: "GIS technology helps analyze and visualize geographic data.",
    author: "Charlotte Kim",
    date: "2024-09-01",
    comments: [
      { id: "1", "text": "GIS is used in urban planning.", username: "Magnolia" },
      { id: "2", "text": "It also aids in environmental monitoring.", username: "Beckett" }
    ]
  },
  {
    id: "29",
    title: "Nanotechnology: Innovations at the Molecular Level",
    body: "Nanotechnology has applications in medicine and electronics.",
    author: "Julian Hall",
    date: "2024-09-05",
    comments: [
      { id: "1", "text": "Nanoparticles can target cancer cells.", username: "Willow" },
      { id: "2", "text": "It improves material properties.", username: "Gideon" }
    ]
  },
  {
    id: "30",
    title: "Autonomous Vehicles: The Future of Transportation",
    body: "Autonomous vehicles promise safer and more efficient transportation.",
    author: "Samantha Lee",
    date: "2024-09-10",
    comments: [
      { id: "1", "text": "Self-driving cars reduce accidents.", username: "Violet" },
      { id: "2", "text": "They also increase mobility for the elderly.", username: "Finn" }
    ]
  }
];

export default posts;