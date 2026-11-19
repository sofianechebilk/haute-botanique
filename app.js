// ============================================================================
// HAUTE BOTANIQUE - AGRONOMIC PORTAL APPLICATION ENGINE
// Focused entirely on helping specialty growers, farmers, and greenhouse producers
// ============================================================================

// State Management
const APP_STATE = {
  currentCategory: 'all',
  currentDifficulty: 'all',
  currentProfile: 'all',
  searchQuery: ''
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initPortal();
});

function initPortal() {
  renderCatalog();
  setupFilterEvents();
  setupSimulator();
  setupPairingMatrix();
  setupRoiCalculator();
}

// Render Crop Directory Cards
function renderCatalog() {
  const container = document.getElementById('catalogGrid');
  if (!container) return;

  const filtered = BOTANICAL_DATABASE.filter(item => {
    const matchCat = APP_STATE.currentCategory === 'all' || item.category === APP_STATE.currentCategory;
    const matchDiff = APP_STATE.currentDifficulty === 'all' || item.growingSpecs.difficulty.toLowerCase().includes(APP_STATE.currentDifficulty.toLowerCase());
    const matchProf = APP_STATE.currentProfile === 'all' || item.culinaryProfile === APP_STATE.currentProfile;
    
    const query = APP_STATE.searchQuery.toLowerCase();
    const matchSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      item.scientificName.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.culinaryApplication.signatureDish.toLowerCase().includes(query);

    return matchCat && matchDiff && matchProf && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <p style="font-size: 1.2rem; color: var(--gold-light);">No crops found matching your agronomic criteria.</p>
        <p style="color: var(--text-dim); margin-top: 0.5rem;">Try adjusting the cultivation filters or search term.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const diffClass = getDifficultyClass(item.growingSpecs.difficulty);
    return `
      <article class="botanical-card" data-id="${item.id}">
        <div class="card-image-box">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="card-badges">
            <span class="badge-tag">${item.badge}</span>
            <span class="badge-tag" style="background: rgba(212, 175, 55, 0.2); color: var(--gold-light);">${item.rarity}</span>
          </div>
          <span class="badge-difficulty ${diffClass}">${item.growingSpecs.difficulty} Cultivation</span>
        </div>

        <div class="card-body">
          <div class="card-header">
            <h3 class="card-title">
              <a href="plant.html?id=${item.id}" style="color: #ffffff; text-decoration: none;">${item.name}</a>
            </h3>
            <p class="card-scientific">${item.scientificName}</p>
          </div>

          <p class="card-flavor">${item.summary}</p>

          <div class="card-dish-preview">
            <span class="dish-label">Wholesale Chef Valuation</span>
            <span class="dish-name" style="color: var(--gold-light); font-weight: 700;">${item.farmerEconomics.marketPrice}</span>
          </div>

          <div class="card-specs">
            <div class="spec-cell">
              <span class="spec-label">Sun & Exposure</span>
              <span class="spec-val">${item.growingSpecs.sunExposure.split(' ')[0]}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-label">Days to Harvest</span>
              <span class="spec-val">${item.growingSpecs.daysToHarvest.split(' ')[0]} Days</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="price-box">
              <span class="price-amount" style="font-size: 0.92rem; color: var(--gold-light);">${item.farmerEconomics.yieldPerM2.split(' ')[0]} / m²</span>
              <span class="price-unit">Marketable Yield</span>
            </div>

            <div class="card-actions">
              <a href="plant.html?id=${item.id}" class="btn-primary" style="padding: 0.55rem 1.1rem; font-size: 0.85rem; text-decoration: none;">
                View Cultivation Guide →
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function getDifficultyClass(diff) {
  const d = diff.toLowerCase();
  if (d.includes('low')) return 'diff-low';
  if (d.includes('mod')) return 'diff-moderate';
  return 'diff-high';
}

// Setup Filters & Search
function setupFilterEvents() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      APP_STATE.searchQuery = e.target.value;
      renderCatalog();
    });
  }

  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      APP_STATE.currentCategory = pill.dataset.category;
      renderCatalog();
    });
  });

  const diffSelect = document.getElementById('difficultyFilter');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      APP_STATE.currentDifficulty = e.target.value;
      renderCatalog();
    });
  }

  const profileSelect = document.getElementById('profileFilter');
  if (profileSelect) {
    profileSelect.addEventListener('change', (e) => {
      APP_STATE.currentProfile = e.target.value;
      renderCatalog();
    });
  }
}

// 500m² Commercial Farm Simulator (from PDF Page 12)
function setupSimulator() {
  const tableBody = document.getElementById('farmTableBody');
  if (!tableBody) return;

  renderSimulatorTable();

  const scaleSlider = document.getElementById('farmScaleSlider');
  if (scaleSlider) {
    scaleSlider.addEventListener('input', (e) => {
      const scale = parseFloat(e.target.value);
      document.getElementById('farmScaleVal').textContent = `${(500 * scale).toFixed(0)} m²`;
      renderSimulatorTable(scale);
    });
  }
}

function renderSimulatorTable(scale = 1.0) {
  const tableBody = document.getElementById('farmTableBody');
  if (!tableBody) return;

  let totalRevUSD = 0;
  let totalKgYield = 0;

  tableBody.innerHTML = FARM_MODEL_500M2.crops.map(crop => {
    const scaledArea = (crop.areaM2 * scale).toFixed(0);
    const scaledYield = (crop.yieldKgM2 * crop.areaM2 * scale).toFixed(1);
    const scaledRev = crop.estRevenue * scale;
    totalRevUSD += scaledRev;
    totalKgYield += parseFloat(scaledYield);

    return `
      <tr>
        <td style="font-weight: 600;">
          <a href="plant.html?id=${crop.id}" style="color: var(--gold-light); text-decoration: underline;" title="Click to open dedicated agronomic guide">
            ${crop.name}
          </a>
        </td>
        <td>${scaledArea} m² <span style="font-size:0.75rem; color:var(--text-dim);">(${crop.share})</span></td>
        <td>${scaledYield} kg</td>
        <td style="color: #ffffff; font-weight: 700;">$${scaledRev.toLocaleString()}</td>
        <td style="font-size: 0.8rem; color: var(--text-muted);">${crop.target}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('simTotalRev').textContent = `$${totalRevUSD.toLocaleString()}`;
  document.getElementById('simTotalYield').textContent = `${totalKgYield.toFixed(0)} kg / year`;
  const chefsSupplied = Math.round(totalRevUSD / 4200);
  document.getElementById('simChefsCount').textContent = `${chefsSupplied} Fine Dining Kitchens`;
}

// Haute Pairing Matrix
const CHEF_PAIRING_MATRIX = [
  {
    ingredient: "Raw Oysters & Belon",
    recommendedBotanicals: [
      { name: "Oyster Leaf", id: "oyster-leaf" },
      { name: "Crystalline Ice Plant", id: "crystalline-ice-plant" },
      { name: "Australian Finger Lime", id: "finger-lime" },
      { name: "Borage Starflowers", id: "borage-blossoms" }
    ],
    chefNote: "Substitutes traditional lemon and mignonette with botanical crunch and natural oceanic salinity."
  },
  {
    ingredient: "Wagyu Beef A5 & Prime Cuts",
    recommendedBotanicals: [
      { name: "Genuine Shizuoka Wasabi", id: "genuine-wasabi" },
      { name: "Australian Finger Lime", id: "finger-lime" },
      { name: "Pipicha Herb", id: "pipicha" }
    ],
    chefNote: "Cuts through intense marbling fats with sharp citrus caviar pops and fresh volatile isothiocyanates."
  },
  {
    ingredient: "Scallops & Langoustines",
    recommendedBotanicals: [
      { name: "Crystalline Ice Plant", id: "crystalline-ice-plant" },
      { name: "Marsh Samphire", id: "samphire" },
      { name: "Crosnes", id: "crosnes" },
      { name: "Red & Green Shiso", id: "shiso-perilla" }
    ],
    chefNote: "Complements sweet ocean shellfish with crisp saline burst and anise-mint aromatics."
  },
  {
    ingredient: "Foie Gras & Game Birds",
    recommendedBotanicals: [
      { name: "Oca Confit", id: "oca" },
      { name: "Nepitella", id: "nepitella" },
      { name: "Sea Kale Shoots", id: "sea-kale" }
    ],
    chefNote: "Balances unctuous liver and duck richness with sweet Andean acidity and mineral greens."
  },
  {
    ingredient: "Haute Pastry & Desserts",
    recommendedBotanicals: [
      { name: "Szechuan Buzz Button", id: "szechuan-button" },
      { name: "Yacon Ground Apple", id: "yacon" }
    ],
    chefNote: "Natural sugar-sparing herbs and electrifying mouthfeel sensations for unforgettable dessert courses."
  }
];

function setupPairingMatrix() {
  const tabsContainer = document.getElementById('pairingTabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = CHEF_PAIRING_MATRIX.map((p, idx) => `
    <button class="ingredient-btn ${idx === 0 ? 'active' : ''}" onclick="selectPairing(${idx})">
      ${p.ingredient}
    </button>
  `).join('');

  selectPairing(0);
}

function selectPairing(index) {
  const pair = CHEF_PAIRING_MATRIX[index];
  if (!pair) return;

  document.querySelectorAll('.ingredient-btn').forEach((b, idx) => {
    b.classList.toggle('active', idx === index);
  });

  document.getElementById('pairMainTitle').textContent = `High-End Culinary Synergy for: ${pair.ingredient}`;
  document.getElementById('pairChefNotes').textContent = `"${pair.chefNote}"`;

  const chipsContainer = document.getElementById('pairChipsContainer');
  chipsContainer.innerHTML = pair.recommendedBotanicals.map(bot => {
    return `
      <a href="plant.html?id=${bot.id}" class="pair-chip" style="text-decoration: none;" title="Open complete cultivation guide for ${bot.name}">
        <span>🌱</span>
        <span>${bot.name} →</span>
      </a>
    `;
  }).join('');
}

// ============================================================================
// PILLAR 3: ROI & PACKAGING COST CALCULATOR LOGIC
// ============================================================================

function setupRoiCalculator() {
  const inputs = [
    'calcPowerCost',
    'calcPackCost',
    'calcLeavesPerPack',
    'calcVolume',
    'calcLaborCost',
    'calcNutrientCost',
    'calcMargin'
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateRoiCalculator);
    }
  });

  updateRoiCalculator();
}

function updateRoiCalculator() {
  const powerCost = parseFloat(document.getElementById('calcPowerCost')?.value || 350);
  const packCost = parseFloat(document.getElementById('calcPackCost')?.value || 0.75);
  const leavesPerPack = parseInt(document.getElementById('calcLeavesPerPack')?.value || 50);
  const volume = parseInt(document.getElementById('calcVolume')?.value || 4000);
  const laborCost = parseFloat(document.getElementById('calcLaborCost')?.value || 500);
  const nutrientCost = parseFloat(document.getElementById('calcNutrientCost')?.value || 120);
  const marginPercent = parseInt(document.getElementById('calcMargin')?.value || 40);

  // Update badge labels
  const powerBadge = document.getElementById('calcPowerVal');
  if (powerBadge) powerBadge.textContent = `$${powerCost}`;

  const packBadge = document.getElementById('calcPackVal');
  if (packBadge) packBadge.textContent = `$${packCost.toFixed(2)}`;

  const leavesBadge = document.getElementById('calcLeavesPerPackVal');
  if (leavesBadge) leavesBadge.textContent = `${leavesPerPack} leaves`;

  const volumeBadge = document.getElementById('calcVolumeVal');
  if (volumeBadge) volumeBadge.textContent = `${volume.toLocaleString()} leaves`;

  const laborBadge = document.getElementById('calcLaborVal');
  if (laborBadge) laborBadge.textContent = `$${laborCost}`;

  const nutrientBadge = document.getElementById('calcNutrientVal');
  if (nutrientBadge) nutrientBadge.textContent = `$${nutrientCost}`;

  const marginBadge = document.getElementById('calcMarginVal');
  if (marginBadge) marginBadge.textContent = `${marginPercent}%`;

  // Mathematical Economics
  const numPacks = volume / leavesPerPack;
  const totalPackagingCost = numPacks * packCost;
  const totalMonthlyExpenses = powerCost + laborCost + nutrientCost + totalPackagingCost;
  const breakEvenCostPerLeaf = totalMonthlyExpenses / volume;

  // Selling price guaranteeing at least target net margin:
  // Price = Cost / (1 - Margin%)
  const marginDecimal = marginPercent / 100;
  const minSellingPricePerLeaf = breakEvenCostPerLeaf / (1 - marginDecimal);
  const minPackPrice = minSellingPricePerLeaf * leavesPerPack;
  const monthlyGross = minSellingPricePerLeaf * volume;
  const monthlyNet = monthlyGross - totalMonthlyExpenses;
  const annualNet = monthlyNet * 12;
  const packagingShare = (totalPackagingCost / totalMonthlyExpenses) * 100;

  // Update Output Elements
  const resPricePerLeaf = document.getElementById('resPricePerLeaf');
  if (resPricePerLeaf) resPricePerLeaf.textContent = `$${minSellingPricePerLeaf.toFixed(2)}`;

  const resMarginGuarantee = document.getElementById('resMarginGuarantee');
  if (resMarginGuarantee) resMarginGuarantee.textContent = `Guarantees ${marginPercent}% Net Profit Margin`;

  const resPackPrice = document.getElementById('resPackPrice');
  if (resPackPrice) resPackPrice.textContent = `$${minPackPrice.toFixed(2)}`;

  const resCostPerLeaf = document.getElementById('resCostPerLeaf');
  if (resCostPerLeaf) resCostPerLeaf.textContent = `$${breakEvenCostPerLeaf.toFixed(2)}`;

  const resTotalExpenses = document.getElementById('resTotalExpenses');
  if (resTotalExpenses) resTotalExpenses.textContent = `$${totalMonthlyExpenses.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  const resPackagingShare = document.getElementById('resPackagingShare');
  if (resPackagingShare) resPackagingShare.textContent = `$${totalPackagingCost.toFixed(2)} (${packagingShare.toFixed(1)}%)`;

  const resMonthlyGross = document.getElementById('resMonthlyGross');
  if (resMonthlyGross) resMonthlyGross.textContent = `$${monthlyGross.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  const resMonthlyNet = document.getElementById('resMonthlyNet');
  if (resMonthlyNet) resMonthlyNet.textContent = `$${monthlyNet.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  const resAnnualNet = document.getElementById('resAnnualNet');
  if (resAnnualNet) resAnnualNet.textContent = `$${annualNet.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  // Competitiveness Analysis
  const compBox = document.getElementById('resMarketComp');
  const compPriceSpan = document.getElementById('resCompPrice');
  if (compPriceSpan) compPriceSpan.textContent = `$${minSellingPricePerLeaf.toFixed(2)}`;

  if (compBox) {
    if (minSellingPricePerLeaf <= 0.45) {
      compBox.className = 'market-comp-box comp-green';
      compBox.innerHTML = `
        <strong>✅ Highly Competitive with Michelin Purveyors:</strong>
        <p>At <strong>$${minSellingPricePerLeaf.toFixed(2)}</strong>/leaf, your price is well below the $0.50 - $0.65/leaf Californian & Parisian purveyor benchmark. This gives you strong commercial leverage to win weekly fine-dining standing orders while securing a guaranteed <strong>${marginPercent}% clean profit margin</strong>.</p>
      `;
    } else if (minSellingPricePerLeaf <= 0.60) {
      compBox.className = 'market-comp-box comp-yellow';
      compBox.innerHTML = `
        <strong>⚠️ Aligned with Market Wholesale Benchmark:</strong>
        <p>At <strong>$${minSellingPricePerLeaf.toFixed(2)}</strong>/leaf, your pricing aligns directly with standard luxury restaurant wholesale ($0.50 - $0.60/leaf). Emphasize morning-harvested freshness and cold-chain reliability (2°C-4°C) to secure executive chef commitments.</p>
      `;
    } else {
      compBox.className = 'market-comp-box comp-red';
      compBox.innerHTML = `
        <strong>🚨 Cost Optimization Recommended:</strong>
        <p>At <strong>$${minSellingPricePerLeaf.toFixed(2)}</strong>/leaf, your minimum price exceeds average restaurant wholesale comfort levels. Consider increasing planting density or scaling monthly volume above ${volume.toLocaleString()} leaves to lower unit production costs.</p>
      `;
    }
  }
}
