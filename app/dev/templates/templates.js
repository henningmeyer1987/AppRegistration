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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/dev/templates/dashboard.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row content\">\n\t<div class=\"small-12 columns\">\n\t\t<h3>\n\t\t\tDashboard\n\t\t</h3>\n\t</div>\n</div>";
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
output += "<div class=\"row\">\n\t<div class=\"large-12 columns\">\n\t\t<h3>\n\t\tLogin\n\t\t</h3>\n\t\t<form id=\"form-login\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns\">\n\t\t\t\t\t<label for=\"username\" class=\"inline\">Name\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" />\n\t\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns\">\n\t\t\t\t\t<label for=\"password\" class=\"inline\" >Passwort\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" />\n\t\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\tLogin\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
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
output += "</a>\n\t\t\t<ul class=\"dropdown\">\n\t\t\t\t<li><a href=\"#logout\">Logout</a></li>\n\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t\t";
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
output += "<div class=\"row content\">\n\t<div class=\"large-12 columns\">\n\t\t<h3>\n\t\tBericht erstellen\n\t\t</h3>\n\t\t<form>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"reportDate\" class=\"right inline\">Berichtsdatum</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"reportDate\" id=\"reportDate\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"description\" class=\"right inline\" >Bericht</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<textarea name=\"description\" id=\"description\"></textarea>\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\t<i class=\"fa fa-file-text\"></i> Bericht erstellen\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
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
output += "<div class=\"row content\">\n\t<div class=\"large-12 columns\">\n\t\t<h2>\n\t\tRegistrierungsformular\n\t\t</h2>\n\t\t<form>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"username\" class=\"right inline\">Name</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"email\" class=\"right inline\">Email</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"text\" name=\"email\" id=\"email\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"password\" class=\"right inline\" >Passwort</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-3 columns\">\n\t\t\t\t\t<label for=\"password_confirmation\" class=\"right inline\" >Passwort wiederholen</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"small-9 columns\">\n\t\t\t\t\t<input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" />\n\t\t\t\t\t<small class=\"error hide\"></small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"small-12 columns text-right\">\n\t\t\t\t\t<button class=\"radius small button\" type=\"submit\">\n\t\t\t\t\tRegistrieren\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
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