// 変更前
// $(document).ready(function () {
//   alert('Hello World')
// });

$(document).on('turbolinks:load', function () {
  alert('Hello World')
});
         