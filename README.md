# Fullscreen Slideshow

>Library/script that you can add to your website with a simple fullscreen slideshow. 

![Example Fullscreen Slideshow](/images/example-fullscreen-slideshow.png?raw=true)

## Table of contents

- [Usage](#usage)
- [Demo](#demo)
- [Contact](#contact)

## Usage

Download the fullscreen-slideshow.js file and add the script tag to the html file, for example:
```html
<script src="./fullscreen-slideshow.js"></script>
```
To add a FullscreenSlideshow call the function:

```javascript
const fullscreenSlideshow = createFullscreenSlideshow(data, options?);
const { open, close, update } = fullscreenSlideshow;
open(); 
```



### **Function parameters**

The ***data*** parameter is an array containing objects containing information about images. 

- ***url*** - path or url to the image, **required**
- ***name*** - name for the image, optional
- ***tags*** - an array containing tags for the image, optional

Example:

```javascript
const data = [
  {
    url: "path_or_url_to_image",
    name: "Siberian tiger",
    tags: ["nature", "wild", ...]
  },
  ...
];
```

The ***options*** parameter is optional (not required). 

Properties:

| Property                 |  Type          | Default         | Description |
| ------------------------ | :------------: | :-------------: | ----------- |
| ***background***         | String         | 'rgb(18,24,31)' | background color |
| ***fontColor***          | String         | '#eee'          | font color |
| ***controls***           | Boolean        | true            |  If true, the arrow icons will be displayed (next / prev image) |
| ***displayText***        | String/Boolean | 'tags'          | It takes values: 'name', 'tags', false or true. Defines what will be displayed under the image. If true, 'tags' will be displayed. If false, nothing will be displayed |
| ***displayNumeration***  | Boolean        | true            | If true, the numeration will be displayed under the photo |

Example
```javascript
const options = {
  background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
  fontColor: "#232323",
  controls: false,
  displayText: "name",
  displayNumeration: false
};
```

Change images (desktop):

- keyboard buttons: ArrowLeft, ArrowUp, ArrowRight and ArrowDown,
- clicking on the next/prev image,
- arrow icons (if controls are set to true)

Change images (mobile): swipe.

Close a full-screen slideshow: keyboard button Escape (desktop), by clicking on the icon (desktop and mobile)



### **Returned value**

The ***createFullscreenSlideshow*** function returns an object containing three functions:

- ***open(index)*** - this function opens a full-screen slideshow, taking as an argument the ***index*** (type number) of the photo to be displayed when opened. The default ***index*** value is 0.
- ***update(data, options)*** - this function updates the ***data*** array or the ***options*** object
- ***close()*** - this function closes a full-screen slideshow

Example:
```javascript
const { open, close, update } = createFullscreenSlideshow(data, options);
open(2);
update(undefined, otherOptions);
update(otherData);
close();
```

## Demo

Example of use on the website: https://martazaorska.github.io/fullscreen-slideshow/

## Contact

Created by [Marta Zaorska](https://martazaorska.github.io/portfolio/).
