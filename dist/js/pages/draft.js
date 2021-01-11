/*
 *  Document   : dashboard.js
 *  
 */
var Draft = function () {
    return {
        init: function () {
            console.log("ss");
            console.log("Draft List");
            $(".more-ellips").click(function (event) {
                event.preventDefault();
                console.log(this);
                $(this).find(".more-ellips .action-btn").css("display", "flex");
            });

            var loader = "<div id='se-pre-con'><span></span></div>";

            $(document).ready(function () {
                url = "http://localhost:5500/ProductService/draftList/";
                $.ajax({
                    url: url,
                    beforeSend: function () {
                        $("#draft-list").prepend(loader);
                    },
                    success: function (result) {
                        console.log("Initial Loading");
                        console.log(result);
                    },
                    complete: function () {
                        $("#draft-list .se-pre-con").remove();
                    }
                }).done(function (result) {
                    //localStorage.setItem("myajax-getproducts", JSON.stringify(result));
                    renderTpl(result.draftList.draftList);
                    renderFilesRsTpl(result.draftList);

                }).fail(function (err) {
                    throw err;
                });

                function renderFilesRsTpl(result) {
                    var compiled2 = _.template(
                        $("#tpl_total-files-rs").html()
                    );
                    $("#count-list").html(compiled2({
                        dataCount: result
                    }));
                }

                function renderTpl(result) {
                    var compiled = _.template($("#template").html());
                    $("#draft-list").html(compiled({
                        data: result
                    }));
                }
            });

        }
    }
}();