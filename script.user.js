// ==UserScript==
// @name        Einsatzhelfer
// @namespace   leitstellenspiel
// @description Zeigt in einem Info-Fenster die benötigten Fahrzeuge an
// @include     https://www.leitstellenspiel.de/missions/*
// @downloadURL https://github.com/Suchty112/LSS.Einsatzhelfer/raw/master/script.user.js
// @updateURL   https://github.com/Suchty112/LSS.Einsatzhelfer/raw/master/script.user.js
// @author    DrFussel u. KV Nürnberg/SanniHameln
// @version     1.5.2
// @grant       none
// ==/UserScript==

//1 FW-Wache
var KleinerWaldbrand = "1x Löschfahrzeug (100%)";
var KleintierinNot = "1x Löschfahrzeug (100%) <br/> 1x Drehleiter (20%)";
var BrennendesGebüsch = "1x Löschfahrzeug (100%)";
var BrennenderAnhänger = "1x Löschfahrzeug (100%)";
var TraktorBrand = "1x Löschfahrzeug (100%)";
var MotorradBrand = "1x Löschfahrzeug (100%)";
var BrennenderPKW = "1x Löschfahrzeug (100%)";
var BrennendeTelefonzelle = "1x Löschfahrzeug (100%)";
var BrandinBriefkasten = "1x Löschfahrzeug (100%)";
var BrennendesGras = "1x Löschfahrzeug (100%)";
var BaumaufStraße = "1x Löschfahrzeug oder <br/>1x Rüstwagen ";
var StrohballenBrand = "1x Löschfahrzeug (100%)";
var Sperrmüllbrand = "1x Löschfahrzeug (100%)";
var BrennendesLaub = "1x Löschfahrzeug (100%)";
var Containerbrand = "1x Löschfahrzeug (100%)";
var Mülleimerbrand = "1x Löschfahrzeug (100%)";
var AuslaufendeBetriebsstoffe = "1x Löschfahrzeug (100%)";
var KleineÖlspur = "1x Löschfahrzeug (100%)";
var Motorradunfall = "1x Löschfahrzeug (100%)<br/>1x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen<br/>1x Notarzteinsatzfahrzeug (70%)";
var BrennendePapiercontainer = "1x Löschfahrzeug (100%)";
var BrennendeHecke = "1x Löschfahrzeug (100%)";
var ÄsteaufFahrbahn = "1x Löschfahrzeug (100%)";
var UmherfliegendesBaumaterial = "1x Löschfahrzeug (100%)";
var BaumaufRadweg = "1x Löschfahrzeug (100%)";
var Ausgelöster Heimrauchmelder = "1x Löschfahrzeug (100%)";
//2 FW-Wache
var Wohnwagenbrand ="2x Löschfahrzeuge (100%)";
var BrennenderLKW ="2x Löschfahrzeuge (100%)";
var Gartenlaubenbrand ="2x Löschfahrzeuge (100%)";
var Zimmerbrand = "2x Löschfahrzeuge (100%)<br/>1x Drehleiter (30%)<br/>1x Funkstreifenwagen (50%)<br/>1x Rettungstransportwagen<br/>1x Notarzteinsatzfahrzeug (50%)";
var KleinerFeldbrand = "2x Löschfahrzeuge (100%)";
var FeueraufBalkon = "2x Löschfahrzeuge (100%) <br/> 1x Drehleiter (100%)";
var Küchenbrand = "2x Löschfahrzeuge (100%)<br/>1x Funkstreifenwagen (50%)";
var PersonimAufzug = "1x Löschfahrzeug (100%) oder <br/>1x Rüstwagen<br/>1x Rettungstransportwagen (100%)";
var BrennenderMüllwagen = "2x Löschfahrzeuge (100%)";
//3 FW-Wache
var FettbrandinPommesbude = "1x Löschfahrzeug (100%)";
var FeuerinSchnellrestaurant = "3x Löschfahrzeuge (100%)";
var Dachstuhlbrand = "3x Löschfahrzeuge (100%) <br/> 1x Drehleiter (100%) <br/> 1x Einsatzleitwagen 1 (50%)";
var Kellerbrand ="3x Löschfahrzeuge (100%) <br/> 1x Einsatzleitwagen 1 (90%)";
var Schornsteinbrand ="1x Löschfahrzeug (100%) <br/> 1x Drehleiter (100%) <br/> 1x Einsatzleitwagen 1 (100%)";
var BrennendesBusHäuschen ="1x Löschfahrzeug (100%)";
var GeplatzteWasserleitung ="2x Löschfahrzeuge (100%) <br/> 1x Rüstwagen (20%) <br/> 1x Einsatzleitwagen 1 (20%)";
var Verkehrsunfall ="Hier wird nur der größte VU angenommen:<br/>2x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (70%)";
var Carportbrand ="2x Löschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (30%)</br>1x Drehleiter (20%)";
//4 FW-Wache
var BrandimSupermarkt ="3x Löschfahrzeuge (100%) <br/> 1x Drehleiter (70%)<br/>1x Rüstwagen (30%) <br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (20%) <br/> 1x GW-Messtechnik (30%)";
var Garagenbrand ="2x Löschfahrzeuge (100%)";
var KellerunterWasser ="1x Löschfahrzeug (100%)";
var FeuerinEinfamilienhaus ="3x Löschfahrzeuge (100%)<br/>1x Drehleiter (50%)<br/>1x Einsatzleitwagen 1 (70%)<br/>1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (50%)";
var TiefgarageunterWasser ="1x Löschfahrzeug (100%)";
var BrennendeTrafostation ="2x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Funkstreifenwagen (100%)";
var Gasgeruch ="3x Löschfahrzeuge (100%)<br/> 1x Dekon P (30%)<br/>1x GW-Messtechnik (30%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Gefahrgut (30%)<br/>1x Funkstreifenwagen<br/>1x Rettungstransportwagen<br/>1x Notarzteinsatzfahrzeug (40%)";
var MitarbeiterunterPKWeingeklemmt ="2x Löschfahrzeuge (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (100%)";
//5 FW-Wachen
var Maschinenbrand ="3x Löschfahrzeuge (100%)<br/> 1x Rüstwagen (100%)<br/> 1x Einsatzleitwagen 1 (100%)<br/>1x GW-Atemschutz (20%)<br/>1x Schlauchwagen (30%)";
var RauchentwicklunginMuseum ="3x Löschfahrzeuge (100%)<br/>1x Drehleiter (100%)<br/>1x GW-Atemschutz (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (75%)";
var FeuerimKrankenhaus  ="4x Löschfahrzeuge (100%)<br/> 2x Rüstwagen (30%)<br/> 1x Drehleiter (100%)<br/> 1x Einsatzleitwagen 1 (100%)<br/> 1x Einsatzleitwagen 2 (30%)<br/>2x Funkstreifenwagen (100%)";
var BaumaufPKW ="1x Löschfahrzeug (100%)<br/>1x Funkstreifenwagen (100%) Nur bei Patient<br/>1x Rettungstransportwagen<br/>1x Notarzteinsatzfahrzeug (50%)";
var Bürobrand ="6x Löschfahrzeuge (100%)<br/>2x Drehleiter (100%)<br/>2x Rüstwagen (30%)<br/>1x GW-Atemschutz (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (30%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (40%)";
var LKWinSupermarkt ="2x Löschfahrzeuge (100%)<br/>1x Drehleiter (70%)<br/> 1x Einsatzleitwagen 1 (100%)<br/>1x Feuerwehrkran (70%)<br/>1x Gerätekraftwagen (100%)<br/>1x MTW-TZ (100%)<br/>1x MzKW (100%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (50%)";
var GasunfallinWerkstatt ="3x Löschfahrzeuge (100%)<br/> 1x Einsatzleitwagen 1 (100%)<br/>1x Rüstwagen (30%)<br/>1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (40%)";
var StrohballenqualmeninScheune ="5x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Drehleiter (75%)<br/>1x GW-Atemschutz (100%)<br/>1x Schlauchwagen (50%)";
//6 FW-Wachen
var AufgerissenerÖltank ="3x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Öl (100%)";
var GroßeÖlspur ="1x Löschfahrzeug (100%)<br/>1x GW-Öl (75%)";
var Kaminbrand ="1x Löschfahrzeug (100%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)";
var Kleinflugzeugabgestürzt ="3x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (10%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (80%)";
var MähdrescherBrand ="2x Löschfahrzeuge (100%)";
var BaumaufDach ="1x Löschfahrzeug (100%)<br/>1x Drehleiter (10%)<br/>1x Feuerwehrkran (10%)";
var PersonunterBaumeingeklemmt ="1x Löschfahrzeug (100%)<br/>1x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var Chlorgasaustritt ="7x Löschfahrzeuge (100%)<br/>2x GW-Atemschutz (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>1x GW-Messtechnik (100%)<br/>1x GW-Gefahrgut (100%)<br/>4x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (60%)";
var VerkehrsunfallmitLinienbus ="unterschieden wird in klein(bis 5 Patienten) - groß (bis 10 Patienten)<br/>2 oder 5x Löschfahrzeuge (100%)<br/>1 oder 2x Rüstwagen (100%)<br/>1 oder 2x Einsatzleitwagen 1<br/>0 oder 1x Einsatzleitwagen 2 (100%)<br/>0 oder 1x GW-Öl (100%)<br/>0 oder 1x Feuerwehrkran (100%)<br/> 2 oder 4x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (20 oder 40%)";
var PfeffersprayinSchule ="2x Löschfahrzeuge (100%)<br/>1x GW-Messtechnik (50%)<br/>3x Funkstreifenwagen<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (10%)";
var PersoninBaumaschineeingeklemmt ="2x Löschfahrzeuge (100%)</br>1x Rüstwagen (100%)</br>1x Einsatzleitwagen 1 (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
//7 FW-Wachen
var BrennendeLok ="4x Löschfahrzeuge (100%)<br/>1x Rüstwagen (50%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (10%)<br/>1x GW-Atemschutz (30%)<br/>1x Schlauchwagen (100%)";
var Flächenbrand ="4x Löschfahrzeuge (100%)<br/>1x Schlauchwagen (20%)<br/> 1x Einsatzleitwagen 1 (20%)<br/>2x Funkstreifenwagen (100%)";
var MittlererFeldbrand ="3x Löschfahrzeuge (100%)<br/>1x Schlauchwagen (20%)<br/> 1x Einsatzleitwagen 1 (50%)";
var BrennendesReetdachhaus ="5x Löschfahrzeuge (100%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Atemschutz (30%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (50%)";
var Scheunenbrand ="6x Löschfahrzeuge (100%)<br/>1x Drehleiter (50%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Atemschutz (25%)<br/>1x Schlauchwagen (60%)";
// 8 FW-Wachen
var AusgedehnteÖlspur = "6x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Öl (100%)<br/>2x Funkstreifenwagen (100%)";
var BrennenderBus = "5x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (75%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (30%)";
var LKWumgestürzt = "2x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Feuerwehrkran (75%)<br/>2x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (50%)";
var GroßerWaldbrand ="3x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Schlauchwagen (70%)<br/>1x Funkstreifenwagen (100%)";
var BaumaufGleisen ="1x Löschfahrzeug (100%)<br/>1x Funkstreifenwagen (100%)";
//9 FW-Wachen
var StraßeunterWasser ="1x Löschfahrzeug (100%)<br/>2x Funkstreifenwagen (100%)";
var FeueraufBauernhofMittel ="7x Löschfahrzeuge (100%)<br/>2x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Atemschutz(100%)<br/>1x GW-L2-Wasser (100%)<br/>3x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (33%)";
var VerkehrsunfallmitZug ="2x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (80%)";
var BaumaufOberleitung ="3x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)";
//10 FW-Wachen
var BrennenderGüterwaggon ="4x Löschfahrzeuge (100%)<br/>2x Rüstwagen (30%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Messtechnik (20%)<br/>1x Dekon P (10%)";
var GroßerFeldbrand ="5x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Schlauchwagen (100%)<br/>1x Funkstreifenwagen (100%)";
var Baumaschineumgestürzt ="4x Löschfahrzeuge (100%)<br/>1x Drehleiter (100%)<br/>2x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Öl (100%)<br/>1x Feuerwehrkran (100%)<br/>3x Funkstreifenwagen (100%)";
//11 FW-Wachen
var Tankstellenbrand ="4x Löschfahrzeuge (100%)<br/>2x Rüstwagen (30%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (10%)<br/>1x GW-Gefahrgut (70%)<br/>1x GW-Messtechnik (80%)";
var LKWAuffahrunfall ="3x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (75%)<br/>1x GW-Öl (25%)<br/>1x GW-Gefahrgut (10%)<br/>2x Funkstreifenwagen (100%)<br/>Notarzteinsatzfahrzeug (70%)";
//12 FW-Wachen
var BrandinWerkstatt = "4x Löschfahrzeuge (100%)<br/>1x Rüstwagen (30%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (10%)";
var BewusstloserKranführer = "1x Löschfahrzeug (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Höhenrettung (100%)<br/>1x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (80%)";
var VerletztePersonaufBaugerüst = "1x Löschfahrzeug (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Höhenrettung (100%)<br/>1x Drehleiter (30%)<br/>1x Rettungstransportwagen (100%)";
var Fassadenteiledrohenzufallen = "1x Löschfahrzeug (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Höhenrettung (40%)<br/>1x Drehleiter (40%)<br/>1x Funkstreifenwagen (100%)";
var BeschädigterDachbereich = "2x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Höhenrettung (20%)<br/>1x Drehleiter (50%)<br/>1x Funkstreifenwagen (100%)";
var VerletztePersonaufHochspannungsmast = "2x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Höhenrettung (100%)<br/>1x Drehleiter (20%)<br/>1x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (80%) oder<br/>1x Notarzteinsatzfahrzeug/Rettungshubschrauber (100%)";
var BeschädigterKesselwagen = "10x Löschfahrzeuge (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>1x Drehleiter (100%)<br/>1x Dekon P (100%)<br/>1x GW-Gefahrgut(100%)<br/>1x GW-Messtechnik (100%)<br/>3x Funkstreifenwagen (100%)<br/>1x GKW";
var AbgestürzterKletterer = "2x Löschfahrzeuge (100%)</br>1x GW-Höhenrettung (50%)</br>1x Funkstreifenwagen (100%)</br>1x Einsatzleitwagen 1</br>1x Drehleiter (75%)</br>1x Rettungstransportwagen (100%)1x Notarzteinsatzfahrzeug (90%)/1x Rettungshubschrauber (50%)";
var VerunglückterFallschirmspringer ="3x Löschfahrzeuge (100%)</br>1x Einsatzleitwagen 1 (100%)</br>1x Drehleiter (100%)</br>1x GW-Höhenrettung (100%)</br>1x Retttungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
//13 FW-Wachen
var Sporthallenbrand ="7x Löschfahrzeuge (100%)<br/>2x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (30%)<br/>1x Schlauchwagen (30%)<br/>1x GW-Atemschutz (50%)";
var LeckinChemikalientank ="8x Löschfahrzeuge (100%)<br/>2x Rüstwagen (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>1x Schlauchwagen (20%)<br/>1x GW-Atemschutz (100%)<br/>1x GW-Öl (50%)<br/>2x GW-Messtechnik (100%)<br/>1x GW-Gefahrgut (100%)<br/>1x Dekon P (100%)<br/>2x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (15%)";
var BrennendeesKleinflugzeug="8x Löschfahrzeuge (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2</br>1x Rüstwagen (100%)</br>1x Drehleiter (50%)</br>1x Schlauchwagen (80%)</br>1x GW-Öl (25%)</br>3x Funkstreifenwagen (100%)</br>min. 1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (80%)";
//15 FW-Wachen
var ParkdeckvollWassergelaufen ="1x Löschfahrzeug (100%)<br/>1x Schlauchwagen (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>1x GW-Öl (100%)<br/>2x Funkstreifenwagen (100%)";
var ChemieunfallanSchule ="8x Löschfahrzeuge (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (80%)</br>1x Drehleiter (100%)</br>1x Dekon-P (50%)</br>1x GW-Atemschutz (50%)</br>1x GW-Messtechnik (100%)</br>1x GW-Gefahrgut (100%)</br>min. 1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (60%)";
var UnbekannteSubstanz ="12x Löschfahrzeuge (100%)</br>2x Einsatzleitwagen 1 (100%)</br>1x Einsatzleitwagen 2 (100%)</br>1x Dekon-P (100%)</br>1x GW-Atemschutz (100%)</br>2x GW-Messtechnik (100%)</br>2x Rüstwagen (100%)</br>4x Funkstreifenwagen (100%)</br>evtl. 1x Rettungstransportwagen (100%)";
//18 FW-Wachen
var Lagerhallenbrand ="5x Löschfahrzeuge (100%)<br/>1x Rüstwagen (100%)<br/>2x Drehleiter (100%)<br/>1x Schlauchwagen (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>1x GW-Atemschutz (100%)<br/>1x GW-Messtechnik (100%)<br/>1x Feuerwehrkran (15%)<br/>2x Funkstreifenwagen (100%)<br/>1x GKW (100%)<br/>1x MTW-TZ (100%)<br/>1x LKW K9 (100%)<br/>1x BRmG R (100%)<br/>1x Anh DLE (100%)<br/>Notarzteinsatzfahrzeug (20%)";
var FeuerimLagerraum ="2x Löschfahrzeuge (100%)<br/>1x Drehleiter (50%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Messtechnik (20%)";
//20 FW-Wachen
var GroßfeuerimWald = "10x Löschfahrzeuge (100%)<br/>1x Drehleiter (10%)<br/>1x Schlauchwagen (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (30%)<br/>1x GW-Atemschutz (100%)<br/>3x Funkstreifenwagen (100%)";
//25 FW-Wachen
var Gasexplosion ="20x Löschfahrzeuge (100%)<br/>2x Rüstwagen (100%)<br/>2x Schlauchwagen (100%)<br/>4x Einsatzleitwagen 1 (100%)<br/>2x Einsatzleitwagen 2 (100%)<br/>2x GW-Messtechnik (100%)<br/>2x GW-Atemschutz (100%)<br/>2x Drehleiter (100%)<br/>1x Dekon P (10%)<br/>1x Feuerwehrkran (40 %)<br/>4x Funkstreifenwagen (100%)<br/>1x GKW (100%)<br/>1x MTW-TZ (100%)<br/>1x BRmG R (100%)<br/>1x LKW K9 (100%)<br/>1x MzKW (100%)<br/>1x Anh DLE (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (40%)";
//30 FW-Wachen
var FeueraufBauernhofGroß ="15x Löschfahrzeuge (100%)<br/>2x Schlauchwagen (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>2x GW-Atemschutz (100%)<br/>4x Drehleiter (100%)<br/>1x Feuerwehrkran (15%)<br/>3x Funkstreifenwagen (100%)<br/>2x GKW (100%)<br/>1x MTW-TZ (100%)<br/>2x BRmG R (100%)<br/>2x LKW K9 (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (50%)";
var BürobrandGroß = "10x Löschfahrzeug (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>3x Einsatzleitwagen 1 (100%)<br/>2x Drehleiter (100%)<br/>2x Rüstwagen (30%)<br/>1x GW-A (100%)<br/>3x Funkstreifenwagen (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (40%)";
//Temporär:
//Winter
var BrennenderTannenbaum ="1x Löschfahrzeug (100%)";
var BrandaufWeihnachtsmarkt  ="1x Löschfahrzeug (100%)";
var VerkehrsunfalldurchGlatteis ="1x Löschfahrzeug (100%)<br/>1x Rüstwagen (100%)";
var BrennenderAdventskranz ="1x Löschfahrzeug (100%)";
var RangeleiaufWeihnachtsmarkt ="2x Funkstreifenwagen (100%)";
var DiebstahlaufWeihnachtsmarkt ="1x Funkstreifenwagen (100%)";
var BrennendeWeihnachtsmarktbude  ="2x Löschfahrzeuge (100%)";
//Vatertag
var BrennenderBollerwagen = "1x Löschfahrzeug (100%)";
//Silverster
var BrennenderPKWdurchFeuerwerkskörper ="1x Löschfahrzeug (100%)";
var SperrmüllbranddurchFeuerwerkskörper ="1x Löschfahrzeug (100%)";
var KleinerFeldbranddurchFeuerwerkskörper ="2x Löschfahrzeuge (100%)";
var KellerbranddurchFeuerwerkskörper ="3x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)";
var BrennendesBusHäuschendurchFeuerwerkskörper ="1x Löschfahrzeug (100%)";
var FeueraufBalkondurchFeuerwerkskörper ="2x Löschfahrzeuge (100%)<br/>1x Drehleiter (30%)";
var BrennendePapiercontainerdurchFeuerwerkskörper ="1x Löschfahrzeug (100%)";
var BrennendeHeckedurchFeuerwerkskörper ="1x Löschfahrzeug (100%)";
var TrunkenheitsfahrtnachSilvesterparty ="1x Funkstreifenwagen (100%)";
var BrennendesReetdachhausdurchFeuerwerkskörper ="5x Löschfahrzeuge (100%)<br/>1x Drehleiter (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Atemschutz (30%)<br/>2x Funkstreifenwagen (100%)";
var KfzdurchFeuerwerkskörperbeschädigt ="1x Funkstreifenwagen (100%)";
var VerstoßgegenSprengstoffverordnung ="1x Funkstreifenwagen (100%)";
//Halloween
var BrennendeVogelscheuche ="1x Löschfahrzeug (100%)";
var BrennendesKürbisfeld ="2x Löschfahrzeuge (100%)";
var Kürbissuppeübergekocht ="2x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-Atemschutz (100%)";
var HexehängtinBaum ="1x Löschfahrzeug (100%)<br/>1x Drehleiter (100%)";
var Zombiebiss ="1x Rettungstransportwagen (100%)";
var Monsterausgebrochen ="4x Funkstreifenwagen (100%)";
var Kürbissegeklaut ="1x Funkstreifenwagen (100%)";
var Frankensteingesichtet ="3x Funkstreifenwagen (100%)";
var Süßigkeitendiebstahl ="1x Funkstreifenwagen (100%)";
//Sommerlich
var Sonnenstich ="1x Rettungstransportwagen (100%)";
var Hitzschlag ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (40%)";
var Hitzekrampf ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (80%)";
//Ostern
var OstereierDieb ="1x Funkstreifenwagen (100%)";
var PinselausWerkstattentwendet ="1x Funkstreifenwagen (100%)";
var EingestürzterHasenbau ="2x Funkstreifenwagen (100%)<br/>1x GKW (100%)<br/>1x MTW-TZ (100%)<br/>1x BRmG R (100%)<br/>1x LKW K9 (100%)";
var AngefahrenerOsterhase ="1x Rettungstransportwagen (100%)<br/>1x Funkstreifenwagen (100%)";
var BrennendesOsternest ="1x Löschfahrzeug (100%)";
var SchokoladenspuraufStrasse ="1x Löschfahrzeug (100%)";
var Eierkocherbrand ="2x Löschfahrzeuge (100%)";
//Verbandsgroßeinsätze
var Großbrand ="6x Löschfahrzeuge (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>2x Drehleiter (100%)<br/>1x GW-Atemschutz (100%)<br/>1x Schlauchwagen (100%)<br/>1x GW-Messtechnik (???%)";
var Massenkarambolage ="10x Löschfahrzeuge (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>5x Rüstwagen (100%)<br/>2x GW-Öl (100%)";
var Gefahrgutunfall ="20x Löschfahrzeuge (100%)<br/>2x Drehleiter (100%)<br/>5x Rüstwagen (100%)<br/>3x GW-Atemschutz (100%)<br/>3x Einsatzleitwagen 1 (100%)<br/>4x GW-Messtechnik (100%)<br/>4x GW-Gefahrgut (100%)";
var GefahrgutunfallGroß ="20x Löschfahrzeuge (100%)<br/>2x Drehleiter (100%)<br/>5x Rüstwagen (100%)<br/>2x GW-Atemschutz (100%)<br/>3x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>4x GW-Messtechnik (100%)<br/>4x GW-Gefahrgut (100%)<br/>1x Dekon P (100%)<br/>2x GKW (100%)<br/>1x MTW-TZ (100%)<br/>2x BRmG R (100%)<br/>2x LKW K9 (100%)<br/>3x Funkstreifenwagen (100%)";
var unangekündigteDemonstration ="7x Funkstreifenwagen (100%)";
var Flugzeugabgestürzt ="22x Löschfahrzeuge (100%)<br/>1x GW-Atemschutz (45%)<br/>1x GW-Öl (25%)<br/>1x GW-Messtechnik (100%)<br/>1x Drehleiter (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>2x Einsatzleitwagen 2 (100%)<br/>6x Rüstwagen (100%)<br/>10x Funkstreifenwagen (100%)<br/>1x leBefKw (40%)";
var ZugunglückKlein ="20x Löschfahrzeuge (100%)<br/>2x GW-Atemschutz (100%)<br/>1x GW-Öl (100%)<br/>1x GW-L2-Wasser (100%)<br/>2x Drehleiter (100%)<br/>3x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>3x Rüstwagen (100%)<br/>2x FwK (100%)<br/>1x BRmG R (100%)<br/>1x LKW K9 (100%)<br/>1x MTW-TZ (100%)<br/> 6x Funkstreifenwagen (100%)";
var ZugunglückGroß ="30x Löschfahrzeuge (100%)<br/>4x GW-Atemschutz (100%)<br/>1x GW-Öl (100%)<br/>2x GW-L2-Wasser (100%)<br/>3x Drehleiter (100%)<br/>6x Einsatzleitwagen 1 (100%)<br/>3x Einsatzleitwagen 2 (100%)<br/>6x Rüstwagen (100%)<br/>4x FwK (100%)<br/>2x BRmG R (100%)<br/>2x LKW K9 (100%)<br/>1x MTW-TZ (100%)<br/>1x GKW (100%)<br/>1x MzKW (100%)<br/>12x Funkstreifenwagen (100%)";
var ZusammenstoßzweierBoote ="6x Löschfahrzeuge (100%)<br/>2x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (100%)<br/>6x GW-Taucher (100%)<br/>6x Boote (100%)<br/>5x Funkstreifenwagen (100%)";
//1 Rettungswache
var Alkoholintoxikation ="1x Rettungstransportwagen oder Krankentransportwagen (100%)";
var Nasenblutenunstillbar ="1x Rettungstransportwagen oder Krankentransportwagen (100%)";
var GestürztePerson ="1x Rettungstransportwagen (100%)";
var GestürzterFußgänger  ="1x Rettungstransportwagen (100%)";
var GestürzterRadfahrer ="1x Rettungstransportwagen (100%)";
var Kopfplatzwunde ="1x Rettungstransportwagen oder Krankentransportwagen (100%)";
var ArbeitsunfallimGarten ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
//3 Rettungswachen
var Herzinfarkt ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var akuterAsthmaAnfall ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var Fieber ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
var Schlaganfall ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (45%)";
var Krampfanfall ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var AngefahrenePerson ="1x Rettungstransportwagen (100%)<br/>1x Funkstreifenwagen (100%)";
var Unterzuckerung ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
var AkuteBauchschmerzen ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
var ReitunfallmitPkw ="1x Löschfahrzeug (100%)<br/>1-4x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (50%)";
var Bluthochdruck ="1x Retttungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (50%)";
//4 Rettungswachen
var UnfallmitMotorsäge ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (95%)";
var BewusstlosePerson ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (90%)";
//5 Rettungswachen
var SchwangereinNotsituation ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var BeginnendeGeburt ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var VaginaleBlutung ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
var Gehirnerschütterung ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
//7 Rettungswachen
var AkuterHarnstau ="1x Rettungstransportwagen (100%)";
var HarnleiterBlutung ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (20%)";
var Herzrhythmusstörungen ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (60%)";
//9 Rettungswachen
var Schädelverletzung ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)";
var Wirbelsäulenverletzung ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug/Rettungshubschrauber (100%)";
var SturzausHöhe ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug/Rettungshubschrauber (50%)";
var Stromschlag ="1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (100%)/Rettungshubschrauber (50%)";
//1 Polizei Wache
var Ladendiebstahl ="1x Funkstreifenwagen (100%)";
var Taschendiebstahl ="1x Funkstreifenwagen (100%)";
var Metalldiebstahl ="1x Funkstreifenwagen (100%)";
var PersonhinterTür ="1x Funkstreifenwagen (100%)<br/>1x Löschfahrzeug (100%)";
var PersonalienaufnahmevonSchwarzfahrer ="1x Funkstreifenwagen (100%)";
var ParkendesAutogerammt ="1x Funkstreifenwagen (100%)";
var NotebookausSchuleentwendet ="1x Funkstreifenwagen (100%)";
var EinbruchinKeller ="1x Funkstreifenwagen (100%)";
var EinbruchinWohnung ="1x Funkstreifenwagen (100%)";
var Sachbeschädigung ="1x Funkstreifenwagen (100%)";
var Ruhestörung ="1x Funkstreifenwagen (100%)";
var Auffahrunfall ="1x Funkstreifenwagen (100%)<br/>1x Löschfahrzeug (10%)";
var Trunkenheitsfahrt ="1x Funkstreifenwagen (100%)";
var Ampelausfall ="1x Funkstreifenwagen (100%)";
var Pannenfahrzeug ="1x Funkstreifenwagen (100%)";
var Hausfriedensbruch ="1x Funkstreifenwagen (100%)";
var HilflosePerson ="1x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen oder Krankentransportwagen (---%) ";
var Verkehrsbehinderung ="1x Funkstreifenwagen (100%)";
var DiebstahlausKfz ="1x Funkstreifenwagen (100%)";
var Fahrraddiebstahl ="1x Funkstreifenwagen (100%)";
var Wildunfall ="1x Funkstreifenwagen (100%)";
//2 Polizei Wachen
var RandalierendePerson ="2x Funkstreifenwagen (100%)";
var HäuslicheGewalt ="2x Funkstreifenwagen (100%)";
var SuchenachVermissten ="2x Funkstreifenwagen (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Polizeihubschrauber (100%)<br/>1x Löschfahrzeug (100%)<br/>1x NEF (100%)";
var Kabeldiebstahl ="2x Funkstreifenwagen (100%)<br/>1x Polizeihubschrauber (100%)";
var Tankbetrug ="1x Funkstreifenwagen (100%)";
var TiereaufderFahrbahn ="2x Funkstreifenwagen (100%)";
//3 Polizei Wachen
var Schlägerei ="3x Funkstreifenwagen (100%)";
var Raub ="3x Funkstreifenwagen (100%)";
var Personenkontrolle ="1x Funkstreifenwagen (100%)";
//5 Polizei Wachen
var Massenschlägerei ="5x Funkstreifenwagen (100%)<br/>Notarzteinsatzfahrzeug (10%)";
//6 Polizei Wachen
var Tankstellenüberfall ="6x Funkstreifenwagen (100%)";
//7 Polizei Wachen
var EntflohenerGefangener ="10x Funkstreifenwagen (100%)<br/>1x Polizeihubschrauber (100%)";
//1 WR Wache
var PersoninWasser ="1x Boot (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (90%)<br/>3x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)";
var HilflosePersonaufWasser ="1x Boot (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (90%) / evtl. auch 1x RTH (50%)<br/>1x Löschfahrzeuge (20%)<br/>1x GW-Taucher (10%)";
var GewässerverschmutzungdurchÖl ="1x Boot (100%)<br/>2x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x GW-ÖL (100%)<br/>1x Funkstreifenwagen (100%)";
var Tauchunfall ="1x Boot (100%)</br>1x GW-Taucher (100%)</br>1x Rettungstransportwagen (100%)</br>1x Notarzteinsatzfahrzeug (90%)";
//2 WR Wache
var PkwinWasser ="2x Boote (100%)<br/>2x GW-Taucher (100%)<br/>2x GW-Wasserrettung<br/>3x Löschfahrzeuge/Tanklöschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (90%)<br/>2x Funkstreifenwagen (100%)";
//3 WR Wache
var LKWinWasser ="3x Boote (100%)<br/>3x GW-Taucher (100%)<br/>3x GW-Wasserrettung<br/>5x Löschfahrzeuge/Tanklöschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Rettungstransportwagen (100%)<br/>1x Notarzteinsatzfahrzeug (30%)<br/>3x Funkstreifenwagen (100%)";
var BusinWasser ="3x Boote (100%)<br/>3x GW-Taucher (100%)<br/>3x GW-Wasserrettung<br/>5x Löschfahrzeuge/Tanklöschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>min. 1x Rettungstransportwagen<br/>Notarzteinsatzfahrzeug (30%)<br/>3x Funkstreifenwagen (100%)";
//1 BePo Wache
var SchwerpunkteinsatzTageswohnungseinbrüche ="3x GruKw (100%)<br/>1x leBefKw (100%)";
var SchwerpunkteinsatzVerkehrsüberwachung ="3x GruKw (100%)<br/>1x leBefKw (100%)";
var PräsenzeinsatzVolksfest ="3x GruKw (100%)<br/>1x leBefKw (100%)";
var JugendschutzkontrolleinDiskothek ="3x GruKw (100%)<br/>1x leBefKw (100%)<br/>2x Funkstreifenwagen (100%)";
var GeländedurchsuchungnachBeweismittel ="3x GruKw (100%)<br/>1x leBefKw (100%)";
var GeplanteRazzia ="6x GruKw (100%)<br/>2x leBefKw (100%)<br/>1x GefKw (100%)<br/>2x Funkstreifenwagen (100%)";
var FußballBundesligaSpiel ="9x GruKw (100%)<br/>3x leBefKw (100%)<br/>1x FüKw (100%)<br/>1x GefKw (100%)<br/>2x Funkstreifenwagen (100%)";
var SpontanerAufstand ="7x Funkstreifenwagen (100%)</br>3x WaWe 10 (100%)</br>9x GruKw (100%)</br>4x leBefKw (100%)</br>1x FüKw (100%)</br>1x Polizeihubschrauber (100%)";
//KT
var Krankentransport ="1x Krankentransportwagen (100%)";
//THW Einsätze
var Erdrutsch ="1x GKW (100%)<br/>1x MTW-TZ (100%)<br/>1x LKW K9 (100%)<br/>1x BRmG R (100%)<br/>2x Funkstreifenwagen (100%)";
var GefahrgutLKWverunglückt ="1x GKW (100%)<br/>1x LKW K9 (100%)<br/>1x BRmG R (100%)<br/>3x Löschfahrzeuge/Tanklöschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Einsatzleitwagen 2 (40%)<br/>1x Rüstwagen (50%)<br/>1x GW-Gefahrgut (100%)<br/>1x GW-Messtechnik (30%)<br/>1x Dekon P (10%)<br/>2x Funkstreifenwagen (100%)";
var LKWinHauswand ="1x GKW (100%)<br/>1x MTW-TZ (100%)<br/>1x MzKW (100%)<br/>2x Löschfahrzeuge (100%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Drehleiter (70%)<br/>1x Feuerwehrkran (75%)<br/>";
var EingestürztesWohnhaus ="2x GKW (100%)<br/>2x LKW K9 (100%)<br/>2x BRmG R (100%)<br/>1x MTW-TZ (100%)<br/>1x MzKW (100%)<br/>3x Löschfahrzeuge (100%)<br/>1x Drehleiter (30%)<br/>1x Einsatzleitwagen 1 (100%)<br/>1x Feuerwehrkran (75%)<br/>1x Rüstwagen (100%)<br/>2x Funkstreifenwagen (100%)";

function addInfo(missionName) {
    var info = document.createElement('div');
    info.className = "alert alert-warning";
    var missionString = "";
    try{
    missionString += eval(missionName);
    }catch(err){
        missionString = "Fehler beim Laden der Fahrzeuge <br/>Bitte an Entwickler weitergeben: "+err;    }
    info.innerHTML = "<h3>Benötigte Fahrzeuge:</h3> "+missionString + "<br/>";

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
    if(shortendname === "Volkslauf"||shortendname === "Dorf/Stadtfest"||shortendname === "BrandsicherheitswachdienstimTheater"||shortendname === "BrandsicherheitswachebeiVolksfest"||shortendname === "AngemeldeteDemonstration"||shortendname === "AbsicherungMusikumzug"||shortendname === "AbsicherungRadrennen"||shortendname === "FeuerprobealarmanSchule"||shortendname === "EntschärfungvonWeltkriegsbombe"||shortendname === "Verkehrsüberwachung"||shortendname === "AbsicherungRockkonzert"||shortendname === "Schwertransport"||shortendname ==="HasentreffeninOstereistedt"||shortendname ==="FußballBundesligaRisikospiel"||shortendname ==="AngemeldeteDemonstrationGefahrenpotential"||shortendname ==="AbsicherungRockkonzertGefahrenpotential"){
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
