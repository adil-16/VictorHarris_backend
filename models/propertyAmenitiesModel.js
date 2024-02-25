const mongoose = require("mongoose");

const amenitySchema = new mongoose.Schema(
  {
    bikeRacks: {
      type: Boolean,
      default: false,
      description: "12 bike racks",
    },
    sharedBroadband: {
      type: Boolean,
      default: false,
      description: "1GB/s Shared broadband",
    },
    showers: {
      type: Boolean,
      default: false,
      description: "2 showers",
    },
    security24Hours: {
      type: Boolean,
      default: false,
      description: "24 hour security",
    },
    access24Hours: {
      type: Boolean,
      default: false,
      description: "24-hour access",
    },
    cctvSecurity24Hours: {
      type: Boolean,
      default: false,
      description: "24-hour CCTV Security Building Access",
    },
    access24_7: {
      type: Boolean,
      default: false,
      description: "24/7 access",
    },
    cctvSecurity24_7: {
      type: Boolean,
      default: false,
      description: "24/7 Access and CCTV security system",
    },
    sharedIT500Mb: {
      type: Boolean,
      default: false,
      description: "500 Mb Shared IT INCL!",
    },
    fastLifts: {
      type: Boolean,
      default: false,
      description: "8 x Fast Lifts",
    },
    airConditioning: {
      type: Boolean,
      default: false,
      description: "AC, Air Conditioning, Aircon",
    },
    allInclusiveContracts: {
      type: Boolean,
      default: false,
      description: "All inclusive & flexible contracts",
    },
    backupInternetConnection: {
      type: Boolean,
      default: false,
      description: "Backup Internet Connection",
    },
    barAndBlockSteakhouse: {
      type: Boolean,
      default: false,
      description: "Bar and Block Steakhouse",
    },
    baristaStyleCoffee: {
      type: Boolean,
      default: false,
      description: "Barista-style coffee",
    },
    beAtOne: {
      type: Boolean,
      default: false,
      description: "Be At One",
    },
    bellaItalia: {
      type: Boolean,
      default: false,
      description: "Bella Italia",
    },
    bespokeFitout: {
      type: Boolean,
      default: false,
      description: "Bespoke Fitout",
    },
    bikeStorageShowers: {
      type: Boolean,
      default: false,
      description: "Bike storage and showers",
    },
    brainstormingRooms: {
      type: Boolean,
      default: false,
      description: "Brainstorming rooms",
    },
    breakOutSpaces: {
      type: Boolean,
      default: false,
      description:
        "Break out space, Break out spaces, Break out spaces and 1 to 50 people (50 to 5000 sqft), Break-out areas, Break-out Space, Breakout areas",
    },
    businessLounge: {
      type: Boolean,
      default: false,
      description: "Business Lounge",
    },
    cafe: {
      type: Boolean,
      default: false,
      description: "Cafe",
    },
    callHandling: {
      type: Boolean,
      default: false,
      description: "Call handling",
    },
    catCabling: {
      type: Boolean,
      default: false,
      description: "CAT 567 cabling",
    },
    cctv: {
      type: Boolean,
      default: false,
      description: "CCTV",
    },
    chairsPedestals: {
      type: Boolean,
      default: false,
      description: "chairs and pedestals",
    },
    changingRooms: {
      type: Boolean,
      default: false,
      description: "Changing rooms",
    },
    cinemaRoom: {
      type: Boolean,
      default: false,
      description: "Cinema Room",
    },
    cleaningServices: {
      type: Boolean,
      default: false,
      description: "Cleaning Services",
    },
    climateControl: {
      type: Boolean,
      default: false,
      description: "Climate Control",
    },
    collaborationArea: {
      type: Boolean,
      default: false,
      description: "Collaboration area with TV",
    },
    communalCourtyard: {
      type: Boolean,
      default: false,
      description: "Communal Courtyard",
    },
    communalRoofTerrace: {
      type: Boolean,
      default: false,
      description: "Communal roof terrace",
    },
    complimentaryBeverages: {
      type: Boolean,
      default: false,
      description: "Complimentary Beverages",
    },
    complimentaryCoffee: {
      type: Boolean,
      default: false,
      description: "Complimentary coffee",
    },
    conciergeService: {
      type: Boolean,
      default: false,
      description: "Concierge Service",
    },
    conferenceRooms: {
      type: Boolean,
      default: false,
      description: "Conference Rooms",
    },
    courtyard: {
      type: Boolean,
      default: false,
      description: "Courtyard",
    },
    courtyardGarden: {
      type: Boolean,
      default: false,
      description: "Courtyard Garden (available to hire)",
    },
    customerServiceTeam: {
      type: Boolean,
      default: false,
      description: "Customer Service Team",
    },
    cycleParking: {
      type: Boolean,
      default: false,
      description: "Cycle parking",
    },
    cyclistFriendly: {
      type: Boolean,
      default: false,
      description: "Cyclist friendly",
    },
    dataCabling: {
      type: Boolean,
      default: false,
      description: "Data cabling and G-Network fibre connectivity in situ",
    },
    ddaCompliance: {
      type: Boolean,
      default: false,
      description: "DDA compliance",
    },
    dedicatedAccountManager: {
      type: Boolean,
      default: false,
      description: "Dedicated Account Manager",
    },
    dedicatedConnection: {
      type: Boolean,
      default: false,
      description: "Dedicated private & secure connection",
    },
    dedicatedRackSpace: {
      type: Boolean,
      default: false,
      description: "Dedicated Rack Space in Comms Room",
    },
    demisedBathroom: {
      type: Boolean,
      default: false,
      description: "Demised Bathroom and Shower",
    },
    desk: {
      type: Boolean,
      default: false,
      description: "Desk",
    },
    dirtyMartini: {
      type: Boolean,
      default: false,
      description: "Dirty Martini",
    },
    disabledAccess: {
      type: Boolean,
      default: false,
      description: "Disabled Access",
    },
    dogFriendly: {
      type: Boolean,
      default: false,
      description: "Dog Friendly",
    },
    entryphoneSystem: {
      type: Boolean,
      default: false,
      description: "Entryphone System",
    },
    epcRating: {
      type: Boolean,
      default: false,
      description: "EPC rating of C",
    },
    eventSpace: {
      type: Boolean,
      default: false,
      description: "Event Space",
    },
    excellentNaturalLight: {
      type: Boolean,
      default: false,
      description: "Excellent Natural Light",
    },
    fatBurgers: {
      type: Boolean,
      default: false,
      description: "Fat Burgers",
    },
    filteredWater: {
      type: Boolean,
      default: false,
      description: "Filtered water",
    },
    fittedKitchen: {
      type: Boolean,
      default: false,
      description: "Fitted kitchen",
    },
    flexibleTenancyTerms: {
      type: String,
      description: "Flexible and competitive tenancy terms",
    },
    flightClub: { type: Boolean, default: false, description: "Flight Club" },
    floorToCeilingWindows: {
      type: Boolean,
      default: false,
      description: "Floor to Ceiling Windows",
    },
    fluffyTowelsAndProducts: {
      type: Boolean,
      default: false,
      description: "Fluffy towels & products",
    },
    parking: {
      type: String,
      description: "Front visitor and long term parking",
    },
    fibreConnectivity: {
      type: Boolean,
      default: false,
      description: "Full Fibre Connectivity",
    },
    itTelephonySolutions: {
      type: Boolean,
      default: false,
      description: "Full IT & telephony solutions",
    },
    fullyFittedFurniture: {
      type: Boolean,
      default: false,
      description: "Fully fitted with furniture",
    },
    fullyFurnishedTerms: { type: String, description: "Fully Furnished" },
    fullyInclusiveTerms: { type: String, description: "Fully Inclusive Terms" },
    equippedKitchens: {
      type: Boolean,
      default: false,
      description: "Fully-equipped kitchens",
    },
    furnishedStatus: {
      type: String,
      default: "Unfurnished",
      description: "Furnished / Unfurnished",
    },
    furnishedDesks: {
      type: Boolean,
      default: false,
      description: "Furnished with desks",
    },
    furniture: { type: Boolean, default: false, description: "Furniture" },
    grandCentralKitchen: {
      type: Boolean,
      default: false,
      description: "Grand Central Kitchen",
    },
    greggs: { type: Boolean, default: false, description: "Greggs" },
    gym: { type: Boolean, default: false, description: "Gym" },
    highCeilingsAndLight: {
      type: String,
      description: "High ceilings and excellent natural light",
    },
    highSpeedInternet: {
      type: Number,
      default: null,
      min: [0, "Speed cannot be negative"],
      description: "High-speed Internet (1GB per second)",
    },
    inHouseMaintenanceITSupport: {
      type: Boolean,
      default: false,
      description: "In-house maintenance & IT support",
    },
    itSupportAvailable: {
      type: Boolean,
      default: false,
      description: "IT support available",
    },
    kitchen: { type: Boolean, default: false, description: "Kitchen" },
    kitchenDiningAreasPerFloor: {
      type: Boolean,
      default: false,
      description: "Kitchen & dining areas on each floor",
    },
    kitchenFacilities: {
      type: Boolean,
      default: false,
      description: "Kitchen facilities",
    },
    kitchenettes: {
      type: Boolean,
      default: false,
      description: "Kitchenettes",
    },
    lasIguanas: { type: Boolean, default: false, description: "Las Iguanas" },
    ledLighting: { type: Boolean, default: false, description: "LED Lighting" },
    lift: { type: Boolean, default: false, description: "Lift" },
    localITSupport: {
      type: Boolean,
      default: false,
      description: "Local IT support",
    },
    lockers: { type: Boolean, default: false, description: "Lockers" },
    lounge: { type: Boolean, default: false, description: "Lounge" },
    luxuryClientLounges: {
      type: Boolean,
      default: false,
      description: "Luxury client lounges",
    },
    macDonalds: { type: Boolean, default: false, description: "MacDonalds" },
    mailHandling: {
      type: Boolean,
      default: false,
      description: "Mail handling",
    },
    maintenanceCleaning: {
      type: Boolean,
      default: false,
      description: "Maintenance & Cleaning",
    },
    managedIPAddress: {
      type: Boolean,
      default: false,
      description: "Managed IP Address",
    },
    meetingRooms: {
      type: Boolean,
      default: false,
      description: "Meeting Rooms",
    },
    meetingBreakoutSpaces: {
      type: Boolean,
      default: false,
      description: "Meeting rooms and break out spaces",
    },
    meetingConferenceSpaces: {
      type: Boolean,
      default: false,
      description: "Meeting rooms offered and conference spaces",
    },
    modernBuilding: {
      type: Boolean,
      default: false,
      description: "Modern Building",
    },
    networkingEvents: {
      type: Boolean,
      default: false,
      description: "Networking events",
    },
    networkingOpportunities: {
      type: Boolean,
      default: false,
      description: "Networking Opportunities",
    },
    odeonCinema: { type: Boolean, default: false, description: "Odeon Cinema" },
    officeOrders: {
      type: Boolean,
      default: false,
      description: "Office Orders",
    },
    onSiteBarista: {
      type: Boolean,
      default: false,
      description: "on site barista",
    },
    onSiteStaff: {
      type: Boolean,
      default: false,
      description: "On site staff",
    },
    onSiteSecurity: {
      type: Boolean,
      default: false,
      description: "On-site Security",
    },
    openPlan: { type: Boolean, default: false, description: "Open Plan" },
    outdoorSpace: {
      type: Boolean,
      default: false,
      description: "Outdoor space",
    },
    parking: { type: Boolean, default: false, description: "Parking" },
    boutiqueMembersClub: {
      type: Boolean,
      default: false,
      description: "Part of The Boutique Members Club",
    },
    passengerLift: {
      type: Boolean,
      default: false,
      minlength: [1, "Club name cannot be empty"],
      description: "Passenger lift",
    },
    periodFeatures: {
      type: Boolean,
      default: false,
      minlength: [1, "Club name cannot be empty"],
      description: "Period features",
    },
    phoneBooths: {
      type: Boolean,
      default: false,
      minlength: [1, "Club name cannot be empty"],
      description: "Phone Booths",
    },
    prestigeLocation: {
      type: Boolean,
      default: false,
      description: "Prestige Location",
    },
    printingFacilities: {
      type: Boolean,
      default: false,
      description: "Printing",
    },
    privateKitchen: {
      type: Boolean,
      default: false,
      description: "Private kitchen",
    },
    privateOffices: {
      type: Boolean,
      default: false,
      description: "Private offices",
    },
    privateShower: {
      type: Boolean,
      default: false,
      description: "Private Shower",
    },
    professionallyManagedReception: {
      type: Boolean,
      default: false,
      description: "Professionally Managed Reception",
    },
    wellEquippedMeetingRooms: {
      type: Boolean,
      default: false,
      description:
        "Professionally Managed Reception Well Equipped Meeting Rooms",
    },
    reception: { type: Boolean, default: false, description: "Reception" },
    receptionArea: {
      type: Boolean,
      default: false,
      description: "Reception area: Monday – Friday 8:30 – 5:30",
    },
    receptionSeatingArea: {
      type: Boolean,
      default: false,
      description: "Reception Seating Area",
    },
    receptionServices: {
      type: Boolean,
      default: false,
      description: "Reception services",
    },
    receptionMondayFriday830530: {
      type: Boolean,
      default: false,
      description: "Reception: Monday – Friday 8:30 – 5:30",
    },
    receptionMondayFriday8305: {
      type: Boolean,
      default: false,
      description: "Reception: Monday – Friday 8:30-5:30",
    },
    recyclingFacilities: {
      type: Boolean,
      default: false,
      description: "Recycling Facilities",
    },
    refreshments: {
      type: Boolean,
      default: false,
      description: "Refreshments",
    },
    roofTerrace: { type: Boolean, default: false, description: "Roof Terrace" },
    rooftopTerrace: {
      type: Boolean,
      default: false,
      description: "Rooftop terrace",
    },
    sanCarlo: { type: Boolean, default: false, description: "San Carlo" },
    secretarialServices: {
      type: Boolean,
      default: false,
      description: "Secretarial services",
    },
    secureBikeStorage: {
      type: Boolean,
      default: false,
      description: "Secure bike storage",
    },
    secureServerRooms: {
      type: Boolean,
      default: false,
      description: "Secure server rooms",
    },
    securityGuards: {
      type: Boolean,
      default: false,
      description: "Security guards",
    },
    selfContained: {
      type: Boolean,
      default: false,
      description: "Self Contained",
    },
    selfContainedManagedUnits: {
      type: Boolean,
      default: false,
      description: "Self-contained managed units",
    },
    showerFacilities: {
      type: Boolean,
      default: false,
      description: "Shower facilities",
    },
    showers: { type: Boolean, default: false, description: "Showers" },
    singleMonthlyPayment: {
      type: Boolean,
      default: false,
      description: "Single Monthly Payment",
    },
    snacksRefreshments: {
      type: Boolean,
      default: false,
      description: "Snacks and refreshments",
    },
    spacesDesignedTailored: {
      type: Boolean,
      default: false,
      description: "Spaces designed & tailored",
    },
    starbucks: { type: Boolean, default: false, description: "Starbucks" },
    supportStaff: {
      type: Boolean,
      default: false,
      description: "Support Staff",
    },
    tapasRevolution: {
      type: Boolean,
      default: false,
      description: "Tapas Revolution",
    },
    teaPointsGreatCoffee: {
      type: Boolean,
      default: false,
      description: "Tea points & Great coffee",
    },
    teleconCodedEntrySystem: {
      type: Boolean,
      default: false,
      description: "Telecon Coded Entry System",
    },
    telephoneBooths: {
      type: Boolean,
      default: false,
      description: "Telephone booths",
    },
    terrace: { type: Boolean, default: false, description: "Terrace" },
    botanist: {
      type: Boolean,
      default: false,
      description: "The Botanist",
    },
    bullringShoppingCentre: {
      type: Boolean,
      default: false,
      description: "The Bullring Shopping Centre",
    },
    ivy: {
      type: Boolean,
      default: false,
      description: "The Ivy",
    },
    timHortons: {
      type: Boolean,
      default: false,
      description: "Tim Hortons",
    },
    traditionalDesign: {
      type: Boolean,
      default: false,
      description: "Traditional design",
    },
    twoMeetingRooms: {
      type: Boolean,
      default: false,
      description: "Two Meeting Rooms",
    },
    ultraFastInternet: {
      type: Boolean,
      default: false,
      description: "Ultra-Fast Internet",
    },
    unisexToilets: {
      type: Boolean,
      default: false,
      description: "Unisex toilets",
    },
    videoConferencing: {
      type: Boolean,
      default: false,
      description: "Video Conferencing",
    },
    viewsOverSohoSquare: {
      type: Boolean,
      default: false,
      description: "Views over Soho Square",
    },
    voip: { type: Boolean, default: false, description: "VOIP" },
    voipTelephony: {
      type: Boolean,
      default: false,
      description: "VoIP telephony",
    },
    wagamama: { type: Boolean, default: false, description: "Wagamama" },
    wellEquippedMeetingRooms: {
      type: Boolean,
      default: false,
      description: "Well Equipped Meeting Rooms",
    },
    wellnessRoom: {
      type: Boolean,
      default: false,
      description: "Wellness Room",
    },
    wifi: { type: Boolean, default: false, description: "WiFi" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PropertyAmenity", amenitySchema);
