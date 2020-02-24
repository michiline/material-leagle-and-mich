import React from 'react'
import styled from 'styled-components'
import { CoverImgCenterText } from '../../general'
import { Container, BlogContainer, Header, Header2, Header3, Intro, Text, BulletHeaderContainer, StarBullet, ImgRow, ImgWrap, ImgWrapPortrait, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, ImgPortraitHalf, ImgLandscapeHalf, ImgOverlay, Img } from '../components'
import { getBlogImages } from '../../../images'

const Blog = () => {
  const { cover, images } = getBlogImages('srilanka')
  return (
    <>
      <Container>
        <CoverImgCenterText h1={'Otok Ceylon'} h2={'Dva tjedna u zemlji čaja, cimeta i kokosa - Šri Lanka'} img={cover}/>
        <BlogContainer>
          <Header>Otok Ceylon</Header>
          <Intro>
            Kako je izgledao naš dvotjedni plan i što smo sve odlučili vidjeti?
            Što nas je oduševilo, a bez čega smo ipak mogli?
            Donosimo u nastavku teksta. :)
          </Intro>
          <Header2>1. dan - Aerodrom / Kandy</Header2>
          <Text>
            Po dolasku na aerodrom, odmah smo se zaputili u Kandy i potpuno zaobišli glavni grad Colombo.
            Gradovi u Šri Lanci općenito nisu razlog dolaska pa nismo htjeli gubiti vrijeme na njih.
            Odlučili smo se za taxi prijevoz iako je bio najskuplja opcija kako bi istu večer stigli na odredište, dobro se naspavali i bili spremni za početak avanture.
          </Text>
          <Header2>2. dan - Kandy</Header2>
          <Text>
            Prvi dan smo odlučili laganini šetati po gradu.
            Krenuli smo pješke prema jezeru.
            Usput smo se zaustavili na vidikovcu Arthur's Seat, a spuštajući se prema gradu svratili smo i u Royal Palace Park.
            To je park koji nam je dao prvi kulturni šok.
            Klupice u parku su bile prepune mladih parova koji su se mazili, od toga neki čak i ispod kišobrana.
            Scena je bila neobična, a kasnije smo saznali da na Šri Lanci nije dozvoljeno iskazivanje ljubavi u javnosti pa onda za to potraže svoj mir u hladu u nekom od parkova.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Umjetno jezero</ImgOverlay>
              <ImgLandscapeHalf img={images[0]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Love bench</ImgOverlay>
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
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Riva</ImgOverlay>
              <ImgLandscapeHalf img={images[2]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Voće i povrće</ImgOverlay>
              <ImgLandscapeHalf img={images[3]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Popodne je bilo rezervirano za Botanički vrt do kojeg smo otišli s tuktukom (cca 400 rupija) i to je definitivno najbolji dio dana i najbolje mjesto za vidjeti u Kandyu.
            Cijena je 2000 rupija za 1 osobu.
            Botanički vrt je jako velik, lijepo je uređen i super je za maknuti se od gradske vrućine, a u njemu možete provesti i nekoliko sati u šetnji.
            Nama je čak žao što nismo imali više vremena na tom mjestu.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Aleja kokosa</ImgOverlay>
              <Img img={images[4]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>3. dan – Pidurangala, Polonnaruwa i NP Minneriya</Header2>
          <Text>
            Ovo je bilo teško za izabrati – gdje, kada i koliko.
            Za početak rezervirali smo taxi za cijeli dan (12000 rupija) probudili smo se u 5 ujutro da bismo izbjegli vrućinu za penjanje koje nas je čekalo.
            Oni koji malo bolje poznaju Šri Lanku možda će se pitati zašto na popisu ovdje nije i Sigiriya.
            Uz savjete domaćina i internetskih članaka odlučili smo se za kamen pored – Pidurangalu i nismo požalili.
          </Text>
          <Text>
            Za početak upad je puno jeftiniji (500 umjesto 4650 rupija na Sigiriyi), kamen ima  pogled na Sigiriyu (koju ne vidite sa nje same), ima pogled od 360 stupnjeva (koji nemate na Sigiriyi) i manja je gužva (koja je velika na Sigiriyi).
            Doduše taj kamen ima manju kulturnu vrijednost pa ako je nekom to važno onda je Sigiriya ipak bolja opcija.
            Uspon nije zahtjevan osim samog kraja, ali i tamo se može naći lakši put tako da mogu ići i djeca i odrasli.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Idem u đir</ImgOverlay>
              <ImgLandscapeHalf img={images[5]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Imaš kaj za jest</ImgOverlay>
              <ImgLandscapeHalf img={images[6]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Evo mene evo mene</ImgOverlay>
              <Img img={images[7]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Nakon što nas je oduševio pogled i nakon što su nam se dojmovi slegli, nastavili smo put prema Polonnaruwi, ruševinama drevnog glavnog grada.
            Nismo imali puno vremena pa smo od lokacije do lokacije išli taxijem.
            Ostatci su zaista posebni i predivni za vidjeti, ali tamo smo bili za vrijeme najveće vrućine pa nam je bilo teško kulturološki se uzdizati i biti pri najvećoj koncentraciji.
            Kad mi želimo sve iskoristiti.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Sveti tuljac</ImgOverlay>
              <Img img={images[8]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Zadnji dio dana, tj. popodne je bilo rezervirano za NP Minneriyu i naš prvi safari u životu (15000 rupija za 2 osobe).
            Slonovi su nas oduševili, imali smo sreću pa smo im bili stvarno jako blizu, iako neki kažu da ih inače bude i puno više.
            Mi smo i više nego zadovoljni s vi]enim.
            Kada odemo na još koji safari moći ćemo usporediti. :)
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Dumbo</ImgOverlay>
              <Img img={images[9]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>4. dan – Nuwara Eliya</Header2>
          <Text>
            Odlučili smo se da ovaj dio puta ipak idemo taxijem kako bismo po putu vidjeli što više stvari, a onda ćemo do sljedeće destinacije konačno ići famoznim vlakom.
            Nuwara Eliya nam je zapravo bila spontana i odlična odluka.
            Na putu do tamo smo stali u tvornicu čaja Store field gdje smo dobili informacije o uzgoju, proizvodnji i pripremi čaja.
            Imali smo priliku probati te usput i kupiti originalne suvenire prijateljima i obitelji.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Prvi i četvrti su najbolji</ImgOverlay>
              <Img img={images[10]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Usputna stanica bio je i vidikovac za Ramboda falls.
            Pogled je predivan, a prošetali smo se i do jednog od slapova.
          </Text>
          <Text>
            Konačna destinacija je bila naša mala drvena kućica.
            Isprva smo se malo zapitala gdje smo mi to, jer je to bila otprilike zadnja kuća na brdu, ali kad smo vidjeli pogled, okolinu i sobu bili smo oduševljeni.
          </Text>
          <Text>
            U blizini našeg smještaja, nekih 5 minuta hoda se nalazio Lover's Leap waterfall.
            Otišli smo se prošetati na 5 minuta, a u šetnji smo se zadržali 2 sata hodajući kroz plantaže čaja, oko vodopada, po kamenju i stijenama.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Čaja im ne fali</ImgOverlay>
              <Img img={images[11]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Vodopad nedaleko smještaja</ImgOverlay>
              <ImgPortraitHalf img={images[12]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Letim</ImgOverlay>
              <ImgPortraitHalf img={images[13]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Aj da se malo sjednemo</ImgOverlay>
              <Img img={images[14]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Kišica je rominjala i pružala dodatnu čar, a sunce koje se javilo nakon toga je dalo predivne boje.
            Ovo mjesto nam je bilo dokaz da se spontanost nekad posebno isplati.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Odmor za dušu i tijelo</ImgOverlay>
              <ImgLandscapeHalf img={images[15]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Kišica se povlači</ImgOverlay>
              <ImgLandscapeHalf img={images[16]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>5. dan – Ella</Header2>
          <Text>
            Konačno smo dočekali vožnju vlakom na Šri Lanci.
            I stvarno je kul. Naš savjet je da, ako idete u smjeru Elle da sjedite na lijevoj strani, jer je tamo bio ljepši pogled.
            No bez obzira na to, stvarno je doživljaj.
            Danas je teško doživjeti to iskustvo, jer su svi vlakovi uglavnom brzi, zatvoreni i nemaju tu čar prošlosti.
          </Text>
          <Text>
            U Elli smo odlučili iskoristiti popodne za penjanje na Little Adam's Peak.
            Nevjerojatan pogled s ove planine po čijem vrhu mozes hodati, sjesti na neku od mnogobrojnih stijena koje se tamo nalazi i uživati u zelenilu, okolini i prirodi.
            S vrha se gleda na Ella Rock – drugu veliku prirodnu ljepotu ovog dijela.
            U Elli nam se posebno svidio Chill Café te smo tamo proveli većinu naših pauza za iće i piće i toplo ga preporučamo svima.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Pazi pazi</ImgOverlay>
              <Img img={images[17]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pogled u daljinu</ImgOverlay>
              <ImgLandscapeHalf img={images[18]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Dobar dan za hike</ImgOverlay>
              <ImgLandscapeHalf img={images[19]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>6. dan – Ella</Header2>
          <Text>
            Rani doručak i penjanje na Ella Rock – predivna priroda, mir i hlad.
            Preporuka je da se krene ranije zbog vrućina i pazi na lokalce koji vrebaju po putu kako bi vas odveli s pravog puta i kako bi dobili napojnicu jer su vam pomogli.
            Idu do te mjere da brišu oznake koje se po putu stavljaju.
            Dio puta je po pruzi, što ovu stazu čini dodatno zanimljivom.
            Nama je odlično koristila aplikacija maps.me za snalaženje.
            Samo vjerujte svom instiktu i karti i bit će sve ok.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Malo me trta</ImgOverlay>
              <Img img={images[20]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pogled na vrh od jučer</ImgOverlay>
              <ImgLandscapeHalf img={images[22]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Pogled na drugu stranu</ImgOverlay>
              <ImgLandscapeHalf img={images[21]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Text>
            Nakon popodnevne pauze isli smo vidjeti čuveni Nine Arch Bridge.
            Moram priznati da smo bili malo skeptični – neš ti mosta.
            Kao i svaki drugi most, vjerojatno je samo neka instagramska fora.
            Ali kad smo došli tamo – stvarno ima nešto u tom prizoru kamenog mosta s pravilnim lukovima u sred prašume.
            Čak smo imali priliku biti tamo u vrijeme kad prolazi vlak.
            Isplatilo se čekati, zajedno s ostalih 1524 turista.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Zabranjeno hodanje po tračnicama</ImgOverlay>
              <Img img={images[23]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Pa ti reci da nije piktoreskno</ImgOverlay>
              <Img img={images[24]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>7. dan – Diyaluma Falls</Header2>
          <Text>
            Na ovo mjesto zamalo nismo otišli, jer smo na internetu čitali upute i pitali se je li stvarno tako komplicirano za doći kao što je opisano na raznim blogovima.
            Ne – nije.
            Opet maps.me za praćenje puta.
            Vozač vas ostavi na lokaciji na gornjem dijelu slapova i krećete u predivnu avanturu po prirodnim bazenima, slapovima, jezercima, rijeci.
            Iako ima cca 1.5 vožnje od Elle, isplati se svake minute.
            Možda jedno od najljepših mjesta na Šri Lanci koje smo vidjeli.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Ima jedno sto metara do dole</ImgOverlay>
              <ImgLandscapeHalf img={images[25]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Op cup</ImgOverlay>
              <ImgLandscapeHalf img={images[26]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Užicali lokalca za sliku</ImgOverlay>
              <Img img={images[27]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Na povratku smo stali kod Rawana fallsa i večer po običaju završili u Chill caféu na smoothieju.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Još jedan vodopad na putu</ImgOverlay>
              <Img img={images[28]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>8. dan – Tangalle</Header2>
          <Text>
            E ovdje je Ana došla do svojeg mora konačno.
            Krenuli su dani jednostavnog uživanja na plažama i valovima za Anu i dani borbe sa suncem za Mislava.
            Proveli smo popodne i večer na našem dijelu plaže uz obaveznu šetnju za vrijeme zalaska.
            Ono što nas je cijelo vrijeme mučilo je gdje su ljudi? Ogromna predivna plaža koja je prazna i puno restorana i kafića koji nemaju turiste.
            Što je u pozadini toga nismo otkrili.
            Neki kažu teroristički napad, neki da nije sezona, a neki da je inače tako.
            Što god bilo, mi smo uživali u našoj samoći!
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Naš dom narednih dana</ImgOverlay>
              <ImgLandscapeHalf img={images[29]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Ide zeka izdaleka</ImgOverlay>
              <ImgLandscapeHalf img={images[30]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Uf kolko ima ove plaže</ImgOverlay>
              <ImgPortraitHalf img={images[31]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Stigao sam u raj</ImgOverlay>
              <ImgPortraitHalf img={images[32]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Šta reći, opće veselje</ImgOverlay>
              <Img img={images[33]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Obvezan zalazak</ImgOverlay>
              <Img img={images[34]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>9. dan – Tangalle</Header2>
          <Text>
            Prvo je palo gledanje izlaska sunca, a onda smo odlučili prošetati se po cijeloj dužini ove ogromne plaže i istražiti drugu stranu Tangallea te tržnicu.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Obvezan izlazak</ImgOverlay>
              <ImgLandscapeHalf img={images[35]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Jutro</ImgOverlay>
              <ImgLandscapeHalf img={images[36]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Ča je lipo (i vruće)</ImgOverlay>
              <Img img={images[37]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Svježe zagarantirano</ImgOverlay>
              <ImgLandscapeHalf img={images[38]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Kolko oš, 10, 20?</ImgOverlay>
              <ImgLandscapeHalf img={images[39]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Brodica</ImgOverlay>
              <ImgPortraitHalf img={images[40]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Palmica</ImgOverlay>
              <ImgPortraitHalf img={images[41]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Vole uličnu umjetnost</ImgOverlay>
              <ImgLandscapeHalf img={images[42]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Flota</ImgOverlay>
              <ImgLandscapeHalf img={images[43]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapPortraitLeft>
              <ImgOverlay>Opljačkan sam al nisu bili loši</ImgOverlay>
              <ImgPortraitHalf img={images[44]}/>
            </ImgWrapPortraitLeft>
            <ImgWrapPortrait>
              <ImgOverlay>Dolac</ImgOverlay>
              <ImgPortraitHalf img={images[45]}/>
            </ImgWrapPortrait>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Mitch Buchannon</ImgOverlay>
              <Img img={images[46]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>10. dan – Tangalle</Header2>
          <Text>
            Nakon obaveznog gledanja izlaska sunca odlučili smo se za malo dalju Dikwella beach na kojoj smo sad već klasično uživali u samoći i smoothiejima.
            Poslije ručka posjetili smo plažu poznatu po surferima – Hiriketiya (i otkrili gdje su ljudi).
            A za kraj dana smo se tuk tukom odvezli do Blue Beach Islanda – skrivenog otoka i uvalice, idealno za promatranje zalaska u miru.
            Čak i kad smo na odmoru i kad je vrijeme za plaže, nemamo mira i skačemo s mjesta na mjesto.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Oblačno jutro</ImgOverlay>
              <ImgLandscapeHalf img={images[47]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Nigdje žive duše</ImgOverlay>
              <ImgLandscapeHalf img={images[48]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Odlična plaža</ImgOverlay>
              <ImgLandscapeHalf img={images[49]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Samo da mi prođemo</ImgOverlay>
              <ImgLandscapeHalf img={images[50]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Surferski raj</ImgOverlay>
              <Img img={images[51]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pauza</ImgOverlay>
              <ImgLandscapeHalf img={images[52]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Obvezan zalazak</ImgOverlay>
              <ImgLandscapeHalf img={images[53]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>11. dan – Mirissa</Header2>
          <Text>
            Mirissa je blizu Tangallea i do nje je jednostavno doći taxijem, ali i busom.
            Okej, tu smo saznali da nismo toliko ludi i da na Šri Lanci ipak ima turista na plažama, a svi su očito u Mirissi.
            To je malo manje po našem ukusu, ali mi smo svejedno svoj mir.
            Ručak u Sunset baru, kupanje na Mirissa plaži i obilazak Parrot Rock Bridgea.
            Svašta ludoga nudi ta Šri Lanka.
            Mirissa Beach je inače odlična za igranje s valovima.
            Naše večeri odvijale su se u Turtle Baru, gdje smo pronašli svoj najdraži smoothie i držali ga se svaki dan.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Nisam dugo čekao smoothie</ImgOverlay>
              <ImgLandscapeHalf img={images[54]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Mali otočić po putu</ImgOverlay>
              <ImgLandscapeHalf img={images[55]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Popularna plaža</ImgOverlay>
              <Img img={images[56]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>12. dan – Galle</Header2>
          <Text>
            I ovaj dan smo započeli izlaskom sunca, jer smo mislili da ćemo zaobići turiste i instagramere na Coconut Tree Hillu.
            Međutim to su očito pomislili svi, tako da nam se čini da ne možete doći na prazno brdo pa se onda barem naspavajte.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Brdo kokosa na brdu</ImgOverlay>
              <Img img={images[57]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Ovo je bio dan kada smo isprobali i Šrilankanske buseve.
            E to je iskustvo bez kojeg se ne smije vratiti doma.
            Prvi dan sve je bilo zbunjujuće.
            U busu televizija, svira domaća glazba prikazuje se spot – sapunica.
            Ne znaš gdje staje, kad kreće… on samo ide.
            Gužva u tom istom busu priča je za sebe, a vožnja nije za one slabog srca.
            Ana se uglavnom smjestila iza vozača i pokušavala ne gledati što se događa na cesti.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Svjetionik u Galleu</ImgOverlay>
              <Img img={images[58]}/>
            </ImgWrap>
          </ImgRow>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Obvezan zalazak</ImgOverlay>
              <Img img={images[59]}/>
            </ImgWrap>
          </ImgRow>
          <Text>
            Naš put je išao prema Galleu gdje smo napravili šetnjicu po ovom gradu (jedinom gradu kojeg ima smisla vidjeti na Šri Lanci).
            Nakon Gallea uskočili smo u tuk tuk do Hikkaduwa plaže i tamo dočekali zalazak.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Surferi čekaju val</ImgOverlay>
              <ImgLandscapeHalf img={images[60]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Mogli bi doma polako</ImgOverlay>
              <ImgLandscapeHalf img={images[61]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Header2>13. dan – Unawatuna i Jungle Beach</Header2>
          <Text>
            Za ovaj dan smo se ponovno usudili ići busom, sad već kao pravi iskusnjaci znamo kako, gdje i za koliko.
            Prva postaja Unawatuna plaža, gdje preporučamo ručati u Mettha's Home Cooked Meals.
            Lagana šetnjica vodi nas do Jungle plaže, malo udaljenije uvale koja pruža još jedan fenomenalan doživljaj.
          </Text>
          <ImgRow>
            <ImgWrap>
              <ImgOverlay>Samo hlad buraz</ImgOverlay>
              <Img img={images[62]}/>
            </ImgWrap>
          </ImgRow>
          <Header2>14. dan – Kogalla / Aerodrom</Header2>
          <Text>
            Zadnji dan smo htjeli pronaći neku usamljeniju plažu i uspjeli smo – Kogalla.
            Ogromno prostranstvo pijeska, za koji smo se čudili zašto je tako prazna.
            Odgovor smo dobili kad smo se pokušali kupati.
            Valovi su prilično snažniji pa je teško i plivati i surfati.
            Ali nema veze, mi smo svoj mir dobili za kraj.
            Popili zadnja 2 smoothieja i zaputili se prema aerodromu na noćnu vožnju doma.
          </Text>
          <ImgRow>
            <ImgWrapLandscapeLeft>
              <ImgOverlay>Pogled na jednu stranu</ImgOverlay>
              <ImgLandscapeHalf img={images[63]}/>
            </ImgWrapLandscapeLeft>
            <ImgWrapLandscape>
              <ImgOverlay>Pogled na drugu stranu</ImgOverlay>
              <ImgLandscapeHalf img={images[64]}/>
            </ImgWrapLandscape>
          </ImgRow>
          <Intro>
            Naše drugo duže putovanje došlo je svom kraju.
            Proglašavamo ga uspješnim.
            A sada slijedi povratak u stvarnost i maštanje o sljedećoj vrućoj zimskoj destinaciji.
          </Intro>
        </BlogContainer>
      </Container>
    </>
  )
}

export default Blog
