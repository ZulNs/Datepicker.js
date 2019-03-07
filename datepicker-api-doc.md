# Hijri/Gregorian Datepicker API Documentation

&nbsp;

## Constructor
### Syntax
```javascript
new Datepicker([isHijriMode[, fullYear[, monthIndex[, firstDay[, language[, colorTheme[, width]]]]]]]);
```

### Parameters
- **`isHijriMode`** (optional)<br>
  Boolean value representing the dates mode<br>
  `true`: Hijri dates<br>
  `false`: Gregorian dates<br>
  Default: `false`

- **`fullYear`** (optional)<br>
  Integer value representing the full year. Allow value below 1 (0 or negative value) that indicates before Hijra/Gregorian era. Value 0 for 1 BH/BE, -1 for 2 BH/BE, and so forth.<br>
  Default: current year

- **`monthIndex`** (optional)<br>
  Integer value representing the month, beginning with 0 for Muharram/January to 11 for Dhul-Hijja/December.<br>
  Default: index of current month

- **`firstDay`** (optional)<br>
  Integer value representing the first day of week (0-6).<br>
  Default: `1` (Monday)

- **`language`** (optional)<br>
  String value representing the language used by the widget. Currently three languages are supported.<br>
  `"ar"`: Arabic<br>
  `"en"`: English<br>
  `"id"`: Indonesian<br>
  Default: `"en"`

- **`colorTheme`** (optional)<br>
  Integer value representing the color index (0-22) or string value representing the color theme used by the widget.<br>
  <code>&nbsp;0</code> or `"amber"`<br>
  <code>&nbsp;1</code> or `"aqua"`<br>
  <code>&nbsp;2</code> or `"black"`<br>
  <code>&nbsp;3</code> or `"blue"`<br>
  <code>&nbsp;4</code> or `"blue-grey"`"<br>
  <code>&nbsp;5</code> or `"brown"`<br>
  <code>&nbsp;6</code> or `"cyan"`<br>
  <code>&nbsp;7</code> or `"dark-grey"`<br>
  <code>&nbsp;8</code> or `"deep-orange"`<br>
  <code>&nbsp;9</code> or `"deep-purple"`<br>
  `10` or `"green"`<br>
  `11` or `"grey"`<br>
  `12` or `"indigo"`<br>
  `13` or `"khaki"`<br>
  `14` or `"light-blue"`<br>
  `15` or `"light-green"`<br>
  `16` or `"lime"`<br>
  `17` or `"orange"`<br>
  `18` or `"pink"`<br>
  `19` or `"purple"`<br>
  `20` or `"red"`<br>
  `21` or `"teal"`<br>
  `22` or `"yellow"`<br>
  Default: random color theme

- **`width`** (optional)<br>
  Numeric value representing the width of the widget (280-600) in pixel.<br>
  Default: `300` pixel

## `Datepicker` Instance Methods
- **`.attachTo(parentElement)`**<br>
  Attach this widget element into a parent HTML element designated by `parentElement`.

- **`.getElement()`**<br>
  Returns this widget element.

- **`.getOppositePickedDate()`**<br>
  Returns an opposite date instance of current dates mode. If the current dates mode is Gregorian then this method will return a `HijriDate` instance, whereas if the current dates mode is Hijri then a `Date` instance will be returned.

- **`.getPickedDate()`**<br>
  Returns an instance of `Date` or `HijriDate` depend on widget current dates mode. To conserve the memory, it's important to note that each instance returned by a call to this method, all of them are the same instance and only differs from the moment it represents.

- **`.hide()`**<br>
  Hides this widget.

- **`.pick()`**<br>
  Shows this widget. This is the same with `.show()` method.

- **`.resetDate(fullYear, monthIndex)`**<br>
  Resets the dates with an integer value pointed by `fullYear` and an integer value pointed by `monthIndex`.

- **`.setFirstDayOfWeek(firstDay)`**<br>
  Sets the first day of week with an integer value (0-6) pointed by `firstDay`.

- **`.setFullYear(fullYear)`**<br>
  Sets the full year with an integer value pointed by `fullYear`.

- **`.setHijriMode(hijriMode)`**<br>
  Sets the dates mode with a boolean value pointed by `hijriMode`.<br>
  `true`: Hijri dates<br>
  `false`: Gregorian dates

- **`.setLanguage(language)`**<br>
  Sets the language used by this widget with a string value pointed by `languge`.<br>
  `"ar"`: Arabic<br>
  `"en"`: English<br>
  `"id"`: Indonesian

- **`.setMonth(monthIndex)`**<br>
  Sets the month index with an integer value (0-11) pointed by `monthIndex`.

- **`.setTheme([colorTheme])`**<br>
  Sets the widget color theme with an integer value (0-22) as color index or a string value as color name pointed by `colorTheme`. If this `colorTheme` isn't specified then a random color theme will be applied.<br>
  <code>&nbsp;0</code> or `"amber"`<br>
  <code>&nbsp;1</code> or `"aqua"`<br>
  <code>&nbsp;2</code> or `"black"`<br>
  <code>&nbsp;3</code> or `"blue"`<br>
  <code>&nbsp;4</code> or `"blue-grey"`"<br>
  <code>&nbsp;5</code> or `"brown"`<br>
  <code>&nbsp;6</code> or `"cyan"`<br>
  <code>&nbsp;7</code> or `"dark-grey"`<br>
  <code>&nbsp;8</code> or `"deep-orange"`<br>
  <code>&nbsp;9</code> or `"deep-purple"`<br>
  `10` or `"green"`<br>
  `11` or `"grey"`<br>
  `12` or `"indigo"`<br>
  `13` or `"khaki"`<br>
  `14` or `"light-blue"`<br>
  `15` or `"light-green"`<br>
  `16` or `"lime"`<br>
  `17` or `"orange"`<br>
  `18` or `"pink"`<br>
  `19` or `"purple"`<br>
  `20` or `"red"`<br>
  `21` or `"teal"`<br>
  `22` or `"yellow"`

- **`.setTime(time)`**<br>
  Sets the dates to an integer value pointed by `time` as the time represented by number of milliseconds.

- **`.setWidth(width)`**<br>
  Sets the widget width in pixel with a numeric value (280-600) pointed by `width`.

- **`.show()`**<br>
  Shows the widget. This is the same with `.pick()` method.

- **`.today()`**<br>
  Sets the dates to current year and month.

## `Datepicker` Instance Properties
- **`.onPicked`**<br>
  Assign this property to a function that do some processes when a date was picked. Please note that every time a date is picked, the `.hide()` method always called afterwards.<br>
  For example:
  ```javascript
  let datepicker = new Datepicker();
  datepicker.onPicked = function() {
      // do stuff
  };
  ```

## `Date.prototype` and `HijriDate.prototype` Instance Extended Methods
By using this library, the following methods will be added to both `Date.prototype` and `HijriDate.prototype` instances.
- **`.getDateString()`**
  Returns the picked dates as a human readable string in accordance with predetemined dates mode (Gregorian or Hijri). For example "Friday, 4 January 2019 AD" for the Gregorian dates mode or "Jumu'ah, 27 Rabi'ul-Akhir 1440 H" for the Hijri dates mode.

- **`.getMonthName([monthIndex])`**
  Returns the name of desired month index (0-11) that pointed by `monthIndex` as a human readable string ("January"-"December" or "Muharram"-"Dhul-Hijja"). If `monthIndex` is omitted, instead the current month's name will be returned.

- **`.getWeekdayName([day])`**
  Returns the name of desired day of week (0-6) that pointed by `day` as a human readable string ("Sunday"-"Saturday" or "Ahad"-"Sabt"). If `day` is omitted, instead the name of current day of week will be returned.

- **`.getWeekdayShortName([day])`**
  Returns the short name of desired day of week (0-6) that pointed by `day` as a human readable string ("Sun"-"Sat" or "Ahd"-"Sab"). If `day` is omitted, instead the short name of current day of week will be returned.

- **`.getYearString([fullYear])`**
  Returns the desired full year in integer value that pointed by `fullYear` followed by era suffix as a human readable string. If `fullYear` is omitted, instead the string of current full year will be returned.

&nbsp;

&nbsp;

&nbsp;

---
#### Designed By ZulNs
##### @Gorontalo, 8 January 2019
---
