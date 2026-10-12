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
    architecturalNotesEn: 'Standard prefabricated bitumen flat roof with cast-concrete parapet caps and zinc ventilation chimneys, bearing traces of multi-decade telecommunication accretions.',
    architecturalNotesKa: 'სტანდარტული ასაწყობი ბიტუმიანი ბრტყელი სახურავი რკინაბეტონის პარაპეტებით და თუთიის სავენტილაციო მილებით.',
    multispecies: [
      {
        category: 'fauna',
        nameEn: 'Common Swift (Apus apus) & Pigeons',
        nameKa: 'ნამგალა (Apus apus) და მტრედი',
        detailEn: 'Nesting inside parapet crevices and ventilation hoods',
        detailKa: 'ბუდობს პარაპეტის ნაპრალებსა და სავენტილაციო ხუფებში'
      },
      {
        category: 'flora',
        nameEn: 'Parietaria & Rooftop Lichen',
        nameKa: 'კედლის ფესვი და ლიქენი',
        detailEn: 'Colonizing degraded mortar joints and moist shaded gullies',
        detailKa: 'სახლდება დაშლილ დუღაბის ნაკერებსა და ტენიან კუთხეებში'
      },
      {
        category: 'infrastructure',
        nameEn: 'Broadcast Antennas & Chimney Flues',
        nameKa: 'სატელევიზიო ანტენები და საკვამლეები',
        detailEn: 'Decades of layered coaxial cabling and natural updraft flues',
        detailKa: 'მრავალწლიანი კოაქსიალური კაბელები და ბუნებრივი გამწოვი მილები'
      }
    ],
    coordinates: {
      x: 180,
      y: 60,
      width: 660,
      height: 100,
    },
    markerPoint: {
      x: 510,
      y: 110,
    }
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
    architecturalNotesEn: 'Cantilevered reinforced concrete slab with steel balustrade, personalized welded iron modifications, and custom wooden shade slats typical of Tbilisi residential micro-adaptations.',
    architecturalNotesKa: 'კონსოლური რკინაბეტონის ფილა ფოლადის მოაჯირით და ადგილობრივი შედუღებული რკინის კონსტრუქციებით.',
    multispecies: [
      {
        category: 'flora',
        nameEn: 'Grapevine (Vitis labrusca) & Potted Herbs',
        nameKa: 'იზაბელას ვაზი და ქოთნის მწვანილები',
        detailEn: 'Shading the eastern glazing and cooling the concrete facade',
        detailKa: 'ჩრდილავს აღმოსავლეთის მინებს და აგრილებს ბეტონის ფასადს'
      },
      {
        category: 'fauna',
        nameEn: 'House Sparrows & Domestic Honeybees',
        nameKa: 'ბეღურები და ფუტკრები',
        detailEn: 'Foraging in tomato blossoms and nesting under balcony eaves',
        detailKa: 'იკვებებიან ყვავილების ნექტრით და ბუდობენ აივნის ქვეშ'
      },
      {
        category: 'human',
        nameEn: 'Domestic Textile Drying & Shading',
        nameKa: 'სარეცხის გაშრობა და დაჩრდილვა',
        detailEn: 'Pulley lines generating wind movement and community visibility',
        detailKa: 'თოკების ჭახჭახი და ქარის მოძრაობა'
      }
    ],
    coordinates: {
      x: 130,
      y: 260,
      width: 305,
      height: 100,
    },
    markerPoint: {
      x: 235,
      y: 310,
    }
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
    architecturalNotesEn: 'Standard 2.50m ceiling height apartment bay with 140mm load-bearing precast concrete panels, timber double-hung casement windows, and cast-iron radiator beneath sill.',
    architecturalNotesKa: 'სტანდარტული 2.50მ ჭერის სიმაღლე, 140მმ მზიდი რკინაბეტონის პანელები, ხის ორმაგი ფანჯრები და თუჯის რადიატორი.',
    multispecies: [
      {
        category: 'human',
        nameEn: 'Archival Domestic Life & Book Collection',
        nameKa: 'საოჯახო არქივი და ბიბლიოთეკა',
        detailEn: 'Lined book stacks, ceramic tea set, and embroidered tablecloth',
        detailKa: 'წიგნების თაროები, კერამიკული ჩაიდანი და ნაქარგი სუფრა'
      },
      {
        category: 'flora',
        nameEn: 'Monstera Deliciosa & Spider Plant',
        nameKa: 'მონსტერა და ქლოროფიტუმი',
        detailEn: 'Regulating indoor moisture and filtering particulate dust',
        detailKa: 'არეგულირებს ოთახის ტენიანობას და ასუფთავებს ჰაერს'
      },
      {
        category: 'infrastructure',
        nameEn: 'Cast-iron Soviet Radiator ("Harmonica")',
        nameKa: 'თუჯის საბჭოთა რადიატორი („აკორდეონი“)',
        detailEn: 'Seasonal thermal heartbeat warming humans, pets, and plants',
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
    }
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
    architecturalNotesEn: 'Prefabricated cast terrazzo-finish flight steps with open metal railings, cast iron mail delivery banks, and overhead bare filament bulbs operated by manual toggle.',
    architecturalNotesKa: 'ასაწყობი ტერაცოს საფეხურები ლითონის მოაჯირით, საფოსტო ყუთების ბლოკი და საერთო განათება.',
    multispecies: [
      {
        category: 'fauna',
        nameEn: 'Community Cat (Felis catus) "Niko"',
        nameKa: 'სადარბაზოს კატა „ნიკო“',
        detailEn: 'Co-owned by building residents; keeps rodent population in check',
        detailKa: 'სადარბაზოს ბინადარი; იცავს შენობას მღრღნელებისგან'
      },
      {
        category: 'human',
        nameEn: 'Communal Mailboxes & Vertical Neighborliness',
        nameKa: 'საფოსტო ყუთები და მეზობლობა',
        detailEn: 'Informal message board, key handoffs, and chance daily encounters',
        detailKa: 'არაფორმალური შეხვედრებისა და კომუნიკაციის ადგილი'
      },
      {
        category: 'infrastructure',
        nameEn: 'Open Wiring Racks & Concrete Risers',
        nameKa: 'ღია ელექტროგაყვანილობა და შახტები',
        detailEn: 'Exposed electrical conduit channels linking floor distributions',
        detailKa: 'ღია სადენები და სართულშორისი გამანაწილებელი ფარები'
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
    }
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
    architecturalNotesEn: 'Monolithic reinforced concrete foundation footings paired with rubble stone retaining walls, high humidity vents, and main utility service penetrations.',
    architecturalNotesKa: 'მონოლითური რკინაბეტონის საძირკველი, ქვის საყრდენი კედლები და საინჟინრო კომუნიკაციების ძირითადი კვანძები.',
    multispecies: [
      {
        category: 'infrastructure',
        nameEn: 'District Heating Pipes & Water Manifold',
        nameKa: 'გათბობისა და წყალმომარაგების ცენტრალური მილები',
        detailEn: 'Thermal veins radiating warmth into surrounding subsoil',
        detailKa: 'თბური ვენები, რომლებიც სითბოს გადასცემს მიწისქვეშა სივრცეს'
      },
      {
        category: 'flora',
        nameEn: 'Hygrophytic Bryophytes (Cave Moss)',
        nameKa: 'ტენის მოყვარული ხავსი (Bryophyta)',
        detailEn: 'Flourishing on moist masonry condensate surfaces',
        detailKa: 'ხარობს ნესტიან ქვისა და ბეტონის ზედაპირებზე'
      },
      {
        category: 'human',
        nameEn: 'Pickled Preserves & Saperavi Jars',
        nameKa: 'მწნილეული და ღვინის დოქები',
        detailEn: 'Generational food preservation utilizing constant natural chill',
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
    }
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
    architecturalNotesEn: 'Permeable cracked bitumen and flagstone paving, central drainage gully, welded steel grape trellis frame, and perimeter stone boundary walls with fig and mulberry trees.',
    architecturalNotesKa: 'დაბზარული ასფალტი და ქვაფენილი, ცენტრალური სადრენაჟო არხი, ვაზის ტალავერი და ლეღვის ხეები.',
    multispecies: [
      {
        category: 'fauna',
        nameEn: 'Tbilisi Community Dog ("Buba")',
        nameKa: 'უბნის ძაღლი („ბუბა“)',
        detailEn: 'Ear-tagged, vaccinated, communal guardian fed by neighbors',
        detailKa: 'ვაქცინირებული, საყურიანი უბნის მცველი'
      },
      {
        category: 'flora',
        nameEn: 'Common Fig Tree (Ficus carica) & Grape Arbor',
        nameKa: 'ლეღვის ხე (Ficus carica) და ვაზის ტალავერი',
        detailEn: 'Providing microclimatic cooling and seasonal shared harvest',
        detailKa: 'ბუნებრივი კონდიცირება და შემოდგომის მოსავალი'
      },
      {
        category: 'human',
        nameEn: 'Dominoes Bench & Intergenerational Gathering',
        nameKa: 'დომინოს მერხი და საერთო შეკრების ადგილი',
        detailEn: 'Shared domestic conversations extending beyond private walls',
        detailKa: 'საერთო საუბრები და შეხვედრები ღია ცის ქვეშ'
      }
    ],
    coordinates: {
      x: 15,
      y: 550,
      width: 165,
      height: 220,
    },
    markerPoint: {
      x: 95,
      y: 660,
    }
  }
];
