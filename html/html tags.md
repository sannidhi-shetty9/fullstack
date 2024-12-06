HTML (Hypertext Markup Language) is the standard markup language for creating web pages. HTML consists of a series of elements, which are enclosed in tags. Each tag can have attributes that provide additional information about the element. Here are some common HTML tags along with their attributes:

1. **`<html>`**: Represents the root of an HTML document.

   - Attributes: `lang` (specifies the primary language for the content of the HTML document)

2. **`<head>`**: Contains metadata about the HTML document.

   - No specific attributes, but commonly used child elements include `<title>`, `<meta>`, `<link>`, `<style>`, and `<script>`.

3. **`<title>`**: Defines the title of the document.

   - No specific attributes.

4. **`<meta>`**: Provides metadata about the HTML document.

   - Attributes: `name`, `content`, `charset`, `http-equiv`, `viewport`, etc.

5. **`<link>`**: Defines the relationship between the current document and an external resource.

   - Attributes: `rel`, `href`, `type`, `media`, `sizes`, etc.

6. **`<style>`**: Contains CSS (Cascading Style Sheets) rules for styling the document.

   - Attributes: `type`, `media`, `title`, etc.

7. **`<script>`**: Defines client-side JavaScript.

   - Attributes: `src`, `type`, `async`, `defer`, etc.

8. **`<body>`**: Contains the content of the HTML document.

   - Attributes: `background`, `bgcolor`, `text`, `link`, `vlink`, `alink`, etc.

9. **`<div>`**: Represents a division or section of the document.

   - Attributes: `class`, `id`, `style`, `title`, etc.

10. **`<span>`**: Used for grouping and applying styles to inline elements.

    - Attributes: `class`, `id`, `style`, `title`, etc.

11. **`<a>`**: Defines a hyperlink.

    - Attributes: `href`, `target`, `rel`, `download`, `type`, etc.

12. **`<img>`**: Embeds an image into the document.

    - Attributes: `src`, `alt`, `width`, `height`, `title`, `ismap`, `usemap`, etc.

13. **`<ul>`** and **`<ol>`**: Defines unordered and ordered lists respectively.

    - Attributes: `type`, `start`, `reversed`, `compact`, etc.

14. **`<li>`**: Defines a list item within `<ul>` or `<ol>`.

    - Attributes: `value`, `type`, `selected`, etc.

15. **`<table>`**: Defines a table.

    - Attributes: `border`, `cellspacing`, `cellpadding`, `width`, `height`, `summary`, etc.

16. **`<tr>`**: Defines a row in a table.

    - Attributes: `valign`, `align`, `bgcolor`, `height`, etc.

17. **`<td>`**: Defines a cell in a table.

    - Attributes: `valign`, `align`, `bgcolor`, `colspan`, `rowspan`, `headers`, etc.

18. **`<form>`**: Defines an HTML form for user input.
    - Attributes: `action`, `method`, `enctype`, `target`, `autocomplete`, etc.

These are just some of the most commonly used HTML tags and their attributes. There are many more tags and attributes available for different purposes in HTML.

---

Certainly! Here are more HTML tags along with their attributes and possible values:

19. **`<input>`**: Defines an input control.

    - Attributes: `type` (text, password, checkbox, radio, submit, reset, file, etc.), `name`, `value`, `placeholder`, `disabled`, `readonly`, `required`, `maxlength`, `pattern`, `autocomplete`, etc.

20. **`<textarea>`**: Defines a multiline input control.

    - Attributes: `name`, `rows`, `cols`, `disabled`, `readonly`, `required`, `maxlength`, `placeholder`, etc.

21. **`<select>`**: Defines a dropdown list.

    - Attributes: `name`, `size`, `multiple`, `disabled`, `required`, etc.
    - Child elements: `<option>`: Defines an option in a dropdown list.
      - Attributes: `value`, `selected`, `disabled`, etc.

22. **`<button>`**: Defines a clickable button.

    - Attributes: `type` (submit, reset, button), `name`, `value`, `disabled`, `form`, etc.

23. **`<label>`**: Defines a label for an `<input>` element.

    - Attributes: `for`, `form`, etc.

24. **`<iframe>`**: Defines an inline frame for embedding another document.

    - Attributes: `src`, `width`, `height`, `frameborder`, `allowfullscreen`, `sandbox`, etc.

25. **`<audio>`**: Embeds sound content in a document.

    - Attributes: `src`, `controls`, `autoplay`, `loop`, `preload`, `volume`, `muted`, etc.
    - Child elements: `<source>`: Defines multiple media resources for `<audio>` element.
      - Attributes: `src`, `type`, `media`, etc.

26. **`<video>`**: Embeds video content in a document.

    - Attributes: `src`, `controls`, `autoplay`, `loop`, `preload`, `width`, `height`, `poster`, `volume`, `muted`, etc.
    - Child elements: `<source>`: Defines multiple media resources for `<video>` element.
      - Attributes: `src`, `type`, `media`, etc.

27. **`<embed>`**: Embeds external content (e.g., multimedia) into a document.

    - Attributes: `src`, `type`, `width`, `height`, `autoplay`, `loop`, `preload`, etc.

28. **`<canvas>`**: Defines a container for graphics.

    - Attributes: `id`, `width`, `height`, etc.

29. **`<svg>`**: Defines a container for SVG graphics.

    - Attributes: `width`, `height`, `viewBox`, etc.
    - Child elements: Various SVG elements like `<rect>`, `<circle>`, `<path>`, etc.

30. **`<meter>`**: Defines a scalar measurement within a known range.

    - Attributes: `value`, `min`, `max`, `low`, `high`, `optimum`, etc.

31. **`<progress>`**: Represents the progress of a task.

    - Attributes: `value`, `max`, etc.

32. **`<details>`**: Defines additional details that the user can view or hide.
    - Attributes: `open`, etc.
    - Child elements: `<summary>`: Defines a visible heading for the `<details>` element.

These tags and their attributes provide a wide range of functionality for creating interactive and multimedia-rich web pages.

---

Certainly! Here are different types of buttons in HTML along with examples:

1. **Submit Button**:

   - This button submits a form when clicked.

   ```html
   <form action="/submit" method="post">
     <input type="text" name="username" placeholder="Enter Username" />
     <input type="submit" value="Submit" />
   </form>
   ```

2. **Reset Button**:

   - This button resets the form fields to their default values.

   ```html
   <form action="/reset" method="post">
     <input type="text" name="username" placeholder="Enter Username" />
     <input type="reset" value="Reset" />
   </form>
   ```

3. **Button Element**:

   - Generic button that can perform any JavaScript action.

   ```html
   <button onclick="alert('Button Clicked!')">Click Me</button>
   ```

4. **Button with Link**:

   - This button acts as a link to another page.

   ```html
   <a href="/home"><button>Go to Home</button></a>
   ```

5. **Image Button**:

   - This button is displayed as an image.

   ```html
   <input type="image" src="button_image.png" alt="Submit" />
   ```

6. **Checkbox and Radio Buttons**:

   - These are used to select one or more options from a list.

   ```html
   <input type="checkbox" id="option1" name="option1" value="Option 1" />
   <input type="radio" id="option1" name="option1" value="Option 1" />
   ```

7. **Button with Confirmation**:

   - This button triggers a confirmation dialog before performing an action.

   ```html
   <button onclick="return confirm('Are you sure?')">Delete</button>
   ```

8. **Floating Action Button (FAB)**:

   - This is typically used in Material Design for a primary action.

   ```html
   <div class="fab">
     <button>FAB Button</button>
   </div>
   ```

9. **Disabled Button**:

   - This button cannot be clicked or used.

   ```html
   <button disabled>Disabled Button</button>
   ```

10. **Button with Icon**:
    - This button contains an icon alongside the text.
    ```html
    <button><i class="fa fa-search"></i> Search</button>
    ```

These examples demonstrate various types of buttons that can be used in HTML for different purposes such as form submission, navigation, confirmation, etc.

---

Sure, here are examples of checkbox and radio button usage in HTML:

1. **Checkbox**:

   - Checkboxes allow users to select one or more options from a list.

   ```html
   <form>
     <input type="checkbox" id="option1" name="option1" value="Option 1" />
     <label for="option1">Option 1</label><br />
     <input type="checkbox" id="option2" name="option2" value="Option 2" />
     <label for="option2">Option 2</label><br />
     <input type="checkbox" id="option3" name="option3" value="Option 3" />
     <label for="option3">Option 3</label><br />
   </form>
   ```

2. **Radio Button**:
   - Radio buttons allow users to select only one option from a list.
   ```html
   <form>
     <input type="radio" id="option1" name="options" value="Option 1" />
     <label for="option1">Option 1</label><br />
     <input type="radio" id="option2" name="options" value="Option 2" />
     <label for="option2">Option 2</label><br />
     <input type="radio" id="option3" name="options" value="Option 3" />
     <label for="option3">Option 3</label><br />
   </form>
   ```

In the checkbox example, users can select multiple options by checking multiple checkboxes. Each checkbox should have a unique ID and the `name` attribute should be the same for all checkboxes in a group to associate them. When the form is submitted, only the checked checkboxes' values will be sent.

In the radio button example, users can select only one option from the list. Radio buttons within a group must share the same `name` attribute so that only one option can be selected at a time. When the form is submitted, only the value of the selected radio button will be sent.
