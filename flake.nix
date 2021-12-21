{
  description = "Lapis Re:LiGHTs English fan guide";

  # Also consider nixpkgs/nixos-[RELEASE]
  inputs.nixpkgs.url = "github:nixos/nixpkgs";

  outputs = { self, nixpkgs }:
    let

      # Generate a user-friendly version numer.
      version = "${builtins.substring 0 8 self.lastModifiedDate}-${self.shortRev or "dirty"}";

      # System types to support.
      supportedSystems = [ "x86_64-linux" ];

      # Helper function to generate an attrset '{ x86_64-linux = f "x86_64-linux"; ... }'.
      forAllSystems = f: nixpkgs.lib.genAttrs supportedSystems (system: f system);

      nixpkgsFor = forAllSystems (system: import nixpkgs { inherit system; });

    in
      {

        devShell = forAllSystems (system:
          let
            pkgs = nixpkgsFor.${system};
            jekyllEnv = pkgs.bundlerEnv {
              name = "jekyllEnv";
              inherit (pkgs) ruby;
              gemfile = ./Gemfile;
              lockfile = ./Gemfile.lock;
              gemset = ./gemset.nix;
            };
          in
            pkgs.stdenv.mkDerivation {
              pname = "lapilai";
              inherit version;

              buildInputs = [
                jekyllEnv
              ];
            }
        );

      };
}
