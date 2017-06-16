// ==UserScript==
// @name        Missionhelper Missionchief
// @namespace   missionchief
// @description Displays the required vehicles in an info window
// @include     https://www.missionchief.com/missions/*
// @downloadURL https://github.com/Suchty112/LSS.Einsatzhelfer/raw/mc/script.user.js
// @updateURL   https://github.com/Suchty112/LSS.Einsatzhelfer/raw/mc/script.user.js
// @author    DrFussel u. KV Nürnberg/SanniHameln
// @version     0.1.5
// @grant       none
// ==/UserScript==

//1 Fire Station
var Binfire = "1x Firetruck (100%)";
var Containerfire = "1x Firetruck (100%)";
var Burningcar = "1x Firetruck (100%)";
var Burningmotorbike = "1x Firetruck (100%)";
var Burninggrass = "1x Firetruck (100%)";
var Burningleaves = "1x Firetruck (100%)";
var Bulktrashfire = "1x Firetruck (100%)";
var Baleofstrawfire = "1x Firetruck (100%)";
var Tractorfire = "1x Firetruck (100%)";
var Burningcallbox = "1x Firetruck (100%)";
var Treeontheroad = "1x Firetruck (100%)";
var Littlewildfire = "1x Firetruck (100%)";
var Mailboxonfire = "1x Firetruck (100%)";
var Brushpile = "1x Firetruck (100%)";
var Burningtrailer = "1x Firetruck (100%)";
var GasLeak = "1x Firetruck (100%)";
var Wastebinfire = "1x Firetruck (100%)";
var Treeonbikeway = "1x Firetruck (100%)";
var CarbonMonoxideAlarm = "1x Firetruck (100%)";
//2 Fire Station
var Roomfire = "2x Firetrucks (100%)</br>1x Platform Truck (30%)";
var Gardenshedfire = "2x Firetrucks (100%)";
var Burningtruck = "2x Firetrucks (100%)";
var Littlefieldfire = "2x Firetrucks (100%)";
var Caravanfire = "2x Firetrucks (100%)";
var ManholeFire = "2x Firetrucks (100%)</br> 1x Battalion Chief (100%)";
var SmokeinCabin = "2x Firetrucks (100%)</br> 1x ARFF (100%)";
var BrakingOverheat = "1x Firetruck (100%)</br> 1x ARFF (100%)</br> 1x Battalion Chief (100%)";
var EngineFire = "1x Firetruck (100%)</br> 3x ARFF (100%)</br> 1x Battalion Chief (100%)";
//3 Fire Station
var Basementfire = "3x Firetrucks (100%)</br> 1x Battalion Chief (90%)";
var Chimneyfire = "1x Firetruck (100%) </br> 1x Platform Truck (100%) </br>1x Battalion Chief (100%)";
var Rooffire = "3x Firetrucks (100%) </br> 1x Platform Truck (100%) </br> 1x Battalion Chief (50%)";
var GreaseFire ="1x Firetruck (100%)";
var Burningbusshelter ="1x Firetruck (100%)";
var Roadaccident ="1x Firetruck (100%)";
//4 Fire Station
var Burningsubstation ="2x Firetrucks (100%) </br>1x Battalion Chief (100%)</br>1x Police Car (100%)";
var Garagefire ="2x Firetrucks (100%)";
var MVARollover ="3x Firetrucks (100%)</br>2x Battalion Chiefs (100%)</br>1x Platform Truck (50%)</br>1x Heavy Resuce (100%)</br>2x Police Cars</br>min. 1x Ambulance(100%)";
//5 Fire Station
var Burningmachine ="3x Firetrucks (100%)</br> 1x Heavy Rescue (100%)</br> 1x Battalion Chief (100%)</br>1x Mobile Air (20%)</br>1x Water Tanker (30%)";
var BuildingCollapse ="2x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>2x Battalion Chiefs (100%)</br>2x Heavy Rescues (100%)</br>1x Mobile Command (100%)</br>min. 1x Ambulance (100%)";
var TrenchRescue  ="3x Firetrucks (100%)</br> 2x Heavy Rescues (100%)</br> 1x Battalion Chief (100%)</br>1x Police Car (100%)</br>min. 2x Ambulance (100%)";
//6 Fire Station
var Fireplacefire ="1x Firetruck (100%)</br>1x Platform Truck (100%)</br>1x Battalion Chief (100%)";
var MissingPerson ="2x Firetrucks (100%)</br>1x Battalion Chief (100%)</br>5x Police Cars (100%)</br>1x Police Helicopter</br>1x Ambulance(100%)";
var Harvesterfire ="2x Firetrucks (100%)";
var Personundertree ="1x Firetruck (100%)</br>1x Ambulance (100%)";
var IndustrialFire ="5x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>1x Hazmat (100%)</br>min. 1x Ambulance";
var ResidentialFire ="3x Firetrucks (100%)</br>1x Platform Truck (100%)</br>1x Battalion Chief (100%)</br>2x Police Cars (100%)</br>min. 1x Ambulance";
var VehicleAccidentEntrapment ="2x Firetrucks (100%)</br>2x Heavy Rescues (100%)</br>1x Battalion Chief (100%)</br>2x Police Cars (100%)</br>min. 1x Ambulance";
//7 Fire Station
var Burninglocomotive ="4x Firetrucks (100%)</br>1x Heavy Rescue (50%)</br>1x Battalion Chief (100%)</br>1x Mobile Air (30%)</br>1x Water Tanker (100%)";
//10 Fire Station
var LargeAircraftCrash ="3x Firetrucks (100%)</br>4x ARFF (100%)</br>1x Battalion Chief (100%)</br>5x Police Cars (100%)</br>min. 1x Ambulance (100%) max. 25 Ambulance";
//11 Fire Station
var Gasstationfire ="4x Firetrucks (100%)</br>2x Heavy Rescues (30%)</br>1x Platform Trucks (100%)</br>1x Battalion Chief (100%)</br>1x Mobile Command (100%)</br>1x Hazmat (70%)</br>1x Mobile Air(30%)";
var Dangerousgoodstruckaccident ="3x Firetrucks (100%)</br>1x Heavy Rescue (50%)</br>1x Battalion Chief (100%)</br>1x Hazmat (100%)";
//13 Fire Station
var UnknownTankerSpill ="4x Firetrucks (100%)</br>2x Heavy Rescues (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>3x Police Cars (100%)</br>2x Hazmat (100%)";
var CommercialFire ="6x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>2x Heavy Rescues (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>2x Police Cars (100%)";
var HighRiseFire ="5x Firetrucks (100%)</br>2x Platform Trucks (100%)</br>1x Heavy Rescue (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>1x Water Tanker (100%)</br>2x Mobile Air(50%)</br> min. 4x Ambulance";
//15 Fire Station
var FireinanOfficeBuilding ="10x Firetrucks (100%)</br>4x Platform Trucks (100%)</br>2x Heavy Rescue (100%)</br>2x Battalion Chiefs (100%)</br>1x Mobile Command (100%)</br>1x Water Tanker (100%)</br>1x Mobile Air(50%)</br>3x Police Cars</br> min. 1x Ambulance";
//Temporär:
//Winter
var Theftatchristmasmarket ="1x Police Car (100%)";
var Burningchristmasmarketstall ="1x Firetruck (100%)</br>1x Ambulance (??%)";
var Fireatchristmasmarket ="1x Firetruck (100%)</br>1x Ambulance (??%)";
var Trafficaccidentice ="1x Firetruck (100%)</br>1x Heavy Resuce (100%)";
var Burningchristmastree ="1x Firetruck (100%)";
var Burningadventwreath ="1x Firetruck (100%)";
var Brawlatchristmasmarket ="2x Police Cars (100%)</br>1x Ambulance (??%)";
//Halloween
var Burningbogle ="1x Firetruck (100%)";
var Burningpumpkinfield ="2x Firetrucks (100%)";
var Pumpkinsoupovercooked ="1x Firetruck (100%)</br>1x Battalion Chief (100%)</br>1x Mobile Air (50%)";
var Witchintree ="1x Firetruck (100%)</br>1x Platform Trucks (100%)";
var Zombiebite ="1x Ambulance (100%)";
var EruptedMonster ="2x Police Cars (100%)";
var Pumpkinstolen ="1x Police Car (100%)";
var Frankensteinsighted ="3x Police Cars (100%)";
var candytheft ="1x Police Car (100%)";
//Verbandsgroßeinsätze
var Majorfire ="10x Firetrucks (100%)</br>2x Battalion Chiefs (100%)</br>2x Platform Trucks (100%)</br>1x Mobile Air (100%)</br>1x Water Tanker (100%)</br>2x Heavy Rescues (100%)</br>1x Mobile Command (100%)";
var Pileup ="10x Firetrucks (100%)</br>2x Battalion Chiefs (100%)</br>5x Heavy Rescues (100%)</br>2x Hazmats (100%)</br> min. 10x Ambulance(100%)";
var BombExplosion ="6 Firetruck (100%)</br>2x Platform Trucks (100%)</br>2x Heavy Rescue (100%)</br>1x Mobile Command (100%)</br>2x Battalion Chief (100%)</br>1x Police Helicopter (100%)</br>14x Police Cars (100%)</br> 4x Swat Cars";
var Unannounceddemonstration ="7x Police Cars (100%)";
//1 Rescue Station
var Alcoholicintoxication ="1x Ambulance (100%)</br>1x Police Car (100%)";
var Nosebleed ="1x Ambulance (100%)";
var Fallenperson ="1x Ambulance (100%)";
var Diabeticproblems  ="1x Ambulance (100%)";
var FoodPoisoning ="1x Ambulance (100%)";
//2 Rescue Stations
var Anaphylaxis ="1x Ambulance (100%)";
var Overdose ="1x Ambulance (100%)</br>1x Police Car (100%)";
//3 Rescue Stations
var Cardiacinfarction ="1x Ambulance (100%)";
var Acuteasthma ="1x Ambulance (100%)";
var Seizure ="1x Ambulance (100%)";
var Fever ="1x Ambulance (100%)";
//1 Police Station
var Shoplifting ="1x Police Car (100%)";
var Parkedcaraccident ="1x Police Car (100%)";
var Metalburglary ="1x Police Car (100%)";
var Pickpocketing ="1x Police Car (100%)";
var Faredodger ="1x Police Car (100%)";
var Personcheck ="1x Police Car (100%)";
var Obstructionoftraffic ="1x Police Car (100%)";
var Theftofpropertyfromvehicles ="1x Police Car (100%)";
var AnimalAttack ="1x Police Car (100%)</br>1x Ambulance";
var NoiseComplaint ="1x Police Car (100%)";
var AggressivePassenger ="1x Police Car (100%)";
//2 Police Stations
var Rioter ="2x Police Cars (100%)";
var WarrantStandby ="3x Police Cars (100%)</br>1x Police Helicopter(100%)";
//3 Police Stations
var Brawl ="3x Police Cars (100%)";
var DomesticDispute ="2x Police Cars (100%)";
//4 Police Station
var FleeingSuspect ="5x Police Cars (100%)</br>1x Police Helicopter (100%)";
//5 Police Stations
var Shooting ="7x Police Cars (100%)</br>min. 1 Ambulance (100%)";
//6 Police Stations
var OfficerDown ="6x Police Cars (100%)</br>1x Ambulance (100%)";
var Stabbing ="5x Police Cars (100%)</br>min. 1x Ambulance (100%)";
//7 Police Stations
var PrisonerEscape ="10x Police Cars (100%)</br>1x Police Helicopter (100%)";
//8 Police Stations
var HostageTaken ="4x Police Cars (100%)</br>2x SWAT Cars (100%)</br>1x Ambulance (100%)";
var DrugWarrant ="1x Police Cars (100%)</br>1x SWAT Car (100%)";
var BankRobbery ="6x Police Cars (100%)</br>2x SWAT Cars (100%)";
//9 Police Station
var ActiveShooter ="4x Police Cars (100%)</br>1x Police Helicopter (100%)</br>4x SWAT Cars (100%)</br>min. 1x Ambulance (100%)";
var HighRiskWarrant ="1x Police Cars (100%)</br>3x SWAT Cars (100%)";
//10 Police Station
var AircraftHijack ="10x Police Cars (100%)</br>4x SWAT Cars (100%)</br>1x Battalion Chief</br>min. 1x Ambulance (100%)";


function addInfo(missionName) {
    var info = document.createElement('div');
    info.className = "alert alert-warning";
    var missionString = "";
    try{
    missionString += eval(missionName);
    }catch(err){
        missionString = "Error loading vehicle </br>Please forward to developer: "+err;    }
    info.innerHTML = "<h3>Required vehicles:</h3> "+missionString + "</br>";

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
    if(shortendname === "Concert"||shortendname === "SoccerGame"||shortendname === "BaseballGame"){
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
