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
    <!--   <header data-include="../header.html"></header> -->
    <div class="menu2">
      <div class="form1Btn">
        <button type="button" id="btn">
          <a href="https://kate.riduck.com/Form/form.html"
            >슬로우트위치 사전조사 바로가기</a
          >
        </button>
      </div>
      <div class="form2Btn">
        <button type="button" id="btn">
          <a href="https://kate.riduck.com/Form/form2.html"
            >슬로우트위치 만족도조사 바로가기</a
          >
        </button>
      </div>
    </div>
    <!--  <script>
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
