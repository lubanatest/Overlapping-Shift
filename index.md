
<html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="overlapping.js" ></script>
    <script src="shift.js" ></script>
    
    <style>
    .container {
      width: 700px;
    }
    </style>
  </head>
  <body>
    <h3>Overlapping Shift</h3>
    <h3>Shift One</h3>
    
    <div class="container">
    <div><b>Employee ID:</b></div>
    <div><input type='text' class="form-control" name="employee" /></div>
    <div><b>Start Time:</b></div>
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker1').datetimepicker();
            });
        </script>
    </div>
</div>

  </body>
  </html>
