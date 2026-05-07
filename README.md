# 🐶 Dog Data App (TanStack Query)

## 📌 Overview
This project is a React application that uses **TanStack Query** to fetch, cache, and manage asynchronous data from the Dog API.

The app demonstrates how to:
- Fetch and display dog breeds
- Retrieve detailed information for a selected breed
- Fetch multiple dog facts
- Fetch and display dog groups
- Handle loading, error, and success states

---

## 🎯 Features

### ✅ Fetch Dog Breeds
- Retrieves a list of dog breeds from the API
- Displays them in a scrollable list
- Users can click a breed to view details

### ✅ Breed Details (Dynamic)
- Fetches data for a selected breed using its ID
- Displays name and description
- Updates dynamically when user selects a different breed

### ✅ Dog Facts
- Fetches multiple random dog facts (`limit=5`)
- Includes a **Refresh Facts** button to refetch data

### ✅ Dog Groups
- Fetches and displays different dog groups

### ✅ State Handling
The app properly handles:
- `isPending` → Loading states
- `isError` → Error handling
- `isSuccess` → Data rendering

---

## 🛠️ Technologies Used

- React (Vite)
- TanStack Query
- JavaScript (Fetch API)
- CSS

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/PaulinaS123/Assignment-Fetching-Dog-Data-with-TanStack-Query.git
cd dog-query-app
```
2. Install dependencies
```bash   
npm install
```
4. Install TanStack Query
```bash 
npm install @tanstack/react-query
```
6. Run the app
```bash 
npm run dev
```
Then open:
http://localhost:5173

-----

## Test Cases
 ### Normal Cases
- Dog breeds load and display correctly
- Clicking a breed shows correct details
- Dog facts and groups display properly
  ### Edge Cases
- Turn off internet → error message appears
- No breed selected → prompt message shown
- Slow network → loading indicators appear

### 🧠 How It Works
TanStack Query Usage

Each API call is handled using useQuery:
```bash 
useQuery({
  queryKey: ["breeds"],
  queryFn: fetchBreeds,
});
```
Conditional Fetching

The breed details query only runs when a breed is selected:
```bash 
enabled: !!selectedBreedId
```
State Management

React state is used to track the selected breed:
```
const [selectedBreedId, setSelectedBreedId] = useState(null);
```
Video Demonstration: 


