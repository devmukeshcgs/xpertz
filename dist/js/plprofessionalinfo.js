
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

    $("#plprofessionalinfobtn").click(function () {
        console.log("111");
        loginViaOTP();
        if ($("#plprofessionalinfo").valid()) {
            console.log("123");
            var formData = ConvertFormToJSON($('#plprofessionalinfo'));
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

    $("#plprofessionalinfo").validate({
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
            val_profcompanyname: {
                required: true,
                minlength: 0
            },
            val_companyindustry: {
                required: true,
                minlength: 0
            },
            val_expInCurrentCompMonths: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_expInCurrentCompYears: {
                required: true,
                minlength: 0,
                digits: true,
            },

            groups: {
                DateofBirth: "val_expInCurrentCompMonths val_expInCurrentCompYears"
            },

            val_totalExpMonths: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_totalExpYears: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_designation: {
                required: true,
                minlength: 0
            },
            val_department: {
                required: true,
                minlength: 0
            },
            
            val_retirementinMonths: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_retirementinYears: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_netMonthlySalary: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_otherMonthlyIncome: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_monthlyObligations: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_addressLine1: {
                required: true,
                minlength: 0
               
            },
            val_addressLine2: {
                required: true,
                minlength: 0
               
            },
            val_pincode: {
                required: true,
                minlength: 0,
                digits: true,
            },
            val_city: {
                required: true,
                minlength: 0
                
            },
            
            
            
            
            
              
         },
        messages: {

            val_profcompanyname: {
                required: 'Please enter your company name',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_companyindustry: {
                required: 'Please enter company industry',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_expInCurrentCompMonths: {
                required: 'Please enter months',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
                
            },
            val_expInCurrentCompYears: {
                required: 'Please enter years',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_totalExpMonths: {
                required: 'Please enter months',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },
            val_totalExpYears: {
                required: 'Please enter years',
                minlength: 'Your Loan Amount must consist of at least 3 characters'
            },

            val_designation: {
                required: 'Please enter designation',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_department: {
                required: 'Please enter department',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_retirementinMonths: {
                required: 'Please enter months',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_retirementinYears: {
                required: 'Please enter years',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_netMonthlySalary: {
                required: 'Please enter net monthly salary',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_otherMonthlyIncome: {
                required: 'Please enter other monthly income',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_monthlyObligations: {
                required: 'Please enter monthly obligations',
                minlength: 'Your designation must consist of at least 3 characters'
            },
            val_addressLine1: {
                required: 'Please enter Addressline1',
                minlength: ''
               
            },
            val_addressLine2: {
                required: 'Please enter Addressline2',
                minlength: ''
               
            },
            val_pincode: {
                required: 'Please enter pincode',
                minlength: ''
            },
            val_city: {
                required: 'Please enter city',
                minlength: ''
                
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
            "applicationId": 1,
            "borrowerId": 1,
            "communicationAddressType": 1,
            "companyAddress": {
              "addressCategory": 1,
              "addressId": 0,
              "addressLine1": json.val_addressLine1,
              "addressLine2": json.val_addressLine2,
              "addressLine3": "string",
              "addressType": 1,
              "cityId": json.val_city,
              "countryId": 1,
              "districtId": 1,
              "draft": true,
              "landmark": json.val_landmark,
              "pincodeId": json.val_pincode,
              "regionId": 1,
              "stateId": 1,
              "stayAtAddForMonths": 1,
              "stayAtAddForYears": 0,
              "stayInAddCityForMonths": 0,
              "stayInAddCityForYears": 0
            },
            "companyId": json.val_profcompanyname,
            "contactExt": "string",
            "contactNo": "string",
            "contactSTD": "string",
            "department": json.val_department,
            "designation": json.val_designation,
            "draft": true,
            "expInCurrentCompMonths": json.val_expInCurrentCompMonths,
            "expInCurrentCompYears": json.val_expInCurrentCompYears,
            "incomedetails": {
              "applicationId": 1,
              "borrowerId": 1,
              "draft": true,
              "incomeId": 0,
              "monthlyObligations": json.val_monthlyObligations,
              "netMonthlySalary": json.val_netMonthlySalary,
              "otherMonthlyIncome": json.val_otherMonthlyIncome
            },
            "industryId": json.val_companyindustry,
            "otherCompanyName": "string",
            "professionId": 0,
            "retirementinMonths": json.val_retirementinMonths,
            "retirementinYears": json.val_retirementinYears,
            "totalExpMonths": json.val_totalExpMonths,
            "totalExpYears": json.val_totalExpYears
          }
          
          


        $("body").prepend(JSON.stringify(json));
        return json;
    }

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


