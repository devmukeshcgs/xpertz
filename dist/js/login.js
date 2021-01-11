$("#signinbtn").click(function () {

    

})






$("#login").validate({
    errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation - check animations page
    errorElement: 'div',
    errorPlacement: function (error, e) {
        e.parents('.form-group > div').append(error);
    },
    highlight: function (e) {
        $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
        $(e).closest('.help-block').remove();
    },
    success: function (e) {
        // You can use the following if you would like to highlight with green color the input after successful validation!
        e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
        e.closest('.help-block').remove();
    },
    rules: {
        val_username: {
            required: true,
            minlength: 3
        },
        val_password: {
            required: true,
            minlength: 2
        },
        val_contact: {},
        val_alternatecontact: {},
        val_pincode: {},
        val_area: {},
        val_city: {},
        val_landmarl: {},
        val_day: {},
        val_month: {},
        val_year: {},
        val_hour: {},
        val_minute: {},
        val_am_pm: {},
        val_loanTypeId: {},
        val_jobTypeId: {},
        val_loanAmount: {},
        val_amountUnitID: {},
        val_loanTenure: {},
        val_customTenure: {},
        val_companyId: {},
        val_industryId: {},
        val_netMonthlySalary: {},
        val_totalMonthelyEmi: {},
        val_emailId: {}
    },
    messages: {
        val_username: {
            required: 'Please enter username',
            minlength: 'Your firstname must consist of at least 3 characters'
        },
        val_password: {
            required: 'Please enter Password',
            minlength: 'Your password must consist of at least 5 characters'
        },
        val_contact: {},
        val_alternatecontact: {},
        val_pincode: {},
        val_area: {},
        val_city: {},
        val_landmarl: {}, //Sec -2
        val_day: {},
        val_month: {},
        val_year: {},
        val_hour: {},
        val_minute: {},
        val_am_pm: {},
        val_loanTypeId: {},
        val_jobTypeId: {},
        val_loanAmount: {},
        val_amountUnitID: {},
        val_loanTenure: {},
        val_customTenure: {},
        val_companyId: {},
        val_industryId: {},
        val_netMonthlySalary: {},
        val_totalMonthelyEmi: {},
        val_emailId: {}
    }
});