import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { getBlogImages } from '../../../images'

const Blog = () => {
  const { cover, images } = getBlogImages('srilanka-beaches')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Plaže Šri Lanke'} h2={'Gdje nema nikog, a gdje su svi?'} img={cover}/>
        <BlogContainer>
          <Header>Plaže Šri Lanke</Header>
          <Intro>
            Budući da je Ana pravi zaljubljenik u more i plaže, jedan post odlučili smo posvetiti samo njima.
            Opisati ćemo plaže koje smo posjetili u okolici Tangallea i Mirisse kako biste znali što vas čeka ako vam se Šri Lanka ikad nađe na vašem putu.
          </Intro>
          <Header2>Tangalle</Header2>
          <Text>
            Mislim da oboje ovu plažu možemo opisati najdražom na Šri Lanci.
            Nekoliko kilometara dugačka pješčana plaža, bez ljudi je točno ono što mi tražimo na ovim egzotičnim destinacijama.
            Nismo fanovi gužvi i puno ljudi pa nam je ovo bilo pravo oduševljenje.
            Dobra stvar je što su smještaji odmah preko ceste, svaki smještaj ima svoj restoran na plaži i ako želite ne morate ići nigdje drugdje.
            Valovi su dovoljno veliki da se možete bacati i zabavljati, a dovoljno mali da vas ne mora biti strah da ćete se utopiti (za razliku od nekih drugih plaža koje ćete otkriti dalje u tekstu).
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Nigdje nikog ispred mene</ImgOverlay>
              <ImgLandscapeHalf img={images[0]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Nigdje nikog iza mene</ImgOverlay>
              <ImgLandscapeHalf img={images[1]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Nakon toga slijedila je jako lijepa šetnja oko jezera, za koju si trebate odvojiti barem sat vremena.
            Šetnja je lijepa i svakako se isplati.
            Usput prođete i pored Temple of the Sacred Tooth, a nakon toga smo šetnju nastavili po centru i našli mjesto za jesti u kojem smo se hranili i ostale dane.
            Kandy Muslim Hotel je restoran u kojem jedu i lokalci, što znači da cijene nisu za strance, a hrana je jako spicy.
            Obilazak grada smo završili u Kandy Central Marketu.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Šetnja u suton</ImgOverlay>
              <Img img={images[2]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Guštanje</ImgOverlay>
              <Img img={images[3]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Dikwella</Header2>
          <Text>
            Nekih pola sata vožnje tuktukom (cca 1000 rupija) od Tangallea nalazi se ova jednako osamljena i predivna plaža.
            Za vrlo male novce (cca 600 rupija) mozete uzeti dvije lezaljke i suncobran, a za jos toliko popiti i 2 fina lassieja.
            Mislavu se naravno hlad svidio, a Ana je bila oduševljena i time što su valovi bili manje pa je mogla malo i plivati.
            Dugi plićak je još jedna specifičnost, a naravno i činjenica da ako se nađete na pravom mjestu u pravom trenu možete doživjeti i krave na plaži! :D
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Pa di su te kravice</ImgOverlay>
              <Img img={images[4]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Evo kravica</ImgOverlay>
              <Img img={images[5]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Bez hlada me ne zanima</ImgOverlay>
              <ImgLandscapeHalf img={images[6]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Pauza do sutra</ImgOverlay>
              <ImgLandscapeHalf img={images[7]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>Hiriketiya</Header2>
          <Text>
            Ovo nam je bila samo usputna postaja do koje smo došli pješke od Dikwelle (cca pola sata hoda).
            Ovo je prva plaža na kojoj ima ljudi i to prvenstveno jer je namijenjena surferima početnicima.
            Stoga ako vam je to želja ovu plažu si možete staviti u plan puta.
            Mi ovaj put nismo isprobali surfanje pa smo se plažom samo prošetali.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Tu su daske</ImgOverlay>
              <ImgLandscapeHalf img={images[8]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Tu su surferi</ImgOverlay>
              <ImgLandscapeHalf img={images[9]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Uživanje uz pogled na surfere</ImgOverlay>
              <Img img={images[10]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ne ide bliže moru</ImgOverlay>
              <Img img={images[11]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Blue Beach</Header2>
          <Text>
            Za 300 rupija uzeli smo tuktuk od Hiriketiye do jednog skrivenog i manje poznatog mjesta – Blue Beach Island.
            Slatki otočić spojen kopnom s pješćanom plažu i okružen brojnim šarenim ribarskim brodovima tipičnima za Šri Lanku.
            Mjesto možete iskoristiti za kupanje ili kao i mi za gledanje zalaska na stijenama otoka.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Brodice 1</ImgOverlay>
              <ImgLandscapeHalf img={images[12]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Brodice 2</ImgOverlay>
              <ImgLandscapeHalf img={images[13]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Put do hridi</ImgOverlay>
              <Img img={images[14]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Zalazak</ImgOverlay>
              <Img img={images[15]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Mirissa</Header2>
          <Text>
            Mirissa i plaže oko Mirisse su mjesta s ljudima, stoga za one koji vole gužvu ovo su lokacije koje želite posjetiti.
            Glavnu plažu u Mirissi smo iskoristili za osvježenje i igranje s valovima, dok surferi među vama i na njoj mogu isprobati svoje sposobnosti.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Glavna plaža</ImgOverlay>
              <Img img={images[16]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Hikkaduwa</Header2>
          <Text>
            Hikkaduwa bi se mogla opisati party plažom.
            Do nje smo otišli tuktukom (1000 rupija) nakon jutarnjeg obilaska Gallea.
            Jako je dugačka pa može svatko pronaći mjesto za sebe. Klasična turistička plaža s puno sadržaja, mogućnostu snorkelinga, ali i surfanja za one malo iskusnije.
            Jer ovdje su valovi nešto veći.
            Mi smo naravno tražili malo osamljeniji dio i uživali gledajući malo ozbiljnije surfere kako se to radi.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Akcija</ImgOverlay>
              <ImgLandscapeHalf img={images[17]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Reakcija</ImgOverlay>
              <ImgLandscapeHalf img={images[18]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Zujanje</ImgOverlay>
              <Img img={images[19]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>Unawatuna</Header2>
          <Text>
            Nažalost s ove plaže nemamo fotku jer smo polako izgubili entuzijazam za silnim fotkanjem, a i bilo je jako vruće.
            Ali ovo je plaža s puno ljudi, jeftinim ležaljkama i opcijom da skoknete brodom snorkelati na obližnji koraljni greben.
            Do plaže smo došli busom za sitni 160 rupija za 2 osobe iz Mirisse.
          </Text>
          <Header2>Jungle</Header2>
          <Text>
            Jungle Beach ima dva dijela.
            To su dvije slične uvalice, za malo avanturističnije ljude jer do plaža treba doći.
            Tuk tuk je naravno uvijek opcija, no mi smo se odlučili za 30-minutnu šetnju od Unawatune.
            Moramo priznati da nam se plaža svidjela i da je bila više po našem guštu.
            Manje ljudi i veći mir.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Đungla na plaži</ImgOverlay>
              <ImgLandscapeHalf img={images[20]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Đungla u glavi</ImgOverlay>
              <ImgLandscapeHalf img={images[21]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>Kogalla</Header2>
          <Text>
            Za zadnji dan smo htjeli nešto bez ljudi, jer nam je bilo dosta gužvi na plažama.
            Prethodnih dana smo vidjeli iz busa usamljenu veliku plažu i odlučili otići do nje.
            Na prvi pogled oduševljenje i zbunjenost zašto nema ljudi.
            Shvatili smo naknadno da je plaža otvorenija od ostalih zbog čega više puše pa nije ni za surfere ni za plivače jer su valovi veći od ostalih.
            Nama je taj dan još bio posebno vjetrovit, ali svejedno imali smo svoj mir i lijepi pogled za kraj.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Lijevo</ImgOverlay>
              <ImgLandscapeHalf img={images[22]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Desno</ImgOverlay>
              <ImgLandscapeHalf img={images[23]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Sredina</ImgOverlay>
              <Img img={images[24]}/>
            </ImgWrap>
          </ImgRow>

        </BlogContainer>
      </Container>
    </>
  )
}



export default Blog
