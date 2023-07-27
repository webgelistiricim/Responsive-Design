  $(document).ready(function(){
        $('.log-btn').click(function(){
            $('.log-status').addClass('wrong-entry');
           $('.alert').fadeIn(500);
           setTimeout( "$('.alert').fadeOut(1500);",3000 );
        });
        $('.form-control').keypress(function(){
            $('.log-status').removeClass('wrong-entry');
        });

    });


    /*
    <script>
        function girisYap() {
            var kullaniciAdi = document.getElementById('kullanıcıadı').value;
            var sifre = document.getElementById('sifre').value;

            // Kullanıcı adı ve şifreyi kontrol etmek için uygun bir yöntem kullanabilirsiniz.
            // Eğer doğru kullanıcı adı ve şifre girilmişse, istediğiniz sayfaya yönlendirebilirsiniz.
            // Örnek olarak, burada doğru kullanıcı adı ve şifre 'admin' olarak kabul edelim.

            if (kullaniciAdi === 'admin' && sifre === '12345') {
                // Doğru kullanıcı adı ve şifre, istediğiniz sayfaya yönlendirme
                window.location.href = 'istediginiz_sayfa.html';
            } else {
                // Yanlış kullanıcı adı veya şifre, uygun bir hata mesajı gösterebilirsiniz.
                var alertSpan = document.querySelector('.alert');
                alertSpan.style.display = 'block';
            }
        }
    </script>
    */