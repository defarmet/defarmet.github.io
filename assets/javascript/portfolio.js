function load_project(name)
{
	var project = $("<div>").addClass("col-md-6");
	var project_name = $("<div>").text(name);
	project_name.addClass("w-100 text-center position-relative project");
	var a = $("<a>").addClass("text-decoration-none");
	a.attr("href", name + ".html").append(project_name);
	$(".card-body").append(project.append(a));
}

load_project("RPS-Multiplayer");
load_project("Wolf-React");
load_project("LibWolf");
load_project("Simple Wolf");
