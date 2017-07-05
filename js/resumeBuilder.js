/*
This is empty on purpose! Your code to build the resume will go here.
 */
//personal info
var bio = {
	"name": "Jon Chan",
	"role": "Web Developer",
	"contacts": {
		"mobile": "86-18520641642",
		"email": "jone_chan@163.com",
		"github": "jonwicou",
		"location": "广州"
	},
	"pictureURL": "images/fry.jpg",
	"welcomeMessage": "Welcome to visit my resume!",
	"skills": ["Html","CSS","JS","Jquery","BootStrap","SEO"]
};

//work
var work = {
	"jobs": [
		{
			"title": "咖啡师",
			"employer": "星巴克",
			"years": 4,
			"date": "2011/10-2015/12",
			"description": "制作咖啡和其他饮品，运营店铺，宣传和举办店铺活动，服务顾客"
		}
	]
};

var projects = {
	"projects":[
		{
			"title": "动物卡",
			"dates": 2017,
			"description": "这是一张介绍动物的卡片",
			"images": []
		}
	]
};

//edu
var education = {
	"schools" : [
		{
			"Name": "广州大学华软软件学院",
			"degree": "大专",
			"major": "国际经济与贸易",
			"date": "2007-2010",
			"location": "Canton",
			"url": "http://www.sise.com.cn/index.html"
		}
	],

	"onlineCourses": [
		{
			"Name": "Udacity",
			"degree": "纳米学位",
			"major": "前端开发",
			"date": "2017",
			"location": "The USA",
			"url": "http://youdaxue.com/"
		}
	]
};

//info
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPictureUrl = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

// contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


// info of me
$("#header").append(formattedPictureUrl);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// welcome
$("#header").append(formattedWelcomeMessage);

// contacts
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

//skills

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}

// work
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	// 职位和公司名
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	// 工作时间
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
	// 工作内容
	var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].description);

	// 插入网页
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDate);
	$(".work-entry:last").append(formattedDescription);
}
