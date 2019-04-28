The focus was strictly on the component architecture and not the actual design itself as I imagine this to be used inside a larger app of some sort.

This assumes that data will be passed in and already available. In a larger app other components would be responsible for fetching and maintaining the app data.


## Available Scripts

### `yarn`
### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Implementation Details
1. Using React Hooks https://reactjs.org/docs/hooks-intro.html
2. All components are placed into the "Overview" folder.
3. Setup to compile sass because it's much more extensible and maintainable...plus plain CSS is painful.
4. Added Tachyons CSS toolkit because it's great for quick prototyping.