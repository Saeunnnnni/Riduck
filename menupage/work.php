<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kate.riduck</title>
    <link rel="stylesheet" href="../css/menupage.css" />
  </head>
  <body>
    <?php include 'header.php' ;?>
    <div class="menu">
      <div class="coachingBtn">
        <button type="button" id="btn">
          <a
            href="https://rest.riduck.com/json-api/lab/coaching.php?mento_id=203"
            >코칭페이지 바로가기</a
          >
        </button>
      </div>
      <div class="powerBtn">
        <button type="button" id="btn">
          <a
            href="https://rest.riduck.com/report-api/power_calibration.php?order=one&user_id="
            >파워캘리브레이션 바로가기</a
          >
        </button>
      </div>
      <div class="reportBtn">
        <button type="button" id="btn">
          <a href="https://rest.riduck.com/report-api/report2.php?user_id="
            >종합레포트 바로가기</a
          >
        </button>
      </div>
      <div class="workoutBtn">
        <button type="button" id="btn">
          <a
            href="https://rest.riduck.com/test-api/workout/src/index.php?user_id="
            >워크아웃 바로가기</a
          >
        </button>
      </div>
      <div class="userIdBtn">
        <button type="button" id="btn">
          <a href="https://kate.riduck.com/coaching/find_user.php"
            >라이덕 userId 검색 바로가기</a
          >
        </button>
      </div>
      <div class="boardBtn">
        <button type="button" id="btn">
          <a href="https://rest.riduck.com/beta/">라이덕 게시판 바로가기</a>
        </button>
      </div>
    </div>
   
  </body>
</html>
