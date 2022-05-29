import uni from '../../assets/img/uni.jpg'

const unisList = [
  {
    country: 'Russia',
    'universities-href': 'http://en.gubkin.ru/',
    university: 'Gubkin Russian State University Of Oil And Gas',
  },
  {
    country: 'Schengen',
    'universities-href': 'http://www.ipsantarem.pt/',
    university: 'Ipsantarem University(Portugal)',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.onu.edu/',
    university: 'Ohio Northern University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.stlawrencecollege.ca/',
    university: 'St. Lawrence College, Ontario',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.westminster.ac.uk/',
    university: 'University of Westminster',
  },
  {
    country: 'Turkey',
    'universities-href': 'https://www.beykent.edu.tr/',
    university: 'Beykent University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.hud.ac.uk/',
    university: 'University of Huddersfeld',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.royalholloway.ac.uk/',
    university: 'Royal Holloway University of London',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.lboro.ac.uk/',
    university: 'Loughborough University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.glctschool.com//',
    university: 'Great Lakes College of Toronto',
  },
  {
    country: 'Turkey',
    'universities-href': 'https://www.ayvansaray.edu.tr/',
    university: 'Istanbul Ayvansaray University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.uregina.ca/',
    university: 'University of Regina',
  },
  {
    country: 'Canada',
    'universities-href': 'https://www.mta.ca/',
    university: 'Mount Allison University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.sheridancollege.ca/',
    university: 'Sheridan College',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.centennialcollege.ca/',
    university: 'Centennial College',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.coventry.ac.uk/',
    university: 'Coventry University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.yorksj.ac.uk/',
    university: 'York St John University',
  },
  {
    country: 'Russia',
    'universities-href': 'https://racus.ru/',
    university: 'Edurussisa',
  },
  {
    country: 'Schengen',
    'universities-href': 'http://www.isma.lv/en',
    university: 'ISMA University (Latvia)',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.staffs.ac.uk/',
    university: 'Staffordshire University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.sgu.ru/en',
    university: 'Saratov State University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://langara.ca/',
    university: 'Langara College',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.usask.ca/',
    university: 'University of Saskatchewan',
  },
  {
    country: 'Schengen',
    'universities-href': 'https://wsiz.rzeszow.pl/',
    university: 'University of information Technology and management, Poland',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.uregina.ca/',
    university: 'University of Regina',
  },
  {
    country: 'Schengen',
    'universities-href': 'https://cbs.de/',
    university: 'Gologne Business School (Germany)',
  },
  {
    country: 'Cyprus',
    'universities-href': 'https://www.ac.ac.cy/',
    university: 'American College, Southern Cyprus',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.dur.ac.uk/',
    university: 'Durham University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://kstu.kstu.ru/knrtu/news.jsp',
    university: 'Kazan National Research Technological University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://kpfu.ru/eng',
    university: 'Kazan (Volga Region) Federal University',
  },
  {
    country: 'Turkey',
    'universities-href': 'http://www.siirt.edu.tr/',
    university: 'SIIRT University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.tru.ca/',
    university: 'Thompson Rivers University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.bcu.ac.uk/',
    university: 'Birmingham City University',
  },
  {
    country: 'Cyprus',
    'universities-href': 'https://www.nup.ac.cy/',
    university: 'Neapolis University, Southern Cyprus',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.bmstu.ru/en',
    university: 'Bauman Moscow State Technical University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.bolton.ac.uk/',
    university: 'University of Bolton',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.hw.ac.uk/',
    university: 'Heriot Watt University',
  },
  {
    country: 'Australia',
    'universities-href': 'http://animt.edu.au/',
    university:
      'Australia National Institute of Management and Technology (ANIMT)',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.brunel.ac.uk/',
    university: 'Brunel University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.alexandercollege.ca/',
    university: 'Alexander College',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.ncl.ac.uk/',
    university: 'Newcastle University',
  },
  {
    country: 'Cyprus',
    'universities-href': 'https://www.emu.edu.tr/en',
    university: 'Eastern Mediterranean University (EMU), North Cyprus',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.humber.ca/',
    university: 'Humber College',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.ycdsb.ca//',
    university: 'York Catholic District School Board',
  },
  {
    country: 'Ukraine',
    'universities-href': 'http://www.khai.edu/efc',
    university: 'National Aerospace University - Kharkiv Aviation',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.lsbu.ac.uk/',
    university: 'London South Bank University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.msu.ru/en',
    university: 'Lomonosov Moscow State University',
  },
  {
    country: 'USA',
    'universities-href': 'https://www.wichita.edu/',
    university: 'Wichita State University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.ciccc.ca/',
    university: 'Connerstone International Community College',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.winchester.ac.uk/',
    university: 'University of Winchester',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.brookes.ac.uk/',
    university: 'Oxford brookes University',
  },
  {
    country: 'Canada',
    'universities-href': 'https://ucanwest.ca//',
    university: 'Canada West University',
  },
  {
    country: 'Schengen',
    'universities-href': 'http://lincoln.edu.my/',
    university: 'Lincoln University College (Malaysia)',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.umsl.edu/',
    university: 'University of Missouri- st Louis',
  },
  {
    country: 'USA',
    'universities-href': 'https://chicago.tribecaflashpoint.edu/main',
    university: 'Tribeca Flashpoint College',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.port.ac.uk/',
    university: 'University of Portsmouth',
  },
  {
    country: 'Russia',
    'universities-href': 'http://mipt.ru/en',
    university: 'Moscow Institute Of Physics And Technology',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.sbdhs.net//',
    university: 'St. Boniface Diocesan High School',
  },
  {
    country: 'Ukraine',
    'universities-href': 'https://nung.edu.ua/en',
    university: 'Ivanofrankivsk National Technical University Of Oil And Gas',
  },
  {
    country: 'USA',
    'universities-href': 'https://global.csub.edu/',
    university: 'California State University Bakersfield',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.plymouth.ac.uk/',
    university: 'Plymouth University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.tees.ac.uk/',
    university: 'Teesside University',
  },
  {
    country: 'Schengen',
    'universities-href':
      'https://www.glctravel.com/study-in-canada--global-connect-travel-concept/',
    university: '🇨🇦 Canada',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.hull.ac.uk/',
    university: 'University of Hull',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.city.ac.uk/',
    university: 'City University, London',
  },
  {
    country: 'Schengen',
    'universities-href': 'http://www.spracheninstitut.com/',
    university: 'Das Sprachen Institute (DSI), Germany',
  },
  {
    country: 'Canada',
    'universities-href': 'https://rdc.ab.ca/',
    university: 'RDC College',
  },
  {
    country: 'Turkey',
    'universities-href': 'http://www.khas.edu.tr/',
    university: 'Kadir Has University',
  },
  {
    country: 'Canada',
    'universities-href': 'https://smu.ca/',
    university: 'St Mary University',
  },
  {
    country: 'Turkey',
    'universities-href': 'http://www.dogus.edu.tr/',
    university: 'Dogus University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.ljmu.ac.uk/',
    university: 'Liverpool John Moores University',
  },
  {
    country: 'USA',
    'universities-href': 'http://polylanguages.edu/',
    university: 'Poly Languages Institutes',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.collegebourget.qc.ca//',
    university: 'College Bourget',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.suai.ru/',
    university: 'St.Petersburg State University Of Aerospace Instruments',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.national-u.edu.ph/',
    university: 'National University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.dundee.ac.uk/',
    university: 'University of Dundee',
  },
  {
    country: 'USA',
    'universities-href': 'https://www.ucwv.edu/',
    university: 'University of Charleston',
  },
  {
    country: 'Schengen',
    'universities-href': 'https://www.casvi.es/',
    university: 'International America School( Spain)',
  },
  {
    country: 'Russia',
    'universities-href': 'http://nsu.ru/?lang=en',
    university: 'Novosibirsk State University',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.uidaho.edu/',
    university: 'University Of Idaho',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.aston.ac.uk/',
    university: 'Aston University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.ubishops.ca/',
    university: 'Bishop’s University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.en.sibsau.ru/',
    university: 'Siberian State Aerospace University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.airdriechristian.com//',
    university: 'Airdrie Christian Academy',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.eng.mesi.ru/',
    university:
      'Moscow State University Of Economics Statistics And Informatics',
  },
  {
    country: 'Russia',
    'universities-href': 'http://en.madi.ru/',
    university: 'Moscow State Automobile And Road Technical University',
  },
  {
    country: 'USA',
    'universities-href': 'http://wsu.edu/',
    university: 'Washington State University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.essex.ac.uk/',
    university: 'University of Essex',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.hse.ru/en',
    university: 'National Research Higher School Of Economics',
  },
  {
    country: 'Canada',
    'universities-href': 'http://uwaterloo.ca/',
    university: 'University of Waterloo',
  },
  {
    country: 'UK',
    'universities-href': 'https://aub.ac.uk/',
    university: 'Arts university Bournemouth',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.keele.ac.uk/',
    university: 'Keele University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.cardiffmet.ac.uk/',
    university: 'Cardiff Metropolitan University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.strath.ac.uk/',
    university: 'University of Strathclyde',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.law.ac.uk/',
    university: 'The University of Law',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.taie.ca//',
    university: 'TAIE International Institute',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.durhamcollege.ca/',
    university: 'Durham College',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.cbu.ca/',
    university: 'Cape Breton University',
  },
  {
    country: 'UK',
    'universities-href':
      'https://www.dmu.ac.uk/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a',
    university: 'De Montfort University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.uws.ac.uk/',
    university: 'University of the West of Scotland',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.lincoln.ac.uk/',
    university: 'University of Lincoln',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.derby.ac.uk/',
    university: 'University of Derby',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.herts.ac.uk/',
    university: 'University of Hertfordshire',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.pfeiffer.edu/',
    university: 'Pfeiffer University, North Carolina',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.swansea.ac.uk/',
    university: 'Swansea University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.abertay.ac.uk/',
    university: 'University of Abertay',
  },
  {
    country: 'Australia',
    'universities-href': 'http://www.ihbc.edu.au/',
    university: 'International Business College',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.rshu.ru/eng',
    university: 'Russian State Hydrometeorological University',
  },
  {
    country: 'UK',
    'universities-href': 'http://www.brookehousecollege.co.uk/',
    university: 'Brooke House College',
  },
  {
    country: 'USA',
    'universities-href': 'https://bau.edu/',
    university: 'Bay Atlantic university',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.gcu.ac.uk/',
    university: 'Glasgow Caledonian University',
  },
  {
    country: 'Schengen',
    'universities-href': 'https://lnu.se/en/',
    university: 'Linnaeus university, Sweden',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.uel.ac.uk/',
    university: 'University of East London',
  },
  {
    country: 'Ukraine',
    'universities-href': 'http://www.uzhnu.edu.ua/en',
    university: 'Uzhhorod National University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.kingston.ac.uk/',
    university: 'Kingston University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.leedsbeckett.ac.uk/',
    university: 'Leeds beckett University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.mami.ru/?eng',
    university: 'Moscow State University Of Mechanical Engineering',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.senecacollege.ca/',
    university: 'Seneca College',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.nyit.edu/',
    university: 'New York Institute Of Technology',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.brighton.ac.uk/',
    university: 'University of Brighton',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.roosevelt.edu/',
    university: 'Roosevelt University',
  },
  {
    country: 'Cyprus',
    'universities-href': 'http://neu.edu.tr/',
    university: 'Near East University',
  },
  {
    country: 'Ukraine',
    'universities-href': 'http://sumdu.edu.ua/int/en',
    university: 'Sumy State University',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.liu.edu/',
    university: 'Long Island University',
  },
  {
    country: 'USA',
    'universities-href': 'https://www.ecpi.edu/',
    university: 'Ecpi University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://mpei.ru/lang/en/Pages/default.aspx',
    university: 'Moscow Power Engineering Institute',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.mgul.ac.ru/eng',
    university: 'Moscow State Forest University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.cotr.bc.ca/',
    university: 'College of the Rookies, British Columbia',
  },
  {
    country: 'Canada',
    'universities-href': 'http://cambriancollege.ca/',
    university: 'Cambrian College',
  },
  {
    country: 'USA',
    'universities-href': 'http://uci.edu/',
    university: 'University Of California Irvine',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.ccs.spokane.edu/',
    university: 'Community Colleges Of Spokane, Washington',
  },
  {
    country: 'UK',
    'universities-href': 'https://aru.ac.uk/',
    university: 'Angelia Ruskin University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.uca.ac.uk/',
    university: 'University for the Creative Arts',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.lancaster.ac.uk/',
    university: 'Lancaster University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.stjohnsacademy.ca///',
    university: "St. John's Academy",
  },
  {
    country: 'USA',
    'universities-href': 'http://www.kent.edu/',
    university: 'Kent State University',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.conestogac.on.ca/',
    university: 'Conestoga College',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.qahighereducation.com/',
    university: 'QA Higher Education',
  },
  {
    country: 'Schengen',
    'universities-href': 'http://www.ibs-b.hu/',
    university: 'International Business School (Hungary)',
  },
  {
    country: 'Ukraine',
    'universities-href': 'http://www.ifnmu.com/',
    university: 'Ivanofrankivsk National Medical University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.ulster.ac.uk/',
    university: 'Ulster University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.usask.ca/',
    university: 'University of Saskatchewan',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.queensu.ca/',
    university: 'Queen’s University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://saskpolytech.ca/',
    university: 'Saskatchewan Institute of Applied Science and Technology',
  },
  {
    country: 'Ukraine',
    'universities-href': 'http://en.puet.edu.ua/',
    university: 'Poltava University Of Economics And Trade—Poltava',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.summer.bodwell.edu//',
    university: 'Bodwell High School',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.unr.edu/',
    university: 'University Of Nevada Reno',
  },
  {
    country: 'Canada',
    'universities-href': 'http://saskpolytech.ca/',
    university: 'Saskatchewan Institute of Applied Science and Technology',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.selkirk.ca/',
    university: 'Selkirk College, British Columbia',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.rosseaulakecollege.com//',
    university: 'Rosseau Lake College',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.liverpool.ac.uk/',
    university: 'University of Liverpool',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.wku.edu/',
    university: 'Western Kentucky Universit',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.roehampton.ac.uk/',
    university: 'University of Roehampton',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.york.ac.uk/',
    university: 'University of York',
  },
  {
    country: 'UK',
    'universities-href': 'http://www.reading.ac.uk/',
    university: 'University of Reading',
  },
  {
    country: 'Australia',
    'universities-href': 'http://www.aiecg.com/',
    university: 'Australia International Educational Consortium',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.regent.bc.ca//',
    university: 'Regent Christian Academy',
  },
  {
    country: 'Russia',
    'universities-href': 'http://english.mgimo.ru/',
    university: 'Moscow State Institute Of International Relations',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.yukoncollege.yk.ca/',
    university: 'Yukon University',
  },
  {
    country: 'UK',
    'universities-href': 'https://cambridgeseminarscollege.co.uk/',
    university: 'Cambridge Seminars College',
  },
  {
    country: 'UK',
    'universities-href': 'http://www.dmu.ac.uk/international/',
    university: 'De Montfort University, England',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.ksma.ru/',
    university: 'Kuban State Medical University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www1.chester.ac.uk/',
    university: 'University of Chester',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.southwales.ac.uk/',
    university: 'University of South Wales',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.okcu.edu/',
    university: 'Oklahoma City University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.gre.ac.uk/',
    university: 'University of Greenwich',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.bristol.ac.uk/',
    university: 'University of Bristol',
  },
  {
    country: 'Russia',
    'universities-href': 'http://krasgmu.ru/',
    university: 'Krasnoyarsk State Medical University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.glos.ac.uk/',
    university: 'University of Gloucestershire',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.bangor.ac.uk/',
    university: 'Bangor University',
  },
  {
    country: 'Schengen',
    'universities-href': 'https://aum.edu.mt/',
    university: 'America University of Malta, Malta',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.uclan.ac.uk/',
    university: 'University of Central Lancashire',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.royalroads.ca/',
    university: 'Royal Roads University',
  },
  {
    country: 'USA',
    'universities-href': 'http://www.murraystate.edu/',
    university: 'Murray State University',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.northumbria.ac.uk/',
    university: 'Northumbria University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://www.dgu.ru/english.html',
    university: 'Dagestan State Medical Academy',
  },
  {
    country: 'Canada',
    'universities-href': 'http://www.cic-totalcare.com//',
    university: 'Columbia International College',
  },
  {
    country: 'UK',
    'universities-href': 'http://%20https//www.glyndwr.ac.uk/',
    university: 'Glyndwr University Wrexham',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.mmu.ac.uk/',
    university: 'Manchester Metropolitan University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://en.ukc-sputnik.ru/msudt',
    university: 'Moscow State University Of Design And Technology',
  },
  {
    country: 'Canada',
    'universities-href': 'https://www2.acadiau.ca/home.html',
    university: 'Acadia university',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.northampton.ac.uk/',
    university: 'University of Northampton',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.bradford.ac.uk/',
    university: 'University of Bradford',
  },
  {
    country: 'Russia',
    'universities-href': 'http://synergyuniversity.com/',
    university: 'Synergy University',
  },
  {
    country: 'Russia',
    'universities-href': 'http://mephi.ru/eng',
    university: 'Moscow State Engineering Physics Institute',
  },
  {
    country: 'UK',
    'universities-href': 'https://www.qub.ac.uk/',
    university: "Queen's University Belfast",
  },
  {
    country: 'USA',
    'universities-href': 'http://nau.edu/',
    university: 'Northern Arizona University',
  },
];

const countriesList = [
  { name: 'USA', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/USA_country_banner_rerznd.jpg' },
  { name: 'Canada', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/Canada_country_banner_ylczqi.jpg' },
  { name: 'UK', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/UK_country_banner_w51uel.jpg' },
  { name: 'Australia', img: 'https://res.cloudinary.com/emmii/image/upload/v1653850201/Amaco%20Global%20Education/australia_country_banner_kkzgbc.jpg' },
  { name: 'Ukraine', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/Ukraine_country_banner_ar6hyx.jpg' },
  { name: 'Cyprus', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849799/Amaco%20Global%20Education/cyprus_country_banner_gmaecn.jpg' },
  { name: 'Turkey', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/turkey_country_banner_rbtekg.jpg' },
  { name: 'Russia', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/russia_country_banner_jspim5.jpg' },
  { name: 'Schengen', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849803/Amaco%20Global%20Education/schengen_country_banner_pbr67b.jpg' },
  { name: 'Germany', img: 'https://res.cloudinary.com/emmii/image/upload/v1653849800/Amaco%20Global%20Education/germany_country_banner_uohuq5.jpg' },
]

const initCount = {}; 
  // Count the number of universities listed for each country
const countriesCount = unisList.reduce((previous, current) => {
  if(previous[current.country] === undefined) {
    previous[current.country] = 1;
  } else {
    previous[current.country] += 1;
  }
  return previous;
}, initCount);


export { unisList, countriesList, countriesCount }