for file in .angular-cli.json karma.conf.js tsconfig.ng-cli.json
do
  wget https://raw.githubusercontent.com/lathonez/clicker/master/${file}
done

cd src

for file in polyfills.ts test.ts tsconfig.spec.json
do
  wget https://raw.githubusercontent.com/lathonez/clicker/master/src/${file}
done
