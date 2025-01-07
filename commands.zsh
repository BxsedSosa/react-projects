filename=$1

npm init react-app $filename

cd $filename

npm uninstall react react-dom

npm install react@18 react-dom@18

npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0

npm install --force
