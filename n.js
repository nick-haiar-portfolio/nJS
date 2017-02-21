//Greeter
//When given a first name, last name, and optional language, it generates formal and informal greetings
//Support English and Spanish
//Reusable library/framework
//Easy to type N$() structure.
//jQuery
//Window

(function( global, $ ) {

    var nJS = function(firstName, lastName, language) {
        return new nJS.init( firstName, lastName, language );
    };

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio de sesión'
    };

    nJS.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting()
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' +
                this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }

    };

    nJS.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    };

    nJS.init.prototype = nJS.prototype;

    global.nJS = global.N$ = nJS;

}(window, jQuery));
