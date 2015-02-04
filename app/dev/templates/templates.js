(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/index.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!doctype html>\n<html>\n\t<head>\n\t\t<title>\n\t\tAppRegistration\n\t\t</title>\n\t\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<meta name=\"mobile-web-app-capable\" content=\"yes\">\n\t\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n\t\t<link rel=\"stylesheet\" href=\"stylesheets/app.css\" type=\"text/css\" />\n\t</head>\n\t<body>\n\t\t<div id=\"js-top-region\">\n\t\t</div>\n\t\t<div id=\"js-content-region\">\n\t\t</div>\n\t\t<script src=\"js/app.js\" type=\"text/javascript\"></script>\n\t</body>\n</html>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/confirmation.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/dashboard.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row content\">\n\t<div class=\"small-12 columns\">\n\t\t<h3>\n\t\t\tBerichte Übersicht\n\t\t</h3>\n\t</div>\n</div>\n<div class=\"row\">\n\t<table>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th width=\"300px\">\n\t\t\t\t\tBerichtsdatum\n\t\t\t\t</th>\n\t\t\t\t<th width=\"1500px\">\n\t\t\t\t\tBericht\n\t\t\t\t</th>\n\t\t\t\t<th width=\"300px\">\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "reports");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("report", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 25, colno = 15, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report[\"get\"]", ["reportdate"])), env.autoesc);
output += "\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 15, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report[\"get\"]", ["description"])), env.autoesc);
output += "\n\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<ul class=\"button-group round\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"button small success report-edit fa fa-pencil-square-o\" reportID=\"";
output += runtime.suppressValue((lineno = 34, colno = 93, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report[\"get\"]", ["id"])), env.autoesc);
output += "\"></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"button small alert report-delete fa fa-trash-o\" reportID=\"";
output += runtime.suppressValue((lineno = 37, colno = 85, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report[\"get\"]", ["id"])), env.autoesc);
output += "\"></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t</tbody>\n\t</table>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/home.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row content\">\n\t<div class=\"small-8 columns\">\n\t\t<h3>\n\t\t\tDies ist die Startseite\n\t\t</h3>\n\t</div>\n\t<div class=\"small-4 columns\" id=\"js-login-region\">\n\t\tLogin\n\t</div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/login.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n\t<div class=\"large-12 columns\">\n\t\t<h3>\n\t\tLogin\n\t\t</h3>\n\t\t<form id=\"form-login\">\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-12 columns\">\n\t\t\t\t\t<label for=\"username\" class=\"inline\">Name\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" />\n\t\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-12 columns\">\n\t\t\t\t\t<label for=\"password\" class=\"inline\" >Passwort\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" />\n\t\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\tLogin\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/navigation.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<nav class=\"top-bar\" data-topbar role=\"navigation\">\n\t<ul class=\"title-area\">\n\t\t<li class=\"name\">\n\t\t\t<h1><a href=\"#home\"><i class=\"fa fa-home\"></i> Home</a></h1>\n\t\t</li>\n\t\t<li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span>Menu</span></a></li>\n\t</ul>\n\t<section class=\"top-bar-section\">\n\t\t<ul class=\"left\">\n\t\t\t";
if(!(lineno = 9, colno = 19, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"get", env.autoesc), "user[\"get\"]", ["username"]))) {
output += "\n\t\t\t<li><a href=\"#signup\"><i class=\"fa fa-sign-out\"></i> Registrieren</a></li>\n\t\t\t";
;
}
else {
output += "\n\t\t\t<li><a href=\"#reports\"><i class=\"fa fa-floppy-o\"></i> Bericht erstellen</a></li>\n\t\t\t";
;
}
output += "\n\t\t</ul>\n\t\t";
if((lineno = 15, colno = 14, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"get", env.autoesc), "user[\"get\"]", ["username"]))) {
output += "\n\t\t<ul class=\"right\">\n\t\t\t<li class=\"has-dropdown\">\n\t\t\t<a href=\"#\"><i class=\"fa fa-user\"></i> ";
output += runtime.suppressValue((lineno = 18, colno = 50, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"get", env.autoesc), "user[\"get\"]", ["username"])), env.autoesc);
output += "</a>\n\t\t\t<ul class=\"dropdown\">\n\t\t\t\t<li><a href=\"#\">Profil ändern</a></li>\n\t\t\t\t<li><a href=\"#\">Email ändern</a></li>\n\t\t\t\t<li><a href=\"#\">Passwort ändern</a></li>\n\t\t\t\t<li><a href=\"#logout\">Logout</a></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t\t";
;
}
output += "\n\t</section>\n</nav>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/reports.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row content reports\">\n\t<div class=\"large-12 columns\">\n\t\t<h3>\n\t\tBericht erstellen\n\t\t</h3>\n\t\t<form class=\"custom\">\n\t\t\t<div class=\"row form-row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"reportdate\" class=\"right inline\">Berichtsdatum</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"reportdate\" id=\"reportdate\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row form-row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"description\" class=\"right inline\" >Bericht</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<textarea name=\"description\" id=\"description\"></textarea>\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row form-row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"reporttype\" class=\"right\">Berichtsart</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "report_types");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("report_type", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t<input ";
if((lineno = 30, colno = 32, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])) == "work") {
output += " checked='checked' ";
;
}
output += " type=\"radio\" name=\"typeid\" id=\"";
output += runtime.suppressValue((lineno = 30, colno = 127, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])), env.autoesc);
output += "\" value=\"";
output += runtime.suppressValue((lineno = 30, colno = 163, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["id"])), env.autoesc);
output += "\">\n\t\t\t\t\t\t<label for=\"";
output += runtime.suppressValue((lineno = 31, colno = 33, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])), env.autoesc);
output += "\">";
output += runtime.suppressValue((lineno = 31, colno = 62, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])), env.autoesc);
output += "</label>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\t<i class=\"fa fa-file-text\"></i> Bericht erstellen\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/reports_update.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row content reports\">\n\t<div class=\"large-12 columns\">\n\t\t<h3>\n\t\tBericht verändern\n\t\t</h3>\n\t\t<form class=\"custom\">\n\t\t\t<div class=\"row form-row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"reportdate\" class=\"right inline\">Berichtsdatum</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"reportdate\" id=\"reportdate\" value=\"\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row form-row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"description\" class=\"right inline\" >Bericht</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<textarea name=\"description\" id=\"description\"></textarea>\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row form-row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"reporttype\" class=\"right\">Berichtsart</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "report_types");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("report_type", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t<input ";
if((lineno = 30, colno = 32, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])) == "work") {
output += " checked='checked' ";
;
}
output += " type=\"radio\" name=\"typeid\" id=\"";
output += runtime.suppressValue((lineno = 30, colno = 127, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])), env.autoesc);
output += "\" value=\"";
output += runtime.suppressValue((lineno = 30, colno = 163, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["id"])), env.autoesc);
output += "\">\n\t\t\t\t\t\t<label for=\"";
output += runtime.suppressValue((lineno = 31, colno = 33, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])), env.autoesc);
output += "\">";
output += runtime.suppressValue((lineno = 31, colno = 62, runtime.callWrap(runtime.memberLookup((t_4),"get", env.autoesc), "report_type[\"get\"]", ["typename"])), env.autoesc);
output += "</label>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\t<i class=\"fa fa-file-text\"></i> Bericht verändern\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/signup.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row content\">\n\t<div class=\"large-12 columns\">\n\t\t<h2>\n\t\tRegistrierungsformular\n\t\t</h2>\n\t\t<form>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"username\" class=\"right inline\">Email</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"firstname\" class=\"right inline\">Vorname</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"firstname\" id=\"firstname\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"lastname\" class=\"right inline\">Nachname</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"lastname\" id=\"lastname\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"apprenticeshipstart\" class=\"right inline\">Ausbildungsbeginn</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"apprenticeshipstart\" id=\"apprenticeshipstart\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"apprenticeshipend\" class=\"right inline\">Ausbildungsende</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"apprenticeshipend\" id=\"apprenticeshipend\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"password\" class=\"right inline\" >Passwort</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"password_confirmation\" class=\"right inline\" >Passwort wiederholen</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\tRegistrieren\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
