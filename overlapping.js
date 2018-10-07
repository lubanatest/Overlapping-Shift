
/********************************************/
/*       Check Overlapping Function         */
/********************************************/

function isOverlapping(shift1, shift2) {
  // Two different employees
  if (shift1.employee !== shift2.employee)
    return false;
  
  // Assuming that:
  // shift1.startTime < shift1.endTime AND
  // shift2.startTime < shift2.endTime
  // As the times are validated before executing this function
  
  return !(shift1.endTime <= shift2.startTime || shift1.startTime >= shift2.endTime);
}

/********************************************/
