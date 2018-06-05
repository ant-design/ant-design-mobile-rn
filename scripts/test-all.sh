#!/bin/sh

set -x

npm run lint && \
npm run compile && \
LIB_DIR=lib npm run test -- --no-cache && \
LIB_DIR=es npm run test -- --no-cache && \
npm run test
