$.getJSON("http://api.wipmania.com/jsonp?callback=?", function(data) {
  if (data['address']['country_code'] === 'GB') {
    $('.calvin_klein_find_your_moment, .calvin_klein_just_in_time, .armig').show();
  }
});
