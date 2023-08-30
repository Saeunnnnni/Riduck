<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kate.riduck</title>
    <link
      rel="icon"
      href="https://kate.riduck.com/image/common/riduck_logo.png"
    />
    <link
      rel="apple-touch-icon"
      href="https://kate.riduck.com/image/common/riduck_logo.png"
    />
  </head>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    .menu-box {
      display: flex;
      justify-content: space-around;
      background-color: rgb(77, 182, 172, 0.8);
      padding: 20px 0;
    }

    .menu-title > a {
      color: #333;
      font-size: 30px;
      text-align: center;
      line-height: 50px;
      font-weight: bold;
    }
    .sub-menu {
      padding: 20px 0;
    }
    .sub-menu a {
      color: #333;
      font-size: 22px;
      line-height: 40px;
    }
    .sub-menu a:hover {
      font-weight: bold;
    }

    .gnb {
      text-align: center;
      box-shadow: 0 0 3px 0px;
    }
    .gnb img {
      width: 100px;
      height: 30px;
      cursor: pointer;
      margin: 10px 0;
    }
  </style>
  <body>
    <div class="wrap">
      <div class="gnb">
        <div class="top-img">
          <a href="https://kate.riduck.com/">
            <img
              src="https://kate.riduck.com/image/common/riduck_toplogo.png"
              alt="toplogo"
          /></a>
        </div>
      </div>
      <div class="menu-box">
        <ul id="acco">
          <li class="menu-title">
            <a href="#">업무관련링크</a>
            <ul class="sub-menu">
              <li>
                <a
                  href="https://kate.riduck.com/coaching/coaching.php?mento_id=203"
                  >코칭페이지</a
                >
              </li>
              <li>
                <a
                  href="https://rest.riduck.com/report-api/power_calibration.php?order=one&user_id="
                  >파워캘리브레이션 레포트</a
                >
              </li>
              <li>
                <a href="https://https://kate.riduck.com/report2.php?user_id="
                  >종합레포트</a
                >
              </li>
              <li>
                <a
                  href="https://rest.riduck.com/test-api/workout/src/index.php?user_id="
                  >워크아웃</a
                >
              </li>
              <li>
                <a href="https://kate.riduck.com/menupage/work/findUser/find_user.php"
                  >라이덕 userId 검색</a
                >
              </li>
              <li>
                <a href="https://rest.riduck.com/beta/">라이덕 게시판</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul id="acco">
          <li class="menu-title">
            <a href="#">슬로우트위치 관련 링크</a>
            <ul class="sub-menu">
              <li>
                <a href="https://kate.riduck.com/menupage/form/form.html"
                  >설문조사 폼 링크</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <ul id="acco">
          <li class="menu-title">
            <a href="#">업무 관련 외부 페이지</a>
            <ul class="sub-menu">
              <li>
                <a href="https://kate.riduck.com/menupage/riduck/ridcuk.html"
                  >외부 링크 페이지</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
