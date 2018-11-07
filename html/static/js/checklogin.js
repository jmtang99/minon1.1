//验证是否登陆

let flag=sessionStorage.getItem('flag');
let token=sessionStorage.getItem('token');
let qid=sessionStorage.getItem('id');
if(flag && token && qid){
    let user={'id':qid,
        'token':token
    };
    $.ajax({
        url:uurl+'user/chklogin/',
        type:'post',
        data:JSON.stringify(user),
        dataType:'json',
        success:function (res) {
            if(res['code']){
            }else{
               window.location.href='index2.html'
            }
        },
        error:function () {
            window.location.href='index2.html'
        }
    })
}else{
    res=window.location.href.toString().split('/');
    window.location.href=window.location.href=='http://localhost:63342/minon/html/templates/index2.html'?'####':'index2.html';
}