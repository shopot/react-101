#!/usr/bin/env sh

TS_VERSION="latest"

update_packages() {
  arg1=$1

  PACKAGES=$(cat package.json | tr -d "\n" | tr -d " " | grep -o "\"${arg1}\":{[^}]*}" | grep -o -E '"[@a-z0-9\/\-]+"' | tr -d "\n" | sed -s "s/\"${arg1}\"//g" | sed -s 's/""/ /g' | tr -d '"' | awk '{for (i=1; i<=NF; i++) printf $i "@latest" (i < NF ? " " : "\n")}')

  if [ "$arg1" = "dependencies" ]; then
    echo "Update dependencies: ${PACKAGES}"

    echo "npm install --save ${PACKAGES}" | sh
  else
    echo "Update devDependencies: ${PACKAGES}"

    echo "npm install --save-dev ${PACKAGES}" | sh
  fi
}

update_packages dependencies

update_packages devDependencies

echo "npm install -D typescript@${TS_VERSION}" | sh
