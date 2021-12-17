#!/usr/bin/env nix-shell
#!nix-shell -i bash -p bundler -p bundix -p ruby

bundler config set force_ruby_platform true
bundler package --no-install --path vendor
bundix -l
rm -rf .bundle/ vendor/

# Local Variables:
# mode: sh
# End:
