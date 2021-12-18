#!/usr/bin/env bash

# Scales all images to a maximum height of 300px.

for f in *-orig* ; do
    convert "$f" -resize 'x300>' "${f/-orig/}"
done
