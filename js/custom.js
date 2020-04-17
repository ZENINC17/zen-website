(function( $ ) {

    'use strict';
    
    $('.click-link').click(function(){
        alert("aaa")
        const self = this;
        const url = $(self).attr('data-url');
        
        alert(url)
        if(url===''){ return false;}
        window.location = url;
    });

    // ============================Submit form Contact
    var form = $('#zen-contact');
    var zenContactMessage = $('#zen-contact-message');
    // event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            $(zenContactMessage).removeClass('alert-danger');
            $(zenContactMessage).addClass('alert-success');

            // Set the message text.
            $(zenContactMessage).text("Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ lại");

        })
        .fail(function(response) {
            $(zenContactMessage).removeClass('alert-success');
            $(zenContactMessage).addClass('alert-danger');

            // Set the message text.
            $(zenContactMessage).text("Có lỗi khi thực hiện, vui lòng liên hệ qua hotline!");

        })

    });
    



}).apply( this, [ jQuery ]);

// $('.btnclick').click(function(){
//     alert("aaa")
// });
//
// /*Slider customer*/
// ;(function ( $, window, undefined ) {
//     $('body').on('click', '.click-link', function () {
//         alert("abc");
//         // var self = this;
//         // var url = $(self).attr('data-url');
//         // if(url==''){ return false;}
//         // window.location = url;
//     });