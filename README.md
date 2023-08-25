# React Getting Started with Eduardo ⚛️🚀🧔🏻‍♂️

Table of contents:

1. [Rules](#rules)
1. [Definitions](#definitions)
1. [Project structure](#project-structure)
1. [Anatomy of a React .jsx component](#anatomy-of-a-react-jsx-component)

## Rules

1. Cleanup files by deleting stuff you don't use.
1. Rename JavaScript files that are React components from .js to .jsx so we can visually identify them by their blue icon.
1. 🆕 Use the same name for both the file and the component name.
1. Have **one function** per .jsx file and make one line export (`export default function Component(){}`)
1. In React do not work with normal variables **properties** to update infomration on the screen. Utilize **state** instead.
1. 🆕 React components should be around 50 lines of code. If you have more refactor the render into multiple sub components and extract long methods into separate Javascript files.
1. 🆕To manipulate **state** that came from a parent component, you also need to pass the setter. Ideally a more isolate function to avoid making everything "public".

## Definitions:

1. **Event listener:** To act uppon an user interacting with a button, formulary, checkbox, etc.
1. **Props**: Abreviation for properties. In React is the way to pass data from parent to child.
1. **State:** A fancy term to say to the React framework, that a piece data (variable, components, json, etc) should update the screen.
1. **Key:**: A special "props" that allow React to keep track of the dynamic components you create when using `.map()`. Otherwise the state will break. Example: <TodoItem key={item.id} item={item}>

## Project structure

- `node_modules/`: Has all the project dependencies.
- `public/`: Has the index.html file the browser will read once everything is compiled.
- `build/`: Has the compiled files by mixing the contents from `public/` and `src/`.
- `src/`: The folder you will use to write your frontend code.
- `package-lock.json`: A backup of `package.json` with checksums.
- `package.json`: List all the dependencies and Node commands the project has.
- `README.md`: This file.

## Anatomy of a React .jsx component

1. **Node modules:** Imports from the `node_modules/` folder.
1. **Project files:** Imports from the `src/` folder.
1. **Global state:** Data that needs to be updated on the browser that exist globally in the project.
1. **Local state:** Data that needs to be updated on the browser that exist only inside a Functional Component (FC)
1. **Properties:** Data that does not be updated on the web browser. For internal use only.
1. **Methods:** The functions inside the Functional Component (FC). Use primarily for handling the **events** that ocurred in the render.
1. **Components:** Components that are created dynamically inside another component. Ideal to show data that comes from an API.
1. **Render:** The User Interface (UI) sent to display on the web browser. Equivalent to the View mixed with Controller in the MCV design pattern.

(separate file)
