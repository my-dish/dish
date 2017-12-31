# @my-dish/generator-babel-template

Create `.babelrc`.  

## Usage
```sh
$ npm i -g @my-dish/generator-babel-template
$ yo
```

## Presets
- babel-preset-env(default: on)
- babel-preset-stage-1(default: on)
- babel-preset-stage-2
- babel-preset-stage-3
- babel-preset-flow
- babel-preset-react

## Output
```json
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ],
    "stage-1"
  ]
}
```
