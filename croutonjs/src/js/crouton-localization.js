var words;

function CroutonLocalization(language) {
	this.language = language;
	words = {
		"da-DK": {
			"days_of_the_week": ["", "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
			"weekday": 'Ugedag',
			"city": "By",
			"cities": "Byer",
			"groups": "Grupper",
			"areas": "Områder",
			"locations": "Lokalite",
			"counties": "Amter",
			"states": "Provinser",
			"postal_codes": "Post nummer",
			"formats": "Struktur",
			"map": "Kort",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"de-DE":{
			"days_of_the_week": ["", "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Frietag", "Samstag"],
			"weekday": 'Wochentag',
			"city": "Stadt",
			"cities": "Städte",
			"groups": "Gruppen",
			"areas": "Gebiete",
			"locations": "Orte",
			"counties": "Landkreise",
			"states": "Bundesländer",
			"postal_codes": "PLZ",
			"formats": "Formate",
			"map": "Karte",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"en-US": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Zips",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"en-CA": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "Provinces",
			"postal_codes" : "Postal Codes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"fa-IR": {
			"days_of_the_week" : ["", 'یَکشَنب', 'دوشَنبه', 'سه‌شنبه', 'چهار شنبه', 'پَنج شَنبه', 'جُمعه', 'شَنبه'],
			"weekday" : "روز هفته",
			"city" : "شهر",
			"cities" : "شهرها",
			"groups" : "گروه ها",
			"areas" : "نواحی",
			"locations" : "آدرسها",
			"counties" : "بخشها",
			"states" : "ایالات",
			"postal_codes":"کد پستی",
			"formats" : "فورمت ها",
			"map" : "نقشه",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"fr-CA": {
			"days_of_the_week" : ["", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			"weekday" : "Journée",
			"city" : "Ville",
			"cities" : "Villes",
			"groups" : "Groupes",
			"areas" : "CSL",
			"locations" : "Emplacements",
			"counties" : "Régions",
			"states" : "Provinces",
			"postal_codes" : "Codes postaux",
			"formats" : "Formats",
			"map" : "Carte",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"it-IT": {
			"days_of_the_week" : ["", "Domenica", " Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
			"weekday" : "Giorno",
			"city" : "Città",
			"cities" : "Città",
			"groups" : "Gruppi",
			"areas" : "Aree",
			"locations" : "Località",
			"counties" : "Province",
			"states" : "Regioni",
			"postal_codes" : "CAP",
			"formats" : "Formati",
			"map" : "Mappa",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"es-US": {
			"days_of_the_week" : ["", "Domingo", " Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			"weekday" : "Día de la semana",
			"city" : "Ciudad",
			"cities" : "Ciudades",
			"groups" : "Grupos",
			"areas" : "Areas",
			"locations" : "Ubicaciones",
			"counties" : "Condados",
			"states" : "Estados",
			"postal_codes" : "Codiagos postales",
			"formats" : "Formatos",
			"map" : "Mapa",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"en-NZ": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"en-AU": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"en-UK": {
			"days_of_the_week" : ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"weekday" : "Weekday",
			"city" : "City",
			"cities" : "Cities",
			"groups" : "Groups",
			"areas" : "Areas",
			"locations" : "Locations",
			"counties" : "Counties",
			"states" : "States",
			"postal_codes" : "Postcodes",
			"formats" : "Formats",
			"map" : "Map",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"pl-PL": {
			"days_of_the_week" : ["", "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
			"weekday" : "Dzień tygodnia",
			"city" : "Miasto",
			"cities" : "Miasta",
			"groups" : "Grupy",
			"areas" : "Okręgi",
			"locations" : "Lokalizacje",
			"counties" : "Powiaty",
			"states" : "Województwa",
			"postal_codes" : "Kody pocztowe",
			"formats" : "Formaty",
			"map" : "Mapa",
			"neighborhood": "Neighborhood",
			"near_me": "Near Me",
			"text_search": "Text Search",
			"click_search": "Click Search",
			"pan_and_zoom": "Pan + Zoom",
			"languages": "Languages",
		},
		"pt-BR": {
			"days_of_the_week" : ["", "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
			"weekday" : "Dia da semana",
			"city" : "Cidade",
			"cities" : "Cidades",
			"groups" : "Grupos",
			"areas" : "Áreas",
			"locations" : "Localizações",
			"counties" : "Municípios",
			"states" : "Estados",
			"postal_codes" : "CEPs",
			"formats" : "Formatos",
			"map" : "Mapa",
			"neighborhood": "Bairro",
			"near_me": "Minha Localização",
			"text_search": "Buscar por Texto",
			"click_search": "Clique no local",
			"pan_and_zoom": "Panorâmico + Zoom",
			"languages": "Languages",
		},
	};
}

CroutonLocalization.prototype.getDayOfTheWeekWord = function(day_id) {
	return words[this.language]['days_of_the_week'][day_id];
};

CroutonLocalization.prototype.getWord = function(word) {
	return words[this.language][word.toLowerCase()];
};
