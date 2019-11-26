import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { blogImageBundle } from '../../../images'

const Blog = () => {
  const { cover, images } = blogImageBundle('kuba')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Kuba Top 10'} h2={'Salsa, Mojito, Kokosi I Sreća - Zemlja U Kojoj Je Vrijeme Stalo'} img={cover}/>
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
              <ImgOverlay>Terasa s pogledom na nac. park</ImgOverlay>
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
              <ImgOverlay>Ana se zabavlja</ImgOverlay>
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
              <ImgOverlay>Putujemo prema plantažama</ImgOverlay>
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
              <ImgOverlay>Stigli smo!</ImgOverlay>
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
            Toliko kul da smo zaboravili da smo u moru proveli par sati po najvećem suncu od 11 do 15h i nije nam palo napamet da se namažemo.
            Što je za posljedicu dovelo do Mislavovih crveni leđa.
            Ali ako se za razliku od nas sjetite namazati, Cueva de los Peces is a place to be.
          </Text>
          <Intro>
            Često poželimo ići u daleke i neobične krajeve, a zapravo nas baš tu, iza ugla, čekaju neke od najljepših prirodnih ljepota ovoga planeta.
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
