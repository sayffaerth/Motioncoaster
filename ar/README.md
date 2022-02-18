aframe-ar example
=========================

This is a basic example of AR camera using [aframe-ar](https://github.com/chenzlabs/aframe-ar) with experimental browsers for [ARKit](https://github.com/google-ar/WebARonARKit) and [ARCore](https://github.com/google-ar/WebARonARCore).

It also works in newer versions of the Google Chrome mobile browser. (*recommended - as it was tested like that*)

By simply adding the `ar` component to your [A-Frame](https://aframe.io) scene declaration:

```
<a-scene ar>
...
</a-scene>
```

[aframe-ar](https://github.com/chenzlabs/aframe-ar) will, when using a supported browser, take over the scene camera using information from ARKit / ARCore.


In the current version painting in 3d space is possible via an interactive smartphone wand. A more detailed explanation will follow, as well as an introductory webpage before being launched into ar.

Access the mobile Chrome devtools via chrome://inspect on pc while your phone has USB-debugging enabled and is connected. 

Github hosted weblink: