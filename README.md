# quiz

<!DOCTYPE html>
<html lang="da" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Quiz</title>
  <link rel="stylesheet" href="css/master.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body style="background-color: #191970">
  <div class="bg-dark mt-3 me-auto ms-5 center-txt circle">
      <h1 id="score" class="circle-text text-white">0</h1>
  </div>
  <div class="center-txt question-frame">
    <h1 class="display-4 text-white">Spørgsmål</h1>
    <hr />
    <h2 class="text-white" id="question-text">Tryk på knappen for at starte quizzen.</h2>
    <hr />
    <div class="center d-grid gap-3 col-3 hidden">
      <button type="button" class="answer hidden" id="correct"></button>
      <button type="button" class="answer hidden"></button>
      <button type="button" class="answer hidden"></button>
      <button type="button" class="answer hidden"></button>
      <button type="button" class="btn btn-info btn-lg" id="new-question">Start</button>
    </div>
  </div>
  <!-- <script type="text/javascript" src="js/master.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  <script type="text/javascript" src="js/master.js"></script>
</body>

</html>
