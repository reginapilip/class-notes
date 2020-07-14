# Fundamentals: Selection Tools Overview

## Tools
- Marquee
- Lasso
- Quick Selections
- Magic Wand Tool
- Quick Masks (not an official selection tool)
- Select and Mask Tool

### Marquee

*Keyboard shortcut = "M"*

Allows to select pixels using geometric shapes, by clicking and dragging. 

1. Rectangular Marquee
2. Elliptical Marquee
3. Single Row or Single Column Marquee (not commonly used)

Typically used in conjunction with layer masks, (allowing to paint in and reveal or conceal areas of an image in a non-destructive way)

### Lasso

*Keyboard Shortcut = "L*

A more precise tool, as compared to the Marquee tool.

1. Lasso
2. Polygonal Lasso
3. Magnetic Lasso

The **lasso** is a freehand method of drawing out the are which you want to select.

The **polygonal** and **magnetic** lassos use adjoining anchor points.

**How to Use** 
- **Lasso** Simply click your starting point on the image and trace out the area of your selection. In order to complete the selection we must return our path back to its origin point, otherwise the selection will remain incomplete.
- **Poly Lasso** works by clicking invisible anchor points using straight lines to draw out an area to make the selection. The closer the lines, the more precise the selection. We must return our path back to its origin point, otherwise the selection will remain incomplete.
- **Magnetic Lasso** sets anchor points automatically as you draw a line to isolate a geometric object in an image or an area that has different colors and values than those of a surrounding areas. You can also set manual anchor points by clicking as you draw the line. (work is undone by using backspace or ctrl+z and it removes each anchor point in reverse order)

### Quick selections

*Keyboard Shortcut = "W"*

Works by **adding and subtracting selections of areas of an image**. The **user clicks and paints** and the software does the guess work of selection based upon the colors/values you are clicking.

`Note:  Auto enhance softens the selection boundary. Selecting this option will automatically refine the edges similar to what can be done using the former Refine Edge tool.`

### Magic Wand Tool

This tool works by **detecting color and brightness levels to make pixel selections**. When clicking an area of an image, the wand selects pixels with the same color and brightness values.

**Tolerance** increases/decreases the sensitivity of the wand to color and brightness values. The Tolerance setting can be found in the options bar above our document window. It works by setting a square pixel radius which the tool sample from as we click on our image. If we set our Tolerance to 50 pixels, the Wand will sample a 50 X 50 pixel radius, selecting all the colors and values within that sample area. Increasing the Tolerance just increases the sample area for which it measure the colors and tones, resulting in a much larger selection. Therefore the larger the Tolerance the less precise and vice versa.

- Tolerance range: 0 (1px radius) - 255 (entire image)
- Anti-alias (smoother edge for selection)
- Contiguous (selects adjacent areas of similar colors only - not all colors in img)

### Quick masks

 *Keyboard Shortcut = "Q"*

Probably the fastest way to make a selection is to use Quick Masks. By Selecting the Quick Mask button at the bottom of the tool bar (keyboard shortcut “Q”). We can start painting in the area in which we want to make our selections. Once we have painted in our desired area, hitting the tool icon or “q” again will exit Quick Mask mode and the selection will remain drawn.

Painting with a white brush will reveal the selection area while painting with a black brush will conceal.

## Select and Mask Tool (formerly "Refine Edge Tool")

It is accessible only when any of the selection tools are in use (except Quick Mask). This tool allows us to refine our selections even further by way of opening a new document window with a new set of tools.

We can access Select and Mask from the Options Bar when using any of the Selection tools, or in the tools bar “Select > Select and Mask…”, or via the keyboard shortcut “Alt + Ctrl + R

### Select and Mask Toolbar

The Tool bar consists of six tools that we can use the refine our selections:

- Quick Selection: Creates a selection based on similar pixels and edge detection (though not as accurate as Refine Edge Brush)
- Refine Edge Brush Tool: A Brush with Edge detection capabilities.
- **Brush Tool** Creates a Selections by painting with a Brush.
- **Lasso Tool** Creates a selection using the freehand Lasso.
- **Hand Tool** Allows us the ability to move around our image.
- **Zoom Tool** Allows us to magnify the image.

All of these tools work just as they would outside of the Select and Mask workspace with one exception – the Refine Edge Brush tool, which only exists in this workspace.

### Select and Mask Properties Panel

- **View Modes** Provide different viewing modes to see the selections you make
  - Onion Skin (O)
  - Overlay (V)
  - On Black (A)
  - On White (T)
  - Black & White (K)
  - On Layers (Y)
- **Edge Detection** Detects edge depending on sharpness or softness of edges
  - Radius
  - Smart radius
- **Global Refinement** Refines general outline of selection
  - Smooth
  - Feather
  - Contrast
- **Output Settings** Provides a list of output choices, once you complete your selection process
  - Selection
  - Layer Mask
  - New Layer
  - New Layer with Layer Mask
  - New Document
  - New Document with Layer Mask

## Why Use Selections?

- Selections can be cut, copied, moved and pasted anywhere in a document using layers. 
- Working with selections and layers in general is the ability to work **non-destructively**\*.

\* Nondestructive editing allows you to make changes to an image without overwriting the original image data, which remains available in case you want to revert to it. Because nondestructive editing doesn’t remove data from an image, the image quality doesn’t degrade when you make edits. (Adobe)

### Resource:
- **Retouching Academy** Photoshop Fundamentals: Selection Tools Overview