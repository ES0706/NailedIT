var text = '{ "employees" : [' +
'{ "_id": "589448bef3afaf3da9c66672","eventID": 10,"index": 0,"guid": "45fa816e-c0ca-4ec2-954b-5b9243e54317","isActive": false,"balance": "2,437","age": 29,"name": "Janelle Hood","gender": "female","company": "APEX","email": "janellehood@apex.com","phone": "+1 (860) 501-2195","address": "321 Gunnison Court, Vicksburg, South Carolina, 6975","registered": "2015-10-31T03:29:26 -01:00"},' +
'{ "_id": "589448bef1b167e7680ce684","eventID": 4,"index": 1,"guid": "34566acc-c27e-4962-8220-228e3a2f1ed7","isActive": false,"balance": "2,688","age": 24,"name": "Jerry Blackburn","gender": "female","company": "PHARMACON","email": "jerryblackburn@pharmacon.com","phone": "+1 (846) 562-2807","address": "875 Poplar Avenue, Skyland, Maine, 4426","registered": "2015-08-16T03:15:39 -02:00" },' +
'{  "_id": "589448be0af70506f5fc8bde","eventID": 9,"index": 2,"guid": "a5ce893b-c819-449d-8c18-ed4da3c4dee6","isActive": true,"balance": "-2,702","age": 27,"name": "Bonnie Ratliff","gender": "female","company": "UNI","email": "bonnieratliff@uni.com","phone": "+1 (856) 585-3737","address": "749 Devon Avenue, Hinsdale, Palau, 618","registered": "2017-01-28T04:43:26 -01:00" },' +
'{"_id": "589448beaf20f284d4b9e9b0","eventID": 6,"index": 3,"guid": "6e8185a6-2f40-4e0a-a0b1-0af910938885","isActive": false,"balance": "2,148","age": 27,"name": "Margo Cole","gender": "female","company": "LUMBREX","email": "margocole@lumbrex.com","phone": "+1 (983) 407-2577","address": "506 Louisiana Avenue, Eggertsville, West Virginia, 3263","registered": "2016-12-29T10:07:13 -01:00"},' +
'{"_id": "589448be276ff43810f77db7",    "eventID": 3,   "index": 4,    "guid": "f4b7ffaa-3826-4880-be01-ee6bd54ab5e5",    "isActive": false,    "balance": "2,500",    "age": 30,    "name": "Scott Rivers",    "gender": "male",    "company": "MOTOVATE",    "email": "scottrivers@motovate.com",    "phone": "+1 (989) 400-3211",   "address": "923 Highland Boulevard, Ernstville, Alabama, 9846",    "registered": "2014-05-22T08:55:25 -02:00"},' +
'{ "_id": "589448be3018aae25216757f",    "eventID": 11,    "index": 5,    "guid": "f0482c79-f41e-49cc-803a-5f23413e230a",    "isActive": false,    "balance": "2,049",    "age": 23,    "name": "Lynnette Matthews",    "gender": "female",    "company": "GREEKER",    "email": "lynnettematthews@greeker.com",    "phone": "+1 (817) 484-2762",    "address": "745 Story Court, Takilma, Indiana, 7587",    "registered": "2015-04-24T04:28:11 -02:00" },' +
'{ "_id": "589448beb943b8f69be4607a",    "eventID": 1,    "index": 6,    "guid": "33e354ed-3152-41e7-988f-bd0b8fc7ace4",    "isActive": false,    "balance": "3,645",    "age": 26,    "name": "Casey Mckenzie",    "gender": "male",    "company": "CHILLIUM",    "email": "caseymckenzie@chillium.com",    "phone": "+1 (970) 425-3758",    "address": "189 Royce Street, Rivers, Utah, 8062",    "registered": "2016-01-04T06:57:35 -01:00"},' +
'{ "_id": "589448be6d47c2d5af46a142",    "eventID": 1,    "index": 7,    "guid": "6f4aaca6-5ea1-4bad-81f2-aad59d9d1491",    "isActive": true,    "balance": "-3,067",    "age": 38,    "name": "Roxanne Day",    "gender": "female",    "company": "POWERNET",    "email": "roxanneday@powernet.com",   "phone": "+1 (972) 448-3771",    "address": "592 Stillwell Avenue, Warsaw, Nevada, 2743",    "registered": "2016-08-22T02:14:48 -02:00"},' +
'{ "_id": "589448beb76d5abd63114dd8",    "eventID": 2,    "index": 8,    "guid": "2ebb4cfc-edf1-4740-afaf-e26af5ba3661",    "isActive": true,   "balance": "3,425",    "age": 24,    "name": "Colette Guthrie",    "gender": "female",    "company": "CAPSCREEN",    "email": "coletteguthrie@capscreen.com",    "phone": "+1 (954) 466-3030",    "address": "843 Cortelyou Road, Lemoyne, Florida, 2759",    "registered": "2016-04-07T05:04:58 -02:00" },' +
'{  "_id": "589448bebd3abe898b1fefd7",    "eventID": 5,    "index": 9,    "guid": "e42b3d58-771f-4ae2-b073-2eab98be3dc8",    "isActive": false,    "balance": "2,234",    "age": 36,    "name": "Roseann Weber",   "gender": "female",    "company": "ANACHO",    "email": "roseannweber@anacho.com",   "phone": "+1 (929) 442-3442",    "address": "535 Berkeley Place, Emerald, Arizona, 7783",    "registered": "2016-09-25T06:23:58 -02:00" },' +
'{  "_id": "589448be4be3faa1b520a44f",    "eventID": 7,    "index": 10,    "guid": "c75f90b3-323d-47b4-b8e8-1a8460ec0467",    "isActive": false,    "balance": "2,180",    "age": 23,    "name": "Cunningham Mullins",    "gender": "male",    "company": "LIQUIDOC",    "email": "cunninghammullins@liquidoc.com",    "phone": "+1 (887) 537-3746",    "address": "817 Chauncey Street, Neibert, California, 7122",    "registered": "2016-11-25T03:36:39 -01:00" },' +
'{ "_id": "589448be51b2570b5758b90d",    "eventID": 8,    "index": 11,    "guid": "33ec9587-cf82-4f62-8b85-4dfcf06f045d",    "isActive": false,    "balance": "2,198",    "age": 21,    "name": "Christensen Kirby",    "gender": "male",   "company": "ROUGHIES",    "email": "christensenkirby@roughies.com",    "phone": "+1 (922) 596-3538",    "address": "516 Atlantic Avenue, Muir, Virginia, 9597",    "registered": "2014-04-29T09:15:49 -02:00" },' +
'{"_id": "589448bed400aa594a69ca68",    "eventID": 9,    "index": 12,    "guid": "4da77ba2-be1d-4f80-9722-dd4499055769",    "isActive": true,    "balance": "2,044",    "age": 37,    "name": "Massey Boyer",    "gender": "male",    "company": "FUTURIS",   "email": "masseyboyer@futuris.com",    "phone": "+1 (869) 441-2535",    "address": "774 Bartlett Street, Elwood, Tennessee, 5863",    "registered": "2016-11-24T05:28:21 -01:00"},' +
'{ "_id": "589448be9309a938883a12f6",    "eventID": 4,    "index": 13,    "guid": "0c45ee0e-1c4d-4c74-9662-addecf712ff8",    "isActive": true,    "balance": "1,089",    "age": 34,    "name": "Mcintyre Jensen",   "gender": "male",    "company": "HAWKSTER",    "email": "mcintyrejensen@hawkster.com",    "phone": "+1 (837) 404-2725",    "address": "292 Elmwood Avenue, Bergoo, Federated States Of Micronesia, 3598",    "registered": "2016-07-15T07:29:25 -02:00" },' +
'{ "_id": "589448be6381f37d82f863aa",    "eventID": 10,    "index": 14,    "guid": "69b9adb9-d2f2-48cd-9863-25c504d4fa11",    "isActive": false,    "balance": "2,095",    "age": 25,    "name": "Bowers Shepard",    "gender": "male",    "company": "ECRATIC",    "email": "bowersshepard@ecratic.com",    "phone": "+1 (837) 418-2981",    "address": "742 Dank Court, Levant, Delaware, 483",    "registered": "2014-12-18T02:15:21 -01:00"},' +
'{  "_id": "589448bea61d71ed44059ed0",    "eventID": 9,    "index": 15,    "guid": "65d29af9-2d02-4ffc-88cc-c88e3c8c111f",    "isActive": true,    "balance": "3,911",    "age": 26,    "name": "Jessica Mills",    "gender": "female",   "company": "COGNICODE",    "email": "jessicamills@cognicode.com",    "phone": "+1 (924) 513-2312",   "address": "608 Kenmore Terrace, Century, Michigan, 8892",    "registered": "2014-12-22T10:26:49 -01:00" },' +
'{"_id": "589448be9e65d5f190eccc5c",    "eventID": 11,    "index": 16,    "guid": "723da54b-95c7-4c5a-9ac3-101813ed49a0",    "isActive": false,    "balance": "2,757",   "age": 22,   "name": "Nell Harrell",   "gender": "female",    "company": "HINWAY",    "email": "nellharrell@hinway.com",   "phone": "+1 (914) 585-2164",   "address": "541 Sheffield Avenue, Buxton, Maryland, 5134",   "registered": "2014-06-14T08:37:17 -02:00"},' +
'{"_id": "589448be1457382a69a3f04a",    "eventID": 6,    "index": 17,    "guid": "6db8c7a6-c5aa-43e3-afed-f3b9aec168e1",    "isActive": true,    "balance": "1,223",    "age": 32,   "name": "Mcdaniel Sheppard",    "gender": "male",    "company": "ZAGGLE",    "email": "mcdanielsheppard@zaggle.com",   "phone": "+1 (906) 478-2108",    "address": "352 Centre Street, Reno, New Jersey, 5983",    "registered": "2015-01-15T03:49:16 -01:00"},' +
'{ "_id": "589448be4bbce0cf3161b1d6",    "eventID": 7,    "index": 18,    "guid": "b386203b-9c23-4215-94eb-101bc9e192da",    "isActive": true,    "balance": "1,747",    "age": 23,    "name": "Valdez Sullivan",    "gender": "male",    "company": "COMSTRUCT",    "email": "valdezsullivan@comstruct.com",    "phone": "+1 (988) 520-2075",    "address": "554 Hubbard Place, Tuskahoma, Ohio, 2971",   "registered": "2015-12-29T11:11:29 -01:00"},' +
'{ "_id": "589448bede9be3d49fd92717",    "eventID": 9,    "index": 19,    "guid": "fb0344a2-6563-4098-9950-6f0c9c5b4b4e",    "isActive": true,    "balance": "2,374",    "age": 21,    "name": "Kenya Ellis",    "gender": "female",    "company": "ZENCO",    "email": "kenyaellis@zenco.com",    "phone": "+1 (881) 587-3775",   "address": "445 Tabor Court, Nash, Wyoming, 1879",    "registered": "2014-07-12T06:31:47 -02:00"},' +
'{"_id": "589448be98d9cac07483c2a3",    "eventID": 12,    "index": 20,    "guid": "e45d27dd-e121-45f0-94ed-0745b905b8d6",    "isActive": true,    "balance": "1,087",    "age": 30,   "name": "Patrice Gross",   "gender": "female",    "company": "ZEPITOPE",   "email": "patricegross@zepitope.com",   "phone": "+1 (877) 451-3987",   "address": "760 Macdougal Street, Fontanelle, Oklahoma, 1630",    "registered": "2014-09-14T02:35:35 -02:00"},' +
'{"_id": "589448befd990789064adba1",    "eventID": 8,   "index": 21,   "guid": "69ec3f4d-a581-42be-a36b-6ac5a5684d52",    "isActive": true,    "balance": "3,043",   "age": 40,   "name": "Marcy Blankenship",    "gender": "female",    "company": "BALUBA",    "email": "marcyblankenship@baluba.com",    "phone": "+1 (888) 456-3629",    "address": "662 Florence Avenue, Waikele, Kentucky, 296",    "registered": "2016-02-01T05:08:31 -01:00"},' +
'{"_id": "589448be7c5342cbb0cbbb84",    "eventID": 7,    "index": 22,    "guid": "ae27bdab-3896-4494-ae9b-af51fa8ccca9",    "isActive": false,    "balance": "1,096",    "age": 28,   "name": "Kristin Newman",    "gender": "female",    "company": "ISOPOP",    "email": "kristinnewman@isopop.com",    "phone": "+1 (867) 594-2047",    "address": "659 Henderson Walk, Nescatunga, Northern Mariana Islands, 6773",    "registered": "2014-07-16T02:24:23 -02:00"},' +
'{"_id": "589448be521fbe2749b0c382",    "eventID": 7,    "index": 23,    "guid": "03d6aeaa-baa9-476d-ba2a-52f5b1f5cfe7",   "isActive": false,   "balance": "1,246",   "age": 21,   "name": "Mejia Thompson",   "gender": "male",   "company": "KENGEN",   "email": "mejiathompson@kengen.com",    "phone": "+1 (985) 570-2837",    "address": "734 Neptune Avenue, Saranap, Wisconsin, 1131",    "registered": "2015-03-15T06:47:11 -01:00"},' +
'{"_id": "589448bed00eaa80b2e58f68",    "eventID": 11,    "index": 24,    "guid": "3f8232e0-3121-4f66-8515-92b3229e9058",    "isActive": false,    "balance": "3,564",    "age": 39,    "name": "Roxie Downs",   "gender": "female",    "company": "STEELTAB",    "email": "roxiedowns@steeltab.com",   "phone": "+1 (828) 403-2498",    "address": "384 Temple Court, Russellville, Missouri, 446",    "registered": "2015-04-14T01:32:44 -02:00"},' +
'{ "_id": "589448bef7e7481da28a79f3",   "eventID": 11,    "index": 25,    "guid": "9efec6b9-8c86-4f28-a16a-5f9b053655d1",    "isActive": true,    "balance": "1,975",    "age": 40,    "name": "Morris Small",    "gender": "male",    "company": "UNCORP",    "email": "morrissmall@uncorp.com",    "phone": "+1 (899) 595-3031",   "address": "506 Pilling Street, Bluffview, South Dakota, 5412",    "registered": "2014-07-15T12:38:49 -02:00"},' +
'{"_id": "589448bed52aa77e1fd984eb",    "eventID": 3,   "index": 26,   "guid": "fd07d126-9365-403b-b24a-df9298bb9770",    "isActive": true,    "balance": "2,558",    "age": 26,    "name": "Slater Bowen",    "gender": "male",    "company": "ZOINAGE",    "email": "slaterbowen@zoinage.com",   "phone": "+1 (845) 596-3217",    "address": "282 Schweikerts Walk, Bedias, Massachusetts, 625",   "registered": "2016-11-07T08:05:37 -01:00"},' +
'{"_id": "589448bed37b5ce3a663ed92",   "eventID": 9,   "index": 27,   "guid": "99200fa7-29f9-4c3b-b9a7-af4c4c72a9a3",    "isActive": false,   "balance": "1,070",    "age": 28,    "name": "Morton Parker",    "gender": "male",    "company": "GONKLE",    "email": "mortonparker@gonkle.com",    "phone": "+1 (987) 563-3518",   "address": "860 Johnson Street, Drummond, North Carolina, 9773",    "registered": "2015-06-25T06:45:30 -02:00"},' +
'{"_id": "589448bed8c1346756be73f0",    "eventID": 11,    "index": 28,    "guid": "fc03c81f-c6b8-4b5a-8cb0-3e1b869e2f71",    "isActive": true,    "balance": "1,634",    "age": 37,    "name": "Stewart Watkins",   "gender": "male",    "company": "MIRACULA",    "email": "stewartwatkins@miracula.com",    "phone": "+1 (828) 418-3819",    "address": "431 Mill Road, Loveland, Alaska, 3315",    "registered": "2015-12-23T08:12:37 -01:00"},' +
'{"_id": "589448be944e410a8699d989",   "eventID": 2,    "index": 29,    "guid": "109f7dd1-2730-4066-af41-f2b2f3d4c55a",    "isActive": false,    "balance": "2,905",    "age": 26,    "name": "Cortez Gill",    "gender": "male",    "company": "ULTRASURE",    "email": "cortezgill@ultrasure.com",    "phone": "+1 (851) 581-2009",    "address": "234 Sunnyside Avenue, Soham, New York, 3262",    "registered": "2016-08-15T08:14:01 -02:00"},' +
'{"_id": "589448be83392e46959c0ef3",   "eventID": 11,   "index": 30,   "guid": "db0b22be-42e4-4466-83fd-9e679aeaf302",   "isActive": true,   "balance": "2,593",   "age": 25,    "name": "Deann Conway",    "gender": "female",   "company": "KAGGLE",    "email": "deannconway@kaggle.com",    "phone": "+1 (934) 516-3290",    "address": "185 Hutchinson Court, Mansfield, Washington, 3251",   "registered": "2015-01-28T11:13:02 -01:00"},' +
'{"_id": "589448beded916121a4c896a",    "eventID": 10,    "index": 31,    "guid": "a59fc20d-9a74-4edd-be5f-5656bec3f26e",    "isActive": false,   "balance": "2,369",    "age": 40,    "name": "Karina Roman",    "gender": "female",   "company": "KENEGY",    "email": "karinaroman@kenegy.com",    "phone": "+1 (820) 524-2548",    "address": "799 Chester Street, Summertown, Illinois, 4959",    "registered": "2016-06-03T04:02:02 -02:00"},' +
'{"_id": "589448be7f3eee6fd083bc7b",    "eventID": 2,    "index": 32,    "guid": "7566e15c-4fed-48c7-894d-c07087513999",   "isActive": false,   "balance": "3,671",   "age": 34,    "name": "Brewer Shepherd",    "gender": "male",    "company": "DENTREX",    "email": "brewershepherd@dentrex.com",    "phone": "+1 (833) 488-3836",    "address": "974 Butler Street, Cedarville, Virgin Islands, 3737",    "registered": "2015-04-23T07:48:50 -02:00"} ]}';
var obj = JSON.parse(text);
var table = $(".tableMain");
var tableNegative = $(".tableNegative");
var tableInactive = $(".tableInactive");
var totalMoney1 = $(".totalMoney1");
var aboutP = $(".aboutP");
function main(){
var a = document.getElementsByClassName("tableMain")[0];
var r = document.getElementsByClassName ("tableNegative")[0];
var u = document.getElementsByClassName("tableInactive")[0];
	for(i=0;i<=32;i++){
	var p = document.createElement("tr");
	a.appendChild(p);
	var b = document.createElement("th");
	p.appendChild(b);
	b.innerHTML = obj.employees[i].index;
	var c = document.createElement("th");
	p.appendChild(c);
	c.innerHTML = obj.employees[i]._id;
	var d = document.createElement("th");
	p.appendChild(d);
	d.innerHTML = obj.employees[i].guid;
	var e = document.createElement("th");
	p.appendChild(e);
	e.innerHTML = obj.employees[i].isActive;
	var f = document.createElement("th");
	p.appendChild(f);
	f.innerHTML = obj.employees[i].name;
	var g = document.createElement("th");
	p.appendChild(g);
	g.innerHTML = obj.employees[i].gender;
	var h = document.createElement("th");
	p.appendChild(h);
	h.innerHTML = obj.employees[i].age;
	var j = document.createElement("th");
	p.appendChild(j);
	j.innerHTML = obj.employees[i].company;
	var k = document.createElement("th");
	p.appendChild(k);
	k.innerHTML = obj.employees[i].email;
	var l = document.createElement("th");
	p.appendChild(l);
	l.innerHTML = obj.employees[i].address;
	var m = document.createElement("th");
	p.appendChild(m);
	m.innerHTML = obj.employees[i].phone;
	var n = document.createElement("th");
	p.appendChild(n);
	n.innerHTML = obj.employees[i].registered;
	var o = document.createElement("th");
	p.appendChild(o);
	o.innerHTML = obj.employees[i].balance;
	}
	table.hide();

	for(i=0;i<=32;i++){
		var s = parseFloat(obj.employees[i].balance);
		if(s < 0){
			var p = document.createElement("tr");
	r.appendChild(p);
	var b = document.createElement("th");
	p.appendChild(b);
	b.innerHTML = obj.employees[i].index;
	var c = document.createElement("th");
	p.appendChild(c);
	c.innerHTML = obj.employees[i]._id;
	var d = document.createElement("th");
	p.appendChild(d);
	d.innerHTML = obj.employees[i].guid;
	var e = document.createElement("th");
	p.appendChild(e);
	e.innerHTML = obj.employees[i].isActive;
	var f = document.createElement("th");
	p.appendChild(f);
	f.innerHTML = obj.employees[i].name;
	var g = document.createElement("th");
	p.appendChild(g);
	g.innerHTML = obj.employees[i].gender;
	var h = document.createElement("th");
	p.appendChild(h);
	h.innerHTML = obj.employees[i].age;
	var j = document.createElement("th");
	p.appendChild(j);
	j.innerHTML = obj.employees[i].company;
	var k = document.createElement("th");
	p.appendChild(k);
	k.innerHTML = obj.employees[i].email;
	var l = document.createElement("th");
	p.appendChild(l);
	l.innerHTML = obj.employees[i].address;
	var m = document.createElement("th");
	p.appendChild(m);
	m.innerHTML = obj.employees[i].phone;
	var n = document.createElement("th");
	p.appendChild(n);
	n.innerHTML = obj.employees[i].registered;
	var o = document.createElement("th");
	p.appendChild(o);
	o.innerHTML = obj.employees[i].balance;
		}
	}
	tableNegative.hide();
	
	for(i=0;i<=32;i++){
    var activity = obj.employees[i].isActive;
	if(activity==false){
	var p = document.createElement("tr");
	u.appendChild(p);
	var b = document.createElement("th");
	p.appendChild(b);
	b.innerHTML = obj.employees[i].index;
	var c = document.createElement("th");
	p.appendChild(c);
	c.innerHTML = obj.employees[i]._id;
	var d = document.createElement("th");
	p.appendChild(d);
	d.innerHTML = obj.employees[i].guid;
	var e = document.createElement("th");
	p.appendChild(e);
	e.innerHTML = obj.employees[i].isActive;
	var f = document.createElement("th");
	p.appendChild(f);
	f.innerHTML = obj.employees[i].name;
	var g = document.createElement("th");
	p.appendChild(g);
	g.innerHTML = obj.employees[i].gender;
	var h = document.createElement("th");
	p.appendChild(h);
	h.innerHTML = obj.employees[i].age;
	var j = document.createElement("th");
	p.appendChild(j);
	j.innerHTML = obj.employees[i].company;
	var k = document.createElement("th");
	p.appendChild(k);
	k.innerHTML = obj.employees[i].email;
	var l = document.createElement("th");
	p.appendChild(l);
	l.innerHTML = obj.employees[i].address;
	var m = document.createElement("th");
	p.appendChild(m);
	m.innerHTML = obj.employees[i].phone;
	var n = document.createElement("th");
	p.appendChild(n);
	n.innerHTML = obj.employees[i].registered;
	var o = document.createElement("th");
	p.appendChild(o);
	o.innerHTML = obj.employees[i].balance;
	var q = document.createElement("th");
	p.appendChild(q);
	var conversion = convertMoney(i);
	q.innerHTML = conversion*100;
	}
	}
	tableInactive.hide();
	
	var x = 0;
	for(i=0;i<=32;i++){
		var d = convertMoney(i);
		x += d*1000;
	}
	var y = document.getElementsByClassName("totalMoney1")[0];
	y.innerHTML = "Total money balance of customers: " + x;
  totalMoney1.hide();
  
  var aboutT = document.getElementsByClassName("aboutP")[0];
  aboutT.innerHTML = "Created by : Erik Schmidt";
  
  
	}

	
function customers() {
	table.show();
	tableNegative.hide();
	tableInactive.hide();
	totalMoney1.hide();
	aboutP.hide();
   }
   
function customersNegative() {
	table.hide();
	tableInactive.hide();
	tableNegative.show();
	totalMoney1.hide();
	aboutP.hide();
}   
function inactiveUsers() {
	table.hide();
	tableNegative.hide();
	tableInactive.show();
	totalMoney1.hide();
	aboutP.hide();
}


function totalMoney(){
	table.hide();
	tableNegative.hide();
	tableInactive.hide();
	totalMoney1.show();
	aboutP.hide();
}
function convertMoney(i){
	var a = obj.employees[i].balance;
	var b = a.replace(",", ".");
	var c = parseFloat(b);
	return c;
}
function about(){
	table.hide();
	tableNegative.hide();
	tableInactive.hide();
	aboutP.show();
}
document.ready(main());