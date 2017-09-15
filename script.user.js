// ==UserScript==
// @name        MeldingHelper Meldkamerspel
// @namespace   meldkamerspel
// @description Geeft de voertuigen nodig zijn in een info-venster
// @include     https://www.meldkamerspel.com/missions/*
// @downloadURL https://github.com/Suchty112/LSS.Einsatzhelfer/raw/mel/script.user.js
// @updateURL   https://github.com/Suchty112/LSS.Einsatzhelfer/raw/mel/script.user.js
// @author    DrFussel u. KV Nürnberg/SanniHameln
// @version     0.8
// @grant       none
// ==/UserScript==

//1 Brandweerpost
var Brandendeafvalbak = "1x Tankautospuit(100%)";
var Brandendecontainer = "1x Tankautospuit (100%)";
var Brandendepersonenauto  = "1x Tankautospuit (100%)";
var Brandendemotorfiets = "1x Tankautospuit (100%)";
var Brandendgras = "1x Tankautospuit (100%)";
var Brandendeboom = "1x Tankautospuit (100%)";
var Brandendafval = "1x Tankautospuit (100%)";
var Brandendhooi = "1x Tankautospuit (100%)";
var Brandendetraktor = "1x Tankautospuit (100%)";
var Brandendebromfiets = "1x Tankautospuit (100%)";
var Boomopdeweg = "1x Tankautospuit (100%)";
var Brandendedixi = "1x Tankautospuit (100%)";
var Brandendestruik = "1x Tankautospuit (100%)";
var Brandendeaanhangwagen = "1x Tankautospuit (100%)";
var Lekkendedieseltank = "1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (20%)";
var Oliespoor = "1x Tankautospuit (100%)";
var Brandendelandbouwmachine = "1x Tankautospuit (100%)";
var Liftopsluiting = "1x Tankautospuit (100%)";
var Katinboom = "1x Tankautospuit (100%)</br> 1x Redvoertuig (20%)";
var Buitenbrand = "1x Tankautospuit (100%)";
var Takkenopdeweg = "1x Tankautospuit (100%)";
var Boomopfietspad = "1x Tankautospuit (100%)";
var Omgewaaidebouwsteiger = "1x Tankautospuit (100%)</br> 1x Redvoertuig (30%)";
var Boomopauto = "1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (10%)";
var Rookontwikkelinginwinkel = "1x Tankautospuit (100%)</br> 1x Redvoertuig (10%)";
var Brandgerucht = "1x Tankautospuit (100%)";
var Buitensluiting = "1x Tankautospuit (100%)";
var Schaapinsloot = "1x Tankautospuit (100%)";
var Brandendebus = "1x Tankautospuit (100%)";
var Brandendebestelwagen = "1x Tankautospuit (100%)";
var Brandendehaag = "1x Tankautospuit (100%)";
var Brandendepapiercontainer = "1x Tankautospuit (100%)";
var Brandendecaravan = "1x Tankautospuit (100%)";
var Brandinmeterkast = "1x Tankautospuit (100%)</br> 1x Redvoertuig (10%)";
var Straatonderwater = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Parkeerterreinonderwater = "1x Tankautospuit (100%)</br> 1x Slangenwagen (20%)";
var Koeinsloot = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Koeingierput = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
var Lekkendewoonboot = "1x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (10%)";
//2 Brandweerposten
var Brandinslaapkamer = "2x Tankautospuits (100%)</br>1x OvD-B (100%)</br> 1x Redvoertuig (100%)";
//3 Brandweerposten
var Brandinkelder = "3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x HOVD (50%)</br>1x Slangenwagen (10%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Schoorsteenbrand = "1x Tankautospuit (100%) </br> 1x Redvoertuig (100%)";
var Brandendbushokje ="1x Tankautospuit (100%)";
var Vrachtwagengekanteld ="1x Tankautospuit (100%)</br>1x OvD-B (100%)</br>1x Hulpverleningsvoertuig (70%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandinvakantiewoning ="2x Tankautospuit (100%)</br>1x Redvoertuig (80%)</br>1x OvD-B (100%)</br>1x Slangenwagen (10%)";
//4 Brandweerposten
var Brandinwoonkamer ="2x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Redvoertuig (80%)</br>1x Politieauto (100%)";
var Brandendevrachtwagen ="2x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Slangenwagen (10%)";
var Brandinwoonwagen ="2x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x Redvoertuig (80%)</br> 1x Ambulance(100%)";
var Brandinsupermarkt ="3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Slangenwagen (30%)</br>1x HOVD (50%)</br>1x Redvoertuig (100%)</br>1x Politieauto (100%)";
var Persoonaangereden ="2x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x Slangenwagen (10%)";
var Brandinkeuken = "3x Tankautospuits (100%) </br>1x OvD-B (100%)</br>1x HOVD (50%)</br>1x Redvoertuig (100%)";
var Parkeergarageonderwater ="1x Tankautospuit (100%)</br>1x Slangenwagen (40%)";
var Kelderonderwater ="1x Tankautospuit (100%)</br>1x Slangenwagen (40%)";
var Gevaarlijkhangendetak ="1x Tankautospuit (100%)</br>1x Redvoertuig (50%)";
var Boomopdak ="1x Tankautospuit (100%)</br>1x Redvoertuig (60%)";
var Losgewaaidedakbedekking ="1x Tankautospuit (100%)</br>1x Redvoertuig (80%)";
var Brandintuinhuis ="2x Tankautospuiten (100%)</br>1x OvD-B (100%)</br>1x Redvoertuig (10%)";
var Brandinwerkplaats ="2x Tankautospuiten (100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x OvD-B (100%)</br>1x Adembeschermingsvoertuig (10%)</br>1x Politieauto (100%)";
//5 Brandweerposten
var Machinebrand ="3x Tankautospuits (100%)</br> 1x Hulpverleningsvoertuig (100%)</br> 1x OvD-B (100%)</br>1x Adembeschermingsvoertuig (20%)</br>1x Slangenwagen (30%)";
var BuildingCollapse ="2x Tankautospuits (100%)</br>2x Redvoertuigs (100%)</br>2x OvD-Bs (100%)</br>2x Hulpverleningsvoertuigs (100%)</br>1x Mobile Command (100%)</br>min. 1x Ambulance (100%)";
var Heidebrand ="3x Tankautospuits (100%)</br>1x HOVD</br> 1x OvD-B (100%)</br>1x Slangenwagen (100%)";
//6 Brandweerposten
var Schoorsteenbrandwoningmetrietenkap ="2x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x Redvoertuig (100%)";
var Persoonbekneldonderboom ="1x Tankautospuits (100%)</br> 1x Hulpverleningsvoertuig (40%)</br> 1x OvD-B (100%)</br>1x Ambulance";
var Kleinvliegtuigneergestort ="2x Tankautospuit (100%)</br> 1x Hulpverleningsvoertuig (100%)</br>1x OvD-B (100%)</br>1x HOVD (10%)</br>min. 1x Ambulance (100%)</br>2x Politieauto (100%)";
var Persoonbekneldinmachine ="1x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x Politieauto (100%)</br>min. 1x Ambulance";
var Ongevalmettreinenpersoon ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (80%)</br>1x OvD-B (100%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandenddak ="2x Tankautospuits (100%)</br>1x Redvoertuigs (100%)</br>1x OvD-B (100%)</br>1x Politieauto (100%)";
var Brandinlandbouwschuur ="3x Tankautospuit (100%)</br>1x Redvoertuig (100%)</br>1x OvD-B (100%)</br>1x HOvD (50%)</br>1x Slangenwagen (60%)";
//7 Brandweerposten
var Brandincafetaria ="3x Tankautospuits (100%)</br>1x Redvoertuig (100%)</br>1x HOVD (50%)</br>1x OvD-B (100%)</br>1x Slangenwagen (10%)</br>1x Politie Autos (100%)";
//8 Brandweerposten
//10 Brandweerposten
var Ongevalmettreinenpersonenauto ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuig (90%)</br>1x OvD-B (100%)</br>1x Politieauto (100%)</br>1x Ambulance (100%)";
var Brandinziekenhuis ="3x Tankautospuit (100%)</br>2x Redvoertuigs (100%)</br>1x OvD-B (100%)</br>1x HVOD (10%)</br>1x Adembeschermingsvoertuig (50%)</br>1x Commandowagen (90%)</br>1x Ambulance (100%)";
//11 Brandweerposten
var Brandendegoederenwagon ="3x Tankautospuits (100%)</br>1x OvD-B (100%)</br>1x HVOD (10%)</br>1x Waarschuwings- en Verkenningsdienst (60%)</br>1x Adviseurs Gevaarlijke Stoffen (90%)";
var Vreemdelucht ="1x Tankautospuits (100%)</br>1x Hulpverleningsvoertuig (10%)</br>1x OvD-B (30%)</br>1x Adviseurs Gevaarlijke Stoffen (20%)";
var Stankoverlast ="1x Tankautospuits (100%)</br>1x OvD-B (10%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)";
var Koolmonoxidevrijgekomen ="1x Tankautospuits (100%)</br>1x OvD-B (50%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)</br>1x Politieauto (100%)";
var Lekkendegoederenwagon ="1x Tankautospuits (100%)</br>1x OvD-B (50%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)</br>1x Hulpverleningsvoertuig (100%)";
var Drugslabaangetroffen ="1x Tankautospuits (100%)</br>1x OvD-B (50%)</br>1x Adviseurs Gevaarlijke Stoffen (10%)</br>4x Politieauto (100%)</br>1x Officier van Dienst Politie (100%)";
var Verkeersongevalmetgevaarlijkestoffen ="2x Politieauto's	(100%)</br>1x Tankautospuit (100%)</br>1x OvD-B	(100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x Waarschuwings- en Verkenningsdienst(50%)</br>1x HOVD(50%)</br>1x Commandowagen (50%)</br>1x Ambulance (100%)";
var Brandintankstation ="4x Tankautospuiten (100%)</br>1x Hulpverleningsvoertuig (30%)</br>1x Redvoertuig (100%)</br>1x OvD-B (100%)</br>1x HOvD (100%)</br>1x Commandowagen (100%)</br>1x Slangenwagen (100%)</br>1x Adembeschermingsvoertuig (100%)</br>1x Adviseurs Gevaarlijke Stoffen (50%)</br>1x Waarschuwings- en Verkenningsdienst(50%)</br>2x Politieautos (100%)";
//12 Brandweerposten
var Brandingaragebedrijf = "4x Tankautospuits (100%)</br>1x Hulpverleningsvoertuigs (30%)</br>1x OvD-B (100%)</br>1x Redvoertuig(100%)</br>1x Slangenwagen (100%)";
var Bosbrand = "4x Tankautospuits (100%)</br>1x HOVD (100%)</br>1x OvD-B (100%)</br>1x Commandowagen(10%)</br>1x Slangenwagen (100%)";
//14 Brandweerposten
var Ammoniakalarminopslagloods ="1x Tankautospuit (100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x Hulpverleningsvoertuig (80%)</br>1x OvD-B (100%)</br>1x HOVD (20%)</br>1x Waarschuwings- en Verkenningsdienst (10%)</br>1x Commandowagen(10%)";
var Natuurbrand = "Hier alleen de grootste brand wordt aangenomen:</br>12x Tankautospuits (100%)</br>2x Hulpverleningsvoertuigs (100%)</br>3x OvD-B (100%)</br>2x HVOD (100%))</br>3x Slangenwagen (100%)</br>1x Adembeschermingsvoertuig(50%)";
var Gaslekkage = "2x Tankautospuits (100%)</br>1x Hulpverleningsvoertuig (100%)</br>1x OvD-B (100%)</br>1x HVOD (50%))</br>1x Commandowagen (50%)</br>1x Adviseurs Gevaarlijke Stoffen(50%)";
//16 Brandweerposten
var Brandinsporthal = "Hier alleen de grootste brand wordt aangenomen:</br>8x Tankautospuits (100%)</br>1x Hulpverleningsvoertuigs (100%)</br>2x OvD-B (100%)</br>1x HVOD (100%)</br>2x Redvoertuigs (100%)</br>1x Slangenwagen (100%)</br>1x Adembeschermingsvoertuig(100%)</br>1x Commandowagen (100%)";
//Temporär:
//Winter
var Brandendecadeautjes ="1x Tankautospuit (100%)";
var Sinterklaasvandakgegleden ="1x Ambulance (100%)";
var Pepernootophoofd ="1x Ambulance (100%)";
var Pietbestolen ="1x Politieauto (100%)";
var Kindgeschrokken ="1x Ambulance (100%)";
var Pietkleminschoorsteen ="1x Tankautospuit (100%)</br>1x Redvoertuigs (100%)";
var Demonstratiezwartepiet ="4x Politieautos (100%)";
var Schoenendief ="1x Politieauto (100%)";
var Verstikkinginpepernoot ="1x Ambulance (100%)";
var Brandendekerstboom ="1x Tankautospuit (100%)";
var Verkeersongevaldoorgladheid ="1x Tankautospuit (100%)</br>1x Politieautos (100%)</br>1x OvD-B (100%)</br>1x Ambulance (100%)";
var Gevallenkerstman ="1x Ambulance (100%)";
var Ruzieopdekerstmarkt ="2x Politieautos (100%)";
var Diefstalopdekerstmarkt ="2x Politieautos (100%)";
var Brandendekerstmarktkraam ="1x Tankautospuit (100%)";
var Gevallenschaatser ="1x Ambulance (100%)";
var Gevallenpersoondoorgladheid ="1x Ambulance (100%)";
var Donkeredagenoffensief ="2x Politieautos (100%)";
var Snijwonddoorgebrokenkerstbal ="1x Ambulance (100%)";
//Halloween
var Brandendevogelverschrikker ="1x Tankautospuit (100%)";
var Brandendpompoenveld ="2x Tankautospuits (100%)</br>1x OvD-B (100%)";
var Overkooktepompoensoep ="1x Tankautospuit (100%)</br>1x Ambulance (100%)";
var Heksvastinboom ="1x Tankautospuit (100%)</br>1x Redvoertuigs (100%)";
var Monsteruitgebroken ="4x Politieautos (100%)";
var Gestolenpompoenen ="1x Politieauto (100%)";
var Frankensteingespot ="3x Politieautos (100%)";
var Snoepdiefstal ="1x Politieauto (100%)";
var Horrorclowngespot ="2x Politieautos (100%)";
//Verbandsgroßeinsätze
var Brandinkantoorpand ="8x Tankautospuits (100%)</br>2x OvD-Bs (100%)</br>2x Redvoertuigs (100%)</br>1x Adembeschermingsvoertuig (100%)</br>1x Slangenwagen (100%)</br>1x Waarschuwings- en Verkenningsdienst(100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x HVOD (100%)";
var Kettingbotsing ="12x Tankautospuits (100%)</br>3x OvD-Bs (100%)</br>3x Hulpverleningsvoertuigs (100%)</br>2x HOVD's (100%)</br>5x Politieauto's</br> min. 8x Ambulance(100%)";
var Brandinopslagloods ="16x Tankautospuit (100%)</br>4x Redvoertuigs (100%)</br>4x Hulpverleningsvoertuig (100%)</br>2x HVOD's (100%)</br>4x OvD-B (100%)</br>3x Slangenwagen(100%)</br>2x Waarschuwings- en Verkenningsdienst(100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>1x Adembeschermingsvoertuig (100%)";
var Vliegtuigneergestort ="11x Tankautospuiten (100%)</br>1x Redvoertuig (100%)</br>5x Hulpverleningsvoertuigen (100%)</br>1x Slangenwagen (100%)</br>1x Adviseurs Gevaarlijke Stoffen (100%)</br>3x OvD-Bs (100%)</br>2x HOVDs (100%)</br>2x Commandowagen (100%)</br>14x Politieautos (100%)</br>min. 55 Ambulances</br>min. 1x MMT-Auto (25%)";
//1 Ambulancestandplaats
var Overdosisalcohol ="1x Ambulance (100%)";
var Bloedneus ="1x Ambulance (100%)";
var Gevallenpersoon ="1x Ambulance (100%)";
var Gevallenfietser  ="1x Ambulance (100%)";
var Allergischereactie ="1x Ambulance (100%)";
var Botbreuk ="1x Ambulance (100%)";
var Hyperventilatie ="1x Ambulance (100%)";
var Hittekramp ="1x Ambulance (100%)";
var Hoofdwond ="1x Ambulance (100%)";
var Benauwdheid ="1x Ambulance (100%)";
var Valvantrap ="1x Ambulance (100%)";
var Onwelwording ="1x Ambulance (100%)";
var Overdosisdrugs ="1x Politieauto </br>1x Ambulance (100%)";
var Verstikking ="1x Ambulance (100%)";
var Vergiftiging ="1x Ambulance (100%)";
//2 Ambulancestandplaatsen
var Ontwrichting = "1x Ambulance (100%)";
var Hoofdletsel = "1x Ambulance (100%)";
//3 Ambulancestandplaatsen
var Pijnopdeborst ="1x Ambulance (100%)";
var Astmaaanval ="1x Ambulance (100%)";
var Beroerte ="1x Ambulance (100%)";
var Koortsstuip ="1x Ambulance (100%)";
var Beginnendegeboorte ="1x Ambulance (100%)";
var Hersenbloeding = "1x Ambulance (100%)";
var Nekwervelletsel = "1x Ambulance (100%)";
//4 Ambulancestandplaatsen
var Gebrokenrib = "1x Ambulance (100%)";
//5 Ambulancestandplaatsen
var Psychiatrischbeeld = "1x Ambulance (100%)";
//10 Ambulancestandplaatsen
var Valvanhoogte = "1x Ambulance (100%)</br>1x MMT-Auto (100%)";
var Ernstigebrandwonden = "1x Ambulance (100%)</br>1x MMT-Auto (100%)";
var Aanrijdingvoetganger = "1x Ambulance (100%)</br>1x MMT-Auto (100%)</br>1x Politieauto (100%)";
var Aanrijdingdoortrein = "1x Ambulance (100%)</br>1x MMT-Auto (100%)</br>1x Politieauto (100%)";
//1 Politiebureau
var Winkeldiefstal ="1x Politieauto (100%)";
var Tasjesdief ="1x Politieauto (100%)";
var Bestuurderonderinvloed ="1x Politieauto (100%)";
var Verwardpersoon ="1x Politieauto (100%)";
var Vernielingbushokje ="1x Politieauto (100%)";
var Buspassagierweigerttebetalen ="1x Politieauto (100%)";
//2 Politiebureaus
var Huiselijkgeweld ="1x Politieautos (100%)";
var Assistentietreinconducteur ="3x Politieautos (100%)";
//3 Politiebureaus
var Achtervolgingpersonenauto ="4x Politieautos (100%)</br>1x Politie Helikopter (100%)";
var Vermistpersoon ="3x Politieautos (100%)</br>1x Politie Helikopter (100%)";
//4 Police Station
var Overvalwinkel ="2x Politieautos (100%)</br>1x Politie Helikopter (100%)";
//5 Politiebureaus
var Inbraakinwoning ="1x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)</br>1x Politie Helikopter (100%)";
var Vechtpartijincafé ="4x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)";
var Steekincident ="3x Politieautos (100%)</br>1x Officier van Dienst Politie (100%)</br>1x Ambulance (100%)</br>1x MMT-Auto (100%)";
var Plofkraak ="8x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)</br>1x Politie Helikopter (100%)</br>1x OvD-B (100%)</br>1x Tankautospuit (100%)";
var Invalinwoning ="3x Politieautos (100%)</br>1x Officier van Dienst Politie (50%)";
var Schietincident ="5x Politieautos (100%)</br>1x OvD-P (100%)</br>min. 1x Ambulance (100%)</br>1x MMT-Auto (100%)";
//1 Waterongevallenbestrijding
var Bergenobjectuitwatervoorpolitie ="1x Tankautospuit (100%)</br>1x Waterongevallenvoertuig (100%)</br>2x Politieautos (100%)";
var Verkeersongevalmetbeknelling ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuigs(40%)</br>1x Waterongevallenvoertuig (20%)</br>2x Politieautos (100%)</br>1x OvD-B (100%)</br>1x Ambulance (100%)";
var Personenautoinsloot ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuigs(50%)</br>1x Waterongevallenvoertuig (80%)</br>2x Politieautos (100%)</br>1x OvD-B (100%)</br>min. 1x Ambulance (100%)";
var Paardinsloot ="1x Tankautospuit (100%)</br>1x Hulpverleningsvoertuigs(20%)</br>1x Waterongevallenvoertuig (10%)";
var Eendverstriktinvisdraad ="1x Tankautospuit (100%)</br>1x Waterongevallenvoertuig (10%)";
var Verlatenkinderfietslangswaterkant ="1x Tankautospuit (100%)</br>1x Waterongevallenvoertuig (10%)</br>1x Politieauto (100%)</br>1x OvD-B (100%)";
//2 Waterongevallenbestrijding
var Persoontewater ="1x Tankautospuit (100%)</br>1x Redvoertuig(50%)</br>2x Waterongevallenvoertuig (100%)</br>1x Waterongevallena Anhangers(100%)</br>1x Politieauto (100%)</br>1x OvD-B (100%)</br>1x Ambulance(100%)";
var Personenautotewater ="1x Tankautospuit (100%)</br>1x Redvoertuig(50%)</br>1x Hulpverleningsvoertuig(60%)</br>2x Waterongevallenvoertuig (100%)</br>1x Waterongevallena Anhangers(50%)</br>3x Politieauto (100%)</br>1x OvD-B (100%)</br>min. 1x Ambulance(100%)";
//3 Waterongevallenbestrijding
var Aanvaringmetvrachtschipenmotorboot ="2x Tankautospuit (100%)</br>1x Redvoertuig(80%)</br>1x Hulpverleningsvoertuig(80%)</br>3x Waterongevallenvoertuig (100%)</br>2x Waterongevallena Anhangers(100%)</br>2x Politieauto (100%)</br>1x OvD-B (100%)</br>1x HOvD (50%)</br>1x Commandowagen (50%)</br>min. 3x Ambulance(100%)";
//KT
var Besteldvervoer ="1x Zorgambulance (100%)";

function addInfo(missionName) {
    var info = document.createElement('div');
    info.className = "alert alert-warning";
    var missionString = "";
    try{
    missionString += eval(missionName);
    }catch(err){
        missionString = "Fout bij het laden van de Voertuigen. </br>Gelieve het volgende door te geven aan de ontwikkelaars: "+err;    }
    info.innerHTML = "<h3>Benodigde Voertuigen:</h3> "+missionString + "</br>";

     document.getElementById('mission-form').insertBefore(info,document.getElementById("next_mission"));

}

function Normalize(missionname){
var longname = missionname;
    var short = longname.innerHTML.trim().split("\n");
    for(var i = 0; i<short.length;i++){
        var current = ""+short[i].toString();
    if(current.search('<') != -1 || current === "" || !(/\S/.test(current))){
       short.splice(i,1);
        i--;
       }
    }
    var shortendname = short[0].trim().replace(/\s/g,'').replace(/[(]/g,'').replace(/[)]/g,'').replace(/[-]/g,'').replace("Brandmeldeanlage","");
    if(shortendname === "Voetbalwedstrijd"||shortendname === "Voetbalwedstrijd,risicowedstrijd"||shortendname === "Hardloopevenement"||shortendname === "Begeleidingorkest"||shortendname === "Begeleidingwielrenners"||shortendname === "Testbrandalarmschool"||shortendname === "Open dag,klein"||shortendname === "Open dag,groot"){
     return "nope";
    }
    return shortendname;
}


(function() {
    var missionname = Normalize(document.getElementById("missionH1"));
    if(missionname != "nope"){
        addInfo(missionname);
    }
})();
