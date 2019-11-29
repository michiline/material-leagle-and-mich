import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { blogImageBundle } from '../../../images'

const Blog = () => {
  const { cover, images } = blogImageBundle('tara')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Najlepša Planina'} h2={'Netaknuta Priroda Nacionalnog Parka Tara - "Pluća Srbije"'} img={cover}/>
        <BlogContainer>
          <Header>Najlepša Planina</Header>
          <Intro>
            „Mislave kad ćemo na Taru? Mislave, a Tara?
            Daaaj idemo na Taru, izgleda divno!
            Uuuu Ana, Tara stvarno izgleda divno.“
            I tako mi o Tari već mjesecima. Možda i duže.
            Ja bih to sve sad i odmah posjetila, ali ne ide to baš tako pa moramo čekati da se prilike stvore.
            Napokon i jesu!
          </Intro>
          <Text>
            Što radiš kad ideš na vjenčanje u Mladenovac, u Hrvatskoj je produženi vikend i imaš rodbinu u Sremskoj Mitrovici s vikendicom na Tari?
            Voziš se ukupno 1500km samo da bi eto na jedan dan ulovio svježeg zraka, divio se prirodi, kupio kajmak kod Milice, otišao u selo u kojem živi 5 ljudi tijekom cijele godine i konačno dočekao tu čuvenu Taru o kojoj pričaš već mjesecima.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Juuuu što je lepo</ImgOverlay>
              <Img img={images[4]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Cozy</ImgOverlay>
              <Img img={images[18]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ana će tek saznati da je Nikola dobio dobru kartu...</ImgOverlay>
              <Img img={images[17]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Obilazak Tare smo počeli šetnjom po okolnoj šumi.
            Leo (pas) bio je posebno oduševljen.
            Rekla bih s potpunim pravom jer je šetnja šumom u jesen najljepša šetnja šumom.
            Na jednu stranu sela pošli smo do vidikovca s pogledom na jezero.
            U zraku se osjeća da smo na planini i da napokon možemo disati punim plućima.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>I tak ti ja oču biti iron man</ImgOverlay>
              <ImgLandscapeHalf img={images[0]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Dođi Leo da te slikam</ImgOverlay>
              <ImgLandscapeHalf img={images[1]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>So beautiful I could cry...</ImgOverlay>
              <ImgLandscapeHalf img={images[5]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Di su ti tartufi...</ImgOverlay>
              <ImgLandscapeHalf img={images[2]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Prvo moram popravit formu u trčanju i kupit novi bajk...</ImgOverlay>
              <Img img={images[3]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Druga strana i drugi dio šetnje uključivao je napuštenu staru školu, stare kolibe, i na široko poznatu Milicu kod koje se obnavljaju zalihe kajmaka i sira.
            Na ovom mjestu je nekad postojala škola i puno više ljudi koji su tu obitavali cijele godine.
            Sada su to uglavnom vikendice uz ponekog starosjedioca koji se neda iz ovog kraja.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Ajd ti odi prvi za svaki slučaj</ImgOverlay>
              <ImgLandscapeHalf img={images[6]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Nema niš al je fora za slikat</ImgOverlay>
              <ImgLandscapeHalf img={images[7]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Koliba</ImgOverlay>
              <Img img={images[8]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Korov ispred kolibe</ImgOverlay>
              <Img img={images[9]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Evo nas do prvih susjeda</ImgOverlay>
              <ImgLandscapeHalf img={images[10]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Dečki stanite mi tu malo</ImgOverlay>
              <ImgLandscapeHalf img={images[11]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Popodne je bilo rezervirano za kratki roadtrip.
            Preko parka Tara do parka Mokra gora i Drvengrada.
            Nikad niste čuli za Drvengrad? Bez brige, nismo ni mi.
            Ako je suditi po količini Kineza na parkiralištu, stigli smo na pravo mjesto.
          </Text>
          <Text>
            Drvengrad iliti Mećavnik je selo koje je Emir Kusturica izgradio za svoj film.
            Danas je to mjesto na kojem možete iznajmiti sobu za spavanje ili prošetati se ulicom Ive Andriće ili Che Guevare.
            Drvengrad ima kino, knjižnicu, restoran kao i slastičarnicu u kojem se može probati stari domaći sok – boza.
            Nama se svidio!
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Prozor prema zalazu</ImgOverlay>
              <ImgLandscapeHalf img={images[13]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Drvengrad</ImgOverlay>
              <ImgLandscapeHalf img={images[14]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Ako vas je put već doveo do Drvengrada, zgodno je odmah posjetiti i Šargansku osmicu – pruga vrlo uskog kolosjeka na kojoj se nudi zanimljiva 2.5 satna vožnja po planinama i prirodi.
            Nažalost ovaj put nismo uspjeli uloviti vlak, ali zato se vraćamo ponovno da doživimo i to iskustvo.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Šta reći... Pune proračun Srbije</ImgOverlay>
              <Img img={images[15]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Sljedeći dan, na povratku kući, stali smo na još jedno posebno mjesto.
            Kad netko izgradi vikendicu na sred rijeke, na ogromnom kamenu i to 4 puta (jer Drini naraste vodostaj), mora se napraviti pauza i uslikati koja fotkica.
            Kućica na Drini…
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Vikendica</ImgOverlay>
              <Img img={images[16]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ljeti je ovo plaža</ImgOverlay>
              <Img img={images[12]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            Zanimljiv izlet, pun predivnih lokacija, a čuli smo da ih ima još puno u blizini.
            Stoga jedno je sigurno – vraćamo se opet. („Mislaveee kad ćemo opet na Taru?!“)
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
