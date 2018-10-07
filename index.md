
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
      function checkOverlapping() {
        
        var employee1 = document.getElementById('employee1').value;
        var department1 = document.getElementById('department1').value;
        var startTime1 = $('#datetimepicker1').data('DateTimePicker').date().unix();
        var endTime1 = $('#datetimepicker2').data('DateTimePicker').date().unix();
        
        console.log(startTime1);
        console.log(endTime1);
        
        var employee2 = document.getElementById('employee2').value;
        var department2 = document.getElementById('department2').value;
        var startTime2 = $('#datetimepicker3').data('DateTimePicker').date().unix();;
        var endTime2 = $('#datetimepicker4').data('DateTimePicker').date().unix();;
       
        console.log(startTime2);
        console.log(endTime2);
       
        var shift1 = new Shift(Math.random(), employee1, department1, startTime1, endTime1);
        var shift2 = new Shift(Math.random(), employee2, department2, startTime2, endTime2);
        
        var result = isOverlapping(shift1, shift2);
        console.log(result);
        
        document.getElementById('result').innerHTML = 'Result: ' + result.toString();
      }
    </script>
    <style>
    .container {
      width: 600px;
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
    <div>Employee ID:</div>
    <div><input type='text' class="form-control" name="employee1" id="employee1" value="1"/></div>
    <div>Department:</div>
    <div>
      <select class="form-control" name="department1" id="department1">
        <option>HR Department</option>
        <option>IT Department</option>
        <option>Sales Department</option>
      </select>
    </div>
    <div>Start Time:</div>
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
    
    <div>End Time:</div>
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker2'>
                    <input type='text' class="form-control" id="endTime1" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker2').datetimepicker();
            });
        </script>
    </div>
    </div>
    
    <h3>Shift Two</h3>
    
    <div class="container">
    <div>Employee ID:</div>
    <div><input type='text' class="form-control" name="employee2" id="employee2" value="1"/></div>
    <div>Department:</div>
    <div>
      <select class="form-control" name="department2" id="department2">
        <option>HR Department</option>
        <option>IT Department</option>
        <option>Sales Department</option>
      </select>
    </div>
    <div>Start Time:</div>
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker3'>
                    <input type='text' class="form-control" id="startTime2" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker3').datetimepicker();
            });
        </script>
    </div>
    
    <div>End Time:</div>
    <div class="row">
        <div class='col-sm-6'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker4'>
                    <input type='text' class="form-control" id="endTime2" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker4').datetimepicker();
            });
        </script>
    </div>
    
    <div><input type="button" onclick="checkOverlapping()" value="Check Overlapping" /></div>
    
    <div id="result">
    </div>

  </div>
  </body>
  </html>
