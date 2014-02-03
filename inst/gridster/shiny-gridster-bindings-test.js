var shinyGridsterInputBinding = new Shiny.InputBinding();
$.extend(shinyGridsterInputBinding, {
  find: function(scope) {
    return $(scope).find(".gridster");
  },
  getValue: function(el) {
    return $(el).serialize();
  },
  setValue: function(el, value) {
  },
  subscribe: function(el, callback) {
    $(el).on("change.shinyGridsterInputBinding", function(e) {
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".shinyGridsterInputBinding");
  }
});

Shiny.inputBindings.register(shinyGridsterInputBinding);