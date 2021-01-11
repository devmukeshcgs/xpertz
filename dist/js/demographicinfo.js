
$(document).ready(function () {


    $("#diproceed").click(function () {


        if ($("#deminfo").valid()) {
            var formData = ConvertFormToJSON($('#deminfo'));
            console.log("data");
            // console.log(data);
            $.ajax({
                url: URL,
                method: 'GET',
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
                },
                error: function (err) {
                    console.log('ERROR: ' + err);
                    $("body").append(JSON.stringify(err));
                }
            });

        } else {

        }
    })

    $("#deminfo").validate({
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
                minlength: 2
            },
            // val_saluation: {
            //     required: true,
            //     minlength: 3
            // },
            val_gender: {
                required: true,
            },
            val_companyemail: {
                required: true,
                minlength: 3
            },
            val_mothername: {
                required: true,
                minlength: 3
            },
            val_fathername: {
                required: true,
                minlength: 3
            },
            val_marital: {
                required: true,
            },
            val_spouse: {
                required: true,
                minlength: 3
            },
            val_number: {
                required: true,
                minlength: 3
            },
            val_university: {
                required: true,
                minlength: 3
            },
            val_qualification: {
                required: true,
                minlength: 3
            },
            val_address1: {
                required: true,
                minlength: 3
            },
            val_address2: {
                required: true,
                minlength: 3
            },
            val_pincode: {
                required: true,
                minlength: 3
            },
            val_city: {
                required: true,
                minlength: 3
            },
            val_state: {
                required: true,
                minlength: 3
            },
            val_country: {
                required: true,
                minlength: 3
            },
            val_year:{
                required: true,
                minlength: 0
            },
            val_cityyear:{
                required: true,
                minlength: 0
            },
            val_numberofdep:{
                required: true,
                minlength: 0
            },
            val_addressCategory:{
                required: true,
            },
            val_peraddress1:{
                required: true,
                minlength: 3
            },
            val_peraddress2:{
                required: true,
                minlength: 3
            },
            val_perpincode:{
                required: true,
                minlength: 3
            },
            val_percity:{
                required: true,
                minlength: 3
            },
            val_perdistrict:{
                required: true,
                minlength: 3
            },
            val_perstate:{
                required: true,
                minlength: 3
            },
            val_percountry:{
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
                minlength: 'Your password must consist of at least 5 characters'
            },
            // val_saluation: {
            //     required: 'Please select an option from the list',
            //     minlength: 'Please select an option from the list'
            // },
            val_gender: {
                required: 'Please choose a gender'
            },
            val_companyemail: {
                required: 'Please enter Company email',
                minlength: 'Your password must consist of at least 5 characters'
            },
            val_mothername: {
                required: 'Please enter Mothers Maiden name',
                minlength: 'Your password must consist of at least 5 characters'
            },
            val_fathername: {
                required: 'Please enter Father name',
                minlength: 'Your password must consist of at least 5 characters'
            },
            val_marital: {
                required: 'Please choose a Marital Status'
            },
            val_spouse: {
                required: 'Please enter Spouse name',
                minlength: 'Your password must consist of at least 5 characters'
            },
            val_number: {
                required: 'Please enter Number of dependants',
                minlength: 'Please enter Number of dependants'
            },
            val_university: {
                required: 'Please enter Name of university',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_qualification: {
                required: 'Please enter Highest qualification',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_address1: {
                required: 'Please enter Name Address line 1',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_address2: {
                required: 'Please enter Name Address line 2',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_pincode: {
                required: 'Please enter Pincode number',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_city: {
                required: 'Please enter Name of city',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_numberofdep:{
                required: 'Please enter number of dependent',
                minlength: 'Your Number must consist of at least 2 characters'
            },
            val_state: {
                required: 'Please enter Name of state',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_country: {
                required: 'Please enter Name of country',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_year:{
                required: 'Please enter number of years & months',
                minlength: 'Please enter number of years & months'
            },
            val_cityyear:{
                required: 'Please enter number of years & months',
                minlength: 'Please enter number of years & months'
            },
            val_addressCategory:{
                required: 'Please choose a address category'    
            },
            val_peraddress1:{
                required: 'Please enter Name Address line 1',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_peraddress2:{
                required: 'Please enter Name Address line 2',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_perpincode:{
                required: 'Please enter Pincode number',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_percity:{
                required: 'Please enter Name of city',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_perdistrict:{
                required: 'Please enter Name of district',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_perstate:{
                required: 'Please enter Name of state',
                minlength: 'Your Number must consist of at least 5 characters'
            },
            val_percountry:{
                required: 'Please enter Name of country',
                minlength: 'Your Number must consist of at least 5 characters'
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
        console.log(json);
        json = {
            "alternateEmailId": json.val_alternate,
            "applicationId": 1,
            "borrowerId": 1,
            "borrowerTypeId": 1,
            "communicationSameAs": true,
            "companyEmailId": json.val_companyemail,
            "dateOfBirth": "MMM DD, YYYY HH:mm:ss a",
            "draft": true,
            "fatherFullName": json.val_fathername,
            "firstName": json.val_firstname,
            "gender": json.val_gender,
            "landlineNo": "string",
            "lastName": json.val_lastname,
            "maritialStatus": json.val_marital,
            "middleName": json.val_middlename,
            "motherMaidenFullName": json.val_mothername,
            "noofDependents": json.val_numberofdep,
            "permanentAddress": {
              "addressCategory": 1,
              "addressId": 0,
              "addressLine1": json.val_peraddress1,
              "addressLine2": json.val_peraddress2,
              "addressLine3": "string",
              "addressType": 0,
              "cityId": json.val_percity,
              "countryId": json.val_percountry,
              "districtId": json.val_perdistrict,
              "draft": true,
              "landmark": json.val_landmark1,
              "pincodeId": json.val_perpincode,
              "regionId": 1,
              "stateId": json.val_perstate,
              "stayAtAddForMonths": 0,
              "stayAtAddForYears": 0,
              "stayInAddCityForMonths": 0,
              "stayInAddCityForYears": 0
            },
            "permanentSameAsResiFlag": true,
            "qualification": json.val_qualification,
            "residenceAddress": {
              "addressCategory": json.val_addressCategory,
              "addressId": 0,
              "addressLine1": json.val_address1,
              "addressLine2": json.val_address2,
              "addressLine3": "string",
              "addressType": 1,
              "cityId": json.val_city,
              "countryId": json.val_country,
              "districtId": json.var_district,
              "draft": true,
              "landmark": json.var_landmark,
              "pincodeId": json.val_pincode,
              "regionId": 1,
              "stateId": json.val_state,
              "stayAtAddForMonths": json.val_months,
              "stayAtAddForYears": json.val_year,
              "stayInAddCityForMonths": json.val_citymonths,
              "stayInAddCityForYears": json.val_cityyear
            },
            "salutations": json.val_saluation,
            "spouseWorking": json.val_spouseworking,
            "spousefullName": json.val_spousename,
            "university": json.val_university
          }
          



        $("body").prepend(JSON.stringify(json));
        return json;
    }

});