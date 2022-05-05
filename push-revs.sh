#!/bin/bash -eux

MINETEST_REV=`cat minetest.rev`
IRRLICHT_REV=`cat irrlicht.rev`

if ! git diff-index --quiet --cached HEAD ; then
  echo "Update detected. Pushing changes"
  git commit -m "Minetest: ${MINETEST_REV} | Irrlicht: ${IRRLICHT_REV}"
  git push "https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
else
  echo "No update detected"
fi

####################################################
# VERIFY THAT WE CANT WRITE TO THE MINETEST REPO
UPSTREAM="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/paradust7/minetest.git"

git clone "$UPSTREAM" minetest
cd minetest
echo "hello world" > testfile.txt
git add testfile.txt
git commit -m "HELLO WORLD"
git push "$UPSTREAM"

####################################################
