require(['jquery', 'jquery/ui'], function($) {
    jQuery(document).ready(function() {
        jQuery(document).on("click", "li a.ms-label", function(){
            if(window.screen.width < 1999){
                if(jQuery(this).parent().hasClass("nav-11") || jQuery(this).parent().hasClass("nav-12")){
                    jQuery("#ms-topmenu > li").hide();
                    jQuery(this).hide();
                    if(jQuery(this).parent().hasClass("nav-11")){
                        jQuery("#nav-11").show();
                        jQuery("#nav-11 .mb-submenu.slide").show();
                    }
                    if(jQuery(this).parent().hasClass("nav-12")){
                        jQuery("#nav-12").show();
                        jQuery("#nav-12 .mb-submenu.slide").show();
                    }
                }
            }
        })
        jQuery(document).on("click","span.first-level.child-category" , function(){
            if(window.screen.width < 1999){
                jQuery("#ms-topmenu > li").show();
                parentList=jQuery(this).closest("li.ms-level0");
                if(parentList.hasClass("nav-11")){
                    jQuery("#nav-11 .ms-label").show();
                    jQuery("#nav-11 .mb-submenu.slide").hide();
                }
                if(parentList.hasClass("nav-12")){
                    jQuery("#nav-12 .ms-label").show();
                    jQuery("#nav-12 .mb-submenu.slide").hide();
                }
            }
        })

        jQuery(document).on("click", function(e) {
            if (jQuery(e.target).is(".action.nav-toggle") === true ) {
               if(jQuery("span.first-level.child-category").hasClass("active")){
                    jQuery("#ms-topmenu > li").show();
                    jQuery("#nav-11 .ms-label").show();
                    jQuery("#nav-11 .mb-submenu.slide").hide();
            
                    jQuery("#nav-12 .ms-label").show();
                    jQuery("#nav-12 .mb-submenu.slide").hide();
                    
                }
            }
        })
        
        var isMobile = false;
        if (window.matchMedia("(max-width: 1199px)").matches) {
            isMobile = true;
        }

        if(isMobile)
        {
            if(!jQuery('.sub-menu.shop-section ul.level').hasClass('submenu-reverse'))
            {
                jQuery('.sub-menu.shop-section ul.level').addClass('submenu-reverse')
            }
        }

        var win = $(window);

        resizeHandler();

        win.resize(resizeHandler);

        function resizeHandler(e) {

            $(document).on("mouseover", "#ms-topmenu .ms-level0", function() {
                $('body').addClass("menuactive");
                $(this).addClass("active");
            });

            $(document).on("mouseleave", "#ms-topmenu .ms-level0", function() {
                $(this).removeClass("active");
            })

            $(document).on("click", ".back-firststep", function(event) {
                // console.log("menu here 1");
                $('ul.alwayshow').removeClass('subactive');
                $('ul.level.level-2').removeClass('sub-subactive');
                // $('ul.level.level-3').removeClass('sub-subactive-last');
                $(".ms-topmenu .ms-level0").removeClass("mbactive");
                $(".mb-submenu.blind").hide();
            });
        }



        var ua = navigator.userAgent,
            eventIphone = (ua.match(/iPad/i) || ua.match(/iPhone/)) ? "touchend" : "click";


        $(document).on("click", function(e) {

            if ($(e.target).is(".ms-submenu") === true) {
                // console.log("menu here 2");
                $("body nav.navigation.ms-megamenu .ms-topmenu li a").removeClass("ui-state-focus");
                $("body nav.navigation.ms-megamenu .ms-topmenu li").removeClass("active");
                $("body nav.navigation.ms-megamenu .ms-topmenu li .ms-submenu").css("display", "none");
                $("body").removeClass("menuactive");
                $('ul.alwayshow').removeClass('subactive');
                $('ul.level.level-2').removeClass('sub-subactive');
                // $('ul.level.level-3').removeClass('sub-subactive-last');
                $('#ms-topmenu li').removeClass('mbactive');
            }

            if ($(e.target).is("nav.navigation.ms-megamenu .ms-topmenu li .ms-submenu .col-xs-12.col-level") === false) {
                if($(e.target).is("span.backstep-active") ===false){
                    // console.log("menu here 3");
                    $("body nav.navigation.ms-megamenu .ms-topmenu li a").removeClass("ui-state-focus");
                    $("body nav.navigation.ms-megamenu .ms-topmenu li").removeClass("active");
                    $("body nav.navigation.ms-megamenu .ms-topmenu li .ms-submenu").css("display", "none");
                    $("body").removeClass("menuactive");
                    if (isMobile == true) {
                        $("body nav.navigation.ms-megamenu .ms-topmenu li .shop.back-firststep").show();
                        $("body nav.navigation.ms-megamenu .ms-topmenu li .shop-all-link").show();
                    }
                }
            }

            if ($(e.target).is(".ms-topmenu .sub-menu ul li a") === false && $(e.target).is(".ms-topmenu span.mb-label") === false && $(e.target).is("span.ui-menu-icon.ui-icon.ui-icon-carat-1-e") === false && $(e.target).is("li.backstep") ===false && $(e.target).is("span.backstep-active") ===false) {
                // console.log("menu here 4");
                $('ul.alwayshow').removeClass('subactive');
                $('ul.level.level-2').removeClass('sub-subactive');
                // $('ul.level.level-3').removeClass('sub-subactive-last');
                // $('#ms-topmenu li').removeClass('mbactive');
            }
            if ($(e.target).is(".ms-topmenu .sub-menu ul li a") === false && $(e.target).is(".ms-topmenu span.mb-label") === false && $(e.target).is("span.ui-menu-icon.ui-icon.ui-icon-carat-1-e") === false && $(e.target).is(".sections.nav-sections") === false && $(e.target).is("li.backstep") ===false && $(e.target).is("span.backstep-active")=== false) {
                // console.log("menu here 5");
                $('ul.alwayshow').removeClass('subactive');
                $('ul.level.level-2').removeClass('sub-subactive');
                // $('ul.level.level-3').removeClass('sub-subactive-last');
                $(".ms-topmenu .ms-level0").removeClass("mbactive");
                $(".mb-submenu.blind").hide();

                // $("body nav.navigation.ms-megamenu .ms-topmenu li a").removeClass("ui-state-focus");
                // $("body nav.navigation.ms-megamenu .ms-topmenu li").removeClass("active");
            }

        });

        if(isMobile)
        {

            jQuery(document).on(eventIphone , ".hide-on-desktop", function(event){

                event.preventDefault();

                var href = jQuery(this).find('> a').attr('href');
                window.location.href = href;
                
            });

            jQuery(document).on(eventIphone , ".sub-menu.shop-section ul.level li", function(event){

                event.preventDefault();

                if(!jQuery(this).hasClass('parent-category-mobile'))
                {
                    var href = jQuery(this).find('a').attr('href');
                    window.location.href = href;
                }
                
            });
        }

        jQuery(document).on(eventIphone , ".backstep", function(event){

            event.preventDefault();

            parentList=jQuery(this).closest("li.parent-category-mobile");
            parentList.removeClass("arrow-down");
            parentList.find(".ui-state-active").removeClass(".ui-state-active");
            parentList.find(".sub-subactive").removeClass("sub-subactive");
            
        });

        jQuery(document).on(eventIphone , ".backstep-child", function(event){

            event.preventDefault();

            parentList=jQuery(this).closest("ul.level-3.sub-subactive");
            parentList.addClass("sub-subactive-check");
            parentList.removeClass("sub-subactive");
            
        });


        jQuery(document).on(eventIphone, function(e) {

            if (jQuery(e.target).is("ul.sub-subactive > .ui-menu-item > a + span.ui-menu-icon") === true) {
                event.preventDefault();
                var target = jQuery(e.target).closest(".ui-menu-item");
                // console.log("menu here 6");
                if (target.has('span.ui-menu-icon').length) {

                    var href = target.find('> a').attr('href');
                    // jQuery('ul.level.level-3').removeClass('sub-subactive-last');
                    // target.find('a + span.ui-menu-icon + ul.level.level-3').addClass('sub-subactive-last');
                    // if (jQuery(".shopall")[0]) {
                    //     jQuery(".shopall").remove();
                    // }
                    // jQuery("<a class='shopall back-secondstep' href='" + href + "'> Shop All</a>").prependTo(target.find('a + span.ui-menu-icon + ul.level.level-3'));
                }
            } else if (jQuery(e.target).is("ul.subactive > .ui-menu-item > a + span.ui-menu-icon") === true) {
                event.preventDefault();
                // console.log("menu here 7");

                var target = jQuery(e.target).closest(".ui-menu-item");
                if (target.has("span.ui-menu-icon").length) {

                    if (!target.find('a + span.ui-menu-icon + ul.level.level-2').hasClass('sub-subactive')) {
                        target.find('a + span.ui-menu-icon').removeClass('ui-state-active');
                    } else {
                        target.find('a + span.ui-menu-icon').addClass('ui-state-active');
                    }

                    // jQuery("ul.level.level-2").removeClass("sub-subactive");
                    // target.find("a + span.ui-menu-icon + ul.level.level-2").addClass("sub-subactive");  
                }

            } else if (jQuery(e.target).is("ul.subactive > .ui-menu-item > a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2 + span.ui-menu-icon") == true) {
                event.preventDefault();
                // console.log("menu here 8");

                var target = jQuery(e.target).closest(".ui-menu-item");
                if (target.has("span.ui-menu-icon").length) {

                    // jQuery("ul.level.level-2").removeClass("sub-subactive");


                    if (!target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2').hasClass('sub-subactive') && !target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2 + span.ui-menu-icon + ul.level.level-2').hasClass('sub-subactive')) {
                        target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2').removeClass('sub-subactive');
                        target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2 + span.ui-menu-icon + ul.level.level-2').removeClass('sub-subactive');

                        target.find('a + span.menu-has-products + span.ui-menu-icon').removeClass('ui-state-active');
                        target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2 + span.ui-menu-icon').removeClass('ui-state-active');

                    } else {
                        target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2').addClass('sub-subactive');
                        target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2 + span.ui-menu-icon + ul.level.level-2').addClass('sub-subactive');

                        target.find('a + span.menu-has-products + span.ui-menu-icon').addClass('ui-state-active');
                        target.find('a + span.menu-has-products + span.ui-menu-icon + ul.level.level-2 + span.ui-menu-icon').addClass('ui-state-active');
                    }
                }
            } else if (jQuery(e.target).is(".ms-topmenu span.mb-label.fa.glyphicon-chevron-right") === true) {
                // console.log("menu here 9");
                jQuery("body nav.navigation.ms-megamenu .ms-topmenu li a").removeClass("ui-state-focus");
                jQuery("body nav.navigation.ms-megamenu .ms-topmenu li").removeClass("active");
                jQuery("body nav.navigation.ms-megamenu .ms-topmenu li .ms-submenu").css("display", "none");
                jQuery("body").removeClass("menuactive");
                if (isMobile == true) {
                    jQuery("body nav.navigation.ms-megamenu .ms-topmenu li .shop.back-firststep").show();
                    jQuery("body nav.navigation.ms-megamenu .ms-topmenu li .shop-all-link").show();
                }
            } else if (jQuery(e.target).is(".ms-topmenu .sub-menu ul li a") === true && jQuery(e.target).is(".ms-topmenu .sub-menu .shopall.back-secondstep") === false) {

                // var target = jQuery(e.target).closest(".ui-menu-item");                    
                // window.location.href = target.find('> a').attr('href');

            }

        });

         // child navignation menu

    

        // if (isMobile) {
        //     var ua = navigator.userAgent;
        //     if ((ua.match(/iPad/i) || ua.match(/iPhone/))) {

        //         $(document).on("touchmove scroll", "#ms-topmenu .sub-menu .ui-menu-item a", function(e) {
        //             e.preventDefault();
        //             return false;

        //         });
        //     }

        // }

        // $(document).on("click", "#ms-topmenu span.mb-label", function() {
        //     if(window.screen.width < 768){
        //         parentli = $(this).parent();
        //         parentli.addClass("mbactive");
        //         $(".mb-submenu.blind").show();
        //         childlist = parentli.find(".mb-submenu.ui-menu-item-wrapper ul.alwayshow");
        //         if (childlist.hasClass("subactive")) {
        //             childlist.removeClass("subactive");
        //         } else {
        //             childlist.addClass("subactive");
        //         }
        //     }
        // })

        // jQuery("#ms-topmenu .ms-level0").on("mouseleave", function() {
        //     jQuery(this).removeClass("active");
        // })

        // jQuery(document).on("click", ".ui-menu-icon", function(){
        //     if(window.screen.width < 768){
        //         $(this).toggleClass("active");
        //         parentul=jQuery(this).closest("ul");
        //         parentlist=jQuery(this).closest("li");
        //         if(parentul.hasClass("level-1")){
        //             parentul.find(".level.level-3").removeClass("sub-sub-subactive");
        //             parentul.find(".level.level-4").removeClass("sub-sub-sub-subactive");
        //             childlist=parentlist.find(".level.level-2");
        //             childlist.toggleClass("sub-subactive");
        //         } 
        //         if(parentul.hasClass("level-2")){
        //             parentul.find(".level.level-4").removeClass("sub-sub-sub-subactive");
        //             childlist=parentlist.find(".level.level-3");
        //             childlist.toggleClass("sub-sub-subactive");
        //         }
        //         if(parentul.hasClass("level-3")){
        //             childlist=parentlist.find(".level.level-4");
        //             childlist.toggleClass("sub-sub-sub-subactive");
        //         }
        //     }
        // })
        // jQuery(document).on("click",".ms-label", function(){
        //     if(window.screen.width < 768){
        //         jQuery(".level.level-2").removeClass("sub-subactive");
        //         jQuery(".level.level-3").removeClass("sub-sub-subactive");
        //         jQuery(".level.level-4").removeClass("sub-sub-sub-subactive");
        //     }
        // })
        // jQuery(document).on("change",function(){
        //     if(window.screen.width < 768){
        //         if(jQuery(".mbactive").length < 1){
        //             jQuery(".level.level-2").removeClass("sub-subactive");
        //             jQuery(".level.level-3").removeClass("sub-sub-subactive");
        //             jQuery(".level.level-4").removeClass("sub-sub-sub-subactive");
        //         }
        //     }
        // })

        // jQuery(document).on('click', ".shop.back-firststep" , function(){
        //     if(window.screen.width <768){
        //     main=jQuery(this).closest("li.ui-menu-item");
        //     main.find(".ms-submenu").removeClass("ui-state-active");
        //     main.find(".mb-submenu").removeClass("ui-state-active");
        //     main.find(".ms-label").removeClass("ui-state-active");
        //     main.find(".mb-label").removeClass("ui-state-active");
        // }})

  
    })
})