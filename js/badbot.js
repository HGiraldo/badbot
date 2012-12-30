(function($) {

Drupal.behaviors.badbot = {
  attach: function (context, settings) {
    if (Drupal.settings.badbot.forms.length) {
      $(Drupal.settings.badbot.forms).each(function(i, form_data) {

        $('#' + form_data.form_id).once('badbot', function() {
          $form = $(this);
          var field_data = $('[name=' + form_data.field + ']', $form).attr('value');

          if (field_data && $('[name=' + form_data.validation_field + ']', $form)) {
            $.get(Drupal.settings.badbot.base_path + '/badbot/token/' + field_data, function(return_data){
              $('[name=' + form_data.validation_field + ']', $form).attr('value', return_data);
            });
          }
        });
      });
    }
  }
};

})(jQuery);