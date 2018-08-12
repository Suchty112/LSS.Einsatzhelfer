// ==UserScript==
// @name        Einsatzhelfer devversion
// @namespace   leitstellenspiel
// @description Zeigt in einem Info-Fenster die benötigten Fahrzeuge an
// @include     https://www.leitstellenspiel.de/missions/*
// @author      DrFussel u. KV Nürnberg/SanniHameln
// @version     1.6.0.1
// @grant       none
// ==/UserScript==

(function() {
    (function () {
        let missions : {
				"0": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 110 </span>',
				"1": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 170 </span>',
				"2": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 370 </span>',
				"3": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 340 </span>',
				"4": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 200 </span>',
				"5": '2x Löschfahrzeuge <br>1x Drehleiter (30%)<br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1400 </span>',
				"6": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 600 </span>',
				"7": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 210 </span>',
				"8": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 220 </span>',
				"9": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 250 </span>',
				"10": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 600 </span>',
				"11": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 240 </span>',
				"12": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 310 </span>',
				"13": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 980 </span>',
				"14": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1000 </span>',
				"15": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 1010 </span>',
				"16": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1100 </span>',
				"17": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 340 </span>',
				"18": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 700 </span>',
				"19": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 650 </span>',
				"20": '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 (90%)<br>evtl. Rettungstransportwagen<br><br><span class="badge">Credits: ~2500</span>',
				"21": '1x Löschfahrzeug <br> 1x Drehleiter  <br> 1x Einsatzleitwagen 1 <br><br><span class="badge">Credits: ~ 2400 </span>',
				"22": '3x Löschfahrzeuge <br> 1x Drehleiter  <br> 1x Einsatzleitwagen 1 (50%)<br><br><span class="badge">Credits: ~ 2700 </span>',
				"23": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 1200 </span>',
				"24": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 900 </span>',
				"25": '1x Löschfahrzeug <br>evtl. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (20%)<br><br><span class="badge">Credits: ~ 1000 </span>',
				"26": '3x Löschfahrzeuge  <br>1x Drehleiter (70%)<br>1x Rüstwagen (30%) <br>1x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2 (10%)<br><br><span class="badge">Credits: ~ 3510 </span>',
				"27": 'Deaktiviert von Sebastian',
				"28": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1400 </span>',
				"29": '3x Löschfahrzeuge <br> 1x Rüstwagen <br> 1x Einsatzleitwagen 1<br>1x GW-Atemschutz (20%)<br>1x Schlauchwagen (30%)<br><br><span class="badge">Credits: ~ 2470 </span>',
				"30": '1x Löschfahrzeug <br>1x GW-Öl (75%)<br><br><span class="badge">Credits: ~ 1900 </span>',
				"31": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				"32": '1x Löschfahrzeug <br>1x Drehleiter  <br>1x Einsatzleitwagen 1 <br><br><span class="badge">Credits: ~ 1310 </span>',
				"33": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1200 </span>',
				"34": '3x Löschfahrzeuge  <br>1x Drehleiter (70%)<br>1x Rüstwagen (30%) <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (20%)<br> 1x GW-Messtechnik (30%)<br><br><span class="badge">Credits: ~ 3710 </span>',
				"35": '4x Löschfahrzeuge <br>2x Rüstwagen (30%)<br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br> 1x Einsatzleitwagen 2 (30%)<br><br><span class="badge">Credits: ~ 3810 </span>',
				"36": '4x Löschfahrzeuge <br>2x Rüstwagen (30%)<br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x GW-Messtechnik (20%)<br>1x Dekon P (10%)<br><br><span class="badge">Credits: ~ 3310 </span>',
				"37": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 110 </span>',
				"38": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 110 </span>',
				"39": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 110 </span>',
				"40": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 110 </span>',
				"41": '6x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (90%)<br>2x Drehleiter <br>1x GW-Atemschutz<br>1x Schlauchwagen <br>1x GW-Messtechnik <br><br><span class="badge">Credits: ~  10010</span>',
				"42": '4x Löschfahrzeuge <br>2x Rüstwagen (30%)<br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (10%)<br>1x GW-Gefahrgut (70%)<br>1x GW-Messtechnik (80%)<br><br><span class="badge">Credits: ~ 3720 </span>',
				"43": '10x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>5x Rüstwagen <br>2x GW-Öl<br>min. 10x Rettungstransportwagen <br><br><span class="badge">Credits: ~ 10010 </span>',
				"44": '1x Rettungstransportwagen oder Krankentransportwagen ',
				"45": '1x Rettungstransportwagen oder Krankentransportwagen ',
				"46": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ',
				"47": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ',
				"48": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)',
				"49": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (20%)',
				"50": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (10%)',
				"51": '4x Löschfahrzeuge <br>1x Rüstwagen (30%)<br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (10%)<br><br><span class="badge">Credits: ~ 3620 </span>',
                "52": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 310 </span>',
				"53": '1x Löschfahrzeug <br>1x Rüstwagen <br><br><span class="badge">Credits: ~ 1410 </span>',
				"54": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (40%)',
				"55": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 870 </span>',
				"56": '1x Rettungstransportwagen ',
				"57": '1x Rettungstransportwagen ',
				"58": '1x Rettungstransportwagen ',
				"59": '20x Löschfahrzeuge <br>2x Drehleiter <br>5x Rüstwagen <br>3x GW-Atemschutz <br>3x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2 (80%)<br>4x GW-Messtechnik <br>4x GW-Gefahrgut <br>min. 10x Rettungstransportwagen<br><br><span class="badge">Credits: ~ 14010 </span>',
				"60": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"61": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"62": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"63": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"64": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"65": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"66": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"67": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"68": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"69": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"70": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"71": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 120 </span>',
				"72": '1x Löschfahrzeug <br>1x Einsatzleitwagen 1 <br>1x GW-Höhenrettung <br>1x Funkstreifenwagen <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"73": '3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 700 </span>',
				"74": '2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 500 </span>',
				"75": '7x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 10020 </span>',
				"76": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 800 </span>',
				"77": '1x Funkstreifenwagen <br>1x Löschfahrzeug <br>Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 500 </span>',
				"78": '1x Löschfahrzeug <br>1x Drehleiter (20%)<br><br><span class="badge">Credits: ~ 130 </span>',
				"79": '1x Löschfahrzeug <br>1x Einsatzleitwagen 1 <br>1x GW-Höhenrettung <br>1x Drehleiter (30%)<br>1x Rettungstransportwagen <br><br><span class="badge">Credits: ~ 1800 </span>',
				"80": '3x Löschfahrzeuge <br>1x Drehleiter <br>1x GW-Atemschutz <br>1x Einsatzleitwagen 1 <br>2x Funkstreifenwagen<br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (75%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"81": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 400 </span>',
				"82": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 400 </span>',
				"83": '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (40%)<br>1x Rüstwagen (50%)<br>1x GW-Gefahrgut<br>1x GW-Messtechnik (30%)<br>1x Dekon P (10%)<br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2500 </span>',
				"84": '4x Löschfahrzeug <br>1x Rüstwagen (50%)<br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (10%)<br>1x GW-Atemschutz (30%)<br><br>1x Schlauchwagen <br><br><span class="badge">Credits: ~ 1800 </span>',
				"85": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 200 </span>',
				"86": '7x Löschfahrzeug <br>2x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (30%)<br>1x Schlauchwagen (30%)<br>1x GW-Atemschutz (50%)<br><br><span class="badge">Credits: ~ 3000 </span>',
				"87": '3x Löschfahrzeug <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (10%)<br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 3000 </span>',
				"88": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 500 </span>',
				"89": '3x Löschfahrzeug <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 (75%)<br>1x GW-Öl (25%)<br>1x GW-Gefahrgut (10%)<br>2x Funkstreifenwagen<br>Notarzteinsatzfahrzeug (70%)<br><br><span class="badge">Credits: ~ 2500 </span>',
				"90": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 250 </span>',
				"91": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 370 </span>',
				"92": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (45%)',
				"93": '5x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (75%)<br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (30%)<br><br><span class="badge">Credits: ~ 3000 </span>',
				"94": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				"95": '6x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-Öl <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 4000 </span>',
				"96": '3x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 2900 </span>',
				"97": '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 (60%)<br>1x GW-Öl (80%)<br><br><span class="badge">Credits: ~ 2500 </span>',
				"98": '1x Funkstreifenwagen <br>1x Rettungstransportwagen <br><br><span class="badge">Credits: ~ 300 </span>',
				"99": '22x Löschfahrzeuge <br>1x GW-Atemschutz (45%)<br>1x GW-Öl (25%)<br>1x GW-Messtechnik <br>1x Drehleiter<br>2x Einsatzleitwagen 1 <br>2x Einsatzleitwagen 2 <br>6x Rüstwagen <br>10x Funkstreifenwagen<br>min. 10x Rettungstransportwagen <br>Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 17000 </span>',
				"100": '1x Löschfahrzeug <br>1x Funkstreifenwagen (50%)<br><br><span class="badge">Credits: ~ 900 </span>',
			    "101": '2x Löschfahrzeuge <br>1x Drehleiter (30%)<br>1x Funkstreifenwagen (50%)<br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				"102": '3x Löschfahrzeuge <br>1x Drehleiter (50%)<br>1x Einsatzleitwagen 1 (70%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"103": '3x Löschfahrzeuge <br>1x Drehleiter (50%)<br>1x Einsatzleitwagen 1 (70%)<br>1x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 2200 </span>',
				"104": '3x Löschfahrzeuge <br>1x Drehleiter (50%)<br>1x Einsatzleitwagen 1 (70%)<br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"105": '3x Löschfahrzeuge <br>1x Drehleiter (50%)<br>1x Einsatzleitwagen 1 (70%)<br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2200 </span>',
				"106": '5x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1800 </span>',
				"107": '5x Funkstreifenwagen <br>min. 1x Rettungstransportwagen <br>Notarzteinsatzfahrzeug (10%)<br><br><span class="badge">Credits: ~ 1800 </span>',
				"108": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug ',
				"109": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (95%)',
				"110": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)',
				"111": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 350 </span>',
				"112": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 850 </span>',
				"113": '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-Atemschutz (50%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				"114": '1x Löschfahrzeug <br>1x Drehleiter <br><br><span class="badge">Credits: ~ 900 </span>',
				"115": 'Deaktiviert durch Sebastian',
				"116": '4x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1600 </span>',
				"117": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"118": '3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 550 </span>',
				"119": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"120": '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x Feuerwehrkran (75%)<br>1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 2200 </span>',
				"121": '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x Feuerwehrkran (75%)<br>2x Funkstreifenwagen<br>1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 2500 </span>',
				"122": '1x Löschfahrzeug (10%)<br>1x Funkstreifenwagen <br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (70%)<br><br>span class="badge">Credits: ~ 600 </span>',
				"123": '1x Löschfahrzeug <br>1x Funkstreifenwagen <br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)<br><br><span class="badge">Credits: ~ 1100 </span>',
				"124": '1x Löschfahrzeug <br>1x Rüstwagen (50%)<br>min. 2x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1600 </span>',
				"125": '1x Löschfahrzeug <br>1x Rüstwagen (50%)<br>1x Funkstreifenwagen <br>min. 2x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1700 </span>',
				"126": '2x Löschfahrzeuge <br>1x Rüstwagen <br>min. 2x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"127": '2x Löschfahrzeuge <br>1x Rüstwagen <br>2x Funkstreifenwagen <br>min. 2x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 2200 </span>',
				"128": '1x Funkstreifenwagen <br>1x Löschfahrzeug (10%)<br><br><span class="badge">Credits: ~ 700 </span>',
				"129": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 800 </span>',
				"130": '2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 600 </span>',
				"131": '3x Löschfahrzeuge <br>1x Schlauchwagen (20%)<br> 1x Einsatzleitwagen 1 (50%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"132": '5x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Schlauchwagen <br><br><span class="badge">Credits: ~ 5000 </span>',
				"133": '5x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Schlauchwagen <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 5100 </span>',
				"134": '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Schlauchwagen (70%)<br><br><span class="badge">Credits: ~ 4000 </span>',
				"135": '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Schlauchwagen (70%)<br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 4100 </span>',
				"136": '10x Löschfahrzeuge <br>1x Drehleiter (10%)<br>1x Schlauchwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (30%)<br>1x GW-Atemschutz <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 8000 </span>',
				"137": '10x Löschfahrzeuge <br>1x Drehleiter (10%)<br>1x Schlauchwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (30%)<br>1x GW-Atemschutz <br>3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 8100 </span>',
				"138": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1500 </span>',
				"139": '4x Löschfahrzeuge <br>1x Schlauchwagen (20%)<br> 1x Einsatzleitwagen 1 (20%)<br><br><span class="badge">Credits: ~ 3500 </span>',
				"140": '2x Löschfahrzeuge <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1600 </span>',
				"141": '4x Löschfahrzeuge <br>1x Schlauchwagen (20%)<br> 1x Einsatzleitwagen 1 (20%)<br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 3600 </span>',
				"142": '2x Löschfahrzeuge <br>1x Drehleiter (30%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				"143": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				"144": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				"145": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"146": '5x Löschfahrzeuge <br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x GW-Atemschutz (30%)<br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 4200 </span>',
				"147": '1x Krankentransportwagen ',
				"148": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"149": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"150": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"151": '3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1200 </span>',
				"152": '2x Funkstreifenwagen<br>1x Rettungstransportwagen<br><br><span class="badge">Credits:~ 750</span>',
				"153": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"154": '1x Funkstreifenwagen<br>1x Rettungstransportwagen<br><br><span class="badge">Credits: ~ 100 </span>',
				"155": '1x Rettungstransportwagen ',
				"156": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)',
				"157": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (60%)',
				"158": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 370 </span>',
				"159": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 120 </span>',
				"160": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 150 </span>',
				"161": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 900 </span>',
				"162": '1x Löschfahrzeug <br>1x Funkstreifenwagen Nur bei Patient<br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1400 </span>',
				"163": '1x Löschfahrzeug <br>1x Drehleiter (10%)<br>1x Feuerwehrkran (10%)<br><br><span class="badge">Credits: ~ 1400 </span>',
				"164": '1x Rettungstransportwagen ',
				"165": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)',
				"166": '1x Löschfahrzeug <br>1x Einsatzleitwagen 1 <br>1x GW-Höhenrettung (40%)<br>1x Drehleiter (40%)<br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1200 </span>',
				"167": '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-Höhenrettung (20%)<br>1x Drehleiter (50%)<br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1400 </span>',
				"168": '1x Löschfahrzeug <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 600</span>',
				"169": '1x Löschfahrzeug <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 600</span>',
				"170": '1x Löschfahrzeug <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 600</span>',
				"171": '1x Löschfahrzeug <br>1x Schlauchwagen <br>1x Einsatzleitwagen 2 <br>1x GW-Öl <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 4000 </span>',
				"172": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 600 </span>',
				"173": '1x Löschfahrzeug <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 700</span>',
				"174": '1x GKW <br>1x MTW-TZ <br>1x LKW K9 <br>1x BRmG R <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1020 </span>',
				"175": '1x GKW <br>1x MTW-TZ <br>1x LKW K9 <br>1x BRmG R <br><br><span class="badge">Credits: ~ 900 </span>',
				"176": '1x GKW <br>1x MTW-TZ <br>1x MzKW <br>2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Drehleiter (70%)<br>1x Feuerwehrkran (75%)<br><br><span class="badge">Credits: ~ 2100 </span>',
				"177": '2x GKW <br>2x LKW K9 <br>2x BRmG R <br>1x MTW-TZ <br>1x MzKW <br>3x Löschfahrzeuge <br>1x Drehleiter (30%)<br>1x Einsatzleitwagen 1 <br>1x Feuerwehrkran (75%)<br>1x Rüstwagen <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 4600 </span>',
				"178": '1x GKW <br>1x LKW K9 <br>1x BRmG R <br>3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (40%)<br>1x Rüstwagen (50%)<br>1x GW-Gefahrgut <br>1x GW-Messtechnik (30%)<br>1x Dekon P (10%)<br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2900 </span>',
				"179": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ',
				"180": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug/Rettungshubschrauber ',
				"181": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug/Rettungshubschrauber ',
				"182": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (50%)',
				"183": '1x Rettungstransportwagen ',
				"184": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (40%)',
				"185": '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)',
				"186": '5x Löschfahrzeuge <br>1x Rüstwagen <br>2x Drehleiter <br>1x Schlauchwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x GW-Atemschutz <br>1x GW-Messtechnik <br>1x Feuerwehrkran (15%)<br>2x Funkstreifenwagen <br>1x GKW <br>1x MTW-TZ <br>1x LKW K9 <br>1x BRmG R <br>1x Anh DLE <br>Notarzteinsatzfahrzeug (20%)<br><br><span class="badge">Credits: ~ 5630 </span>',
				"187": '2x Löschfahrzeuge <br>1x Drehleiter (50%)<br>1x Einsatzleitwagen 1 <br>1x GW-Messtechnik (20%)<br><br><span class="badge">Credits: ~ 2230 </span>',
				"188": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				"189": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 80 </span>',
				"190": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"191": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 310 </span>',
				"192": '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br><br><span class="badge">Credits: ~ 1900</span>',
				"193": '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2000 </span>',
				"194": '1x Löschfahrzeug <br>1x Funkstreifenwagen <br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug <br><br><span class="badge">Credits: ~ 1000 </span>',
				"195": '3x GruKw <br>1x leBefKw <br><br><span class="badge">Credits: ~ 1000 </span>',
				"196": '3x GruKw <br>1x leBefKw <br><br><span class="badge">Credits: ~ 1000 </span>',
				"197": '3x GruKw <br>1x leBefKw <br><br><span class="badge">Credits: ~ 2000 </span>',
				"198": '3x GruKw <br>1x leBefKw <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2500 </span>',
				"199": '3x GruKw <br>1x leBefKw <br><br><span class="badge">Credits: ~ 750 </span>',
				"200": '6x GruKw <br>2x leBefKw <br>1x GefKw <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 5500 </span>',
				"201": '9x GruKw <br>3x leBefKw <br>1x FüKw <br>1x GefKw <br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 9000 </span>',
				"202": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 300 </span>',
				"203": '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 610 </span>',
				"204": '6x Löschfahrzeuge <br>1x Drehleiter (50%)<br>1x Einsatzleitwagen 1 <br>1x GW-Atemschutz (25%)<br>1x Schlauchwagen (60%)<br><br><span class="badge">Credits: ~ 3500 </span>',
				"205": '7x Löschfahrzeuge <br>2x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x GW-Atemschutz <br>1x GW-L2-Wasser <br>' +'3x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (33%)<br><br><span class="badge">Credits: ~ 5100 </span>',
				"206": '15x Löschfahrzeuge <br>2x Schlauchwagen (90%)<br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>2x GW-Atemschutz (70%)<br>4x Drehleiter <br>1x Feuerwehrkran (15%)<br>3x Funkstreifenwagen <br>2x GKW <br>1x MTW-TZ <br>2x BRmG R <br>2x LKW K9 <br>min. 2x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 10020 </span>',
				"207": '20x Löschfahrzeuge <br>2x Drehleiter <br>5x Rüstwagen <br>2x GW-Atemschutz <br>3x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>4x GW-Messtechnik <br>4x GW-Gefahrgut <br>1x Dekon P <br>2x GKW <br>1x MTW-TZ <br>2x BRmG R <br>2x LKW K9 <br>3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 16010 </span>',
				"208": '8x Löschfahrzeuge <br>2x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x Schlauchwagen (20%)<br>1x GW-Atemschutz <br>1x GW-Öl (50%)<br>2x GW-Messtechnik <br>1x GW-Gefahrgut <br>1x Dekon P <br>2x Funkstreifenwagen<br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (15%)<br><br><span class="badge">Credits: ~ 4000 </span>',
				"209": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				"210": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (95%)',
				"211": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)',
				"212": '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)',
				"213": '20x Löschfahrzeuge <br>2x Rüstwagen <br>2x Schlauchwagen <br>4x Einsatzleitwagen 1 <br>2x Einsatzleitwagen 2 <br>2x GW-Messtechnik <br>2x GW-Atemschutz <br>2x Drehleiter <br>1x Dekon P (10%)<br>1x Feuerwehrkran (40 %)<br>4x Funkstreifenwagen <br>1x GKW <br>1x MTW-TZ <br>1x BRmG R <br>1x LKW K9 <br>1x MzKW <br>1x Anh DLE <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (40%)<br><br><span class="badge">Credits: ~ 11200 </span>',
				"214": '6x Löschfahrzeuge <br>2x Drehleiter <br>2x Rüstwagen (30%)<br>1x GW-Atemschutz <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (30%)<br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (40%)<br><br><span class="badge">Credits: ~ 3000 </span>',
				"215": '7x Löschfahrzeuge <br>2x GW-Atemschutz <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x GW-Messtechnik <br>1x GW-Gefahrgut <br>4x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (60%)<br><br><span class="badge">Credits: ~ 4000 </span>',
				"216": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 500 </span>',
				"217": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 500 </span>',
				"218": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 500 </span>',
				"219": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 500 </span>',
				"220": '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 500 </span>',
				"221": '30x Löschfahrzeuge <br>4x GW-Atemschutz <br>1x GW-Öl <br>2x GW-L2-Wasser <br>3x Drehleiter <br>6x Einsatzleitwagen 1 <br>3x Einsatzleitwagen 2 <br>6x Rüstwagen <br>4x FwK <br>2x BRmG R <br>2x LKW K9 <br>1x MTW-TZ <br>1x GKW <br>1x MzKW <br>12x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 17000 </span>',
    			"222": '20x Löschfahrzeuge <br>2x GW-Atemschutz <br>1x GW-Öl <br>1x GW-L2-Wasser <br>2x Drehleiter <br>3x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>3x Rüstwagen <br>2x FwK <br>1x BRmG R <br>1x LKW K9 <br>1x MTW-TZ <br> 6x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 14000 </span>',
				"223": '<h4>SICHERHEITSWACHE</h4>3x Löschfahrzeuge <br>1x Funkstreifenwagen ',
				"224": '<h4>SICHERHEITSWACHE</h4>1x Löschfahrzeug <br>1x Rettungstransportwagen ',
				"225": '<h4>SICHERHEITSWACHE</h4>3x Löschfahrzeuge <br>3x Rettungstransportwagen <br>1x GW-San ',
				"226": '<h4>VERKEHRSSICHERUNG</h4>3x Rettungstransportwagen <br>1x GW-San ',
				"227": '<h4>ABSICHERUNG</h4>3x Funkstreifenwagen<br>6x GruKw<br>1x FüKw<br>2x leBefKw<br>1x Rettungstransportwagen',
				"228": '<h4>VERKEHRSSICHERUNG</h4>2x Funkstreifenwagen ',
				"229": '<h4>VERKEHRSSICHERUNG</h4>2x Rettungstransportwagen <br>2x Funkstreifenwagen ',
				"230": '<h4>SICHERHEITSWACHE</h4>1x Löschfahrzeug ',
				"231": '10x Funkstreifenwagen <br>1x Polizeihubschrauber <br><br><span class="badge">Credits: ~ 4000 </span>',
				"232": '2x Funkstreifenwagen <br>1x Polizeihubschrauber <br><br><span class="badge">Credits: ~ 3500 </span>',
				"233": '2x Funkstreifenwagen <br>1x Polizeihubschrauber <br>1x Löschfahrzeug<br>1x Rettungstransportwagen <br><br><span class="badge">Credits: ~ 4500 </span>',
				"234": '<h4>BOMBENFUND</h4>10x Löschfahrzeuge <br>5x Funkstreifenwagen <br>1x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 ',
				"235": '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-Höhenrettung <br>1x Drehleiter (20%)<br>1x Funkstreifenwagen<br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				"236": '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-Höhenrettung <br>1x Drehleiter (20%)<br>1x Funkstreifenwagen<br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug/Rettungshubschrauber <br><br><span class="badge">Credits: ~ 2000 </span>',
				"237": '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 1700 </span>',
				"238": '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (20%)<br><br><span class="badge">Credits: ~ 2000 </span>',
				"239": '5x Löschfahrzeuge <br>2x Rüstwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x GW-Öl <br>1x Feuerwehrkran <br>4x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (40%)<br><br><span class="badge">Credits: ~ 3000 </span>',
				"240": '3x Löschfahrzeuge <br>1x Dekon P (30%)<br>1x GW-Messtechnik (30%)<br>1x Einsatzleitwagen 1<br>1x GW-Gefahrgut (30%)<br>1x Funkstreifenwagen <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (40%)<br><br><span class="badge">Credits: ~ 2500 </span>',
				"241": '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 200 </span>',
				"242": '2x Löschfahrzeuge <br>1x GW-Messtechnik (50%)<br>3x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (10%)<br><br><span class="badge">Credits: ~ 2100 </span>',
				"243": '1x Löschfahrzeug<br>1-4x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1200 </span>',
				"244": '1x Boot <br><br><span class="badge">Credits: ~ 1000 </span>',
				"245": '1x Boot <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)<br><br><span class="badge">Credits: ~ 1200 </span>',
				"246": '1x Boot <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)<br>3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br><br><span class="badge">Credits: ~ 1400 </span>',
				"247": '2x Boote <br>2x GW-Taucher <br>2x GW-Wasserrettung<br>3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)<br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1400 </span>',
    			"248": '3x Boote <br>3x GW-Taucher <br>3x GW-Wasserrettung<br>5x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (30%)<br>3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2000 </span>',
				"249": '3x Boote <br>3x GW-Taucher <br>3x GW-Wasserrettung<br>5x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (30%)<br>3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 3000 </span>',
				"250": '1x Boot <br><br><span class="badge">Credits: ~ 1000 </span>',
				"251": '1x Boot <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)<br><br><span class="badge">Credits: ~ 1200 </span>',
				252: '1x Boot <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)<br>' +
				'3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br><br><span class="badge">Credits: ~ 1400 </span>',
				253: '2x Boote <br>2x GW-Taucher <br>2x GW-Wasserrettung<br>3x Löschfahrzeuge <br>' +
				'1x Einsatzleitwagen 1 <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)<br>' +
				'2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1400 </span>',
				254: '3x Boote <br>3x GW-Taucher <br>3x GW-Wasserrettung<br>5x Löschfahrzeuge <br>' +
				'1x Einsatzleitwagen 1 <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (30%)<br>' +
				'3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2000 </span>',
				255: '3x Boote <br>3x GW-Taucher <br>3x GW-Wasserrettung<br>5x Löschfahrzeuge <br>' +
				'1x Einsatzleitwagen 1 <br>min. 1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (30%)<br>' +
				'3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 3000 </span>',
				256: '6x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>' +
				'6x GW-Taucher <br>6x Boote <br>5x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 10010 </span>',
				257: '<h4>VERKEHRSSICHERUNG</h4>2x Funkstreifenwagen ',
				258: '4x Löschfahrzeuge <br>1x Drehleiter <br>2x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x GW-Öl ' +
				'<br>1x Feuerwehrkran (75%)<br>3x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 2800 </span>',
				259: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 370 </span>',
				260: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 220 </span>',
				261: '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1000 </span>',
				262: '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 (90%)<br><br><span class="badge">Credits: ~ 2500 </span>',
				263: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 900 </span>',
				264: '2x Löschfahrzeuge <br>1x Drehleiter (30%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				265: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				266: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				267: '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				268: '5x Löschfahrzeuge <br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>' +
				'1x GW-Atemschutz (30%)<br>2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 4200 </span>',
				269: '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 200 </span>',
				270: '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 200 </span>',
				271: '10x Löschfahrzeuge <br>2x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2<br>1x Drehleiter<br>1x Rüstwagen<br>1x Dekon P<br>' +
				'1x GW-Gefahrgut<br>1x GW-Messtechnik<br>3x Funkstreifenwagen<br>1x Gerätekraftwagen<br><br><span class="badge">Credits: ~ 6050 </span>',
				272: '1x Boot <br>2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-ÖL <br>' +
				'1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1600 </span>',
				273: '1x Boot <br>2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x GW-ÖL <br>' +
				'1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1600 </span>',
				274: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)',
				275: '<h4>ABSICHERUNG</h4>4x Funkstreifenwagen <br>9x GruKw <br>1x FüKw <br>' +
				'3x leBefKw <br>2x Löschfahrzeuge <br>4x Rettungstransportwagen ',
				276: '<h4>VERKEHRSSICHERUNG</h4>4x Funkstreifenwagen ',
				277: '1x Löschfahrzeug <br>1x Rettungstransportwagen <br><br><span class="badge">Credits: ~ 350 </span>',
				278: '2x Löschfahrzeuge <br>1x Drehleiter (70%)<br> 1x Einsatzleitwagen 1 <br>1x Feuerwehrkran (70%)<br>1x Gerätekraftwagen <br>' +
				'1x MTW-TZ <br>1x MzKW <br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br>' +
				'<span class="badge">Credits: ~ 2500 </span>',
				279: '2x Löschfahrzeuge <br>1x Drehleiter (70%)<br> 1x Einsatzleitwagen 1 <br>1x Feuerwehrkran (70%)<br>1x Gerätekraftwagen <br>' +
				'1x MTW-TZ <br>1x MzKW <br>2x Funkstreifenwagen <br>min. 1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)' +
				'<br><br><span class="badge">Credits: ~ 2800 </span>',
				280: '3x Löschfahrzeuge <br>1x Rüstwagen <br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br><br><span class="badge">' +
				'Credits: ~ 1500 </span>',
				281: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug /Rettungshubschrauber (50%)',
				282: '2x Löschfahrzeuge <br>1x Rüstwagen (20%)<br>1x Einsatzleitwagen 1 (20%)<br><br><span class="badge">Credits: ~ 1000 </span>',
				283: '10x Löschfahrzeuge <br>1x Einsatzleitwagen 2 <br>3x Einsatzleitwagen 1 <br>2x Drehleiter <br>2x Rüstwagen (30%)<br>' +
				'1x GW-A <br>3x Funkstreifenwagen <br>min. 5x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (40%)<br><br><span class="badge">' +
				'Credits: ~ 4000 </span>',
				284: '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 100 </span>',
				285: '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 150 </span>',
				286: '2x Funkstreifenwagen <br>1x GKW <br>1x MTW-TZ <br>1x BRmG R <br>1x LKW K9 <br><br>' +
				'<span class="badge">Credits: ~ 1020 </span>',
				287: '1x Rettungstransportwagen <br>1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 300 </span>',
				288: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 110 </span>',
				289: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 400 </span>',
				290: '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 800 </span>',
				291: '<h4>ABSICHERUNG</h4>4x Funkstreifenwagen <br>9x GruKw <br>1x FüKw <br>' +
				'3x leBefKw <br>2x Löschfahrzeuge <br>4x Rettungstransportwagen ',
				292: '1x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 300 </span>',
				293: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (50%)',
				294: '<h4>ABSICHERUNG</h4>5x Funkstreifenwagen <br>27x GruKw <br>3x FüKw <br>' +
				'9x leBefKw <br>2x GefKw <br>2x Löschfahrzeuge <br>4x Rettungstransportwagen ',
				295: '6x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1100 </span>',
				296: '3x Löschfahrzeuge <br> 1x Einsatzleitwagen 1 <br>1x Rüstwagen (30%)<br>' +
				'1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (40%)<br><br><span class="badge">Credits: ~ 2020 </span>',
				297: '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)',
				298: '1x Boot <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%) / ' +
				'evtl. auch 1x RTH (50%)<br>1x Löschfahrzeug (20%)<br>1x GW-Taucher (10%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				299: '5x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Drehleiter (75%)<br>' +
				'1x GW-Atemschutz <br>1x Schlauchwagen (50%)<br><br><span class="badge">Credits: ~ 2500 </span>',
				300: '2x Löschfahrzeuge <br>1x GW-Höhenrettung (50%)<br>1x Funkstreifenwagen ' +
				'<br>1x Einsatzleitwagen 1 <br>1x Drehleiter (75%)<br>1x Rettungstransportwagen <br>' +
				'1x Notarzteinsatzfahrzeug (90%)/1x Rettungshubschrauber (50%)<br><br><span class="badge">Credits: ~ 1500 </span>',
				301: '2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 500 </span>',
				302: '8x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x Rüstwagen <br>1x Drehleiter (50%)<br>' +
				'1x Schlauchwagen (80%)<br>1x GW-Öl (25%)<br>3x Funkstreifenwagen <br>min. 1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)' +
				'<br><br><span class="badge">Credits: ~ 6000 </span>',
				303: '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 (30%)<br>1x Drehleiter (20%)<br><br><span class="badge">Credits: ~ 700 </span>',
				304: '<h4>ABSICHERUNG</h4>6x Funkstreifenwagen <br>6x GruKw <br>3x leBefKw ' +
				'<br>1x FüKw <br>1x Löschfahrzeug <br>3x WaWe 10 <br> 3x Rettungstransportwagen ',
				305: '<h4>ABSICHERUNG</h4>5x Funkstreifenwagen <br>27x GruKw <br>3x FüKw <br>' +
				'10x leBefKw <br>2x GefKw <br>2x Löschfahrzeuge <br>4x Rettungstransportwagen <br>3x WaWe 10 ',
				306: '<h4>ABSICHERUNG</h4>8x Funkstreifenwagen <br>2x WaWe 10 <br>4x leBefKw <br>' +
				'9x GruKw <br>1x FüKw <br>2x Löschfahrzeuge <br>4x Rettungstransportwagen ',
				307: '7x Funkstreifenwagen <br>3x WaWe 10 <br>9x GruKw <br>4x leBefKw ' +
				'<br>1x FüKw <br>1x Polizeihubschrauber <br><br><span class="badge">Credits: ~ 6000 </span>',
				308: '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 1000 </span>',
				309: '1x Boot <br>1x GW-Taucher <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)' +
				'<br><br><span class="badge">Credits: ~ 1000 </span>',
				"310: '1x Boot <br>1x GW-Taucher <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (90%)' +
				'<br><br><span class="badge">Credits: ~ 1000 </span>',
				"311: '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>1x Rettungstransportwagen ' +
				'<br>1x Notarzteinsatzfahrzeug <br><br><span class="badge">Credits: ~ 1100 </span>',
				"312: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ',
				"313: '2x Löschfahrzeuge <br>1x Drehleiter <br>1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ' +
				'<br><br><span class="badge">Credits: ~ 900 </span>',
				"314: '3x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Drehleiter <br>1x GW-Höhenrettung <br>' +
				'1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug <br><br><span class="badge">Credits: ~ 1900 </span>',
				"315: '8x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 (80%)<br>1x Drehleiter <br>' +
				'1x Dekon-P (50%)<br>1x GW-Atemschutz (50%)<br>1x GW-Messtechnik <br>2x GW-Gefahrgut <br>min. 1x ' +
				'Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (60%)<br><br><span class="badge">Credits: ~ 4400 </span>',
				"316: '12x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x Dekon-P <br>1x GW-Atemschutz ' +
				'<br>2x GW-Messtechnik <br>1x GW-Gefahrgut <br>2x Rüstwagen <br>4x Funkstreifenwagen <br>' +
				'evtl. 1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (60%)<br><br><span class="badge">Credits: ~ 5400 </span>',
				"317: '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br/>1x Rettungstransportwagen <br/>' +
				'1x Notarzteinsatzfahrzeug <br><br><span class="badge">Credits: ~ 1500 </span>',
				"318: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 200 </span>',
				"319: '1x Löschfahrzeug <br>1x Drehleiter (30%)<br>1x Rüstwagen (40%)<br>1x Rettungstransportwagen <br>' +
				'1x Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 1000 </span>',
				"320: '20x Löschfahrzeuge <br>5x Drehleiter <br>3x GW-Atemschutz <br>3x GW-Messtechnik <br>' +
				'2x GW-Gefahrgut <br>1x GW-Höhenrettung <br>6x Einsatzleitwagen 1 <br>4x Einsatzleitwagen 2 <br>' +
				'2x Schlauchwagen <br>2x Rüstwagen <br>6x Funkstreifenwagen <br>1x LKW K 9 <br>1x BRmG R <br>' +
				'1x MzKW <br>1x GKW <br>1x MTW-TZ <br>min. 15x Rettungstransportwagen <br>min. 1x Notarzteinsatzfahrzeug (50%)' +
				'<br><br><span class="badge">Credits: ~ 11500 </span>',
				"321: '3x Löschfahrzeuge <br>1x Drehleiter <br>1x GW-Atemschutz <br>1x Einsatzleitwagen 1 <br>2x ' +
				'Funkstreifenwagen <br><br><span class="badge">Credits: ~ 1800 </span>',
				"322: '<h4>VERKEHRSSICHERUNG</h4>4x Funkstreifenwagen ',
				"323: '2x Löschfahrzeuge <br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x Rüstwagen (50%)<br>1x Funkstreifenwagen ' +
				'<br><br><span class="badge">Credits: ~ 1500 </span>',
				"324: '15x Löschfahrzeuge <br>3x Drehleiter <br>2x GW-Atemschutz <br>2x GW-Messtechnik <br>1x GW-Gefahrgut <br>' +
				'1x Schlauchwagen <br>1x FwK <br>4x Einsatzleitwagen 1 <br>2x Einsatzleitwagen 2 <br>1x Rüstwagen ' +
				'<br>2x LKW K 9 <br>2x BRmG R <br>2x MzKW <br>2x GKW <br>2x MTW-TZ <br>5x Funkstreifenwagen ' +
				'<br>Rettungstransportwagen<br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 10000 </span>',
				"325: '<h4>SICHERHEITSWACHE</h4>18x GruKw <br>6x leBefKw <br>2x FüKw <br>10x Funkstreifenwagen <br>2x Rettungstransportwagen ' +
				'<br>1x Polizeihubschrauber <br>2x WaWe 10 ',
				"326: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)',
				"327: '6x Löschfahrzeuge <br>2x Drehleiter <br>2x GW-Atemschutz <br>1x GW-Messtechnik <br>1x GW-Öl <br>' +
				'1x Einsatzleitwagen 1 <br>1x Funkstreifenwagen <br>Rettungstransportwagen<br>Notarzteinsatzfahrzeug (25%)' +
				'<br><br><span class="badge">Credits: ~ 3500 </span>',
				"328: '2x Löschfahrzeuge <br>1x Flugfeldlöschfahrzeug <br>1x Rettungstreppe <br><br><span class="badge">Credits: ~ 1200 </span>',
				"329: '2x Löschfahrzeuge <br><br><span class="badge">Credits: ~ 700 </span>',
				"330: '1x Löschfahrzeug <br>1x Einsatzleitwagen 1 <br>1x Flugfeldlöschfahrzeug <br>1x Rettungstreppe ' +
				'<br><br><span class="badge">Credits: ~ 3500 </span>',
				"331: '1x Löschfahrzeug <br>2x Rüstwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>2x Flugfeldlöschfahrzeuge <br>' +
				'1x Rettungstreppe <br>Rettungstransportwagen<br><br><span class="badge">Credits: ~ 3000 </span>',
				"332: '10x Löschfahrzeuge <br>3x Rüstwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>4x Flugfeldlöschfahrzeuge' +
				'<br>1x Rettungstreppe <br>Rettungstransportwagen <br>Notarzteinsatzfahrzeug (20%)<br><br><span class="badge">Credits: ~ 10000 </span>',
				"333: '10x Löschfahrzeuge <br>3x Rüstwagen <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>4x Flugfeldlöschfahrzeuge' +
				'<br>1x Rettungstreppe <br>Rettungstransportwagen <br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 10000 </span>',
				"334: '8x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x Rüstwagen <br>1x Drehleiter (50%)<br>1x ' +
				'Schlauchwagen (80%)<br>min. 1x Rettungstransportwagen <br>Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 6000 </span>',
				"335: '8x Löschfahrzeuge <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>1x Rüstwagen <br>1x Drehleiter (50%)<br>1x ' +
				'Schlauchwagen (80%)<br>min. 1x Rettungstransportwagen <br>Notarzteinsatzfahrzeug (80%)<br><br><span class="badge">Credits: ~ 6000 </span>',
				"336: '1x Löschfahrzeug <br>2x Flugfeldlöschfahrzeuge <br><br><span class="badge">Credits: ~ 500 </span>',
				"337: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 370 </span>',
				"338: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 340 </span>',
				"339: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ',
				340: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug ',
				341: '1x Rettungstransportwagen <br>1x Notarzteinsatzfahrzeug (80%)',
				342: '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>4x Flugfeldlöschfahrzeuge <br><br>' +
				'<span class="badge">Credits: ~ 2500 </span>',
				343: '2x Löschfahrzeuge <br>1x Rüstwagen <br>1x Einsatzleitwagen 1 <br>4x Flugfeldlöschfahrzeuge <br><br>' +
				'<span class="badge">Credits: ~ 2500 </span>',
				344: '4x Löschfahrzeuge <br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x Rüstwagen <br><br><span class="badge">' +
				'Credits: ~ 1010 </span>',
				345: '2x Löschfahrzeuge <br>1x Einsatzleitwagen 1 <br>1x Rüstwagen <br>1x Drehleiter <br>1x GW-Höhenrettung <br>' +
				'1x Funkstreifenwagen <br>1x Rettungstransportwagen <br><br><span class="badge">Credits: ~ 1200 </span>',
				346: '2x Löschfahrzeuge <br>1x Drehleiter <br>1x Einsatzleitwagen 1 <br>1x Gerätekraftwagen <br>1x MzKW <br>1x MTW-TZ ' +
				'<br>1x Rettungstransportwagen <br>3x Funkstreifenwagen <br>1x leBefKw <br>3x GruKw ',
				347: '6x Löschfahrzeuge <br>1x Drehleiter <br>2x Einsatzleitwagen 1 <br>1x Einsatzleitwagen 2 <br>2x Rüstwagen <br>' +
				'1x GW-Öl <br>1x GW-Höhenrettung (50%)<br>1x Feuerwehrkran <br>3x Funkstreifenwagen <br>Rettungstransportwagen <br>' +
				'Notarzteinsatzfahrzeug (75%)<br><br><span class="badge">Credits: ~ 6000 </span>',
				348: '20x Löschfahrzeuge <br>2x Drehleitern <br>4x Rüstwagen <br>2x GW-Atemschutz <br>1x GW-Messtechnik <br>' +
				'1x GW-Öl <br>2x Schlauchwagen <br>4x Einsatzleitwagen 1 <br>2x Einsatzleitwagen 2 <br>3x Funkstreifenwagen <br>' +
				'1x LKW K9 <br>1x BRmG R <br>1x MzKW <br>1x GKW <br>1x MTW-TZ <br>Rettungstransportwagen <br>' +
				'Notarzteinsatzfahrzeug (25%)/Rettungshubschrauber (10%)<br><br><span class="badge">Credits: ~ 10000 </span>',
				349: '1x Löschfahrzeug <br><br><span class="badge">Credits: ~ 100 </span>',
				350: '40x Löschfahrzeuge <br>6x Flugfeldlöschfahrzeuge <br>8x Drehleitern <br>6x Rüstwagen <br>3x GW-Messtechnik <br>' +
				'2x GW-Atemschutz <br>4x Schlauchwagen <br>6x Einsatzleitwagen 1 <br>2x Einsatzleitwagen 2 <br>10x Funkstreifenwagen ' +
				'<br>2x Polizeihubschrauber <br>2x LKW K9 <br>2x BRmG-R <br>2x Gerätekraftwagen <br>2x MTW-TZ <br>2x MzKW <br>' +
				'min. 10x ,max. 20x Rettungstransportwagen <br>Notarzteinsatzfahrzeug (50%)<br><br><span class="badge">Credits: ~ 17000 </span>',
				351: '6x Löschfahrzeuge <br>2x Drehleitern <br>2x Einsatzleitwagen 1 <br>1x GW-Atemschutz <br>1x GW-Messtechnik <br>' +
				'1x Einsatzleitwagen 2 <br>2x Funkstreifenwagen <br>max. 10x Rettungstransportwagen<br><br><span class="badge">Credits: ~ 4000 </span>',
				352: '12x Löschfahrzeuge<br>3x Drehleitern<br>1x GW-Atemschutz<br>1x GW-Messtechnik<br>1x Rüstwagen<br>1x Schlauchwagen<br>3x Einsatzleitwagen 1' +
				'<br>1x Einsatzleitwagen 2<br>4x Funkstreifenwagen<br>min. 1x Rettungstransportwagen, max. 10x Rettungstransportwagen<br>NEF (50%) / RTH (25%)' +
				'<br><br><span class="badge">Credits: ~ 7500 </span>',
				353: '<h4>SICHERHEITSWACHE</h4>3x GruKw <br>1x leBefKw <br>3x Funkstreifenwagen ',
				354: '1x Rettungstransportwagen <br>Notarzteinsatzfahrzeug (75%) / Rettungstransporthubschrauber (50%)',
				355: '4x MEK-Fahrzeuge <br>4x Funkstreifenwagen <br>1x FüKw <br><br><span class="badge">Credits: ~ 1700 </span>',
				356: '4x SEK-Fahrzeuge <br>4x Funkstreifenwagen <br>1x FüKw <br>Rettungstransportwagen<br><br><span class="badge">' +
				'Credits: ~ 1700 </span>',
				357: '2x Funkstreifenwagen <br><br><span class="badge">Credits: ~ 500 </span>',
				358: '8x Funkstreifenwagen <br>4x SEK-Fahrzeuge <br>1x FüKw <br>1x Polizeihubschrauber <br>Rettungstransportwagen' +
				'<br><br><span class="badge">Credits: ~ 4000 </span>',
				359: '5x Funkstreifenwagen <br>4x MEK-Fahrzeuge <br>6x GruKw <br>2x leBefKw <br>1x GefKw <br>1x FüKw <br>' +
				'1x Polizeihubschrauber <br><br><span class="badge">Credits: ~ 9000 </span>',
				360: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 500 </span>',
				361: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 500 </span>',
				362: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 500 </span>',
				363: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 500 </span>',
				364: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 500 </span>',
				365: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 500 </span>',
				366: '2x Funkstreifenwagen<br><br><span class="badge">Credits: ~ 550 </span>',
				367: '6x Funkstreifenwagen<br>4x SEK-Fahrzeuge<br>1x FüKw<br><br><span class="badge">Credits: ~ 2800 </span>',
				368: '15x Löschfahrzeuge<br>3x Drehleitern<br>2x Schlauchwagen<br>2x GW-Atemschutz<br>4x Rüstwagen<br>3x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2' +
				'<br>1x GW-Messtechnik<br>4x Funkstreifenwagen<br>1x Gerätekraftwagen<br>1x MzKW<br>1x MTW-TZ<br>1x LKW K 9<br>1x BRmG R<br>1x Anhänger DLE<br>' +
				'max. 5x Rettungstransportwagen<br>NEF (40%)/RTH (20%)<br><br><span class="badge">Credits: ~ 7500 </span>',
				369: '2x Löschfahrzeuge<br>1x Drehleiter (10%)<br>1x Rüstwagen (30%)<br>1x GW-Messtechnik (50%)<br>1x Einsatzleitwagen 1<br>1x Funkstreifenwagen<br>' +
				'max. 2x Rettungstransportwagen<br>NEF (40%)/RTH (20%)<br><br><span class="badge">Credits: ~ 1800 </span>',
				370: '4x Funkstreifenwagen<br><br><span class="badge">Credits: ~ 1000 </span>',
				371: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 300 </span>',
				372: '1x Funkstreifenwagen<br><br><span class="badge">Credits: ~ 300 </span>',
				373: '1x Rettungstransportwagen',
				374: '1x Rettungstransportwagen',
				375: '1x Löschfahrzeug<br><br><span class="badge">Credits: ~ 300 </span>',
				376: '2x Funkstreifenwagen<br><br><span class="badge">Credits: ~ 600 </span>',
				377: '1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (30%)',
				378: '<h4>SICHERHEITSWACHE</h4>4x MEK-Fahrzeuge<br>1x FüKw',
				379: '3x Löschfahrzeuge<br>1x Einsatzleitwagen 1<br>1x Rüstwagen<br>1x Feuerwehrkran (20%)<br>1x Funkstreifenwagen<br><br><span class="badge">' +
				'Credits: ~ 900 </span>',
				380: '3x Löschfahrzeuge<br>1x Einsatzleitwagen 1<br>1x Rüstwagen<br>1x Feuerwehrkran (20%)<br>1x Funkstreifenwagen<br><br><span class="badge">' +
				'Credits: ~ 900 </span>',
				381: '3x Löschfahrzeuge<br>1x Einsatzleitwagen 1<br>1x Rüstwagen<br>1x Feuerwehrkran (20%)<br>1x Funkstreifenwagen<br><br><span class="badge">' +
				'Credits: ~ 900 </span>',
				382: '3x Löschfahrzeuge<br>1x Einsatzleitwagen 1<br>1x Rüstwagen<br>1x Feuerwehrkran (20%)<br>1x Funkstreifenwagen<br><br><span class="badge">' +
				'Credits: ~ 900 </span>',
				383: '1x Funkstreifenwagen<br>1x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (20%)<br><br><span class="badge">Credits: ~ 600 </span>',
				384: '2x Löschfahrzeuge<br><br><span class="badge">Credits: ~ 1100 </span>',
				385: '4x Löschfahrzeuge<br>1x GW-Messtechnik<br>1x GW-Gefahrgut<br>1x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2<br>1x GW-Öl<br>1x GW-Atemschutz<br>' +
				'1x GW-Werkfeuerwehr<br>1x Teleskopmast<br>max. 3 Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)<br><br>' +
				'<span class="badge">Credits: ~ 5100 </span>',
				386: '5x Löschfahrzeuge<br>1x GW-Messtechnik<br>1x GW-Gefahrgut<br>2x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2<br>1x GW-Atemschutz<br>' +
				'1x Turbolöscher<br>1x GW-Werkfeuerwehr<br>1x Teleskopmast<br>1x ULF mit Löscharm<br>max. 5 Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (50%)' +
				'<br><br><span class="badge">Credits: ~ 5500 </span>',
				387: '8x Löschfahrzeuge<br>1x GW-Messtechnik<br>1x GW-Gefahrgut<br>1x Einsatzleitwagen 1<br>1x Dekon-P (20%)<br>1x GW-Atemschutz<br>' +
				'1x Turbolöscher<br>1x GW-Werkfeuerwehr<br>1x Teleskopmast<br>1x ULF mit Löscharm<br>max. 1 Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)' +
				'<br><br><span class="badge">Credits: ~ 6500 </span>',
				388: '5x Löschfahrzeuge<br>1x Einsatzleitwagen 1<br>1x Rüstwagen<br>1x Drehleiter<br>1x Rettungstransportwagen<br>1x Notarzteinsatzfahrzeug (20%)' +
				'<br><br><span class="badge">Credits: ~ 2500 </span>',
				389: '16x Löschfahrzeuge<br>4x Drehleiter<br>1x Rüstwagen<br>1x Schlauchwagen (10%)<br>3x Einsatzleitwagen 1<br>1x Einsatzleitwagen 2<br>' +
				'1x GW-Atemschutz<br>1x GW-Messtechnik<br>1x GW-Gefahrgut<br>1x Dekon-P (60%)<br>1x GW-Werkfeuerwehr<br>1x Teleskopmast<br>1x Turbolöscher<br>' +
				'1x ULF mit Löscharm<br>3x Funkstreifenwagen<br>max. 3x Rettungstransportwagen<br>Notarzteinsatzfahrzeug (10%)<br><br><span class="badge">' +
				'Credits: ~ 8500 </span>'
		}
	}

    let missionHelp : $('#mission_help');

    if (missionHelp.length > 0) {
        let missionId : missionHelp.attr('href').split("/").pop().replace(/\?.*/, '');
        let aaoText : missions[missionId];
        let markup : '<div class="alert alert-warning"><h3>Benötigte Fahrzeuge</h3>' + aaoText + '</div>';

        $('#mission-form').prepend(markup);
    }

})();