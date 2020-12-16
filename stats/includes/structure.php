<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Stats | Spillager</title>
    
    <link rel="stylesheet" href="frameworks/css/bootstrap.min.css">
    <link rel="stylesheet" href="frameworks/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="stats/layout/style.css">
    <script src="https://kit.fontawesome.com/dda5cbe6fd.js" crossorigin="anonymous"></script>
</head>

<body>
    <main>

        <div class="stats-title">
            <strong>
                Player Live Stats [Skywars]
            </strong>
            <p>Note: API Key Should match the name, You can generate a new API key by typing /api new on hypixel.</p>
        </div>
        <form method="POST" action="<?php htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="col-lg-12  ">
            <div class="form-group ">


                <input type="text" name="IGN" placeholder="Player IGN" class="form-control  col-12">
                <input type="password" placeholder="API Key" name="API" class="form-control  col-12">
                <button type="submit" class="btn btn-primary col-12 search-submit"><i class="fa fa-search"
                        aria-hidden="true"></i>
                </button>
            </div>
        </form>
        <div class="footer alert <?php echo $alert;?> alert-danger "> <?php echo $alertMessage; ?></div>
    </main>
  
    <script src='frameworks/js/bootstrap.bundle.min.js'></script>
    <script src='frameworks/js/bootstrap.min.js'></script>
</body>

</html>