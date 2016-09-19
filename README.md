Matrix Rotator (TDD edition)
===========

**Tests must be written before implementation!**

Write the **rotate** method of the **MatrixRotator** class that accepts one argument, **direction**.
**rotate** must set the object's **matrix** property with a new, rotated matrix.

Rotating a matrix clockwise will rotate every element to it's clockwise position.

example matrix rotation:
original
```
a b c
d e f
g h i
```

rotated clockwise (_CW_)
```
g d a
h e b
i f c
```

rotated clockwise (_CW_) once more
```
i h g
f e d
c b a
```

## Advanced

Once your tests pass, you can move on to the `advanced` branch.

merge `advanced` into your current `master` branch. Follow instructions in the README.

## Install dependencies

```
$ npm install
```

## Run tests

```
$ npm test
```