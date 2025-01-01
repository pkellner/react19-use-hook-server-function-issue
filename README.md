# Problem with React 19 use hook and server functions.

Getting the following error when trying to run the app at the route '/r19-client-side-and-server-side-function':

```
Can't perform a React state update on a component that hasn't mounted yet. 
This indicates that you have a side-effect in your render function that 
asynchronously later calls tries to update the component. 
Move this work to useEffect instead.
```

I was hoping to not have to use useEffect for this (or useState) 
