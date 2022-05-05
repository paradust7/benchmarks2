#!/bin/bash -eux

MINETEST_REV=`cat minetest.rev`
IRRLICHT_REV=`cat irrlicht.rev`
REPO_NAME=$(basename "$GITHUB_REPOSITORY")

if ! git diff-index --quiet --cached HEAD ; then
  echo "Update detected. Pushing changes"
  git commit -m "Minetest: ${MINETEST_REV} | Irrlicht: ${IRRLICHT_REV}"
  git push "https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${REPO_NAME}.git"
else
  echo "No update detected"
fi

