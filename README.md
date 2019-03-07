# JavaScript Hijri/Gregorian Datepicker Library

&nbsp;

## Demo
Demo [here](https://zulns.github.io/Datepicker.js/).

## Dependencies
- [HijriDate.js](https://github.com/ZulNs/HijriDate.js) which allows the use of
[`HijriDate`](https://zulns.github.io/HijriDate.js/hijri-date-api-doc.html) objects, JS library to calculates Hijri dates in the same way as built-in
`Date` object calculates Gregorian dates.

- [w3css](https://github.com/ZulNs/w3css), originally forked from [CSS Framework](https://github.com/JaniRefsnes/w3css) by
[Jan Egil Refsnes](https://github.com/JaniRefsnes) for styling this widget. 

## Usage
Simply put this code snippet to anywhere you want in the body of your html file:

### Offline
```html
<div id="datepicker"></div>
<link rel="stylesheet" href="../w3css/w3.css" />
<script type="text/javascript" src="../HijriDate.js/hijri-date.js"></script>
<script type="text/javascript" src="datepicker.js"></script>
<script type="text/javascript">
    let datepicker = new Datepicker();
    document.getElementById('datepicker').appendChild(datepicker.getElement());
    // or use
    // datepicker.attachTo(document.getElementById('datepicker'));
    // other code
</script>
```

### Online
```html
<div id="datepicker"></div>
<link rel="stylesheet" href="https://zulns.github.io/w3css/w3.css" />
<script type="text/javascript" src="https://zulns.github.io/HijriDate.js/hijri-date.js"></script>
<script type="text/javascript" src="https://zulns.github.io/Datepicker.js/datepicker.js"></script>
<script type="text/javascript">
    let datepicker = new Datepicker();
    document.getElementById('datepicker').appendChild(datepicker.getElement());
    // or use
    // datepicker.attachTo(document.getElementById('datepicker'));
    // other code
</script>
```

## Supported Languages
Languages currently supported are:
- Arabic (`"ar"`)
- English (`"en"`)
- Indonesian (`"id"`)

You can extend with your own language by adding this code snippet (assume your language is English):
```javascript
Datepicker.language["en"] = {
    isRTL: false,             // or true for right to left language
    eraSuffix: ["AD", "BC"],  // suffix for Gregorian era
    hEraSuffix: ["H", "BH"],  // suffix for Hijri era
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    weekdayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    weekdayShortNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    hMonthNames: [
        "Muharram",
        "Safar",
        "Rabi'ul-Awwal",
        "Rabi'ul-Akhir",
        "Jumadal-Ula",
        "Jumadal-Akhir",
        "Rajab","Sha'ban",
        "Ramadan",
        "Syawwal",
        "Dhul-Qa'da",
        "Dhul-Hijja"
    ];
};
```

## API Documentation
API doc [here](datepicker-api-doc.md).

&nbsp;

&nbsp;

&nbsp;

---
#### Designed By ZulNs
##### @Gorontalo, 8 January 2019
---
