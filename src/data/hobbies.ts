import { HobbyRecommendation } from '../types/hobby'

// Material Icons names
const icons = {
  rockClimbing: 'landscape',
  dancing: 'music_note',
  yoga: 'self_improvement',
  photography: 'photo_camera',
  writing: 'edit_note',
  bookClub: 'menu_book',
  chess: 'extension',
  music: 'piano',
  language: 'translate',
  gardening: 'yard',
  cooking: 'restaurant',
  painting: 'palette',
  hiking: 'hiking',
  meditation: 'spa',
  swimming: 'pool',
  cycling: 'pedal_bike',
  running: 'directions_run',
  drawing: 'brush',
  pottery: 'design_services',
  baking: 'cake',
  knitting: 'construction',
  woodworking: 'handyman',
  gaming: 'sports_esports',
  podcasting: 'mic',
  blogging: 'rss_feed',
  filmmaking: 'videocam',
  astronomy: 'telescope',
  birdwatching: 'visibility',
  camping: 'camping',
  fishing: 'phishing',
  surfing: 'surfing',
  martialArts: 'sports_martial_arts',
  volleyball: 'sports_volleyball',
  tennis: 'sports_tennis',
  basketball: 'sports_basketball',
  soccer: 'sports_soccer',
  diy: 'build',
  cardMagic: 'style',
  origami: 'interests',
  collecting: 'collections',
  djing: 'queue_music',
  coding: 'code',
  robotics: 'precision_manufacturing',
  investing: 'trending_up',
  brewing: 'local_drink',
  sewing: 'cut',
  calligraphy: 'draw',
  sculpting: 'architecture',
  archery: 'gps_fixed',
  skating: 'skateboarding',
  puppetry: 'theater_comedy',
  juggling: 'motion_photos_on',
  improv: 'record_voice_over',
  standup: 'mic_external_on',
  modeling3d: 'design_services',
  animation: 'animation',
  boardGames: 'casino',
  go: 'grid_on',
  puzzles: 'extension',
  kayaking: 'kayaking',
  mountainBiking: 'terrain',
  cheeseMaking: 'restaurant',
  teaAppreciation: 'coffee'
}

export const hobbyDatabase: Record<string, HobbyRecommendation[]> = {
  "Being active and moving around": [
    {
      name: "Rock Climbing",
      description: "Challenge yourself physically and mentally by scaling indoor or outdoor climbing walls, developing strength, problem-solving skills, and confidence.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "3-4 hours per session",
      icon: icons.rockClimbing,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Full body workout and improved strength",
        "Problem-solving skills development",
        "Mental focus and concentration",
        "Social interaction with climbing community"
      ],
      requirements: [
        "Basic physical fitness",
        "Climbing gear (can be rented initially)",
        "Access to climbing gym or outdoor locations",
        "Safety training and certification"
      ]
    },
    {
      name: "Dancing",
      description: "Express yourself through movement while improving coordination, fitness, and social connections through various dance styles.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.dancing,
      category: 'physical',
      environment: 'indoor',
      benefits: [
        "Improved coordination and balance",
        "Cardiovascular fitness",
        "Social interaction",
        "Stress relief and emotional expression"
      ],
      requirements: [
        "Comfortable clothing and dance shoes",
        "Access to dance studio or online classes",
        "Willingness to learn and practice",
        "Basic sense of rhythm"
      ]
    },
    {
      name: "Yoga",
      description: "Practice mindful movement and breathing techniques to improve flexibility, strength, and mental clarity.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "30-60 minutes daily",
      icon: icons.yoga,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Improved flexibility and balance",
        "Stress reduction",
        "Mind-body connection",
        "Better posture and core strength"
      ],
      requirements: [
        "Yoga mat",
        "Comfortable clothing",
        "Quiet space for practice",
        "Basic physical mobility"
      ]
    },
    {
      name: "Hiking",
      description: "Explore nature trails and mountains while improving your fitness and connecting with the outdoors.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "2-4 hours per session",
      icon: icons.hiking,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Cardiovascular fitness",
        "Nature appreciation",
        "Stress reduction",
        "Adventure and exploration"
      ],
      requirements: [
        "Hiking boots and appropriate clothing",
        "Basic navigation skills",
        "Water and snacks",
        "Access to hiking trails"
      ]
    },
    {
      name: "Swimming",
      description: "Master various swimming strokes while getting a full-body workout in the water.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.swimming,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Full-body workout",
        "Low-impact exercise",
        "Improved cardiovascular health",
        "Stress relief"
      ],
      requirements: [
        "Swimming attire",
        "Access to pool or water body",
        "Basic water comfort",
        "Swimming lessons (optional)"
      ]
    },
    {
      name: "Cycling",
      description: "Ride through various terrains while improving endurance and exploring new places.",
      difficulty: "Beginner",
      costLevel: "$200+",
      timeCommitment: "1-3 hours per session",
      icon: icons.cycling,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Cardiovascular fitness",
        "Lower body strength",
        "Environmental friendly transport",
        "Outdoor exploration"
      ],
      requirements: [
        "Bicycle",
        "Safety gear",
        "Basic maintenance knowledge",
        "Safe riding routes"
      ]
    },
    {
      name: "Running",
      description: "Build endurance and strength through regular running, whether on trails or in the city.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "30-60 minutes daily",
      icon: icons.running,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Cardiovascular health",
        "Weight management",
        "Mental clarity",
        "Stress relief"
      ],
      requirements: [
        "Running shoes",
        "Comfortable clothing",
        "Safe running routes",
        "Proper form knowledge"
      ]
    },
    {
      name: "Martial Arts",
      description: "Learn self-defense while improving discipline, fitness, and mental focus.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "2-3 hours per session",
      icon: icons.martialArts,
      category: 'physical',
      environment: 'indoor',
      benefits: [
        "Self-defense skills",
        "Physical fitness",
        "Mental discipline",
        "Confidence building"
      ],
      requirements: [
        "Training uniform",
        "Gym membership",
        "Dedication to practice",
        "Physical stamina"
      ]
    },
    {
      name: "Tennis",
      description: "A dynamic racket sport that combines strategy, agility, and endurance on the court.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "1-2 hours per session",
      icon: icons.tennis,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Full-body workout",
        "Hand-eye coordination",
        "Social interaction",
        "Strategic thinking"
      ],
      requirements: [
        "Tennis racket and balls",
        "Court access",
        "Athletic footwear",
        "Basic fitness level"
      ]
    },
    {
      name: "Basketball",
      description: "Team sport that develops coordination, agility, and teamwork through fast-paced play.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.basketball,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Cardiovascular fitness",
        "Team collaboration",
        "Leadership skills",
        "Strategic thinking"
      ],
      requirements: [
        "Basketball",
        "Court access",
        "Athletic shoes",
        "Team or practice partners"
      ]
    },
    {
      name: "Volleyball",
      description: "Dynamic team sport that combines jumping, coordination, and strategic gameplay.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.volleyball,
      category: 'physical',
      environment: 'both',
      benefits: [
        "Team coordination",
        "Explosive power",
        "Quick reflexes",
        "Social interaction"
      ],
      requirements: [
        "Volleyball",
        "Court access",
        "Athletic wear",
        "Team members"
      ]
    },
    {
      name: "Skateboarding",
      description: "Urban sport combining balance, creativity, and style on a skateboard.",
      difficulty: "Intermediate",
      costLevel: "$100-300",
      timeCommitment: "1-2 hours per session",
      icon: icons.skating,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Balance and coordination",
        "Core strength",
        "Creative expression",
        "Community connection"
      ],
      requirements: [
        "Skateboard",
        "Safety gear",
        "Suitable terrain",
        "Patience for learning"
      ]
    }
  ],
  "Learning and creating": [
    {
      name: "Digital Photography",
      description: "Capture and create stunning images while learning about composition, lighting, and photo editing techniques.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "2-4 hours per session",
      icon: icons.photography,
      category: 'creative',
      environment: 'both',
      benefits: [
        "Creative expression",
        "Technical skill development",
        "Documentation of memories",
        "Potential for income"
      ],
      requirements: [
        "Digital camera",
        "Basic photo editing software",
        "Storage devices",
        "Understanding of basic photography concepts"
      ]
    },
    {
      name: "Creative Writing",
      description: "Express your creativity through words, developing your storytelling abilities and writing skills.",
      difficulty: "Beginner",
      costLevel: "$0-50",
      timeCommitment: "1-2 hours daily",
      icon: icons.writing,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Creative expression",
        "Improved communication skills",
        "Stress relief",
        "Personal growth"
      ],
      requirements: [
        "Writing materials or computer",
        "Quiet space for writing",
        "Basic grammar and language skills",
        "Imagination and creativity"
      ]
    },
    {
      name: "3D Modeling",
      description: "Create three-dimensional digital models for art, games, or 3D printing.",
      difficulty: "Intermediate",
      costLevel: "$50-200",
      timeCommitment: "2-3 hours per session",
      icon: icons.modeling3d,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Technical skill development",
        "Creative expression",
        "Career opportunities",
        "Digital art creation"
      ],
      requirements: [
        "Computer with good graphics",
        "3D modeling software",
        "Basic design knowledge",
        "Patience for learning"
      ]
    },
    {
      name: "Animation",
      description: "Bring stories to life through motion using digital or traditional techniques.",
      difficulty: "Advanced",
      costLevel: "$200+",
      timeCommitment: "2-4 hours per session",
      icon: icons.animation,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Storytelling skills",
        "Technical proficiency",
        "Creative expression",
        "Portfolio development"
      ],
      requirements: [
        "Animation software",
        "Drawing tablet",
        "Powerful computer",
        "Understanding of motion"
      ]
    }
  ],
  "Social and community": [
    {
      name: "Book Club",
      description: "Join a community of readers to discuss and analyze books while making new friends.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "4-6 hours per month",
      icon: icons.bookClub,
      category: 'social',
      environment: 'both',
      benefits: [
        "Intellectual stimulation",
        "Social interaction",
        "Exposure to new perspectives",
        "Improved reading comprehension"
      ],
      requirements: [
        "Books (purchased or borrowed)",
        "Time for reading",
        "Willingness to participate in discussions",
        "Open-mindedness to different viewpoints"
      ]
    },
    {
      name: "Language Learning",
      description: "Master a new language while connecting with different cultures and expanding your communication abilities.",
      difficulty: "Intermediate",
      costLevel: "$50-200",
      timeCommitment: "30-60 minutes daily",
      icon: icons.language,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Cultural understanding",
        "Cognitive development",
        "Career opportunities",
        "Travel preparation"
      ],
      requirements: [
        "Language learning resources",
        "Consistent practice time",
        "Patience and dedication",
        "Access to learning materials or classes"
      ]
    },
    {
      name: "Community Gardening",
      description: "Grow plants and build community connections in shared garden spaces.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "2-3 hours per session",
      icon: icons.gardening,
      category: 'social',
      environment: 'outdoor',
      benefits: [
        "Community building",
        "Environmental impact",
        "Fresh produce",
        "Physical activity"
      ],
      requirements: [
        "Garden space access",
        "Basic tools",
        "Plant knowledge",
        "Time commitment"
      ]
    },
    {
      name: "Board Game Club",
      description: "Meet regularly to play and discuss various board games with fellow enthusiasts.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "2-4 hours per session",
      icon: icons.boardGames,
      category: 'social',
      environment: 'indoor',
      benefits: [
        "Strategic thinking",
        "Social interaction",
        "Mental stimulation",
        "Fun competition"
      ],
      requirements: [
        "Board games collection",
        "Regular meeting space",
        "Group of players",
        "Willingness to learn rules"
      ]
    }
  ],
  "Games and strategy": [
    {
      name: "Chess",
      description: "Develop strategic thinking and problem-solving skills through the classic game of chess.",
      difficulty: "Intermediate",
      costLevel: "$0-50",
      timeCommitment: "1-2 hours per session",
      icon: icons.chess,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Strategic thinking development",
        "Improved concentration",
        "Problem-solving skills",
        "Mental agility"
      ],
      requirements: [
        "Chess set or online platform",
        "Basic understanding of rules",
        "Patience for learning",
        "Strategic mindset"
      ]
    },
    {
      name: "Go",
      description: "Master the ancient board game of territory and strategy.",
      difficulty: "Advanced",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.go,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Strategic depth",
        "Pattern recognition",
        "Concentration skills",
        "Cultural appreciation"
      ],
      requirements: [
        "Go board and stones",
        "Study materials",
        "Practice partners",
        "Strategic mindset"
      ]
    },
    {
      name: "Puzzle Solving",
      description: "Challenge your mind with various types of puzzles and brain teasers.",
      difficulty: "Beginner",
      costLevel: "$0-50",
      timeCommitment: "30-60 minutes daily",
      icon: icons.puzzles,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Cognitive enhancement",
        "Problem-solving skills",
        "Stress relief",
        "Mental agility"
      ],
      requirements: [
        "Puzzle collection",
        "Problem-solving mindset",
        "Time management",
        "Patience"
      ]
    }
  ],
  "Music and performance": [
    {
      name: "Learning an Instrument",
      description: "Master a musical instrument while developing creativity and musical understanding.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "30-60 minutes daily",
      icon: icons.music,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Musical skill development",
        "Creative expression",
        "Cognitive benefits",
        "Stress relief"
      ],
      requirements: [
        "Musical instrument",
        "Practice space",
        "Time for regular practice",
        "Basic music theory knowledge"
      ]
    }
  ],
  "Creative pursuits": [
    {
      name: "Painting",
      description: "Express yourself through colors and brushstrokes while creating beautiful artwork.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "2-3 hours per session",
      icon: icons.painting,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Creative expression",
        "Stress relief",
        "Color theory understanding",
        "Fine motor skills"
      ],
      requirements: [
        "Paint supplies",
        "Canvas or paper",
        "Workspace",
        "Basic art knowledge"
      ]
    },
    {
      name: "Drawing",
      description: "Develop your artistic skills through sketching and illustration.",
      difficulty: "Beginner",
      costLevel: "$0-50",
      timeCommitment: "1-2 hours per session",
      icon: icons.drawing,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Artistic expression",
        "Observation skills",
        "Hand-eye coordination",
        "Portable hobby"
      ],
      requirements: [
        "Drawing materials",
        "Sketchbook",
        "Practice time",
        "Basic techniques knowledge"
      ]
    },
    {
      name: "Pottery",
      description: "Create functional and decorative pieces while working with clay and ceramics.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "2-3 hours per session",
      icon: icons.pottery,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Tactile creativity",
        "Stress relief",
        "Functional art creation",
        "Meditative practice"
      ],
      requirements: [
        "Access to pottery studio",
        "Clay and tools",
        "Patience for learning",
        "Hand strength"
      ]
    },
    {
      name: "Calligraphy",
      description: "The art of beautiful handwriting, combining traditional techniques with modern style.",
      difficulty: "Intermediate",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.calligraphy,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Fine motor skills",
        "Artistic expression",
        "Stress relief",
        "Personal style development"
      ],
      requirements: [
        "Calligraphy pens",
        "Quality paper",
        "Ink supplies",
        "Practice guides"
      ]
    },
    {
      name: "Sculpting",
      description: "Creating three-dimensional art through molding and shaping various materials.",
      difficulty: "Intermediate",
      costLevel: "$100-300",
      timeCommitment: "2-3 hours per session",
      icon: icons.sculpting,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Spatial awareness",
        "Creative expression",
        "Hand strength",
        "Stress relief"
      ],
      requirements: [
        "Sculpting materials",
        "Tools",
        "Workspace",
        "Basic techniques"
      ]
    }
  ],
  "Technology and Digital": [
    {
      name: "Coding",
      description: "Learn programming to create websites, apps, and software solutions.",
      difficulty: "Intermediate",
      costLevel: "$0-50",
      timeCommitment: "1-2 hours per session",
      icon: icons.coding,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Problem-solving skills",
        "Career opportunities",
        "Creative thinking",
        "Technical knowledge"
      ],
      requirements: [
        "Computer",
        "Internet access",
        "Learning resources",
        "Patience for debugging"
      ]
    },
    {
      name: "Digital Art",
      description: "Create artwork using digital tools and software.",
      difficulty: "Beginner",
      costLevel: "$200+",
      timeCommitment: "1-3 hours per session",
      icon: icons.drawing,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Digital skills",
        "Creative expression",
        "Commercial potential",
        "Unlimited editing"
      ],
      requirements: [
        "Graphics tablet",
        "Art software",
        "Computer",
        "Basic art knowledge"
      ]
    },
    {
      name: "Podcasting",
      description: "Create and host audio content on topics you're passionate about.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "2-4 hours per session",
      icon: icons.podcasting,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Communication skills",
        "Content creation",
        "Networking",
        "Knowledge sharing"
      ],
      requirements: [
        "Microphone",
        "Recording software",
        "Quiet space",
        "Content planning"
      ]
    }
  ],
  "Outdoor and Adventure": [
    {
      name: "Camping",
      description: "Experience nature through overnight outdoor adventures.",
      difficulty: "Beginner",
      costLevel: "$200+",
      timeCommitment: "24+ hours per session",
      icon: icons.camping,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Nature connection",
        "Survival skills",
        "Stress reduction",
        "Adventure experience"
      ],
      requirements: [
        "Camping gear",
        "Outdoor skills",
        "Location access",
        "Safety knowledge"
      ]
    },
    {
      name: "Birdwatching",
      description: "Observe and identify different bird species in their natural habitats.",
      difficulty: "Beginner",
      costLevel: "$100-300",
      timeCommitment: "2-4 hours per session",
      icon: icons.birdwatching,
      category: 'mental',
      environment: 'outdoor',
      benefits: [
        "Nature appreciation",
        "Patience development",
        "Knowledge building",
        "Peaceful activity"
      ],
      requirements: [
        "Binoculars",
        "Field guide",
        "Outdoor clothing",
        "Transportation"
      ]
    },
    {
      name: "Fishing",
      description: "Practice the art of catching fish in various water environments.",
      difficulty: "Beginner",
      costLevel: "$100-300",
      timeCommitment: "3-4 hours per session",
      icon: icons.fishing,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Patience building",
        "Nature connection",
        "Relaxation",
        "Technical skills"
      ],
      requirements: [
        "Fishing gear",
        "License",
        "Location access",
        "Basic knowledge"
      ]
    },
    {
      name: "Kayaking",
      description: "Explore waterways while developing paddling skills and enjoying nature.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "2-4 hours per session",
      icon: icons.kayaking,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Upper body strength",
        "Nature exploration",
        "Water confidence",
        "Adventure experience"
      ],
      requirements: [
        "Kayak and paddle",
        "Safety equipment",
        "Water access",
        "Basic swimming skills"
      ]
    },
    {
      name: "Mountain Biking",
      description: "Navigate challenging trails while experiencing the thrill of off-road cycling.",
      difficulty: "Advanced",
      costLevel: "$200+",
      timeCommitment: "2-4 hours per session",
      icon: icons.mountainBiking,
      category: 'physical',
      environment: 'outdoor',
      benefits: [
        "Adrenaline rush",
        "Technical skills",
        "Physical fitness",
        "Nature exploration"
      ],
      requirements: [
        "Mountain bike",
        "Safety gear",
        "Trail access",
        "Bike maintenance skills"
      ]
    }
  ],
  "Performance Arts": [
    {
      name: "Stand-up Comedy",
      description: "Develop and perform original comedy material for live audiences.",
      difficulty: "Advanced",
      costLevel: "$0-50",
      timeCommitment: "2-3 hours per session",
      icon: icons.standup,
      category: 'creative',
      environment: 'both',
      benefits: [
        "Public speaking",
        "Writing skills",
        "Confidence building",
        "Social connection"
      ],
      requirements: [
        "Performance space",
        "Material preparation",
        "Stage presence",
        "Thick skin"
      ]
    },
    {
      name: "Improv Theater",
      description: "Spontaneous theatrical performance without scripted material.",
      difficulty: "Intermediate",
      costLevel: "$50-200",
      timeCommitment: "2-3 hours per session",
      icon: icons.improv,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Quick thinking",
        "Team collaboration",
        "Confidence building",
        "Creative expression"
      ],
      requirements: [
        "Practice group",
        "Performance space",
        "Open mindset",
        "Basic acting skills"
      ]
    }
  ],
  "Crafts and Making": [
    {
      name: "Knitting",
      description: "Create garments and accessories using yarn and needles.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.knitting,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Stress relief",
        "Creative expression",
        "Practical skills",
        "Portable hobby"
      ],
      requirements: [
        "Knitting needles",
        "Yarn",
        "Pattern reading",
        "Basic techniques"
      ]
    },
    {
      name: "Woodworking",
      description: "Craft items from wood using various tools and techniques.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "3-4 hours per session",
      icon: icons.woodworking,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Practical skills",
        "Creative design",
        "Problem solving",
        "Tangible results"
      ],
      requirements: [
        "Tools",
        "Workspace",
        "Safety equipment",
        "Material knowledge"
      ]
    },
    {
      name: "Sewing",
      description: "Create and alter clothing and accessories using fabric and thread.",
      difficulty: "Beginner",
      costLevel: "$200+",
      timeCommitment: "2-3 hours per session",
      icon: icons.sewing,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Practical skills",
        "Creative expression",
        "Cost saving",
        "Custom clothing"
      ],
      requirements: [
        "Sewing machine",
        "Basic tools",
        "Fabric",
        "Pattern reading"
      ]
    }
  ],
  "Food and Drink": [
    {
      name: "Brewing",
      description: "Create your own beer, wine, or other fermented beverages.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "3-4 hours per session",
      icon: icons.brewing,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Chemistry knowledge",
        "Creative recipes",
        "Social sharing",
        "Process mastery"
      ],
      requirements: [
        "Brewing equipment",
        "Ingredients",
        "Storage space",
        "Patience"
      ]
    },
    {
      name: "Baking",
      description: "Create breads, pastries, and desserts through precise measurements and techniques.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "2-4 hours per session",
      icon: icons.baking,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Precision skills",
        "Creative expression",
        "Sharing joy",
        "Stress relief"
      ],
      requirements: [
        "Baking equipment",
        "Kitchen access",
        "Basic ingredients",
        "Recipe following"
      ]
    },
    {
      name: "Cheese Making",
      description: "Create various types of cheese using traditional and modern techniques.",
      difficulty: "Intermediate",
      costLevel: "$100-300",
      timeCommitment: "3-4 hours per session",
      icon: icons.cheeseMaking,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Culinary skills",
        "Chemistry knowledge",
        "Artisanal creation",
        "Food appreciation"
      ],
      requirements: [
        "Cheese making supplies",
        "Temperature control",
        "Aging space",
        "Food safety knowledge"
      ]
    },
    {
      name: "Tea Appreciation",
      description: "Explore and taste various teas while learning about their origins and preparation.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.teaAppreciation,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Cultural knowledge",
        "Sensory development",
        "Relaxation practice",
        "Social sharing"
      ],
      requirements: [
        "Tea collection",
        "Brewing equipment",
        "Water quality",
        "Tasting notes"
      ]
    }
  ],
  "Collection and Trading": [
    {
      name: "Card Collecting",
      description: "Collect and trade various types of cards, from sports to gaming.",
      difficulty: "Beginner",
      costLevel: "$50-200",
      timeCommitment: "1-2 hours per session",
      icon: icons.cardMagic,
      category: 'mental',
      environment: 'indoor',
      benefits: [
        "Market knowledge",
        "Community connection",
        "Investment potential",
        "Historical learning"
      ],
      requirements: [
        "Storage system",
        "Market research",
        "Trading network",
        "Authentication knowledge"
      ]
    }
  ],
  "Entertainment": [
    {
      name: "DJing",
      description: "Mix and blend music to create seamless audio experiences.",
      difficulty: "Intermediate",
      costLevel: "$200+",
      timeCommitment: "2-3 hours per session",
      icon: icons.djing,
      category: 'creative',
      environment: 'indoor',
      benefits: [
        "Music knowledge",
        "Technical skills",
        "Creative expression",
        "Entertainment skills"
      ],
      requirements: [
        "DJ equipment",
        "Music library",
        "Software knowledge",
        "Rhythm understanding"
      ]
    }
  ]
} 