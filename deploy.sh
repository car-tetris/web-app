#!/usr/bin/env bash
env=$1;
environments=(test production);


echo "************ start deploying ************";

if [ -z "$env" ]
  then
    echo "************ deploy nothing, can't detect branch ************";
    exit 1;
fi

if [ $env == "production" ]
  then
    echo "************ deploy production ************"
elif [ $env == "test" ]
  then
    echo "************ deploy test ************"
else
    echo "************ deploy nothing, can't detect branch ************";
    exit 1;
fi

echo "************ install dependencies ************";
npm install

echo "************ build ************";
npm run build:$env

echo "************ copy files ************";
rm -R ../public/*
cp -R dist/* ../public/
