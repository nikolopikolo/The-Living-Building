import type { InteractiveZone } from '../types';

export const INTERACTIVE_ZONES: InteractiveZone[] = [
  {
    id: 'rooftop',
    floorLevel: 'ROOF',
    floorLevelKa: 'სახურავი',
    titleEn: 'The Weathered Rooftop & Aerial Canopy',
    titleKa: 'დაძველებული სახურავი და საჰაერო სივრცე',
    subtitleEn: 'Avian nests, Soviet TV antennas, and wind-blown spontaneous flora',
    subtitleKa: 'ფრინველთა ბუდეები, საბჭოთა ანტენები და ქარით მოტანილი ფლორა',
    descriptionEn: 'The asphalt-felt rooftop acts as a threshold between domestic shelter and urban sky. Common swifts and feral pigeons nest in the ventilation cavities beneath rusted galvanized sheet metal, while lichen and spontaneous moss colonies flourish around disused television antennas.',
    descriptionKa: 'ბიტუმით დაფარული სახურავი წარმოადგენს ზღვარს საცხოვრებელ თავშესაფარსა და ურბანულ ცას შორის. მეჩხერი ნამგალები და მტრედები ბუდობენ სავენტილაციო შახტებში, ხოლო ხავსი და ლიქენი იკავებს მიტოვებულ ანტენებს.',
    extendedNarrativeEn: 'Spatial ethnography reveals the rooftop not merely as a boundary of building insulation, but as an elevated commons shared between avian inhabitants and technical infrastructure. Over four decades of resident modifications, television antennas were anchored with improvised guy-wires, creating artificial perches for swift colonies. Rainwater pooling in bitumen depressions forms micro-waterholes for birds, while windborne seed dispersal creates pioneer plant colonies in degraded concrete mortar joints.',
    extendedNarrativeKa: 'სივრცითი ეთნოგრაფია აჩვენებს სახურავს არა მხოლოდ როგორც საიზოლაციო ზღვარს, არამედ როგორც ფრინველთა და ტექნიკური ინფრასტრუქტურის საერთო საჰაერო სივრცეს. ათწლეულების განმავლობაში დამონტაჟებული ანტენების კაბელები გადაიქცა ნამგალების დასაჯდომ ადგილებად, ხოლო ბიტუმის ჩაღრმავებებში შეგროვებული წვიმის წყალი წარმოქმნის ბუნებრივ წყალსაცავებს.',
    architecturalNotesEn: 'Standard prefabricated bitumen flat roof with cast-concrete parapet caps and zinc ventilation chimneys, bearing traces of multi-decade telecommunication accretions.',
    architecturalNotesKa: 'სტანდარტული ასაწყობი ბიტუმიანი ბრტყელი სახურავი რკინაბეტონის პარაპეტებით და თუთიის სავენტილაციო მილებით.',
    perspectives: ['ANIMAL', 'PLANT', 'INFRASTRUCTURE'],
    isDemonstration: true,
    multispecies: [
      {
        category: 'fauna',
        nameEn: 'Common Swift (Apus apus) & Feral Pigeons',
        nameKa: 'ნამგალა (Apus apus) და მტრედი',
        detailEn: 'Nesting inside parapet crevices and ventilation hoods; utilizing antenna masts as urban perches',
        detailKa: 'ბუდობს პარაპეტის ნაპრალებსა და სავენტილაციო ხუფებში; ანტენებს იყენებს სათვალთვალოდ'
      },
      {
        category: 'flora',
        nameEn: 'Parietaria, Lichen & Chimney Sprout',
        nameKa: 'კედლის ფესვი, ლიქენი და ყვავილი საკვამურზე',
        detailEn: 'Resilient flora colonizing mortar gaps and weathered bitumen gravel',
        detailKa: 'ხარობს დუღაბის ნაკერებსა და დაძველებული ბიტუმის კენჭებში'
      },
      {
        category: 'infrastructure',
        nameEn: 'Broadcast Antennas & Chimney Flues',
        nameKa: 'სატელევიზიო ანტენები და საკვამლეები',
        detailEn: 'Layered analog coaxial masts, emergency water tank on stilts, and ventilation updrafts',
        detailKa: 'ანალოგური ანტენების ტყე, ავარიული წყლის ავზი და ბუნებრივი გამწოვი მილები'
      }
    ],
    coordinates: {
      x: 175,
      y: 50,
      width: 670,
      height: 110,
    },
    markerPoint: {
      x: 510,
      y: 110,
    },
    images: [
      {
        id: 'roof-img-01',
        captionEn: 'Archival section sketch: Parapet detail and television antenna array',
        captionKa: 'არქიტექტურული ჩანახატი: პარაპეტისა და ანტენების კვანძი',
        year: '1984',
        fieldNoteEn: 'Precast concrete coping blocks showing typical moisture staining and lichen growth.'
      }
    ],
    audioRecordings: [
      {
        id: 'roof-snd-01',
        titleEn: 'Soundscape: High-altitude wind in guy-wires & Swift calls',
        titleKa: 'აუდიოჩანაწერი: ქარის ზუზუნი ანტენებში და ნამგალების ხმები',
        duration: '01:42',
        descriptionEn: 'Field recording of dusk swift migrations circling rooftop chimneys in Saburtalo.',
        descriptionKa: 'საბურთალოს საცხოვრებელი კორპუსის სახურავზე ჩაწერილი საღამოს ბუნებრივი ხმები.',
        isDemonstration: true
      }
    ],
    relatedZoneIds: ['balcony-garden', 'stairwell']
  },
  {
    id: 'balcony-garden',
    floorLevel: 'FL 04',
    floorLevelKa: 'სართ. 4',
    titleEn: 'Suspended Balcony Garden & Clothesline',
    titleKa: 'დაკიდული აივანი-ბაღი და სარეცხის თოკები',
    subtitleEn: 'Domestic micro-farming, hanging vines, and cantilevered laundry lines',
    subtitleKa: 'საოჯახო მიკრო-მეურნეობა, ვაზი და დაკიდული თოკები',
    descriptionEn: 'The cantilevered balcony extends domestic territory into open air. Ceramic yogurt pots and repurposed wooden crates host heirloom tomatoes and climbing grapevines (Isabella), while pulleys tether laundry lines across to neighboring facades, forming a multispecies micro-climate.',
    descriptionKa: 'კონსოლური აივანი საცხოვრებელ სივრცეს ჰაერში აფართოებს. თიხის ქოთნებსა და ხის ყუთებში ხარობს პომიდორი და იზაბელას ვაზი, ხოლო სარეცხის თოკები მეზობელ ფასადებთან აკავშირებს შენობას.',
    extendedNarrativeEn: 'Tbilisi residential balconies are liminal socio-ecological zones. Suspended between private domesticity and public airspace, residents cultivate food plants, dry textiles, and provide nectar corridors for pollinators. The cantilevered reinforced concrete slab undergoes structural modification as residents add customized steel brackets, timber shade lattices, and extended laundry pulleys that generate rhythmic acoustic traces throughout the building block.',
    extendedNarrativeKa: 'თბილისური აივნები წარმოადგენს შუალედურ სოციო-ეკოლოგიურ ზონას. პირადი ბინისა და საჯარო სივრცის მიჯნაზე მცხოვრებლები აშენებენ მცენარეებს, აშრობენ სარეცხს და ქმნიან მიკროკლიმატურ ზოლს. კონსოლური რკინაბეტონის ფილა ადგილობრივი ხელოსნური მოდიფიკაციებით იძენს დამატებით ფუნქციებს.',
    architecturalNotesEn: 'Cantilevered reinforced concrete slab with steel balustrade, personalized welded iron modifications, and custom wooden shade slats typical of Tbilisi residential micro-adaptations.',
    architecturalNotesKa: 'კონსოლური რკინაბეტონის ფილა ფოლადის მოაჯირით და ადგილობრივი შედუღებული რკინის კონსტრუქციებით.',
    perspectives: ['HUMAN', 'PLANT', 'ANIMAL'],
    isDemonstration: true,
    multispecies: [
      {
        category: 'flora',
        nameEn: 'Grapevine (Vitis labrusca) & Potted Herbs',
        nameKa: 'იზაბელას ვაზი და ქოთნის მწვანილები',
        detailEn: 'Shading the eastern glazing and cooling the concrete facade',
        detailKa: 'ჩრდილავს აღმოსავლეთის მინებს და აგრილებს ბეტონის ფასადს'
      },
      {
        category: 'human',
        nameEn: 'Domestic Textile Drying & Shading',
        nameKa: 'სარეცხის გაშრობა და დაჩრდილვა',
        detailEn: 'Pulley lines generating wind movement, acoustic creaks, and neighborhood visibility',
        detailKa: 'თოკების ჭახჭახი, ქარის მოძრაობა და სამეზობლო კომუნიკაცია'
      },
      {
        category: 'fauna',
        nameEn: 'House Sparrows & Domestic Honeybees',
        nameKa: 'ბეღურები და ფუტკრები',
        detailEn: 'Foraging in tomato blossoms and nesting under balcony eaves',
        detailKa: 'იკვებებიან ყვავილების ნექტრით და ბუდობენ აივნის ქვეშ'
      }
    ],
    coordinates: {
      x: 60,
      y: 260,
      width: 375,
      height: 105,
    },
    markerPoint: {
      x: 155,
      y: 310,
    },
    images: [
      {
        id: 'balcony-img-01',
        captionEn: 'Fieldwork photographic study: Balcony pulley mechanics and vine shading',
        captionKa: 'ეთნოგრაფიული ფოტო: აივნის ჭოჭონაქი და ვაზის დაჩრდილვა',
        year: '2024',
        fieldNoteEn: 'Demonstrates hand-welded cantilever extensions and potted soil containers.'
      }
    ],
    audioRecordings: [
      {
        id: 'balcony-snd-01',
        titleEn: 'Soundscape: Clothesline pulley squeak and flutter of cotton',
        titleKa: 'აუდიოჩანაწერი: სარეცხის თოკის ჭრიალი და ნიავის ხმაური',
        duration: '01:15',
        descriptionEn: 'Field recording capturing the characteristic cadence of neighborhood clothes drying.',
        descriptionKa: 'თბილისური ეზოსთვის დამახასიათებელი სარეცხის გაფენის ხმოვანი პეიზაჟი.',
        isDemonstration: true
      }
    ],
    relatedZoneIds: ['residential-apartment', 'courtyard']
  },
  {
    id: 'residential-apartment',
    floorLevel: 'FL 03',
    floorLevelKa: 'სართ. 3',
    titleEn: 'Lived Interior: Apartment 3-B',
    titleKa: 'საცხოვრებელი ინტერიერი: ბინა 3-B',
    subtitleEn: 'Layered Soviet parquet, wall kilims, indoor plants, and domestic memories',
    subtitleKa: 'საბჭოთა მუხის პარკეტი, ხალიჩა კედელზე და ოთახის მცენარეები',
    descriptionEn: 'An inhabited living room illustrating the domestic interior ecology of Tbilisi. Herringbone oak parquet polished over forty years, a hand-woven Caucasian carpet insulating the concrete party wall, a vintage floor lamp, and a thriving Monstera plant basking beside lace curtains.',
    descriptionKa: 'დასახლებული ოთახი, რომელიც თბილისის საცხოვრებელ ეკოლოგიას გადმოსცემს: ორმოცი წლის მუხის პარკეტი, კედლის ხალიჩა ბეტონის თბოიზოლაციისთვის, რადიოლა და ფანჯარასთან მონსტერა.',
    extendedNarrativeEn: 'Inside Apartment 3-B, interior material culture documents how prefabricated mass housing becomes intimately personalized. The standard 2.50m room bay acts as an acoustic and thermal refuge. Hand-woven Caucasian kilims hung upon structural concrete panels provide both cultural continuity and vital thermal insulation against winter cold. Beside the cast-iron "harmonica" radiator, house plants such as Monstera and spider plants regulate internal humidity while filtered sunlight passes through layered lace curtains.',
    extendedNarrativeKa: 'ბინა 3-B-ს ინტერიერი ასახავს, თუ როგორ გარდაიქმნება ტიპური პანელური საცხოვრებელი პერსონალურ ეკოსისტემად. კედელზე ჩამოკიდებული ხალიჩა არა მხოლოდ დეკორაცია, არამედ ბეტონის თბოიზოლაციის საშუალებაა. თუჯის რადიატორთან განთავსებული მონსტერა არეგულირებს ოთახის მიკროკლიმატს, ხოლო ფარდები ფილტრავს დღის სინათლეს.',
    architecturalNotesEn: 'Standard 2.50m ceiling height apartment bay with 140mm load-bearing precast concrete panels, timber double-hung casement windows, and cast-iron radiator beneath sill.',
    architecturalNotesKa: 'სტანდარტული 2.50მ ჭერის სიმაღლე, 140მმ მზიდი რკინაბეტონის პანელები, ხის ორმაგი ფანჯრები და თუჯის რადიატორი.',
    perspectives: ['HUMAN', 'PLANT', 'INFRASTRUCTURE'],
    isDemonstration: true,
    multispecies: [
      {
        category: 'human',
        nameEn: 'Archival Domestic Life & Reading Resident',
        nameKa: 'საოჯახო არქივი და მცხოვრები',
        detailEn: 'Lined book stacks, ceramic tea cup, radio console, and quiet evening reading',
        detailKa: 'წიგნების თაროები, თიხის ჩაის ჭიქა, რადიოლა და საღამოს კითხვა'
      },
      {
        category: 'flora',
        nameEn: 'Monstera Deliciosa & Indoor Plants',
        nameKa: 'მონსტერა და ოთახის მცენარეები',
        detailEn: 'Regulating indoor moisture and filtering particulate dust in domestic living quarters',
        detailKa: 'არეგულირებს ოთახის ტენიანობას და ასუფთავებს ჰაერს'
      },
      {
        category: 'infrastructure',
        nameEn: 'Cast-iron Soviet Radiator ("Harmonica")',
        nameKa: 'თუჯის საბჭოთა რადიატორი („აკორდეონი“)',
        detailEn: 'Seasonal thermal heartbeat warming humans, pets, and plants through central district lines',
        detailKa: 'სითბოს სეზონური წყარო ადამიანებისთვის, კატებისა და მცენარეებისთვის'
      }
    ],
    coordinates: {
      x: 445,
      y: 360,
      width: 240,
      height: 100,
    },
    markerPoint: {
      x: 565,
      y: 410,
    },
    images: [
      {
        id: 'apt-img-01',
        captionEn: 'Archival interior documentation: Oak herringbone parquet and mid-century armchair',
        captionKa: 'ინტერიერის ფოტოფიქსაცია: მუხის პარკეტი და სავარძელი',
        year: '1979',
        fieldNoteEn: 'Typical Soviet apartment bay interior layout in standard series block.'
      }
    ],
    audioRecordings: [
      {
        id: 'apt-snd-01',
        titleEn: 'Soundscape: Clock ticking, turning book pages & muffled radiator hiss',
        titleKa: 'აუდიოჩანაწერი: საათის წიკწიკი, წიგნის ფურცლები და რადიატორის შიშინით სითბო',
        duration: '02:05',
        descriptionEn: 'Interior room tone recording of quiet afternoon domestic rhythms.',
        descriptionKa: 'მშვიდი საცხოვრებელი ოთახის ხმოვანი გარემო.',
        isDemonstration: true
      }
    ],
    relatedZoneIds: ['balcony-garden', 'stairwell']
  },
  {
    id: 'stairwell',
    floorLevel: 'FL 01-05',
    floorLevelKa: 'სადარბაზო',
    titleEn: 'The Communal Stairwell (Sadarbozo)',
    titleKa: 'საერთო სადარბაზო',
    subtitleEn: 'Vertical corridor of greeting, feline sleep, milk saucers, and mailboxes',
    subtitleKa: 'მისალმების ვერტიკალური დერეფანი, კატების განსასვენებელი და საფოსტო ყუთები',
    descriptionEn: 'The Soviet sadarbozo functions as a semi-public vertical street. A resident tabby cat rests on the sun-warmed concrete landing beside a ceramic saucer of milk. Weathered blue tin mailboxes with hand-painted numbers flank the ground entrance, while drafts carry aromas of simmering tkhmali and ground coffee.',
    descriptionKa: 'სადარბაზო ნახევრად საჯარო ვერტიკალური ქუჩაა. მზით გამთბარ საფეხურზე მძინარე კატა, რძის თიხის ჯამი, ძველი ლურჯი საფოსტო ყუთები და ყავისა და ტყემლის სურნელი.',
    extendedNarrativeEn: 'The sadarbozo serves as the social and ecological spine of the building. Unlike western hallway designs designed exclusively for rapid circulation, the Tbilisi stairwell operates as an informal salon. Landings function as greeting nodes, cat sleeping ledges, and drying spots for umbrellas. Feline residents such as "Niko" are communally fed by different floor residents in ceramic saucers, functioning as informal pest control agents that protect the building basement and apartments from rodents.',
    extendedNarrativeKa: 'სადარბაზო წარმოადგენს შენობის სოციალურ და ეკოლოგიურ ხერხემალს. დასავლური დერეფნებისგან განსხვავებით, თბილისური სადარბაზო არაფორმალური შეხვედრების სივრცეა. კიბის ბაქნები არის მისალმების, მეზობლობისა და კატების მოსასვენებელი ადგილი. კატა „ნიკო“ ყველას მეგობარია და იცავს სადარბაზოს მღრღნელებისგან.',
    architecturalNotesEn: 'Prefabricated cast terrazzo-finish flight steps with open metal railings, cast iron mail delivery banks, and overhead bare filament bulbs operated by manual toggle.',
    architecturalNotesKa: 'ასაწყობი ტერაცოს საფეხურები ლითონის მოაჯირით, საფოსტო ყუთების ბლოკი და საერთო განათება.',
    perspectives: ['HUMAN', 'ANIMAL', 'INFRASTRUCTURE'],
    isDemonstration: true,
    multispecies: [
      {
        category: 'fauna',
        nameEn: 'Community Cat (Felis catus) "Niko"',
        nameKa: 'სადარბაზოს კატა „ნიკო“',
        detailEn: 'Curled on landing beside ceramic milk saucer; tail twitching and keeping rodents in check',
        detailKa: 'ისვენებს კიბის ბაქანზე რძის ჯამთან; იცავს შენობას მღრღნელებისგან'
      },
      {
        category: 'human',
        nameEn: 'Communal Mailboxes & Vertical Neighborliness',
        nameKa: 'საფოსტო ყუთები და მეზობლობა',
        detailEn: 'Tin mailboxes, door peepholes, leaning umbrellas, and chance daily encounters',
        detailKa: 'საფოსტო ყუთები, კარის ჭუჭრუტანები და ყოველდღიური შეხვედრები'
      },
      {
        category: 'infrastructure',
        nameEn: 'Exposed Electrical Riser & Bare Filament Lights',
        nameKa: 'ღია ელექტროგაყვანილობა და განათება',
        detailEn: 'Vertical conduit riser with floor junction boxes and voltage-fluctuating incandescent lamps',
        detailKa: 'ვერტიკალური გამანაწილებელი ფარი და ნათურები'
      }
    ],
    coordinates: {
      x: 685,
      y: 160,
      width: 140,
      height: 500,
    },
    markerPoint: {
      x: 755,
      y: 410,
    },
    images: [
      {
        id: 'stair-img-01',
        captionEn: 'Field study: Terrazzo stairs and Soviet mailbox bank on ground landing',
        captionKa: 'საველე კვლევა: ტერაცოს კიბე და ლურჯი საფოსტო ყუთები',
        year: '2023',
        fieldNoteEn: 'Precast flight steps showing decades of daily foot traffic wear.'
      }
    ],
    audioRecordings: [
      {
        id: 'stair-snd-01',
        titleEn: 'Soundscape: Resonant footsteps on terrazzo & Cat purr',
        titleKa: 'აუდიოჩანაწერი: ნაბიჯების ექო კიბეზე და კატის კრუტუნი',
        duration: '01:30',
        descriptionEn: 'Field acoustic capture of reverberant stairwell acoustics and feline purring.',
        descriptionKa: 'სადარბაზოს დამახასიათებელი აკუსტიკა და კატის მშვიდი კრუტუნი.',
        isDemonstration: true
      }
    ],
    relatedZoneIds: ['residential-apartment', 'courtyard', 'basement']
  },
  {
    id: 'basement',
    floorLevel: 'BSMT',
    floorLevelKa: 'სარდაფი',
    titleEn: 'Subterranean Infrastructure & Storage (Sardapi)',
    titleKa: 'მიწისქვეშა ინფრასტრუქტურა და სარდაფი',
    subtitleEn: 'District heating arteries, water pipes, preserved jars, and moss',
    subtitleKa: 'თბომომარაგების მილები, კონსერვების სათავსო და ტენის ხავსი',
    descriptionEn: 'The humid basement anchors the metabolic life of the apartment block. Massive cast-iron district heating pipes insulated in jute lagging snake through arched masonry foundations. Beside private wooden storage lockers holding pickled jonjoli and homemade Saperavi wine, damp moss colonies take root in constant subterranean coolness.',
    descriptionKa: 'ნესტიანი სარდაფი შენობის მეტაბოლურ ბირთვს წარმოადგენს. ჯუთით შეფუთული თბომომარაგებისა და წყლის მილები, ხის სათავსოები ჯონჯოლით და საფერავით, და გრილ ქვის კედლებზე მოდებული ხავსი.',
    extendedNarrativeEn: 'Underground, the building foundation reveals its hidden engineering metabolism. Heavy district heating pipes transmit pressurized hot water into branch risers, radiating thermal warmth into the cool soil. High relative humidity and darkness create optimal microhabitats for bryophyte mosses and moisture-loving ferns along foundation joints. Simultaneously, individual wooden lockers (sardapi) preserve domestic culinary memory: jars of pickled jonjoli and ajika resting beside demijohns of homemade Kakhetian wine.',
    extendedNarrativeKa: 'მიწისქვეშა სართული შენობის საინჟინრო მეტაბოლიზმს ააშკარავებს. გათბობის მილები სითბოს გადასცემს მიწას, ხოლო მაღალი ტენიანობა ქმნის იდეალურ გარემოს ხავსისა და გვიმრებისთვის. ხის სათავსოებში თაობები ინახავენ ზამთრის მარაგს: მწნილებს, საწებელსა და საოჯახო ღვინოს.',
    architecturalNotesEn: 'Monolithic reinforced concrete foundation footings paired with rubble stone retaining walls, high humidity vents, and main utility service penetrations.',
    architecturalNotesKa: 'მონოლითური რკინაბეტონის საძირკველი, ქვის საყრდენი კედლები და საინჟინრო კომუნიკაციების ძირითადი კვანძები.',
    perspectives: ['INFRASTRUCTURE', 'PLANT', 'HUMAN'],
    isDemonstration: true,
    multispecies: [
      {
        category: 'infrastructure',
        nameEn: 'District Heating Pipes & Dripping Gate Valve',
        nameKa: 'გათბობის ცენტრალური მილები და ონკანი',
        detailEn: 'Heavy cast-iron pipe arteries with slow rhythmic condensation drip into catchment basin',
        detailKa: 'თბური ვენები და წვეთოვანი კონდენსატი'
      },
      {
        category: 'flora',
        nameEn: 'Hygrophytic Bryophytes (Cave Moss) & Maidenhair',
        nameKa: 'ტენის მოყვარული ხავსი და გვიმრა',
        detailEn: 'Flourishing on moist masonry foundation piers and shaded condensation zones',
        detailKa: 'ხარობს ნესტიან ქვისა და ბეტონის ზედაპირებზე'
      },
      {
        category: 'human',
        nameEn: 'Pickled Preserves & Saperavi Demijohns',
        nameKa: 'მწნილეული და ღვინის დამჯანები',
        detailEn: 'Generational food preservation utilizing constant natural subterranean chill',
        detailKa: 'ზამთრის მარაგები მუდმივ ბუნებრივ სიგრილეში'
      }
    ],
    coordinates: {
      x: 180,
      y: 660,
      width: 645,
      height: 110,
    },
    markerPoint: {
      x: 500,
      y: 715,
    },
    images: [
      {
        id: 'bsmt-img-01',
        captionEn: 'Archival section drawing: Foundation footings, drainage pipe, and utility entry',
        captionKa: 'საინჟინრო ნახაზი: საძირკვლის კვანძი და კომუნიკაციების შეყვანა',
        year: '1976',
        fieldNoteEn: 'Masonry rubble foundation combined with cast reinforced concrete column bases.'
      }
    ],
    audioRecordings: [
      {
        id: 'bsmt-snd-01',
        titleEn: 'Soundscape: Subterranean pipe hum & Rhythmic water droplet',
        titleKa: 'აუდიოჩანაწერი: მილების დაბალი გუგუნი და წყლის წვეთის ხმა',
        duration: '01:50',
        descriptionEn: 'Field recording documenting thermal water vibrations and pipe drip cadence.',
        descriptionKa: 'მიწისქვეშა მილების თბური ვიბრაცია და წვეთების რიტმული ხმა.',
        isDemonstration: true
      }
    ],
    relatedZoneIds: ['stairwell', 'courtyard']
  },
  {
    id: 'courtyard',
    floorLevel: 'YARD',
    floorLevelKa: 'ეზო',
    titleEn: 'The Shared Courtyard (Italian / Tbilisi Yard)',
    titleKa: 'საერთო ეზო („თბილისური ეზო“)',
    subtitleEn: 'Grape arbor shade, neighborhood dog, wooden benches, and fig tree',
    subtitleKa: 'ტალავერის ჩრდილი, უბნის ძაღლი, მერხები და ლეღვის ხე',
    descriptionEn: 'The semi-enclosed courtyard is the social lung of the building. Steel cables support a canopy of grapevine tendrils that filter harsh Caucasian summer sunlight. A friendly community street dog sleeps in the shade of a fig tree, while elderly residents gather on wooden benches carved from local pine to exchange neighborhood news.',
    descriptionKa: 'ნახევრად შემოზღუდული ეზო შენობის სოციალური ფილტვია. ტალავერის ვაზი ფილტრავს ზაფხულის მზეს. ლეღვის ჩრდილში მძინარე უბნის ძაღლი და ფიჭვის მერხებზე შეკრებილი მეზობლები.',
    extendedNarrativeEn: 'The Tbilisi courtyard (ezó) is an open-air collective living room where species boundaries blur naturally. Steel pipe trellises carry heavy Isabella grapevine canopies, creating an overarching vegetative ceiling that reduces ambient temperatures by up to 4°C during sweltering summers. Vaccinated community street dogs like "Buba" and agile cats like "Tsitsia" share territory with residents playing dominoes on slatted benches, demonstrating an organic multispecies coexistence founded on mutual care.',
    extendedNarrativeKa: 'თბილისური ეზო ღია ცის ქვეშ მოწყობილი საერთო მისაღები ოთახია. ლითონის კონსტრუქციაზე გაშლილი ტალავერის ვაზი ზაფხულის სიცხეში 4 გრადუსით ამცირებს ტემპერატურას. საყურიანი უბნის ძაღლი „ბუბა“ და კატა „ციცია“ მშვიდობიანად თანაარსებობენ დომინოს მეთამაშე მეზობლებთან, რაც ქმნის ურთიერთმზრუნველობაზე დაფუძნებულ ეკოსისტემას.',
    architecturalNotesEn: 'Permeable cracked bitumen and flagstone paving, central drainage gully, welded steel grape trellis frame, and perimeter stone boundary walls with fig and mulberry trees.',
    architecturalNotesKa: 'დაბზარული ასფალტი და ქვაფენილი, ცენტრალური სადრენაჟო არხი, ვაზის ტალავერი და ლეღვის ხეები.',
    perspectives: ['ANIMAL', 'PLANT', 'HUMAN'],
    isDemonstration: true,
    multispecies: [
      {
        category: 'fauna',
        nameEn: 'Tbilisi Community Dog ("Buba") & Courtyard Cat ("Tsitsia")',
        nameKa: 'უბნის ძაღლი („ბუბა“) და კატა („ციცია“)',
        detailEn: 'Communal street animals co-cared for by residents, resting on burlap mat and fountain wall',
        detailKa: 'მეზობლების მიერ მოვლილი უბნის ცხოველები'
      },
      {
        category: 'flora',
        nameEn: 'Common Fig Tree (Ficus carica) & Grape Arbor (Talavari)',
        nameKa: 'ლეღვის ხე (Ficus carica) და ვაზის ტალავერი',
        detailEn: 'Natural solar shading, microclimatic cooling, and seasonal shared harvest',
        detailKa: 'ბუნებრივი დაჩრდილვა და შემოდგომის ტკბილი მოსავალი'
      },
      {
        category: 'human',
        nameEn: 'Dominoes Bench & Communal Water Fountain',
        nameKa: 'დომინოს მერხი და ეზოს ონკანი',
        detailEn: 'Outdoor stone water fountain, slatted pine bench, and intergenerational storytelling',
        detailKa: 'ეზოს სასმელი წყარო, ფიჭვის მერხი და მეზობლური შეკრებები'
      }
    ],
    coordinates: {
      x: 10,
      y: 540,
      width: 175,
      height: 230,
    },
    markerPoint: {
      x: 95,
      y: 660,
    },
    images: [
      {
        id: 'yard-img-01',
        captionEn: 'Fieldwork site plan: Grapevine canopy footprint and courtyard furniture arrangement',
        captionKa: 'ეზოს სივრცითი სქემა: ტალავერის ჩრდილი და მერხების განლაგება',
        year: '2024',
        fieldNoteEn: 'Permeable flagstones creating micro-habitats for urban vegetation.'
      }
    ],
    audioRecordings: [
      {
        id: 'yard-snd-01',
        titleEn: 'Soundscape: Domino tiles clatter, Water tap drip & Rustling fig leaves',
        titleKa: 'აუდიოჩანაწერი: დომინოს ქვების ჭახანი, ონკანის ჩხრიალი და ლეღვის ფოთლების შრიალი',
        duration: '02:18',
        descriptionEn: 'Field recording capturing late afternoon social life in a traditional Tbilisi yard.',
        descriptionKa: 'თბილისური ეზოს საღამოს მრავალხმიანი ეთნოგრაფიული ხმები.',
        isDemonstration: true
      }
    ],
    relatedZoneIds: ['stairwell', 'balcony-garden', 'basement']
  }
];
