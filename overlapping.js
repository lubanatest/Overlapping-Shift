
/********************************************/
/*       Check Overlapping Function         */
/********************************************/

function isOverlapping(shift1, shift2) {
  if (shift1.employee !== shift2.employee)
    return false;
  
  return !(shift1.endTime <= shift2.startTime || shift1.startTime >= shift2.endTime);
}

/********************************************/
