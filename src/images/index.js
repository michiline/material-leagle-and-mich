import ratios from './ratios'
import galleryText from './text'

const imgUrl = `${process.env.PUBLIC_URL}/img`

const numberOfImages = {
  slideshow: 5,
  blogs: {
    'srilanka-beaches': 25,
    srilanka: 65,
    'srilanka-10': 16,
    motovun: 13,
    kamacnik: 16,
    tara: 20,
    krka: 11,
    soca: 40,
    kuba: 41,
  },
  gallery: {
    srilanka: 255,
    motovun: 29,
    kamacnik: 77,
    tara: 52,
    krka: 35,
    cres: 42,
    losinj: 105,
    soca: 86,
    istra: 60,
    kalnik: 44,
    gerlitzen: 10,
    kuba: 247,
    london: 59,
    budimpesta: 65,
    novi: 116,
    mljet: 66,
    lastovo: 40,
    vransko: 11,
    zagreb: 54,
    tabor: 10,
    plitvice: 30,
    pariz: 110,
    nassfeld: 19,
    risnjak: 25,
    trakoscan: 11,
    barcelona: 55,
    krupa: 25,
    dugi: 82,
    brijuni: 22,
    mitrovica: 12,
    fuzine: 6
  }
}

export const getRandomImages = ({ length }) => {
  const srcs = []
  const ratioEntries = Object.entries(ratios)
  const images = [...Array(length)].map(elem => {
    const randomEntry = ratioEntries[Math.floor(Math.random() * (ratioEntries.length - 1))]
    const name = randomEntry[0]
    let index = Math.floor(Math.random() * (randomEntry[1].length - 1))
    while (srcs.includes(`/gallery/${name}/swipe/${index}`)) {
      index = Math.floor(Math.random() * (randomEntry[1].length - 1))
    }
    srcs.push(`/gallery/${name}/swipe/${index}`)
    return { src: `${imgUrl}/gallery/${name}/img${index}.jpg`, url: `/gallery/${name}` }
  })
  return images
}

export const getCovers = ({ type, name }) => {return { src: `${imgUrl}/covers/${type}/${name}.jpg` }}

export const getBoxes = (name) => {return { src: `${imgUrl}/boxes/${name}.jpg` }}

export const getGalleryBoxesImages = () => [
  {
    img: getBoxes('srilanka'),
    title: 'Šri Lanka',
    url: '/gallery/srilanka'
  },
  {
    img: getBoxes('motovun'),
    title: 'Motovun',
    url: '/gallery/motovun'
  },
  {
    img: getBoxes('kamacnik'),
    title: 'Kamačnik',
    url: '/gallery/kamacnik'
  },
  {
    img: getBoxes('tara'),
    title: 'Tara',
    url: '/gallery/tara'
  },
  {
    img: getBoxes('krka'),
    title: 'Krka',
    url: '/gallery/krka'
  },
  {
    img: getBoxes('cres'),
    title: 'Cres',
    url: '/gallery/cres'
  },
  {
    img: getBoxes('losinj'),
    title: 'Mali Lošinj',
    url: '/gallery/losinj'
  },
  {
    img: getBoxes('soca'),
    title: 'Soča',
    url: '/gallery/soca'
  },
  {
    img: getBoxes('istra'),
    title: 'Istra',
    url: '/gallery/istra'
  },
  {
    img: getBoxes('kalnik'),
    title: 'Kalnik',
    url: '/gallery/kalnik'
  },
  {
    img: getBoxes('gerlitzen'),
    title: 'Gerlitzen',
    url: '/gallery/gerlitzen'
  },
  {
    img: getBoxes('kuba'),
    title: 'Kuba',
    url: '/gallery/kuba'
  },
  {
    img: getBoxes('london'),
    title: 'London',
    url: '/gallery/london'
  },
  {
    img: getBoxes('budimpesta'),
    title: 'Budimpešta',
    url: '/gallery/budimpesta'
  },
  {
    img: getBoxes('novi'),
    title: 'Novi Vinodolski',
    url: '/gallery/novi'
  },
  {
    img: getBoxes('mljet'),
    title: 'Mljet',
    url: '/gallery/mljet'
  },
  {
    img: getBoxes('lastovo'),
    title: 'Lastovo',
    url: '/gallery/lastovo'
  },
  {
    img: getBoxes('vransko'),
    title: 'Vransko Jezero',
    url: '/gallery/vransko'
  },
  {
    img: getBoxes('zagreb'),
    title: 'Zagreb',
    url: '/gallery/zagreb'
  },
  {
    img: getBoxes('tabor'),
    title: 'Veliki Tabor',
    url: '/gallery/tabor'
  },
  {
    img: getBoxes('plitvice'),
    title: 'Plitvička Jezera',
    url: '/gallery/plitvice'
  },
  {
    img: getBoxes('pariz'),
    title: 'Pariz',
    url: '/gallery/pariz'
  },
  {
    img: getBoxes('nassfeld'),
    title: 'Nassfeld',
    url: '/gallery/nassfeld'
  },
  {
    img: getBoxes('risnjak'),
    title: 'Risnjak',
    url: '/gallery/risnjak'
  },
  {
    img: getBoxes('trakoscan'),
    title: 'Trakošćan',
    url: '/gallery/trakoscan'
  },
  {
    img: getBoxes('barcelona'),
    title: 'Barcelona',
    url: '/gallery/barcelona'
  },
  {
    img: getBoxes('krupa'),
    title: 'Krupa',
    url: '/gallery/krupa'
  },
  {
    img: getBoxes('dugi'),
    title: 'Dugi Otok',
    url: '/gallery/dugi'
  },
  {
    img: getBoxes('brijuni'),
    title: 'Brijuni',
    url: '/gallery/brijuni'
  },
  {
    img: getBoxes('mitrovica'),
    title: 'Sremska Mitrovica',
    url: '/gallery/mitrovica'
  },
  {
    img: getBoxes('fuzine'),
    title: 'Fužine',
    url: '/gallery/fuzine'
  },
]

export const getCardsImages = () => [
  {
    img: {
      src: '/img/cards/srilanka-10.jpg'
    },
    subtitle: '15.02.2020.',
    title: '10 zanimljivosti o Šri Lanci',
    description: 'Što možete vidjeti na svakom koraku, a što ne smijete raditi na ulici? Čega se morate paziti a što trebate tražiti?',
    url: '/blogs/srilanka-10'
  },
  {
    img: {
      src: '/img/cards/srilanka-beaches.jpg'
    },
    subtitle: '24.01.2020.',
    title: 'Plaže Šri Lanke',
    description: 'Zanimaju vas na koje plaže se isplati svratiti, a koje možete zaobići? Na pravom ste mjestu! U nastavku je detaljan pregled najboljih južnih plaža.',
    url: '/blogs/srilanka-beaches'
  },
  {
    img: {
      src: '/img/cards/srilanka.jpg'
    },
    title: 'Suza Indije',
    subtitle: '4. – 18.01.2020.',
    description: 'Volite čaj, začine, kokose, hramove i plaže? Zanima vas kako izgleda otok koji nije vidio snijeg? Dodajte ovo mjesto na svoj popis!',
    url: '/blogs/srilanka'
  },
  {
    img: {
      src: '/img/cards/motovun.jpg'
    },
    title: 'Magloviti Grad',
    subtitle: '8. – 10.11.2019.',
    description: 'Ako još niste svjedočili pogledu na dolinu potpuno prekrivenu maglom, ne znate što propuštate!',
    url: '/blogs/motovun'
  },
  {
    img: {
      src: '/img/cards/kamacnik.jpg'
    },
    title: 'Jesenski Kanjon',
    subtitle: '27.10.2019.',
    description: 'Pitate se što raditi za jesenski vikend? Predlažemo vam savršenu destinacija za laganu šetnju kroz prirodu.',
    url: '/blogs/kamacnik'
  },
  {
    img: {
      src: '/img/cards/tara.jpg'
    },
    title: 'Najlepša Planina',
    subtitle: '6. – 8.10.2019.',
    description: 'Ima li smisla voziti se 1500 km da bi se proveo jedan dan u najljepšoj prirodi Srbije? Ne brinite, mi smo istražili za vas. Pronađite odgovor u nastavku.',
    url: '/blogs/tara'
  },
  // description: 'Five days of camping in the valley of river Soca. Whether you are an adrenaline seeker or relaxed hiker, you should come and witness the color of Soca for yourself!',
  {
    img: {
      src: '/img/cards/krka.jpg'
    },
    title: 'Sedam Veličanstvenih',
    subtitle: '13. – 15.9.2019.',
    description: 'Saznajte zašto smo odgađali posjet ovom prirodnom dragulju za sam kraj sezone. Odmor za dušu i tijelo. Nema ništa ljepše od toga!',
    url: '/blogs/krka'
  },
  {
    img: {
      src: '/img/cards/soca.jpg'
    },
    title: 'Smaragdna Rijeka',
    subtitle: '20. – 25.6.2019.',
    description: 'Bilo da ste u potrazi za avanturom ili opuštenom šetnjom, Soča ima nešto za vas. Uvjerite se sami da je boja stvarna!',
    url: '/blogs/soca'
  },
  {
    img: {
      src: '/img/cards/kuba.jpg'
    },
    title: 'Kubanski Top 10',
    subtitle: '5. – 19.1.2019.',
    description: 'Dvotjedni roadtrip po najvećem karipskom otoku. Upoznajte zemlju u kojoj je vrijeme stalo. Salsa, mojito, kokosi i sreća.',
    url: '/blogs/kuba'
  }
]

export const getImages = ({ type, name, url }) => [...Array(numberOfImages[type][name])].map((elem, index) => {
    if (!url) {
      return {
        src: `${imgUrl}/${type}/${name}/img${index}.jpg`
      }
    } else {
      return {
        src: `${imgUrl}/${type}/${name}/img${index}.jpg`,
        url: `/gallery/${name}/swipe/${index}`
      }
    }

  })

export const getBlogImages = (name) => {
  return {
    cover: getCovers({ type: 'blogs', name: name }),
    images: getImages({ type: 'blogs', name: name , url: false })
  }
}

export const getGalleryImages = (name) => {
  return {
    cover: getCovers({ type: 'gallery', name: name }),
    images: getImages({ type: 'gallery', name: name, url: true }),
    text: galleryText[name],
    ratios: ratios[name]
  }
}

export const getSlideshowImages = () => [...Array(numberOfImages.slideshow)].map((elem, index) => {
  return {
    id: index,
    src: `${imgUrl}/slideshow/img${index}.jpg`
  }
})

export const about = {
  cover: { src: `${imgUrl}/covers/about.jpg` },
  images: [
    { src: `${imgUrl}/about/img21.jpg`, text: 'Želimo obići cijeli svijet' },
    { src: `${imgUrl}/about/img13.jpg`, text: 'Sa što više kampiranja' },
    { src: `${imgUrl}/about/img6.jpg`, text: 'I obaveznim hammockom' },
    { src: `${imgUrl}/about/img18.jpg`, text: 'Volimo zimske radosti' },
    { src: `${imgUrl}/about/img3.jpg`, text: 'Volimo riječne radosti' },
    { src: `${imgUrl}/about/img7.jpg`, text: 'Volimo morske radosti' },
    { src: `${imgUrl}/about/img1.jpg`, text: 'Netko ih ipak voli malo više' },
    { src: `${imgUrl}/about/img4.jpg`, text: 'Netko malo više voli ples' },
    { src: `${imgUrl}/about/img0.jpg`, text: 'Ali oboje volimo promatrati svijet naopačke' },
    { src: `${imgUrl}/about/img15.jpg`, text: 'Ovo je naše najdraže mjesto' },
    { src: `${imgUrl}/about/img9.jpg`, text: 'Kiša nam ne smeta' },
    { src: `${imgUrl}/about/img5.jpg`, text: 'A Zalaske ne propuštamo' },
    { src: `${imgUrl}/about/img14.jpg`, text: 'Uživamo u koncertima na otvorenom' },
    { src: `${imgUrl}/about/img8.jpg`, text: 'U kino ne idemo, ali kad idemo slikamo selfie' },
    { src: `${imgUrl}/about/img17.jpg`, text: 'Znamo biti lijepi' },
    { src: `${imgUrl}/about/img11.jpg`, text: 'I slučajno se spariti' },
    { src: `${imgUrl}/about/img12.jpg`, text: 'Nekad i pretjeramo' },
    { src: `${imgUrl}/about/img16.jpg`, text: 'Zanimaju nas kojekakve ludosti' },
    { src: `${imgUrl}/about/img19.jpg`, text: 'Netko skače glavom bez obzira' },
    { src: `${imgUrl}/about/img20.jpg`, text: 'Netko je ipak malo zabrinut' },
    { src: `${imgUrl}/about/img2.jpg`, text: 'Ponekad se potučemo' },
    { src: `${imgUrl}/about/img10.jpg`, text: 'Ali se i dalje volimo' },
  ]
}

// MISCELANIOUS

export const arrow = {
  previous: {
    src: `${imgUrl}/misc/previous.svg`
  },
  next: {
    src: `${imgUrl}/misc/next.svg`
  }
}

export const share = {
  src: `${imgUrl}/misc/share-24px.svg`
}

export const facebook = {
  src: `${imgUrl}/misc/facebook.svg`
}

export const instagram = {
  src: `${imgUrl}/misc/instagram.svg`
}

export const github = {
  src: `${imgUrl}/misc/github.svg`
}

export const refresh = {
  src: `${imgUrl}/misc/refresh.png`
}

export const menu = {
  primary: {
    src: `${imgUrl}/misc/menu-primary-24px.svg`
  },
  secondary: {
    src: `${imgUrl}/misc/menu-secondary-24px.svg`
  }
}

export const logo = {
  src: `${imgUrl}/misc/logo.png`
}

export const ana = {
  src: `${imgUrl}/misc/ana.jpg`
}

export const mislav = {
  src: `${imgUrl}/misc/mislav.jpg`
}

export const star = `${imgUrl}/misc/star.svg`
