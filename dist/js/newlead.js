
$(document).ready(function () {
    var data = {
        "val_firstname": "Mukehs",
        "val_lastname": "Thankar",
        "val_contact": "9821672735",
        "val_alternatecontact": "9821672735",
        "val_area": "Thankar Pada",
        "val_pincode": "421301",
        "val_city": "Kalyan",
        "val_landmark": "Kalyan",
        "val_day": "01",
        "val_month": "Jan",
        "val_year": "2018",
        "val_time": "04",
        "val_minute": "45",
        "val_am_pm": "AM",
        "val_loanTypeId": "1",
        "val_jobTypeId": "1",
        "val_amountUnitID": "1",
        "val_loanTenure": "1",
        "val_customTenure": "",
        "val_companyId": "1333",
        "val_industryId": "2222",
        "val_netMonthlySalary": "50000.00",
        "val_totalMonthelyEmi": "2500",
        "val_emailId": "abc@gmail.com",
        "val_loanAmount": "250000",
       
        // "val_loanTenureid": "1",
        "val_customTenure": "1"
       




    }

    // $("#new-lead").autofill(data);

    $("#newLeadSaveBtn").click(function () {
        console.log("111");
        if ($("#new-lead").valid()) {
            console.log("123");
            var formData = ConvertFormToJSON($('#new-lead'));
            console.log("data");
            console.log(formData);
            $.ajax({
                url: URL,
                method: 'POST',
                dataType: 'json',
                data: formData,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
                },
                success: function (data) {
                    console.log('succes: ' + data);
                    var suc = "<div class='alert alert-success' role='alert'>"+ suc.message +"</div>";
                    $("#new-lead-error").append(suc);
                },
                error: function (err) {
                    console.log('ERROR: ' + err);
                    var err = "<div class='alert alert-danger' role='alert'>"+ err.message +"</div>";
                    $("#new-lead-error").append(err);
                }
            });

        } else {
            console.log(":(")

        }
    })

    $("#new-lead").validate({
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
            val_firstname: {
                required: true,
                minlength: 3
            },
            val_lastname: {
                required: true,
                minlength: 3
            },
            val_contact: {
                required: true,
                minlength: 3
            },
            val_alternatecontact: {
                required: true,
                minlength: 3
            },
            val_city: {
                required: true,
                minlength: 3
            },

            val_loanTypeId: {
                required: true,
                minlength: 1
            },
            val_jobTypeId: {
                required: true,
                minlength: 1
            },
            val_companyId: {
                required: true,
                minlength: 3
            },
            val_industryId: {
                required: true,
                minlength: 3
            },
            val_netMonthlySalary: {
                required: true,
                minlength: 3
            },

            val_totalMonthelyEmi: {
                required: true,
                minlength: 3
            },

            val_emailId: {
                required: true,
                minlength: 3
            },




        },
        messages: {
            val_firstname: {
                required: 'Please enter first name',
                minlength: 'Your firstname must consist of at least 3 characters'
            },
            val_lastname: {
                required: 'Please enter Last name',
                minlength: 'Your firstname must consist of at least 3 characters'
            },
            val_contact: {
                required: 'Please enter Contact number',
                minlength: 'Your firstname must consist of at least 3 characters'
            },
            val_city: {
                required: 'Please enter your city',
                minlength: 'Your firstname must consist of at least 3 characters'
            },
            val_loanTypeId: {
                required: 'Please choose your type of loan',
                minlength: ''
            },
            val_jobTypeId: {
                required: 'Please choose your type of job',
                minlength: ''
            },
            val_companyId: {
                required: 'Please enter your Company name',
                minlength: 'Your firstname must consist of at least 3 characters'
            },

            val_industryId: {
                required: 'Please enter your Company Industry',
                minlength: 'Your firstname must consist of at least 3 characters'
            },

            val_netMonthlySalary: {
                required: 'Please enter your Net Monthly salary',
                minlength: 'Your firstname must consist of at least 3 characters'
            },

            val_totalMonthelyEmi: {
                required: 'Please enter your Total EMI',
                minlength: 'Your firstname must consist of at least 3 characters'
            },

            val_emailId: {
                required: 'Please enter your Email ID',
                minlength: 'Your firstname must consist of at least 3 characters'
            },




        }
    });

    function ConvertFormToJSON(form) {
        var array = jQuery(form).serializeArray();
        var json = {};
        jQuery.each(array, function () {
            json[this.name] = this.value || '';
        });
        console.log("json");
        json = {
            "supremoLeadId": "1",
            "leadLoanDetail": {
                "amountUnitID": json.val_amountUnitID,
                "customTenure": json.val_customTenure,
                "employmentDetails": {
                    "companyId": json.val_companyId,
                    "emailId": json.val_emailId,
                    "industryId": json.val_industryId,
                    "netMonthlySalary": json.val_netMonthlySalary,
                    "totalMonthelyEmi": json.val_totalMonthelyEmi
                },
                "jobTypeId": json.val_jobTypeId,
                "loanAmount": json.val_loanAmount,
                "loanTenure": json.val_loanTenure,
                "loanTypeId": json.val_loanTypeId
            },
            "personalDetails": {
                "altContactNumber": json.val_alternatecontact,
                "contactNumber": json.val_contact,
                "firstName": json.val_firstname,
                "lastName": json.val_lastname,
                "address": {
                    "pinCodeId": json.val_pincode,
                    "areaId": json.val_area,
                    "cityId": json.val_city,
                    "landmark": json.val_landmark
                }
            },
            "scheduleDate": "Jul 20, 2018 12:00:00 AM"
        }


        $("body").prepend(JSON.stringify(json));
        return json;
    }

});