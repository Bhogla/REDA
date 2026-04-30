import solarWaterImg from '../assets/blog/solar-water.jpg';
import waterInfraImg from '../assets/blog/water-infra.jpg';
import energyEffImg from '../assets/blog/energy-efficiency.jpg';
import caseStudyImg from '../assets/blog/case-study.jpg';
import sustainabilityImg from '../assets/blog/sustainability.jpg';
import solarPanelsImg from '../assets/blog/solar-panels.jpg';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export const categoryColors: Record<string, string> = {
  Solar: 'bg-amber-100 text-amber-700',
  Water: 'bg-sky-100 text-sky-700',
  'Energy Efficiency': 'bg-emerald-100 text-emerald-700',
  'Case Study': 'bg-violet-100 text-violet-700',
  Sustainability: 'bg-teal-100 text-teal-700',
  Infrastructure: 'bg-rose-100 text-rose-700',
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Solar Water Solutions for Modern Buildings',
    slug: 'solar-water-solutions-modern-buildings',
    excerpt:
      'How integrated solar and water systems improve efficiency in commercial infrastructure across Uttarakhand.',
    content: `
## The Convergence of Solar and Water Technology

Modern commercial buildings face a dual challenge: rising energy costs and increasing water demand. Solar water heating systems have emerged as a proven solution that addresses both, delivering measurable savings while reducing carbon footprints.

### How Solar Water Systems Work

Solar water heaters use evacuated tube collectors or flat-plate collectors mounted on rooftops to absorb sunlight and convert it into thermal energy. This energy heats water stored in insulated tanks, providing a reliable supply for commercial kitchens, laundries, hospitals, and hotels.

In Uttarakhand's hill regions, where conventional fuel costs are high due to transportation, solar water systems offer an especially compelling return on investment—typically paying for themselves within 3–4 years.

### Key Benefits for Commercial Buildings

- **Energy savings of 60–80%** on water heating compared to electric geysers or LPG systems
- **Reduced peak electricity demand**, easing pressure on the local grid
- **Low maintenance requirements** with a typical lifespan of 15–20 years
- **Government subsidies** under MNRE schemes covering 30–40% of installation costs

### REDA's Role

REDA member companies have installed over 500 solar water heating systems across hotels, hostels, and government buildings in Uttarakhand. Our standardised quality benchmarks ensure every installation meets BIS specifications, and our after-sales network guarantees ongoing performance monitoring.

### Looking Ahead

With Uttarakhand's tourism sector growing rapidly, the demand for hot water in hospitality will only increase. Integrating solar thermal with heat-pump hybrid systems represents the next frontier—one that REDA is actively piloting in partnership with state agencies.
    `,
    image: solarWaterImg,
    date: 'April 2026',
    category: 'Solar',
    readTime: '6 min read',
  },
  {
    title: 'Sustainable Water Infrastructure in Rural Uttarakhand',
    slug: 'sustainable-water-infrastructure-rural-uttarakhand',
    excerpt:
      'Solar-powered pumping and treatment systems are transforming clean water access in remote hill communities.',
    content: `
## Bridging the Clean Water Gap

Access to clean drinking water remains one of the most pressing challenges in Uttarakhand's remote hill districts. Conventional grid-powered pumping stations are unreliable in areas with erratic power supply, and diesel generators are both expensive and polluting.

### Solar-Powered Water Pumping

Solar submersible and surface pumps have emerged as a game-changer. Powered entirely by photovoltaic panels, these systems operate during daylight hours to fill overhead storage tanks, providing gravity-fed water supply around the clock.

REDA members have deployed solar water pumps in over 120 villages across Chamoli, Pithoragarh, and Bageshwar districts. Each installation serves 50–200 households and eliminates the need for diesel, saving communities ₹40,000–₹80,000 annually.

### Water Treatment Integration

Beyond pumping, solar energy is now powering compact water treatment units that use UV filtration and reverse osmosis. These decentralised treatment plants can process 1,000–5,000 litres per day, providing safe drinking water at a fraction of the cost of bottled alternatives.

### Community Ownership Model

The most successful installations follow a community-ownership model where:

1. **Village Water Committees** manage day-to-day operations
2. **Modest user fees** (₹20–50/month per household) fund maintenance
3. **REDA member companies** provide annual servicing and spare parts at subsidised rates

### Impact Numbers

| Metric | Achievement |
|--------|------------|
| Villages served | 120+ |
| Households benefited | 15,000+ |
| Diesel consumption eliminated | 50,000 litres/year |
| CO₂ emissions avoided | 130 tonnes/year |

### The Road Ahead

The Jal Jeevan Mission's target of piped water to every rural household by 2026 presents an enormous opportunity to integrate solar-powered solutions at scale. REDA is working with district administrations to create model solar water supply schemes that can be replicated statewide.
    `,
    image: waterInfraImg,
    date: 'March 2026',
    category: 'Water',
    readTime: '7 min read',
  },
  {
    title: 'Energy Efficiency in Himalayan Architecture',
    slug: 'energy-efficiency-himalayan-architecture',
    excerpt:
      'Blending traditional building wisdom with modern green technology to create climate-responsive structures.',
    content: `
## Learning from Tradition, Building for Tomorrow

Uttarakhand's traditional architecture—stone walls, slate roofs, south-facing orientation—evolved over centuries to handle extreme cold, heavy snowfall, and seismic activity. Modern construction, however, often ignores these lessons, leading to buildings that are energy-hungry and thermally uncomfortable.

### The Energy Challenge in Hill Buildings

Heating accounts for 40–60% of energy consumption in Uttarakhand's commercial and institutional buildings. Poorly insulated concrete structures rely on electric heaters and blowers, driving up electricity bills and carbon emissions.

### Passive Design Strategies

Energy-efficient design starts before any renewable technology is added:

- **Orientation**: South-facing glazing maximises winter solar gain
- **Thermal mass**: Stone and rammed-earth walls store daytime heat and release it at night
- **Insulation**: Expanded polystyrene (EPS) or rock-wool insulation in walls and roofs can reduce heating demand by 30–50%
- **Natural ventilation**: Cross-ventilation design reduces summer cooling needs

### Active Solar Integration

Once the building envelope is optimised, active systems deliver further savings:

- **Solar PV rooftop systems** (3–10 kW) can offset 70–90% of a building's electricity consumption
- **Solar air heaters** preheat ventilation air in winter, reducing heating loads
- **Building-integrated PV (BIPV)** facades double as cladding and power generators

### REDA's Green Building Initiative

REDA has partnered with the School of Planning and Architecture, Bhopal, and IIT Roorkee to develop a **Himalayan Green Building Rating** system tailored to the region's climate. Pilot projects include:

- A net-zero energy guest house in Auli
- A solar-heated school complex in Munsiyari
- A green retrofitted government office in Almora

### Why It Matters

Buildings constructed today will stand for 50–100 years. Getting the design right now locks in decades of energy savings and sets a precedent for sustainable development across the Himalayan region.
    `,
    image: energyEffImg,
    date: 'March 2026',
    category: 'Energy Efficiency',
    readTime: '8 min read',
  },
  {
    title: 'Case Study: Micro-Grid Powering a Hill Village',
    slug: 'case-study-micro-grid-hill-village',
    excerpt:
      'How a 25 kW solar micro-grid brought reliable electricity to 80 households in a remote Uttarakhand hamlet.',
    content: `
## Background

Khareti is a small hamlet of 80 households in Chamoli district, perched at 2,200 metres elevation. Despite being just 12 km from the nearest road, the village had no grid connection due to difficult terrain and low population density.

Residents relied on kerosene lamps, small diesel generators, and occasional dry-cell batteries. Children studied by candlelight, the village health centre had no refrigeration for vaccines, and women walked hours to charge mobile phones.

### The Solution

In 2025, REDA coordinated a consortium of three member companies to design, install, and commission a **25 kW solar micro-grid** with battery storage:

- **Solar array**: 75 × 335 W monocrystalline panels mounted on community land
- **Battery bank**: 100 kWh lithium iron phosphate (LiFePO₄) storage
- **Distribution**: Underground low-tension cables to all 80 households
- **Smart meters**: Prepaid meters with mobile-based recharge

### Implementation Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| Survey & Design | 2 months | Load assessment, site selection, DPR preparation |
| Procurement | 1 month | Panel, battery, and inverter sourcing |
| Installation | 3 months | Civil works, electrical wiring, commissioning |
| Training | 2 weeks | Local operator training, safety protocols |

### Results After 6 Months

- **Uptime**: 99.2% (only two brief outages due to heavy snowfall)
- **Energy generated**: 28,000 kWh
- **Households connected**: 80/80 (100%)
- **Revenue collected**: ₹1.4 lakh (₹5/kWh tariff)
- **Diesel eliminated**: 4,500 litres
- **CO₂ avoided**: 12 tonnes

### Community Impact

The micro-grid has catalysed broader development:

1. A cold-storage unit for apple and walnut harvests, reducing post-harvest losses by 40%
2. Two new small businesses—a welding shop and a flour mill—creating local employment
3. Extended study hours for 120 school children
4. Reliable vaccine storage at the health centre

### Lessons Learned

- **Community buy-in is critical**: Early engagement with the Village Energy Committee ensured smooth land allocation and social acceptance
- **Right-sized design matters**: Oversizing increases costs; undersizing leads to load-shedding and dissatisfaction
- **Local capacity building**: Training two village youth as micro-grid operators ensures long-term sustainability

### Replicability

REDA has documented this project as a model template. We estimate 200+ similar hamlets in Uttarakhand could benefit from comparable micro-grids, representing a combined opportunity of 5 MW of decentralised solar capacity.
    `,
    image: caseStudyImg,
    date: 'February 2026',
    category: 'Case Study',
    readTime: '9 min read',
  },
  {
    title: 'Uttarakhand\'s Path to a Sustainable Energy Future',
    slug: 'uttarakhand-sustainable-energy-future',
    excerpt:
      'A strategic overview of how state policy, industry collaboration, and community action are shaping renewable energy growth.',
    content: `
## The Opportunity

Uttarakhand possesses exceptional renewable energy resources: high solar irradiance at altitude, abundant small-hydro potential, and growing biomass from agricultural residues. The state's Renewable Energy Policy 2022 targets 2.5 GW of installed renewable capacity by 2030—a threefold increase from current levels.

### Current Renewable Energy Landscape

| Source | Installed Capacity | 2030 Target |
|--------|-------------------|-------------|
| Small Hydro | 800 MW | 1,200 MW |
| Solar PV | 350 MW | 1,000 MW |
| Biomass | 50 MW | 200 MW |
| Wind (pilot) | 5 MW | 100 MW |

### Policy Enablers

Several policy measures are accelerating adoption:

- **Net metering** allows rooftop solar owners to sell excess power to the grid
- **Capital subsidies** of 30–40% for residential and institutional solar installations
- **Green energy corridor** transmission infrastructure connecting renewable-rich districts to load centres
- **Single-window clearance** for projects below 5 MW, reducing approval timelines from 6 months to 45 days

### Industry Collaboration Through REDA

REDA plays a bridging role between policy and implementation:

1. **Standards & Quality**: Developing state-specific quality benchmarks for solar installations
2. **Skill Development**: Training 500+ technicians annually in solar PV installation and maintenance
3. **Market Development**: Organising buyer-seller meets, exhibitions, and awareness campaigns
4. **Policy Advocacy**: Representing industry concerns to UREDA and state government

### Community-Level Action

The most durable impact comes from communities owning their energy transition:

- **Solar cooperatives** in Pauri Garhwal pool resources to install shared rooftop systems
- **Women's self-help groups** in Almora distribute and maintain solar lanterns and home systems
- **Farmer producer organisations** in Udham Singh Nagar are adopting solar dryers for spice and herb processing

### Challenges Remaining

- **Land availability** for ground-mounted solar in hilly terrain
- **Grid integration** of variable renewable power without storage
- **Financing gaps** for small enterprises and rural households
- **Workforce readiness** as technology evolves faster than training curricula

### REDA's Vision

By 2030, REDA envisions Uttarakhand as a **model hill state for renewable energy**—where every school runs on solar, every village has clean water powered by the sun, and every building is designed for energy efficiency. Achieving this will require sustained collaboration between government, industry, communities, and academia.
    `,
    image: sustainabilityImg,
    date: 'January 2026',
    category: 'Sustainability',
    readTime: '7 min read',
  },
  {
    title: 'Rooftop Solar for Commercial Establishments',
    slug: 'rooftop-solar-commercial-establishments',
    excerpt:
      'Why hotels, hospitals, and businesses in Uttarakhand are switching to rooftop solar—and how to get started.',
    content: `
## The Business Case for Rooftop Solar

Commercial electricity tariffs in Uttarakhand range from ₹7–9 per unit, and they're rising. A well-designed rooftop solar system generates power at ₹3–4 per unit over its 25-year lifetime—a saving of 50–60% on energy costs.

### Ideal Candidates

Rooftop solar works best for establishments with:

- **Daytime electricity demand** (offices, hospitals, educational institutions)
- **Large roof area** with minimal shading
- **High electricity bills** (₹15,000+/month)
- **Stable operations** expected over the next 10–15 years

### System Sizing Guide

| Monthly Bill | Recommended System | Roof Area Needed | Approx. Cost |
|-------------|-------------------|------------------|--------------|
| ₹15,000–25,000 | 5 kW | 400 sq ft | ₹2.5–3 lakh |
| ₹25,000–50,000 | 10 kW | 800 sq ft | ₹5–6 lakh |
| ₹50,000–1,00,000 | 25 kW | 2,000 sq ft | ₹12–15 lakh |
| ₹1,00,000+ | 50–100 kW | 4,000–8,000 sq ft | ₹25–50 lakh |

*Costs are indicative and include subsidies where applicable.*

### Financial Incentives

- **MNRE Subsidy**: 30% for systems up to 10 kW; 20% for 10–100 kW (institutional)
- **Accelerated Depreciation**: 40% in the first year for commercial entities
- **Net Metering**: Export excess power and receive credits on your electricity bill
- **Green Financing**: Several banks offer solar loans at 8–10% interest with 5–7 year tenures

### The Installation Process

1. **Site survey** by a REDA-certified installer (free of charge)
2. **System design** and financial proposal within 7 days
3. **Approvals**: Net metering application to UPCL (30–45 days)
4. **Installation**: 3–7 days depending on system size
5. **Commissioning & interconnection**: 7–14 days after installation

### Quality Assurance

REDA member companies adhere to strict quality standards:

- Only BIS-certified panels and inverters
- Structural assessment of roof load-bearing capacity
- DC and AC wiring per IS/IEC standards
- 5-year comprehensive warranty on workmanship
- 25-year performance guarantee on panels

### Success Stories

- **Hotel Himalaya View, Mussoorie**: 20 kW system saving ₹18,000/month
- **District Hospital, Tehri**: 50 kW system powering critical equipment with battery backup
- **Doon School, Dehradun**: 100 kW system achieving 85% daytime energy self-sufficiency

### Getting Started

Contact any REDA member company for a free site assessment, or reach out to us directly through the Contact page. We'll connect you with a certified installer in your area within 48 hours.
    `,
    image: solarPanelsImg,
    date: 'January 2026',
    category: 'Infrastructure',
    readTime: '6 min read',
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
