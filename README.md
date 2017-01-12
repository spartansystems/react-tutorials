# Lesson 1: React Templating Basics

Welcome to our first lesson where we'll actually be writing some React! React is
a very unique and interesting tool for creating components for the front-ends of our web
applications. There are a few differences between templating in React and what
we are typically used to when using standard HTML.

First off, all of our React templating will actually be written in JavaScript
files, meaning, using JavaScript! A very basic React template will look
something like this, eg in `SiteHeader.js`:

```javascript
import React from 'react'

function SiteHeader () {
  return (
    <div>
      <h2>Site Title</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Conctct</a></li>
      </ul>
    </div>
  )
}
```

If you're like me, you might have a few questions after a quick glance at that
code snippet.

_Are we writing our templates inside of JavaScript functions?_

Yes! All of our templates using React will be inside a JavaScript function. Each
function's return statement, surrounded by parenthesis, will provide our
template. Since we have imported React, and due to its functionality
behind-the-scenes, our function then becomes a **React Component**. According to
the [React Docs](https://facebook.github.io/react/docs/react-component.html)

> Components let you split the UI into independent, reusable pieces, and think
> about each piece in isolation.

_Is that just HTML in there?_

Also yes! Well, kind of... React uses a custom syntax called JSX, which you can
read up about [here](https://facebook.github.io/react/docs/jsx-in-depth.html).
The deal with JSX is this: it looks just like HTML in its simplest form, but you
can think of it more
as [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML). The cool thing
about JSX is that we can craft it using logic, which makes it very, _very_,
powerful. Additionally, we can compose components inside of other components,
meaning the templates that we write are 100% reusable.

Here's a little teaser: say we want to use the SiteHeader that we defined above
in a basic Layout. Let's create a `Layout` component for our home page in the
file named `HomeLayout.js`:

```javascript
import React from 'react'
import SiteHeader from 'components/SiteHeader'

function HomeLayout () {
  return (
    <div className="home">
      <SiteHeader />
      <h1>Home page</h1>
      <p>Welcome and enjoy your stay!</p>
    </div>
  )
}
```

Now looking at that, can you tell what were doing?

First we are importing the header, (which means we're getting the value of that
file's export, and assigning it to the local variable `SiteHeader`,) and then we
are creating the `Layout` component for our home page. This layout has a `div`
containing the contents for the page. The first item we render is the site
header (isn't that nice?) and then we also include some content for that page
specifically.

_What's with the className property on those elements?_

The authors of React opted to use `className` for the JSX property name for
declaring CSS class selectors for the eventual HTML element. There are pretty
good reasons behind this, but they're certainly outside the context of this
conversation. Just know that if you want to add a class to an element in React,
you'll have to specify it using `className` instead of `class`. That's it!


## Templating with Stateless Components

Ok, so you've seen a component, so what? That example was actually pretty
boring. The power of these components actually comes when you start adding
properties to them, and composing them. Let's take a look at a `UserProfileCard`
component that we would often see in a list view on LinkedIn or some other
socially-leaning site. In `BillsProfileCard.js`:

```javascript
import React from 'react'

function BillsProfileCard () {
  return (
    <section>
      <img src="http://placekitten.com/200/300" alt='looking good!'/>
      <h3>Bill the developer</h3>
      <p>Bill is a software engineer from chattanooga, tn....</p>
    </section>
  )
}
```

Ok, that's neat, now we can drop Bill's profile in anywhere that we like, but
what if we wanted to create a card for, say, Jeff? Now this is where it starts to
get cool. Let's refactor `BillsProfileCard` to be a bit more reusable. Here we are
creating a `ProfileCard` in `ProfileCard.js`.

```javascript
import React from 'react'

function ProfileCard (props) {
  return (
    <section>
      <img src={props.imageSrc} alt={props.altText}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </section>
  )
}
```

Now we have something a bit more reusable. Notice that the function takes in one
argument here, `props`, and then uses its value inside of the JSX. We can
access variables inside of the JSX template using "curly braces" `{}`, as
demonstrated above.

Now, lets create a list where we are rendering both Bill and Jeff's profiles in
the same view, in `SpartanEmployees.js`:

```javascript

import React from 'react'
import ProfileCard from 'components/ProfileCard'

function SpartanEmployees () {
  return (
    <section>
      <h1>Spartan Employees</h1>
      <ul className="employees">
        <li>
          <ProfileCard
            name="Bill"
            altText="super developer"
            imageSrc="http://placekitten.com/200/300"
            description="likes to code"
          />
        </li>
        <li>
          <ProfileCard
            name="Jeff"
            altText="a robot"
            imageSrc="http://placekitten.com/200/300"
            description="likes machine learning"
          />
        </li>
      </ul>
    </section>
  )
}
```

Notice that we are specifying property values for each ProfileCard: `name`,
`altText`, `imageSrc`, and `description`. Custom properties, ie properties other
than HTML attributes or DOM properties like `id`, `alt`, or `title`, are passed
into the ProfileCard component as a JavaScript object via the argument `props`.
Now we can create ProfileCards for everyone in our company super easily!

Ok, one last trick to make this a bit more readable. We can create individual
objects to pass into each component as props that define all the properties for
a given `ProfileCard`. Let's do that in the file named `SpartanEmployees.js`:

```javascript
import React from 'react'
import ProfileCard from 'components/ProfileCard'

const billProps = {
  name: 'Bill',
  altText: 'super developer',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes to code'
}

const jeffProps = {
  name: 'Jeff',
  altText: 'a robot',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes machine learning'
}


function SpartanEmployees () {
  return (
    <section>
      <h1>Spartan Employees</h1>
      <ul className="employees">
        <li><ProfileCard {...billProps} /></li>
        <li><ProfileCard {...jeffProps} /></li>
      </ul>
    </section>
  )
}
```

We created two variables here, `billProps` and `jeffProps`, which refer to
objects, and passed each one into the `ProfileCard` using the following syntax:
`{...billProps}` and `{...jeffProps}`. What this syntax does is pass all the
properties from that object down into the component as the properties that it is
expecting. When a programming language makes otherwise tedious operations like
this easy via syntax, it's called "syntactic sugar".

Remember how we defined the `ProfileCard` component?

```javascript
function ProfileCard (props) {
  // ...snipped...
}
```

It's just a function that takes in an object as props. Although React does a
little magic here with JSX, you can treat the following three functions as
equivalent in behavior:

```javascript
const billProps = {
  name: 'Bill',
  altText: 'super developer',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes to code'
}

function RenderProfile() {
  return (
    <div>
      <ProfileCard
        name={billProps.name}
        altText={billProps.altText}
        imageSrc={billProps.imageSrc}
        description={billProps.description}
      />
    </div>
    )
}

function RenderProfile() {
  return (
    <div>
      <ProfileCard {...billProps} />
    </div>
  )
}

function RenderProfile() {
  return (
    <div>
      {ProfileCard(billProps)}
    </div>
  )
}
```

where in that last example we are just passing the value of `billProps` to the
function `ProfileCard`. Yes, the components we are using are in fact just
functions! For future reference, either the first or second method is preferred,
the last method was merely illustrative.

Ok, cool. Enough already? I know. Let's get into writing and running some of our
own code :-)

## Storybook

For the remainder of this tutorial, we'll be using storybook to visualize our
components. Storybook is a nice little utility that allows us to render react
components and change their properties through a gui. [Check out the
docs](https://getstorybook.io/) and the
[Repo](https://github.com/storybooks/react-storybook)

In order to start up the storybook server, run `npm run storybook ` and then
visit [`http://localhost:9001`](http://localhost:9001).

You'll see a button that we have already created for you that is also styled
using [Milligram](https://milligram.github.io/) by default. Milligram isn't a
standard for us by any means, I've just included it here to get us rolling...

Now, take a look at the Button Component in storybook. Below the button you will
see a section with two tabs "Action Logger" and "Knobs"; this is where storybook
starts to get fun. Click the button and you'll see events being logged into the
action logger. Now switch to the Knobs tab and start changing around some of the
values. They should immediately update the state of that component,
demonstrating the different parameters that are available for change on that
component.

Curious about where that code is? Take a look at `components/Button/stories.js`.

## Destructuring Assignment - [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Taking a look inside the Button component, there are a few more things going on
than what we discussed earlier. First off, notice how we are defining the Button

```javascript
function Button ({
  theme = 'default',
  text,
  handleClick = () => {}
}) {
  // omitted
}
```
This syntax inside the parenthesis might seem a bit strange, but its really for
your convenience. Typically, we would define the button taking only one
argument, `props`

```javascript
function Button(props) {

  // the difference here is that inside of this Component, we will have to
  // reference each of the properties through the prop argument that we pased in
  // so our return statement will look like this:
  return (
    <button
      onClick={props.handleClick}
      className={AVAILABLE_THEMES[props.theme]}
    >
      {props.text}
    </button>
  )

}

// in both cases, the button is used the same

const buttonProps = {
  theme: 'default',
  text: 'please click me!'
  handleClick: () => console.log('i was clicked!')
}

// and used like this

<Button {...buttonProps} />
```

Typically, we will use what is called [Destructuring
Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) when defining our component functions. This will allow us to
1 - access our properties without having to 'reach through' props
2 - provide easy to read default values inline in the function definition

Lets break this down just one step further, if we have an object foo defined
like so:

```javascript
const foo = {
  bar: 1,
  baz: 2
}
```

And we want to assign the values `bar` and `baz` to local variables, we can use
the following shorthand:

```javascript
const { bar, baz } = foo

console.log(bar) // => 1
console.log(baz) // => 2
```

This is exactly what we are doing in our new style function definition, with
only one difference. We are setting default values (if we want) when they are
not already provided.

So in our silly example here, if we want, we can provide default values for
properties that might not be defined in the object we are 'destructuring'. Lets
set a property `bong` to equal `bubbles` in that same line.

```javascript
const { bar, baz, bong = 'bubbles' } = foo

console.log(bar) // => 1
console.log(baz) // => 2
console.log(bong) // => 'bubbles'
```

Clear as mud? Lets move on!



## Testing With Enzyme
