
$(document).ready(function () {
    // var data = {
    //     "val_firstname": "Mukehs",
    //     "val_lastname": "Thankar",
    //     "val_contact": "9821672735",
    //     "val_alternatecontact": "9821672735",
    //     "val_area": "Thankar Pada",
    //     "val_pincode": "421301",
    //     "val_city": "Kalyan",
    //     "val_landmark": "Kalyan",
    //     "val_day": "01",
    //     "val_month": "Jan",
    //     "val_year": "2018",
    //     "val_time": "04",
    //     "val_minute": "45",
    //     "val_am_pm": "AM",
    //     "val_loanTypeId": "1",
    //     "val_jobTypeId": "1",
    //     "val_amountUnitID": "1",
    //     "val_loanTenure": "1",
    //     "val_customTenure": "",
    //     "val_companyId": "1333",
    //     "val_industryId": "2222",
    //     "val_netMonthlySalary": "50000.00",
    //     "val_totalMonthelyEmi": "2500",
    //     "val_emailId": "abc@gmail.com",
    //     "val_loanAmount": "250000",
       
    //     // "val_loanTenureid": "1",
    //     "val_customTenure": "1"
       
        
        
        
        
    // }
    
    // $("#saveloandetails").autofill(data);

    $("#saveloandetailsbtn").click(function () {
        console.log("111");
        if ($("#saveloandetails").valid()) {
            console.log("123");
            var formData = ConvertFormToJSON($('#saveloandetails'));
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

    $("#saveloandetails").validate({
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
            val_loanAmount: {
                required: true,
                minlength: 3
            },
            val_loanTenureValue: {
                required: true,
                minlength: 3
            },
            val_loanTenureUnit: {
                required: true,
                minlength: 0
            },
            val_purposeOfLoan: {
                required: true,
                minlength: 0
            },
            val_otherPurpose: {
                required: true,
                minlength: 0
            },

            
            

            
            
                
           
            
         },
        messages: {
            
            val_loanAmount: {
                required: 'Please enter Loan Amount',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_loanTenureValue: {
                required: 'Please enter Desire Tenure',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_loanTenureUnit: {
                required: 'Please select Month or Year',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_purposeOfLoan: {
                required: 'Please select Purpose of loan',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_otherPurpose: {
                required: 'Please select other purpose',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
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
            
                "applicationId": 27,
                "balanceTransfer": {
                  "applicationId": 27,
                  "balTransferId": 1,
                  "currIntRate": json.val_currIntRate,
                  "currProcessingFees": json.val_currProcessingFees,
                  "nameOfLender": json.val_nameOfLender,
                  "osAmt": json.val_osAmt,
                  "pendingTenureInMnths": json.val_pendingTenureInMnths,
                  "pendingTenureInYrs": json.val_pendingTenureInYrs,
                  "reasonForTransfer": json.val_reasonForTransfer,
                  "sanctionedAmt": json.val_sanctionedAmt
                },
                "balanceTransferFlag": true,
                "loanAmount": json.val_loanAmount,
               "loanDetailsId": 1,
               "draft": true,
                "loanTenureUnit": json.val_loanTenureUnit,
                "loanTenureValue": json.val_loanTenureValue,
                "otherPurpose":json.val_otherPurpose,
                "purposeOfLoanId": json.val_purposeOfLoan
              
        }


        $("body").prepend(JSON.stringify(json));
        return json;
    }

});