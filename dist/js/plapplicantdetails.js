
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

    $("#plapplicantdetailsbtn").click(function () {
        console.log("111");
        loginViaOTP();
        if ($("#plapplicantdetails").valid()) {
            console.log("123");
            var formData = ConvertFormToJSON($('#plapplicantdetails'));
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

    $("#plapplicantdetails").validate({
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
            val_borrowerTypeId: {
                required: true,
                minlength: 0
            },
            val_jobType: {
                required: true,
                minlength: 0
            },
            val_panNo: {
                required: true,
                minlength: 10,
                digits: true,
            },

            
            // val_aadharNo: {
            //     required: true,
            //     minlength: 0
            // },
            // val_aadharNo2: {
            //     required: true,
            //     minlength: 0
            // },
            // val_aadharNo3: {
            //     required: true,
            //     minlength: 0
            // },
            // groups: {
            //     val_aadharNo: "val_aadharNo1 val_aadharNo2 val_aadharNo3"
            // },
            
            
            

            
            

            
            
                
           
            
         },
        messages: {

            val_borrowerTypeId: {
                required: 'Please select type of Loan',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_jobType: {
                required: 'Please select type of job',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },

            val_panNo: {
                required: 'Please enter your pan number',
                minlength: 'Your pan Amount must consist of at least 10 characters'
                
            },
            // val_aadharNo: {
            //     required: 'Please enter your aadhar no',
            //     minlength: 'Your Loan Amount must consist of at least 12 characters'
            // },
            
            
            
            


            
            
            
           
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
            "aadharNo": json.val_aadharNo1+json.val_aadharNo2+json.val_aadharNo3,
           "applicationId": 1,
            "borrowerId": 1,
             "draft": true,
            "borrowerTypeId": json.val_borrowerTypeId,
            "isBureauConsent": json.val_isBureauConsent,
            "isPanVerfied": true,
            "jobTypeId": json.val_jobType,
             "profileTypeId": 1,
             "panId": 1,
            "panNo": json.val_panNo
          }
          


        $("body").prepend(JSON.stringify(json));
        return json;
    }
    
    $("#val_aadharNo1").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                  return false;
       }else{
        $("#val_aadharNo1").keyup(function() {
                    // $("#val_aadharNo2").focus();
                   
                    if($("#val_aadharNo1").val().length ==3){
                        $("#val_aadharNo2").focus();
                    }
            });
       }
      }); 
      $("#val_aadharNo2").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                  return false;
       }else{
        $("#val_aadharNo2").keyup(function() {
                    // $("#val_aadharNo2").focus();
                   
                    if($("#val_aadharNo2").val().length ==3){
                        $("#val_aadharNo3").focus();
                    }
            });
       }
      });
      $("#val_aadharNo3").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                  return false;
       }else{
        $("#val_aadharNo3").keyup(function() {
                    // $("#val_aadharNo2").focus();
                   
                    if($("#val_aadharNo3").val().length ==3){
                        $("#val_panNo").focus();
                    }
            });
       }
      });
      
      $("#val_panNo").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                  return false;
       }
      });
      
      
});

function loginViaOTP()
     {
   	 var otp1=$("#val_aadharNo1").val();
   	 var otp2=$("#val_aadharNo2").val();
   	 var otp3=$("#val_aadharNo3").val();
   	 
   	 var otpStr=otp1+otp2+otp3;
   	 var count=0;
   	 if($("#val_aadharNo1").val()=="")
   	{
   	 count++;
   	} if($("#val_aadharNo2").val()=="")
   	{
 	 count++;
 	}  if($("#val_aadharNo3").val()=="")
{
 count++;
}  
if(count>0){
    console.log("test");
    $("#otp-error").text("");
$("#otp-error").text("Please Enter OTP");
count=0;
}

if(count==0){ 
console.log("insert");
$("#otp-error").text('');
$("#otp-error").empty();

}
     }



//      function loginViaOTP()
//      {
//          console.log("inside");
//          $("#otp-error").text('');
//          $("#otp-error").empty();
//    	 var count=0;
   	
//     if($("#val_aadharNo1").val()=='' || $("#val_aadharNo2").val()=='' || $("#val_aadharNo3").val()=='')
//     {
//         count++;
//     }

//    	 if(count>0){
//         console.log("test");
//    	 $("#otp-error").text("");
//  $("#otp-error").text("Please Enter OTP");
//  count=0;
// }

//  if(count==0){ 
//     console.log("insert");
//     $("#otp-error").text('');
//     $("#otp-error").empty();
 
// }
//      }

