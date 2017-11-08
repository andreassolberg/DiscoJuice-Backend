{

	"kalmar": {
		"id": "kalmar",
		"title": "Kalmar Union",
		"descr": "Nordic Cross-federation",
		"info": "http://kalmar2.org",
		"url": "https://kalmar2.org/simplesaml/module.php/aggregator/?id=kalmarcentral2&set=saml20-idp-remote&exclude=norway",
		"excludes": [
			"https://wayf.wayf.dk",
			"https://idp.feide.no"
		],
		"zoom": 4
	},
	"edugain": {
		"title": "eduGAIN",
		"descr": "Pan-europeic cross-federation.",
		"info": "http://www.edugain.org",
		"url": "http://mds.edugain.org/",
		"excludes": [
			"https://idp.feide.no"
		],
		"zoom": 3
	},
	"switch": {
		"title": "SWITCH AAI",
		"descr": "National federation in Switzerland",
		"url": "http://metadata.aai.switch.ch/metadata.switchaai.xml",
		"country": "CH",
		"CountrySearch": "Switzerland",
		"zoom": 8
	},
	"arnes": {
		"url": "http://ds.aai.arnes.si/metadata/aai.arnes.si.signed.xml",
		"country": "SI",
		"CountrySearch": "Slovenia",
		"zoom": 8
	},
	"arnes-test": {
		"url": "http://ds.test-fed.arnes.si/metadata/test-fed.arnes.si.xml",
		"country": "SI",
		"CountrySearch": "Slovenia",
		"zoom": 8
	},
	"uk": {
		"title": "UK Access Federation",
		"info": "http://www.ukfederation.org.uk",
		"url": "http://metadata.ukfederation.org.uk/ukfederation-metadata.xml",
		"overrideEndpoint": "/www/static.discojuice.org/extra/merlin.json",
		"country": "GB",
		"CountrySearch": "United Kingdom",
		"zoom": 7
	},
	"incommon": {
		"title": "InCommon",
		"descr": "US Federation operated by Internet2",
		"url": "http://wayf.incommonfederation.org/InCommon/InCommon-metadata.xml",
		"country": "US",
		"CountrySearch": "USA"
	},
	"edugate": {
		"url": "https://edugate.heanet.ie/edugate-metadata-signed.xml",
		"country": "IE",
		"CountrySearch": "Ireland",
		"zoom": 7
	},
	"surfnet": {
		"title": "SurfFederatie",
		"descr": "Deprecated national federation of Netherlands",
		"url": "https://wayf.surfnet.nl/federate/metadata/saml20",
		"country": "NL",
		"CountrySearch": "Netherlands",
		"zoom": 8
	},
	"surfnet2": {
		"title": "SurfConext",
		"descr": "National federation in Netherlands",
		"url": "https://engine.surfconext.nl/authentication/proxy/idps-metadata",
		"country": "NL",
		"CountrySearch": "Netherlands",
		"zoom": 8
	},
	"surfnet-uwap": {
		"title": "SurfConext UWAP",
		"descr": "All SurfConext providers that accepts the UWAP service.",
		"url": "https://engine.surfconext.nl/authentication/proxy/idps-metadata?sp-entity-id=https://core.uwap.org/simplesaml/module.php/saml/sp/metadata.php/default-sp",
		"country": "NL",
		"CountrySearch": "Netherlands",
		"zoom": 8
	},
	"surfnet-foodl": {
		"url": "https://engine.surfconext.nl/authentication/proxy/idps-metadata?sp-entity-id=https://foodl.org/simplesaml/module.php/saml/sp/metadata.php/saml",
		"country": "NL",
		"CountrySearch": "Netherlands",
		"zoom": 8
	},
	"rctsaai-test": {
		"url": "http://metadata-rctsaai.fccn.pt/metadata/RCTSaai_testbedmetadata.xml",
		"country": "PT",
		"zoom": 8
	},
	"rctsaai": {
		"url": "http://metadata-rctsaai.fccn.pt/metadata/RCTSaai_metadata.xml",
		"country": "PT"	,
		"CountrySearch": "Portugal",
		"zoom": 8
	},
	"garr": {
		"url": "https://www.idem.garr.it/docs/conf/signed-metadata.xml",
		"country": "IT"	,
		"CountrySearch": "Italy",
		"zoom": 5
	},
	"garr-test": {
		"url": "https://www.idem.garr.it/docs/conf/signed-test-metadata.xml",
		"country": "IT"	,
		"CountrySearch": "Italy",
		"zoom": 5
	},
	"rediris": {
		"url": "https://www.rediris.es/sir/shib1metadata.xml",
		"country": "ES"	,
		"CountrySearch": "Spain",
		"zoom": 6,
		"overrides": {
			"https://www.rediris.es/sir/uvigoidp": {
				"geo": {"lat": "42.169185" , "lon": "-8.683609"}
			},
			"https://www.rediris.es/sir/uahidp": {
				"geo": {"lat": "40.510597" , "lon": "-3.343858"}
			},
			"https://www.rediris.es/sir/bcblidp": {
			 	"geo": {"lat": "43.294269", "lon": "-1.9861"}
			},
			"https://www.rediris.es/sir/ullidp": {
				"geo": {"lat": "28.4816", "lon": "-16.3168"}
			},
			"https://www.rediris.es/sir/ubuidp": {
				"geo": {"lat": "42.340197", "lon": "-3.7277"}
			},
			"https://www.rediris.es/sir/upctidp": {
				"geo": {"lat": "37.6018", "lon": "-0.9794"}
			},
			"https://www.rediris.es/sir/umidp": {
				"geo": {"lat": "38.022", "lon": "-1.174"}
			},
			"https://www.rediris.es/sir/uclmidp": {
				"geo": {"lat": "38.986096" , "lon": "-3.927262"}
			},
			"https://www.rediris.es/sir/upmidp": {
				"geo": {"lat": "40.449", "lon": "-3.7191"}
			},
			"https://www.rediris.es/sir/boeidp": {
				"geo": {"lat": "40.4867", "lon": "-3.6604"}
			},
			"https://www.rediris.es/sir/usidp": {
				"geo": {"lat": "37.382", "lon": "-5.99158"}
			},
			"https://www.rediris.es/sir/usalidp": {
			 	"geo": {"lat": "40.790887", "lon": "-5.539856"}
			 },
			"https://www.rediris.es/sir/deustoidp": {
				"geo": {"lat": "43.270891", "lon": "-2.938769"}
			},
			"https://www.rediris.es/sir/uaidp": {
				"geo": {"lat": "38.385975", "lon": "-0.514267"}
			},
			"https://www.rediris.es/sir/ucoidp": {
				"geo": {"lat": "37.9157009", "lon": "-4.721796"}
			},
			"https://www.rediris.es/sir/dipcidp": {
				"geo": {"lat": "43.1819", "lon": "-2.0039"}
			},
			"https://www.rediris.es/sir/uaxidp": {
				"geo": {"lat": "40.452", "lon": "-3.984"}
			},
			"https://www.rediris.es/sir/iacidp": {
				"geo": {"lat": "28.47468", "lon": "-16.308303"}
			},
			"https://www.rediris.es/sir/redirisidp": {
				"geo": {"lat":  "40.447636", "lon":  "-3.694236"}
			},
			"https://www.rediris.es/sir/ujaenidp": {
				"geo": {"lat": "37.789800", "lon": "-3.77795"}
			}, 
			"https://www.rediris.es/sir/uabidp":  {
				"geo":  {"lat":  "41.500742", "lon":  "2.110714"}
			}, 
			"https://www.rediris.es/sir/uscidp": {
				"geo": {"lat": "42.876", "lon": "-8.554"}
			},
			"https://www.rediris.es/sir/uhuidp":  {
			        "geo":  {"lat":  "37.266847" , "lon":  "-6.921586"}
			},
			"https://www.rediris.es/sir/iteidp": {
				"geo": {"lat": "40.445684", "lon": "-3.655001"}
			},
			"https://www.rediris.es/sir/uniriojaidp": {
			        "geo": {"lat": "42.463", "lon": "-2.427"}
			},
			"https://www.rediris.es/sir/upcomillasidp": {
				"geo": {"lat": "40.43000", "lon": "-3.71127"}
			},
			"https://www.rediris.es/sir/unedidp":  {
			        "geo":  {"lat":  "40.4381", "lon":  "-3.7041"}
			}, 
			"https://www.rediris.es/sir/udcidp": {
				"geo":  { "lat": "43.33127", "lon": "-8.412184"}
			},
			"https://www.rediris.es/sir/funepidp":  {
				"geo":  {"lat":  "40.4287", "lon":  "-3.7156"}
			},
			"https://www.rediris.es/sir/cemfiidp":  {
				"geo":  {"lat":  "40.4140", "lon":  "-3.6896"}
			},
			"https://www.rediris.es/sir/cesgaidp":  {
			        "geo":  {"lat":  "42.875", "lon": "-8.553"}
			},
			"https://www.rediris.es/sir/upnaidp": {
				"geo": {"lat": "42.8000", "lon": "-1.6361"}
			},
			"https://www.rediris.es/sir/ehuidp": {
				"geo": {"lat": "43.331611", "lon": "-2.971557"}
			},
			"https://www.rediris.es/sir/unizaridp": {
			        "geo": {"lat": "41.643", "lon": "-0.899"}
			},
			"https://www.rediris.es/sir/unicanidp": {
			        "geo": {"lat": "43.471111", "lon": "3.805"}
			}, 
			"https://www.rediris.es/sir/ufvidp": {
				"geo": {"lat": "40.262", "lon": "-3.500"}
			},
			"https://www.rediris.es/sir/cicaidp":  {
			        "geo":  {"lat":  "37.359058", "lon":  "-5.988909"}
			}, 
			"https://www.rediris.es/sir/ciematidp": {
				"geo": {"lat": "40.4553", "lon": "-3.7246"}
			},
			"https://www.rediris.es/sir/i2catidp": {
				"geo": {"lat": "41.386984", "lon": "2.111435"}
			},
			"https://www.rediris.es/sir/ivieidp": {
				"geo": {"lat": "39.490507", "lon": "-0.355907"}
			},
			"https://www.rediris.es/sir/uamidp": {
				"geo": {"lat": "40.547220", "lon": "-3.692075"}
			},
			"https://www.rediris.es/sir/uc3midp": {
			        "geo": {"lat": "40.332488", "lon": "-3.765700"}
			},
			"https://www.rediris.es/sir/umaidp": {
			        "geo": {"lat": "36.719645", "lon": "-4.420018"}
			},
			"https://www.rediris.es/sir/esaidp": {
				"geo": {"lat": "40.445259", "lon": "-3.953927"}
			},
			"https://www.rediris.es/sir/ubidp": {
			        "geo":  {"lat": "41.386843", "lon": "2.163652"}
			}, 
			"https://www.rediris.es/sir/ucaidp": {
				"geo":  {"lat": "36.53388", "lon": "-6.298031"}
			},
			"https://www.rediris.es/sir/unileonidp": {
				"geo": {"lat": "42.612", "lon": "-5.559"}
			},
			"https://www.rediris.es/sir/upvidp": {
				"geo": {"lat": "39.48236944", "lon": "-0.343577778"}
			},
			"https://www.rediris.es/sir/cahaidp":  {
				"geo": {"lat":  "37.22361", "lon": "-2.546112"}
			},
			"https://www.rediris.es/sir/urvidp": {
				"geo": {"lat": "41.119824", "lon": "1.260112"}
			}
		}
	},
	"gakunin": {
		"url": "https://metadata.gakunin.nii.ac.jp/gakunin-metadata.xml",
		"country": "JP",
		"CountrySearch": "Japan",
		"zoom": 7
	},
	"aconet": {
		"url": "https://eduid.at/md/aconet-registered.xml",
		"country": "AT",
		"CountrySearch": "Austria",
		"zoom": 6
	},
	"aaf": {
		"url": "http://manager.aaf.edu.au/metadata/metadata.aaf.signed.xml",
		"country": "AU",
		"CountrySearch": "Australia",
		"zoom": 4
	},
	"caf": {
		"url": "https://caf-shib2ops.ca/CoreServices/caf_metadata_signed_sha256.xml",
		"country": "CA",
		"CountrySearch": "Canada",
		"zoom": 4
	},
	"carsi": {
		"url": "http://www.carsi.edu.cn/carsimetadata/carsifed-metadata.xml",
		"country": "CN",
		"CountrySearch": "China",
		"zoom": 3
	},
	"cesnet": {
		"url": "https://metadata.eduid.cz/entities/eduid+idp",
		"country": "CZ",
		"CountrySearch": "Czech Republic",
		"zoom": 7
	},
	"dfn": {
		"url": "https://www.aai.dfn.de/fileadmin/metadata/DFN-AAI-metadata.xml",
		"country": "DE",
		"CountrySearch": "Germany",
		"zoom": 7
	},
	"renater": {
		"url": "https://services-federation.renater.fr/metadata/renater-metadata.xml",
		"country": "FR",
		"CountrySearch": "France",
		"zoom": 6
	},
	"grnet": {
		"url": "https://md.aai.grnet.gr/aggregates/grnet-metadata.xml",
		"country": "GR",
		"CountrySearch": "Greece",
		"zoom": 6
	},
	"niif": {
		"url": "https://metadata.eduid.hu/current/href.xml",
		"country": "HU",
		"CountrySearch": "Hungary",
		"zoom": 7
	},
	"laife"	: {
		"url": "https://laife.lanet.lv/metadata/laife-metadata.xml",
		"country": "LV",
		"CountrySearch": "Latvia"
	},
	"swamid": {
		"url": "http://md.swamid.se/md/swamid-discovery.xml",
		"country": "SE",
		"CountrySearch": "Sweden"
	},
	"sweden-eid": {
		"url": "http://md.test.eid2.se/md/eid2-test-1.0.xml",
		"country": "SE",
		"CountrySearch": "Sweden"
	},
	"skolfederation": {
		"url": "http://md.skolfederation.se/md/skolfederation-1.0.xml",
		"country": "SE",
		"CountrySearch": "Sweden"
	},
	"skolfederation2": {
		"url": "http://meta01.skolfederation.se/skolfederation-2_0.xml",
		"country": "SE",
		"CountrySearch": "Sweden"
	},
	"haka": {
		"url": "https://haka.funet.fi/metadata/haka-metadata.xml",
		"country": "FI",
		"CountrySearch": "Finland"
	},
	"poland": {
		"url": "http://aai.pionier.net.pl/pionier.xml",
		"country": "PL",
		"CountrySearch": "Poland"
	},
	"redclara": {
		"url": "https://idp2.redclara.net/idp/shibboleth"
	},
	"gridp": {
		"title": "GrIDP",
		"descr": "The Grid IDentity Pool (GrIDP). Managed and operated by GARR and INFN Catania.",
		"info": "https://gridp.garr.it/",
		"url": "https://gridp.garr.it/metadata/gridp.xml",
		"country": "IT"
	},
	"safire": {
		"url": "https://metadata.safire.ac.za/safire-idp-proxy-metadata.xml",
		"title": "SAFIRE",
		"descr": "South African Identity Federation",
		"info": "https://safire.ac.za/",
		"country": "ZA",
		"CountrySearch": "South Africa",
		"zoom": 6
	}
}

