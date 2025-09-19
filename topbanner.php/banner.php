<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chancellor Profile</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 0;
    }

    /* Top Banner */
    .banner {
      background: url('banner.jpg') no-repeat center center/cover;
      height: 250px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .banner::after {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.4); /* dark overlay */
    }

    .banner h1 {
      position: relative;
      z-index: 2;
      font-size: 26px;
      text-align: center;

    }
  </style>
</head>
<body>

  <!-- Top Banner -->
  <div class="banner">
    <h1>Chancellor of the University</h1>
  </div>


</body>
</html>
