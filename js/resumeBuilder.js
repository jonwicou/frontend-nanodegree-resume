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

        $("#header").prepend(formattedName,formattedRole);
        $("#header").append(formattedBiopic,formattedWelcomeMessage);
        // contacts
        $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
        //footer contacts
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
        //Connect
        $('#lets-connect > h2').html('<a href=mailto:jone_chan@163.com>Let\'s Connect</a>');

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
        "years": "4",
        "dates": "2011/10-2015/12",
        "location": "广州",
        "description": "制作咖啡和其他饮品，运营店铺，宣传和举办店铺活动，服务顾客"
    }],
    "display": function() {

        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            // 职位和公司名
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            // 工作时间
            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            // 工作内容
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            // 插入网页
            $(".work-entry:last").append(formattedEmployerTitle,formattedDate,formattedDescription);
        }
    }
};

work.display();

//Projects
var projects = {
    "projects": [{
        "title": "动物卡",
        "dates": "2017",
        "description": "这是一张介绍猎豹的卡片",
        "images": ["images/cheetah-412_small.png"]
    }, {
        "title": "My App",
        "dates": "2017",
        "description": "这是介绍My app的网页",
        "images": ["images/my_app-412_small.png"]
    }, {
        "title": "动画",
        "dates": "2017",
        "description": "蓝天白云，加上青青草原，白色的云朵会按照不同的速度从右边飘向左边",
        "images": ["images/sky_and_grass-412_small.png"]
    }],
    "display": function() {

        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            // 项目名称
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            // 项目时间
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            // 项目描述
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            // 插入网页
            $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
            //项目图片
            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImages);
                }
            }
        }
    }
};

projects.display();

//edu
var education = {
    "schools": [{
        "name": "广州大学华软软件学院",
        "degree": "大专",
        "majors": ["国际经济与贸易"],
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
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            //日期
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            //专业
            for (var j = 0; j < education.schools[i].majors.length; j++){
            	var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            }
            //地点
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            //URL


            //插入网页
            $(".education-entry:last").append(formattedNameDegree,formattedDates,formattedMajors,formattedLocation);

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
            $(".education-online-entry:last").append(formattedTitleSchool,formattedDates,formattedUrl);
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
