<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kate.riduck</title>
    <link rel="stylesheet" href="../../css/menupage.css" />
  </head>
  <body>
    <?php include '../header.php' ;?>
    <div class="menu">
      <div class="riduckBtn">
        <button type="button" onclick="btn()">
          <a href="https://riduck.com/landing">라이덕 홈페이지 바로가기</a>
        </button>
      </div>
      <div class="stravaBtn">
        <button type="button" onclick="btn()">
          <a href="https://www.strava.com/clubs/959584"
            >라이덕 스트라바 바로가기</a
          >
        </button>
      </div>
      <div class="smsBtn">
        <button type="button" onclick="btn()">
          <a
            href="https://console.coolsms.co.kr/oauth2/login?message=%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%9D%B4%20%ED%95%84%EC%9A%94%ED%95%A9%EB%8B%88%EB%8B%A4&returnUrl=http%3A%2F%2Fconsole.coolsms.co.kr%2Fdashboard"
            >문자 발송 페이지 바로가기</a
          >
        </button>
      </div>
      <div class="naverBtn">
        <button type="button" onclick="btn()">
          <a
            href="https://sell.smartstore.naver.com/?n_query=%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%8A%A4%ED%86%A0%EC%96%B4&NaPm=ct%3Dl9xl9dcw%7Cci%3D0zO0003auQ1xCPO720ZH%7Ctr%3Dbrnd%7Chk%3D762ba79c911864e41987b4e2ca6103635b74e788#/home/about"
            >네이버 스마트스토어 바로가기</a
          >
        </button>
      </div>
    </div>
  <!--   <script>
      fetch("../header.html")
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          document.querySelector("header").innerHTML = data;
        });

      function btn() {
        alert("외부 페이지로 이동합니다.");
      }
    </script> -->
  </body>
</html>
