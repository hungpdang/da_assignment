This is a Digital Avenues Assesment Project, using React Native to build a list of images with description,
using the [**JSONPlaceholder**](https://jsonplaceholder.typicode.com/photos) api

# What have been done ?

- ListScreen: Display list of data, each time will display only 5 items, when user scroll near the bottom, new data will be loaded with persist previous data. Search bar will based on the title
- DetailScreen: Display the selected item when clicked

# Implementation

- FlatList with Load More functionality, Pull To Refresh, Search Bar, Handle Empty Component
- Each item has a progressive loading animation when data is being loaded
- Fetch Data: using React-Query for caching fetch data. Using axios to make API Request
- State management: Using Context API integrating with react-query to store the data globally.
- Styling: Flexbox, Dimensions, Padding
- Navigation: React-Navigation v6
- Build: Android APK file under the name: DA_assignment_android.apk. Cannot build iOS since I do not have the apple developer account on my own, cannot generate certificate and provisioning profile for app.
