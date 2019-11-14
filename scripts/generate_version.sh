#!/usr/bin/env bash

version=$1
./node_modules/@0x/abi-gen/bin/abi-gen.js --abis "node_modules/@polymathnetwork/contract-artifacts-${version//./-}/lib/artifacts/@(*).json" --template contract.handlebars --partials 'partials/**/*.handlebars' --output "src/generated-wrappers/$version/"