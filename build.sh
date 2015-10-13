#! /bin/bash

set -eu

nodejs tickets.js

# Create an .odt file using zip:
cd odt
zip -0 -X ../document.odt      mimetype
zip -r    ../document.odt * -x mimetype

