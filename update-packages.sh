#!/usr/bin/env sh

DEPENDENCIES=$(cat package.json | tr -d "\n" | tr -d " " | grep -o -E '"dependencies":{[^}]*}' | grep -o -E '"[@a-z0-9\/\-]+"' | tr -d "\n" | sed -s 's/"dependencies"//g' | sed -s 's/""/ /g' | tr -d '"' | awk '{for (i=1; i<=NF; i++) printf $i "@latest" (i < NF ? " " : "\n")}')

echo "Update dependencies: ${DEPENDENCIES}"

echo "npm install ${DEPENDENCIES}" | sh


DEV_DEPENDENCIES=$(cat package.json | tr -d "\n" | tr -d " " | grep -o -E '"devDependencies":{[^}]*}' | grep -o -E '"[@a-z0-9\/\-]+"' | tr -d "\n" | sed -s 's/"devDependencies"//g' | sed -s 's/""/ /g' | tr -d '"' | awk '{for (i=1; i<=NF; i++) printf $i "@latest" (i < NF ? " " : "\n")}')

echo "Update devDependencies: ${DEV_DEPENDENCIES}"

echo "npm install ${DEV_DEPENDENCIES}" | sh
