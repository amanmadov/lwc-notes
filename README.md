# LWC Zero to Hero



## Lightning Framework

Lightning component framework is a two way framework for developing single bridge applications for mobile and desktop devices.

To create the lighting pages, we have two programming models:

- <strong>Aura Component Model</strong>

- <strong>Lightning Web Components</strong>



### I. Aura Component Model

Aura components use the Aura framework and lighting web components use the standard web components framework.

In 2014, browsers and web standards were only handling minimal tasks such as events, standard elements, and rendering. The frameworks (such as Aura) were responsible for most of the work. As a result, the frameworks took on more responsibility, but websites were not as performance-efficient as they could be.

As the web evolved into a new era in 2019, JavaScript introduced new features that reduced the need for frameworks and shifted more load onto the browser. This led to many cool features being introduced directly into the browser, allowing developers to use them without relying on frameworks.

The cool features include the ability to create components and templates that can run directly in the browser, eliminating the need for separate frameworks. The introduction of the Shadow DOM, module system, and newer versions of JavaScript (such as ECMAScript 6, 7, 8, 9, 10, and 11) also added more functionality. The browser can now handle custom events, standard rendering elements, and leave specialized tasks to the frameworks, such as data services and UI components.



### II. Lightning Web Components

When Salesforce saw the transformation that occurred from 2014 to 2019, they introduced the Lightning Web Component framework. This framework was built on the latest web standards and followed the same concept as the modern web. The Lightning Web Components framework only takes care of security, Lightning Data Services, and base Lightning components, leaving the rest to the browser. The framework also supports the latest JavaScript features, including modules, events, standard elements, and Shadow DOMs.

People often ask what the difference is between Aura and LWC frameworks. The key difference lies in the JavaScript version used. In 2009, ES5 was introduced and it became the most popular version of JavaScript. The Aura framework was built using ES5, which resulted in a large amount of code to write and suboptimal rendering due to limited modern features.

However, in 2015, ES6 was introduced, which was an optimized version of JavaScript, and every year since then, a new version has been released. Based on these ES6 and later versions of the JavaScript, Lightning Web Components (LWC) were developed to support all the latest versions of JavaScript released. LWC has many features, including the power of Shadow DOM, Web Components, Custom Elements, Templates, and Slots.

If someone asks you about the difference between Aura and LWC in an interview, you can say that Aura is an older framework built on the ES5 version of JavaScript. It lacks modern features like module classes and promises, rendering can be slow, and you have to write a lot of code to achieve functionality. On the other hand, Lightning Web Components (LWC) use the latest web standard features and are performance efficient, with cool rendering capabilities. That's the main difference between Aura and LWC.

### <strong>What are the benefits of LWC over Aura? </strong>

The Lightning Components is a programming model for building Lightning components that utilizes web standards concepts like Shadow DOM, rendering, custom events, or ES6 arrow functions. Lightning Web Components only take care of a small piece of code, including security, Lightning Data Service, and base Lightning components, while the rest is taken care of by the browser. It's a lightweight framework, not as heavy as Aura, and because it handles less functionality, the performance is higher. Additionally, you don't need to learn a different framework to develop an application in Salesforce, as Lightning Web Components use plain JavaScript.

Now, one other question is whether Aura will still be in use? Yes, many people use it and you can embed your lightning web component inside the aura component, but you can't do other other way around.

LWC introduced better testing using the Jest framework. You can write test cases for your component to catch bugs in the early stages. In addition, LWC has better security features. The JavaScript strict mode is enforced, meaning you can't write global variables and your variables will not be hoisted. LWC also restricts access to Salesforce global variables.

From an interview perspective, it's important to remember that LWC provides better security, better testing, and the ability to interoperate with Aura components.

Lightning Experience is a modern and intuitive user interface designed for Salesforce. It provides a personalized and seamless experience for users to navigate and interact with their data. The interface is optimized for mobile devices, making it easy to use Salesforce on the go. Lightning Experience also offers powerful analytics and AI-driven insights to help users make informed decisions. In contrast, the classic view is the older and more traditional interface for Salesforce, which may not have the same level of customization and features as Lightning Experience.



## Naming Conventions for Components

There are certain rules for naming components in LWC. The name should begin with a lowercase letter and only contain alphanumeric or underscore characters. It must be unique in the namespace and cannot contain whitespace, hyphens or consecutive underscores. The name should be in camelcase format and should not end with an underscore or consecutive underscores. If a component with the same name already exists in the namespace, it will throw an error to ensure uniqueness. You can not create a component in LWC if you have a component with same name in Aura.



## Sample Component

The Lightning Web Components (LWC) component folder structure is as follows:

- The component folder is named using lowercase letters with no spaces.

- The component folder should contain an XML file with the same name as the folder, which is used to define the component metadata.

- The component folder should contain a JavaScript file with the same name as the folder, which is used to define the component's JavaScript logic.

- The component folder can contain a CSS file with the same name as the folder, which is used to define the component's CSS styles.

- The component folder can contain a HTML file with the same name as the folder, which is used to define the component's HTML markup.

- The component folder can contain a test folder with Jest test files, which are used to write test cases for the component.

- The component folder can contain a configuration file, which is used to define the component's properties and attributes.

Overall, the LWC component folder structure is simple and easy to understand, with all the necessary files for defining the component logic, styling, and markup contained in a single folder.



```javascript
// sampleComponent.js

import { LightningElement } from 'lwc';
export default class Sample extends LightningElement {
    name = "Nury"
}
```

```html
<!-- sampleComponent.html-->

<template>
	<lightning-card title="Sample">
		<div class="slds-var-m-around_medium">
			<div>
				<h1>Hello</h1>
				<h2>My name is {name}.</h2>
			</div>
		</div>
	</lightning-card>
</template>
```

```html
<!-- sampleComponent.js-meta.xml-->

<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>56.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
    </targets>
</LightningComponentBundle>
```



Naming convention examples:

- Kebab case: hello-world-component

- Camel case: helloWorldComponent

- Pascal case: HelloWorldComponent



Each component in LWC is a Javascript class. And classes contain two things the properties and the methods. Properties are the fields that store value inside the class.

```javascript
import { LightningElement } from 'lwc';
export default class Person extends LightningElement {
    name = "Nury"
    gender = "Male"
}
```

These are the properties and these properties are only available inside this particular class. That's why we call them as a local properties. You can't access these variable outside this class.



## Data Binding

Data binding in the lighting web component is the synchronization between the controller and the template (HTML). Template is the HTML and the controller is the JavaScript part of the application. To use data binding we use a class property in the HTML template using curly braces. Value of the property will be rendered on the HTML markup. This is called one way data binding so that it's going from JS to HTML.

A few things are very important to keep in mind while using the data binding:

- In template, we can access property value directly if it is primitive or object property.

- LWC doesn't allow computed expressions like Names[2] or {2+2}.

- Avoid adding spaces around the property for example { data }



## Methods and Two Way Data Binding

To achieve the two way data binding, we need methods. Whenever user change something on the screen(HTML) my property should also update in the JavaScript. That is two way data binding: binding from HTML to JS and JS to HTML as well.

```javascript
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    name = "Nury"
    location = "Kirkland"
    title = "Software Engineer"

    titleHandler(event){
        this.title = event.target.value
    }
}
```

```html
<template>
    <lightning-card title="Two way Binding Sample">
        <div class="slds-var-m-around_medium">
            <div>
                <lightning-input 
                    type="text" 
                    label="Enter title" 
                    onkeyup={titleHandler}>
                </lightning-input>
                <h2>I work as a {title}</h2>
            </div>
        </div>
    </lightning-card>
</template>
```





## @track Properties

If a field’s value changes, and the field is used in a template or in a getter of a property that’s used in a template, the component rerenders and displays the new value. If a field is assigned an object or an array, the framework observes some changes to the internals of the object or array, such as when you assign a new value.

To tell the framework to observe changes to the properties of an object, decorate the field with @track.

When a field is decorated with `@track`, Lightning Web Components tracks changes to the internal values of:

- Plain objects created with <code>{}</code>

- Arrays created with <code>[]</code>

The framework observes mutations made to plain objects and arrays in a recursive fashion, including nested objects, nested arrays, and a mix of objects and arrays. Cyclic references are also handled.

However, the framework doesn't observe mutations made to complex objects, such as objects inheriting from `Object`, class instances, `Date`, `Set`, or `Map`.



```javascript
import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track
    personalInfo = {
        location: {
            born: "Dasoguz",
            lives: "Seattle"
        }
    }

    // this works because of the @track decorator
    cityHandler(event) {
        this.personalInfo.location.lives = event.target.value;
    }
}
```

```html
<template>
	<lightning-card title="Two way Binding Sample">
		<div class="slds-var-m-around_medium">
			<div>
				<lightning-input type="text" label="Enter city" onkeyup={cityHandler}>
				</lightning-input>
				<h2>I live in {personalInfo.location.lives}</h2>
			</div>
		</div>
	</lightning-card>
</template>
```



There is also a workaround to this challenge without using @track decorator. We can change the main object itself to update its property using spread operator.



```javascript
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    personalInfo = {
        location: {
            born: "Dasoguz",
            lives: "Seattle"
        }
    }

    cityHandler(event) {
        this.personalInfo = {...this.personalInfo, location: {born: "Dasoguz",lives: event.target.value}};
    }
}
```



Without using @track, the framework observes changes that assign a new value to a field/property. If the new value is not === to the previous value, the component re-renders.



## Getters in LWC

Let’s assume a scenario where you have to dynamically calculate some value or validate the value of the property before assigning it. Here comes the getter in Lightning Web Component to rescue you from situations to dynamically compute a value.

You can treat getter function as same as JavaScript properties in Lightning web Component. The way you access the properties in HTML, You can access getter in the same way.



```javascript
export default class SampleApp extends LightningElement {
    userList = ["Jim", "John", "Mike"]

    // If I need to update first user in HTML (when it's value changes)
    // this.firstUser = this.userList[0]; is not the ideal solution
    // instead get method below will update the UI and rerender it 
    // every time the first user changes

    get getFirstUser(){
        return this.userList[0].toUpperCase();
    }

    num1 = 10
    num2 = 20

    get getSum(){
        return this.num1 + this.num2;
    }
}
```

```html
<template>
    <lightning-card title="Getters Sample">
        <div class="slds-var-m-around_medium">
            <div>First User is : {getFirstUser}</div>
            <div>Sum of the numbers is : {getSum}</div>
        </div>
    </lightning-card>
</template>
```



- Getters execute after our constructor and ConectedCallback.

- We need to use the “get” keyword before the function to make a getter function.

- If the value which we have used in the getter is changed the getter always re-renders the component.



## Conditional Rendering

A directive is a special attribute that adds dynamic behavior to an HTML template. You can use certain directives on a root <code>&lt;</code>`template`<code>&gt;</code> tag, a nested <code>&lt;</code>`template`<code>&gt;</code> tag, or an HTML element such as a `&lt;p&gt;` tag. Some directives are supported for use with different tags.

<code>if:true|false={expression}</code> conditionally renders DOM elements in a template, calling the expression for each of <code>if:true</code> and <code>if:false</code>. In cases where you chain <code>if:true</code> and <code>if:false</code> directives, they are not as performant nor as lightweight as the <code>lwc:if</code>, <code>lwc:elseif</code>, and <code>lwc:else</code> directives.



```javascript
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    isVisible = false;

    handleClick(){
        this.isVisible = true;
    }

    secretPassword
    dataHandler(e){
        this.secretPassword = e.target.value;
    }

    get validateInput(){
        return this.secretPassword === 'mellon';
    }
}
```

```html
<template>
    <lightning-card title="Conditional Rendering Sample">
        <div class="slds-var-m-around_medium">
            <lightning-button
                variant="brand" 
                label="Login to Page" 
                title="Log In" 
                onclick={handleClick}
                class="slds-var-m-left_x-small">
            </lightning-button>

            <template if:true={isVisible}>
                <div>Welcome</div>
            </template>
            <template if:false={isVisible}>
                <div>Click Button to Login</div>
            </template>

            <lightning-input type="text" label="Type secret elvish word to see the secret phrase" onkeyup={dataHandler}> 
            </lightning-input>
            <template if:true={validateInput}>
                <div>Javascript is awesome. You better start learning it.</div>
            </template>
        </div>
    </lightning-card>
</template>
```



<strong>Note</strong>: In Spring 23 Salesforce has announced the new improved Conditional Directives lwc:if, lwc:elseif and lwc:else. Old directives will not go away anywhere soon but in future they will be depreciated by the salesforce



## Template Looping (Render Lists)

To render a list of items, use `for:each` directive or the `iterator` directive to iterate over an array. Add the directive to a nested <code>&lt;</code>`template`<code>&gt;</code> tag that encloses the HTML elements you want to repeat.

The `iterator` directive has `first` and `last` properties that let you apply special behaviors to the first and last items in an array.

Regardless of which directive you use, you must use a `key` directive to assign a unique ID to each item. When a list changes, the framework uses the `key` to re-render only the item that changed. The `key` in the template is used for performance optimization and isn’t reflected in the DOM at run time.

## `for:each`

When using the `for:each` directive, use `for:item="`*`currentItem`*`"` to access the current item. This example doesn’t use it, but to access the current item’s index, use `for:index="`*`index`*`"`.

To assign a key to the first element in the nested template, use the `key={`*`uniqueId`*`}` directive.

This example iterates over an array called `contacts`, which is defined in the component’s JavaScript class.



```html
<!-- helloForEach.html -->
<template>
    <lightning-card title="HelloForEach" icon-name="custom:custom14">
        <ul class="slds-m-around_medium">
            <template for:each={contacts} for:item="contact">
                <li key={contact.Id}>
                    {contact.Name}, {contact.Title}
                </li>
            </template>
        </ul>
    </lightning-card>
</template>
```

```javascript
// helloForEach.js
import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}
```



## `iterator`

To apply a special behavior to the first or last item in a list, use the `iterator` directive, `iterator:iteratorName={array}`. Use the `iterator` directive on a `template` tag.

Use `iteratorName` to access these properties:

- `value`—The value of the item in the list. Use this property to access the properties of the array. For example, `iteratorName.value.propertyName`.

- `index`—The index of the item in the list.

- `first`—A boolean value indicating whether this item is the first item in the list.

- `last`—A boolean value indicating whether this item is the last item in the list.

This sample code uses the same array as the previous example. To apply special rendering to the first and last items in the list, the code uses the `first` and `last` properties with the `lwc:if` directive.

If the item is first in the list, the <code>&lt;</code>`div`<code>&gt;</code> tag renders with the styling defined in the CSS `list-first` class. If the item is last in the list, the <code>&lt;</code>`div`<code>&gt;</code> tag renders with the styling defined in the CSS `list-last` class.



```html
<!-- helloIterator.html -->
<template>
    <lightning-card title="HelloIterator" icon-name="custom:custom14">
        <ul class="slds-m-around_medium">
            <template iterator:it={contacts}>
                <li key={it.value.Id}>
                    <div lwc:if={it.first} class="list-first"></div>
                    {it.value.Name}, {it.value.Title}
                    <div lwc:if={it.last} class="list-last"></div>
                </li>
            </template>
        </ul>
    </lightning-card>
</template>
```

```css
<!-- helloIterator.css -->

.list-first {
    border-top: 1px solid black;
    padding-top: 5px;
}

.list-last {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
}
```



## Component Composition

You can add components within the body of another component. Composition enables you to build complex components from simpler building-block components.

It’s useful to compose apps and components with a set of smaller components to make the code more reusable and maintainable. The `lightning` namespace contains many base components, such as `lightning-button`, that you can use to build your components.

Let’s look at a simple app composed of components. The markup is contrived because we want to illustrate the concepts of *owner* and *container*. In a real app, the number of `c-todo-item` instances would be variable and populated dynamically in a `for:each` loop.



```html
<!-- todoApp.html -->
<template>
    <c-todo-wrapper>
        <c-todo-item item-name="Milk"></c-todo-item>
        <c-todo-item item-name="Bread"></c-todo-item>
    </c-todowrapper>
<template>
```



### **Owner**

The owner is the component that owns the template. In this example, the owner is the `c-todo-app` component. The owner controls all the composed components that it contains. The owner can:

- Set public properties on composed components

- Call methods on composed components

- Listen for any events fired by the composed components



### **Container**

A container contains other components but itself is contained within the owner component. In this example, `c-todo-wrapper` is a container. A container is less powerful than the owner. A container can:

- Read, but not change, public properties in contained components

- Call methods on composed components

- Listen for some, but not necessarily all, events bubbled up by components that it contains.



### **Parent and child**

When a component contains another component, which, in turn, can contain other components, we have a containment hierarchy. In the documentation, we sometimes talk about parent and child components. A parent component contains a child component. A parent component can be the owner or a container.



<strong>Note</strong>: You can keep <strong>isExposed </strong>property of the child component <strong>false </strong>in xml file. They will be visible inside parent component.



To communicate down the containment hierarchy, an owner can set a property on a child component. An attribute in HTML turns into a property assignment in JavaScript.

Let’s look at how the owner, `c-todo-app`, sets public properties on the two instances of `c-todo-item`. Look at todoItem.js. The `@api` decorator exposes the `itemName` field as a public property.

```javascript
// todoItem.js
import { LightningElement, api } from 'lwc';
export default class TodoItem extends LightningElement {
    @api itemName;
}
```

```html
<!-- todoApp.html -->
<template>
    <c-todo-item item-name="Milk"></c-todo-item>
    <c-todo-item item-name="Bread"></c-todo-item>
</template>
```



Property names in JavaScript are in camel case while HTML attribute names are in kebab case (dash-separated) to match HTML standards. In `todoApp.html`, the `item-name` attribute in markup maps to the `itemName` JavaScript property of `c-todo-item`.



<strong>Note</strong>: This example uses static values of <code>Milk</code> and <code>Bread</code>, but a real-world component would typically use a <code>for:each</code> iteration over a collection computed in the owner’s JavaScript file, <code>todoApp</code>`.`<code>js</code>.



## Shadow DOM

Shadow DOM is a tool used to build component-based apps and websites. Shadow DOM comes in small pieces, and it doesn’t represent the whole Document Object Model. We can see it as a subtree or as a separate DOM for an element. Shadow DOM can be imaged like bricks from which the DOM is created.

The main difference between DOM and Shadow DOM is how it’s created and how it behaves. Normally DOM nodes which we create are placed inside other elements, like in the tree we saw before.

In the case of Shadow DOM, we create a scoped tree, which is connected to the element but separated from the children elements. It’s called shadow tree and the element it’s attached to is called shadow host. And here we come to a great advantage of the Shadow DOM, everything which we will add to Shadow DOM is local, even styles.

Let’s explain why Shadow DOM is so useful and what issues it solves. First of all, it isolates the DOM, so the DOM of the component is a separate element which won’t appear in a global DOM. Another issue it helps with is scoping of the CSS, which means styles created inside the single Shadow DOM element are isolated and stays in the scope of that Shadow DOM. It simplifies styling a lot as we don’t have to worry a lot about naming space and we can use simple selectors and class names.

Also, we can think of the application as it is built from chunks (it is based on the components actually) and not as a one massive, global object. Shadow DOM can affect the performance of the application. As said at the beginning of the article, there are a lot of performance issues while we want to manipulate the DOM, because every change will make a re-rendering of the whole object. In the case of Shadow DOM browser knows which part should be updated.

Shadow DOM is a standard that encapsulates the internal document object model (DOM) structure of a web component. Encapsulating the DOM gives developers the ability to share a component and protect the component from being manipulated by arbitrary HTML, CSS, and JavaScript. The internal DOM structure is called the shadow tree. The shadow tree affects how you work with CSS, events, and the DOM.

### Advantages of Shadow DOM

**Encapsulation**: One of the main advantages of Shadow DOM is that it allows developers to encapsulate the styles and behavior of a custom element, preventing it from being affected by styles and scripts outside of its DOM tree. This makes it easier to maintain and reuse custom elements across different parts of the web application.

**Improved Styling**: With Shadow DOM, developers can use CSS to style their custom elements, without affecting the rest of the document. This means that they can use class names and selectors that would otherwise conflict with styles in the rest of the document.

**Improved Performance**: Shadow DOM can also improve the performance of web applications by reducing the amount of CSS and JavaScript that needs to be loaded and executed. This is because styles and scripts can be defined within the Shadow DOM tree, rather than in the main document tree.

Since not all browsers implement Shadow DOM, LWC uses a synthetic shadow polyfill for Lightning Experience and Experience Cloud. A polyfill is code that allows a feature to work in a web browser.

To understand the shadow tree, let’s look at some markup. This markup contains two Lightning web components: <code>c-todo-app</code> and <code>c-todo-item</code>. The <code>#shadow</code><code>-</code><code>root</code>¨NBSP;document fragment defines the boundary between the DOM and the shadow tree. Elements below the shadow root are in the shadow tree.



```html
<c-todo-app>
  #shadow-root
    <div>
        <p>Your To Do List</p>
    </div>
    <c-todo-item>
      #shadow-root
        <div>
            <p>Go to the store</p>
        </div>
    </c-todo-item>
</c-todo-app>
```



Let’s look at how to work with the shadow tree in each of these areas.

- **CSS: **styles defined in a parent component don’t leak into a child. In our example, a `p` style defined in the todoApp.css style sheet doesn’t style the `p` element in the `c-todo-item` component, because the styles don’t reach into the shadow tree.

- **Events: **To prevent exposing a component’s internal details, if an event bubbles up and crosses the shadow boundary, some property values change to match the scope of the listener.

- **Access Elements: **Elements in a shadow tree aren’t accessible via traditional DOM querying methods. Code can’t use `document` or `document`<code>.</code>`body` to access the shadow tree of a Lightning web component. For example, code can’t call `document`<code>.</code><code>querySelector</code><code>()</code> to select nodes in a Lightning web component’s shadow tree. To access its own shadow tree, a Lightning web component calls <code>this</code><code>.</code>`template`<code>.</code><code>querySelector</code><code>()</code>.

- **Access Slots: **A slot is a placeholder for markup that a parent component passes into a component’s body. DOM elements that are passed to a component via slots aren’t owned by the component and aren’t in the component’s shadow tree. To access DOM elements passed via slots, call <code>this</code><code>.</code><code>querySelector</code><code>()</code>. The component doesn't own these elements, so you don’t use `template`.



## Accessing Elements in the Component

To access elements rendered by a component with standard DOM APIs, use <code>querySelector</code><code>()</code> with <code>this</code><code>.</code>`template` or <code>this</code>. To locate elements in the DOM without a selector, use refs.

## querySelector()

The standard way to access elements in the DOM is to use <code>querySelector</code><code>()</code>. To locate shadow DOM nodes, use <code>querySelector</code><code>()</code> or <code>querySelectorAll</code><code>()</code> on <code>this</code><code>.</code>`template`. For light DOM nodes, use one of those methods on <code>this</code>.

```javascript
// shadow DOM
this.template.querySelector('div');

// light DOM
this.querySelector('div');
```



<strong>Note</strong>: You can also use <code>element</code><code>.</code><code>template</code><code>.</code><code>querySelector</code>.



Use these methods to look for the elements that your component rendered.

- The order of elements is not guaranteed.

- Elements not rendered to the DOM aren’t returned in the `querySelector` result.

- Don’t use ID selectors with `querySelector`. The IDs that you define in HTML templates may be transformed into globally unique values when the template is rendered. If you use an ID selector in JavaScript, it won’t match the transformed ID.

- For light DOM components, <code>this</code><code>.</code><code>querySelector</code><code>()</code> searches through elements outside of the immediate template, such as light DOM children. Use a more specific selector to narrow the scope of the method.



```html
<!-- example.html -->
<template>
   <div>First <slot name="task1">Task 1</slot></div>
   <div>Second <slot name="task2">Task 2</slot></div>
</template>
```

```javascript
// example.js
import { LightningElement } from 'lwc';

export default class Example extends LightningElement {
    renderedCallback() {
        this.template.querySelector('div'); // <div>First</div>
        this.template.querySelector('span'); // null
        this.template.querySelectorAll('div'); // [<div>First</div>, <div>Second</div>]
    }
}
```



**Note**: Don’t use the <code>window</code> or <code>document</code> global properties to query for DOM elements. See [DOM Access Containment](<https://developer.salesforce.com/docs/component-library/documentation/en/lwc/security_locker_dom.html>). Also, we don’t recommend using JavaScript to manipulate the DOM. It's better to use the Lightning Web Components [HTML directives](<https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_directives.html>) to write declarative code.



**`lwc:dom="manual"`**

Add this directive to a native HTML element to call <code>appendChild</code><code>()</code> on the element from the owner’s JavaScript class and preserve styling.

If a call to <code>appendChild</code><code>()</code> manipulates the DOM, styling isn’t applied to the appended element. Using JavaScript to manipulate the DOM isn’t recommended when programming Lightning web components, but some third-party JavaScript libraries require it.



```html
<!-- example.html -->
<template>
  <div class="testClass" lwc:dom="manual"> <!-- comment here --></div>
</template>
```

```javascript
// example.js
import { LightningElement } from 'lwc';

export default class Example extends LightningElement {
        const div = this.template.querySelector('.testClass');
        div.innerHTML = '<p>Hello World.</p>'
}
```





## Styling in LWC

There are several ways of styling LWC components:

1. Inline Styling

2. External Styling

3. Using Lightning Design System

4. Using Shared CSS in LWC

5. Dynamic Styling

6. Using Third-party CSS library

7. Applying CSS across shadow DOM



**I. Inline Styling**

```html
<!-- Inline styling -->
<template>
  <div style="color:red; font-size:20px;">Test content</div>
</template>
```



**II. External Styling**

```css
/* example.css */

.testClass {
	color:red;
 	font-size:20px;
}
```

```html
<!-- example.html-->

<template>
  <div class="testClass">Test content</div>
</template>
```



**Note**: Salesforce does not recommend using #id selector when targeting elements. Instead use element, classes, pseudo classes.



**III. Using Lightning Design System**

Salesforce Lightning Design System (SLDS) is a CSS framework that provides a look and feel that’s consistent with Lightning Experience. Use SLDS styles to give your custom Lightning web components a UI that is consistent with Salesforce, without having to reverse-engineer our styles. And best of all, it just works with Lightning components running in Lightning Experience and in the Salesforce mobile application.

Use Base Lightning Components

Base components in the `lightning` namespace use [Lightning Design System](<https://www.lightningdesignsystem.com/>) styling. Many base components are built from SLDS component blueprints. A blueprint is framework-agnostic, accessible HTML and CSS. A few examples include the `lightning-accordion`, `lightning-card`, and `lightning-tree` components.

Base components provide a `class` attribute so that you can add an SLDS utility class or custom class to the outer elements of the components. For example, to apply a margin utility class to the `lightning-button` base component, use `class=`<code>"slds-m-left_medium"</code>. Here it’s used to increase the margin between buttons.



```html
<template>
    <lightning-button variant="brand" label="Cancel" title="cancel" onclick={handleCancel} class="slds-m-left_medium">
    </lightning-button>
</template>
```



**Note**: All the classes from SLDS library starts wits 'slds' keyword. And you do not need to import this library. It is already build-in. With SLDS we can also use predefined colors etc. using Design Tokens.



Design tokens are named entities that store visual design attributes, such as margins and spacing values, font sizes and families, or hex values for colors.

Use CSS variables in a Lightning web component to access Lightning Design System design tokens. Lightning web components can use any Lightning Design System design token marked Global Access.



```css
/* example.css */

.testClass {
	color:var(--lwc-brandAccessible);
  	background:var(--lwc-colorBackgroundAlt);
  	margin-right: var(--lwc-spacingSmall);
}
```

```html
<!-- example.html-->

<template>
  <div class="testClass">Test content</div>
</template>
```



**IV. Using Shared CSS in LWC **

To create a shared CSS file all we need to do is create a LWC component without html and js file. Component needs to have only css and xml config file. Then we can import this css file across our LWC components css files.



```css
/* profile.css */

@import 'c/cssLibrary';

.profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
}
```

```css
/* cssLibrary.css */

@font-face {
    font-family: 'CustomFont';
    src: url('/resource/PoppinsRegular');
}

.title {
    font-family: 'CustomFont';
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 20px;
}
```



**V. Dynamic Styling**

Lightning Web Component doesn’t allow computed expressions in html markup but there are ways to do so.

```html
<!-- test.html-->

<template>
    <!--className is defined as getter in js file-->
    <div class={className}>Dynamic Style</div>
    <lightning-input type="checkbox" label="Change Style" name="input1" value={changeStyle} onchange={handleChange}>
    </lightning-input>
</template>
```

```javascript
// test.js

import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
	@track changeStyle = false;
	get className(){
		//if changeStle is true, getter will return class1 else class2
		return this.changeStyle ? 'class1': 'class2';
	}
	handleChange(event){
		this.changeStyle = event.target.checked;
	}
}
```

```css
/* test.css */

.class1 {
    height:29px;
    background: red;
}
.class2 {
    height:29px;
    background: blue;
}
```



**VI. Styling across shadow DOM**

This is a rare scenario but we may need to update salesforce base components. In that case we can do that using Javascript.



```html
<template>
    <lightning-card title="CSS across Shadow DOM">
        <div class="slds-var-m-around_medium">
            <lightning-button label="testing" title="testing" class="btn">	
            </lightning-button>
        </div>
    </lightning-card>
</template>
```

```javascript
import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false
    renderedCallback(){
        if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-shadow-dom-styling .slds-button{
            background: red;
            color: white;
        } `
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true
    }
}
```





























