// Data structure that will store the friends data
var teamsArray = [
	{
		name: 'Arizona Cardinals',
		photo: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/022014/untitled-1_206.png?itok=rS-00NKD',
		scores: [
			'1',
			'1',
			'4',
			'4',
			'4',
			'3',
			'2',
			'2',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=ARI',
		link2: 'http://www.azcardinals.com/'
	},
	{
		name: 'Atlanta Falcons',
		photo: 'http://74.86.207.139/content1/wallpaper/2009/WP49aab011e8dbc.jpg?width=360',
		scores: [
			'5',
			'1',
			'3',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=ATL',
		link2: 'http://www.atlantafalcons.com/'
	},
	{
		name: 'Baltimore Ravens',
		photo: 'http://planetill.com/wp-content/uploads/2009/09/ravens_logo.jpg',
		scores: [
			'9',
			'2',
			'2',
			'2',
			'1',
			'4',
			'3',
			'3',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=BAL'
	},
	{
		name: 'Buffalo Bills',
		photo: 'https://images.vexels.com/media/users/3/141819/isolated/preview/8a7228855c873ef9a3874d063588279e-buffalo-bills-american-football-by-vexels.png',
		scores: [
			'15',
			'2',
			'3',
			'3',
			'1',
			'1',
			'2',
			'2',
			'5'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=BUF'
	},
	{
		name: 'Carolina Panthers',
		photo: 'http://cdn.abclocal.go.com/content/wtvd/images/cms/57327_630x354.jpg',
		scores: [
			'16',
			'1',
			'3',
			'3',
			'2',
			'2',
			'1',
			'2',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=CAR'
	},
	{
		name: 'Chicago Bears',
		photo: 'http://cdn.bleacherreport.net/images_root/slides/photos/002/019/923/ChicagoBears_display_image.jpg?1331751433',
		scores: [
			'6',
			'1',
			'2',
			'2',
			'1',
			'1',
			'3',
			'3',
			'4'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=CHI'
	},
	{
		name: 'Cincinnati Bengals',
		photo: 'https://www.festisite.com/static/partylogo/img/logos/bengals.png',
		scores: [
			'17',
			'2',
			'3',
			'3',
			'1',
			'2',
			'1',
			'1',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=CIN'
	},
	{
		name: 'Cleveland Browns',
		photo: 'https://blog.logosbynick.com/wp-content/uploads/2015/10/clevelandbrowns.jpg',
		scores: [
			'17',
			'2',
			'2',
			'2',
			'1',
			'2',
			'1',
			'1',
			'6'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=CLE'
	},
	{
		name: 'Dallas Cowboys',
		photo: 'https://fontmeme.com/images/Dallas-Cowboys-Logo.jpg',
		scores: [
			'20',
			'1',
			'1',
			'1',
			'4',
			'5',
			'3',
			'3',
			'2'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=DAL'
	},{
		name: 'Denver Broncos',
		photo: 'https://vignette.wikia.nocookie.net/logopedia/images/a/a3/Broncos_Alternate_logo.gif/revision/latest?cb=20131104164121',
		scores: [
			'3',
			'2',
			'1',
			'1',
			'1',
			'2',
			'3',
			'3',
			'2'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=DEN'
	},{
		name: 'Detriot Lions',
		photo: 'https://static.wixstatic.com/media/c01557_26703973a59e49eda194af809deb6a8d~mv2.jpg',
		scores: [
			'11',
			'1',
			'3',
			'3',
			'3',
			'3',
			'2',
			'2',
			'5'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=DET'
	},{
		name: 'Green Bay Packers',
		photo: 'https://fontmeme.com/images/packers-football-logo.jpg',
		scores: [
			'22',
			'1',
			'3',
			'1',
			'1',
			'5',
			'2',
			'3',
			'2'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=GB'
	},{
		name: 'Houston Texans',
		photo: 'http://houstonsportsinsider.com/sites/default/files/styles/large/public/httpwww.sports-logos-screensavers.comuserHouston_Texans4_1.jpg?itok=y_8qXJ6n',
		scores: [
			'20',
			'2',
			'4',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=HOU'
	},{
		name: 'Indianapolis Colts',
		photo: 'http://www.sportsecyclopedia.com/nfl/indy/Coltsscript.gif',
		scores: [
			'7',
			'2',
			'3',
			'3',
			'4',
			'4',
			'2',
			'2',
			'2'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=IND'
	},{
		name: 'Jacksonville Jaguars',
		photo: 'https://i0.wp.com/www.assuresign.com/app/uploads/2017/06/admin-ajax-1.jpg?fit=400%2C300&ssl=1',
		scores: [
			'4',
			'2',
			'4',
			'4',
			'2',
			'1',
			'1',
			'1',
			'5'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=JAX'
	},{
		name: 'Kansas City Chiefs',
		photo: 'https://cdn7.bigcommerce.com/s-a4w28t94lu/images/stencil/1280x1280/products/77486/84543/62395-kansas-city-chiefs-lunch-napkins__80811.1492707556.jpg?c=2',
		scores: [
			'13',
			'2',
			'2',
			'2',
			'1',
			'3',
			'1',
			'2',
			'4'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=KC'
	},{
		name: 'Los Angeles Chargers',
		photo: 'https://sc-events.s3.amazonaws.com/52186/main.gif',
		scores: [
			'2',
			'2',
			'4',
			'4',
			'2',
			'3',
			'2',
			'2',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=LAC'
	},{
		name: 'Los Angeles Rams',
		photo: 'https://www.awesomesportslogos.com/prodImages/2016/LosAngelesRams.png',
		scores: [
			'2',
			'1',
			'4',
			'4',
			'2',
			'1',
			'1',
			'1',
			'5'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=LA'
	},{
		name: 'Miami Dolphins',
		photo: 'http://media.miamiherald.com/static/media/projects/2015/fins-at-50/logos/img/thumb/1997.jpg',
		scores: [
			'4',
			'2',
			'3',
			'3',
			'2',
			'4',
			'2',
			'3',
			'4'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=MIA'
	},{
		name: 'Minnesota Vikings',
		photo: 'https://www.festisite.com/static/partylogo/img/logos/vikings.png',
		scores: [
			'12',
			'1',
			'3',
			'3',
			'3',
			'4',
			'2',
			'2',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=MIN'
	},{
		name: 'New England Patriots',
		photo: 'http://moziru.com/images/logo-clipart-new-england-patriots-2.gif',
		scores: [
			'10',
			'2',
			'1',
			'1',
			'1',
			'4',
			'3',
			'3',
			'1'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=NE'
	},{
		name: 'New Orleans Saints',
		photo: 'http://wherewhodatsshop.com/4008-large_default/new-orleans-saints-1975-circle-logo-hardboard-wooden-sign.jpg',
		scores: [
			'8',
			'1',
			'2',
			'2',
			'3',
			'1',
			'2',
			'3',
			'2'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=NO'
	},{
		name: 'New York Giants',
		photo: 'https://i.pinimg.com/236x/54/b2/cf/54b2cf1311abf117896ffcfb04c517e1--giants-football-new-york-giants.jpg',
		scores: [
			'15',
			'1',
			'2',
			'2',
			'1',
			'2',
			'3',
			'3',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=NYG'
	},{
		name: 'New York Jets',
		photo: 'https://betanews.com/wp-content/uploads/2013/03/Jets-Pin-Pro-300x300.jpg',
		scores: [
			'15',
			'2',
			'3',
			'3',
			'1',
			'2',
			'3',
			'3',
			'4'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=NYJ'
	},{
		name: 'Oakland Raiders',
		photo: 'https://sep.yimg.com/ay/oaklandraiders/oakland-raiders-12-inch-shield-magnet-12.jpg',
		scores: [
			'2',
			'2',
			'2',
			'2',
			'2',
			'1',
			'1',
			'2',
			'5'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=OAK'
	},{
		name: 'Philadelphia Eagles',
		photo: 'https://vignette.wikia.nocookie.net/legostarwars/images/b/bf/Eagles.png/revision/latest?cb=20070831165944',
		scores: [
			'18',
			'1',
			'2',
			'2',
			'1',
			'2',
			'2',
			'3',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=PHI'
	},{
		name: 'Pittsburgh Steelers',
		photo: 'https://i.pinimg.com/736x/b6/57/45/b657457dac196dfe1e3cb4ffdd1879b0--football-banner-steelers-football.jpg',
		scores: [
			'18',
			'2',
			'1',
			'1',
			'1',
			'5',
			'2',
			'3',
			'2'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=PIT'
	},{
		name: 'San Fransisco 49ers',
		photo: 'https://static1.squarespace.com/static/558e0af0e4b01c6273e72ab4/t/561c4896e4b0faa8c8494568/1444694189234/SAN-FRANCISCO-49ERS',
		scores: [
			'2',
			'1',
			'2',
			'2',
			'2',
			'2',
			'3',
			'3',
			'4'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=SF'
	},{
		name: 'Seattle Seahawks',
		photo: 'https://www.microbytecorp.com/bsf-images/nfl/Seahawks.png',
		scores: [
			'21',
			'1',
			'2',
			'2',
			'1',
			'5',
			'2',
			'3',
			'3'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=SEA'
	},{
		name: 'Tampa Bay Buccaneers',
		photo: 'https://images.vexels.com/media/users/3/142046/isolated/preview/c7f9ce5cc93d7f6bf233b170af8a3dae-tampa-bay-buccaneers-american-football-by-vexels.png',
		scores: [
			'4',
			'1',
			'4',
			'4',
			'2',
			'4',
			'1',
			'2',
			'5'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=TB'
	},{
		name: 'Tennessee Titans',
		photo: 'https://www.irononsticker.com/images/nfl/STK-NFL-TET-A1999-02.jpg',
		scores: [
			'19',
			'2',
			'4',
			'4',
			'2',
			'2',
			'1',
			'1',
			'4'
			
		],
		link: 'http://www.nfl.com/teams/profile?team=TEN'
	},{
		name: 'Washington Redskins',
		photo: 'http://www.sportsjourney.com/wp-content/uploads/Redskins-logo-flag.jpg',
		scores: [
			'9',
			'1',
			'2',
			'2',
			'1',
			'2',
			'3',
			'3',
			'5'
			
        ],
        link: 'http://www.nfl.com/teams/washingtonredskins/profile?team=WAS'
	},{
		name: 'You Basic',
		photo: 'https://i.imgur.com/YAQP8NF.gif',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
			
		],
		link:'https://www.buzzfeed.com/chelseamarshall/how-basic-are-you?utm_term=.qwPKgDZ92#.jrrVb42yL'
	}
];

module.exports = teamsArray;

//Fanbases             //Stadiums -- Type -- Gameday price -- Avg Ticket Price
//1 - Dallas
//2 - Patriots			//Cowboys -- Retractable -- 333.40 -- 110.20
//3 - Packers			//Seahawks -- Open -- 252.40 -- 88.20
//4 - Steelers			//Steelers -- Open -- 263.12 -- 93.56
//5 - Broncos    -- 1^	//Packers -- Open -- 266.44 -- 94.47
//6 - Raiders			//Falcons   -- 5^ Retractable -- 215.66 -- 78.83
//7 - Seahawks			//Vikings -- Fixed -- 224.34 -- 91.67
//8 - Chicago			//Dolphins -- Open -- 252 -- 98.25
//9 - Giants			//Colts -- Retractable -- 230.38 -- 87.44
//10 - Philadelphia		//Patriots -- Open -- 331.96 -- 130.73
//11 - Ravens			//Ravens -- Open -- 303.22 -- 112.11
//12 - Redskins			//Buccaneers --4^ Open -- 210.22 -- 74.11
//13 - 49ers			//Chiefs -- Open -- 214.08 -- 73.79
//14 - Browns			//Cardinals -- Retractable -- 220.72 -- 87.86
//15 - Chiefs			//Texans -- Retractable -- 255.46 -- 94.73
//16 - Saints    -- 2^	//Lions -- Fixed -- 231.92 -- 85.71
//17 - Bengals			//Chargers  -- 3^ Open -- 230 -- 100
//18 - Panthers			//Giants and Jets -- Open -- 304.80 -- 123.40 -- 274.08 -- 110.54 
//19 - Jets				//Broncos -- Open -- 290.50 -- 114
//20 - Lions			//Bengals -- Open -- 202.26 -- 74.13
//21 - Bills			//Browns -- Open -- 195.26 -- 69.13
//22 - Vikings			//49ers -- Open -- 331 --117
//23 - Dolphins			//Red Skins -- Open -- 336.54 -- 119.52
//24 - Falcons			//Titans -- Open -- 194.30 -- 67.15
//25 - Colts     -- 3^	//Panthers -- Open -- 208.08 -- 79.04
//26 - Texans			//Eagles   -- 2^Open -- 268.38 -- 98.69
//27 - Cardinals		//Bears -- Open -- 351.30 -- 131.90
//28 - Buccaneers		//Jaguars -- Open -- 190.72 -- 61.36
//29 - Titans			//Saints -- Fixed -- 256 -- 91.25
//30 - Jaguars			//Bills -- Open -- 244.36 -- 88.18
//31 - Chargers			//Los Angeles Rams -- Open -- 201.92 -- 72.21
//32 - Rams      -- 4^	//Oakland  -- 1^ Open --217.56 -- 71.03
							//Open - 1  Fixed - 2   Retractable - 3
							//60-80 - 1  80-100 - 2 ++ - 3
							//10-Season-Record
							//32 -- Rams - 46-113-1
							//31 -- Browns - 48-112		6
							//30 -- Jaguars - 53-107
							//29 -- Raider - 60-100
							//28 -- Buccaneers - 63-97
							//27 -- Lions - 63-97
							//26 -- Redskins - 66-93-1
							//25 -- Bills - 66-94 		5^
							//24 -- Dolphins - 71-89
							//23 -- Chiefs - 72-88
							//22 -- Titans - 73-87
							//21 -- Jets - 74-86
							//20 -- Bears - 74-86
							//19 -- 49ers - 77-82-1		4^
							//18 -- Vikings - 80-79-1
							//17 -- Texans - 82-78	
							//16 -- Panthers - 82-77-1
							//15 -- Chargers - 83-77
							//14 -- Bengals - 83-74-3
							//13 -- Eagles - 84-75-1
							//12 -- Cardinals - 86-73-1
							//11 -- Giants - 88-72
							//10 - Falcons - 89-71
							//9 -- Seahawks - 89-70-1
							//8 -- Ravens - 90-70		3^
							//7 -- Saints - 91-69
							//6 -- Cowboys - 92-68
							//5 -- Broncos - 94-66
							//4 -- Colts - 100-60
							//3 -- Steelers - 103-57
							//2 -- Packers - 106-53-1	2^
							//1 -- Patriots - 126-34	1












