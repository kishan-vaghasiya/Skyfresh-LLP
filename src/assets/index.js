export const imgPath = {
    logo:       require('./Images/Logo2.png'),
    logo1:      require('./Images/Logo2.png'),
    redonion:   require('./Images/red_onion.png'),
    pinkonion:  require('./Images/pink_onion.png'),
    whiteonion: require('./Images/white_onion.png'),
    garlic:     require('./Images/garlic.png'),
    potato:     require('./Images/potato.png'),
    amchur:     require('./Images/amchur.png'),
    mint:       require('./Images/mint.png'),
    turmeric:   require('./Images/turmeric.png'),
    cumin:      require('./Images/cumin.png'),
    coriander:  require('./Images/coriander.png'),
    redchili:   require('./Images/redchili.png'),
    mangopulp:  require('./Images/mango_pulp.png'),
};

/** Normalize webpack require() or URL strings for <img src> */
export function resolveImage(src) {
  if (!src) return '';
  if (typeof src === 'string') return src;
  return src.default || src;
}

export const productImages = {
  RedRedKibble:   require('./Product/RedKibbled.png'),
  RedRedChopped:  require('./Product/RedChopped.png'),
  RedRedMinced:   require('./Product/RedMinced.png'),
  RedRedGranules: require('./Product/RedGranules.png'),
  RedRedPowder:   require('./Product/RedPowder.png'),
  WhiteKibbled:   require('./Product/WhiteKibbled.png'),
  WhiteChopped:   require('./Product/WhiteChopped.png'),
  WhiteMinced:    require('./Product/WhiteMinced.png'),
  WhiteGranules:  require('./Product/WhiteGranules.png'),
  WhitePowder:    require('./Product/WhitePowder.png'),
  GarlicCloves:   require('./Product/GarlicCloves.png'),
  GarlicFlakes:   require('./Product/GarlicFlakes.png'),
  GarlicChopped:  require('./Product/GarlicChopped.png'),
  GarlicMinced:   require('./Product/GarlicMinced.png'),
  GarlicGranules: require('./Product/GarlicGranules.png'),
  GarlicPowder:   require('./Product/GarlicPowder.png'),
  PotatoFlakes:   require('./Product/PotatoFlakes.png'),
  PotatoGranules: require('./Product/PotatoGranules.png'),
  PotatoPowder:   require('./Product/PotatoPowder.png'),
  MintLeaves:     require('./Product/MintLeaves.png'),
  MintPowder:     require('./Product/MintPowder.png'),
  AmchurPowder:   require('./Product/AmchurPowder.png'),
  Carrot:         require('./Product/Carrot.png'),
  CarrotPowder:   require('./Product/CarrotPowder.png'),
  Lemon:          require('./Product/Lemon.png'),
  GreenChili:     require('./Product/Greenchili.png'),
  Ginger:         require('./Product/Ginger.png'),
  Moongdal:       require('./Product/Moongdal.png'),
  ChanaDal:       require('./Product/Chanadal.png'),
  UradDal:        require('./Product/Uraddal.png'),
  SoyaPaneer:     require('./Product/Soyapaneer.png'),
  PeanutButter:   require('./Product/Peanutbutter.png'),
  RawPeanuts:     require('./Product/RawPeanuts.png'),
  MoringaPowder:   require('./Product/MoringaPowder.png'),
};
