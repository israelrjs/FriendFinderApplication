$("#submit").on("click", function(event) {
  event.preventDefault();

  var newFriend = {
    name: $("#name")
      .val()
      .trim(),
    photo: $("#photo")
      .val()
      .trim()
  };
  exports.newFriend = newFriend;
});
