// ============================================================================
// HAUTE BOTANIQUE - COMPREHENSIVE AGRONOMIC & CULINARY DATABASE
// Dedicated Farmer & Grower Knowledge Base for High-Value Gastronomic Crops
// ============================================================================

const BOTANICAL_DATABASE = [
  // --- 1. MARINE & COASTAL SALINE CROPS ---
  {
    id: "oyster-leaf",
    name: "Oyster Leaf",
    scientificName: "Mertensia maritima",
    category: "marine",
    rarity: "High-Margin Specialist",
    badge: "Michelin Essential",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    summary: "A perennial coastal halophyte whose fleshy glaucous leaves deliver an uncanny, intense fresh oyster and sea-mineral flavor. Commands top prices ($0.50+ per single leaf) in Parisian and Californian fine dining.",
    culinaryProfile: "seafood",
    farmerEconomics: {
      marketPrice: "$0.40 - $0.65 per leaf wholesale ($120 - $160 / kg)",
      chefDemandLevel: "Exceptional (Permanent demand from seafood & tasting menu restaurants)",
      yieldPerM2: "350 - 450 marketable leaves/m² per harvest cycle",
      commercialViability: "Very High Margin",
      investmentRisk: "Moderate to High (Sensitive to summer heat waves; requires cold-stratified propagation)",
      breakEvenCycle: "Year 1 (if starting from plugs) or Year 2 (from stratified seeds)"
    },
    growingSpecs: {
      difficulty: "High",
      climate: "Cool maritime / alpine temperate (Optimal: 12°C - 20°C; heat stressed above 24°C)",
      sunExposure: "Full Sun in cool coastal regions; Partial afternoon shade in warm inland areas",
      soilType: "Sandy, free-draining shingle substrate with crushed limestone or oyster shell grit",
      soilPH: "6.5 - 7.5",
      germinationTime: "30 - 60 days (Requires 4 to 6 weeks cold-moist stratification at 2°C - 4°C)",
      spacing: "25 - 30 cm between plants",
      daysToHarvest: "70 - 90 days from seedling transplant",
      waterRequirements: "Moderate; avoid overwatering crowns to prevent rot. Tolerates 0.5-1% saline misting.",
      greenhouseSuitability: "Excellent in climate-controlled alpine glasshouses with active misting & ventilation."
    },
    cultivationGuide: {
      seedPrep: "Seeds possess a tough, impermeable epicarp. Cold-stratify in damp sand or peat moss inside a refrigerator at 3°C for 30–45 days before sowing. Alternatively, gentle emery paper scarification enhances germination rates.",
      sowingTransplant: "Sow in 72-cell propagation plugs using a porous mixture of 50% perlite/pumice and 50% coarse sand/peat. Transplant once true leaves appear and taproot begins developing. Protect tender young root tips.",
      soilFertility: "Requires low nitrogen and high drainage. Excessive organic fertilizer creates bloated, watery leaves that lose the prized concentrated oyster flavor. Amend substrate with crushed maritime oyster shell for natural calcium.",
      irrigationSalinity: "Water from the bottom or via drip line; never leave standing water on foliar crowns. A bi-weekly misting with diluted clean seawater (or 1% non-iodized sea salt solution) intensifies leaf minerality and crunch.",
      pestsDisease: "Susceptible to powdery mildew in stagnant humid air and root rot in heavy soil. Maintain vigorous air movement with horizontal greenhouse circulation fans. Slugs and snails are passionate about oyster leaves—install copper barrier tape."
    },
    harvestingAndPacking: {
      timing: "Harvest early in the morning (05:00 - 07:00 AM) while leaves are fully turgid with moisture.",
      method: "Gently pinch mature leaves leaving 5mm of petiole. Never pull or tear leaf tissue. Leave the central apical crown to sustain ongoing leaf regeneration.",
      postHarvestStorage: "Store strictly at 2°C - 4°C in sealed, food-grade, nitrogen-cushioned clamshells lined with slightly damp lint-free parchment. Never submerge in water wash baths (causes cellular lysis).",
      shelfLife: "5 - 7 days in cold storage under high humidity (90%)."
    },
    culinaryApplication: {
      whyChefsBuy: "Delivers the raw taste of cold Atlantic oysters without opening shellfish, allowing avant-garde chefs to create seafood pairings for vegan, kosher, or crudo degustation courses.",
      signatureDish: "Hokkaido Scallop Crudo with Oscietra Caviar & Fresh Oyster Leaf Emulsion",
      handlingTip: "Must always be served raw or gently placed at the final second on hot dishes. Heat completely destroys the delicate oyster aromatics."
    }
  },
  {
    id: "samphire",
    name: "Marsh Samphire (Sea Asparagus)",
    scientificName: "Salicornia europaea",
    category: "marine",
    rarity: "High-Demand Gourmet",
    badge: "Coastal Saline Staple",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?auto=format&fit=crop&w=1200&q=80",
    summary: "Succulent leafless jointed green stems with a distinct salty snap and crisp asparagus texture. A foundational crop for coastal greenhouse hydroponics that thrives on saline water.",
    culinaryProfile: "seafood",
    farmerEconomics: {
      marketPrice: "$30 - $45 per kg wholesale",
      chefDemandLevel: "Extremely High & Constant across all seafood bistros and fine dining",
      yieldPerM2: "3.5 - 5.0 kg/m² per production cycle",
      commercialViability: "Fast Cash-Flow (Short cycle: 60 days)",
      investmentRisk: "Low (Very resilient when salinity parameters are controlled)",
      breakEvenCycle: "Single season"
    },
    growingSpecs: {
      difficulty: "Moderate",
      climate: "Temperate to subtropical coastal (15°C - 24°C)",
      sunExposure: "Full Sun strictly",
      soilType: "Fine sand, silt, or gravelly hydroponic substrate (Ebb-and-Flood)",
      soilPH: "7.0 - 8.5",
      germinationTime: "10 - 20 days (Germinates best in fresh water, requires salt later)",
      spacing: "10 - 15 cm apart, or dense broadcast seeding in hydroponic troughs",
      daysToHarvest: "55 - 70 days from germination",
      waterRequirements: "High. Requires periodic flooding or steady irrigation with saline water.",
      greenhouseSuitability: "Exceptional in recirculating saline hydroponics or automated gravel ebb-and-flow beds."
    },
    cultivationGuide: {
      seedPrep: "Salicornia seeds exhibit physiological dormancy. Soak in fresh cold water for 24-48 hours. Crucial note: Seeds must germinate in freshwater (0% salt); introduce salinity only after seedlings produce their first green jointed segments.",
      sowingTransplant: "Sow directly into sandy beds or rockwool plugs. Keep substrate continuously damp until germination is uniform.",
      soilFertility: "Light nitrogen feeding. Halophytic physiology relies on sodium and chloride ions for osmotic turgor pressure.",
      irrigationSalinity: "Post-germination, gradually raise water salinity to 1.0% - 1.5% sea salt (approx. 10 - 15 g/L). This prevents weeds from competing, eliminates conventional soil pathogens, and delivers the signature crunchy salt snap.",
      pestsDisease: "Naturally immune to almost all common agricultural pests due to internal cellular salinity. Avoid stagnation that could invite root pythium."
    },
    harvestingAndPacking: {
      timing: "Harvest before plants begin flowering or stems become woody at the base in late summer.",
      method: "Cut top 6–10 cm of tender green tips with sharp sanitized shears. The plant will produce secondary flush branching.",
      postHarvestStorage: "Rinse in chilled 1% saline wash, spin dry gently, and pack into vented clamshells at 3°C - 5°C.",
      shelfLife: "10 - 14 days in commercial cold rooms."
    },
    culinaryApplication: {
      whyChefsBuy: "Provides clean, mineral ocean salinity without requiring added table salt; acts as an architectural garnish for fish.",
      signatureDish: "Pan-Seared Turbot with Butter-Glazed Samphire & Brown Shrimp Beurre Blanc",
      handlingTip: "Blanch for 30–45 seconds only in boiling unsalted water to preserve crisp cellular turgor."
    }
  },
  {
    id: "sea-kale",
    name: "Sea Kale (Forced Ivory Shoots)",
    scientificName: "Crambe maritima",
    category: "marine",
    rarity: "Ultra-Luxury Heritage",
    badge: "Royal French Gastronomy",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1200&q=80",
    summary: "A perennial maritime brassica whose subterranean ivory winter shoots are forced in total darkness. Considered one of the ultimate luxury vegetables in classical and modern French dining.",
    culinaryProfile: "savory",
    farmerEconomics: {
      marketPrice: "$35 - $50 per kg wholesale for blanched shoots",
      chefDemandLevel: "High winter/early spring seasonal demand among Michelin restaurants",
      yieldPerM2: "2.0 - 3.0 kg forced shoots/m²",
      commercialViability: "Prestige Crop with high winter margins",
      investmentRisk: "Moderate (Requires 1-2 years to establish strong crown root systems)",
      breakEvenCycle: "Year 2 after planting root crowns"
    },
    growingSpecs: {
      difficulty: "High",
      climate: "Cold to cool temperate; requires substantial winter chilling for root dormancy",
      sunExposure: "Full sun during summer foliage building; absolute total darkness during winter shoot forcing",
      soilType: "Deep, stone-free sandy loam enriched with composted seaweed and marine grit",
      soilPH: "7.0 - 8.0",
      germinationTime: "21 - 35 days (Hard corky seed capsule requires cracked scarification)",
      spacing: "60 cm apart in permanent outdoor beds",
      daysToHarvest: "Outdoor forced shoots: 20-35 days under blackout cloches in early spring",
      waterRequirements: "Deep taproot system is drought tolerant once established; water deeply in dry summers.",
      greenhouseSuitability: "Grown in field beds for crowns; lifted root thongs forced in dark basement troughs."
    },
    cultivationGuide: {
      seedPrep: "Propagation by root cuttings ('thongs') taken in late autumn is much faster and more reliable than seeds. If using seed, gently crack the exterior cork seed coat with pliers before sowing in warm trays.",
      sowingTransplant: "Plant crowns in deep mounds. In Year 1, allow all foliage to grow vigorously in full sun to feed the heavy taproot system. Remove all flower stalks immediately.",
      soilFertility: "Heavily mulch with sea kelp meal and decomposed compost in autumn. Calcium-rich soil promotes crisp, sweet shoot cell walls.",
      irrigationSalinity: "Tolerates coastal salt air and occasional saline watering, but flourishes best with deep freshwater soaking.",
      pestsDisease: "Cabbage white butterflies and flea beetles target summer leaves. Use fine insect netting during summer."
    },
    harvestingAndPacking: {
      timing: "In January–February, cover crowns with traditional terracotta blanching cloches, black buckets, or lift roots into dark 15°C forcing cellars.",
      method: "Harvest ivory shoots when they reach 15–20 cm length and the small leaf tip is tightly closed and pale violet/yellow. Cut clean at crown base.",
      postHarvestStorage: "Wrap bundles in dark moisture-proof paper. Any exposure to ambient light triggers rapid greening and bitter chlorophyll production.",
      shelfLife: "5 - 7 days in darkness at 2°C."
    },
    culinaryApplication: {
      whyChefsBuy: "Melts on the palate like asparagus with sweet hazelnut cabbage nuances; pairs magnificently with black truffles and beurre noisette.",
      signatureDish: "Steamed Forced Sea Kale with Truffled Sabayon & Crispy Sweetbreads",
      handlingTip: "Gentle steaming or sous-vide at 85°C for 18 minutes keeps the pearlescent ivory appearance."
    }
  },
  {
    id: "crystalline-ice-plant",
    name: "Crystalline Ice Plant",
    scientificName: "Mesembryanthemum crystallinum",
    category: "marine",
    rarity: "Avant-Garde Architectural",
    badge: "Gastronomic Stunner",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    summary: "Covered with thousands of glistening, translucent, water-filled cellular bladder cells that look like frozen morning frost. Offers an incredible juicy burst of lemony oceanic brine.",
    culinaryProfile: "seafood",
    farmerEconomics: {
      marketPrice: "$35 - $50 per kg wholesale ($18 - $24 per 200g clamshell)",
      chefDemandLevel: "High among modern tasting menus, Nordic cuisine, and sushi masters",
      yieldPerM2: "6.0 - 8.5 kg/m² annually under succession harvesting",
      commercialViability: "Fast turnaround & high visual appeal for chefs",
      investmentRisk: "Low (Rapid germination, low nutrient cost, very hardy)",
      breakEvenCycle: "Immediate (first harvest at 45 days)"
    },
    growingSpecs: {
      difficulty: "Moderate",
      climate: "Warm dry air with cool root zone (18°C - 26°C daytime; 12°C - 16°C night)",
      sunExposure: "Full Sun strictly (Intense UV/light promotes maximum crystalline bladder density)",
      soilType: "Sandy, well-aerated cactus/succulent loam or NFT hydroponic channels",
      soilPH: "6.0 - 7.5",
      germinationTime: "7 - 12 days",
      spacing: "20 - 25 cm apart",
      daysToHarvest: "45 - 55 days from seeding",
      waterRequirements: "Low to moderate; do not over-saturate. Controlled mild water stress increases bladder cell tension.",
      greenhouseSuitability: "Ideal for greenhouse benches and vertical gutter systems with high light levels."
    },
    cultivationGuide: {
      seedPrep: "Extremely fine seeds. Surface sow without burying; mist gently with fine spray. Germinates readily under warm light.",
      sowingTransplant: "Transplant small plugs into raised beds, rockwool cubes, or sandy pots. Avoid damaging the delicate creeping fleshy stems.",
      soilFertility: "Low nitrogen requirement. High nitrogen causes large, limp leaves with fewer glistening crystal cells.",
      irrigationSalinity: "Water with clean freshwater during early vegetative growth. 10 days before harvest, irrigate with a 0.5% - 1.0% sea salt brine solution; this triggers salt-accumulation in the epidermal bladders, creating the signature saline burst.",
      pestsDisease: "Resistant to most pests due to saline sap. Ensure dry air to prevent fungal mildew on the dense lower succulent foliage."
    },
    harvestingAndPacking: {
      timing: "Early morning before greenhouse temperatures rise and soften leaf cell turgor.",
      method: "Snip tender terminal shoot tips (5-8 cm) with sharp snips. The plant branches vigorously from lower nodes.",
      postHarvestStorage: "Pack gently in rigid clamshells lined with dry absorbent paper. Do not pack tightly or bladder cells will crush.",
      shelfLife: "4 - 6 days at 3°C - 5°C."
    },
    culinaryApplication: {
      whyChefsBuy: "Looks like liquid crystals on the plate; adds visual luxury and juicy salinity to raw seafood and ceviches.",
      signatureDish: "Cured Langoustine with Crystalline Ice Leaf & Finger Lime Caviar Pearls",
      handlingTip: "Never cook; use raw as an architectural garnish placed on the plate at the pass."
    }
  },

  // --- 2. HEIRLOOM GOURMET TUBERS & ROOTS ---
  {
    id: "crosnes",
    name: "Crosnes (Chinese Artichoke)",
    scientificName: "Stachys affinis",
    category: "tubers",
    rarity: "Haute French Staple",
    badge: "Michelin Heritage Tuber",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80",
    summary: "Distinctive pearlescent spiral, helical tubers with an exquisite sweet, nutty, water-chestnut crunch. An autumn and winter staple across classical French Michelin establishments.",
    culinaryProfile: "savory",
    farmerEconomics: {
      marketPrice: "$40 - $65 per kg wholesale (Cleaned & graded tubers)",
      chefDemandLevel: "Extremely consistent seasonal demand from October to February",
      yieldPerM2: "1.2 - 2.0 kg cleaned tubers/m²",
      commercialViability: "High Value per kg, but requires gentle manual cleaning",
      investmentRisk: "Low (Tubers are cold hardy and can remain in ground all winter)",
      breakEvenCycle: "Year 1 (from spring planting to winter harvest)"
    },
    growingSpecs: {
      difficulty: "Moderate",
      climate: "Temperate to cold autumn climates (Tolerates freezing soil down to -15°C)",
      sunExposure: "Full Sun to light afternoon shade",
      soilType: "Light, stone-free, sandy humic loam (Heavy clay will warp the spiral tubers and complicate cleaning)",
      soilPH: "6.0 - 7.0",
      germinationTime: "14 - 21 days from planting whole seed tubers",
      spacing: "25 - 30 cm between tubers; 45 cm between rows",
      daysToHarvest: "180 - 210 days (Tuberization begins in late summer; harvest starts after first autumn frosts)",
      waterRequirements: "Regular, steady irrigation during summer vegetative growth.",
      greenhouseSuitability: "Outdoor field crop or deep greenhouse raised beds."
    },
    cultivationGuide: {
      seedPrep: "Select clean, firm, unblemished tubers from the previous harvest. Store in moist sand at 2°C until early spring planting.",
      sowingTransplant: "Plant tubers 5–8 cm deep in loose, finely tilled soil in March or April. Ridge up slightly like potatoes as plants grow.",
      soilFertility: "Incorporate well-rotted compost. Avoid excessive high-nitrogen chemical fertilizers which produce huge foliage at the expense of tuber yield.",
      irrigationSalinity: "Consistent moisture prevents premature drying out of root nodules during hot July/August periods.",
      pestsDisease: "Generally trouble-free. Voles and field mice find the sweet tubers irresistible; use raised beds with bottom wire mesh if rodents are present."
    },
    harvestingAndPacking: {
      timing: "Begin harvesting once top foliage dies back following autumn frosts (frost converts starches to sweet sugars).",
      method: "Lift soil gently with a broadfork. Hand-sift the fragile ivory spiral tubers from the loose soil.",
      postHarvestStorage: "Tough skinless tubers dry out rapidly in open air. Store unwashed in damp sand at 1°C - 3°C, or wash and vacuum-pack in chilled water for chef delivery.",
      shelfLife: "2 - 3 months in damp cold sand."
    },
    culinaryApplication: {
      whyChefsBuy: "Unique spiral shape adds architectural elegance; needs no peeling, simply sautéed in butter with herbs.",
      signatureDish: "Pan-Roasted Squab Breast with Crosnes Glazed in Normandy Beurre Noisette",
      handlingTip: "Clean with a coarse sea-salt scrub to remove trace grit without peeling the tender spiral skin."
    }
  },
  {
    id: "oca",
    name: "Oca (New Zealand Yam / Andean Tuber)",
    scientificName: "Oxalis tuberosa",
    category: "tubers",
    rarity: "Andean Heirloom",
    badge: "Rainbow Gastronomy",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=1200&q=80",
    summary: "Brilliantly colored red, yellow, and violet tubers with crisp lemon-sorrel tartness when fresh, developing apricot sweetness when sun-cured after harvest.",
    culinaryProfile: "acidic",
    farmerEconomics: {
      marketPrice: "$22 - $35 per kg wholesale",
      chefDemandLevel: "Growing popularity in modern European and Latin American gastronomy",
      yieldPerM2: "2.5 - 3.8 kg/m²",
      commercialViability: "Excellent storage life and dual culinary profiles (tart raw or sweet roasted)",
      investmentRisk: "Moderate (Photoperiod sensitive: requires late autumn frost protection)",
      breakEvenCycle: "Year 1"
    },
    growingSpecs: {
      difficulty: "Moderate",
      climate: "Temperate highland climate (Cool autumns; tubers form when day length drops below 12 hours)",
      sunExposure: "Full Sun",
      soilType: "Loose, well-draining garden soil rich in leaf mold and compost",
      soilPH: "5.5 - 6.8",
      germinationTime: "10 - 18 days from tuber sprout",
      spacing: "40 cm apart",
      daysToHarvest: "210 - 240 days (Must remain in ground until late November/December)",
      waterRequirements: "Regular moisture through summer; reduce water as tubers swell in autumn.",
      greenhouseSuitability: "Outstanding in unheated polytunnels to protect late autumn tuber growth from early frost."
    },
    cultivationGuide: {
      seedPrep: "Sprout seed tubers in shallow seed trays in March under diffuse light until strong purple sprouts appear.",
      sowingTransplant: "Plant out after last spring frosts. Earth up stems twice during summer like potatoes to stimulate additional tuber nodes.",
      soilFertility: "Prefers compost-rich soil with moderate potassium and phosphorus. Avoid high nitrogen.",
      irrigationSalinity: "Water regularly during summer vegetative building phase.",
      pestsDisease: "Remarkably pest-free thanks to natural oxalic acid in foliage. Slugs may attack exposed surface tubers."
    },
    harvestingAndPacking: {
      timing: "Harvest in late autumn or early winter after frost knocks down foliage, but before hard freeze penetrates soil.",
      method: "Fork up tubers carefully to avoid nicking the colorful wax-like skin.",
      postHarvestStorage: "Crucial Farmer Protocol: Place tubers in shallow wooden crates in direct sunlight for 4–7 days. Sunlight breaks down harsh oxalic acids and converts starches into sweet glucose, developing an exquisite apricot/citrus flavor.",
      shelfLife: "3 - 5 months in cool, dark, well-ventilated storage at 5°C."
    },
    culinaryApplication: {
      whyChefsBuy: "Vibrant jewel colors stay intact when cooked or sliced into razor-thin raw carpaccios.",
      signatureDish: "Glazed Duck Magret with Sun-Cured Crimson Oca & Blackberry Gastrique",
      handlingTip: "No peeling required. Thinly mandoline raw for tartness, or roast whole with duck fat for sweet caramelization."
    }
  },
  {
    id: "yacon",
    name: "Yacon (Peruvian Ground Apple)",
    scientificName: "Smallanthus sonchifolius",
    category: "tubers",
    rarity: "Specialty High-Yield",
    badge: "Prebiotic Sweet",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=1200&q=80",
    summary: "Giant translucent tubers with juicy, refreshing crispness like a cross between a crisp Asian pear, watermelon, and celery. Packed with fructooligosaccharides (inulin).",
    culinaryProfile: "dessert",
    farmerEconomics: {
      marketPrice: "$15 - $22 per kg wholesale",
      chefDemandLevel: "High in luxury dessert, raw vegan, and modern tasting menus",
      yieldPerM2: "4.5 - 7.0 kg marketable storage tubers/m²",
      commercialViability: "Massive biomass yield with long storage capability",
      investmentRisk: "Low (Very vigorous plant, high disease resistance)",
      breakEvenCycle: "Year 1"
    },
    growingSpecs: {
      difficulty: "Moderate",
      climate: "Long warm growing season (18°C - 28°C) with mild frost-free autumn",
      sunExposure: "Full Sun",
      soilType: "Deep, fertile, well-drained loamy soil",
      soilPH: "6.0 - 7.0",
      germinationTime: "Divide reddish propagation crowns in spring; shoots emerge in 14-21 days",
      spacing: "80 - 100 cm apart (Plants grow into 2-meter tall sunflower-like bushes)",
      daysToHarvest: "180 - 220 days",
      waterRequirements: "Generous regular irrigation throughout hot summer months.",
      greenhouseSuitability: "Field crop or large unheated poly-tunnels."
    },
    cultivationGuide: {
      seedPrep: "Yacon has two types of roots: small reddish propagation crowns (for replanting) and large brown edible storage tubers. Divide crown rhizomes with 2-3 eyes per piece.",
      sowingTransplant: "Plant in pre-warmed compost mounds after last spring frost.",
      soilFertility: "Heavy feeder: incorporate generous aged compost. Does not require synthetic fertilizers.",
      irrigationSalinity: "Keep root zone moist to avoid split tubers.",
      pestsDisease: "Foliage contains natural antimicrobial compounds, making it virtually insect-free."
    },
    harvestingAndPacking: {
      timing: "Harvest in late autumn when yellow daisy flowers appear or frost cuts back top leaves.",
      method: "Dig wide around the massive plant base with a spade. Separate the large smooth storage tubers from the central propagation crown.",
      postHarvestStorage: "Store in cool cellars at 4°C - 8°C. Sweetness intensifies after 2 weeks of storage.",
      shelfLife: "Up to 5 months in cool dry storage."
    },
    culinaryApplication: {
      whyChefsBuy: "Delivers crisp fruit-like texture and sweet floral juice that does not brown quickly or spike glycemic levels.",
      signatureDish: "Yuzu-Compressed Yacon Ribbons with King Crab & Garden Sorrel",
      handlingTip: "Peel brown skin with a vegetable peeler. Vacuum-compress with citrus or botanical cordials for translucent texture."
    }
  },
  {
    id: "agretti",
    name: "Agretti (Monk's Beard / Salsola Soda)",
    scientificName: "Salsola soda",
    category: "tubers",
    rarity: "Spring Delicacy",
    badge: "Italian Spring Gold",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    summary: "Succulent, needle-shaped green shoots with a pleasant mineral crunch, mild lemon tang, and coastal saltiness. A seasonal spring superstar with short shelf life and high chef premium.",
    culinaryProfile: "seafood",
    farmerEconomics: {
      marketPrice: "$35 - $55 per kg wholesale ($15 - $22 per 300g chef bundle)",
      chefDemandLevel: "Extremely concentrated spring rush (March–May) across upscale Italian and modern European dining",
      yieldPerM2: "2.5 - 3.5 kg/m²",
      commercialViability: "High profit margin during early spring window",
      investmentRisk: "Moderate to High (Seed viability deteriorates rapidly within 6 months)",
      breakEvenCycle: "Single spring season (60 days)"
    },
    growingSpecs: {
      difficulty: "Moderate to High (Strictly depends on using fresh-crop current year seeds)",
      climate: "Cool Mediterranean or spring greenhouse (12°C - 18°C)",
      sunExposure: "Full Sun",
      soilType: "Sandy, well-draining loam; tolerates saline water and maritime soils",
      soilPH: "6.5 - 8.0",
      germinationTime: "14 - 28 days (Irregular germination; keep soil cool and moist)",
      spacing: "15 - 20 cm apart",
      daysToHarvest: "50 - 65 days from seeding",
      waterRequirements: "Regular, steady irrigation; do not let seedbed dry out during germination.",
      greenhouseSuitability: "Superb for late winter poly-tunnel production to harvest ahead of outdoor market."
    },
    cultivationGuide: {
      seedPrep: "Critical Farmer Rule: Agretti seeds lose viability after 6-9 months. Always source fresh, current-season harvested seeds. Soak in lukewarm water for 24 hours prior to sowing.",
      sowingTransplant: "Sow in early spring directly into weed-free beds or 40-cell plugs. Keep temperature cool (around 15°C; temperatures above 24°C cause seed dormancy).",
      soilFertility: "Light organic compost. Naturally adapted to saline marsh borders.",
      irrigationSalinity: "Watering with mild saline water (1% salt) once established enhances the succulent crunch and shelf life.",
      pestsDisease: "Very hardy and pest-free when grown during cool spring months."
    },
    harvestingAndPacking: {
      timing: "Harvest when plants reach 18–25 cm in height, before central stems become fibrous or form spiny seed buds.",
      method: "Cut whole young bunches just above the root crown, or snip tender top branchings for multi-cut regeneration.",
      postHarvestStorage: "Wash thoroughly to eliminate sandy grit. Shake dry and pack in chilled vented boxes with damp parchment.",
      shelfLife: "3 - 5 days (Best delivered fresh within 48 hours of harvest)."
    },
    culinaryApplication: {
      whyChefsBuy: "Looks like wild green needles; transforms into a silky, savory pasta bed with garlic and olive oil in under 2 minutes.",
      signatureDish: "Handmade Tagliolini with Agretti, Red Prawn Carpaccio & Colatura di Alici",
      handlingTip: "Steam or blanch for 90 seconds only, then toss in rich olive oil with lemon zest."
    }
  },

  // --- 3. MICHELIN SPECIALTY HERBS ---
  {
    id: "shiso-perilla",
    name: "Red & Green Shiso (Japanese Perilla)",
    scientificName: "Perilla frutescens",
    category: "herbs",
    rarity: "High-Volume Haute Staple",
    badge: "Omakase Foundation",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80",
    summary: "Irreplaceable in Japanese omakase and luxury modern dining. Delivers a hypnotic, complex bouquet of cinnamon, spearmint, clove, cumin, and citrus zest.",
    culinaryProfile: "palate-cleanser",
    farmerEconomics: {
      marketPrice: "$40 - $55 per kg ($15 - $20 per clamshell of 50 pristine leaves)",
      chefDemandLevel: "Continuous year-round weekly standing orders from sushi bars and Michelin kitchens",
      yieldPerM2: "1,500 - 2,200 marketable leaves/m² over succession harvest",
      commercialViability: "Top-Tier Cash Crop for vertical indoor farming & greenhouse benches",
      investmentRisk: "Low (Very vigorous once established; requires light-assisted germination)",
      breakEvenCycle: "60 days"
    },
    growingSpecs: {
      difficulty: "Low to Moderate",
      climate: "Warm temperate (20°C - 28°C)",
      sunExposure: "Full Sun to light afternoon shade",
      soilType: "Rich, moisture-retentive, well-drained organic loam or NFT hydroponics",
      soilPH: "6.0 - 7.0",
      germinationTime: "7 - 14 days (Requires light to germinate; surface sow only)",
      spacing: "30 cm apart",
      daysToHarvest: "50 - 65 days",
      waterRequirements: "Regular, steady irrigation; plants will wilt quickly in dry soil.",
      greenhouseSuitability: "Outstanding in climate-controlled greenhouses, NFT gutters, and vertical LED racks."
    },
    cultivationGuide: {
      seedPrep: "Seeds have shallow light dormancy. Surface sow seeds onto damp plug trays and press gently without covering with soil. Provide 14-16 hours of light.",
      sowingTransplant: "Transplant strong plugs into beds or hydroponic channels once seedlings have 4 true leaves.",
      soilFertility: "Balanced organic nitrogen and potassium to encourage large, lush leaves without sacrificing volatile terpene oils.",
      irrigationSalinity: "Keep substrate evenly moist with automated drip or NFT circulation.",
      pestsDisease: "Spider mites and aphids in hot, dry greenhouses. Maintain 60-70% relative humidity and introduce beneficial predatory mites (*Phytoseiulus persimilis*)."
    },
    harvestingAndPacking: {
      timing: "Harvest individual mature leaves with 1 cm of stem, or cut whole top shoots to stimulate bushy branching.",
      method: "Hand-select flat, blemish-free leaves. Grade leaves by size (Standard: 8-10 cm; Micro: 4-5 cm).",
      postHarvestStorage: "Pack leaves flat in food-grade plastic clamshells lined with damp paper, stems positioned together. Keep at 5°C - 8°C (Do not store below 4°C to prevent chilling injury).",
      shelfLife: "7 - 10 days."
    },
    culinaryApplication: {
      whyChefsBuy: "Red Shiso produces vivid magenta extractions with citrus acid; Green Shiso is the essential foundation for raw otoro and kingfish.",
      signatureDish: "Dry-Aged Otoro Nigiri with Green Shiso Leaf & Aged Tamari Glaze",
      handlingTip: "Slap leaves gently between palms once before serving to burst surface essential oil glands."
    }
  },
  {
    id: "nepitella",
    name: "Nepitella (Tuscan Calamint)",
    scientificName: "Clinopodium nepeta",
    category: "herbs",
    rarity: "Regional Artisan",
    badge: "Wild Tuscan Truffle Herb",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=1200&q=80",
    summary: "The sacred wild culinary herb of Tuscany. A magical aromatic fusion of sweet wild oregano, mountain spearmint, and penny thyme that elevates wild mushrooms and roasted meats.",
    culinaryProfile: "savory",
    farmerEconomics: {
      marketPrice: "$45 - $60 per kg wholesale",
      chefDemandLevel: "High among authentic fine-dining Italian and Mediterranean restaurants",
      yieldPerM2: "3.0 - 4.5 kg fresh sprigs/m² annually (Perennial)",
      commercialViability: "Low maintenance perennial with continuous cutting flushes",
      investmentRisk: "Low (Extremely hardy, drought tolerant, deer & pest proof)",
      breakEvenCycle: "Year 1"
    },
    growingSpecs: {
      difficulty: "Low",
      climate: "Hardy perennial (-20°C); flourishes in Mediterranean heat and rocky soils",
      sunExposure: "Full Sun strictly",
      soilType: "Lean, rocky, gravelly, calcareous alkaline soil with fast drainage",
      soilPH: "6.8 - 8.0",
      germinationTime: "10 - 20 days",
      spacing: "30 cm apart",
      daysToHarvest: "60 days from transplant; harvest repeatedly all season",
      waterRequirements: "Low once established; prefers dry root conditions between watering.",
      greenhouseSuitability: "Great perennial bench crop."
    },
    cultivationGuide: {
      seedPrep: "Sow tiny seeds on surface of compost; press gently. Can also be multiplied effortlessly via soft-wood cuttings in early summer.",
      sowingTransplant: "Transplant rooted plugs into rocky beds or well-drained containers.",
      soilFertility: "Do not over-fertilize! Rich soils dilute the intense aromatic essential oils.",
      irrigationSalinity: "Water sparingly. Drought stress concentrates the wild mint-oregano aromatics.",
      pestsDisease: "High natural thymol and pulegone content repels all agricultural insect pests."
    },
    harvestingAndPacking: {
      timing: "Snip tender top sprigs (10-15 cm) just as tiny lavender flower buds begin to form.",
      method: "Cut with sanitized shears 5 cm above ground to encourage dense second and third flushes.",
      postHarvestStorage: "Bundle gently in unbleached paper towels inside ventilated bags at 4°C.",
      shelfLife: "7 - 9 days fresh."
    },
    culinaryApplication: {
      whyChefsBuy: "The authentic, indispensable pairing for wild porcini mushrooms; withstands cooking heat far better than sweet basil.",
      signatureDish: "Braised Wild Porcini with Fresh Nepitella, Roast Garlic & Polenta Taragna",
      handlingTip: "Can be braised, fried in butter, or infused into warm finishing oils."
    }
  },
  {
    id: "pipicha",
    name: "Pipicha (Pipitza)",
    scientificName: "Porophyllum linaria",
    category: "herbs",
    rarity: "Specialty Terpene Botanical",
    badge: "High-Altitude Aroma",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    summary: "Rare Mexican botanical with ultra-slender needle leaves that pack an intoxicating aroma of concentrated cilantro, citrus zest, rue, and fresh mountain pine.",
    culinaryProfile: "palate-cleanser",
    farmerEconomics: {
      marketPrice: "$50 - $70 per kg wholesale ($20 per 100g chef selection)",
      chefDemandLevel: "Coveted by modern Michelin Mexican and contemporary fusion chefs",
      yieldPerM2: "1.8 - 2.5 kg/m²",
      commercialViability: "Bespoke high-margin herb for specialty client bases",
      investmentRisk: "Moderate (Requires warmth and dry air; dislikes wet cold feet)",
      breakEvenCycle: "60 days"
    },
    growingSpecs: {
      difficulty: "Moderate",
      climate: "Warm, arid to semi-arid sunny conditions (22°C - 30°C)",
      sunExposure: "Full Sun",
      soilType: "Sandy, well-aerated mineral soil with low organic matter",
      soilPH: "6.2 - 7.2",
      germinationTime: "12 - 18 days",
      spacing: "20 - 25 cm apart",
      daysToHarvest: "50 - 65 days",
      waterRequirements: "Low to moderate; allow soil to dry between watering cycles.",
      greenhouseSuitability: "Ideal for warm poly-tunnels and summer greenhouse beds."
    },
    cultivationGuide: {
      seedPrep: "Sow in 128-cell trays in warmth (24°C). Keep substrate lightly damp.",
      sowingTransplant: "Transplant after seedlings develop several whorls of slender needle foliage.",
      soilFertility: "Low nitrogen. Thrives in lean soils.",
      irrigationSalinity: "Drip irrigation at base; keep foliage dry to avoid fungal spotting.",
      pestsDisease: "Aromatic terpene glands repel aphids and whiteflies naturally."
    },
    harvestingAndPacking: {
      timing: "Harvest top 10 cm of tender needle clusters before flowers set.",
      method: "Cut with shears; bundle in 50g bunches.",
      postHarvestStorage: "Pack dry in clamshells at 5°C - 7°C.",
      shelfLife: "5 - 6 days."
    },
    culinaryApplication: {
      whyChefsBuy: "Delivers an explosive cilantro-citrus punch that never wilts or turns mushy like common cilantro.",
      signatureDish: "Hamachi Ceviche with Cold-Pressed Pipicha Finishing Oil & Charred Avocado",
      handlingTip: "Blend with neutral grapeseed oil at 60°C and centrifuge for vibrant neon emerald oil."
    }
  },

  // --- 4. HAUTE EDIBLE FLOWERS ---
  {
    id: "szechuan-button",
    name: "Szechuan Button (Electric Daisy / Buzz Button)",
    scientificName: "Acmella oleracea",
    category: "flowers",
    rarity: "Experiential Sensation",
    badge: "Electric Sensational",
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80",
    summary: "A conical yellow-and-red flower head that produces an astonishing effervescent electric tingling sensation on the tongue, followed by refreshing mouth-watering numbness and sensory awakening.",
    culinaryProfile: "palate-cleanser",
    farmerEconomics: {
      marketPrice: "$0.60 - $0.85 per individual button ($28 - $36 per pack of 40 buttons)",
      chefDemandLevel: "Immense demand from avant-garde tasting menus, molecular gastronomy, and luxury mixology",
      yieldPerM2: "800 - 1,400 marketable buttons/m² over a 4-month blooming window",
      commercialViability: "Extraordinary Profit Margin for greenhouse producers",
      investmentRisk: "Low (Very fast growing, continuous flowering, highly productive)",
      breakEvenCycle: "60 - 75 days"
    },
    growingSpecs: {
      difficulty: "Low to Moderate",
      climate: "Warm temperate to tropical (Optimal: 22°C - 30°C; frost tender)",
      sunExposure: "Full Sun to light afternoon shade",
      soilType: "Rich, fertile, organic-rich potting loam with great drainage",
      soilPH: "6.0 - 7.0",
      germinationTime: "7 - 12 days (Surface sow; requires light for germination)",
      spacing: "30 cm apart (Plants form dense spreading mounds 40 cm tall)",
      daysToHarvest: "65 - 80 days to first flower harvest; blooms continuously until autumn frosts",
      waterRequirements: "Regular, generous watering; never allow plants to dry out completely.",
      greenhouseSuitability: "Outstanding in greenhouse bench pots, raised beds, or high-tunnels."
    },
    cultivationGuide: {
      seedPrep: "Seeds are tiny. Surface sow on top of moist sterile seed potting mix. Mist with a spray bottle; do not cover with soil. Maintain 22°C - 25°C.",
      sowingTransplant: "Transplant seedlings into 10 cm pots or directly into raised greenhouse beds once 4 true leaves appear.",
      soilFertility: "Feed with organic liquid seaweed and compost tea every 14 days to support non-stop flower bud production.",
      irrigationSalinity: "Consistent moisture via automated drip tape.",
      pestsDisease: "Slugs enjoy young seedlings. Once mature, the active spilanthol compound deters almost all insects."
    },
    harvestingAndPacking: {
      timing: "Harvest when the conical yellow button is firm, fully rounded, and the dark red central 'eye' is distinct.",
      method: "Pinch flower stem 1 cm below the button. Regular picking stimulates the emergence of hundreds of new flower buds.",
      postHarvestStorage: "Store dry in rigid clear clamshells lined with dry tissue at 4°C - 6°C.",
      shelfLife: "10 - 14 days in cold storage (Remarkably durable for an edible blossom)."
    },
    culinaryApplication: {
      whyChefsBuy: "The natural spilanthol compound sensitizes the palate, dramatically enhancing the guest's perception of umami, sweetness, and wine pairings in subsequent courses.",
      signatureDish: "Yuzu Champagne Intermezzo with Candied Buzz Button Dust",
      handlingTip: "Can be served whole, shredded onto sorbets, or microplaned as an electric dusting."
    }
  },
  {
    id: "borage-blossoms",
    name: "Starflower / Borage Blossoms",
    scientificName: "Borago officinalis",
    category: "flowers",
    rarity: "High-Volume Classic",
    badge: "Cobalt Gastro Standard",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
    summary: "Vibrant five-pointed cobalt blue star flowers with a crisp cucumber and light honey-salt flavor. One of the top 3 highest-volume edible flowers demanded by luxury restaurant kitchens.",
    culinaryProfile: "seafood",
    farmerEconomics: {
      marketPrice: "$16 - $24 per box of 60 blossoms wholesale",
      chefDemandLevel: "Constant year-round baseline demand from every fine-dining kitchen and bar",
      yieldPerM2: "1,200 - 2,000 blossoms/m² through continuous succession plantings",
      commercialViability: "Fast crop rotation, very high daily flower count",
      investmentRisk: "Very Low (Extremely easy to grow, prolific self-seeder)",
      breakEvenCycle: "50 days"
    },
    growingSpecs: {
      difficulty: "Low",
      climate: "Cool to warm temperate (15°C - 24°C)",
      sunExposure: "Full Sun",
      soilType: "Any standard well-drained fertile soil",
      soilPH: "6.0 - 7.5",
      germinationTime: "5 - 10 days",
      spacing: "30 cm apart",
      daysToHarvest: "50 - 60 days",
      waterRequirements: "Moderate",
      greenhouseSuitability: "High in unheated tunnels and outdoor succession rows."
    },
    cultivationGuide: {
      seedPrep: "Large dark seeds germinate easily. Direct seed 1 cm deep into plug trays or beds.",
      sowingTransplant: "Plant successions every 3 weeks to ensure a continuous daily supply of pristine open blossoms.",
      soilFertility: "Moderate soil nutrients; high nitrogen causes overgrown floppy foliage with hidden blooms.",
      irrigationSalinity: "Standard freshwater irrigation.",
      pestsDisease: "Hardy; occasionally attracts black aphids which are easily controlled with organic insecticidal soap or ladybugs."
    },
    harvestingAndPacking: {
      timing: "Harvest early morning after dew has evaporated, selecting blossoms that opened that morning.",
      method: "Gently hold the black central anthers and pull forward; the pristine blue star will slide cleanly off the hairy green calyx.",
      postHarvestStorage: "Pack single-layer on damp lint-free paper towels in airtight clamshells at 3°C - 5°C.",
      shelfLife: "4 - 5 days."
    },
    culinaryApplication: {
      whyChefsBuy: "Gives striking blue color and cucumber freshness to seafood crudos, chilled soups, and artisan cocktails.",
      signatureDish: "Chilled Vichyssoise with Borage Flower Crystals & Poached Blue Lobster",
      handlingTip: "Float on surface just before presentation so petals don't submerge."
    }
  },

  // --- 5. RARE GASTRONOMIC CITRUS & EXOTIC CROPS ---
  {
    id: "finger-lime",
    name: "Australian Finger Lime (Citrus Caviar)",
    scientificName: "Citrus australasica",
    category: "fruits",
    rarity: "Crown Jewel of Citrus",
    badge: "Citrus Caviar",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=1200&q=80",
    summary: "The holy grail of citrus: small finger-shaped fruits packed with millions of crisp, individual juice vesicles that resemble sturgeon caviar. Pop explosively on the tongue with tart lime, pink grapefruit, and mandarin zest.",
    culinaryProfile: "acidic",
    farmerEconomics: {
      marketPrice: "$90 - $160 per kg wholesale ($35 - $45 per 200g box)",
      chefDemandLevel: "Extremely high and unsaturated in North America and Europe",
      yieldPerM2: "3.0 - 6.0 kg per mature dwarf grafted tree in pots",
      commercialViability: "Top-tier premium tree crop for specialty greenhouse citrus growers",
      investmentRisk: "Moderate (Multi-year orchard establishment; requires frost protection below 0°C)",
      breakEvenCycle: "Year 3 for grafted trees"
    },
    growingSpecs: {
      difficulty: "Moderate to High (Thorny branches, requires protected greenhouse in cold zones)",
      climate: "Subtropical / Mediterranean (18°C - 32°C; must protect against freezing temperatures)",
      sunExposure: "Full Sun with protection from high desiccating winds",
      soilType: "Sandy-loam, slightly acidic, free-draining substrate (pH 5.5 - 6.5)",
      soilPH: "5.5 - 6.5",
      germinationTime: "Always cultivate from grafted rootstocks (Flying Dragon or Troyer Citrange) for early fruiting",
      spacing: "1.5 - 2.0 meters apart in high-density greenhouse pots or orchard rows",
      daysToHarvest: "Fruit matures in autumn to mid-winter (October–January in Northern Hemisphere)",
      waterRequirements: "Deep, regular watering during fruit swelling; never allow roots to sit in stagnant water.",
      greenhouseSuitability: "Outstanding in large 40-50 liter air-pruning containers inside temperate glasshouses."
    },
    cultivationGuide: {
      seedPrep: "Never grow from seed for commercial production (seedlings take 8-12 years to fruit and are genetically variable). Source certified grafted 2-year-old trees on dwarfing rootstocks.",
      sowingTransplant: "Plant in deep containers using 60% aged pine bark, 20% peat, and 20% coarse perlite.",
      soilFertility: "Feed with high-potassium citrus fertilizer with chelated iron, zinc, and magnesium. Keep nitrogen balanced to avoid excessive thorny water-sprouts.",
      irrigationSalinity: "Strict freshwater only; highly sensitive to sodium chloride accumulation.",
      pestsDisease: "Citrus leafminer, scale, and red spider mites. Inspect undersides of leaves and spray horticultural neem oil preventatively."
    },
    harvestingAndPacking: {
      timing: "Harvest only when fruits are fully ripe and detach easily from the thorny stem with a gentle twist. Unripe fruits have sticky gum inside.",
      method: "Wear leather puncture-resistant gloves to protect against fierce thorns. Snip with hand shears flush with the fruit button.",
      postHarvestStorage: "Store at 8°C - 10°C in breathable cartons. Crucial commercial note: Whole finger limes can also be blast-frozen at -20°C and stored for 12 months without damaging the internal caviar pearls!",
      shelfLife: "2 - 3 weeks fresh at 8°C; up to 1 year frozen."
    },
    culinaryApplication: {
      whyChefsBuy: "The juice pearls do not weep or bleed on the plate; the acidity remains encapsulated until the guest bites down.",
      signatureDish: "Gillardeau Oyster No. 2 with Green Citrus Caviar & Shiso Mignonette",
      handlingTip: "Slice fruit crosswise through the equator and gently squeeze from the bottom; pearls cascade out effortlessly."
    }
  },
  {
    id: "genuine-wasabi",
    name: "Genuine Shizuoka Wasabi",
    scientificName: "Eutrema japonicum",
    category: "foraged",
    rarity: "The Master Class Botanical",
    badge: "Imperial Gold",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    summary: "The real holy grail of culinary plants. Genuine wasabi rhizomes take 18-24 months of cold running gravel stream cultivation. Offers delicate herbal sweetness, complex aromatics, and clean ephemeral sinus warmth without vinegar burn.",
    culinaryProfile: "palate-cleanser",
    farmerEconomics: {
      marketPrice: "$250 - $400 per kg wholesale ($35 - $60 per single 100g rhizome)",
      chefDemandLevel: "Virtually unlimited (Over 95% of 'wasabi' served worldwide is imitation horseradish and food coloring)",
      yieldPerM2: "1.5 - 2.5 kg marketable rhizomes/m² every 18-24 months",
      commercialViability: "Highest value per kg of any cultivated temperate vegetable",
      investmentRisk: "High (Requires cold oxygenated spring water systems or dedicated indoor gravel hydro)",
      breakEvenCycle: "Year 2 after infrastructure setup"
    },
    growingSpecs: {
      difficulty: "Master Level",
      climate: "Cool, humid alpine microclimate (Optimal air: 10°C - 16°C; plant halts growth above 21°C and dies in heat)",
      sunExposure: "Dense Shade (70% - 80% shade cloth canopy; mimics wild mountain forest canopies)",
      soilType: "Coarse volcanic gravel or washed pea gravel (Tatami-ishi system); continuous cool running water",
      soilPH: "6.0 - 7.0",
      germinationTime: "Cultivated from cloned plantlets or side offshoots (Seeds require 90-120 days cold stratification)",
      spacing: "30 cm apart in gravel beds",
      daysToHarvest: "18 - 24 months for mature fat commercial rhizome",
      waterRequirements: "Continuous flow of clean, highly-oxygenated spring water maintained strictly between 11°C and 14°C year-round.",
      greenhouseSuitability: "Indoor recirculating water gravel raceways with water chillers and high-capacity aeration."
    },
    cultivationGuide: {
      seedPrep: "Use tissue-culture micro-propagated plantlets to guarantee disease-free stock. Plantlets should have 3-4 healthy green leaves and well-developed white roots.",
      sowingTransplant: "Plant directly into the top 5 cm of washed river gravel beds with water flowing gently across the gravel.",
      soilFertility: "Dosed with dilute organic nutrients. High dissolved oxygen (>8 mg/L) is far more important than heavy fertilizer.",
      irrigationSalinity: "Pure cold running water. Water temperature must never exceed 18°C or fungal *Phoma* and *Erwinia* rot will wipe out the crop.",
      pestsDisease: "Cabbage moths and fungal rot. Maintain pristine hygiene and constant shade."
    },
    harvestingAndPacking: {
      timing: "Harvest when the central green rhizome reaches 10–18 cm length and at least 3 cm diameter (typically at 18-24 months).",
      method: "Gently lift the whole plant from the gravel. Trim leaves leaving 2 cm of stems. The leaf petioles and leaves (Wasabina) are also sold to chefs for pickling!",
      postHarvestStorage: "Wrap individual rhizomes in moist unbleached muslin cloth and store in perforated plastic bags at 1°C - 3°C.",
      shelfLife: "3 - 4 weeks if cloth is kept consistently damp."
    },
    culinaryApplication: {
      whyChefsBuy: "Grated live at the table on sharkskin (Oroshigane); volatile sweet heat peaks at 5-15 minutes then mellows gracefully.",
      signatureDish: "Hand-Grated Wasabi on Charred Miyazaki A5 Wagyu with Smoked Sea Salt",
      handlingTip: "Never combine with soy sauce in a dish; place directly on the fish or beef."
    }
  }
];

// 500m² Commercial Farm Modeling Data (from PDF Page 12)
const FARM_MODEL_500M2 = {
  totalArea: 500, // m²
  crops: [
    { id: "oyster-leaf", name: "Oyster Leaf (Mertensia maritima)", areaM2: 70, share: "14%", yieldKgM2: 2.2, pricePerKg: 130, estRevenue: 20020, target: "Michelin Seafood & Tasting Menus" },
    { id: "shiso-perilla", name: "Red & Green Shiso (Perilla)", areaM2: 70, share: "14%", yieldKgM2: 4.5, pricePerKg: 45, estRevenue: 14175, target: "Omakase, Cocktails & Modern Fusion" },
    { id: "szechuan-button", name: "Edible Flowers (Buzz Button & Borage)", areaM2: 100, share: "20%", yieldKgM2: 3.2, pricePerKg: 95, estRevenue: 30400, target: "Haute Pastry, Cocktails, Intermezzos" },
    { id: "nepitella", name: "Specialty Culinary Herbs (Nepitella, Pipicha)", areaM2: 80, share: "16%", yieldKgM2: 3.8, pricePerKg: 55, estRevenue: 16720, target: "Fine Dining Sauces & Roast Game" },
    { id: "agretti", name: "Agretti & Crystalline Ice Plant", areaM2: 80, share: "16%", yieldKgM2: 5.0, pricePerKg: 40, estRevenue: 16000, target: "Spring Tasting Menus & Fish Crudo" },
    { id: "sea-kale", name: "Forced Sea Kale (Crambe maritima)", areaM2: 50, share: "10%", yieldKgM2: 2.5, pricePerKg: 85, estRevenue: 10625, target: "Winter Truffle & Haute French Classics" },
    { id: "finger-lime", name: "R&D Trials (Finger Lime / Wasabi in Tubs)", areaM2: 50, share: "10%", yieldKgM2: 2.0, pricePerKg: 80, estRevenue: 8000, target: "Exclusive VIP Chef Collaborations" }
  ],
  totalEstimatedRevenue: 115940,
  recommendedStructure: "High-Tunnel Automated Poly-Greenhouse with Shading Screens, Micro-drip, and Frost Protection"
};
