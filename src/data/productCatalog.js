import { imgPath, productImages } from '../assets/index.js';

const ORIGIN = 'Gujarat, India';
const GRADE = 'A-Grade, Commercial Grade';

const onionVariants = (colorName, imageKey, variantImages = {}) => {
  const hero = imgPath[imageKey];
  const img = (k) => variantImages[k] || hero;
  const isRed = colorName === 'Red';
  return [
    {
      id: 'powder', type: 'Powder', name: `Dehydrated ${colorName} Onion Powder`,
      image: img('powder'),
      specs: [{ label: 'Size', value: isRed ? '80–120 mesh' : '80–100 mesh' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: colorName }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }],
    },
    {
      id: 'flakes', type: 'Flakes', name: `Dehydrated ${colorName} Onion Flakes`,
      image: img('flakes'),
      specs: [{ label: 'Size', value: '8–15 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: colorName }, { label: 'Packing', value: isRed ? '25 kg poly bag in carton' : '14 kg poly bag in carton' }, { label: 'Grade', value: GRADE }],
    },
    {
      id: 'chopped', type: 'Chopped', name: `Dehydrated ${colorName} Onion Chopped`,
      image: img('chopped'),
      specs: [{ label: 'Size', value: '3–5 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: colorName }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }],
    },
    {
      id: 'granules', type: 'Granules', name: `Dehydrated ${colorName} Onion Granules`,
      image: img('granules'),
      specs: [{ label: 'Size', value: isRed ? '40–80 mesh' : '0.5–1 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: colorName }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }],
    },
    {
      id: 'minced', type: 'Minced', name: `Dehydrated ${colorName} Onion Minced`,
      image: img('minced'),
      specs: [{ label: 'Size', value: isRed ? '1–5 mm' : '1–3 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: colorName }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }],
    },
  ];
};

const garlicVariants = () => {
  const hero = imgPath.garlic;
  const p = (k) => productImages[k] || hero;
  return [
    { id: 'powder',   type: 'Powder',   name: 'Dehydrated Garlic Powder',   image: p('GarlicPowder'),   specs: [{ label: 'Size', value: '80–120 mesh' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: 'Cream/Off-white' }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    { id: 'flakes',   type: 'Flakes',   name: 'Dehydrated Garlic Flakes',   image: p('GarlicFlakes'),   specs: [{ label: 'Size', value: '8–15 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: 'Golden Brown' }, { label: 'Packing', value: '14 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    { id: 'chopped',  type: 'Chopped',  name: 'Dehydrated Garlic Chopped',  image: p('GarlicChopped'),  specs: [{ label: 'Size', value: '3–5 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: 'Golden Brown' }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    { id: 'granules', type: 'Granules', name: 'Dehydrated Garlic Granules', image: p('GarlicGranules'), specs: [{ label: 'Size', value: '40–80 mesh' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: 'Golden Brown' }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    { id: 'minced',   type: 'Minced',   name: 'Dehydrated Garlic Minced',   image: p('GarlicMinced'),   specs: [{ label: 'Size', value: '1–3 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Color', value: 'Golden Brown' }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
  ];
};

const powderFlakes = (name, heroKey, productPowder, productFlakes) => {
  const hero = heroKey ? imgPath[heroKey] : null;
  return [
    { id: 'powder', type: 'Powder', name: `${name} Powder`, image: productPowder || hero, specs: [{ label: 'Size', value: '80–100 mesh' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    { id: 'flakes', type: 'Flakes', name: `${name} Flakes`, image: productFlakes || hero, specs: [{ label: 'Size', value: '5–15 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '14–20 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
  ];
};

const powderOnly = (name, heroKey, mesh = '80–100 mesh', productImage) => [{
  id: 'powder', type: 'Powder', name,
  image: productImage || imgPath[heroKey],
  specs: [{ label: 'Size', value: mesh }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }, { label: 'Aroma', value: 'Strong aroma — Indian origin' }],
}];

// ── Unsplash fallback URLs for products without local images ─────────────────
const U = {
  ginger:   'https://images.unsplash.com/photo-1615485500704-8e3b96ef0b11?w=600&q=80',
  lemon:    'https://images.unsplash.com/photo-1587351021759-3772687fe598?w=600&q=80',
  carrot:   'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&q=80',
  greenchili:'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80',
  moringa:  'https://images.unsplash.com/photo-1648978575939-ae27c5e0099a?w=600&q=80',
  moong:    'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&q=80',
  chana:    'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&q=80',
  urad:     'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&q=80',
  soya:     'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&q=80',
  peanut:   'https://images.unsplash.com/photo-1567892737708-6e858ee65df6?w=600&q=80',
  peanutbutter: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80',
};

// ── PRODUCT CATALOG ──────────────────────────────────────────────────────────

export const PRODUCT_CATALOG = {

  // ── Dehydrated Onion ──────────────────────────────────────────────────────
  'red-onion': {
    title: 'Dehydrated Red Onion',
    tagline: 'Powder · Flakes · Chopped · Granules · Minced',
    heroImage: imgPath.redonion,
    category: 'dehydrated',
    variants: onionVariants('Red', 'redonion', {
      flakes:   productImages.RedRedKibble,
      chopped:  productImages.RedRedChopped,
      minced:   productImages.RedRedMinced,
      granules: productImages.RedRedGranules,
      powder:   productImages.RedRedPowder,
    }),
  },

  'white-onion': {
    title: 'Dehydrated White Onion',
    tagline: 'Powder · Flakes · Chopped · Granules · Minced',
    heroImage: imgPath.whiteonion,
    category: 'dehydrated',
    variants: onionVariants('White', 'whiteonion', {
      flakes:   productImages.WhiteKibbled,
      chopped:  productImages.WhiteChopped,
      minced:   productImages.WhiteMinced,
      granules: productImages.WhiteGranules,
      powder:   productImages.WhitePowder,
    }),
  },

  // ── Dehydrated Garlic ─────────────────────────────────────────────────────
  'garlic': {
    title: 'Dehydrated Garlic',
    tagline: 'Powder · Flakes · Chopped · Granules · Minced',
    heroImage: imgPath.garlic,
    category: 'dehydrated',
    variants: garlicVariants(),
  },

  // ── Dehydrated Vegetables ─────────────────────────────────────────────────
  'potato': {
    title: 'Dehydrated Potato',
    tagline: 'Powder · Flakes',
    heroImage: imgPath.potato,
    category: 'dehydrated',
    variants: [
      { id: 'powder', type: 'Powder', name: 'Dehydrated Potato Powder', image: productImages.PotatoPowder || imgPath.potato, specs: [{ label: 'Size', value: '80–100 mesh' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
      { id: 'flakes', type: 'Flakes', name: 'Dehydrated Potato Flakes', image: productImages.PotatoFlakes || imgPath.potato, specs: [{ label: 'Size', value: '5–15 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    ],
  },

  'carrot': {
    title: 'Dehydrated Carrot',
    tagline: 'Powder · Flakes',
    heroImage: productImages.Carrot || imgPath.potato,
    category: 'dehydrated',
    variants: powderFlakes('Dehydrated Carrot', null, productImages.CarrotPowder || productImages.Carrot || imgPath.potato, productImages.Carrot || imgPath.potato),
  },

  'ginger': {
    title: 'Dehydrated Ginger',
    tagline: 'Powder · Flakes',
    heroImage: productImages.Ginger || imgPath.turmeric,
    category: 'dehydrated',
    variants: powderFlakes('Dehydrated Ginger', null, productImages.Ginger || imgPath.turmeric, productImages.Ginger || imgPath.turmeric),
  },

  'mint': {
    title: 'Dehydrated Mint',
    tagline: 'Powder · Flakes',
    heroImage: imgPath.mint,
    category: 'dehydrated',
    variants: [
      { id: 'powder', type: 'Powder', name: 'Dehydrated Mint Powder', image: productImages.MintPowder || imgPath.mint, specs: [{ label: 'Size', value: '80–100 mesh' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '20–25 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
      { id: 'flakes', type: 'Flakes', name: 'Dehydrated Mint Flakes', image: imgPath.mint, specs: [{ label: 'Size', value: '5–15 mm' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '14–20 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] },
    ],
  },

  'lemon': {
    title: 'Dehydrated Lemon',
    tagline: 'Powder · Flakes',
    heroImage: productImages.Lemon || imgPath.amchur,
    category: 'dehydrated',
    variants: powderFlakes('Dehydrated Lemon', null, productImages.Lemon || imgPath.amchur, productImages.Lemon || imgPath.amchur),
  },

  // ── Spices ────────────────────────────────────────────────────────────────
  'green-chili-powder': {
    title: 'Green Chili Powder',
    tagline: 'Fresh heat — export grade',
    heroImage: productImages.GreenChili || imgPath.redchili,
    category: 'spices',
    variants: powderOnly('Green Chili Powder', null, '80–100 mesh', productImages.GreenChili || imgPath.redchili),
  },

  'red-chili-powder': {
    title: 'Red Chili Powder',
    tagline: 'Vibrant heat — export grade',
    heroImage: imgPath.redchili,
    category: 'spices',
    variants: powderOnly('Red Chili Powder', 'redchili'),
  },

  'amchur-powder': {
    title: 'Amchur Powder',
    tagline: 'Tangy dried mango — export quality',
    heroImage: imgPath.amchur,
    category: 'spices',
    variants: powderOnly('Amchur Powder', 'amchur', '80–100 mesh', productImages.AmchurPowder),
  },

  'turmeric-powder': {
    title: 'Turmeric Powder',
    tagline: 'Bright golden — Indian origin',
    heroImage: imgPath.turmeric,
    category: 'spices',
    variants: powderOnly('Turmeric Powder', 'turmeric'),
  },

  'cumin-powder': {
    title: 'Cumin Powder',
    tagline: 'Aromatic ground cumin',
    heroImage: imgPath.cumin,
    category: 'spices',
    variants: powderOnly('Cumin Powder', 'cumin'),
  },

  'coriander-powder': {
    title: 'Coriander Powder',
    tagline: 'Fresh-ground coriander seeds',
    heroImage: imgPath.coriander,
    category: 'spices',
    variants: powderOnly('Coriander Powder', 'coriander'),
  },

  // ── Fruit Processing ──────────────────────────────────────────────────────
  'mango-pulp': {
    title: 'Kesar Mango Pulp',
    tagline: 'Premium pulp for export',
    heroImage: imgPath.mangopulp,
    category: 'fruit',
    variants: [{
      id: 'pulp', type: 'Pulp', name: 'Kesar Mango Pulp', image: imgPath.mangopulp,
      specs: [{ label: 'Origin', value: 'Gujarat & Maharashtra, India' }, { label: 'Packing', value: 'Aseptic drums / cans — as per order' }, { label: 'Grade', value: 'Export quality' }, { label: 'Use', value: 'Beverages, desserts, food processing' }],
    }],
  },

  // ── Health & Wellness ─────────────────────────────────────────────────────
  'moringa-powder': {
    title: 'Moringa Powder',
    tagline: 'Superfood — rich in nutrients',
    heroImage: productImages.MoringaPowder || imgPath.mint,
    category: 'health',
    variants: powderOnly('Moringa Powder', null, '80–100 mesh', productImages.MoringaPowder || productImages.MintPowder || imgPath.mint),
  },

  // ── Pulses & Protein ──────────────────────────────────────────────────────
  'moong-dal': {
    title: 'Moong Dal (Split Yellow Mung Beans)',
    tagline: 'Premium quality split green gram',
    heroImage: productImages.Moongdal || U.moong,
    category: 'pulses',
    variants: [{ id: 'whole', type: 'Whole', name: 'Moong Dal (Split Yellow Mung Beans)', image: productImages.Moongdal || U.moong, specs: [{ label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '25–50 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] }],
  },

  'chana-dal': {
    title: 'Chana Dal (Split Chickpeas)',
    tagline: 'Split chickpea — export quality',
    heroImage: productImages.ChanaDal || U.chana,
    category: 'pulses',
    variants: [{ id: 'whole', type: 'Whole', name: 'Chana Dal (Split Chickpeas)', image: productImages.ChanaDal || U.chana, specs: [{ label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '25–50 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] }],
  },

  'urad-dal': {
    title: 'Urad Dal (Split Black Gram)',
    tagline: 'Black gram — premium grade',
    heroImage: productImages.UradDal || U.urad,
    category: 'pulses',
    variants: [{ id: 'whole', type: 'Whole', name: 'Urad Dal (Split Black Gram)', image: productImages.UradDal || U.urad, specs: [{ label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '25–50 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] }],
  },

  'soya-paneer': {
    title: 'Soya Paneer',
    tagline: 'High-protein soy product',
    heroImage: productImages.SoyaPaneer || U.soya,
    category: 'pulses',
    variants: [{ id: 'block', type: 'Block', name: 'Soya Paneer', image: productImages.SoyaPaneer || U.soya, specs: [{ label: 'Origin', value: ORIGIN }, { label: 'Packing', value: 'As per order' }, { label: 'Grade', value: GRADE }] }],
  },

  // ── Peanut Products ───────────────────────────────────────────────────────
  'peanut-butter': {
    title: 'Peanut Butter',
    tagline: 'Creamy & natural — export quality',
    heroImage: productImages.PeanutButter || U.peanutbutter,
    category: 'peanut',
    variants: [{ id: 'creamy', type: 'Creamy', name: 'Peanut Butter', image: productImages.PeanutButter || U.peanutbutter, specs: [{ label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '1 kg / 5 kg / custom jars' }, { label: 'Grade', value: 'Export quality' }] }],
  },

  'raw-peanuts': {
    title: 'Raw Peanuts',
    tagline: 'Bold 9/11 variety — Gujarat origin',
    heroImage: productImages.RawPeanuts || U.peanut,
    category: 'peanut',
    variants: [{ id: 'raw', type: 'Raw', name: 'Raw Peanuts', image: productImages.RawPeanuts || U.peanut, specs: [{ label: 'Variety', value: 'Bold 9/11, J-11' }, { label: 'Origin', value: ORIGIN }, { label: 'Packing', value: '25–50 kg poly bag in carton' }, { label: 'Grade', value: GRADE }] }],
  },
};

// ── Category metadata ─────────────────────────────────────────────────────────

export const CATEGORIES = [
  { id: 'all',        label: 'All Products',          emoji: '🌿' },
  { id: 'dehydrated', label: 'Dehydrated Products',   emoji: '🧅' },
  { id: 'spices',     label: 'Spice Products',        emoji: '🌶️' },
  { id: 'fruit',      label: 'Fruit Processing',      emoji: '🥭' },
  { id: 'health',     label: 'Health & Wellness',     emoji: '🌿' },
  { id: 'pulses',     label: 'Pulses & Protein',      emoji: '🌾' },
  { id: 'peanut',     label: 'Peanut Products',       emoji: '🥜' },
];

export const getProductById = (productId) => PRODUCT_CATALOG[productId] || null;

export const getProductsByCategory = (categoryId) => {
  return Object.entries(PRODUCT_CATALOG)
    .filter(([, p]) => categoryId === 'all' || p.category === categoryId)
    .map(([id, p]) => ({ id, ...p }));
};
