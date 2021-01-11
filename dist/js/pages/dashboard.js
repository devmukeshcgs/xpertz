/*
 *  Document   : dashboard.js
 *  
 */
var Dashboard = function () {
    return {
        init: function () {
            console.log("ss");

            var loader = "<div id='se-pre-con'><span></span></div>";

            $(document).ready(function () {
                url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=5964d3f0d29c4469a8fac5cf9767b2b4&&limit=50";
                url2 = "http://192.168.0.147:7777/listing";
                $.ajax({
                    url: url,
                    beforeSend: function () {
                        $("#xxx").prepend(loader);
                    },
                    success: function (result) {
                        console.log("Initial Loading");
                    },
                    complete: function () {
                        $("#xxx .se-pre-con").remove();
                    }
                }).done(function (result) {
                    localStorage.setItem("myajax-getproducts", JSON.stringify(result));

                    renderTpl(result.applicationList.applicationList);
                    //console.log(result.applicationList.applicationList);
                }).fail(function (err) {
                    throw err;
                });

                function renderTpl(result) {
                    var compiled = _.template($("#template").html());
                    $("#xxx").html(compiled({
                        data: result
                    }));
                }

                ////////////////////////////////////////////////////////

                $(window).on("load", function () {
                    $(".js-table-scroll").mCustomScrollbar({
                        axis:"yx", //set both axis scrollbars
                        advanced:{autoExpandHorizontalScroll:true}, //auto-expand content to accommodate floated elements
                        // change mouse-wheel axis on-the-fly 
                        callbacks:{
                          onOverflowY:function(){
                            var opt=$(this).data("mCS").opt;
                            if(opt.mouseWheel.axis!=="y") opt.mouseWheel.axis="y";
                          },
                          onOverflowX:function(){
                            var opt=$(this).data("mCS").opt;
                            if(opt.mouseWheel.axis!=="x") opt.mouseWheel.axis="x";
                          },
                        }
                    
                });

                // $('input').iCheck({
                //     checkboxClass: 'icheckbox_minimal',
                //     radioClass: 'iradio_minimal',
                //     increaseArea: '20%' // optional
                // });
                // $('#selectCallDate').datetimepicker({
                //     inline: true,
                // });

                // $('#selectCallDate2').datetimepicker({
                //     inline: true,
                // });
                // $('input').iCheck('check', function () {
                //     //alert('Well done, Sir');
                // });


            });

        }
    }
}();