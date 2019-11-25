import ratios from './ratios'
import galleryText from './text'

const imgUrl = `${process.env.PUBLIC_URL}/img`

const sizes = {
  motovun: 13,
  kamacnik: 16,
  tara: 20,
  krka: 11,
  soca: 40,
}


export const imageBundle = ({ type, name }) => [...Array(sizes[name])].map((elem, index) => { return { src: `${imgUrl}/${type}/${name}/img${index}.jpg`, url: `/gallery/${name}/swipe/${index}` }})

export const imageBundleRatio = ({ type, name }) => [...Array(ratios[name].length)].map((elem, index) => { return { src: `${imgUrl}/${type}/${name}/img${index}.jpg`}})
// export const imageBundleRatioHome = ({ type, name }) => [...Array(ratios[name].length)].map((elem, index) => { return { src: `${imgUrl}/${type}/${name}/img${index}.jpg`, url: `/gallery/${name}` }})

export const imageBundleRatioHome = ({ length }) => {
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

export const covers = ({ type, name }) => {return { src: `${imgUrl}/covers/${type}/${name}.jpg` }}

export const blogsCover = {
  src: `${imgUrl}/covers/blogs.jpg`
}

export const galleryCover = {
  src: `${imgUrl}/covers/gallery.jpg`
}

export const galleries = [
  {
    img: covers({ type: 'gallery', name: 'motovun'}),
    title: 'Motovun',
    url: '/gallery/motovun'
  },
  {
    img: covers({ type: 'gallery', name: 'kamacnik'}),
    title: 'Kamačnik',
    url: '/gallery/kamacnik'
  },
  {
    img: covers({ type: 'gallery', name: 'tara'}),
    title: 'Tara',
    url: '/gallery/tara'
  },
  {
    img: covers({ type: 'gallery', name: 'krka'}),
    title: 'Krka',
    url: '/gallery/krka'
  },
  {
    img: covers({ type: 'gallery', name: 'cres'}),
    title: 'Cres',
    url: '/gallery/cres'
  },
  {
    img: covers({ type: 'gallery', name: 'losinj'}),
    title: 'Mali Lošinj',
    url: '/gallery/losinj'
  },
  {
    img: covers({ type: 'gallery', name: 'soca'}),
    title: 'Soča',
    url: '/gallery/soca'
  },
  {
    img: covers({ type: 'gallery', name: 'istra'}),
    title: 'Istra',
    url: '/gallery/istra'
  },
  {
    img: covers({ type: 'gallery', name: 'kalnik'}),
    title: 'Kalnik',
    url: '/gallery/kalnik'
  },
  {
    img: covers({ type: 'gallery', name: 'gerlitzen'}),
    title: 'Gerlitzen',
    url: '/gallery/gerlitzen'
  },
  {
    img: covers({ type: 'gallery', name: 'kuba'}),
    title: 'Kuba',
    url: '/gallery/kuba'
  },
  {
    img: covers({ type: 'gallery', name: 'london'}),
    title: 'London',
    url: '/gallery/london'
  },
  {
    img: covers({ type: 'gallery', name: 'budimpesta'}),
    title: 'Budimpešta',
    url: '/gallery/budimpesta'
  },
  {
    img: covers({ type: 'gallery', name: 'novi'}),
    title: 'Novi Vinodolski',
    url: '/gallery/novi'
  },
  {
    img: covers({ type: 'gallery', name: 'mljet'}),
    title: 'Mljet',
    url: '/gallery/mljet'
  },
  {
    img: covers({ type: 'gallery', name: 'lastovo'}),
    title: 'Lastovo',
    url: '/gallery/lastovo'
  },
  {
    img: covers({ type: 'gallery', name: 'vransko'}),
    title: 'Vransko Jezero',
    url: '/gallery/vransko'
  },
  {
    img: covers({ type: 'gallery', name: 'zagreb'}),
    title: 'Zagreb',
    url: '/gallery/zagreb'
  },
  {
    img: covers({ type: 'gallery', name: 'tabor'}),
    title: 'Veliki Tabor',
    url: '/gallery/tabor'
  },
  {
    img: covers({ type: 'gallery', name: 'plitvice'}),
    title: 'Plitvička Jezera',
    url: '/gallery/plitvice'
  },
  {
    img: covers({ type: 'gallery', name: 'pariz'}),
    title: 'Pariz',
    url: '/gallery/pariz'
  },
  {
    img: covers({ type: 'gallery', name: 'nassfeld'}),
    title: 'Nassfeld',
    url: '/gallery/nassfeld'
  },
  {
    img: covers({ type: 'gallery', name: 'risnjak'}),
    title: 'Risnjak',
    url: '/gallery/risnjak'
  },
  {
    img: covers({ type: 'gallery', name: 'trakoscan'}),
    title: 'Trakošćan',
    url: '/gallery/trakoscan'
  },
  {
    img: covers({ type: 'gallery', name: 'barcelona'}),
    title: 'Barcelona',
    url: '/gallery/barcelona'
  },
  {
    img: covers({ type: 'gallery', name: 'krupa'}),
    title: 'Krupa',
    url: '/gallery/krupa'
  },
  {
    img: covers({ type: 'gallery', name: 'dugi'}),
    title: 'Dugi Otok',
    url: '/gallery/dugi'
  },
  {
    img: covers({ type: 'gallery', name: 'brijuni'}),
    title: 'Brijuni',
    url: '/gallery/brijuni'
  },
  {
    img: covers({ type: 'gallery', name: 'mitrovica'}),
    title: 'Sremska Mitrovica',
    url: '/gallery/mitrovica'
  },
  {
    img: covers({ type: 'gallery', name: 'fuzine'}),
    title: 'Fužine',
    url: '/gallery/fuzine'
  },
]

export const blogs = [
  {
    img: { src: '/img/covers/cards/motovun.jpg' },
    title: 'Magloviti Grad',
    subtitle: 'Motovun, Hrvatska',
    description: 'Ako još niste svjedočili pogledu na dolinu potpuno prekrivenu maglom, ne znate što propuštate!',
    url: '/blogs/motovun'
  },
  {
    img: imageBundle({ type: 'blogs', name: 'kamacnik'})[15],
    title: 'Jesenski Kanjon',
    subtitle: 'Kamačnik, Hrvatska',
    description: 'Pitate se što raditi za jesenski vikend? Predlažemo vam savršenu destinacija za laganu šetnju kroz prirodu.',
    url: '/blogs/kamacnik'
  },
  {
    img: imageBundle({ type: 'blogs', name: 'tara'})[19],
    title: 'Najlepša Planina',
    subtitle: 'Tara, Srbija',
    description: 'Ima li smisla voziti se 1500 km da bi se proveo jedan dan u najljepšoj prirodi Srbije? Ne brinite, mi smo istražili za vas. Pronađite odgovor u nastavku.',
    url: '/blogs/tara'
  },
  // description: 'Five days of camping in the valley of river Soca. Whether you are an adrenaline seeker or relaxed hiker, you should come and witness the color of Soca for yourself!',
  {
    img: imageBundle({ type: 'blogs', name: 'krka'})[10],
    title: 'Sedam Veličanstvenih',
    subtitle: 'Krka, Hrvatska',
    description: 'Saznajte zašto smo odgađali posjet ovom prirodnom dragulju za sam kraj sezone. Odmor za dušu i tijelo. Nema ništa ljepše od toga!',
    url: '/blogs/krka'
  },
  {
    img: imageBundle({ type: 'blogs', name: 'soca'})[5],
    title: 'Smaragdna Rijeka',
    subtitle: 'Soča, Slovenija',
    description: 'Bilo da ste u potrazi za avanturom ili opuštenom šetnjom, Soča ima nešto za vas. Uvjerite se sami da je boja stvarna!',
    url: '/blogs/soca'
  },
  // {
  //   img: kuba[0],
  //   title: 'Viva La Revolución!',
  //   subtitle: 'Kuba',
  //   description: 'Dvotjedni roadtrip po najvećem karipskom otoku. Upoznajte zemlju u kojoj je vrijeme stalo. Salsa, mojito, kokosi i sreća.',
  //   url: '/blogs/kuba'
  // }
]

export const blogImageBundle = (name) => {
  return {
    cover: covers({ type: 'blogs', name: name }),
    images: imageBundle({ type: 'blogs', name: name }),
    text: blogs[name]
  }
}

export const galleryImageBundle = (name) => {
  return {
    cover: covers({ type: 'gallery', name: name }),
    images: imageBundleRatio({ type: 'gallery', name: name }),
    text: galleryText[name],
    ratios: ratios[name]
  }
}

export const galleryImageBundleHome = ({ length }) => {
  return {
    images: imageBundleRatioHome({ length })
  }
}

export const slideshow = [
  { id: 0, src: `${imgUrl}/slideshow/img0.jpg` },
  { id: 1, src: `${imgUrl}/slideshow/img1.jpg` },
  { id: 2, src: `${imgUrl}/slideshow/img2.jpg` },
  { id: 3, src: `${imgUrl}/slideshow/img3.jpg` },
  { id: 4, src: `${imgUrl}/slideshow/img4.jpg` },
]


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
