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
          <Header2>Cjenkanje</Header2>
          <Text>
            Cjenkanje je dio njihove kulture. Nijedna cijena van brendiranih dućana nije konačna.
            Mi smo naletili na samo jednog trgovca koji je rekao da su mu cijene fiksne.
            A i on je na kraju malo spustio cijenu.
          </Text>
          <Header2>Promet</Header2>
          <Text>
            Prometna insfrastruktura je vrlo gusta i vrlo rudimentarna.
            Osim u većim gradovima, općenito pričamo o jednoj traci u svakom smjeru.
            Ako u prilogu stavimo činjenice da otok ima 20 milijuna stanovnika na površini 20% većoj od Hrvatske, jasno nam je da je to jedan veliki kaos.
          </Text>
          <Text>
            Primorani su u svojim glavama stvoriti 3., 4., ma i 5. traku po potrebi.
            Na ulicama možete vidjeti sve od bicikala i tuk tukova, preko mopeda i motora do traktora, buseva i hibridnih vozila.
            Vožnja po njihovim cestama nije za one slabijeg želuca.
          </Text>
          <Header2>Buda je svuda</Header2>
          <Text>
            Buda je posvuda!
            Veliki, mali, šareni, bijeli, uspravan, polegnut, sjedeći, kameni, plastični, u stijeni, u kući, na brdu, u busu, u tuktuku, na zidu.
            You name it – he's there.
          </Text>
          <Header2>Ulična umjetnost</Header2>
          <Text>
            Ovo je zemlja predivnih murala.
            Stalno smo nailazili na njih i svi su imali neku svoju priču, nisu bili prešarani grafitima već je djelovalo kao da su dio kulture i da prenose važne poruke društva.
          </Text>
          <Header2>Javni iskazi afekcije</Header2>
          <Text>
            Nije dozvoljeno javno iskazivati zaljubljenost.
            Zbog držanja za ruke i ljubljenja na ulici mladi parovi navodno znaju biti i privedeni.
            Mladi su doskočili tom problemu tako da koriste parkove kao skrovište od osuđujućih pogleda.
          </Text>
          <Header2>Psi lutalice</Header2>
          <Text>
            Ima jako puno pasa beskućnika, koji nekako svi izgledaju isto i stalno imate osjećaj da cijelo vrijeme srećete istog psa.
          </Text>
          <Header2>Vodopadi</Header2>
          <Text>
            Šri Lanka ima preko 50 vodopada viših 10 metara, dok je najviši visok čitavih 263 metra.
            Gotovo svu svoju energiju crpe iz rijeka.
          </Text>
          <Header2>Priroda</Header2>
          <Text>
            Šri Lanka ima 26 nacionalnih parkova. Nema razloga da ne posjetite barem jedan!
          </Text>
          <Header2>Safari</Header2>
          <Text>
            Šri Lanka je prepoznata kao najbolja safari destinacija van Afrike.
            Na safariju ovisno o lokaciji možete vidjeti slovone, leoparde, medvjede, paunove, jelene, bivole itd.
          </Text>
          <Header2>Prevare</Header2>
          <Text>
            Na nekim mjestima, npr. Ella Rock, lokalci namjerno miču oznake za put do vrha kako bi se turisti izgubili.
            Čak i ako ste na pravom putu reći će vam da niste kako bi zalutali i onda vam opet pomogli vratiti se na pravi put i za to dobili napojnicu.
            Skinite maps.me i nećete imati problema. Sve staze su ucrtane.
          </Text>
          <Text>
            Čuvajte se prevare pod nazivom Herbal Garden – postoji lanac trgovina biljnih preparata koji je označen brojevima i nalazi se po cijeloj Šri Lanci.
            Moguće je da vam vozač taxija usput predloži da stanete u jednu od poslovnica.
            Tamo vas vodič provede kroz vrt, dobijete masažu, a onda kasnije traže napojnice za sve to i nude vam da kupujete u trgovini koja je preskupa.
            Ako želite kupiti prave biljne preparate, raspitajte se kod lokalaca gdje oni kupuju.
          </Text>
        </BlogContainer>
      </Container>
    </>
  )
}



export default Blog
