import React from 'react'
import styled from 'styled-components'
import { CoverImg } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { taraCover, tara, star } from '../../../images'

const Tara = () => {
  return (
    <>
      <Container>
        <CoverImg img={taraCover}/>
        <BlogContainer>
          <Header>Najlepša planina</Header>
          <Intro>
            „Mislave kad ćemo na Taru? Mislave, a Tara?
            Daaaj idemo na Taru, izgleda divno!
            Uuuu Ana, Tara stvarno izgleda divno.“
            I tako mi o Tari već mjesecima. A i više.
            Ja bih to sve sad i odmah posjetila, ali ne ide to baš tako pa moramo čekati da se prilike stvore.
            A ovoga puta i jesu.
          </Intro>
          <Text>
            Što radiš kad ideš na vjenčanje u Mladenovac, u Hrvatskoj je produženi vikend i imaš rodbinu u Sremskoj Mitrovici s vikendicom na Tari?
            Voziš se ukupno 1500km samo da bi eto na jedan dan ulovio svježeg zraka, divio se prirodi, kupio kajmak kod Milice, otišao u selo u kojem živi 5 ljudi tijekom cijele godine i konačno dočekao tu čuvenu Taru o kojoj pričaš već mjesecima.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Juuuu što je lepo</ImgOverlay>
              <Img img={tara[4]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Cozy</ImgOverlay>
              <Img img={tara[18]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ana će tek saznati da je Nikola dobio dobru kartu...</ImgOverlay>
              <Img img={tara[17]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Obilazak Tare smo počeli šetnjom po okolnoj šumi.
            Leo (pas) je bio posebno oduševljen time.
            S potpunim pravom ja bih rekla, jer šetnja šumom u jesen je najljepša šetnja šumom.
            Na jednu stranu sela smo išli do vidikovca s pogledom na jezero.
            U zraku se osjeća da smo na planini i da možemo disati punim plućima.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>I tak ti ja oču biti iron man</ImgOverlay>
              <ImgLandscapeHalf img={tara[0]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Dođi Leo da te slikam</ImgOverlay>
              <ImgLandscapeHalf img={tara[1]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>So beautiful I could cry...</ImgOverlay>
              <ImgLandscapeHalf img={tara[5]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Di su ti tartufi...</ImgOverlay>
              <ImgLandscapeHalf img={tara[2]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Prvo moram popravit formu u trčanju i kupit novi bajk...</ImgOverlay>
              <Img img={tara[3]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Druga strana i drugi dio šetnje je uključivao napuštenu staru školu, stare kolibe, i navodno jako poznatu Milicu kod koje se pune zalihe kajmaka i sira.
            Zanimljiva je informacija da je na ovom mjestu nekad postojala škola i da je puno više ljudi tu obitavalo cijele godine.
            Sada su to uglavnom vikendice uz ponekog starosjedioca koji se neda iz ovog kraja.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Ajd ti odi prvi za svaki slučaj</ImgOverlay>
              <ImgLandscapeHalf img={tara[6]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Nema niš al je fora za slikat</ImgOverlay>
              <ImgLandscapeHalf img={tara[7]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Koliba</ImgOverlay>
              <Img img={tara[8]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Korov isprd kolibe</ImgOverlay>
              <Img img={tara[9]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Evo nas do prvih susjeda</ImgOverlay>
              <ImgLandscapeHalf img={tara[10]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Dečki stanite mi tu malo</ImgOverlay>
              <ImgLandscapeHalf img={tara[11]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Popodne je bilo rezervirano za kratki roadtrip.
            Preko parka Tara do parka Mokra gora i Drvengrada.
            Nikad niste čuli za Drvengrad? Bez brige, nismo ni mi.
            Ako je suditi po količini Kineza na parkiralištu, bili smo na pravom mjestu.
          </Text>
          <Text>
            Drvengrad iliti Mećavnik je selo koje je izgradio Emir Kusturica za svoj film.
            Sada se to pretvorilo u mjesto na kojem možete iznajmiti sobu za spavanje prošetati se ulicom Ive Andriće ili Che Guevare.
            Drvengrad ima kino, knjižnicu, restoran kao i slastičarnicu u kojem se može probati stari domaći sok – boza.
            Nama se svidio!
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Prozor prema zalazu</ImgOverlay>
              <ImgLandscapeHalf img={tara[13]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Drvengrad</ImgOverlay>
              <ImgLandscapeHalf img={tara[14]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Ako vas je put već doveo do Drvengrada, zgodno je odmah posjetiti i Šargansku osmicu – pruga uskog kolosjeka na kojoj se nudi zanimljiva 2.5 satna vožnja po planinama i prirodi.
            Nažalost ovaj put nismo uspjeli uloviti vlak, ali zato se vraćamo ponovno da doživimo i to iskustvo.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Šta reći... Pune proračun Srbije</ImgOverlay>
              <Img img={tara[15]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Sljedeći dan, na povratku kući, stali smo na još jedno posebno mjesto.
            Kad netko izgradi vikendicu na sred rijeke, na ogromnom kamenu i to 4 puta (jer Drini naraste vodostaj) to se mora napraviti pauza i uslikati koja fotkica.
            Kućica na Drini…
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Vikendica</ImgOverlay>
              <Img img={tara[16]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Po ljeti je ovo plaža</ImgOverlay>
              <Img img={tara[12]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            Zanimljiv izlet, pun predivnih lokacija, a čuli smo da ih ima još puno u blizini.
            Jedno je stoga sigurno – vraćamo se opet. („Mislaveee kad ćemo opet na Taru?!“)
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Tara