$('[data-validate]').each(function(index,element){
    $(element).validate({
        errorPlacement: function(error, element) {
            var $parent = element.parent();
            $parent.append(error);
        },
        submitHandler: function(form){
            $(form).trigger('formSubmit');
        },
        onkeyup: function(element) {
            $(element).valid(); 
        }
    });
});
$('.js-form-step-1').on('formSubmit', function() {
    $('.js-step-one').hide()
    $('.js-step-two').show()
})
$('.js-form-step-2').on('formSubmit', function() {
    $('.js-step-two').hide()
    $('.js-step-three').show()
    var title = "";
    $('.js-generate-title').each(function() {
        if($(this).is('input, textarea')) {
            title += $(this).val();
        } else {
            title += $(this).text();
        }
        title += ' ';
    });
    $('.js-title').html(title)


    var text = "";
    $('.js-generate-text').each(function() {
        if($(this).is('input, textarea')) {
            text += $(this).val();
        } else {
            text += $(this).text();
        }
        text += ' ';
    })
    $('.js-text').html(text)
    $('.js-radio-pic, .js-radio-color').filter(':checked').trigger('change');
})
$('.js-form-step-3').on('formSubmit', function() {
    $('.js-step-three').hide()
    $('.js-step-four').show()
})


$('.js-radio-pic').on('change', function() {
    if($(this).prop('checked')) {
       var val = $(this).val()
       $('.js-wrap-contur').hide().filter('[data-target="'+val+'"]').show();
    }
});

$('.js-radio-color').on('change', function() {
    if($(this).prop('checked')) {
        var val = $(this).val();
        $('.js-wrap-contur').css('fill', val);
    }
});

$('.js-prev').on('click', function() {
    $(this).parents('.js-popup-mail').hide()
    $(this).parents('.js-popup-mail').prev().show()
    
});

$('textarea').on('input', function(){
    if($(this).val().length){
        $(this).addClass('is-size')
        $('.form__field-wrap').addClass('is-border-none')
    }else{
        $(this).removeClass('is-size')
        $('.form__field-wrap').removeClass('is-border-none')
    }
})
$('.js-inp').on('input', function(){
    if($(this).val().length){
        $(this).addClass('is-border-none')
    }else{
        $(this).removeClass('is-border-none')
    }
})


$('.js-popup').magnificPopup({
    removalDelay: 900,
    items: {
        src: '#one-popup',
        type: 'inline',
    },
    callbacks: {
        beforeOpen: function(){
            var scrollTop = $('html').scrollTop() || $('body').scrollTop() || $(document).scrollTop();
            $('body').css('padding-right', pr );
            $('html, body').addClass('is-hidden-mobile');
            $('html, body').scrollTop(scrollTop);
            $(document).scrollTop(scrollTop);
            $('#one-popup').removeClass('fade-Out').addClass('fade-In')
        },
        beforeClose: function(){
            var scrollTop = $('html').scrollTop() || $('body').scrollTop() || $(document).scrollTop();
            $('body').css('padding-right', '' );
            $('html, body').removeClass('is-hidden-mobile');
            $('html, body').scrollTop(scrollTop);
            $(document).scrollTop(scrollTop);
            $('#one-popup').removeClass('fade-In').addClass('fade-Out')
        },
    }
});

$('.js-popup-outside, .js-popup-close').on( "click", function() {
    $.magnificPopup.close()
});

$(document).on('closePopup', function(){
    $.magnificPopup.close();
    $('.form').each(function(index, elem){
        elem.reset();
        $(elem).find('textarea').trigger('input');
    })
})