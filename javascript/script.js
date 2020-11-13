var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;color: rgb(74, 75, 87);font-size:2.0rem;text-decoration: none!important;}";
    document.body.appendChild(css);
};

    
$(function() {
    $('#toggle-icon').click(function() {
        if($("#menu").is(":visible"))
        {
            $('#menu').hide();

            $('.profession-id').show();
            $('#about').show();
            $('#skills').show();
            $('#education').show();
            $('#projects').show();
            $('#achivements').show();
            $('#contact').show();
            $('#intro').show();
            $('#footer').show();
            
        }
        else
        {
            $('#menu').show();
            
            $('.profession-id').hide();
            $('#about').hide();
            $('#skills').hide();
            $('#education').hide();
            $('#projects').hide();
            $('#achivements').hide();
            $('#contact').hide();
            $('#intro').hide();
            $('#footer').hide();
        }
        
        return false;
    });        
});


function myFunction() {
    $('#menu').hide();
    $('.profession-id').show();
    $('#about').show();
    $('#skills').show();
    $('#education').show();
    $('#projects').show();
    $('#achivements').show();
    $('#contact').show();
    $('#intro').show();
    $('#footer').show();
  }