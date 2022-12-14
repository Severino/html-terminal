Transforms the body element to a terminal. And exposes a few functions
to easily log events directly to the HTML page.

## Functions

```js
log(message, ?styles)
notice(message, ?styles)
warn(message, ?styles)
error(message, ?styles)
```

All of these functions log a message to the body. They only
differ by the text color of the output:
log=white, notice=blue, warn=yellow, error=red.

The `message` is the text content of the line that should be written.

The `styles` is an optional object to modify the css property on the log.


## Styles

The styling of the output can be changed globally by modifying `htmlTerminalStyles`.
Alternatively you may use the styles object of the single function.


## Scroll

By default, the app always scrolls to the latest (most-down) element using an animation.
Scrolling can be turned off by setting `htmlTerminalAutoScroll` to false. 