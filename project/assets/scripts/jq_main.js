 $(document).ready(function() {

     function processAjaxData(ajaxData, docTitle, urlPath) {
         $("#hero").html(ajaxData);
         document.title = docTitle;
         window.history.replaceState({"html": ajaxData, "pageTitle": docTitle}, "", urlPath);
         setSharingMedia();
     }

     window.onpopstate = function(ev) {
        if (ev.state) {
             $("#hero").html(ev.state.html);
            document.title = ev.state.pageTitle;
        }
     setSharingMedia();
    };

    // Set clicked navigation li as current and load the corresponding hero section content:
    $('.main-nav a').on('click', function (ev) {
        var newPath = $(this).text().trim().toLowerCase();
        // The tiny animal path name contains only the animal name, e.g. "tiny dog" is "dog"
        if (newPath.split(" ").length > 1) {
            newPath = newPath.split(" ")[1];
        }
		var currentLi = $('.current');
		currentLi.removeClass('current');
		$(this).parent().addClass('current');
        var newUrl = window.location.protocol + "//" + window.location.host + "/" + newPath + '/';

        // Make sure that we don't reload the entire page, but instead load the html of the corresponding hero section
        $.ajax({
            method: "GET",
            url: newUrl,
            dataType: "html",
            processData: false,
            success: function (data) {
                var heroData = $(data).find("#hero").html();
                var docTitle = $(data).filter("title").text();
                processAjaxData(heroData, docTitle, newUrl);
            },
        });
    });

    // Set sharing media links to current URL:
    function setSharingMedia() {
        var currentUrl = window.location.href,
        currentTitle = document.title,
        facebook = $('.share-facebook'),
        twitter = $('.share-twitter'),
        linkedin = $('.share-linkedin'),
        pinterest = $('.share-pinterest'),
        email = $('.share-email');
    facebook.attr('href', 'https://www.facebook.com/sharer.php?u=' + currentUrl + '&t=' + currentTitle);
    twitter.attr('href', 'https://twitter.com/share?text=' + currentTitle + '&url=' + currentUrl);
    linkedin.attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + currentUrl + '&title=' + currentTitle);
    pinterest.attr('href', 'https://www.pinterest.com/pin/create/link/?url=' + currentUrl +
        '&media=https%3A%2F%2Fkindmonster.cf%2Fimages%2Fwinter-amis%2Fwinter1.jpg&description=' + currentTitle);
    email.attr('href', 'mailto:?subject=' + currentTitle + '&body=' + currentUrl);
    };

    setSharingMedia();

});