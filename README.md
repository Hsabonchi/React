### React
*** cmnd +d for milti-cursor editing

## Create React App
- You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine.  
To create a project, run.   
`npx create-react-app my-app
cd my-app
npm start`
<img src="Images/Createapp.png" height="75px"/>


---

### Install and import bootsrap in React
  - npm i bootsrap
  - Import it into `import 'bootstrap/dist/css/bootstrap.css' ` into index.js file

---
#### Component
To define a React component class, you need to do the followings.

  - Extend React.Component using shortcut `imrc`.
  - You must define a method in a React.Component subclass is called render() 
      - The `render()` method is the only required method in a class component.
      - When `render()` called, it should examine this.props and this.state.
      - if you need to interact with the browser, perform your work in componentDidMount() 
   - `constructor(props)`
      Typically, in React constructors are only used for two purposes:
        - Initializing local state by assigning an object to this.state.
        - Binding event handler methods to an instance.
        - You should not call `setState()` in the constructor()


App.js is a component. file that holds all the logic in one file.     
- create React from React.  
- create function. 
- export it. 
- ReactDom.render `ReactDOM.render(<Counter />,document.getElementById('root'));`.

<h5> <div id="root"></div> container for our react Application </h5>

- `imrc` short for import react component on the VS editor
- `cc` short for create class.

#### state
  
- state is a property for React component(data local or private to component).
- object that contains all the component need.

#### props
- props includes data that we give to a component.
- read only.
- To initialize the state

#### style
- inLine  `<span  style={{fontSize:20}}`


