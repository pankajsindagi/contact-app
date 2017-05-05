angular.module("contactApp", []).controller("contactCtrl", function () {
	this.contacts = [
		{
			"gender": "female",
			"name": {
				"title": "miss",
				"first": "nuria",
				"last": "reyes"
			},
			"location": {
				"street": "5474 calle de la luna",
				"city": "hospitalet de llobregat",
				"state": "la rioja",
				"postcode": 22622
			},
			"email": "nuria.reyes@example.com",
			"login": {
				"username": "bluetiger685",
				"password": "molson",
				"salt": "awF9iPal",
				"md5": "e3100d561c0973b8c265cb8ea33a508a",
				"sha1": "d5a8797f3d21d17a9a739b066e2f6152d3deb960",
				"sha256": "4946f4c8157e19dde30d29f01ebc7cfa9275c6d61ce72bcfee1c0642b8e4bed5"
			},
			"dob": "1946-03-26 21:11:59",
			"registered": "2005-12-15 12:53:35",
			"phone": "950-814-998",
			"cell": "668-582-015",
			"id": {
				"name": "DNI",
				"value": "22998073-Z"
			},
			"picture": {
				"large": "https:\/\/randomuser.me\/api\/portraits\/women\/45.jpg",
				"medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/45.jpg",
				"thumbnail": "https:\/\/randomuser.me\/api\/portraits\/thumb\/women\/45.jpg"
			},
			"nat": "ES"
		},
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "hailey",
				"last": "patel"
			},
			"location": {
				"street": "9847 lakeview ave",
				"city": "waterloo",
				"state": "manitoba",
				"postcode": 10666
			},
			"email": "hailey.patel@example.com",
			"login": {
				"username": "biglion364",
				"password": "fishon",
				"salt": "kKHn69pO",
				"md5": "1151c53bca7a7eed7e92ff5c1d0379cc",
				"sha1": "7751d95155af4cad591ead439f276a399171671e",
				"sha256": "782f671eb75f6bf9969e39600a9577c30db815b2df1ac47324a47fcacf0eaddf"
			},
			"dob": "1981-07-04 02:14:46",
			"registered": "2006-06-16 07:11:14",
			"phone": "946-956-3550",
			"cell": "203-500-1335",
			"id": {
				"name": "",
				"value": null
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/42.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
			},
			"nat": "CA"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "louis",
				"last": "chu"
			},
			"location": {
				"street": "8237 oak st",
				"city": "grand falls",
				"state": "nova scotia",
				"postcode": 60240
			},
			"email": "louis.chu@example.com",
			"login": {
				"username": "smalltiger777",
				"password": "latina",
				"salt": "3WfgNog7",
				"md5": "04594148292aa3ea3846bf0e78a7c58d",
				"sha1": "d3e72d765b2d97df67e12d2f17c46e3aa1c22836",
				"sha256": "395f8fc013f59c20cec2c41cf56b98a20ab62dd09cce71bc399ca637a499346f"
			},
			"dob": "1949-07-28 23:47:56",
			"registered": "2014-03-15 04:44:44",
			"phone": "429-395-3405",
			"cell": "788-730-0252",
			"id": {
				"name": "",
				"value": null
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/48.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
			},
			"nat": "CA"
		},
		{
			"gender": "female",
			"name": {
				"title": "ms",
				"first": "candice",
				"last": "lawrence"
			},
			"location": {
				"street": "1420 hillcrest rd",
				"city": "bowral",
				"state": "victoria",
				"postcode": 3777
			},
			"email": "candice.lawrence@example.com",
			"login": {
				"username": "silverrabbit656",
				"password": "laddie",
				"salt": "yHrmJMwt",
				"md5": "0ffbef610cf670df910f088c1f51e1ed",
				"sha1": "a03e4a589223e11ce4343dd45293e9c28f3c65da",
				"sha256": "afa69f6968b3759e5c02e757e967ca0ebe081315a9a03219cdbed1adb76ebcd4"
			},
			"dob": "1967-04-07 06:26:03",
			"registered": "2003-11-26 15:15:23",
			"phone": "05-3803-0066",
			"cell": "0405-974-907",
			"id": {
				"name": "TFN",
				"value": "051069498"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/0.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
			},
			"nat": "AU"
		},
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "olivia",
				"last": "johansen"
			},
			"location": {
				"street": "1694 kirkestien",
				"city": "støvring ",
				"state": "nordjylland",
				"postcode": 19992
			},
			"email": "olivia.johansen@example.com",
			"login": {
				"username": "brownfish709",
				"password": "cookie",
				"salt": "VsQ3NvnD",
				"md5": "b2fe80528ad55b6178aacb568eb28a90",
				"sha1": "aec31755e3f0524524f55f39bc6c0fb9fa1d5000",
				"sha256": "556fd1b761e55cb6de1b14a0ae622ad84eb60599ef9b1d034e6d60cdf9bb0fc0"
			},
			"dob": "1962-03-18 02:07:03",
			"registered": "2010-01-08 18:01:32",
			"phone": "82466952",
			"cell": "67628929",
			"id": {
				"name": "CPR",
				"value": "120892-6123"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/66.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
			},
			"nat": "DK"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "charlie",
				"last": "frazier"
			},
			"location": {
				"street": "1281 london road",
				"city": "nottingham",
				"state": "cumbria",
				"postcode": "LT4E 3AW"
			},
			"email": "charlie.frazier@example.com",
			"login": {
				"username": "purpleladybug497",
				"password": "grandma",
				"salt": "3VbUJjDw",
				"md5": "5554ee28e07924535fdb5118b361dd68",
				"sha1": "39c14a53ae123ca8cb8ef6d59c30dc465883e315",
				"sha256": "b02e2f995610ee45f5152dbf89e459dfc3db9c59df6e8678d16ac9a47a1ef381"
			},
			"dob": "1987-05-03 13:04:56",
			"registered": "2016-02-23 11:41:39",
			"phone": "0191 417 3736",
			"cell": "0770-563-335",
			"id": {
				"name": "NINO",
				"value": "SY 22 71 15 Y"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/92.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
			},
			"nat": "GB"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "elliot",
				"last": "moulin"
			},
			"location": {
				"street": "7245 rue andré-gide",
				"city": "rennes",
				"state": "haut-rhin",
				"postcode": 48290
			},
			"email": "elliot.moulin@example.com",
			"login": {
				"username": "bigwolf976",
				"password": "whitey",
				"salt": "YRYmFaNR",
				"md5": "47d92649ba6b875f5859bb39946b4528",
				"sha1": "4902c725f3bb8bb8a35f29d8d8ec1f9cac474230",
				"sha256": "4dc72c2a94ec0fb220ebe375d556d475ac20e59284162cdad24510f3219b74b4"
			},
			"dob": "1986-09-25 13:56:49",
			"registered": "2004-05-30 18:12:25",
			"phone": "05-96-38-77-02",
			"cell": "06-15-57-39-72",
			"id": {
				"name": "INSEE",
				"value": "186880038316 92"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/16.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
			},
			"nat": "FR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "giray",
				"last": "nebioğlu"
			},
			"location": {
				"street": "1696 doktorlar cd",
				"city": "kocaeli",
				"state": "bilecik",
				"postcode": 30611
			},
			"email": "giray.nebioğlu@example.com",
			"login": {
				"username": "goldenfrog466",
				"password": "scanner",
				"salt": "5KyVzl2N",
				"md5": "cd64b3205afab64b87a71719a33070c8",
				"sha1": "0de5e1ab7c305f175567b028b37f33c2b943060a",
				"sha256": "544485abd584daf2b2121107d7d96a7b082ab9f6c3f8394001921d64f23118d8"
			},
			"dob": "1989-08-14 17:45:03",
			"registered": "2009-07-08 10:54:57",
			"phone": "(604)-883-0088",
			"cell": "(213)-274-7539",
			"id": {
				"name": "",
				"value": null
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/47.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
			},
			"nat": "TR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "marcus",
				"last": "evans"
			},
			"location": {
				"street": "3729 flaxmere ave",
				"city": "dunedin",
				"state": "auckland",
				"postcode": 44638
			},
			"email": "marcus.evans@example.com",
			"login": {
				"username": "silvergorilla490",
				"password": "quick",
				"salt": "TAEBCzWq",
				"md5": "f3057cb4e09e5d8ccadad517f812f6e7",
				"sha1": "049afdb320c1bfaf2fa59d11fbcc6919819ad4c1",
				"sha256": "8d0869b860c67f65bcea37a9dd870c51067ab99fa7c3457c4474332f2417e3d8"
			},
			"dob": "1962-03-23 04:27:15",
			"registered": "2013-06-03 14:40:33",
			"phone": "(537)-529-0577",
			"cell": "(238)-957-7584",
			"id": {
				"name": "",
				"value": null
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/4.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
			},
			"nat": "NZ"
		},
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "elya",
				"last": "dumont"
			},
			"location": {
				"street": "3428 rue de l'abbé-roger-derry",
				"city": "tourcoing",
				"state": "haute-vienne",
				"postcode": 17335
			},
			"email": "elya.dumont@example.com",
			"login": {
				"username": "orangegorilla757",
				"password": "seattle",
				"salt": "jBkoyTvv",
				"md5": "3e20f195467e7652e042f452c90453c0",
				"sha1": "e5176bbef18b993e043dfb84367331930a7be75d",
				"sha256": "d11bf79c4b533ab0019c4eed057683be801ab2cbda17f688b9495aee667b1a29"
			},
			"dob": "1987-06-23 01:49:37",
			"registered": "2016-04-30 12:03:47",
			"phone": "01-16-38-42-28",
			"cell": "06-85-74-29-97",
			"id": {
				"name": "INSEE",
				"value": "287535914513 61"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/37.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
			},
			"nat": "FR"
		}
	];

	this.selectedContact = this.contacts[0];

	this.selectContact = function (index) {
		this.selectedContact = this.contacts[index];
	}
});
