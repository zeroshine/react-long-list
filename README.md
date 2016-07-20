# react-long-list
A performance experiment for rendering 10000 checkboxes by React.js

### Install Node Module

```
npm install
```

### Run without NODE_ENV = production

```
npm run dev
```

### Run with NODE_ENV = production

```
npm run production
```

### Use direct jsx React Element instead of stateless functional component

```
npm run no-abstract
```

### Use Redux

```
npm run redux
```

### Result

|               | initial time  | Select All  | Select one  |
| ------------- |--------------:| ----------: |------------:|
| dev build     | 3150 ms       | 1960 ms     | 1860 ms     |
| production    | 827 ms        | 314 ms      | 241 ms      |
| no-abstract   | 734 ms        | 164 ms      | 160 ms      |
| redux         | 1150 ms       | 359 ms      | 78 ms       |
