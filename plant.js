// ============================================================================
// HAUTE BOTANIQUE - DEDICATED PLANT PAGE CONTROLLER
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadPlantData();
});

function loadPlantData() {
  const urlParams = new URLSearchParams(window.location.search);
  let plantId = urlParams.get('id');

  // Fallback to first crop if id is missing or not found
  if (!plantId || !BOTANICAL_DATABASE.some(b => b.id === plantId)) {
    plantId = 'oyster-leaf';
  }

  const plant = BOTANICAL_DATABASE.find(b => b.id === plantId);
  if (!plant) return;

  // Set Page Title
  document.title = `${plant.name} (${plant.scientificName}) · Complete Cultivation & Harvesting Guide`;

  // Breadcrumbs & Hero
  document.getElementById('breadcrumbCurrent').textContent = plant.name;
  document.getElementById('plantImage').src = plant.image;
  document.getElementById('plantImage').alt = plant.name;
  document.getElementById('plantName').textContent = plant.name;
  document.getElementById('plantScientific').textContent = plant.scientificName;
  document.getElementById('plantSummary').textContent = plant.summary;

  document.getElementById('plantBadge').textContent = plant.badge;
  document.getElementById('plantDifficultyBadge').textContent = `${plant.growingSpecs.difficulty} Cultivation Difficulty`;
  document.getElementById('plantViabilityBadge').textContent = plant.farmerEconomics.commercialViability;

  // Quick Matrix
  document.getElementById('matClimate').textContent = plant.growingSpecs.climate;
  document.getElementById('matSun').textContent = plant.growingSpecs.sunExposure;
  document.getElementById('matSoil').textContent = `${plant.growingSpecs.soilType} (pH ${plant.growingSpecs.soilPH})`;
  document.getElementById('matGerm').textContent = plant.growingSpecs.germinationTime;
  document.getElementById('matSpacing').textContent = plant.growingSpecs.spacing;
  document.getElementById('matDays').textContent = plant.growingSpecs.daysToHarvest;
  document.getElementById('matGreenhouse').textContent = plant.growingSpecs.greenhouseSuitability;
  document.getElementById('matWater').textContent = plant.growingSpecs.waterRequirements;

  // Section 1: Detailed Cultivation Steps
  document.getElementById('guideSeedPrep').textContent = plant.cultivationGuide.seedPrep;
  document.getElementById('guideSowing').textContent = plant.cultivationGuide.sowingTransplant;
  document.getElementById('guideFertility').textContent = plant.cultivationGuide.soilFertility;
  document.getElementById('guideIrrigation').textContent = plant.cultivationGuide.irrigationSalinity;
  document.getElementById('guidePests').textContent = plant.cultivationGuide.pestsDisease;

  // Section 2: Harvesting & Post-Harvest
  document.getElementById('harvTiming').textContent = plant.harvestingAndPacking.timing;
  document.getElementById('harvMethod').textContent = plant.harvestingAndPacking.method;
  document.getElementById('harvStorage').textContent = plant.harvestingAndPacking.postHarvestStorage;
  document.getElementById('harvShelfLife').textContent = plant.harvestingAndPacking.shelfLife;

  // Section 3: Culinary & Haute Gastronomy
  document.getElementById('culinaryWhy').textContent = plant.culinaryApplication.whyChefsBuy;
  document.getElementById('culinaryDish').textContent = plant.culinaryApplication.signatureDish;
  document.getElementById('culinaryHandling').textContent = `${plant.culinaryApplication.handlingTip}`;

  // Right Sidebar: Economics for Farmers
  document.getElementById('econPrice').textContent = plant.farmerEconomics.marketPrice;
  document.getElementById('econYield').textContent = plant.farmerEconomics.yieldPerM2;
  document.getElementById('econDemand').textContent = plant.farmerEconomics.chefDemandLevel;
  document.getElementById('econBreakEven').textContent = plant.farmerEconomics.breakEvenCycle;
  document.getElementById('econDiff').textContent = plant.growingSpecs.difficulty;
}
