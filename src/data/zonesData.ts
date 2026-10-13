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
    mediaRecords: [
      {
        id: 'roof-ph-01',
        locationId: 'rooftop',
        type: 'image',
        title: 'Parapet Coping & Telecommunication Masts',
        titleKa: 'პარაპეტის რკინაბეტონის ფილები და ანტენების ტყე',
        caption: 'Architectural survey of weathered prefabricated coping blocks, rusted guy-wire anchors, and television antenna brackets.',
        captionKa: 'დაძველებული ასაწყობი ბლოკების, დაჟანგული სამაგრებისა და ანტენების არქიტექტურული ფოტოფიქსაცია.',
        date: '1984',
        credit: 'Tbilisi Institute of Urban Survey',
        creditKa: 'თბილისის ურბანული კვლევის ინსტიტუტი',
        mediaFormat: '35mm B/W Gelatin Silver Negative Scan',
        isPlaceholder: true,
        notes: 'Specimen demonstrates spontaneous lichen colonization along concrete joints facing southwest.',
        notesKa: 'ნიმუში ასახავს ლიქენების კოლონიზაციას სამხრეთ-დასავლეთით მიმართულ ბეტონის ნაკერებზე.'
      },
      {
        id: 'roof-ph-02',
        locationId: 'rooftop',
        type: 'image',
        title: 'Avian Perches on Disused Coaxial Rigging',
        titleKa: 'ნამგალებისა და მტრედების სათვალთვალო წერტილები ანტენებზე',
        caption: 'Field photography recording feral pigeons and common swifts occupying deactivated Soviet rooftop antennae.',
        captionKa: 'ფრინველთა მიერ საბჭოთა პერიოდის ანტენების დასაჯდომ და სათვალთვალო წერტილებად გამოყენების დოკუმენტაცია.',
        date: '2023',
        credit: 'Multispecies Fieldwork Archive',
        creditKa: 'მულტისახეობრივი საველე არქივი',
        mediaFormat: 'Silver Halide Film Contact Print',
        isPlaceholder: true,
        notes: 'Documented during dusk feeding runs at high thermal drafts over Saburtalo residential district.',
        notesKa: 'დაფიქსირებულია საღამოს კვების დროს საბურთალოს საჰაერო დინებებში.'
      },
      {
        id: 'roof-ph-03',
        locationId: 'rooftop',
        type: 'image',
        title: 'Parietaria & Spontaneous Moss in Bitumen Seams',
        titleKa: 'კედლის ფესვი და ხავსის კოლონია ბიტუმის ნაკერში',
        caption: 'Macro botanical study of pioneer vegetation surviving in degraded asphalt-felt water-catchment pockets.',
        captionKa: 'პიონერული მცენარეულობის მაკრო-კვლევა დაძველებული ასფალტ-ბიტუმის წყალშემკრებ ჩაღრმავებებში.',
        date: '2024',
        credit: 'Urban Botanical Survey',
        creditKa: 'ურბანული ბოტანიკის კვლევა',
        mediaFormat: 'Macro Field Photography Plate',
        isPlaceholder: true,
        notes: 'Root systems anchor into weathered lime-sand mortar beneath galvanized sheet edge.',
        notesKa: 'ფესვთა სისტემა ემაგრება დუღაბის ფენას თუთიის ხუფის ქვეშ.'
      },
      {
        id: 'roof-aud-01',
        locationId: 'rooftop',
        type: 'audio',
        title: 'High-Altitude Wind in Guy-Wires & Swift Calls',
        titleKa: 'ქარის ზუზუნი ანტენების მავთულებში და ნამგალების ხმები',
        caption: 'Acoustic field recording capturing resonant high-frequency wind vibrations in steel rigging and swift cries.',
        captionKa: 'საველე აკუსტიკური ჩანაწერი: ქარის ვიბრაცია ფოლადის მავთულებში და ნამგალების გუნდის ხმები.',
        duration: '01:42',
        date: 'June 2024',
        credit: 'Acoustic Ethnography Lab',
        creditKa: 'აკუსტიკური ეთნოგრაფიის ლაბორატორია',
        mediaFormat: 'Nagra 4.2 Portable 1/4" Reel',
        recordingLocation: 'Rooftop Parapet, Saburtalo Block 4',
        recordingLocationKa: 'სახურავის პარაპეტი, საბურთალოს მე-4 კვარტალი',
        isPlaceholder: true,
        transcript: 'Field sound log (19:40 Dusk): Ambient wind velocity 14 knots from Mtatsminda ridge. High-pitched acoustic whistles caused by 3mm galvanized guy-wires supporting television array. Periodic Doppler frequency sweeps of Common Swift (Apus apus) hunting airborne insects.',
        transcriptKa: 'საველე ხმოვანი დღიური (19:40 საღამო): მთაწმინდის ქედიდან მომავალი ქარი (14 კვანძი). ანტენის მავთულების მაღალსიხშირული ზუზუნი. ჰაერში მწერებზე მონადირე ნამგალების მკვეთრი ხმოვანი ტალღები.'
      },
      {
        id: 'roof-vid-01',
        locationId: 'rooftop',
        type: 'video',
        title: 'Aerial Territory: Swifts Over Tbilisi Skyline',
        titleKa: 'საჰაერო ტერიტორია: ნამგალების ფრენა თბილისის ცაზე',
        caption: '16mm archival cinematography documenting swift flight formations navigating chimney stacks and rooftop telecommunications.',
        captionKa: '16მმ კინოფირი: ნამგალების ფრენის ტრაექტორიები სახურავის საკვამლეებსა და ანტენებს შორის.',
        date: '1982',
        credit: 'Georgian Film Documentary Studio Archive',
        creditKa: 'ქართული დოკუმენტური ფილმის სტუდია',
        mediaFormat: '16mm Silent Color Reversal Film',
        isPlaceholder: true
      }
    ],
    narrativeSections: {
      researchContextEn: 'Field research on the building rooftop investigates the boundary between domestic architectural shelter and the urban atmosphere. In late-Soviet Tbilisi housing blocks, the flat bitumen roof transitioned from a strictly regulated technical utility into an informal commons populated by television antenna arrays, pigeon lofts, and resident maintenance interventions.',
      researchContextKa: 'სახურავის საველე კვლევა შეისწავლის ზღვარს საცხოვრებელ თავშესაფარსა და ურბანულ ატმოსფეროს შორის. გვიანსაბჭოთა პერიოდის თბილისში ბრტყელი ბიტუმიანი სახურავი მკაცრად კონტროლირებადი ტექნიკური სივრციდან გადაიქცა არაფორმალურ საერთო სივრცედ.',
      spatialObservationsEn: 'The expansive concrete parapet captures intense Caucasian solar radiation by day, releasing stored warmth into the nocturnal boundary layer. Degraded bitumen felt exhibits cyclical expansion cracks where windblown organic dust accumulates, creating fertile micro-hollows alongside zinc-clad ventilation exhausts.',
      spatialObservationsKa: 'ბეტონის პარაპეტი დღის განმავლობაში აკუმულირებს მზის რადიაციას და ღამით გამოყოფს სითბოს. ბიტუმის ზედაპირის მიკრო-ნაპრალებში გროვდება ქარით მოტანილი ორგანული მტვერი, რაც ხელსაყრელ პირობებს ქმნის მცენარეებისთვის.',
      multispeciesRelationshipsEn: 'Avian and vegetative life forms utilize human infrastructure as artificial cliffs. Common swifts nest securely within hollow precast parapet blocks, while television guy-wires provide elevated vantage perches. Lichen and Parietaria plants extract calcium carbonate directly from eroding mortar joints.',
      multispeciesRelationshipsKa: 'ფრინველები და მცენარეები ადამიანის მიერ შექმნილ ინფრასტრუქტურას კლდოვან რელიეფად აღიქვამენ. ნამგალები ბუდობენ პარაპეტის ღრუებში, ანტენის მავთულები გამოიყენება სათვალთვალოდ, ხოლო ლიქენები იკვებებიან დუღაბის მინერალებით.',
      architecturalContextEn: 'Standard Soviet panel series (1-464A / Tbilisi modification) featuring prefabricated bitumen membrane roofing, precast concrete coping ballast, cast iron internal storm drainage hoppers, and sheet metal ventilation shaft cowls.',
      architecturalContextKa: 'სტანდარტული საბჭოთა პანელური სერია (1-464A თბილისური მოდიფიკაცია) ასაწყობი ბიტუმიანი ჰიდროიზოლაციით, რკინაბეტონის პარაპეტის ფილებით და თუჯის წყალსაწრეტი მილებით.'
    },
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
      x: 75,
      y: 258,
      width: 120,
      height: 102,
    },
    markerPoint: {
      x: 145,
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
    mediaRecords: [
      {
        id: 'balc-ph-01',
        locationId: 'balcony-garden',
        type: 'image',
        title: 'Welded Cantilever Trellis & Grapevine Canopy',
        titleKa: 'შედუღებული კონსოლი და ვაზის ტალავერი აივანზე',
        caption: 'Resident-engineered steel extension frame supporting Isabella grapevine tendrils outside fourth-floor aperture.',
        captionKa: 'მეოთხე სართულზე მცხოვრებლების მიერ შედუღებული რკინის კონსტრუქცია იზაბელას ვაზის საყრდენად.',
        date: '1988',
        credit: 'Tbilisi Vernacular Architecture Archive',
        creditKa: 'თბილისის ხალხური არქიტექტურის არქივი',
        mediaFormat: '35mm B/W Film Negative Scan',
        isPlaceholder: true,
        notes: 'Handmade turnbuckles anchored directly into reinforced concrete edge beam.',
        notesKa: 'ხელოსნური სამაგრები ჩამაგრებულია რკინაბეტონის მზიდ კოჭში.'
      },
      {
        id: 'balc-ph-02',
        locationId: 'balcony-garden',
        type: 'image',
        title: 'Clothesline Pulley Mechanics & Textile Drying',
        titleKa: 'სარეცხის ჭოჭონაქის მექანიზმი და გაშრობა',
        caption: 'Counter-weighted clothesline cable spanning across courtyard canyon to opposing facade anchor.',
        captionKa: 'ეზოს თავზე მეზობელ კორპუსთან გადაჭიმული სარეცხის თოკი ჭოჭონაქით.',
        date: '2023',
        credit: 'Socio-Spatial Field Records',
        creditKa: 'სოციო-სივრცითი საველე ჩანაწერები',
        mediaFormat: 'Medium Format Silver Halide Scan',
        isPlaceholder: true,
        notes: 'Heavy wet linen dampens concrete facade temperatures while flapping generates characteristic neighborhood acoustics.',
        notesKa: 'სველი თეთრეული აგრილებს ბეტონს და ნიავზე ქმნის დამახასიათებელ ხმაურს.'
      },
      {
        id: 'balc-ph-03',
        locationId: 'balcony-garden',
        type: 'image',
        title: 'Repurposed Domestic Planters on Concrete Sill',
        titleKa: 'გადაკეთებული საოჯახო ქოთნები და ნერგები რაფაზე',
        caption: 'Enamel bowls, wooden fruit crates, and yogurt buckets converted into micro-agricultural plant containers.',
        captionKa: 'მინანქრის ჯამები, ხის ყუთები და ქოთნები გამოყენებული მიკრო-მეურნეობისთვის.',
        date: '2024',
        credit: 'Urban Ecology Fieldwork',
        creditKa: 'ურბანული ეკოლოგიის კვლევა',
        mediaFormat: 'Botanical Field Documentation Plate',
        isPlaceholder: true,
        notes: 'Cultivation of purple basil (rehani), mint, and cherry tomatoes in thin urban soil depth.',
        notesKa: 'რეჰანის, პიტნისა და პომიდვრის გაშენება შეზღუდულ ნიადაგში.'
      },
      {
        id: 'balc-aud-01',
        locationId: 'balcony-garden',
        type: 'audio',
        title: 'Clothesline Pulley Cadence & Cotton Flutter',
        titleKa: 'სარეცხის ჭოჭონაქის რიტმი და ქსოვილის შრიალი',
        caption: 'Acoustic field recording of iron pulley wheels rotating and cotton linen fluttering in Mtkvari river thermal draft.',
        captionKa: 'საველე ჩანაწერი: რკინის ჭოჭონაქის ტრიალი და სარეცხის ფრიალი მტკვრის ხეობის ნიავზე.',
        duration: '01:15',
        date: 'May 2024',
        credit: 'Acoustic Ethnography Lab',
        creditKa: 'აკუსტიკური ეთნოგრაფიის ლაბორატორია',
        mediaFormat: 'Field Binaural Audio Recording',
        recordingLocation: 'Fourth Floor Balcony, East Elevation',
        recordingLocationKa: 'მე-4 სართულის აივანი, აღმოსავლეთის ფასადი',
        isPlaceholder: true,
        transcript: 'Field sound log (11:15 Morning): Rhythmic metallic squeak of cast-iron pulley bearing every 4 seconds as wet laundry line is extended outward. Intermittent sparrow chirps foraging among tomato planter boxes. Distant hum of traffic along Vazha-Pshavela Avenue.',
        transcriptKa: 'საველე ხმოვანი დღიური (11:15 დილა): თუჯის ჭოჭონაქის მეტალისებრი ხმა ყოველ 4 წამში თოკის გადაწევისას. ბეღურების ჭიკჭიკი პომიდვრის ყუთებთან. ვაჟა-ფშაველას გამზირის შორეული გუგუნი.'
      },
      {
        id: 'balc-vid-01',
        locationId: 'balcony-garden',
        type: 'video',
        title: 'Suspended Domesticity: Balcony Life on FL 04',
        titleKa: 'დაკიდული ყოფა: აივნის ცხოვრება მეოთხე სართულზე',
        caption: '16mm observation film capturing domestic watering routines, clothes drying, and grapevine wind movement.',
        captionKa: '16მმ კინოჩანაწერი: მცენარეების მორწყვა, სარეცხის გაფენა და ვაზის ფოთლების რხევა.',
        date: '1985',
        credit: 'Ethnographic Film Archives',
        creditKa: 'ეთნოგრაფიული ფილმების არქივი',
        mediaFormat: '16mm Kodachrome Color Reel',
        isPlaceholder: true
      }
    ],
    narrativeSections: {
      researchContextEn: 'The cantilevered balcony functions as an architectural liminal zone in Tbilisi. Situated neither wholly inside the private home nor entirely within public space, balconies act as micro-agricultural terraces and communal communication stages.',
      researchContextKa: 'კონსოლური აივანი თბილისში წარმოადგენს არქიტექტურულ შუალედურ ზონას. ის არც მთლიანად კერძო ბინაა და არც საჯარო სივრცე, არამედ მიკრო-მეურნეობისა და სამეზობლო ურთიერთობების პლატფორმა.',
      spatialObservationsEn: 'Protruding 1.20 meters beyond the exterior facade, the concrete balcony slab captures thermal air currents rising from the courtyard. Potted greenery creates a localized shade canopy that lowers window glass temperatures by up to 5°C during summer afternoons.',
      spatialObservationsKa: 'ფასადიდან 1.20 მეტრით გამოწეული ბეტონის ფილა იჭერს ეზოდან ამომავალ თბილ ჰაერს. გამწვანება ქმნის ბუნებრივ ჩრდილს, რაც ზაფხულის სიცხეში 5 გრადუსით აგრილებს ფანჯრებს.',
      multispeciesRelationshipsEn: 'Grapevine tendrils and potted flowering herbs establish an ecological stepping-stone between urban soil and high-altitude bird corridors. House sparrows nest under the concrete cantilever, while domestic honeybees pollinate blossom clusters.',
      multispeciesRelationshipsKa: 'ვაზის ყლორტები და ქოთნის ყვავილები ქმნის ეკოლოგიურ ხიდს მიწასა და საჰაერო სივრცეს შორის. ბეღურები ბუდობენ აივნის ფილის ქვეშ, ხოლო ფუტკრები აბინძურებენ ყვავილებს.',
      architecturalContextEn: 'Precast cantilevered concrete slab tied into exterior load-bearing panel joints. Often customized by occupants through welded steel structural frames, laundry pulleys, and shading screens.',
      architecturalContextKa: 'ასაწყობი კონსოლური რკინაბეტონის ფილა, ჩამაგრებული გარე მზიდ პანელებში. მცხოვრებლების მიერ მოდიფიცირებული შედუღებული ლითონის ჩარჩოებითა და სარეცხის თოკებით.'
    },
    relatedZoneIds: ['rooftop', 'courtyard', 'residential-apartment']
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
      width: 235,
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
    mediaRecords: [
      {
        id: 'apt-ph-01',
        locationId: 'residential-apartment',
        type: 'image',
        title: 'Herringbone Oak Parquet & Wool Kilim Insulation',
        titleKa: 'მუხის პარკეტი და შალის ხალიჩა კედელზე',
        caption: 'Architectural documentation of domestic floor finishes and thermal tapestry hung against cold reinforced concrete panel.',
        captionKa: 'იატაკის საფარისა და ბეტონის ცივ კედელზე დაკიდებული შალის ხალიჩის ფოტოფიქსაცია.',
        date: '1979',
        credit: 'State Archive of Applied Art',
        creditKa: 'გამოყენებითი ხელოვნების სახელმწიფო არქივი',
        mediaFormat: '35mm Color Transparency Slide Scan',
        isPlaceholder: true,
        notes: 'Hand-woven Caucasian geometric kilim reduces radiant cold transfer by approximately 3.2°C.',
        notesKa: 'კავკასიური გეომეტრიული ხალიჩა მნიშვნელოვნად ამცირებს კედლის სიცივეს.'
      },
      {
        id: 'apt-ph-02',
        locationId: 'residential-apartment',
        type: 'image',
        title: 'Cast-Iron Radiator & Monstera Microclimate',
        titleKa: 'თუჯის რადიატორი და მონსტერას მიკროკლიმატი',
        caption: 'Domestic indoor ecology: Soviet MS-140 radiator providing convection warmth for tropical houseplant specimens.',
        captionKa: 'თუჯის რადიატორი MS-140, რომელიც სითბოს აწვდის ტროპიკულ ოთახის მცენარეებს.',
        date: '2022',
        credit: 'Domestic Material Culture Archive',
        creditKa: 'მატერიალური კულტურის არქივი',
        mediaFormat: 'Silver Gelatin Print Scan',
        isPlaceholder: true,
        notes: 'Ceramic saucer placed atop radiator ribs functions as a natural thermal humidifier.',
        notesKa: 'რადიატორზე დადგმული წყლიანი თეფში ბუნებრივ დამატენიანებლად მუშაობს.'
      },
      {
        id: 'apt-ph-03',
        locationId: 'residential-apartment',
        type: 'image',
        title: 'Lace Curtains & Filtered Daylight on Casement Sill',
        titleKa: 'მაქმანის ფარდები და გაფილტრული სინათლე რაფაზე',
        caption: 'Dual-pane wooden casement window frame with traditional patterned lace curtain softening Caucasian sunlight.',
        captionKa: 'ხის ორმაგი ფანჯარა და ტრადიციული მაქმანის ფარდა, რომელიც არბილებს მზის სინათლეს.',
        date: '2024',
        credit: 'Vernacular Interior Ethnography',
        creditKa: 'ინტერიერის ეთნოგრაფიული კვლევა',
        mediaFormat: 'Archival Plate Scan',
        isPlaceholder: true,
        notes: 'Double timber sash prevents severe winter thermal bridge losses.',
        notesKa: 'ორმაგი ხის ჩარჩო იცავს ოთახს ზამთრის სიცივისგან.'
      },
      {
        id: 'apt-aud-01',
        locationId: 'residential-apartment',
        type: 'audio',
        title: 'Domestic Interior Tone: Radiator Hiss & Clock Pendulum',
        titleKa: 'ბინის ინტერიერის ხმები: რადიატორის შიშინი და საათი',
        caption: 'Quiet room tone recording documenting the acoustic heartbeat of Apartment 3-B on a winter afternoon.',
        captionKa: 'ბინა 3-B-ს მშვიდი აკუსტიკური გარემო ზამთრის ნაშუადღევს: გათბობის შიშინი და კედლის საათი.',
        duration: '02:05',
        date: 'January 2024',
        credit: 'Acoustic Ethnography Lab',
        creditKa: 'აკუსტიკური ეთნოგრაფიის ლაბორატორია',
        mediaFormat: 'Low-Noise Room Tone Master',
        recordingLocation: 'Apartment 3-B Living Room',
        recordingLocationKa: 'ბინა 3-B, მისაღები ოთახი',
        isPlaceholder: true,
        transcript: 'Field sound log (15:20 Afternoon): Steady low-amplitude thermal hiss from central radiator valve (approx. 450Hz). Mechanical brass pendulum clock ticking at 60 bpm. Soft turn of paperback novel pages. Occasional muffled footsteps from apartment above.',
        transcriptKa: 'საველე ხმოვანი დღიური (15:20): ცენტრალური გათბობის რადიატორის მუდმივი დაბალი შიშინი. კედლის მექანიკური საათის რიტმული წიკწიკი (60 დარტყმა წუთში). წიგნის ფურცლის გადაშლის ხმა. ზედა სართულიდან შემოსული მკრთალი ნაბიჯები.'
      },
      {
        id: 'apt-vid-01',
        locationId: 'residential-apartment',
        type: 'video',
        title: 'Domestic Afternoon: Sunlight Across Oak Parquet',
        titleKa: 'შინაური ნაშუადღევი: სინათლის მოძრაობა მუხის პარკეტზე',
        caption: 'Archival 16mm footage documenting domestic routines, quiet study, and the slow movement of filtered light.',
        captionKa: '16მმ არქივული კადრი: მშვიდი მეცადინეობა, ჩაის დალევა და სინათლის ნელი მოძრაობა ოთახში.',
        date: '1980',
        credit: 'Georgian Television Archive',
        creditKa: 'საქართველოს ტელევიზიის არქივი',
        mediaFormat: '16mm Color Archival Print',
        isPlaceholder: true
      }
    ],
    narrativeSections: {
      researchContextEn: 'Apartment 3-B represents the domestic interior ecology of late-Soviet mass housing in Tbilisi. In a standardized 2.50-meter module, residents cultivated intimate sensory sanctuaries using rugs, timber furniture, and indoor plants.',
      researchContextKa: 'ბინა 3-B წარმოადგენს თბილისის გვიანსაბჭოთა პანელური საცხოვრისის ინტერიერის ეკოლოგიას. 2.50-მეტრიან სტანდარტულ მოდულში მცხოვრებლები ქმნიდნენ მყუდრო თავშესაფარს ხალიჩებით, ხის ავეჯითა და მცენარეებით.',
      spatialObservationsEn: 'The apartment bay measures 3.20 by 5.40 meters, bounded by 140mm load-bearing precast concrete panels. Woolen textiles hung on exterior party walls absorb both radiant cold and acoustic reverberations from neighboring units.',
      spatialObservationsKa: 'ოთახის ზომაა 3.20 x 5.40 მეტრი, შემოსაზღვრული 140მმ მზიდი რკინაბეტონის პანელებით. კედელზე დაკიდებული შალის ხალიჩა შთანთქავს სიცივესაც და მეზობლების ხმაურსაც.',
      multispeciesRelationshipsEn: 'Large tropical houseplants like Monstera and Chlorophytum regulate winter interior humidity, which is dried out by central cast-iron radiators. Domestic companion animals nest near floor registers where thermal warmth is greatest.',
      multispeciesRelationshipsKa: 'ტროპიკული მცენარეები (მონსტერა, ქლოროფიტუმი) არეგულირებენ ოთახის ტენიანობას, რომელსაც თუჯის რადიატორები აშრობს. შინაური ცხოველები თბილ რადიატორებთან ისვენებენ.',
      architecturalContextEn: 'Prefabricated large-panel structure (Khrushcheva/Brezhnevka evolution) with tongue-and-groove solid oak flooring over asphalt mastic, cast-iron MS-140 sectional radiators, and timber window frames.',
      architecturalContextKa: 'ასაწყობი მსხვილპანელური კონსტრუქცია, მასიური მუხის პარკეტით, თუჯის სექციური რადიატორებით (MS-140) და ხის ორმაგი ფანჯრებით.'
    },
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
      x: 688,
      y: 160,
      width: 137,
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
    mediaRecords: [
      {
        id: 'stair-ph-01',
        locationId: 'stairwell',
        type: 'image',
        title: 'Blue Enamel Mailbox Bank on Ground Landing',
        titleKa: 'ლურჯი მინანქრის საფოსტო ყუთების ბლოკი სადარბაზოში',
        caption: 'Soviet-era postal compartment bank with stenciled flat numbers and handwritten name tags on ground landing.',
        captionKa: 'საბჭოთა პერიოდის ლურჯი საფოსტო ყუთები ტრაფარეტით დაწერილი ბინის ნომრებით პირველ სართულზე.',
        date: '1986',
        credit: 'Postal and Municipal Survey Archive',
        creditKa: 'საფოსტო და მუნიციპალური არქივი',
        mediaFormat: '35mm B/W Gelatin Silver Negative Scan',
        isPlaceholder: true,
        notes: 'Hand-painted apartment revisions track multigenerational family residency.',
        notesKa: 'ხელით გადაწერილი ნომრები ასახავს ოჯახების თაობათა ცვლას.'
      },
      {
        id: 'stair-ph-02',
        locationId: 'stairwell',
        type: 'image',
        title: 'Community Cat "Niko" on Sunlit Terrazzo Landing',
        titleKa: 'სადარბაზოს კატა „ნიკო“ მზით გამთბარ ტერაცოს ბაქანზე',
        caption: 'Field photographic documentation of the building community cat resting beside a communal milk saucer.',
        captionKa: 'სადარბაზოს კატის ფოტოფიქსაცია მეორე სართულის ბაქანზე რძის თიხის ჯამთან.',
        date: '2023',
        credit: 'Multispecies Ethnography Project',
        creditKa: 'მულტისახეობრივი ეთნოგრაფიული პროექტი',
        mediaFormat: '35mm Film Contact Sheet Frame',
        isPlaceholder: true,
        notes: 'Feline residents are collectively cared for by multiple apartments, functioning as natural rodent sentinels.',
        notesKa: 'კატას უვლიან სხვადასხვა სართულის მეზობლები; ის იცავს შენობას მღრღნელებისგან.'
      },
      {
        id: 'stair-ph-03',
        locationId: 'stairwell',
        type: 'image',
        title: 'Exposed Electrical Riser & Vintage Switchgear',
        titleKa: 'ღია ელექტროგაყვანილობის ფარი და ძველი ჩამრთველები',
        caption: 'Vertical infrastructure conduit showing decades of spliced telephone wires and fuse boxes.',
        captionKa: 'ვერტიკალური ელექტროგაყვანილობის შახტა ათწლეულების განმავლობაში დამატებული კაბელებით.',
        date: '2024',
        credit: 'Architectural Field Survey',
        creditKa: 'არქიტექტურული საველე კვლევა',
        mediaFormat: 'Technical Field Study Plate',
        isPlaceholder: true,
        notes: 'Manual toggle switch operates 60W bare filament bulb illuminating flight landings.',
        notesKa: 'მექანიკური ჩამრთველი რთავს 60-ვატიან ნათურას კიბის გასანათებლად.'
      },
      {
        id: 'stair-aud-01',
        locationId: 'stairwell',
        type: 'audio',
        title: 'Stairwell Reverberation: Terrazzo Steps & Feline Purr',
        titleKa: 'სადარბაზოს ექო: ნაბიჯები ტერაცოზე და კატის კრუტუნი',
        caption: 'Acoustic field recording capturing the reverberant concrete shaft acoustics of the Tbilisi sadarbozo.',
        captionKa: 'საველე ჩანაწერი: ტერაცოს კიბის დამახასიათებელი ექო, მეზობლური მისალმება და კატის კრუტუნი.',
        duration: '01:30',
        date: 'April 2024',
        credit: 'Acoustic Ethnography Lab',
        creditKa: 'აკუსტიკური ეთნოგრაფიის ლაბორატორია',
        mediaFormat: 'Stereo Field Microphone Master',
        recordingLocation: 'Second Floor Stair Landing',
        recordingLocationKa: 'მე-2 სართულის კიბის ბაქანი',
        isPlaceholder: true,
        transcript: 'Field sound log (17:45 Evening): Reverb decay time approx. 2.1 seconds in raw concrete stairwell shaft. Heavy leather boot footsteps ascending from ground floor. Cat purring loudly at 25Hz on second landing. Metal mailbox latch clacking shut in entrance foyer.',
        transcriptKa: 'საველე ხმოვანი დღიური (17:45): სადარბაზოს ბეტონის შახტის ექო (2.1 წამი). პირველი სართულიდან მომავალი ნაბიჯების ხმა. მეორე სართულზე მწოლიარე კატის კრუტუნი. საფოსტო ყუთის თუნუქის სახურავის დახურვის ხმაური.'
      },
      {
        id: 'stair-vid-01',
        locationId: 'stairwell',
        type: 'video',
        title: 'The Vertical Street: Daily Rhythms in the Sadarbozo',
        titleKa: 'ვერტიკალური ქუჩა: ყოველდღიური რიტმები სადარბაზოში',
        caption: '16mm observation cinema documenting vertical encounters, children returning from school, and neighbor greetings.',
        captionKa: '16მმ კინოფირი: სკოლიდან დაბრუნებული ბავშვები, მეზობლების მისალმება და სადარბაზოს მოძრაობა.',
        date: '1978',
        credit: 'Georgian Film Archive',
        creditKa: 'ქართული ფილმის არქივი',
        mediaFormat: '16mm B/W Document Film',
        isPlaceholder: true
      }
    ],
    narrativeSections: {
      researchContextEn: 'In Tbilisi mass housing blocks, the communal stairwell (sadarbozo) functions not as an anonymous exit passage, but as a semi-public vertical street where social ties and interspecies relationships are maintained.',
      researchContextKa: 'თბილისის საცხოვრებელ კორპუსებში სადარბაზო არ არის უბრალო გასასვლელი დერეფანი. ის ფუნქციონირებს როგორც ნახევრად საჯარო ვერტიკალური ქუჩა, სადაც ყალიბდება სამეზობლო ურთიერთობები.',
      spatialObservationsEn: 'The vertical stair core acts as a natural acoustic chimney and thermal convective flue. Precast terrazzo steps endure constant friction, polishing into smooth surfaces that hold cooler temperatures in the summer.',
      spatialObservationsKa: 'კიბის ვერტიკალური სივრცე ბუნებრივი აკუსტიკური და თერმული მილია. ასაწყობი ტერაცოს საფეხურები ათწლეულების ნაბიჯებისგან გაპრიალებულია და ზაფხულში სასიამოვნო სიგრილეს ინარჩუნებს.',
      multispeciesRelationshipsEn: 'Resident street cats inhabit the stairwell landings under the collective care of neighbors. Communal feeding dishes prevent vermin infestations and create a shared obligation of stewardship across floors.',
      multispeciesRelationshipsKa: 'სადარბაზოს კატები ცხოვრობენ კიბის ბაქნებზე მეზობლების საერთო მზრუნველობის ქვეშ. მათი მოვლა იცავს შენობას მღრღნელებისგან და აერთიანებს სხვადასხვა სართულის მცხოვრებლებს.',
      architecturalContextEn: 'Modular precast terrazzo flight stair units anchored to vertical concrete load-bearing cores, with painted steel banisters and vertical utility conduit chases.',
      architecturalContextKa: 'ასაწყობი ტერაცოს კიბის მარშები, ჩამაგრებული მზიდ რკინაბეტონის ბირთვში, შეღებილი ლითონის მოაჯირებითა და საინჟინრო შახტებით.'
    },
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
      width: 650,
      height: 110,
    },
    markerPoint: {
      x: 505,
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
    mediaRecords: [
      {
        id: 'bsmt-ph-01',
        locationId: 'basement',
        type: 'image',
        title: 'District Heating Pipes & Thermal Lagging',
        titleKa: 'თბომომარაგების ცენტრალური მილები და ჯუთის იზოლაცია',
        caption: 'Engineering survey documentation of insulated municipal heating main lines feeding vertical building risers.',
        captionKa: 'თბომომარაგების ცენტრალური მაგისტრალური მილების საინჟინრო ფოტოფიქსაცია სარდაფში.',
        date: '1976',
        credit: 'Tbilisi Municipal Engineering Board',
        creditKa: 'თბილისის საინჟინრო სამმართველო',
        mediaFormat: 'Technical Blueprint and Field Plate',
        isPlaceholder: true,
        notes: 'Mineral wool and asphalt-treated canvas wrapping show typical subterranean wear.',
        notesKa: 'მინერალური ბამბითა და ტილოთი შეფუთული მილები.'
      },
      {
        id: 'bsmt-ph-02',
        locationId: 'basement',
        type: 'image',
        title: 'Wooden Domestic Lockers (Sardapi Storage)',
        titleKa: 'ხის სათავსოები (სარდაფის კუპეები)',
        caption: 'Individual resident storage lockers containing pickled jonjoli jars, preserved fruits, and glass demijohns.',
        captionKa: 'მცხოვრებლების ხის კუპეები, სადაც ინახება ჯონჯოლის მწნილი, კომპოტები და ღვინის დამჯანები.',
        date: '2022',
        credit: 'Culinary Ethnography Archive',
        creditKa: 'კულინარიული ეთნოგრაფიის არქივი',
        mediaFormat: '35mm B/W Negative Scan',
        isPlaceholder: true,
        notes: 'Subterranean temperature remains naturally stable between 12°C and 15°C year-round.',
        notesKa: 'სარდაფის ტემპერატურა მთელი წლის განმავლობაში 12-15 გრადუსის ფარგლებშია.'
      },
      {
        id: 'bsmt-ph-03',
        locationId: 'basement',
        type: 'image',
        title: 'Bryophyte Moss Colonies on Rubble Foundation',
        titleKa: 'ხავსის კოლონიები ნესტიან ქვის საძირკველზე',
        caption: 'Botanical field photograph of shade-tolerant moss species growing along condensate seepage zones.',
        captionKa: 'ნესტის მოყვარული ხავსის კოლონიების ბოტანიკური ფოტოფიქსაცია ქვის საძირკველზე.',
        date: '2024',
        credit: 'Subterranean Flora Survey',
        creditKa: 'მიწისქვეშა ფლორის კვლევა',
        mediaFormat: 'Macro Botanical Field Plate',
        isPlaceholder: true,
        notes: 'Thriving in permanent 85%+ relative humidity conditions near foundation vents.',
        notesKa: 'ხარობს 85%-ზე მეტი მუდმივი ტენიანობის პირობებში.'
      },
      {
        id: 'bsmt-aud-01',
        locationId: 'basement',
        type: 'audio',
        title: 'Subterranean Pipe Drone & Slow Condensate Drip',
        titleKa: 'მიწისქვეშა მილების გუგუნი და წყლის წვეთის რიტმი',
        caption: 'Acoustic field recording capturing the low-frequency mechanical rumble of municipal water conduits and rhythmic drips.',
        captionKa: 'საველე ჩანაწერი: წყლის ცენტრალური მილების დაბალსიხშირული გუგუნი და წვეთების რიტმული ხმა.',
        duration: '01:50',
        date: 'February 2024',
        credit: 'Acoustic Ethnography Lab',
        creditKa: 'აკუსტიკური ეთნოგრაფიის ლაბორატორია',
        mediaFormat: 'Sub-bass Hydrophonic Field Capture',
        recordingLocation: 'Central Utility Vault, Basement Level',
        recordingLocationKa: 'ცენტრალური საკომუნიკაციო კვანძი, სარდაფი',
        isPlaceholder: true,
        transcript: 'Field sound log (23:10 Night): Low-frequency resonant drone (62Hz) of pressurized municipal heating fluid circulating through primary valves. Single water droplet striking concrete floor puddle at regular 4.8 second intervals. Deep acoustic isolation from surface urban noise.',
        transcriptKa: 'საველე ხმოვანი დღიური (23:10 ღამე): გათბობის მილების დაბალსიხშირული გუგუნი (62 ჰერცი). წყლის წვეთის დაცემა ბეტონის იატაკზე ყოველ 4.8 წამში. ქუჩის ხმაურისგან სრული იზოლაცია.'
      },
      {
        id: 'bsmt-vid-01',
        locationId: 'basement',
        type: 'video',
        title: 'Engineering Underbelly: Utility Vault Inspection',
        titleKa: 'საინჟინრო წიაღი: სარდაფის კომუნიკაციების შემოწმება',
        caption: '16mm industrial documentary excerpt showing municipal technicians inspecting district steam and water lines.',
        captionKa: '16მმ საინჟინრო დოკუმენტური კადრი: მუნიციპალური მუშაკები ამოწმებენ გათბობის მილებს.',
        date: '1975',
        credit: 'Municipal Infrastructure Archive',
        creditKa: 'მუნიციპალური ინფრასტრუქტურის არქივი',
        mediaFormat: '16mm Industrial Film',
        isPlaceholder: true
      }
    ],
    narrativeSections: {
      researchContextEn: 'The subterranean level reveals the unseen infrastructural metabolism sustaining the residential block. District heating lines, water conduits, and private storage spaces converge in this cool architectural foundation.',
      researchContextKa: 'მიწისქვეშა სართული აჩვენებს შენობის უხილავ საინჟინრო მეტაბოლიზმს. გათბობისა და წყლის მილები, სათავსოები და საძირკველი ერთიანდება ამ გრილ სივრცეში.',
      spatialObservationsEn: 'Constructed from heavy stone rubble footings and reinforced concrete piers, the basement maintains high humidity and a consistent temperature year-round, insulated by surrounding earth.',
      spatialObservationsKa: 'ქვისა და რკინაბეტონის მასიური საძირკველი მთელი წლის განმავლობაში ინარჩუნებს მაღალ ტენიანობასა და სტაბილურ ტემპერატურას.',
      multispeciesRelationshipsEn: 'Moist mortar joints support dense colonies of bryophyte mosses and subterranean micro-fauna, while humans utilize the natural cellar refrigeration for winter food preservation.',
      multispeciesRelationshipsKa: 'ტენიანი ნაპრალები ხავსისა და მიწისქვეშა მიკროფაუნის თავშესაფარია, ხოლო ადამიანები ბუნებრივ სიგრილეს ზამთრის მარაგების შესანახად იყენებენ.',
      architecturalContextEn: 'Heavy masonry rubble foundation walls coupled with reinforced concrete strip footings, crawlspace ventilation portals, and cast-iron plumbing penetrations.',
      architecturalContextKa: 'ნატეხი ქვისა და რკინაბეტონის კომბინირებული საძირკველი, სავენტილაციო ღიობებითა და თუჯის წყალსადენის კვანძებით.'
    },
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
      width: 170,
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
    mediaRecords: [
      {
        id: 'yard-ph-01',
        locationId: 'courtyard',
        type: 'image',
        title: 'Grapevine Trellis (Talavari) & Steel Frame',
        titleKa: 'ვაზის ტალავერი და ფოლადის კონსტრუქცია ეზოში',
        caption: 'Welded steel pipe frame supporting an expansive overhead Isabella grapevine canopy over the shared courtyard.',
        captionKa: 'ლითონის მილებისგან შეკრული ტალავერი, რომელიც საერთო ეზოს თავზე მწვანე ჭერს ქმნის.',
        date: '1985',
        credit: 'Tbilisi Courtyard Architecture Archive',
        creditKa: 'თბილისური ეზოების არქივი',
        mediaFormat: '35mm Film Negative Scan',
        isPlaceholder: true,
        notes: 'Living vegetal ceiling reduces radiant asphalt temperatures by over 4°C during July peaks.',
        notesKa: 'ცოცხალი მწვანე ჭერი ზაფხულის სიცხეში 4 გრადუსით ამცირებს ასფალტის ტემპერატურას.'
      },
      {
        id: 'yard-ph-02',
        locationId: 'courtyard',
        type: 'image',
        title: 'Dominoes Bench & Stone Drinking Fountain',
        titleKa: 'დომინოს სათამაშო მერხი და ეზოს სასმელი წყარო',
        caption: 'Traditional pine slatted benches gathered around an outdoor drinking fountain and shaded card table.',
        captionKa: 'ფიჭვის მერხები და ეზოს ონკანი, სადაც მეზობლები დომინოს სათამაშოდ იკრიბებიან.',
        date: '2023',
        credit: 'Public Life Field Study',
        creditKa: 'საჯარო ცხოვრების საველე კვლევა',
        mediaFormat: 'Silver Halide Photographic Print',
        isPlaceholder: true,
        notes: 'Social hub for intergenerational storytelling, news sharing, and communal supervision.',
        notesKa: 'თაობათაშორისი შეხვედრებისა და სამეზობლო საუბრების მთავარი ადგილი.'
      },
      {
        id: 'yard-ph-03',
        locationId: 'courtyard',
        type: 'image',
        title: 'Community Dog "Buba" in Fig Tree Shade',
        titleKa: 'უბნის ძაღლი „ბუბა“ ლეღვის ხის ჩრდილში',
        caption: 'Field photography of tagged community dog resting on burlap mat beside stone perimeter wall.',
        captionKa: 'საყურიანი უბნის ძაღლი ისვენებს ლეღვის ხის ქვეშ ქვის კედელთან.',
        date: '2024',
        credit: 'Multispecies Ethnography Project',
        creditKa: 'მულტისახეობრივი ეთნოგრაფიული პროექტი',
        mediaFormat: 'Field Survey Photo Plate',
        isPlaceholder: true,
        notes: 'Community street animals receive communal veterinary care and food provision from neighbors.',
        notesKa: 'უბნის ცხოველები იღებენ სამედიცინო მზრუნველობასა და საკვებს მეზობლებისგან.'
      },
      {
        id: 'yard-aud-01',
        locationId: 'courtyard',
        type: 'audio',
        title: 'Courtyard Polyphony: Domino Tiles, Fountain & Fig Leaves',
        titleKa: 'ეზოს მრავალხმიანობა: დომინოს ჭახანი, წყარო და ლეღვის ფოთლები',
        caption: 'Binaural field acoustic recording of late afternoon courtyard life: domino tiles clicking, water flowing, and wind.',
        captionKa: 'საველე ჩანაწერი: თბილისური ეზოს საღამო — დომინოს ქვების ჭახანი, ონკანის ჩხრიალი და ფოთლების შრიალი.',
        duration: '02:18',
        date: 'September 2024',
        credit: 'Acoustic Ethnography Lab',
        creditKa: 'აკუსტიკური ეთნოგრაფიის ლაბორატორია',
        mediaFormat: 'Binaural Field Acoustic Master',
        recordingLocation: 'Central Courtyard Under Grape Arbor',
        recordingLocationKa: 'ცენტრალური ეზო, ვაზის ტალავერის ქვეშ',
        isPlaceholder: true,
        transcript: 'Field sound log (18:15 Afternoon): Resonant wooden slap of Bakelite domino tiles on pine table. Continuous gentle splash of open spring fountain into stone drain basin. Gentle breeze rustling broad fig leaves. Laughter of neighborhood children playing near arched gateway.',
        transcriptKa: 'საველე ხმოვანი დღიური (18:15): დომინოს ქვების ჭახანი ფიჭვის მაგიდაზე. ეზოს ონკანიდან წყლის რბილი ჩხრიალი. ნიავში მოშრიალე ლეღვის ფართო ფოთლები. ჭიშკართან მოთამაშე ბავშვების სიცილი.'
      },
      {
        id: 'yard-vid-01',
        locationId: 'courtyard',
        type: 'video',
        title: 'The Living Commons: Afternoon in a Tbilisi Ezó',
        titleKa: 'ცოცხალი საერთო სივრცე: ნაშუადღევი თბილისურ ეზოში',
        caption: '16mm archival documentary footage capturing community life, grapevine shading, and shared domesticity.',
        captionKa: '16მმ არქივული კადრები: ეზოს ცხოვრება, ტალავერის ჩრდილი და მეზობლური თანაარსებობა.',
        date: '1983',
        credit: 'Georgian Film Studio Archive',
        creditKa: 'ქართული ფილმის სტუდიის არქივი',
        mediaFormat: '16mm Color Document Reel',
        isPlaceholder: true
      }
    ],
    narrativeSections: {
      researchContextEn: 'The traditional Tbilisi courtyard (ezó) represents a collective urban ecosystem. In Soviet residential quarters, courtyards sustained customary practices of informal dispute resolution, collective care, and multispecies habitation.',
      researchContextKa: 'ტრადიციული თბილისური ეზო წარმოადგენს საერთო ურბანულ ეკოსისტემას. საბჭოთა პერიოდის კორპუსებშიც კი ეზოებმა შეინარჩუნეს მეზობლობისა და ურთიერთმზრუნველობის ადათ-წესები.',
      spatialObservationsEn: 'Overhead steel cables support heavy grape arbors that form a biological ceiling, buffering direct solar gain and lowering ground ambient temperatures by 3-5°C during hot Caucasian summers.',
      spatialObservationsKa: 'ლითონის კონსტრუქციაზე გაშლილი ვაზის ტალავერი ქმნის ბუნებრივ მწვანე ჭერს, რაც ზაფხულის სიცხეში 3-5 გრადუსით აგრილებს ეზოს.',
      multispeciesRelationshipsEn: 'Inhabitants share courtyard space with community dogs, stray cats, songbirds, and fig trees. The community animals function as social mediators that connect disparate households into a web of shared responsibility.',
      multispeciesRelationshipsKa: 'ადამიანები ეზოს უზიარებენ უბნის ძაღლებს, კატებს, ჩიტებსა და ხეებს. ცხოველებზე ზრუნვა აერთიანებს მეზობლებს საერთო პასუხისმგებლობის გარშემო.',
      architecturalContextEn: 'Enclosed perimeter walls of mixed rubble stone and brick, asphalt floor paving with central rainwater runoff channels, welded pipe trellis frames, and municipal drinking fountains.',
      architecturalContextKa: 'ქვისა და აგურის საყრდენი კედლები, ასფალტის საფარი სადრენაჟო არხებით, ლითონის ტალავერი და სასმელი წყარო.'
    },
    relatedZoneIds: ['stairwell', 'balcony-garden', 'basement']
  }
];
