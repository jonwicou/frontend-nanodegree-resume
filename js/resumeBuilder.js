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
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome to visit my resume!",
    "skills": ["Html", "CSS", "JS", "Jquery", "BootStrap", "SEO"],
    "display": function() {
        //info
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        // contacts
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        // info of me
        $("#header").append(formattedBiopic);
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
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            var formattedSkills = null;

            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

bio.display();

//work
var work = {
    "jobs": [{
        "title": "咖啡师",
        "employer": "星巴克",
        "years": 4,
        "dates": "2011/10-2015/12",
        "location": "广州",
        "description": "制作咖啡和其他饮品，运营店铺，宣传和举办店铺活动，服务顾客"
    }],
    "display": function() {

        var formattedEmployer = null;
        var formattedTitle = null;
        var formattedEmployerTitle = null;
        var formattedDate = null;
        var formattedDescription = null;

        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            // 职位和公司名
            formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            formattedEmployerTitle = formattedEmployer + formattedTitle;
            // 工作时间
            formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            // 工作内容
            formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            // 插入网页
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

work.display();

//Projects
var project = {
    "projects": [{
        "title": "动物卡",
        "dates": 2017,
        "description": "这是一张介绍猎豹的卡片",
        "images": ["images/cheetah-412_small.png"]
    }, {
        "title": "My App",
        "dates": 2017,
        "description": "这是介绍My app的网页",
        "images": ["images/my_app-412_small.png"]
    }, {
        "title": "动画",
        "dates": 2017,
        "description": "蓝天白云，加上青青草原，白色的云朵会按照不同的速度从右边飘向左边",
        "images": ["images/sky_and_grass-412_small.png"]
    }],
    "display": function() {
        var formattedTitle = null;
        var formattedDates = null;
        var formattedDescription = null;
        var formattedImages = null;

        for (var i = 0; i < project.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            // 项目名称
            formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
            // 项目时间
            formattedDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
            // 项目描述
            formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
            // 插入网页
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            //项目图片
            if (project.projects[i].images.length > 0) {
                for (var j = 0; j < project.projects[i].images.length; j++) {
                    formattedImages = HTMLprojectImage.replace("%data%", project.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImages);
                }
            }
        }
    }
};

project.display();

//edu
var education = {
    "schools": [{
        "name": "广州大学华软软件学院",
        "degree": "大专",
        "majors": "国际经济与贸易",
        "dates": "2007-2010",
        "location": "广州",
        "url": "http://www.sise.com.cn/index.html"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "前端开发",
        "dates": "2017",
        "url": "http://youdaxue.com/"
    }],
    "display": function() {

        //schools
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            //学校和学位名称
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            //日期
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            //专业
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            //地点
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            //插入网页
            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedMajors);
            $(".education-entry:last").append(formattedLocation);
        }

        //onlineCourses
        for (var i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLonlineClasses);
            //专业和学校名称
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            //日期
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            //网址
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            //插入网页
            $(".education-online-entry:last").append(formattedTitleSchool);
            $(".education-online-entry:last").append(formattedDates);
            $(".education-online-entry:last").append(formattedUrl);
        }
    }
};

education.display();


// 检测点击坐标
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


//国际化名称按钮
$("#main").append(internationalizeButton);

//添加高德地图到 mapDiv 上，使得简历拥有地图
$("#mapDiv").append(googleMap);
