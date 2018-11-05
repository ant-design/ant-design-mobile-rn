#!/usr/bin/env bash
# Fix the third party mess. Run this after a `npm/yarn` install.
# This has (hopefully) been addressed by https://github.com/facebook/react-native/pull/21458,
# but at the time of writing (17/10/18) has not been merged into an official RN release.

echo "Fixing React Native third party folder..."
# rm -rf ~/.rncache
cd node_modules/react-native
rm -fr third-party
scripts/ios-install-third-party.sh
cd third-party/glog-0.3.5/
../../scripts/ios-configure-glog.sh
