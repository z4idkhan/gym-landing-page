// Data configuration for hardcore fitness facility website
// Edit this file to customize for different gym clients

export interface SiteConfig {
  gymName: string
  logo: string // URL or path to logo image
  themeColor: string // Hex color (e.g., "#10B981") used for accents
  whatsappNumber: string // Format: "91XXXXXXXXXX" (country code + number)
  address: string
  phone: string
  email: string
  googleMapEmbedUrl: string // Embed URL for Google Maps
  socialLinks: {
    facebook?: string
    instagram?: string
    youtube?: string
  }

  // Membership plans - price is for the period shown (daily/weekly/monthly/annual)
  membershipPlans: Array<{
    id: string
    name: string
    price: number // Price in INR for the period
    period: string // e.g., "Daily", "Weekly", "Monthly", "Annual"
    pricePeriodText: string // e.g., "/day", "/week", "/month", "/year"
    currency?: string // Default "INR"
    features: string[]
    mostPopular?: boolean
    qrCodeData?: string // Data for QR code generation
  }>

  // Trainers data
  trainers: Array<{
    id: string
    name: string
    specialization: string
    certification: string
    experience: string // e.g., "5 years"
    image: string // URL or path to trainer photo
    bio: string
    socialLinks?: {
      facebook?: string
      instagram?: string
    }
  }>

  classSchedule: Array<{
    id: string
    day: string
    name: string
    time: string
    instructor: string
    description: string
  }>

  // Facilities/amenities - specialized hardcore equipment
  facilities: Array<{
    id: string
    name: string
    description: string
    icon: string // Icon name or URL
    brandTags: string[] // e.g., ["Hammer Strength", "Arsenal Strength"]
  }>

  // QuadVirtual online classes data
  quadVirtual: {
    title: string
    subtitle: string
    description: string
    programs: Array<{
      id: string
      name: string
      durationWeeks: number
      sessionsPerWeek: number
      focus: string[]
      features: string[]
    }>
    onboardingPhases: Array<{
      id: string
      title: string
      description: string
      durationWeeks: string
      groupSize: string
    }>
    strategySession: {
      title: string
      description: string
      duration: string
    }
  }

  // Gym atmosphere and "un-rules"
  gymCulture: {
    title: string
    description: string
    encouraged: string[] // e.g., ["Chalk", "Grunting", "Heavy Lifting", "Intense Focus"]
    prohibited: string[] // e.g., ["Ego", "Disrespect"]
  }

  // Equipment proof/Iron Inventory
  ironInventory: {
    title: string
    subtitle: string
    equipment: Array<{
      id: string
      name: string
      description: string
      brandTags: string[] // e.g., ["Hammer Strength", "Eleiko"]
      specs: string[] // e.g., ["Dumbbells up to 200 lbs", "10+ Deadlift Platforms"]
    }>
  }

  // Wall of Fame/historical imagery
  wallOfFame: Array<{
    id: string
    name: string
    title: string // e.g., "Legendary Powerlifter", "Olympic Bodybuilder"
    image: string // URL or path to image
    era: string // e.g., "1980s", "1990s"
    achievement: string
  }>

  transformations: Array<{
    id: string
    name: string
    imageBefore: string // URL or path to before image
    imageAfter: string // URL or path to after image
    rating: number // 1-5
    text: string
  }>
}

// Updated site configuration for hardcore fitness facility
export const siteConfig: SiteConfig = {
  gymName: "Quads Gym",
  logo: "/images/gym/logo.jpg",
  themeColor: "#EF4444", // Red color for hardcore gym theme
  whatsappNumber: "13125550123", // Example US number
  address: "123 Iron Street, Chicago, IL 60601",
  phone: "(312) 555-0123",
  email: "info@chicagoslegendaryhomeofiron.com",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.622521671887!2d-87.62980028468245!3d41.87811367925894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c7cd0f4c4ed%3A0xf4c1d7b66e4f6c2e!2s123%20Iron%20St%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1625097600000!5m2!1sen!2sus",
  socialLinks: {
    facebook: "https://facebook.com/chicagoslegendaryhomeofiron",
    instagram: "https://instagram.com/chicagoslegendaryhomeofiron",
    youtube: "https://youtube.com/c/chicagoslegendaryhomeofiron"
  },

  // Membership passes - Daily, Weekly, Monthly, Annual with no contracts
  membershipPlans: [
    {
      id: "daily-pass",
      name: "Daily Pass",
      price: 20,
      period: "Daily",
      pricePeriodText: "/day",
      features: [
        "Full gym access",
        "All equipment included",
        "Locker room access",
        "Towel service available"
      ],
      qrCodeData: "DAILY_PASS_CHICAGO_IRON_001"
    },
    {
      id: "weekly-pass",
      name: "Weekly Pass",
      price: 75,
      period: "Weekly",
      pricePeriodText: "/week",
      features: [
        "Full gym access 7 days",
        "All equipment included",
        "Locker room access",
        "Towel service available",
        "Most popular for tourists"
      ],
      mostPopular: true,
      qrCodeData: "WEEKLY_PASS_CHICAGO_IRON_002"
    },
    {
      id: "monthly-pass",
      name: "Monthly Pass",
      price: 88,
      period: "Monthly",
      pricePeriodText: "/month",
      features: [
        "Unlimited monthly access",
        "All equipment included",
        "Locker room access",
        "Towel service included",
        "No contracts or initiation fees"
      ],
      qrCodeData: "MONTHLY_PASS_CHICAGO_IRON_003"
    },
    {
      id: "annual-pass",
      name: "Annual Pass",
      price: 720,
      period: "Annual",
      pricePeriodText: "/year",
      features: [
        "Best value - $60/month equivalent",
        "Unlimited annual access",
        "All equipment included",
        "Locker room access",
        "Towel service included",
        "No contracts or initiation fees",
        "Save $336 vs monthly"
      ],
      qrCodeData: "ANNUAL_PASS_CHICAGO_IRON_004"
    }
  ],

  // Trainers data
  trainers: [
    {
      id: "trainer1",
      name: "Iron Mike Tyson",
      specialization: "Strength & Conditioning",
      certification: "NASM Certified Personal Trainer",
      experience: "20+ years",
      image: "/images/trainers/mike-tyson.jpg",
      bio: "Legendary trainer with decades of experience transforming physiques through hardcore training methods.",
      socialLinks: {
        instagram: "https://instagram.com/ironmiketyson"
      }
    },
    {
      id: "trainer2",
      name: "Linda Iron",
      specialization: "Powerlifting & Strength",
      certification: "IPF Certified Coach",
      experience: "15+ years",
      image: "/images/trainers/linda-iron.jpg",
      bio: "National champion powerlifter specializing in maximal strength development.",
      socialLinks: {
        instagram: "https://instagram.com/linda_iron"
      }
    },
    {
      id: "trainer3",
      name: "Diesel Dave",
      specialization: "Bodybuilding & Aesthetics",
      certification: "NABBF Certified Trainer",
      experience: "10+ years",
      image: "/images/trainers/diesel-dave.jpg",
      bio: "IFBB Pro bodybuilder focused on building dense, hard muscle through brutal training principles.",
      socialLinks: {
        instagram: "https://instagram.com/dieseldave"
      }
    }
  ],

  classSchedule: [
  {
    id: "class1",
    day: "Monday",
    name: "Strength Training",
    time: "06:00 AM",
    instructor: "Iron Mike Tyson",
    description: "Heavy compound lifting."
  },
  {
    id: "class2",
    day: "Tuesday",
    name: "Powerlifting",
    time: "07:00 AM",
    instructor: "Linda Iron",
    description: "Squat, Bench and Deadlift."
  },
  {
    id: "class3",
    day: "Wednesday",
    name: "Bodybuilding",
    time: "06:00 PM",
    instructor: "Diesel Dave",
    description: "Hypertrophy workout."
  }
],

  // Facilities/amenities - specialized hardcore equipment
  facilities: [
    {
      id: "freewights",
      name: "Free Weights Area",
      description: "Extensive collection of free weights for serious lifters",
      icon: "dumbbell",
      brandTags: ["Hammer Strength", "Arsenal Strength", "Eleiko"]
    },
    {
      id: "deadlift-platforms",
      name: "Deadlift Platforms",
      description: "Dedicated platforms for heavy pulling movements",
      icon: "barbell",
      brandTags: ["Rogue", "Eleiko"]
    },
    {
      id: "power-racks",
      name: "Power Racks & Squat Racks",
      description: "Heavy-duty racks for squats, bench press, and overhead work",
      icon: "square-3-stack-3d",
      brandTags: ["Rogue", "Titan Fitness"]
    },
    {
      id: "plate-loaded",
      name: "Plate-Loaded Equipment",
      description: "Plate-loaded machines for isolated muscle work",
      icon: "dumbbell",
      brandTags: ["Hammer Strength", "Arsenal Strength", "Nebula"]
    }
  ],

  // QuadVirtual online classes data
  quadVirtual: {
    title: "QuadVirtual Online Classes & Coaching",
    subtitle: "Elite Remote Training for Serious Athletes",
    description: "Experience our world-class training methodology from anywhere in the world through our comprehensive online platform.",
    programs: [
      {
        id: "foundation-program",
        name: "12-Week Foundation Strength Program",
        durationWeeks: 12,
        sessionsPerWeek: 3,
        focus: ["Movement Patterns", "Strength Foundations", "Mobility"],
        features: [
          "3x weekly live coaching sessions",
          "Personalized technique analysis",
          "Progressive overload programming",
          "Weekly check-ins and adjustments",
          "Access to exercise library"
        ]
      },
      {
        id: "powerlifting-program",
        name: "12-Week Powerlifting Peak Program",
        durationWeeks: 12,
        sessionsPerWeek: 3,
        focus: ["Maximal Strength", "Powerlifting Technique", "Peaking"],
        features: [
          "3x weekly live coaching sessions",
          "Competition-style training sessions",
          "Peaking strategy guidance",
          "Attempt selection coaching",
          "Meet day preparation"
        ]
      },
      {
        id: "bodybuilding-program",
        name: "12-Week Bodybuilding Mass Program",
        durationWeeks: 12,
        sessionsPerWeek: 5,
        focus: ["Muscle Hypertrophy", "Symmetry", "Conditioning"],
        features: [
          "5x weekly live coaching sessions",
          "Advanced hypertrophy programming",
          "Nutrition coaching for muscle gain",
          "Posing practice sessions",
          "Contest preparation guidance"
        ]
      }
    ],
    onboardingPhases: [
      {
        id: "phase1",
        title: "Phase 1: Small Group Foundation Sessions",
        description: "Build proper movement patterns and foundational strength in intimate groups",
        durationWeeks: "Weeks 1-3",
        groupSize: "<4 people"
      },
      {
        id: "phase2",
        title: "Phase 2: Larger Virtual Group Classes",
        description: "Apply foundations in larger group settings to build strength and confidence",
        durationWeeks: "Weeks 3-12",
        groupSize: "Unlimited"
      }
    ],
    strategySession: {
      title: "30-Minute Strategy Call with a Coach",
      description: "Get personalized assessment and roadmap for your fitness journey",
      duration: "30 minutes"
    }
  },

  // Gym atmosphere and "un-rules"
  gymCulture: {
    title: "Gym Atmosphere & The Un-Rules",
    description: "What makes our gym legendary isn't just the equipment—it's the atmosphere and culture we've cultivated since 1976.",
    encouraged: [
      "Chalk",
      "Grunting",
      "Heavy Lifting",
      "Intense Focus",
      "Chalking Up",
      "Weight Slamming (on platforms)",
      "Grunting During Max Efforts"
    ],
    prohibited: [
      "Ego",
      "Disrespect",
      "Cell Phone Selfies During Sets",
      "Curling in the Squat Rack",
      "Not Re-Racking Weights",
      "Giving Unsolicited Advice"
    ]
  },

  // Equipment proof/Iron Inventory
  ironInventory: {
    title: "The Iron Inventory",
    subtitle: "Proof of Our Commitment to Serious Strength Training",
    equipment: [
      {
        id: "dumbbells",
        name: "Dumbbells",
        description: "Extensive dumbbell collection for all strength levels",
        brandTags: ["Iron Grip", "York Barbell"],
        specs: [
          "Dumbbells up to 200 lbs",
          "5 lb increments from 5-100 lbs",
          "2.5 kg increments from 5-50 kg",
          "Both rubber and iron options"
        ]
      },
      {
        id: "deadlift-platforms",
        name: "Deadlift Platforms",
        description: "Dedicated platforms for heavy pulling movements",
        brandTags: ["Rogue", "Eleiko"],
        specs: [
          "10+ Dedicated Deadlift Platforms",
          "8ft x 8ft competition-sized platforms",
          "Horse stall mats for deadlifting",
          "Olympic lifting platforms available"
        ]
      },
      {
        id: "squat-racks",
        name: "Squat Racks & Power Racks",
        description: "Indestructible racks for heavy squatting and pressing",
        brandTags: ["Rogue", "Titan Fitness", "Rep Fitness"],
        specs: [
          "20+ Power Racks",
          "Monolift attachments available",
          "Reverse hyper attachments",
          "Band pegs for accommodating resistance"
        ]
      },
      {
        id: "barbells",
        name: "Barbells",
        description: "Precision barbells for Olympic lifting and powerlifting",
        brandTags: ["Eleiko", "Rogue", "York Barbell"],
        specs: [
          "Eleiko Competition Barbells",
          "Rogue Ohio Power Bars",
          "YORK BARBELL Olympic Bars",
          "Specialty bars (Axle, Buffalo, Swiss)"
        ]
      },
      {
        id: "plate-loaded",
        name: "Plate-Loaded Equipment",
        description: "Machines that move like free weights but with guided safety",
        brandTags: ["Hammer Strength", "Arsenal Strength", "Nebula"],
        specs: [
          "Hammer Strength ISO-Lateral Line",
          "Arsenal Strength HD Line",
          "Nebula Plate-Loaded Equipment",
          "Both plate-loaded and selectorized options"
        ]
      }
    ]
  },

  // Wall of Fame/historical imagery
  wallOfFame: [
    {
      id: "legend1",
      name: "Louie Simmons",
      title: "Powerlifting Legend & Westside Barbell Founder",
      image: "/images/wall-of-fame/louie-simmons.jpg",
      era: "1970s-2020s",
      achievement: "World's Greatest Powerlifting Coach, Inventor of Reverse Hyper"
    },
    {
      id: "legend2",
      name: "Ronnie Coleman",
      title: "8x Mr. Olympia Legend",
      image: "/images/wall-of-fame/ronnie-coleman.jpg",
      era: "1990s-2000s",
      achievement: "8x Mr. Olympia, Known for Legendary Strength & Mass"
    },
    {
      id: "legend3",
      name: "Ed Coan",
      title: "Greatest Powerlifter of All Time",
      image: "/images/wall-of-fame/ed-coan.jpg",
      era: "1980s-2000s",
      achievement: "All-Time Greatest Powerlifter, Set 71 World Records"
    },
    {
      id: "legend4",
      name: "Bev Francis",
      title: "Women's Powerlifting Pioneer",
      image: "/images/wall-of-fame/bev-francis.jpg",
      era: "1980s-1990s",
      achievement: "First Woman to Bench Press 300+ lbs, IFBB Pro Bodybuilder"
    }
  ],

  transformations: [
    {
      id: "trans1",
      name: "John Krieger",
      imageBefore: "/images/transformations/before1.jpg",
      imageAfter: "/images/transformations/after1.jpg",
      rating: 5,
      text: "Lost 45 lbs of fat while gaining 30 lbs of muscle in 6 months. Went from 265 lbs to 250 lbs with single-digit body fat."
    },
    {
      id: "trans2",
      name: "Sarah Connor",
      imageBefore: "/images/transformations/before2.jpg",
      imageAfter: "/images/transformations/after2.jpg",
      rating: 5,
      text: "Went from barely benching the bar to benching 225 lbs for reps in 4 months. Competed in her first powerlifting meet after 5 months of training."
    },
    {
      id: "trans3",
      name: "Marcus Aurelius",
      imageBefore: "/images/transformations/before3.jpg",
      imageAfter: "/images/transformations/after3.jpg",
      rating: 4,
      text: "Gained 50 lbs of muscle in 8 months while maintaining sub-10% body fat. Added 100 lbs to his squat, 75 lbs to his bench, and 125 lbs to his deadlift."
    }
  ]
};