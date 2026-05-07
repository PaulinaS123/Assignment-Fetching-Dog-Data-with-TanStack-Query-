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
git clone https://github.com/PaulinaS123/dog-query-app.git
cd dog-query-app
