// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".saveBtn").on("click", function () {
    const timeBlock = $(this).parent();
    const hour = timeBlock.attr("id");
    const description = timeBlock.find(".description").val();
    localStorage.setItem(hour, description);
  });

  const currentHour = dayjs().hour();

  $(".time-block").each(function () {
    const timeBlock = $(this);
    const hour = parseInt(timeBlock.attr("id").split("-")[1]);

    if (hour < currentHour) {
      timeBlock.addClass("past");
    } else if (hour === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }

    const savedDescription = localStorage.getItem(`hour-${hour}`);
    if (savedDescription) {
      timeBlock.find(".description").val(savedDescription);
    }
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
