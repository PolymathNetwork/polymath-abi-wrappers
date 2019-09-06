#!/usr/bin/env bash
source ./scripts/utils.sh
yarn clean

function generate_wrappers_for_version () {
  ./scripts/generate_templates.sh "$1"
  ./scripts/generate_version.sh "$1"

  cleanup_templates
}

generate_wrappers_for_version 3.0.0
generate_wrappers_for_version 3.1.0

yarn prettier_contract_wrappers

echo "\nTypescripts successfully created..."