<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>template for Command Line Tool</strong>
</div>

## Usage
1. Edit your comamnd name in `bin` of `package.json`.
2. Type `$ npm link`.
3. Enjoy it!

## Tasks
### changelog
create `CHANGELOG.md`.
```
$ npm run changelog
```

### test
Test runner is [ava](https://github.com/avajs/ava).
```
$ npm test # or npm test:watch
```

### lint
```
$ npm run lint
```

## Directory Structure of the Generated Project
```
.
├── LICENSE
├── README.md
├── lib
│   └── index.js
└── test
    └── cli.js
```
