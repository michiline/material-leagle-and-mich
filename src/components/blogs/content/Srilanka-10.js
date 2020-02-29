import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { getBlogImages } from '../../../images'

const Blog = () => {
  const { cover, images } = getBlogImages('srilanka-10')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'10 zanimljivosti o Šri Lanci'} h2={'Čaj, Buda i Safari'} img={cover}/>
        <BlogContainer>
          <Header>10 zanimljivosti o Šri Lanci</Header>
          <Intro>
            Neke smo znali otprije, neke smo otkrili na putovanju, ali sada su sve na jednom mjestu.
            Nakon 2 tjedna Šri Lanke ovo su neke od zanimljivosti koje želimo podijeliti s vama.
          </Intro>
          <Header2>Čaj</Header2>
          <Text>
            Šri Lanka je najveći izvoznik čaja na svijetu.
            Ako ste ljubitelj čaja, ostavite si mjesta u koferu!
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Čaj i samo čaj</ImgOverlay>
              <ImgLandscapeHalf img={images[0]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Degustacija</ImgOverlay>
              <ImgLandscapeHalf img={images[1]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>Cjenkanje</Header2>
          <Text>
            Cjenkanje je dio njihove kulture. Nijedna cijena van brendiranih dućana nije konačna.
            Mi smo naletili na samo jednog trgovca koji je rekao da su mu cijene fiksne.
            A i on je na kraju malo spustio cijenu.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Jel može za 200 do vidikovca?</ImgOverlay>
              <Img img={images[2]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Pojma nemam šta biram</ImgOverlay>
              <Img img={images[3]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Promet</Header2>
          <Text>
            Prometna insfrastruktura je vrlo gusta i vrlo rudimentarna.
            Osim u većim gradovima, općenito pričamo o jednoj traci u svakom smjeru.
            Vlakovi su zastarjeli, busevi voze luđački, a svuda vlada gužva.
            Ako u prilogu stavimo činjenicu da otok ima 5 puta više stanovnika od Hrvatske na površini samo 20% većoj, jasno nam je da je to jedan veliki kaos.
          </Text>
          <Text>
            Primorani su u svojim glavama stvoriti 3., 4., ma i 5. traku po potrebi.
            Na ulicama možete vidjeti sve od bicikala i tuk tukova, preko mopeda i motora do traktora, buseva i hibridnih vozila.
            Vožnja po njihovim cestama nije za one slabijeg želuca.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Dvije trake</ImgOverlay>
              <ImgLandscapeHalf img={images[4]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Stanica za vlak</ImgOverlay>
              <ImgLandscapeHalf img={images[5]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>Buda je svuda</Header2>
          <Text>
            Buda je posvuda!
            Veliki, mali, šareni, bijeli, uspravan, polegnut, sjedeći, kameni, plastični, u stijeni, u kući, na brdu, u busu, u tuktuku, na zidu.
            You name it – he's there.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Jedan od manjih</ImgOverlay>
              <Img img={images[6]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Ulična umjetnost</Header2>
          <Text>
            Ovo je zemlja predivnih murala.
            Stalno smo nailazili na njih i svi su imali neku svoju priču, nisu bili prešarani grafitima već je djelovalo kao da su dio kulture i da prenose važne poruke društva.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Muralored</ImgOverlay>
              <ImgLandscapeHalf img={images[7]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Dućan</ImgOverlay>
              <ImgLandscapeHalf img={images[9]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ima baš dobrih</ImgOverlay>
              <Img img={images[8]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Javni iskazi afekcije</Header2>
          <Text>
            Nije dozvoljeno javno iskazivati zaljubljenost.
            Zbog držanja za ruke i ljubljenja na ulici mladi parovi navodno znaju biti i privedeni.
            Mladi su doskočili tom problemu tako da koriste parkove kao skrovište od osuđujućih pogleda.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Samo ljubav</ImgOverlay>
              <Img img={images[11]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Psi lutalice</Header2>
          <Text>
            Ima jako puno pasa beskućnika, koji nekako svi izgledaju isto i stalno imate osjećaj da cijelo vrijeme srećete istog psa.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Kaj nisu svi isti?</ImgOverlay>
              <Img img={images[10]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Prevare</Header2>
          <Text>
            Na nekim mjestima, npr. Ella Rock, lokalci namjerno miču oznake za put do vrha kako bi se turisti izgubili.
            Čak i ako ste na pravom putu reći će vam da niste kako bi zalutali i onda vam opet pomogli vratiti se na pravi put i za to dobili napojnicu.
            Skinite maps.me i nećete imati problema. Sve staze su ucrtane.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Mi stigli, a vi?</ImgOverlay>
              <Img img={images[15]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Čuvajte se prevare pod nazivom Herbal Garden – postoji lanac trgovina biljnih preparata koji je označen brojevima i nalazi se po cijeloj Šri Lanci.
            Moguće je da vam vozač taxija usput predloži da stanete u jednu od poslovnica.
            Tamo vas vodič provede kroz vrt, dobijete masažu, a onda kasnije traže napojnice za sve to i nude vam da kupujete u trgovini koja je preskupa.
            Ako želite kupiti prave biljne preparate, raspitajte se kod lokalaca gdje oni kupuju.
          </Text>
          <Header2>Vodopadi</Header2>
          <Text>
            Šri Lanka ima preko 50 vodopada viših 10 metara, dok je najviši visok čitavih 263 metra.
            Gotovo svu svoju energiju crpe iz rijeka.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Mich za usporedbu</ImgOverlay>
              <Img img={images[12]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Priroda</Header2>
          <Text>
            Šri Lanka ima 26 nacionalnih parkova. Nema razloga da ne posjetite barem jedan!
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ludilo brale</ImgOverlay>
              <Img img={images[13]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Safari</Header2>
          <Text>
            Šri Lanka je prepoznata kao najbolja safari destinacija van Afrike.
            Na safariju ovisno o lokaciji možete vidjeti slovone, leoparde, medvjede, paunove, jelene, bivole itd.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Bili smo im jako blizu!</ImgOverlay>
              <Img img={images[14]}/>
            </ImgWrap>
          </ImgRow>
        </BlogContainer>
      </Container>
    </>
  )
}



export default Blog
