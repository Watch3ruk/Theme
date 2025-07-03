require([
    'jquery',
    'slick'
], function($) {

    jQuery(window).on("load scroll", function(){
        if(jQuery(".ias-trigger.ias-trigger-next .load-more").length > 0){
            jQuery("#amasty-shopby-product-list").addClass("paddinglist");
        }else{
             jQuery("#amasty-shopby-product-list").removeClass("paddinglist");
        }    
    })
    // home page why choose thomas section
    $(document).ready(function() {

        jQuery(document).on("click",".amsearch-overlay-block, .amsearch-button.-close",function(){
            if(jQuery(this).hasClass(".amsearch-overlay-block")){
                jQuery(this).hide();
            }
            else{
                jQuery(".amsearch-overlay-block").hide();
            }
            jQuery(".amsearch-result-section").hide();   
        })
        jQuery(document).on("click keydown keyup",".amsearch-input", function(){
            if(jQuery(this).val().length < 2){
                jQuery(".amsearch-result-section").hide();
            }
            if(jQuery(this).val().length > 2){
                jQuery(".amsearch-result-section").show();   
            }
        })    
   

        $(document).on("change", function(){
                if($(".filter-button-mobile").length > 1){
                    $(".filter-button-mobile:gt(0)").remove();
                }
        })

            
        if(jQuery(".why-thomas-main.slick").length > 0){
            jQuery(".why-thomas-main.slick").slick({
                dots: true,
                infinite: false,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1.5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1.5,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
    
        }
     
        // footer toggle 
        jQuery(document).on('click', ".footer-main-container .footer-heading", function() {
            if (window.screen.width < 991) {
                jQuery(this).next().slideToggle();
            }
        })

        //header account icon
        jQuery(document).on("click", ".header-right #account", function() {
            account = jQuery(this).closest('.login-container').find(".custom_links");
            account.toggleClass("active");
        })

        // filter hide show 
        jQuery(document).on("click", ".filter-options .filter-options-title", function() {
            filterItems = jQuery(this).next();
            hide=false;
            if(filterItems.hasClass("show")){
                hide=true;
            }
            $(".filter-options-content").removeClass("show");
            if(hide){
                filterItems.removeClass("show");
            }
            else{
                filterItems.addClass("show");
            }
        })


        // qty increment decrement    
        var newVal,
            inrement = 1;
        jQuery(".btn-qty").click(function () {
            var button = jQuery(this),
                control = button.closest('.control');
                oldValue = button.closest('.control').find(".input-text.qty").val();
            if (button.hasClass('plus')) {
                newVal = parseFloat(oldValue) + inrement;
                button.closest('.control').find(".input-text.qty").val(newVal);
                button.closest('.control').find(".input-text.qty").attr('value',newVal);
                if(control.hasClass("qty")){
                    jQuery('.cart-item.qty').trigger("change");
                }
            } else {
                if (oldValue > 1) {
                    newVal = parseFloat(oldValue) - inrement;
                    button.closest('.control').find(".input-text.qty").val(newVal);
                    button.closest('.control').find(".input-text.qty").attr('value',newVal);
                    if(control.hasClass("qty")){
                        jQuery('.cart-item.qty').trigger("change");
                    }
                } 
            }
          

        });
 
        // cart button qty change
       
        jQuery(document).on("click",".more, .less",function(){
            var obj = jQuery(this);
            var currentQty = obj.siblings('.cart-item-qty').val();
            var iid = obj.siblings('.update-cart-item').attr('data-cart-item');

            if(obj.hasClass('more')){
                var newAdd = parseInt(currentQty)+parseInt(1);
                obj.siblings('.cart-item-qty').val(newAdd);
                obj.siblings('.cart-item-qty').attr('data-item-qty',newAdd);
                jQuery('.update-cart-item').show();
            } else {
                if(parseInt(currentQty) > 1){
                    var newAdd = parseInt(currentQty)-parseInt(1);
                    obj.siblings('.cart-item-qty').val(newAdd); 
                    obj.siblings('.cart-item-qty').attr('data-item-qty',newAdd);
                    jQuery('.update-cart-item').show();
                }
            }
        });
        // filter button toggle on mobile 
        jQuery(document).on('click', function(e){
            hidefilter=jQuery(e.target);
            if((jQuery(".filter-main-container").has(hidefilter).length == 1) ||  (jQuery(".filter-main-container").is(hidefilter) == true) || jQuery(".filter-button").is(hidefilter)){
                if(jQuery(".filter-button").is(hidefilter)){
                    console.log("drystore 1");
                    jQuery('body').addClass("show-filters");
                    jQuery('.block.filter').toggleClass('show-filter-mobile');
                }else{
                    // jQuery('.block.filter').addClass('show-filter-mobile');
                }
            }else{
                jQuery('.block.filter').removeClass('show-filter-mobile');
                jQuery('body').removeClass("show-filters");
            }
        })  

        jQuery(document).on("click", '[name="shippingAddress.street.0"] .field-note, [name="billingAddressshared.street.0"] .field-note' ,function(){
            jQuery(this).closest('.field').next().toggleClass("show");
        })

        hideproduct = setInterval(() => {
            if(! jQuery(".column.main .opc-block-summary .product-item").hasClass("hide")){
                jQuery(".column.main .opc-block-summary .product-item:gt(5)").addClass("hide");
            }
        }, 3000);
        
        jQuery(document).on("click",".opc-block-summary .cart-items-button",function(){
            if(jQuery(".column.main .opc-block-summary .product-item.hide").length > 0){
                clearInterval(hideproduct);
                jQuery(".column.main .opc-block-summary .product-item.hide").removeClass("hide");
                jQuery(this).addClass("active");
            }
        })

        // setUnit=setInterval(()=>{
        //     jQuery(".product-item-units").each(function(index){
        //        if(jQuery(this).text() == ''){
        //         jQuery(this).text(window.checkoutConfig.quoteItemData[index].product.units);
        //        }
        //     }) 
        // },500)
        // jQuery(".product-item-units").each(function(index){
        //     if(jQuery(this).text() != ''){
        //         clearInterval(setUnit);
        //     }
        // })

        // if(jQuery(".sidebar.sidebar-main .block.filter.filter-main").hasClass("show-filter-mobile")){
        //     jQuery(".sidebar.sidebar-main .block.filter.filter-main").removeClass("show-filter-mobile");
        // }   

        var z = 0;
        var intervalID = setInterval(function () {

            if(jQuery("#pas-no").is(":checked"))
            {
                jQuery('.action.action-edit-address.amcheckout-button').hide();
            }
            else{
                jQuery('.action.action-edit-address.amcheckout-button').show();
            }
            
            if (++z === 50) {
                window.clearInterval(intervalID);
            }
        }, 1000);

        var x = 0;
        if(window.checkoutConfig && !jQuery.isArray(window.checkoutConfig.customerData))
        {
            var intervalID1 = setInterval(function () {

                if(jQuery("#pas-no").is(":checked"))
                {
                    jQuery('.action.action-edit-address.amcheckout-button').hide();
                }
                else{
                    jQuery('.action.action-edit-address.amcheckout-button').show();
                }
                
                var elementClicked = false;
                jQuery(".payment-group .amcheckout-wrapper .radio").on("change", function(){
                    triggerUpdateBilling();
                });

                jQuery("#checkout-step-pas input[name=pickupatstore]").on("change", function(){
                    if(jQuery(this).val() == 1)
                    {
                        jQuery('#pas-date-selector').removeClass('mage-error');
                        jQuery("#pas-date-selector").val(0);
                        jQuery("#pas-time-selector").removeClass('mage-error');
                        jQuery("#pas-time-selector").remove();
                        triggerUpdateBilling(); 
                    }
                    else
                    {
                        console.log('sssssss');
                        jQuery("#pas-date-selector").val(0);
                        jQuery("#pas-time-selector").val(0);
                        jQuery("#pas-time-selector").remove();
                    }
                    
                });

                function triggerUpdateBilling()
                {
                    if(jQuery('select[name="billing_address_id"] option:selected').text() !== 'New Address')
                    {
                        if(jQuery(".checkout-index-index .checkout-billing-address button.action.action-update").length > 0)
                        {
                            jQuery(".checkout-index-index .checkout-billing-address button.action.action-update").trigger('click');
                            setTimeout(function() {
                                jQuery(".checkout-index-index .loading-mask").hide();
                            }, 4000);
                            elementClicked = true;
                        }
                    }
                }
                

                if(elementClicked)
                {
                    window.clearInterval(intervalID1);
                }
            }, 1000);
        }

    });
});