#ReactJS Best Practices

###STATE
*The state should be avoided as much as possible*. It is good practice to centralize the state and pass it down the component tree as props. Whenever you have group of components that needs the same data, you should set container element around them that will hold the state. **Flux** pattern is a nice way of handling the state in React apps.

###PROP TYPES
*The propTypes should always be defined*. This will help you track all props in your app and it will also be useful to any developers working on the same project.

###RENDER
*Most of the app's logic should be moved inside render method. You should try to minimize logic in component lifecycle methods and move that logic in render method.* The less state and props you are using, the cleaner your code will be. You should always make your state as simple as possible. If you need to calculate something from state or props you can do it inside render method.

###COMPOSITION 
*React team suggests to use single responsibility principle.* This means that one component should only be responsible for one functionality. If some of your components have with more than one functionality, you should refactor and create new component for every functionality.

###HIGHER ORDER COMPONENTS (HOC) 
Former React versions were offering mixins for handling reusable functionalities. *Since mixins are now deprecated, one of the solutions is to use higher order components.* You can see example of HOC in our next chapter.

