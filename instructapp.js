<script type="text/javascript">
// if iPod / iPhone, display install app prompt
if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i) ||
    navigator.userAgent.match(/android/i)) {
  var store_loc = "itms://itunes.com/apps/raditaz";
  var href = "/iphone/";
  var is_android = false;
  if (navigator.userAgent.match(/android/i)) {
    store_loc = "https://play.google.com/store/apps/details?id=com.avartaka.instructs";
    href = "/android/";
    is_android = true;
  }
  if (location.hash) {
    var app_loc = "raditaz://" + location.hash.substring(2);
    if (is_android) {
      var w = null;
      try {
        w = window.open(app_loc, '_blank');
      } catch (e) {
        // no exception
      }
      if (w) { window.close(); }
      else { window.location = store_loc; }
    } else {
      var loadDateTime = new Date();
      window.setTimeout(function() {
        var timeOutDateTime = new Date();
        if (timeOutDateTime - loadDateTime < 5000) {
          window.location = store_loc;
        } else { window.close(); }
      },
      25);
      window.location = app_loc;
    }
  } else {
    location.href = href;
  }
}
</script>
