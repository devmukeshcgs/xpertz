/*
 *  Document   : dashboard.js
 *  
 */
var NewLead = function () {
    return {
        init: function () {
            console.log("New Lead");
            // $('.radio-group input[type="radio"]').click(function () {
            //     event.preventDefault();
            //     $('input[type="radio"]').parent().removeClass("active");
            //     $(this).parent().addClass("active");
            //     var inputValue = $(this).attr("value");
            //     var targetBox = $("." + inputValue);
            //     $(".box").not(targetBox).hide();
            //     $(targetBox).show();
            //     console.log(inputValue);
            // });
            // $('input').iCheck('check', function () {
            //     //alert('Well done, Sir');
            // });
            $('#selectCallDate').datetimepicker({
                inline: true,
                
                format: 'DD',
                icons: {
                    up: "fa fa-chevron-circle-up",
                    down: "fa fa-chevron-circle-down",
                    next: 'fa fa-chevron-circle-right',
                    previous: 'fa fa-chevron-circle-left'
                }
            });
           
        }
    }
}();


var NewLead1 = function () {
    return {
        init: function () {
            console.log("New Lead1");
            // $('.radio-group input[type="radio"]').click(function () {
            //     event.preventDefault();
            //     $('input[type="radio"]').parent().removeClass("active");
            //     $(this).parent().addClass("active");
            //     var inputValue = $(this).attr("value");
            //     var targetBox = $("." + inputValue);
            //     $(".box").not(targetBox).hide();
            //     $(targetBox).show();
            //     console.log(inputValue);
            // });
            // $('input').iCheck('check', function () {
            //     //alert('Well done, Sir');
            // });
            $('#selectCallDate1').datetimepicker({
                inline: true,
                icons: {
                    up: "fa fa-chevron-circle-up",
                    down: "fa fa-chevron-circle-down",
                    next: 'fa fa-chevron-circle-right',
                    previous: 'fa fa-chevron-circle-left'
                }
            });
           
        }
    }
}();



var NewLead2= function () {
    return {
        init: function () {
            console.log("New Lead2");
            // $('.radio-group input[type="radio"]').click(function () {
            //     event.preventDefault();
            //     $('input[type="radio"]').parent().removeClass("active");
            //     $(this).parent().addClass("active");
            //     var inputValue = $(this).attr("value");
            //     var targetBox = $("." + inputValue);
            //     $(".box").not(targetBox).hide();
            //     $(targetBox).show();
            //     console.log(inputValue);
            // });
            // $('input').iCheck('check', function () {
            //     //alert('Well done, Sir');
            // });
            $('#monthView').datetimepicker({
                inline: true,
                viewMode: 'months',
                format: 'MM',
                icons: {
                    up: "fa fa-chevron-circle-up",
                    down: "fa fa-chevron-circle-down",
                    next: 'fa fa-chevron-circle-right',
                    previous: 'fa fa-chevron-circle-left'
                }
            });
           
        } 
    }
}();

var NewLead3 = function () {
    return {
        init: function () {
            console.log("New Lead3");
            // $('.radio-group input[type="radio"]').click(function () {
            //     event.preventDefault();
            //     $('input[type="radio"]').parent().removeClass("active");
            //     $(this).parent().addClass("active");
            //     var inputValue = $(this).attr("value");
            //     var targetBox = $("." + inputValue);
            //     $(".box").not(targetBox).hide();
            //     $(targetBox).show();
            //     console.log(inputValue);
            // });
            // $('input').iCheck('check', function () {
            //     //alert('Well done, Sir');
            // });
            $('#custom').datetimepicker({
                inline: true,
                
                format: 'DD',
                icons: {
                    up: "fa fa-chevron-circle-up",
                    down: "fa fa-chevron-circle-down",
                    next: 'fa fa-chevron-circle-right',
                    previous: 'fa fa-chevron-circle-left'
                }
            });
           
        }
    }
}();
