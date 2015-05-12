var bio = {
	"name" : "Robert Ryffel",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "314-444-1234",
		"email": "ziggy@prodigy.net",
		"github": "ziggy",
		"twitter": "@ziggy",
		"location": "St. Louis"
	},

	"welcome_message" : "lorem ipsum dolor sit amet etc etc etc",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
		],
	"bioPic" : "images/fry.jpg",
	
	"display" : function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").append(formattedMobile)
					 .append(formattedEmail)
					 .append(formattedGitHub)
					 .append(formattedTwitter)
					 .append(formattedLocation);

	$("#footerContacts").append(formattedMobile)
						.append(formattedEmail)
						.append(formattedGitHub)
						.append(formattedTwitter)
						.append(formattedLocation);
						
	$("#header").append(formattedBioPic).append(formattedWelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
	}
};

bio.display();

var education = {
	"schools": [
		{
			"name": "Boston College",
			"location": "Boston, Ma.",
			"degree": "BA",
			"majors": "Computer Science",
			"dates": "2003-2007",
			"url": "www.bc.edu"
		}
	],
		"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		}
	],
	"display": function(){
		for (var school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedEducationTitle = formattedName + formattedDegree + formattedCity;
			$(".education-entry:last").append(formattedEducationTitle);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}
		
		$("#education").append(HTMLonlineClasses);
		
		for (var course in education.onlineCourses){
			$("#education").append(HTMLonlineStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlinecourseTitle = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedOnlinecourseTitle);
			var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

education.display();

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "St. Louis, Mo.",
			"dates": "January 3000 - Future",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
		},
		{
			"employer": "Pizza Express",
			"title": "Delivery Boy",
			"location": "New York, NY.",
			"dates": "December 1998 - December 1999",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."

		}
	],
	"display": function(){
		for(job in work.jobs) 
		{
			//create new div for work experience
			$("#workExperience").append(HTMLworkStart);
		
			//concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
		
			var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
		
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}

};

work.display();

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			"images":["images/197x148.gif",	"images/197x148.gif"]
		}
		],
		"display" : function() {
			for(project in projects.projects){
				$("#projects").append(HTMLprojectStart);
					
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);
					
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);
					
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);
					
				if(projects.projects[project].images){
					for (image in projects.projects[project].images){
						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}
			
		}

};

projects.display();

function locationizer(work_obj){
	var locationArray=[];
	for (var job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
	
	//console.log(locationizer(work));
	
function inName(name){
	name = bio.name
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);
