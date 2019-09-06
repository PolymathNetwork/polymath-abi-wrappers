function cleanup_templates () {
  rm -f contract.handlebars
  rm -f partials/callAsync.handlebars partials/event.handlebars partials/tx.handlebars
}