# Cellarviz

This is a simple React app that visualizes my wine cellar, using data pulled
from [cellartracker](http://www.cellartracker.com). Right now, it's very
specific to the layout of my cellar (which is a bunch of square boxes divided
into four sections each that can hold 12 bottles in total) - that layout is
declared in [Cellar.js](src/Cellar.js), and you can see it visually by going to
the version that's published to [GitHub
pages](https://acbeers.github.io/cellarviz/) - you won't see anything but the
layout of the boxes in my cellar there. Were you to log in with my credentials,
that layout would be filled with a circle for each bottle of wine.

The original README, created by Create React App, is [here](README-dev.md),
which contains useful information about developing in that environment.

If this is interesting to you, generalizing the approach to other wine cellar
layouts would be possible.
