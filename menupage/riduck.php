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
      <div class="riduckBtn">
        <button type="button" id="btn">
          <a href="../riduck/ridcuk.html">라이덕 홈페이지 바로가기</a>
        </button>
      </div>
      <!--   <div class="stravaBtn">
        <button type="button" id="btn">
          <a href="../riduck/strava.html">라이덕 스트라바 바로가기</a>
        </button>
      </div> -->
    </div>
    <script>
      fetch("header.html")
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          document.querySelector("header").innerHTML = data;
        });
    </script>
  </body>
</html>
