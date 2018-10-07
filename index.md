
<html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>

    <script src="overlapping.js" ></script>
    <script src="shift.js" ></script>
    <script>
      function setData() {
        var employee1 = document.getElementById('employee1').value;
        var department1 = document.getElementById('department1').value;
        var startTime1 = document.getElementById('startTime1').value;
        // var endTime1 = document.getElementById('endTime1').value;
      }  
    </script>
    <style>
    .container {
      width: 400px;
    }
    .form-control {
      width: 400px;
    }
    </style>
  </head>
  <body>
    <h3>Overlapping Shift</h3>
    <h3>Shift One</h3>
    
    <div class="container">
    <div><b>Employee ID:</b></div>
    <div><input type='text' class="form-control" name="employee1" id="employee1"/></div>
    <div><b>Department:</b></div>
    <div>
      <select class="form-control" name="department1" id="department1">
        <option>HR Department</option>
        <option>IT Department</option>
        <option>Sales Department</option>
      </select>
    </div>
    <div><b>Start Time:</b></div>
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" id="startTime1" />
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
    
    <div><input type="button" onclick="setData()" value="Check Overlapping" /></div>

  </div>
  </body>
  </html>
