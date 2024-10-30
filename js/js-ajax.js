if ($("#phoneget").length && $("#phoneget").intlTelInput({
    initialCountry: "auto",
    autoHideDialCode: !1,
    autoPlaceholder: !1,
    separateDialCode: !1,
    nationalMode: !1
}), $("button.btn.btn-favorite").click(function () {
    $this = $(this);
    var e = $(this).attr("data-id");
    $.ajax({
        type: "POST",
        url: "https://popigram.com/ajax/favoritepackages/" + e + "/",
        data: {
            id: e,
            action: "favoritepackages"
        },
        success: function (e) {
            $this.toggleClass("active"), Swal.fire({
                icon: "success",
                title: lang_success,
                text: lang_fav,
                toast: !0,
                position: "top-right",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0
            }), $this.hasClass("refresh") && location.reload()
        }
    })
}), $("ul.choose li").click(function () {
    $(this).addClass("checked").siblings().removeClass("checked");
    var e = $(this).attr("data-key"),
        a = $(this).attr("data-status");
    $.ajax({
        type: "POST",
        url: "https://popigram.com/ajax/changenotifications/" + e + "/" + a,
        data: {
            key: e,
            status: a,
            action: "change_status"
        },
        success: function (e) {
            "success" == e && ($(this).addClass("checked").siblings().removeClass("checked"), Swal.fire({
                icon: "success",
                title: lang_success,
                text: lang_notification,
                toast: !0,
                position: "top-right",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0
            }))
        }
    })
}), $("section.tool .inputgroup").length) {
    let e = $("section.tool .inputgroup").length;
    e += $("section.tool .ajaxcheck").length;
    let a = [];

    function valid(e) {
        $("button.btn-submit span.loading").addClass("d-none").removeClass("d-flex"), $("button.btn-submit span.text").addClass("d-flex").removeClass("d-none");
        let a = e.length,
            s = $(".inputgroup.error").length;
        $(".inputgroup.success").length, $(".ajaxcheck").parent(".inputgroup.success").length;
        if (e.length) {
            let a = [];
            $.each(e, function (e, s) {
                -1 == jQuery.inArray(s, a) && a.push("<li><p>" + s + "</p></li>")
            }), $(".privateprofile").html("<ul>" + a.join("") + "</ul>").fadeIn()
        } else $(".privateprofile").fadeOut();
        "0" == a && "0" == s ? $(".btn.btn-submit").prop("disabled", !1) : $(".btn.btn-submit").prop("disabled", !0)
    }

    $(".noregex2").length && $(".noregex2").on("change", function () {
        $(this).attr("data-id");
        var e = $(this).attr("data-platform"),
            p = $(this).attr("data-platform"),
            s = $(this).val();
        let r = $(this).val();
        a = [], $(".btn.btn-submit").prop("disabled", !0), s.length >= 3 ? $(".ajaxcheck").length ? ($(".noregex2").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), $("button.btn-next span.loading").removeClass("d-none").addClass("d-flex"), $("button.btn-next span.text").removeClass("d-flex").addClass("d-none"), $.ajax({
            type: "POST",
            url: "https://popigram.com/ajax/get_" + e + "_user/",
            data: {
                username: r,
                slug: $("input[name='slug']").val(),
                datetime: $("input[name='datetime']").val(),
                hash: $("input[name='hash']").val(),
            },
            success: function (e) {
                if ("This account is private" == e.message) {
                    e.status = "true";
                }

                "false" == e.status ? ($(".noregex2").addClass("is-invalid"), $(".noregex2").removeClass("is-valid"), $(".ajaxcheck").parent().addClass("error"), $(".ajaxcheck").addClass("border-danger"), $(".ajaxcheck").parent().removeClass("success"), $(".ajaxcheck").removeClass("border-success"), $(".ajaxcheck").parent().find("img").attr("src", e.avatar), "This account is private" == e.message ? -1 == jQuery.inArray(lang_profil_gizli, a) && a.push(lang_profil_gizli) : "Post not found" == e.message ? ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), -1 == jQuery.inArray(lang_gonderi_bulunamadi, a) && a.push(lang_gonderi_bulunamadi)) : ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), -1 == jQuery.inArray(lang_hesap_bulunamadi, a) && a.push(lang_hesap_bulunamadi)), valid(a)) : ($(".noregex2").addClass("is-valid"), $(".noregex2").removeClass("is-invalid"), $(".noregex2").parent().removeClass("error"), $(".noregex2").removeClass("border-danger"), $(".noregex2").parent().addClass("success"), $(".noregex2").addClass("border-success"), $(".noregex2").parent().find("img").attr("src", e.avatar), $(".noregex2").parent().find("img").attr("name", e.name), $(".noregex2").parent().find("img").attr("follower", e.follower), $(".noregex2").parent().find("img").attr("likes", e.likes), $(".noregex2").parent().find("img").attr("comments", e.comments), $(".noregex2").parent().find("img").attr("views", e.views), valid(a))
            }
        })) : ($(".noregex2").addClass("is-valid"), $(".noregex2").removeClass("is-invalid"), $(".noregex2").parent().removeClass("error"), $(".noregex2").removeClass("border-danger"), $(".noregex2").parent().addClass("success"), $(".noregex2").addClass("border-success"), a = jQuery.grep(a, function (e) {
            return e != lang_link_yanlis
        }), valid(a)) : ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), $(".noregex2").removeClass("is-valid"), $(".noregex2").addClass("is-invalid"), $(".noregex2").parent().addClass("error"), $(".noregex2").addClass("border-danger"), $(".noregex2").parent().removeClass("success"), $(".noregex2").removeClass("border-success"), valid(a))
    }), $(".noregex").length && $(".noregex").on("change", function () {
        $(this).attr("data-id");
        var e = $(this).attr("data-platform"),
            p = $(this).attr("data-platform"),
            s = $(this).val();
        let r = $(this).val();
        a = [], $(".btn.btn-submit").prop("disabled", !0), s.length >= 3 ? $(".ajaxcheck").length ? ($(".noregex").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), $("button.btn-next span.loading").removeClass("d-none").addClass("d-flex"), $("button.btn-next span.text").removeClass("d-flex").addClass("d-none"), $.ajax({
            type: "POST",
            url: "https://popigram.com/ajax/get_" + e + "_user/",
            data: {
                username: r,
                slug: $("input[name='slug']").val(),
                datetime: $("input[name='datetime']").val(),
                hash: $("input[name='hash']").val(),
            },
            success: function (e) {
                "false" == e.status ? ($(".noregex").addClass("is-invalid"), $(".noregex").removeClass("is-valid"), $(".ajaxcheck").parent().addClass("error"), $(".ajaxcheck").addClass("border-danger"), $(".ajaxcheck").parent().removeClass("success"), $(".ajaxcheck").removeClass("border-success"), $(".ajaxcheck").parent().find("img").attr("src", e.avatar), "This account is private" == e.message ? -1 == jQuery.inArray(lang_profil_gizli, a) && a.push(lang_profil_gizli) : "Post not found" == e.message ? ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), -1 == jQuery.inArray(lang_gonderi_bulunamadi, a) && a.push(lang_gonderi_bulunamadi)) : ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), -1 == jQuery.inArray(lang_hesap_bulunamadi, a) && a.push(lang_hesap_bulunamadi)), valid(a)) : ($(".noregex").addClass("is-valid"), $(".noregex").removeClass("is-invalid"), $(".noregex").parent().removeClass("error"), $(".noregex").removeClass("border-danger"), $(".noregex").parent().addClass("success"), $(".noregex").addClass("border-success"), $(".noregex").parent().find("img").attr("src", e.avatar), $(".noregex").parent().find("img").attr("name", e.name), $(".noregex").parent().find("img").attr("follower", e.follower), $(".noregex").parent().find("img").attr("likes", e.likes), $(".noregex").parent().find("img").attr("comments", e.comments), $(".noregex").parent().find("img").attr("views", e.views), valid(a))
            }
        })) : ($(".noregex").addClass("is-valid"), $(".noregex").removeClass("is-invalid"), $(".noregex").parent().removeClass("error"), $(".noregex").removeClass("border-danger"), $(".noregex").parent().addClass("success"), $(".noregex").addClass("border-success"), a = jQuery.grep(a, function (e) {
            return e != lang_link_yanlis
        }), valid(a)) : ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), $(".noregex").removeClass("is-valid"), $(".noregex").addClass("is-invalid"), $(".noregex").parent().addClass("error"), $(".noregex").addClass("border-danger"), $(".noregex").parent().removeClass("success"), $(".noregex").removeClass("border-success"), valid(a))
    }), $(".needregexcheck").length && $(".needregexcheck").on("change", function () {
        var e = $(this).attr("data-id"),
            s = $(this).attr("data-platform"),
            p = $(this).attr("data-platform"),
            r = $(this).val();
        let n = $(this).val();
        a = [], $(".regexcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), $("button.btn-submit span.loading").removeClass("d-none").addClass("d-flex"), $("button.btn-submit span.text").removeClass("d-flex").addClass("d-none"), $(".btn.btn-submit").prop("disabled", !0), $.ajax({
            type: "POST",
            url: "https://popigram.com/ajax/regexcheck/" + e + "/",
            data: {
                link: r,
                platform: s,
                action: "regexcheck"
            },
            success: function (e) {
                1 == e.status ? $(".ajaxcheck").length ? 0 != jQuery.inArray(lang_link_yanlis, a) && $.ajax({
                    type: "POST",
                    url: "https://popigram.com/ajax/get_" + s + "_user/",
                    data: {
                        username: n
                    },
                    success: function (e) {
                        "false" == e.status ? ($(".ajaxcheck").addClass("is-invalid"), $(".ajaxcheck").removeClass("is-valid"), $(".ajaxcheck").parent().addClass("error"), $(".ajaxcheck").addClass("border-danger"), $(".ajaxcheck").parent().removeClass("success"), $(".ajaxcheck").removeClass("border-success"), "This account is private" == e.message ? ($(".ajaxcheck").parent().find("img").attr("src", e.avatar), -1 == jQuery.inArray(lang_profil_gizli, a) && a.push(lang_profil_gizli)) : "Post not found" == e.message ? ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), -1 == jQuery.inArray(lang_gonderi_bulunamadi, a) && a.push(lang_gonderi_bulunamadi)) : ($(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + p + ".png"), -1 == jQuery.inArray(lang_hesap_bulunamadi, a) && a.push(lang_hesap_bulunamadi)), valid(a)) : ($(".needregexcheck").parent().find("img").attr("src", e.avatar), $(".needregexcheck").addClass("is-valid"), $(".needregexcheck").removeClass("is-invalid"), $(".needregexcheck").parent().removeClass("error"), $(".needregexcheck").removeClass("border-danger"), $(".needregexcheck").parent().addClass("success"), $(".needregexcheck").addClass("border-success"), valid(a))
                    }
                }) : ($(".needregexcheck").addClass("is-valid"), $(".needregexcheck").removeClass("is-invalid"), $(".needregexcheck").parent().removeClass("error"), $(".needregexcheck").removeClass("border-danger"), $(".needregexcheck").parent().addClass("success"), $(".needregexcheck").addClass("border-success"), valid(a)) : ($(".needregexcheck").addClass("is-invalid"), $(".needregexcheck").removeClass("is-valid"), $(".needregexcheck").parent().addClass("error"), $(".needregexcheck").addClass("border-danger"), $(".needregexcheck").parent().removeClass("success"), $(".needregexcheck").removeClass("border-success"), -1 == jQuery.inArray(lang_link_yanlis, a) && a.push(lang_link_yanlis), valid(a))
            }
        })
    })
}
if ($("section.cart").length) {
    let e = $(".bayimodal .inputgroup").length;
    e += $(".bayimodal .ajaxcheck").length;
    let a = [];

    if ($(".noregex").length) {
        $(".noregex").on("blur change", function () {
            let e = $(this).attr("data-platform");
            let r = $(this).val();

            // İstek zaten yapıldıysa tekrar yapmamak için kontrol ekleyin
            if (!$(this).hasClass("ajax-in-progress")) {
                $(this).addClass("ajax-in-progress");

                // Loading animasyonunu aç
                $("button.btn-next span.loading").removeClass("d-none").addClass("d-flex");
                $("button.btn-next span.text").removeClass("d-flex").addClass("d-none");

                if($(".ajaxcheck").length) {
                    $.ajax({
                        type: "POST",
                        url: "https://popigram.com/ajax/get_" + e + "_user/",
                        data: {
                            username: r,
                            type: $(this).attr("data-type"),
                            slug: $("input[name='slug']").val(),
                            datetime: $("input[name='datetime']").val(),
                            hash: $("input[name='hash']").val(),
                        },
                        timeout: 9000,
                        success: function (response) {
                            $(".noregex").removeClass("ajax-in-progress");

                            // Loading animasyonunu kapat
                            $("button.btn-next span.loading").addClass("d-none").removeClass("d-flex").attr("disabled", false);
                            $("button.btn-next span.text").addClass("d-flex").removeClass("d-none").attr("disabled", false);

                            // Başarılı cevap sonrası işlemler
                            if (response.status === "false") {
                                $(".noregex").addClass("is-invalid").removeClass("is-valid");
                                $(".ajaxcheck").parent().addClass("error border-danger").removeClass("success border-success");
                                $(".ajaxcheck").parent().find("img").attr("src", response.avatar);
                                let message = response.message;
                                if (message === "This account is private" && $.inArray(lang_profil_gizli, a) === -1) {
                                    a.push(lang_profil_gizli);
                                } else if (message === "Post not found" && $.inArray(lang_gonderi_bulunamadi, a) === -1) {
                                    $(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + e + ".png");
                                    a.push(lang_gonderi_bulunamadi);
                                } else if ($.inArray(lang_hesap_bulunamadi, a) === -1) {
                                    $(".ajaxcheck").parent().find("img").attr("src", base_url + "assets/avatar/" + e + ".png");
                                    a.push(lang_hesap_bulunamadi);
                                }
                                valid(a);
                            } else {
                                $(".noregex").addClass("is-valid").removeClass("is-invalid");
                                $(".ajaxcheck").parent().addClass("success border-success").removeClass("error border-danger");
                                $(".ajaxcheck").parent().find("img").attr("src", response.avatar);
                                valid(a);
                            }

                            if (response.posts && response.posts.length > 0) {
                                $(".bayimodal .modal-dialog .modal-content .modal-body .btn-next").attr("disabled", "disabled");
                                $(".post-area").removeClass("d-none");
                                $(".row.posts").html("");
                                $(".bayimodal .modal-dialog .modal-content .modal-body .price").html("0 TL");
                                $(".bayimodal .modal-dialog .modal-content .modal-body .discount").hide();

                                let posts = response.posts;
                                let pt_icon = "";
                                let pt_number = "";
                                let html = "";

                                $.each(posts, function (index, post) {
                                    html = "";
                                    if (package_type === "Beğeni") {
                                        pt_icon = "ri-heart-fill";
                                        pt_number = post.likes;
                                    } else {
                                        pt_icon = "ri-eye-line";
                                        pt_number = post.views;
                                    }

                                    if (post.end_cursor) {
                                        $(".bayimodal .modal-dialog .modal-content button.loadmore").show().removeAttr("disabled").attr({
                                            "data-end-cursor": post.end_cursor,
                                            "data-username": r,
                                            "data-platform": e
                                        });
                                    } else {
                                        $(".bayimodal .modal-dialog .modal-content button.loadmore").hide();
                                    }

                                    if (pt_number === -1) {
                                        html = `<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
												<div class="item disabled" data-url='${post.url}'>
													<img src="${post.img_url}" class="img-fluid" width="210" height="210" alt="">
													<div class='lock'>
														<i class='ri-lock-password-fill'></i> 
														<span>Beğeni sayısı gizli olduğu için sipariş veremezsiniz.</span>
													</div> 
													<div class="detail d-flex align-items-center gap-1">
														<i class="${pt_icon}"></i> 
														<span>${pt_number}</span> +${package_quantity}
													</div>
												</div>
											</div>`;
                                    } else {
                                        html = `<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
												<div class="item" data-url='${post.url}'>
													<img src="${post.img_url}" class="img-fluid" width="210" height="210" alt="">
													<div class="detail d-flex align-items-center gap-1">
														<i class="${pt_icon}"></i> 
														<span>${pt_number}</span> +${package_quantity}
													</div>
												</div>
											</div>`;
                                    }

                                    $(".row.posts").append(html);
                                });
                            } else {
                                $(".post-area").addClass("d-none");
                                $(".row.posts").html("");
                            }
                        },
                        error: function (jqXHR, textStatus) {
                            $(".noregex").removeClass("ajax-in-progress");

                            // Loading animasyonunu kapat
                            $("button.btn-next span.loading").addClass("d-none").removeClass("d-flex").attr("disabled", false);
                            $("button.btn-next span.text").addClass("d-flex").removeClass("d-none").attr("disabled", false);

                            if (textStatus === 'timeout') {
                                $(".noregex").addClass("is-valid").removeClass("is-invalid");
                                $(".noregex").parent().removeClass("error border-danger").addClass("success border-success");
                                $(".noregex").parent().find("img").attr("src", base_url + "assets/avatar/" + e + ".png");
                                valid(a);
                            }
                        }
                    });
                } else {
                    $("section.cart .btn-next").attr("disabled", false);
                    $("button.btn-next span.loading").addClass("d-none").removeClass("d-flex");
                    $("button.btn-next span.text").addClass("d-flex").removeClass("d-none");
                }
            }
        });
    }

    if ($(".btn-quick-category").length) {
        function quickComment(e, s) {
            $.ajax({
                type: "POST",
                url: "https://popigram.com/ajax/quickcomment/",
                data: {
                    slug: e,
                    count: s
                },
                success: function (response) {
                    $("#comments").val(response).triggerHandler('customAction');
                    if ($("#comments").val().split("\n").length == $("textarea#comments").attr("data-max")) {
                        $("#comments").parent().removeClass("error").addClass("success");
                        $("#comments").removeClass("is-invalid").addClass("is-valid");
                        $("#comments").parent().removeClass("border-danger").addClass("border-success");
                        a = jQuery.grep(a, function (value) {
                            return value != lang_yorum_gerekli;
                        });
                    } else {
                        $("#comments").parent().addClass("error border-danger");
                        if ($.inArray(lang_yorum_gerekli, a) === -1) a.push(lang_yorum_gerekli);
                    }
                    if ($(".ajaxcheck").length <= 0) valid(a);
                }
            });
        }

        $(".btn-quick-category").click(function () {
            let slug = $(this).attr("data-slug");
            let count = $(this).attr("data-count");
            $(this).toggleClass("active");
            let slugs = [];
            $(".btn-quick-category.active").each(function () {
                slugs.push($(this).attr("data-slug"));
            });
            quickComment(slugs, count);
        });

        $("textarea#comments").on('customAction', function () {
            let count = $("#comments").val().split("\n").length;
            $("span.change").html(count);
        });
    }

    function valid(e) {
        $("button.btn-next span.loading").addClass("d-none").removeClass("d-flex").attr("disabled", false);
        $("button.btn-next span.text").addClass("d-flex").removeClass("d-none").attr("disabled", false);

        let a = e.length;
        let s = $(".inputgroup.error").length;
        let successGroups = $(".inputgroup.success").length;

        if (s === 0) {
            $(".btn.btn-next").prop("disabled", false);
        } else {
            $(".btn.btn-next").prop("disabled", true);
        }

        if (a) {
            let errorList = [];
            $.each(e, function (index, message) {
                if ($.inArray(message, errorList) === -1) {
                    errorList.push("<li><p>" + message + "</p></li>");
                }
            });
            $(".privateprofile").html("<ul>" + errorList.join("") + "</ul>").fadeIn();
        } else {
            $(".privateprofile").fadeOut();
        }
    }

    $("#comments").length && $("#comments").on("input propertychange paste DOMSubtreeModified customAction", function () {
        if ($("#comments").val().split("\n").length == $("textarea#comments").attr("data-max")) {
            $("#comments").parent().removeClass("error border-danger");
            a = jQuery.grep(a, function (value) {
                return value != lang_yorum_gerekli;
            });
        } else {
            $("#comments").parent().addClass("error border-danger");
            if ($.inArray(lang_yorum_gerekli, a) === -1) a.push(lang_yorum_gerekli);
        }
        valid(a);
    });
}

$('.noregex.ajaxcheck').on('keyup', function() {
    let $input = $(this);
    let dataType = $input.data('type');
    let placeholder = $input.attr('placeholder');

    if (dataType === "Takipçi") {
        let value = $input.val();

        if (placeholder.startsWith('@') && !value.startsWith('@')) {
            value = '@' + value;
        }

        value = value.replace(/İ/g, 'I').replace(/ı/g, 'i')
            .replace(/Ş/g, 'S').replace(/ş/g, 's')
            .replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
            .replace(/Ü/g, 'U').replace(/ü/g, 'u')
            .replace(/Ç/g, 'C').replace(/ç/g, 'c')
            .replace(/Ö/g, 'O').replace(/ö/g, 'o');

        $input.val(value);
    }
});


function telafiTalepEt(e, a) {
    let s = $(this);
    $.ajax({
        type: "GET",
        url: "https://popigram.com/ajax/telafitalepet/" + e + "/" + a + "/",
        success: function (e) {
            1 == e.status ? (s.remove(), Swal.fire({
                icon: "success",
                title: lang_success,
                text: lang_telafi,
                toast: !0,
                position: "top-right",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0
            })) : Swal.fire({
                icon: "error",
                title: "",
                text: lang_telafi_basarisiz,
                toast: !0,
                position: "top-right",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0
            })
        }
    })
}

function deleteitem(e) {
    $.ajax({
        type: "POST",
        url: "https://popigram.com/ajax/deleteitem/" + e + "/",
        data: {
            id: e,
            action: "deleteitem"
        },
        success: function (e) {
            location.reload()
        }
    })
}

$("section.checkorder .btn-submit").click(function () {
    var e = $("input#orderid").val();
    var m = $("input#email").val();
    $.ajax({
        type: "POST",
        url: "https://popigram.com/ajax/checkorder/",
        data: {
            id: e,
            email: m,
            action: "checkorder"
        },
        success: function (e) {
            1 == e.status ? window.location.replace("/checkorder/" + e.hash + "/" + e.email) : Swal.fire("", e.msg, "error")
        }
    })
}), $("div.checkorder .btn-submit").click(function () {
    var orderId = $("input#orderid_mobile").val();
    var email = $("input#email_mobile").val();

    $.ajax({
        type: "POST",
        url: "https://popigram.com/ajax/checkorder/",
        data: {
            id: orderId,
            email: email,
            action: "checkorder"
        },
        success: function (response) {
            if (response.status) {
                $("input#orderid_mobile").removeClass("is-valid").addClass("is-valid");
                window.location.replace("/checkorder/" + response.hash + "/" + response.email);
            } else {
                $("input#orderid_mobile").removeClass("is-valid").addClass("is-invalid");

                $("section.mobilemenu").fadeToggle();
                $("header .btn-menu").find("i").toggleClass("ri-menu-3-line").toggleClass("ri-close-line");

                Swal.fire("", response.msg, "error")

            }
        },
        error: function (xhr, status, error) {
            $("input#orderid_mobile").removeClass("is-valid").addClass("is-invalid");
        }
    });
});

$(".post-area button.loadmore").click(function () {
    let end_cursor = $(this).attr("data-end-cursor");
    let username = $(this).attr("data-username");
    let platform = $(this).attr("data-platform");

    $(this).find("span.loading").removeClass("d-none").addClass("d-flex");
    $(this).find("span.text").removeClass("d-flex").addClass("d-none");

    $.ajax({
        type: "POST",
        url: "https://popigram.com/ajax/" + platform + "loadmore/",
        data: {
            end_cursor: end_cursor,
            username: username,
        },
        success: function (e) {
            e = JSON.parse(e);
            let posts = e;

            let html = "";
            if (posts.length >= 2) {
                $.each(posts, function (index, post) {
                    html = "";
                    if (package_type == "Beğeni") {
                        pt_icon = "ri-heart-fill";
                        pt_number = post.likes;
                    } else {
                        pt_icon = "ri-eye-line";
                        pt_number = post.views;
                    }


                    if (post.end_cursor) {
                        $(".bayimodal .modal-dialog .modal-content button.loadmore").show();
                        $(".bayimodal .modal-dialog .modal-content button.loadmore").removeAttr("disabled");
                        $(".bayimodal .modal-dialog .modal-content button.loadmore").attr("data-end-cursor", post.end_cursor);
                    } else {
                        $(".bayimodal .modal-dialog .modal-content button.loadmore").hide();
                    }

                    if (pt_number === -1) {
                        html = "<div class=\"col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 \"><div class=\"item disabled\" data-url='" + post.url + "'>\n" +
                            "<img src=\"" + post.img_url + "\" class=\"img-fluid\" width=\"210\" height=\"210\" alt=\"\">\n" +
                            "<div class='lock'><i class='ri-lock-password-fill'></i> <span>Beğeni sayısı gizli olduğu için sipariş veremezsiniz.</span></div><div class=\"detail d-flex align-items-center gap-1\">\n" +
                            "<i class=\"" + pt_icon + "\"></i> <span>" + pt_number + "</span> +" + package_quantity + "</div>\n" +
                            "</div></div>";
                    } else {
                        html = "<div class=\"col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 \"><div class=\"item\" data-url='" + post.url + "'>\n" +
                            "<img src=\"" + post.img_url + "\" class=\"img-fluid\" width=\"210\" height=\"210\" alt=\"\">\n" +
                            "<div class=\"detail d-flex align-items-center gap-1\">\n" +
                            "<i class=\"" + pt_icon + "\"></i> <span>" + pt_number + "</span> +" + package_quantity + "</div>\n" +
                            "</div></div>";
                    }

                    $(".row.posts").append(html);
                });

                $(".bayimodal .modal-dialog .modal-content button.loadmore").find("span.loading").removeClass("d-flex").addClass("d-none");
                $(".bayimodal .modal-dialog .modal-content button.loadmore").find("span.text").removeClass("d-none").addClass("d-flex");
            } else {
                $(".post-area button.loadmore").remove();
            }
        }
    });
});
