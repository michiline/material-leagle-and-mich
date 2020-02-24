import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { getBlogImages } from '../../../images'

const Blog = () => {
  const { cover, images } = getBlogImages('kuba')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Kubanski Top 10'} h2={'Salsa, Mojito, Kokosi I Sreća - Zemlja U Kojoj Je Vrijeme Stalo'} img={cover}/>
        <BlogContainer>
          <Header>Kuba Top 10</Header>
          <Intro>
            Kuba je naša prva velika priča.
            Pokušali smo opisati dio najdražih trenutaka, uspomena i mjesta.
            Izdvojiti 10 najdražih iskustava je teže nego se čini na prvi pogled.
            Nakon duljeg razmišljanja, ovo je top 10 za koje smo se odlučili.
            (P.S. sva iskustva dijele 1. mjesto)
          </Intro>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Trinidad</Header3>
          </BulletHeaderContainer>
          <Text>
            Trinidad je španjolski kolonijalni grad čija je jezgra uvrštena na popis UNESCO-ve svjetske baštine.
            Oduševilo nas je šarenilo kućica i mnoštvo ljudi na ulici.
            Bio je gušt gubiti se ulicama ovog fotogeničnog grada.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Nema susjeda s istom bojom fasade</ImgOverlay>
              <ImgLandscapeHalf img={images[0]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Kočija je standardno vozilo</ImgOverlay>
              <ImgLandscapeHalf img={images[1]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Igralište</ImgOverlay>
              <Img img={images[2]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Posebno bismo istaknuli pogled sa zvonika koji je možda najljepši pogled na neki grad s kojim smo se susreli.
            Našli smo i svoje mjesto za kavu u Cafe don Pepe, dok smo mojito pili na glavnom trgu u Casi de la Musica.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Pogled sa zvonika</ImgOverlay>
              <Img img={images[3]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Našli smo žrtvu</ImgOverlay>
              <ImgPortraitHalf img={images[4]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Obvezno probati Cancháncharu!</ImgOverlay>
              <ImgPortraitHalf img={images[5]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Viñales</Header3>
          </BulletHeaderContainer>
          <Text>
            Ovo cijelo selo je neopisivo lijepo.
            Svako jutro za vrijeme doručka na terasi, nismo se mogli nadiviti ljepoti prirode oko nas.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Terasa s pogledom na nac. park</ImgOverlay>
              <Img img={images[6]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Mjesto koje nas je oduševilo i u koje smo se vraćali je eko restoran El Paraiso.
            Malo izvan grada, na brdu, savršeno mjesto za gledati izlazak.
            Imaju svoj vrt gdje uzgajaju voce i povrce koje nude na pladnju.
            Obvezno probati antistres koktel od 5 vrsta bilja. Ah da mi ga je sad popiti...
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pogled prema gore</ImgOverlay>
              <ImgLandscapeHalf img={images[7]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Pogled prema dole</ImgOverlay>
              <ImgLandscapeHalf img={images[8]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>El Nicho</Header3>
          </BulletHeaderContainer>
          <Text>
            Ne znam je li ovo mjesto bilo toliko lijepo ili smo ga više cijenili zato što smo se vozili ladom u raspadnom stanju iz koje se dimilo na uzbrdici (a uzbrdica je bila konstantna) i u kojoj je vozač ručnu koristio kao držač za energetsko piće.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Neuništiva lada</ImgOverlay>
              <ImgLandscapeHalf img={images[9]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Kubanske Plitvice</ImgOverlay>
              <ImgLandscapeHalf img={images[10]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Koji god razlog bio, ovo je jedan predivni park koji se mora posjetiti ako se već nađete na ovom Karipskom otoku.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Nađi Anu</ImgOverlay>
              <Img img={images[11]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Jahanje konja</Header3>
          </BulletHeaderContainer>
          <Text>
            E ovo je bilo novo iskustvo, koje nam se toliko svidjelo da smo ga morali isprobati čak 2 puta.
            Mislav je čak u nekom trenu zabrijao da je kauboj i da zna hendlati konja, ali ne vjerujte mu na riječ.
            To su samo automatik konji koji znaju napamet put kojim idu i kojom brzinom se gdje kreću.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Ana se opustila</ImgOverlay>
              <ImgPortraitHalf img={images[12]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Naš vodič</ImgOverlay>
              <ImgPortraitHalf img={images[13]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <Text>
            Jedno jahanje kod Trinidada, po parku prirode Topes de Collantes, a drugo smo ponovili u Vinalesu u dolini plantaža.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Put prema plantažama</ImgOverlay>
              <Img img={images[14]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Plaže</Header3>
          </BulletHeaderContainer>
          <Text>
            Koje god. Gdje god. Koliko god. Ali plaže.
            Ta divna boja mora i taj divni bijeli pijesak.
            Ispijanje pina colade iz ananasa ispod palme.
            Ne može a da ne ostane u divnom sjećanju.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Zbog ovog je vrijedilo doći!</ImgOverlay>
              <ImgLandscapeHalf img={images[15]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Jutarnji mir</ImgOverlay>
              <ImgLandscapeHalf img={images[16]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Stigla na svoj teritorij</ImgOverlay>
              <ImgPortraitHalf img={images[17]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Ne ide bolje od ovog</ImgOverlay>
              <ImgPortraitHalf img={images[18]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ah ta boja</ImgOverlay>
              <Img img={images[19]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Cayo Jutias</ImgOverlay>
              <Img img={images[20]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Snorkeling na koraljnom grebenu</Header3>
          </BulletHeaderContainer>
          <Text>
            E ovo je bilo kul.
            Toliko kul da smo zaboravili da smo bili u moru nekoliko sati po najvećem suncu.
            Mene to ne smeta međutim Mislav je osjetljiv i naravno izgorio je.
            Ako volite roniti, i ne zaboravite se namazati kremom protiv sunca, Cueva de los Peces je mjesto koje morate posjetiti.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Kit</ImgOverlay>
              <ImgPortraitHalf img={images[21]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Dupin</ImgOverlay>
              <ImgPortraitHalf img={images[22]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Riba čovjek</ImgOverlay>
              <Img img={images[23]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Plantaže kave i duhana</Header3>
          </BulletHeaderContainer>
          <Text>
            Seljaci su nam pokazali kako beru duhan, objasnili gradaciju listova duhana po kvaliteti, gdje ih suše i koja je najbolja metoda rolanja cigara.
            Ispričali su nam kako im je kubanska vlada dala zemlju a oni zauzvrat moraju vladi dati 95% uzgojenog duhana.
            Periodično ih posjećuje inspektor koji provjerava zadovoljava li kvaliteta njihovog duhana visoke standarde.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Naš prijevoz</ImgOverlay>
              <Img img={images[24]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Cijela dolina je nacionalni park i u njoj nema struje.
            Znači sve što je izgrađeno i obrađeno u ovoj dolini napravljeno je ručno.
            Na kraju posjeta popili smo kavu i kupiti domaći med, kavu, cigare i rum.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Nema labavo</ImgOverlay>
              <ImgPortraitHalf img={images[25]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Svidjela mi se pozadina</ImgOverlay>
              <ImgPortraitHalf img={images[26]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Polje duhana</ImgOverlay>
              <Img img={images[27]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Old timeri</Header3>
          </BulletHeaderContainer>
          <Text>
            Iako je ovo možda najveći klišej, lagali bismo kad bismo rekli da nam nije bio gušt voziti se u old timeru po Havani.
            To je jedno od onih iskustava za koje znaš da je preskupo, ali ti svejedno nije žao dati novce za to i iskusiti ga.
            It's a once in a lifetime thing.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Guštanje</ImgOverlay>
              <ImgLandscapeHalf img={images[28]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Vozač predlaže kadar</ImgOverlay>
              <ImgLandscapeHalf img={images[29]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pinkies</ImgOverlay>
              <ImgLandscapeHalf img={images[30]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Điranje po gradu</ImgOverlay>
              <ImgLandscapeHalf img={images[31]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>El Capitolio</ImgOverlay>
              <Img img={images[32]}/>
            </ImgWrap>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Mojito</Header3>
          </BulletHeaderContainer>
          <Text>
            Iako nismo bili neki ekstremni ljubitelji mojita prije putovanja, Kuba mijenja ljude.
            Kad ti iskače iz svakog ugla, ne možeš ga zaobići, a onda malo pomalo više ni ne možeš bez njega.
            A kad nemaju čašu za "to go" onda nagovoriš konobara da ju smisli jer ti baš želiš taj mojito.
            Mislav ima dobre pregovaračke sposobnosti kad je riječ o bitnim stvarima.
          </Text>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Ne štede na menti</ImgOverlay>
              <ImgPortraitHalf img={images[33]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Kad ne daju čaše za van</ImgOverlay>
              <ImgPortraitHalf img={images[34]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <BulletHeaderContainer>
            <StarBullet/><Header3>Havana</Header3>
          </BulletHeaderContainer>
          <Text>
            Mjesto koje je zastalo u nekom prošlom vremenu.
            Ono što nam je bilo najljepše u Havani jest doživjeti jedan tako veliki grad bez reklama, bez komercijalizma, bez dostupnog interneta na svakom koraku...
            Bez ljudi koji gledaju u mobitele, već s ljudima koji se druže na ulicama, gledjau te u oči, pričaju međusobno, s ljudima koji se smiješe i pozdravljaju.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Kvart 1</ImgOverlay>
              <ImgLandscapeHalf img={images[35]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Kvart 2</ImgOverlay>
              <ImgLandscapeHalf img={images[36]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>El Malecon - šetnica</ImgOverlay>
              <ImgLandscapeHalf img={images[37]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Ribičija</ImgOverlay>
              <ImgLandscapeHalf img={images[38]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Havana je mjesto koje nam je pokazalo da ne treba puno za sreću.
            Ulice siromašne i prljave, a istovremeno prepune životne čarolije.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Školarke</ImgOverlay>
              <Img img={images[39]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Bela na ulici</ImgOverlay>
              <Img img={images[40]}/>
            </ImgWrap>
          </ImgRow>
          <Intro>
            S razlogom smo izabrali Kubu kao naše prvo veće putovanje.
            Uvjereni smo da će taj donedavno izolirani sustav s vremenom oslabiti i da će se stopiti s ostatkom svijeta.
            To onda više neće biti Kuba o kojoj svi pričaju i koju bi mi voljeli doživjeti.
            Nije nas razočarala i predlažemo svima koje zanima da ju posjete što prije.
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
