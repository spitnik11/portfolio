# portfolio tasks — `just` fronts this repo's package.json scripts.
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

# show the task list
default:
    @just --list

# install dependencies
setup:
    npm install

dev:
    npm run dev

build:
    npm run build

start:
    npm run start

lint:
    npm run lint
