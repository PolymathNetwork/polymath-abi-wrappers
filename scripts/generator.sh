#!/usr/bin/env bash

# params validation
if [[ -z "$1" ]]; then
  echo "Tag is empty"
  exit 1
fi

yarn upgrade polymath-contract-artifacts@git://github.com/PolymathNetwork/polymath-contract-artifacts.git#$1
yarn pre_build && yarn build
git add --all && git commit -m "ts generated from polymath-contract-artifacts#$1" && git push origin master && git tag -a $1 -m "automatic release from polymath-contract-artifacts#$1" && git push origin $1

echo "\nTypescripts successfully created..."