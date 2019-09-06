#!/usr/bin/env bash
source ./scripts/utils.sh

cleanup_templates

version=$1
underscored_version=${version//./_}

./node_modules/hbs-cli/lib/index.js --data "{ \"version\": \"$underscored_version\" }" ./pre_templates/contract.handlebars --output ./
./node_modules/hbs-cli/lib/index.js --data "{ \"version\": \"$underscored_version\" }" ./pre_templates/partials/* --output ./partials

mv contract.html contract.handlebars
mv partials/callAsync.html partials/callAsync.handlebars
mv partials/event.html partials/event.handlebars
mv partials/tx.html partials/tx.handlebars
