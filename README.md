## Hurtigruten frontend assignment

This project allows Hurtigruten to asses potential frontend candidates with real, working code.

You will find the exercises in the [exercises.md](./exercises.md) file.

# Setup
The solution can be tested by running the following commands in order from the repository directory:
- `npm install`
- `npm run server`
- `npm start`

From there the solution can be accessed from `localhost:3000` assuming that port is not occupied.

# Solution: Krister P. Emanuelsen
The solution should properly cover all 5 requirements stated in `exercises.md`

I tried making the visual aspects of the solution match the provided images as closely as possible.

> Note: The API call has an `isLoading` state that is used to show a simple "loading" text as the API is fetching data. However the client might receive the data too fast to spend much time on screen.

### Extra Libraries Installed
- `Lodash` library for debouncing in the performance task
- `Styled Components` library for styling components in the same files

All of my changes in this soluction can be found in the following files and directories:

- `src/components/*`
- `src/models/*`
- `src/App.tsx`
- `package.json`

> Access Control has been added to the server to avoid same-origin issues on localhost. 

>No other significant changes made on the server side.

## Future improvements
The solution allows you to sort the search results by **clicking on the headers of the table**.

- It's not very clear due to the lack of any icons, but as a future improvement I would want to add sorting icons to the table to improve that clarity.

- Responsiveness: I designed this solution with a **web-first** approach. So it is only intended to be displayed on a horizontal device. With more time I would consider media queries to allow the page to scale to mobile formats as well.

---

Thank you for letting me participate in this assignment! :)